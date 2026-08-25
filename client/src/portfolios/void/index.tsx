/** Orbiting Archive design reminder: Void is the ultraviolet, cinematic motion-design world. */
import { WorldShell } from "@/components/shared/WorldShell"; import { portfolioBySlug } from "@/data/portfolios";
export default function VoidPortfolio() { return <WorldShell world={portfolioBySlug("void")!} />; }
