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

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 0.85", "start 0.25"],
  });

  return (
    <p ref={containerRef} className={`flex flex-wrap ${className}`}>
      {words.map((word, i) => {
        const start = i / words.length;
        const end = start + 1 / words.length;
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
  const opacity = useTransform(progress, range, [0.22, 1]);

  return (
    <span className="relative inline-block mr-[0.28em] my-[0.05em]">
      <motion.span
        style={{ opacity }}
        className={`transition-colors duration-150 ${
          isSerifItalic ? "font-serif-editorial text-[1.12em] tracking-normal font-normal text-[var(--accent-coral)]" : ""
        }`}
      >
        {word}
      </motion.span>
    </span>
  );
}
