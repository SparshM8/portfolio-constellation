/** Orbiting Archive design reminder: Sparsh Mishra is positioned as a B.Tech student and emerging builder for recruiters, founders, and ambitious early teams. */
export const sparshProfile = {
  name: "Sparsh Mishra",
  role: "B.Tech Student · Product-minded Designer & Creative Technologist",
  location: "Open to internships, freelance, and founder collaborations",
  email: "its8samay@gmail.com",
  availability: "Available for 2026 internships, product design roles, and early-stage collaborations.",
  quote: "I turn student curiosity into products people can actually use.",
  audience: "Built for recruiters looking for craft, founders looking for a versatile builder, and teams that need someone who can think from first sketch to shipped interface.",
  socials: [
    { label: "LINKEDIN", href: "https://www.linkedin.com/in/sparshm8/", note: "Sparsh Mishra on LinkedIn" },
    { label: "GITHUB", href: "https://github.com/SparshM8", note: "SparshM8 on GitHub" },
  ],
  skills: ["Product Design", "Creative Development", "Brand Systems", "Frontend", "Research", "Motion", "Generative Art"],
  experiences: [
    { period: "2025 — NOW", title: "Independent Designer & Builder", place: "Sparsh Mishra / Bengaluru", detail: "Designing product concepts, identity systems, and interactive portfolio experiments for student communities and early-stage teams." },
    { period: "SUMMER 2025", title: "Product Design Intern", place: "Demo Studio / Remote", detail: "Worked across onboarding flows, interface audits, and prototype testing for a founder-led SaaS product." },
    { period: "2023 — 2027", title: "B.Tech, Computer Science", place: "Demo Institute of Technology", detail: "Exploring human-computer interaction, frontend systems, and visual storytelling alongside core engineering studies." },
  ],
  proofPoints: ["08 portfolio worlds", "24 case-study routes", "Design + code practice", "Open to building in public"],
} as const;

export const worldFilterTags: Record<string, { skills: string[]; types: string[]; audience: string }> = {
  kinetic: { skills: ["Brand Systems", "Motion"], types: ["Brand Identity", "Campaign"], audience: "For founders who need a brand system with momentum, not just a logo." },
  architect: { skills: ["Product Design", "Research"], types: ["Product Design", "UX Strategy"], audience: "For product teams turning a dense problem into a clear experience." },
  void: { skills: ["Motion", "Brand Systems"], types: ["Motion Design", "Visual Story"], audience: "For teams launching something that needs to be felt before it is explained." },
  artifact: { skills: ["Creative Development", "Frontend"], types: ["Creative Code", "Interactive Web"], audience: "For founders who want their digital presence to feel built, not assembled." },
  mono: { skills: ["Product Design", "Frontend"], types: ["Product Design", "Design System"], audience: "For teams that value useful software with a disciplined visual point of view." },
  neon: { skills: ["Generative Art", "Creative Development"], types: ["Experiment", "Interactive Web"], audience: "For curious teams who believe play can uncover a better product idea." },
  editorial: { skills: ["Brand Systems", "Research"], types: ["Art Direction", "Visual Story"], audience: "For cultural projects that need a visual world with patience and texture." },
  chrome: { skills: ["Product Design", "Frontend", "Brand Systems"], types: ["Multidisciplinary", "Launch System"], audience: "For early-stage founders who need one adaptable partner across strategy, design, and build." },
};

export const hubFilters = ["ALL", "Product Design", "Creative Development", "Brand Systems", "Frontend", "Motion", "Interactive Web", "Visual Story"] as const;
