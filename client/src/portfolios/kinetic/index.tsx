/** Orbiting Archive design reminder: Kinetic is the solar-orange, poster-driven art-director world. */
import { WorldShell } from "@/components/shared/WorldShell"; import { portfolioBySlug } from "@/data/portfolios";
export default function KineticPortfolio() { return <WorldShell world={portfolioBySlug("kinetic")!} />; }
