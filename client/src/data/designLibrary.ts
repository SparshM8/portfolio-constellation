/** Orbiting Archive design reminder: the library helps juniors choose a distinct personal portfolio design with honest guidance before they copy a starter folder. */
import type { PortfolioMode } from "@/data/portfolios";

export type DesignGuide = {
  label: string;
  bestFor: string;
  fit: string;
  strength: string;
  difficulty: "Starter" | "Intermediate" | "Advanced";
  personality: string[];
  customStart: string;
  useWhen: string;
  avoidWhen: string;
};

export const designGuides: Record<PortfolioMode, DesignGuide> = {
  kinetic: { label: "Kinetic Poster", bestFor: "Brand designers, art directors, visual communicators", fit: "Use it when your work wins attention through type, identity, campaigns, or cultural projects.", strength: "Loud type, poster panels, tactile campaign energy.", difficulty: "Intermediate", personality: ["Bold", "Editorial", "Expressive"], customStart: "Start in portfolios/kinetic and replace the three campaign cards, orange image asset, and signal copy.", useWhen: "You want recruiters to remember your visual point of view in seconds.", avoidWhen: "Your work is primarily detailed product UX and needs methodical process diagrams." },
  architect: { label: "Architect Dossier", bestFor: "Product designers, UX researchers, systems thinkers", fit: "Use it when you need to explain structure, user flows, and careful interface decisions.", strength: "Blueprint grid, evidence cards, spatial documentation.", difficulty: "Starter", personality: ["Clear", "Structured", "Thoughtful"], customStart: "Start in portfolios/architect and update the project cards, product screenshots, and research notes.", useWhen: "You want a calm portfolio for internships, product teams, or design case studies.", avoidWhen: "You need a high-energy art direction or motion-first portfolio." },
  void: { label: "Void Reel", bestFor: "Motion designers, 3D artists, film and title-sequence makers", fit: "Use it when atmosphere, pacing, and visual storytelling are more important than long blocks of process text.", strength: "Dark cinematic space, reel panels, ultraviolet motion atmosphere.", difficulty: "Advanced", personality: ["Cinematic", "Immersive", "Minimal"], customStart: "Start in portfolios/void and replace reel media, project frames, and motion/timing language.", useWhen: "You have strong visual work that benefits from an immersive showreel format.", avoidWhen: "You only have wireframes or need recruiters to scan dense information quickly." },
  artifact: { label: "Artifact Archive", bestFor: "Creative developers, frontend engineers, interaction makers", fit: "Use it when the experiments, prototypes, and material of the build matter as much as the final result.", strength: "Field notes, annotated proof, browser-experiment energy.", difficulty: "Intermediate", personality: ["Curious", "Tactile", "Experimental"], customStart: "Start in portfolios/artifact and add project notes, technical sketches, and real prototype links.", useWhen: "You want to show how you build and think through a technical idea.", avoidWhen: "You want a strict corporate or ultra-minimal product portfolio." },
  mono: { label: "Mono Index", bestFor: "UI designers, B.Tech students, product-focused generalists", fit: "Use it when you want the clearest recruiter-friendly hierarchy with strong visual restraint.", strength: "Swiss-style index, big interface labels, practical project hierarchy.", difficulty: "Starter", personality: ["Precise", "Reliable", "Direct"], customStart: "Start in portfolios/mono and replace the project list, skills, and concise outcome copy.", useWhen: "You are applying for internships or entry-level product/UI roles and want fast scanning.", avoidWhen: "You want your portfolio to feel playful, image-heavy, or culturally editorial." },
  neon: { label: "Neon Playground", bestFor: "Digital artists, generative designers, experimental students", fit: "Use it when you are sharing playful interactive work, creative coding, or unconventional visual studies.", strength: "Arcade tiles, acid color, experimental interaction language.", difficulty: "Advanced", personality: ["Playful", "Unexpected", "Digital"], customStart: "Start in portfolios/neon and replace each tile with a live demo, GIF, or generative study.", useWhen: "You want to attract creative-technology studios or founders who value experimentation.", avoidWhen: "You are applying to conservative roles that require restrained professional presentation." },
  editorial: { label: "Editorial Journal", bestFor: "Photographers, art directors, visual storytellers", fit: "Use it when sequence, image curation, and cultural perspective define your best work.", strength: "Magazine rhythm, image-led storytelling, quiet visual confidence.", difficulty: "Intermediate", personality: ["Curated", "Human", "Cultural"], customStart: "Start in portfolios/editorial and replace image series, captions, and story order.", useWhen: "You have photography, visual research, campaigns, or narrative work to present.", avoidWhen: "You need to show detailed technical architecture or dense product documentation." },
  chrome: { label: "Chrome Control Room", bestFor: "Multidisciplinary freelancers, founder-builders, creative generalists", fit: "Use it when you combine strategy, brand, product, and frontend work in one practice.", strength: "Systems dashboard, modular project view, high-agency generalist positioning.", difficulty: "Intermediate", personality: ["Versatile", "Sharp", "Systems-minded"], customStart: "Start in portfolios/chrome and make the service/project modules match your strongest three capabilities.", useWhen: "You want founders to understand that you can connect design thinking to execution.", avoidWhen: "You are specializing in a single deeply visual craft and need a tighter art portfolio." },
};

export const designSourceZips: Record<PortfolioMode, string> = {
  kinetic: "/manus-storage/01-kinetic-poster_2f65a54d.zip",
  architect: "/manus-storage/02-architect-dossier_8dc29859.zip",
  void: "/manus-storage/03-void-reel_5477a045.zip",
  artifact: "/manus-storage/04-artifact-archive_6e96c7c2.zip",
  mono: "/manus-storage/05-mono-index_ef296e36.zip",
  neon: "/manus-storage/06-neon-playground_ca6ef9c7.zip",
  editorial: "/manus-storage/07-editorial-journal_40d91888.zip",
  chrome: "/manus-storage/08-chrome-control-room_0261b066.zip",
};

export const masterLibraryZip = "/manus-storage/Portfolio-Constellation-Personalized-Starter-Kit_0c9b7c35.zip";
