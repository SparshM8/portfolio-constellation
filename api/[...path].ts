import { MongoClient, type Collection } from "mongodb";

type DesignVoteDocument = {
  visitorKey: string;
  designSlug: string;
  createdAt: Date;
  updatedAt: Date;
};

type VoteSummary = {
  totals: Record<string, number>;
  selectedDesign: string | null;
};

type TrpcEnvelope = { json?: unknown };
type VercelRequest = { body?: unknown; method?: string; url?: string };
type VercelResponse = {
  end: (body?: string) => void;
  setHeader: (name: string, value: string) => void;
  statusCode: number;
};

const DESIGN_SLUGS = new Set([
  "kinetic",
  "architect",
  "void",
  "artifact",
  "mono",
  "neon",
  "editorial",
  "chrome",
]);

let mongoClient: Promise<MongoClient> | null = null;
let indexesReady: Promise<void> | null = null;

function parseJson(value: unknown) {
  if (typeof value !== "string") return value;
  try {
    return JSON.parse(value) as unknown;
  } catch {
    return undefined;
  }
}

function unwrapEnvelope(value: unknown) {
  if (value && typeof value === "object" && "json" in value) {
    return (value as TrpcEnvelope).json;
  }
  return value;
}

/** Extracts tRPC batch procedure names and transformed inputs without importing the local server graph. */
export function extractTrpcRequest(request: VercelRequest) {
  const url = new URL(request.url ?? "/", "https://portfolio-constellation.local");
  const rewritePath = url.searchParams.get("path");
  const originalPath = rewritePath ?? url.pathname.replace(/^\/api\/(?:trpc\/)?/, "");
  const procedurePath = originalPath.replace(/^trpc\//, "").replace(/^\/+/, "");
  const procedures = procedurePath.split(",").filter(Boolean);
  const batch = url.searchParams.get("batch") === "1";
  const rawInput = parseJson(request.method === "GET" ? url.searchParams.get("input") : request.body);

  const inputs = batch
    ? procedures.map((_, index) => unwrapEnvelope((rawInput as Record<string, unknown> | undefined)?.[String(index)]))
    : [unwrapEnvelope(rawInput)];

  return { batch, inputs, procedures };
}

async function getVotesCollection(): Promise<Collection<DesignVoteDocument>> {
  const uri = process.env.MONGODB_URI;
  if (!uri) throw new Error("Voting service is unavailable");

  if (!mongoClient) {
    mongoClient = new MongoClient(uri, { serverSelectionTimeoutMS: 5_000 }).connect();
  }

  const collection = (await mongoClient).db().collection<DesignVoteDocument>("design_votes");
  if (!indexesReady) {
    indexesReady = collection.createIndex({ visitorKey: 1 }, { unique: true }).then(() => undefined);
  }
  await indexesReady;
  return collection;
}

async function getVoteSummary(visitorKey?: string): Promise<VoteSummary> {
  const votes = await getVotesCollection();
  const [totals, selected] = await Promise.all([
    votes.aggregate<{ _id: string; count: number }>([{ $group: { _id: "$designSlug", count: { $sum: 1 } } }]).toArray(),
    visitorKey ? votes.findOne({ visitorKey }, { projection: { designSlug: 1 } }) : null,
  ]);

  return {
    totals: Object.fromEntries(totals.map((entry) => [entry._id, entry.count])),
    selectedDesign: selected?.designSlug ?? null,
  };
}

function readVisitorKey(input: unknown) {
  const visitorKey = (input as { visitorKey?: unknown } | undefined)?.visitorKey;
  return typeof visitorKey === "string" && visitorKey.length > 0 && visitorKey.length <= 128 ? visitorKey : undefined;
}

async function setVote(input: unknown): Promise<VoteSummary> {
  const visitorKey = readVisitorKey(input);
  const designSlug = (input as { designSlug?: unknown } | undefined)?.designSlug;
  if (!visitorKey || typeof designSlug !== "string" || !DESIGN_SLUGS.has(designSlug)) {
    throw new Error("Invalid vote request");
  }

  const votes = await getVotesCollection();
  const now = new Date();
  await votes.updateOne(
    { visitorKey },
    { $set: { designSlug, updatedAt: now }, $setOnInsert: { visitorKey, createdAt: now } },
    { upsert: true },
  );
  return getVoteSummary(visitorKey);
}

function trpcSuccess(data: VoteSummary) {
  return { result: { data: { json: data } } };
}

function trpcError(error: unknown) {
  const message = error instanceof Error ? error.message : "Voting service is unavailable";
  const status = message === "Voting service is unavailable" ? 503 : 500;
  return {
    status,
    payload: {
      error: {
        json: {
          message,
          code: -32603,
          data: { code: "INTERNAL_SERVER_ERROR", httpStatus: status },
        },
      },
    },
  };
}

/**
 * Vercel’s function bundler compiles this file independently. Keep its imports self-contained so
 * the production function never relies on local TypeScript modules that are absent at runtime.
 */
export default async function handler(request: VercelRequest, response: VercelResponse) {
  const { batch, inputs, procedures } = extractTrpcRequest(request);
  if (procedures.length === 0) {
    response.statusCode = 404;
    response.setHeader("content-type", "application/json");
    response.end(JSON.stringify(trpcError(new Error("Unknown API procedure")).payload));
    return;
  }

  try {
    const results = await Promise.all(
      procedures.map((procedure, index) => {
        const input = inputs[index];
        if (procedure === "votes.summary") return getVoteSummary(readVisitorKey(input));
        if (procedure === "votes.set") return setVote(input);
        throw new Error("Unknown API procedure");
      }),
    );

    response.statusCode = 200;
    response.setHeader("content-type", "application/json");
    response.end(JSON.stringify(batch ? results.map(trpcSuccess) : trpcSuccess(results[0]!)));
  } catch (error) {
    const { payload, status } = trpcError(error);
    response.statusCode = status;
    response.setHeader("content-type", "application/json");
    response.end(JSON.stringify(batch ? [payload] : payload));
  }
}
