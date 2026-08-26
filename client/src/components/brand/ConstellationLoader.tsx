/** Orbiting Archive design reminder: the first entry is a short field-calibration sequence that introduces the constellation before the hub appears. */
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export function ConstellationLoader() {
  const [visible, setVisible] = useState(true);
  useEffect(() => { const timer = window.setTimeout(() => setVisible(false), 1450); return () => window.clearTimeout(timer); }, []);
  if (!visible) return null;
  return <motion.div className="constellation-loader" initial={{ opacity: 1 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.4 }} aria-label="Loading Portfolio Constellation"><div className="constellation-loader__field"><span className="constellation-loader__orbit constellation-loader__orbit--one"/><span className="constellation-loader__orbit constellation-loader__orbit--two"/><span className="constellation-loader__core"/><i/><i/><i/><i/></div><div className="constellation-loader__copy"><p>CALIBRATING THE FIELD</p><h1>PORTFOLIO<br/>CONSTELLATION</h1><span>08 WORLDS / 01 CREATOR SIGNAL</span></div></motion.div>;
}
