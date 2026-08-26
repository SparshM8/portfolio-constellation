/** Orbiting Archive accessibility: route changes preserve orientation for all visitors and become instant when reduced motion is requested. */
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { useEffect } from "react";
import { useLocation } from "wouter";

export function RouteTransition({ children }: { children: React.ReactNode }) {
  const [location] = useLocation(); const reduceMotion = useReducedMotion();
  useEffect(() => { window.scrollTo({ top: 0, behavior: reduceMotion ? "auto" : "instant" as ScrollBehavior }); }, [location, reduceMotion]);
  if (reduceMotion) return <AnimatePresence mode="wait" initial={false}><motion.div key={location} className="route-transition" initial={false} animate={{ opacity: 1 }} exit={{ opacity: 1 }} transition={{ duration: 0 }}>{children}</motion.div></AnimatePresence>;
  return <AnimatePresence mode="wait" initial={false}><motion.div key={location} className="route-transition" initial={{ opacity: 0, clipPath: "inset(0 0 8% 0)" }} animate={{ opacity: 1, clipPath: "inset(0 0 0% 0)" }} exit={{ opacity: 0, clipPath: "inset(8% 0 0 0)" }} transition={{ duration: 0.38, ease: [0.23, 1, 0.32, 1] }}>{children}</motion.div></AnimatePresence>;
}
