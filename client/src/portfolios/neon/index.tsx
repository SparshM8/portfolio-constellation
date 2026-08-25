/** Orbiting Archive design reminder: Neon is the acid-green, playful experimental-maker world. */
import { WorldShell } from "@/components/shared/WorldShell"; import { portfolioBySlug } from "@/data/portfolios";
export default function NeonPortfolio() { return <WorldShell world={portfolioBySlug("neon")!} />; }
