/** Orbiting Archive design reminder: Chrome is the liquid-silver control room for a multidisciplinary creative practice. */
import { WorldShell } from "@/components/shared/WorldShell"; import { portfolioBySlug } from "@/data/portfolios";
export default function ChromePortfolio() { return <WorldShell world={portfolioBySlug("chrome")!} />; }
