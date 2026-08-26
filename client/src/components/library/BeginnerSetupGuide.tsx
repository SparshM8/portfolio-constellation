/** Orbiting Archive design library: the beginner guide turns a creative choice into four safe, concrete implementation steps. */
import { ArrowDownRight, Braces, ClipboardCopy, Download, Orbit } from "lucide-react";

const steps = [
  { number: "01", icon: Orbit, title: "Choose a world", text: "Use the Design Fit panel and Live Preview to select the visual system that matches your work—not only the one that looks cool." },
  { number: "02", icon: Braces, title: "Edit one JSON file", text: "Open client/src/config/template-profiles.json. Replace your name, role, headline, email, location, and project label. The layout code stays untouched." },
  { number: "03", icon: ClipboardCopy, title: "Add what you need", text: "Use Copy Component Code in a preview to take a hero, gallery, or contact block. Paste it into your React page, then replace demo project data." },
  { number: "04", icon: Download, title: "Test and retrieve", text: "Run the project locally, inspect it on mobile, and retrieve your personalized ZIP. Your preview edits are written back into the starter JSON file." },
];

export function BeginnerSetupGuide() {
  return <section className="beginner-guide"><div className="beginner-guide__head"><div><p className="signal-label">BEGINNER FIELD GUIDE / ZERO TO PERSONAL PORTFOLIO</p><h2>Start simple.<br/><em>Make it yours.</em></h2></div><p>Each design is a starting system, not a locked template. Follow this route before worrying about every file in the codebase.</p></div><div className="beginner-guide__steps">{steps.map(({ number, icon: Icon, title, text }) => <article key={number}><span>{number}</span><Icon size={19}/><h3>{title}</h3><p>{text}</p><ArrowDownRight size={15}/></article>)}</div><div className="beginner-guide__tip"><span>FASTEST PATH</span><p>Open a design preview, edit the six profile fields, use <strong>Build Personalized ZIP</strong>, and start inside the generated `template-profiles.json` file.</p></div></section>;
}
