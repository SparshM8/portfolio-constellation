import { describe, expect, it } from "vitest";
import { appRouter } from "./routers";

describe("vote router input contracts", () => {
  const ctx = { user: null, req: {} as any, res: {} as any };
  it("rejects an invalid design slug before reaching the database", async () => {
    const caller = appRouter.createCaller(ctx);
    await expect(caller.votes.set({ visitorKey: "visitor-key-12345", designSlug: "not-a-world" as any })).rejects.toThrow();
  });
});
