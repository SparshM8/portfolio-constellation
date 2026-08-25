/** Orbiting Archive design reminder: Editorial is the peach, image-led photographic and cultural world. */
import { WorldShell } from "@/components/shared/WorldShell"; import { portfolioBySlug } from "@/data/portfolios";
export default function EditorialPortfolio() { return <WorldShell world={portfolioBySlug("editorial")!} />; }
