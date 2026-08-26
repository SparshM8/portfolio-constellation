import { readFileSync } from "node:fs";
import { resolve } from "node:path";
import { describe, expect, it } from "vitest";

const source = (path: string) => readFileSync(resolve(process.cwd(), path), "utf8");

describe("portfolio motion contract", () => {
  it("keeps the global loader, cursor, and route-transition shell mounted", () => {
    const app = source("client/src/App.tsx");
    expect(app).toContain("<ConstellationLoader/>");
    expect(app).toContain("<ConstellationCursor/>");
    expect(app).toContain("<RouteTransition>");
  });

  it("keeps world case cards pointer-reactive while respecting reduced motion", () => {
    const tilt = source("client/src/components/shared/TiltLink.tsx");
    const styles = source("client/src/styles/tilt-cards.css");
    expect(tilt).toContain("onPointerMove={move}");
    expect(tilt).toContain("prefers-reduced-motion: reduce");
    expect(styles).toContain("prefers-reduced-motion:reduce");
  });
});
