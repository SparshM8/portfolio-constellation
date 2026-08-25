/** Orbiting Archive design reminder: one persistent return path and signal language gives every radically different world a shared origin. */
import { motion } from "framer-motion";
import { ArrowDownRight, ArrowLeft, ArrowUpRight, Plus } from "lucide-react";
import { Link } from "wouter";
import type { PortfolioWorld } from "@/data/portfolios";
import { toSlug } from "@/data/caseStudies";
import { OrbitMark } from "@/components/brand/OrbitMark";

export function WorldShell({ world }: { world: PortfolioWorld }) {
  const order = ["kinetic", "architect", "void", "artifact", "mono", "neon", "editorial", "chrome"];
  const nextSlug = order[(order.indexOf(world.slug) + 1) % order.length];
  return <div className={`portfolio-world portfolio-world--${world.mode} ${world.dark ? "is-dark" : ""}`} style={{ "--accent": world.accent } as React.CSSProperties} data-cursor-color={world.accent}>
    <header className="world-nav"><Link href="/" className="world-nav__back"><ArrowLeft size={16} /> ALL WORLDS</Link><OrbitMark compact invert={world.dark} /><span className="world-nav__coordinates">{world.coordinate}</span></header>
    <main><section className="world-hero"><motion.div className="world-hero__copy" initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, ease: [0.23, 1, 0.32, 1] }}><p className="signal-label">SPARSH MISHRA / SIGNAL {world.number} / {world.tags.join(" · ")}</p><h1>{world.title}</h1><p className="world-hero__caption">{world.caption}</p><p className="world-hero__discipline">{world.discipline}</p></motion.div><div className={`world-hero__art world-hero__art--${world.mode}`}>{world.image ? <img src={world.image} alt="" /> : <WorldHeroGraphic mode={world.mode} />}<span className="world-hero__mode">{world.mode.toUpperCase()} / ACTIVE</span></div><div className="world-hero__edge"><span>SPARSH MISHRA<br />CONSTELLATION</span><ArrowDownRight size={20} /></div></section>
      <section className={`world-cases world-cases--${world.mode}`}><div className="world-cases__head"><p className="signal-label">SELECTED CASE STUDIES</p><span>03</span></div><div className="case-list">{world.cases.map((caseItem, i) => <Link href={`/case-studies/${world.slug}/${toSlug(caseItem.title)}`} className="case-row" key={caseItem.title}><span className="case-row__index">0{i + 1}</span><div><h2>{caseItem.title}</h2><p>{caseItem.type}</p></div><span className="case-row__year">{caseItem.year}</span><span className="case-row__button" aria-label={`Read ${caseItem.title} case study`}><Plus size={20} /></span></Link>)}</div></section>
      <section className="world-statement"><p className="signal-label">SPARSH MISHRA / PRACTICE NOTE / 00{world.number}</p><p>{world.description}</p></section><Link href={`/portfolios/${nextSlug}`} className="next-world">NEXT SIGNAL <span>{world.number === "08" ? "01" : String(Number(world.number) + 1).padStart(2, "0")}</span><ArrowUpRight size={22} /></Link></main>
    <footer className="world-footer"><span>SPARSH MISHRA / PORTFOLIO CONSTELLATION</span><a href="mailto:sparsh@constellation.studio">SPARSH@CONSTELLATION.STUDIO</a><span>{world.discipline.toUpperCase()}</span></footer></div>;
}
function WorldHeroGraphic({ mode }: { mode: string }) { return <div className={`hero-graphic hero-graphic--${mode}`} aria-hidden="true"><i /><i /><i /><b /></div>; }
