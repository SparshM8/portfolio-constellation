/** Orbiting Archive design library: focused copyable snippets let juniors reuse a useful section without extracting an entire template. */
import type { PortfolioMode } from "@/data/portfolios";

export type SnippetKey = "hero" | "gallery" | "contact";
export const snippetLabels: Record<SnippetKey, string> = { hero: "Hero Section", gallery: "Project Gallery", contact: "Contact Block" };

export function getComponentSnippet(mode: PortfolioMode, section: SnippetKey) {
  const accent = mode === "kinetic" ? "#ff5b2e" : mode === "architect" ? "#48d8d0" : mode === "void" ? "#9d72ff" : "#d9ff4a";
  const base = `const profile = templateProfiles.${mode};\nconst accent = "${accent}";\n`;
  if (section === "hero") return `${base}\nexport function PortfolioHero() {\n  return (\n    <section className="portfolio-hero" style={{ "--accent": accent }}>\n      <p className="signal-label">{profile.role}</p>\n      <h1>{profile.name}</h1>\n      <p>{profile.headline}</p>\n    </section>\n  );\n}`;
  if (section === "gallery") return `${base}\nconst projects = [\n  { title: "Project One", type: "Case Study", year: "2026" },\n  { title: "Project Two", type: "Experiment", year: "2025" },\n];\n\nexport function ProjectGallery() {\n  return (\n    <section className="project-gallery">\n      {projects.map((project) => (\n        <article className="project-card" key={project.title}>\n          <span>{project.year}</span>\n          <h2>{project.title}</h2>\n          <p>{project.type}</p>\n        </article>\n      ))}\n    </section>\n  );\n}`;
  return `${base}\nexport function ContactBlock() {\n  return (\n    <section className="contact-block" style={{ "--accent": accent }}>\n      <p className="signal-label">CONTACT</p>\n      <h2>{profile.contactCta}</h2>\n      <a href={\`mailto:\${profile.email}\`}>{profile.email}</a>\n      <span>{profile.location}</span>\n    </section>\n  );\n}`;
}
