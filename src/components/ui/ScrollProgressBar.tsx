"use client";

import React from "react";
import { motion, useScroll, useSpring } from "framer-motion";

export default function ScrollProgressBar() {
  const { scrollYProgress } = useScroll();
  
  // Smooth spring physics for fluid progress bar movement without jank
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <div
      className="fixed top-0 left-0 right-0 h-[3px] z-[100] pointer-events-none select-none bg-transparent"
      aria-hidden="true"
    >
      <motion.div
        className="h-full bg-[var(--scroll-progress-bg)] origin-left shadow-[0_0_8px_rgba(255,86,62,0.6)]"
        style={{ scaleX }}
      />
    </div>
  );
}
