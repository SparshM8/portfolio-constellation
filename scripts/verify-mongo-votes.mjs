import { MongoClient } from "mongodb";
import { appRouter } from "../server/routers.ts";

const visitorKey = "qa-mongo-vote-verification-2026";
const caller = appRouter.createCaller({ user: null, req: {}, res: {} });
const uri = process.env.MONGODB_URI;
if (!uri) throw new Error("MONGODB_URI is required");
const client = new MongoClient(uri, { serverSelectionTimeoutMS: 5_000 });

try {
  const result = await caller.votes.set({ visitorKey, designSlug: "architect" });
  if (result.selectedDesign !== "architect" || result.totals.architect < 1) throw new Error("MongoDB vote mutation did not return the expected summary");
  const readback = await caller.votes.summary({ visitorKey });
  if (readback.selectedDesign !== "architect") throw new Error("MongoDB vote summary did not persist the visitor selection");
  console.log("PASS MongoDB-backed vote mutation and summary verification");
} finally {
  await client.connect();
  await client.db().collection("design_votes").deleteOne({ visitorKey });
  await client.close();
}

process.exit(0);
