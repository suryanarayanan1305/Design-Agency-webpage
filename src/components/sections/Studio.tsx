"use client";

import React from "react";
import ScrollHighlightText from "@/components/ui/ScrollHighlightText";
import { Sparkles } from "lucide-react";

export default function Studio() {
  const principles = [
    {
      number: "01",
      title: "Substance Precedes Style",
      description:
        "Aesthetics without sound architectural underpinnings is mere decoration. We engineer every pixel with deliberate strategic purpose.",
    },
    {
      number: "02",
      title: "Obsession with Nuance",
      description:
        "The difference between good software and memorable craft lies in the micro-details: typographic tracking, kinetic easing, and zero latency.",
    },
    {
      number: "03",
      title: "Modern Engineering Rigor",
      description:
        "Our design team writes production React code. No handover friction, no compromised compromises, only immaculate execution.",
    },
  ];

  return (
    <section
      id="studio"
      className="py-24 md:py-36 px-6 sm:px-8 md:px-12 border-t border-[var(--border-color)] bg-[var(--bg-page)] relative transition-colors"
    >
      <div className="max-w-7xl mx-auto">
        {/* Editorial Sub-badge */}
        <div className="flex items-center gap-3 mb-6">
          <span className="font-serif-editorial text-sm italic text-[var(--accent-coral)] font-semibold">
            Studio Philosophy
          </span>
          <span className="text-xs text-[var(--text-muted)] uppercase tracking-widest font-medium">
            / Architectural Foundations
          </span>
        </div>

        {/* Scroll-Driven Highlighted Headline with guaranteed base contrast */}
        <div className="mb-20 max-w-5xl">
          <ScrollHighlightText
            className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.12] text-[var(--text-primary)]"
            serifItalicIndices={[2, 3]} // "GOOD DESIGN" highlighted with serif italic
          >
            WE BELIEVE GOOD DESIGN DOES MORE THAN LOOK GOOD.
          </ScrollHighlightText>
          <p className="mt-6 text-base sm:text-lg text-[var(--text-muted)] max-w-2xl font-sans leading-relaxed">
            We combine strategy, design and technology to create meaningful digital experiences. From the first idea to the final interaction, we help ambitious brands move forward with clarity and purpose.
          </p>
        </div>

        {/* 3 Principles with Refined Editorial Numbering & High Contrast */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-10 border-t border-[var(--border-color)]">
          {principles.map((principle, index) => (
            <div
              key={principle.number}
              className="p-8 rounded-2xl bg-[var(--card-bg)] border border-[var(--border-color)] shadow-sm hover:border-[var(--accent-coral)]/40 transition-all flex flex-col justify-between"
            >
              <div className="space-y-4">
                {/* Refined Small Editorial Number */}
                <span className="font-serif-editorial text-2xl italic text-[var(--accent-coral)] font-bold block">
                  {principle.number} —
                </span>

                <h3 className="font-display text-xl sm:text-2xl font-bold text-[var(--text-primary)] tracking-tight">
                  {principle.title}
                </h3>

                <p className="text-sm text-[var(--text-muted)] leading-relaxed font-sans font-normal">
                  {principle.description}
                </p>
              </div>

              <div className="pt-6 mt-6 border-t border-[var(--border-color)] flex items-center justify-between text-xs text-[var(--text-muted)]">
                <span className="font-semibold uppercase tracking-wider text-[11px] text-[var(--text-primary)]/70">
                  FORMORA Principle
                </span>
                <Sparkles className="w-3.5 h-3.5 text-[var(--accent-coral)]" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
