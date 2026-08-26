import { MongoClient } from "mongodb";
import { afterAll, describe, expect, it } from "vitest";

const uri = process.env.MONGODB_URI;
const client = uri ? new MongoClient(uri, { serverSelectionTimeoutMS: 5_000 }) : null;

describe("MongoDB deployment connection", () => {
  it("connects and responds to a lightweight ping", async () => {
    expect(uri).toMatch(/^mongodb(\+srv)?:\/\//);
    if (!client) throw new Error("MONGODB_URI is required");
    await client.connect();
    const result = await client.db().command({ ping: 1 });
    expect(result.ok).toBe(1);
  }, 10_000);
});

afterAll(async () => { await client?.close(); });
