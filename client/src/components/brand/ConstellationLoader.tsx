/** Orbiting Archive accessibility: the calibration sequence is optional and never delays visitors who prefer reduced motion. */
import { motion, useReducedMotion } from "framer-motion";
import { useEffect, useState } from "react";

export function ConstellationLoader() {
  const reduceMotion = useReducedMotion(); const [visible, setVisible] = useState(!reduceMotion);
  useEffect(() => { if (reduceMotion) { setVisible(false); return; } const timer = window.setTimeout(() => setVisible(false), 1450); return () => window.clearTimeout(timer); }, [reduceMotion]);
  if (!visible) return null;
  return <motion.div className="constellation-loader" initial={{ opacity: 1 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.4 }} aria-label="Loading Portfolio Constellation"><div className="constellation-loader__field" aria-hidden="true"><span className="constellation-loader__orbit constellation-loader__orbit--one"/><span className="constellation-loader__orbit constellation-loader__orbit--two"/><span className="constellation-loader__core"/><i/><i/><i/><i/></div><div className="constellation-loader__copy"><p>CALIBRATING THE FIELD</p><h1>PORTFOLIO<br/>CONSTELLATION</h1><span>08 WORLDS / 01 CREATOR SIGNAL</span></div></motion.div>;
}
