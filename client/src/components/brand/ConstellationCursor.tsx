/** Orbiting Archive design reminder: the cursor acts as a living orbit node, adopting each world’s environmental accent while preserving the creator pulse. */
import { useEffect, useState } from "react";

type CursorState = { x: number; y: number; label: string; color: string; active: boolean };
export function ConstellationCursor() {
  const [cursor, setCursor] = useState<CursorState>({ x: -80, y: -80, label: "", color: "#d9ff4a", active: false });
  useEffect(() => {
    if (!window.matchMedia("(pointer: fine)").matches) return;
    document.body.classList.add("custom-cursor-active");
    const move = (event: PointerEvent) => {
      const node = (event.target as HTMLElement | null)?.closest<HTMLElement>("[data-cursor-label], [data-cursor-color]");
      setCursor({ x: event.clientX, y: event.clientY, label: node?.dataset.cursorLabel ?? "", color: node?.dataset.cursorColor ?? "#d9ff4a", active: Boolean(node?.dataset.cursorLabel) });
    };
    window.addEventListener("pointermove", move, { passive: true });
    return () => { window.removeEventListener("pointermove", move); document.body.classList.remove("custom-cursor-active"); };
  }, []);
  return <div className={`constellation-cursor ${cursor.active ? "is-active" : ""}`} style={{ transform: `translate3d(${cursor.x}px, ${cursor.y}px, 0)`, "--cursor-color": cursor.color } as React.CSSProperties}><span className="constellation-cursor__core" /><span className="constellation-cursor__label">{cursor.label}</span></div>;
}
