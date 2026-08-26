/** Orbiting Archive design reminder: every project becomes a full, visual narrative with Sparsh Mishra’s personal creative voice at its center. */
import { motion } from "framer-motion";
import { ArrowLeft, ArrowUpRight, MoveDown } from "lucide-react";
import { Link, useRoute } from "wouter";
import { getCaseStudy } from "@/data/caseStudies";
import NotFound from "@/pages/NotFound";

export default function CaseStudy() {
  const [, params] = useRoute("/case-studies/:world/:project");
  const study = getCaseStudy(params?.world ?? "", params?.project ?? "");
  if (!study) return <NotFound />;
  const { world, project, tone, hero, gallery, projectIndex } = study;
  return <article className={`case-study case-study--${world.slug}`} style={{ "--case-accent": world.accent } as React.CSSProperties} data-cursor-color={world.accent}>
    <header className="case-nav"><Link href={`/portfolios/${world.slug}`}><ArrowLeft size={16} /> BACK TO {world.title.toUpperCase()}</Link><Link href="/" className="case-nav__brand"><img src="/manus-storage/eclipse-mark_52f7be4f.png" alt="" /> SPARSH MISHRA <span>/ CONSTELLATION</span></Link><span>{world.coordinate}</span></header>
    <main id="main-content" tabIndex={-1}><section className="case-hero"><div className="case-hero__image"><img src={hero} alt={`${project.title} hero visual for the ${world.title} portfolio case study`} /><div className="case-hero__wash" /></div><span className="case-hero__field-code">FIELD {world.number} / NODE {String(projectIndex + 1).padStart(2, "0")} / ACTIVE</span><motion.div className="case-hero__copy" initial={{ opacity: 0, y: 26 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.58, ease: [0.23, 1, 0.32, 1] }}><p className="signal-label">CASE {String(projectIndex + 1).padStart(2, "0")} / {world.title.toUpperCase()}</p><h1>{project.title}</h1><p>{project.type} — {project.year}</p></motion.div><div className="case-hero__scroll"><MoveDown size={17} /> READ THE CASE</div></section>
      <section className="case-intro"><p className="case-intro__lede">{tone.challenge}</p><div className="case-facts"><div><span>ROLE</span><p>{tone.role}</p></div><div><span>DISCIPLINE</span><p>{tone.discipline}</p></div><div><span>CREATOR</span><p>Sparsh Mishra</p></div><div><span>YEAR</span><p>{project.year}</p></div></div></section>
      <section className="case-chapter"><p className="signal-label">01 / {tone.chapters[0]}</p><div><h2>Designed from<br /><em>the inside out.</em></h2><p>{tone.approach}</p></div></section>
      <section className="case-gallery"><figure className="case-gallery__wide"><img src={gallery[0]} alt={`${project.title} visual direction`} /><figcaption>01 — {world.title.toUpperCase()} visual language in practice</figcaption></figure><div className="case-gallery__split"><figure><img src={gallery[1]} alt={`${project.title} world-specific development detail`} /><figcaption>02 — {world.title.toUpperCase()} system detail</figcaption></figure><figure><div className={`case-visual case-visual--${world.slug}`} aria-hidden="true"><i /><i /><i /><b /></div><figcaption>03 — {world.title.toUpperCase()} material study</figcaption></figure></div></section>
      <section className="case-chapter case-chapter--dark"><p className="signal-label">02 / {tone.chapters[1]}</p><div><h2>A system that<br /><em>holds the signal.</em></h2><p>{tone.outcome}</p></div></section>
      <section className="case-outro"><p className="signal-label">03 / {tone.chapters[2]}</p><h2>Built with focus.<br /><span>Made to move.</span></h2><Link href={`/portfolios/${world.slug}`}>RETURN TO {world.title.toUpperCase()} <ArrowUpRight size={20} /></Link></section></main>
    <footer className="case-footer"><span>SPARSH MISHRA / INDEPENDENT DESIGNER & CREATIVE TECHNOLOGIST</span><a href="mailto:its8samay@gmail.com">ITS8SAMAY@GMAIL.COM</a></footer>
  </article>;
}
