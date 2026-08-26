/** Orbiting Archive design library: typed access to the single JSON personal-details catalog that juniors edit before using a template. */
import profileFile from "@/config/template-profiles.json";
import type { PortfolioMode } from "@/data/portfolios";

export type TemplateProfile = { name: string; role: string; headline: string; email: string; location: string; projectHeading: string; contactCta: string };
const profiles = profileFile as { schemaVersion: number; howToUse: string; templates: Record<PortfolioMode, TemplateProfile> };
export const templateProfiles = profiles.templates;
export const templateProfileInstructions = profiles.howToUse;
