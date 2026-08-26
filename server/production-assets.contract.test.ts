import { readFileSync } from "node:fs";
import { resolve } from "node:path";
import { describe, expect, it } from "vitest";

const projectFile = (path: string) => readFileSync(resolve(process.cwd(), path), "utf8");

describe("production asset contract", () => {
  it("does not retain any stale Manus asset identifiers that fail on the Vercel deployment", () => {
    const source = [
      projectFile("client/src/components/brand/OrbitMark.tsx"),
      projectFile("client/src/components/hub/ConstellationHub.tsx"),
      projectFile("client/src/pages/CaseStudy.tsx"),
      projectFile("client/src/data/portfolios.ts"),
      projectFile("client/src/data/caseStudies.ts"),
      projectFile("client/src/data/designLibrary.ts"),
      projectFile("client/src/styles/production-asset-fallbacks.css"),
    ].join("\n");

    [
      "eclipse-mark_52f7be4f.png",
      "kinetic-world_123895a0.jpg",
      "architect-world_be220300.jpg",
      "void-world_bc8ff0e6.jpg",
      "Sparsh-Mishra-Resume-Demo_9feec912.pdf",
      "Portfolio-Constellation-Personalized-Starter-Kit_0c9b7c35.zip",
      "case-ritual-frequency_ea71082d.jpg",
      "case-pulse-atlas_482b035f.jpg",
      "case-still-becoming_3d814b62.jpg",
      "case-signal-garden_d638fe03.jpg",
      "case-midsummer-index_66b6b24f.jpg",
    ].forEach((staleAsset) => expect(source).not.toContain(staleAsset));

    expect(source).toContain("https://files.manuscdn.com/");
    expect(source).toContain("ZIngFRXDTRRZUcRn.png");
    expect(source).toContain("DLqSzmmMXDJERHHV.jpg");
    expect(source).toContain("nBxTXGbXqhfuMdMx.jpg");
    expect(source).toContain("VoFdtVnrYAQjezGd.zip");
  });
});
