/** Orbiting Archive design reminder: Architect is the mineral-aqua, blueprint-like product and experience world. */
import { WorldShell } from "@/components/shared/WorldShell"; import { portfolioBySlug } from "@/data/portfolios";
export default function ArchitectPortfolio() { return <WorldShell world={portfolioBySlug("architect")!} />; }
