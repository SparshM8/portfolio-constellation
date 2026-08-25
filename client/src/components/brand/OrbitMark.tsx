/** Orbiting Archive design reminder: the broken lime orbit is the portable personal-brand signature across every route. */
import { Link } from "wouter";

export function OrbitMark({ compact = false, invert = false }: { compact?: boolean; invert?: boolean }) {
  return <Link href="/" className={`orbit-mark ${invert ? "orbit-mark--invert" : ""}`} aria-label="Portfolio Constellation home"><img src="/manus-storage/eclipse-mark_52f7be4f.png" alt="" className="orbit-mark__glyph" />{!compact && <span className="orbit-mark__word">PORTFOLIO<br />CONSTELLATION</span>}</Link>;
}
