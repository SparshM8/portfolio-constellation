import { describe, expect, it } from "vitest";
import { toVoteMap } from "./mongoVotes";

describe("MongoDB vote aggregation", () => {
  it("returns a simple slug-to-count map for the public popularity indicator", () => {
    expect(toVoteMap([{ _id: "architect", count: 3 }, { _id: "kinetic", count: 1 }])).toEqual({ architect: 3, kinetic: 1 });
  });
});
