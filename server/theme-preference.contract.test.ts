import { readFileSync } from "node:fs";
import { resolve } from "node:path";
import { describe, expect, it } from "vitest";

describe("theme preference contract", () => {
  it("uses system preference before a visitor explicitly selects a field", () => {
    const source = readFileSync(resolve(process.cwd(), "client/src/contexts/ThemeContext.tsx"), "utf8");
    expect(source).toContain("prefers-color-scheme: dark");
    expect(source).toContain("portfolio-constellation-theme");
    expect(source).toContain("hasExplicitPreference");
    expect(source).toContain('root.classList.add("theme-ready")');
  });

  it("keeps the fade optional for reduced-motion visitors", () => {
    const source = readFileSync(resolve(process.cwd(), "client/src/styles/system-theme-transition.css"), "utf8");
    expect(source).toContain("prefers-reduced-motion: no-preference");
    expect(source).toContain("background-color 320ms");
  });
});
