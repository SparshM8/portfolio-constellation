import { describe, expect, it } from "vitest";
import { extractTrpcRequest } from "../api/[...path]";

describe("Vercel vote handler request contract", () => {
  it("decodes a batched vote summary query from the tRPC URL format", () => {
    const input = encodeURIComponent(JSON.stringify({ 0: { json: { visitorKey: "pc-example" } } }));
    const request = extractTrpcRequest({
      method: "GET",
      url: `/api/trpc/votes.summary?batch=1&input=${input}`,
    });

    expect(request).toEqual({
      batch: true,
      inputs: [{ visitorKey: "pc-example" }],
      procedures: ["votes.summary"],
    });
  });

  it("decodes a batched mutation body for the set-vote procedure", () => {
    const request = extractTrpcRequest({
      method: "POST",
      url: "/api/trpc/votes.set?batch=1",
      body: { 0: { json: { visitorKey: "pc-example", designSlug: "neon" } } },
    });

    expect(request.inputs).toEqual([{ visitorKey: "pc-example", designSlug: "neon" }]);
    expect(request.procedures).toEqual(["votes.set"]);
  });
});
