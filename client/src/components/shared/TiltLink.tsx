/** Orbiting Archive design reminder: project cards gain depth through a subtle world-aware tilt, never motion that competes with the content. */
import { useState } from "react";
import { Link } from "wouter";

type TiltStyle = React.CSSProperties & Record<"--tilt-glow" | "--tilt-x" | "--tilt-y", string>;

export function TiltLink({ href, className, color, children }: { href: string; className: string; color: string; children: React.ReactNode }) {
  const [style, setStyle] = useState<TiltStyle>({ "--tilt-glow": color, "--tilt-x": "50%", "--tilt-y": "50%" });
  const move = (event: React.PointerEvent<HTMLAnchorElement>) => {
    if (event.pointerType === "touch" || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const bounds = event.currentTarget.getBoundingClientRect(); const x = (event.clientX - bounds.left) / bounds.width; const y = (event.clientY - bounds.top) / bounds.height;
    setStyle({ transform: `perspective(900px) rotateX(${(0.5 - y) * 6}deg) rotateY(${(x - 0.5) * 6}deg) translateY(-5px)`, "--tilt-x": `${x * 100}%`, "--tilt-y": `${y * 100}%`, "--tilt-glow": color });
  };
  return <Link href={href} className={`${className} tilt-card`} style={style} onPointerMove={move} onPointerLeave={() => setStyle({ "--tilt-glow": color, "--tilt-x": "50%", "--tilt-y": "50%" })} data-cursor-label="READ" data-cursor-color={color}>{children}</Link>;
}
