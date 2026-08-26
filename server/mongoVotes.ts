import { MongoClient, type Collection } from "mongodb";

type DesignVoteDocument = {
  visitorKey: string;
  designSlug: string;
  createdAt: Date;
  updatedAt: Date;
};

let clientPromise: Promise<MongoClient> | null = null;
let indexesReady: Promise<void> | null = null;

async function getVotes(): Promise<Collection<DesignVoteDocument>> {
  const uri = process.env.MONGODB_URI;
  if (!uri) throw new Error("Voting service is unavailable");
  if (!clientPromise) clientPromise = new MongoClient(uri).connect();
  const collection = (await clientPromise).db().collection<DesignVoteDocument>("design_votes");
  if (!indexesReady) indexesReady = collection.createIndex({ visitorKey: 1 }, { unique: true }).then(() => undefined);
  await indexesReady;
  return collection;
}

export function toVoteMap(rows: Array<{ _id: string; count: number }>) {
  return Object.fromEntries(rows.map((row) => [row._id, row.count]));
}

export async function getMongoDesignVoteSummary(visitorKey?: string) {
  const votes = await getVotes();
  const [totals, selected] = await Promise.all([
    votes.aggregate<{ _id: string; count: number }>([{ $group: { _id: "$designSlug", count: { $sum: 1 } } }]).toArray(),
    visitorKey ? votes.findOne({ visitorKey }, { projection: { designSlug: 1 } }) : null,
  ]);
  return { totals: toVoteMap(totals), selectedDesign: selected?.designSlug ?? null };
}

export async function setMongoDesignVote(visitorKey: string, designSlug: string) {
  const votes = await getVotes();
  const now = new Date();
  await votes.updateOne({ visitorKey }, { $set: { designSlug, updatedAt: now }, $setOnInsert: { visitorKey, createdAt: now } }, { upsert: true });
  return getMongoDesignVoteSummary(visitorKey);
}
