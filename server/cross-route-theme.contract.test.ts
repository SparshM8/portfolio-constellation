import { readFileSync } from "node:fs";
import { resolve } from "node:path";
import { describe, expect, it } from "vitest";

describe("cross-route theme contract", () => {
  it("applies both field modes to portfolio worlds and case studies", () => {
    const source = readFileSync(resolve(process.cwd(), "client/src/styles/cross-route-theme.css"), "utf8");
    expect(source).toContain("html:not(.dark) .portfolio-world");
    expect(source).toContain("html.dark .portfolio-world");
    expect(source).toContain("html:not(.dark) .case-study");
    expect(source).toContain("html.dark .case-study");
    expect(source).toContain(".world-nav");
    expect(source).toContain(".case-nav");
    expect(source).toContain(".case-hero h1");
  });
});
