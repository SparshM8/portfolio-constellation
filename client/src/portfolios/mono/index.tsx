/** Orbiting Archive design reminder: Mono is the cobalt, severe typography-led UI and product world. */
import { WorldShell } from "@/components/shared/WorldShell"; import { portfolioBySlug } from "@/data/portfolios";
export default function MonoPortfolio() { return <WorldShell world={portfolioBySlug("mono")!} />; }
