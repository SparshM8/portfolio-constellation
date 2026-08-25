/** Orbiting Archive design reminder: route changes should feel like a measured change of creative state, never a jarring page reload. */
import { AnimatePresence, motion } from "framer-motion";
import { useEffect } from "react";
import { useLocation } from "wouter";

export function RouteTransition({ children }: { children: React.ReactNode }) {
  const [location] = useLocation();
  useEffect(() => { window.scrollTo({ top: 0, behavior: "instant" as ScrollBehavior }); }, [location]);
  return <AnimatePresence mode="wait" initial={false}><motion.div key={location} className="route-transition" initial={{ opacity: 0, clipPath: "inset(0 0 8% 0)" }} animate={{ opacity: 1, clipPath: "inset(0 0 0% 0)" }} exit={{ opacity: 0, clipPath: "inset(8% 0 0 0)" }} transition={{ duration: 0.38, ease: [0.23, 1, 0.32, 1] }}>{children}</motion.div></AnimatePresence>;
}
