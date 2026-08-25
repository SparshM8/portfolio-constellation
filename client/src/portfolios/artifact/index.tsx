/** Orbiting Archive design reminder: Artifact is the clay-red, annotated creative-development archive. */
import { WorldShell } from "@/components/shared/WorldShell"; import { portfolioBySlug } from "@/data/portfolios";
export default function ArtifactPortfolio() { return <WorldShell world={portfolioBySlug("artifact")!} />; }
