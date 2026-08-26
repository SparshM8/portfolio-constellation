/**
 * Orbiting Archive design reminder: data is the shared gravitational system for eight visually distinct portfolio worlds.
 */
export type PortfolioMode =
  | "kinetic"
  | "architect"
  | "void"
  | "artifact"
  | "mono"
  | "neon"
  | "editorial"
  | "chrome";

export type PortfolioWorld = {
  id: string;
  number: string;
  slug: PortfolioMode;
  title: string;
  discipline: string;
  caption: string;
  description: string;
  accent: string;
  dark: boolean;
  mode: PortfolioMode;
  image?: string;
  imageAlt?: string;
  coordinate: string;
  tags: string[];
  cases: { title: string; type: string; year: string }[];
};

export const portfolios: PortfolioWorld[] = [
  { id: "kinetic", number: "01", slug: "kinetic", title: "Kinetic", discipline: "Brand Designer / Art Director", caption: "Type that refuses to sit still.", description: "A poster-first portfolio for identity systems with enough voltage to make brands feel physical.", accent: "#ff5b2e", dark: false, mode: "kinetic", coordinate: "12° 48′ 31″ N", image: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663761893749/DLqSzmmMXDJERHHV.jpg", imageAlt: "Layered orange and black typographic poster composition for the Kinetic portfolio design.", tags: ["IDENTITY", "CAMPAIGN", "SYSTEMS"], cases: [{ title: "Ritual Frequency", type: "Cultural identity", year: "2026" }, { title: "Off-Grid Studio", type: "Launch campaign", year: "2025" }, { title: "Motion Matter", type: "Editorial system", year: "2024" }] },
  { id: "architect", number: "02", slug: "architect", title: "Architect", discipline: "Product & Experience Designer", caption: "Systems with a sense of space.", description: "A modular blueprint for digital products, spatial interfaces, and the decisions that make them intuitive.", accent: "#48d8d0", dark: false, mode: "architect", coordinate: "05° 14′ 09″ S", image: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663761893749/PuCZqfDabZrKmlRd.jpg", imageAlt: "Aqua blueprint-style spatial product illustration for the Architect portfolio design.", tags: ["PRODUCT", "RESEARCH", "PROTOTYPE"], cases: [{ title: "Pulse Atlas", type: "Health platform", year: "2026" }, { title: "Common Room", type: "Community product", year: "2025" }, { title: "Field Objects", type: "Spatial interface", year: "2024" }] },
  { id: "void", number: "03", slug: "void", title: "Void", discipline: "Motion Designer / Storyteller", caption: "A dark room for moving images.", description: "A cinematic showreel space where the motion language has weight, light, and room to breathe.", accent: "#9d72ff", dark: true, mode: "void", coordinate: "88° 03′ 14″ E", image: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663761893749/YDPqnzOEWqLCMRJg.jpg", imageAlt: "Abstract violet light and dark circular motion study for the Void portfolio design.", tags: ["TITLE", "3D", "FILM"], cases: [{ title: "Still Becoming", type: "Title sequence", year: "2026" }, { title: "Luma Archive", type: "Launch film", year: "2025" }, { title: "Soft Machinery", type: "Motion identity", year: "2024" }] },
  { id: "artifact", number: "04", slug: "artifact", title: "Artifact", discipline: "Creative Developer", caption: "Builds worth preserving as evidence.", description: "An annotated working archive of browser experiments, tactile code studies, and designed interactions.", accent: "#d64e3b", dark: false, mode: "artifact", coordinate: "21° 37′ 02″ W", tags: ["CODE", "WEBGL", "EXPERIMENT"], cases: [{ title: "Signal Garden", type: "Interactive site", year: "2026" }, { title: "Soft Index", type: "Live archive", year: "2025" }, { title: "Antenna", type: "Physical web", year: "2024" }] },
  { id: "mono", number: "05", slug: "mono", title: "Mono", discipline: "UI & Product Designer", caption: "Less interface. More intention.", description: "A reduced portfolio of careful products, useful typography, and the quiet force of a good system.", accent: "#2457e8", dark: false, mode: "mono", coordinate: "34° 08′ 47″ N", tags: ["INTERFACE", "STRATEGY", "UX"], cases: [{ title: "Roundhouse", type: "SaaS platform", year: "2026" }, { title: "Morrow", type: "Financial tool", year: "2025" }, { title: "Open Table", type: "Service design", year: "2024" }] },
  { id: "neon", number: "06", slug: "neon", title: "Neon", discipline: "Digital Artist / Experimental Maker", caption: "Play is a production method.", description: "An arcade for generative graphics, impossible textures, and the projects that only happen by making a mess.", accent: "#c7ff3b", dark: true, mode: "neon", coordinate: "77° 51′ 10″ E", tags: ["GENERATIVE", "PLAY", "VISUALS"], cases: [{ title: "Color Machine", type: "Generative series", year: "2026" }, { title: "Pop Physics", type: "Digital object", year: "2025" }, { title: "No Signal", type: "Interactive toy", year: "2024" }] },
  { id: "editorial", number: "07", slug: "editorial", title: "Editorial", discipline: "Photographer / Visual Curator", caption: "Images with a point of view.", description: "A cover-to-cover visual journal for photographs, culture stories, and the fragments that form an image practice.", accent: "#ff8e7a", dark: false, mode: "editorial", coordinate: "16° 19′ 35″ S", tags: ["IMAGE", "CULTURE", "DIRECTION"], cases: [{ title: "Midsummer Index", type: "Photo essay", year: "2026" }, { title: "Slow Current", type: "Editorial story", year: "2025" }, { title: "The Archive Room", type: "Art direction", year: "2024" }] },
  { id: "chrome", number: "08", slug: "chrome", title: "Chrome", discipline: "Multidisciplinary Freelancer", caption: "The complete operating system.", description: "A sharp control room for a generalist practice: strategy, visuals, product, technology, and everything between.", accent: "#bfc4c8", dark: true, mode: "chrome", coordinate: "49° 26′ 55″ N", tags: ["DIRECTION", "DESIGN", "BUILD"], cases: [{ title: "Set Piece", type: "Brand platform", year: "2026" }, { title: "Switchboard", type: "Digital product", year: "2025" }, { title: "Silver Tape", type: "Launch ecosystem", year: "2024" }] },
];

export const portfolioBySlug = (slug: string) => portfolios.find((portfolio) => portfolio.slug === slug);
