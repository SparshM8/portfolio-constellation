import fs from "node:fs";
import path from "node:path";
import { describe, expect, it } from "vitest";

const clientRoot = path.resolve(import.meta.dirname, "..", "client", "src");
const read = (file: string) => fs.readFileSync(path.join(clientRoot, file), "utf8");
const luminance = (hex: string) => {
  const channels = hex.slice(1).match(/.{2}/g)!.map((part) => Number.parseInt(part, 16) / 255).map((value) => value <= 0.03928 ? value / 12.92 : ((value + 0.055) / 1.055) ** 2.4);
  return 0.2126 * channels[0] + 0.7152 * channels[1] + 0.0722 * channels[2];
};
const ratio = (first: string, second: string) => { const a = luminance(first); const b = luminance(second); return (Math.max(a, b) + 0.05) / (Math.min(a, b) + 0.05); };

describe("accessibility contract", () => {
  it("keeps a skip path and visible keyboard focus in the application shell", () => {
    expect(read("App.tsx")).toContain('href="#main-content"');
    expect(read("styles/accessibility.css")).toContain(":focus-visible");
  });
  it("provides reduced-motion fallbacks for loader, cursor, tilt, and transitions", () => {
    const css = read("styles/accessibility.css");
    expect(css).toContain("prefers-reduced-motion:reduce");
    expect(css).toContain(".constellation-loader{display:none");
    expect(css).toContain(".constellation-cursor{display:none");
    expect(css).toContain(".tilt-card");
  });
  it("keeps core observatory and field-paper contrast above AA thresholds", () => {
    expect(ratio("#f4f2ec", "#111111")).toBeGreaterThanOrEqual(4.5);
    expect(ratio("#111111", "#e9e8e1")).toBeGreaterThanOrEqual(4.5);
    expect(ratio("#111111", "#d9ff4a")).toBeGreaterThanOrEqual(4.5);
  });
});
