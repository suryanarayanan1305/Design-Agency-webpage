"use client";

import React, { useRef } from "react";
import { useScroll, useTransform, motion } from "framer-motion";

interface ScrollHighlightTextProps {
  children: string;
  className?: string;
  serifItalicIndices?: number[]; // indices of words to render in elegant Instrument Serif italic
}

export default function ScrollHighlightText({
  children,
  className = "",
  serifItalicIndices = [],
}: ScrollHighlightTextProps) {
  const containerRef = useRef<HTMLParagraphElement>(null);
  const words = children.split(" ");

  // Start revealing as soon as section enters viewport ("start 0.95") and reach full clarity by middle ("start 0.40")
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 0.95", "start 0.40"],
  });

  return (
    <p ref={containerRef} className={`flex flex-wrap ${className}`}>
      {words.map((word, i) => {
        const start = i / words.length;
        const end = Math.min(start + 1.2 / words.length, 1);
        const isSerifItalic = serifItalicIndices.includes(i);

        return (
          <Word
            key={i}
            word={word}
            range={[start, end]}
            progress={scrollYProgress}
            isSerifItalic={isSerifItalic}
          />
        );
      })}
    </p>
  );
}

function Word({
  word,
  range,
  progress,
  isSerifItalic,
}: {
  word: string;
  range: [number, number];
  progress: any;
  isSerifItalic: boolean;
}) {
  // CRITICAL FIX: Base opacity is set to 0.55 in light mode (fully readable charcoal) and scales to 1.0 (bold clear).
  // Active progress also transforms color to coral for the emphasized words.
  const opacity = useTransform(progress, range, [0.55, 1]);
  const scale = useTransform(progress, range, [0.99, 1]);

  return (
    <span className="relative inline-block mr-[0.28em] my-[0.05em]">
      <motion.span
        style={{ opacity, scale }}
        className={`transition-colors duration-150 inline-block ${
          isSerifItalic
            ? "font-serif-editorial text-[1.12em] tracking-normal font-normal text-[var(--accent-coral)]"
            : "text-[var(--text-primary)]"
        }`}
      >
        {word}
      </motion.span>
    </span>
  );
}
