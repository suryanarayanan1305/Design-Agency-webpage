"use client";

import React, { useRef } from "react";
import Link from "next/link";
import { ArrowUpRight, ArrowDown, MoveRight, Sparkles } from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  // Smooth scroll animations for floating showcase cards inspired by Philotium
  // Reduced negative vertical travel on small/medium heights to prevent overlap
  const yCard1 = useTransform(scrollYProgress, [0, 1], [0, -75]);
  const yCard2 = useTransform(scrollYProgress, [0, 1], [0, -35]);
  const rotateCard1 = useTransform(scrollYProgress, [0, 1], [-2, 2]);
  const rotateCard2 = useTransform(scrollYProgress, [0, 1], [2, -2]);

  return (
    <section
      id="hero"
      ref={containerRef}
      className="relative pt-32 pb-20 md:pt-44 md:pb-28 px-6 sm:px-8 md:px-12 overflow-hidden bg-[var(--bg-page)] transition-colors"
    >
      {/* Clean ambient depth glow - ZERO geometric grid lines */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[450px] ambient-glow rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Top Editorial Metadata Banner with New Creative Statement */}
        <div className="flex flex-wrap items-center justify-between gap-4 mb-8 pb-4 border-b border-[var(--border-color)] text-xs font-sans">
          <div className="flex items-center gap-3">
            <span className="tracking-widest uppercase font-bold text-[var(--text-primary)]">
              VOL. 2026 / 27
            </span>
            <span className="opacity-30">•</span>
            {/* High-end creative statement combining uppercase letter-spacing, sans-serif & serif italic with coral highlights */}
            <span className="tracking-[0.14em] uppercase text-xs font-semibold text-[var(--text-primary)] flex items-center gap-1.5 flex-wrap">
              <Sparkles className="w-3.5 h-3.5 text-[var(--accent-coral)] shrink-0" />
              <span>WHEN CREATIVE</span>
              <span className="text-[var(--accent-coral)] font-serif-editorial lowercase text-sm tracking-normal font-normal">
                architecture
              </span>
              <span>&amp; ENGINEERING MEETS</span>
              <span className="text-[var(--accent-coral)] font-serif-editorial lowercase text-sm tracking-normal font-normal">
                perfection
              </span>
            </span>
          </div>

          <div className="hidden sm:flex items-center gap-2 tracking-wide font-medium text-[var(--text-muted)]">
            <span>Independent Digital Studio</span>
          </div>
        </div>

        {/* Hero Editorial Composition */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-end mb-16">
          {/* Main Headline */}
          <div className="lg:col-span-7 space-y-2">
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
              className="font-display text-5xl sm:text-7xl md:text-8xl lg:text-[6.5rem] tracking-tight leading-[0.93] text-[var(--text-primary)]"
            >
              WE MAKE <br />
              <span className="font-serif-editorial text-[1.12em] tracking-normal font-normal text-[var(--accent-coral)]">
                digital
              </span>{" "}
              <br />
              FEEL <br className="hidden sm:inline" />
              DIFFERENT.
            </motion.h1>
          </div>

          {/* Supporting Text & CTAs with enlarged typography & balanced spacing */}
          <div className="lg:col-span-5 space-y-6 lg:pl-2 pb-1">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.75, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
              className="text-[var(--text-primary)]/85 text-lg sm:text-xl lg:text-[1.32rem] leading-relaxed font-sans font-normal"
            >
              An independent creative studio shaping iconic brands, crafting responsive
              digital experiences, and turning ambitious concepts into memorable,
              high-performance interactions.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.75, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-wrap items-center gap-3.5 pt-2"
            >
              {/* Primary CTA: START A PROJECT (always visible) */}
              <Link
                href="#contact"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-[var(--btn-primary-bg)] text-[var(--btn-primary-text)] font-bold text-xs tracking-wider uppercase hover:bg-[var(--accent-coral)] hover:text-white transition-all shadow-md group cursor-pointer"
              >
                <span>START A PROJECT</span>
                <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>

              {/* Secondary CTA: EXPLORE SELECTED WORK */}
              <Link
                href="#work"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full border border-[var(--border-color)] bg-[var(--card-bg)] text-[var(--text-primary)] font-bold text-xs tracking-wider uppercase hover:border-[var(--accent-coral)] hover:text-[var(--accent-coral)] transition-all shadow-sm cursor-pointer"
              >
                <span>EXPLORE SELECTED WORK</span>
                <MoveRight className="w-4 h-4" />
              </Link>
            </motion.div>
          </div>
        </div>

        {/* Cinematic Floating Art-Direction Showcase (Philotium Motion Inspired) */}
        <div className="relative rounded-3xl border border-[var(--card-border)] bg-[var(--card-bg)] p-8 sm:p-12 overflow-hidden shadow-lg transition-colors">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center relative z-10">
            {/* Left Narrative */}
            <div className="md:col-span-6 space-y-4">
              <span className="inline-block text-xs uppercase px-3 py-1 rounded-full bg-[var(--accent-coral)]/15 text-[var(--accent-coral)] border border-[var(--accent-coral)]/25 font-bold tracking-wide">
                Art Direction &amp; Technology
              </span>
              <h3 className="font-display text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-[var(--text-primary)] leading-snug">
                Where <span className="font-serif-editorial text-[1.15em] font-normal text-[var(--accent-coral)]">uncompromising</span> aesthetic craft meets React engineering.
              </h3>
              <p className="text-[var(--text-muted)] text-sm sm:text-base leading-relaxed max-w-lg font-sans">
                We craft bespoke digital identities and fluid digital flagships for progressive brands worldwide. Every project is engineered with intentional typography and zero latency.
              </p>
            </div>

            {/* Right: Floating Visual Previews with careful spacing and separation */}
            <div className="md:col-span-6 flex flex-col gap-6 relative">
              {/* Floating Project Cards Container */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pb-2">
                <motion.div
                  style={{ y: yCard1, rotate: rotateCard1 }}
                  className="p-5 rounded-2xl bg-gradient-to-br from-[#200B0E] to-[#0A0203] text-white shadow-xl border border-white/10"
                >
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-[10px] tracking-wider uppercase text-[var(--accent-coral)] font-mono font-bold">Fintech Platform</span>
                    <span className="text-[10px] text-white/50">2026</span>
                  </div>
                  <h4 className="font-display text-xl font-bold">NEXORA</h4>
                  <p className="text-xs text-white/70 mt-1 font-serif-editorial italic">Autonomous Wealth Interface</p>
                  <div className="mt-4 pt-3 border-t border-white/10 text-[11px] text-[var(--accent-lime)] font-mono">
                    +148% Trade Velocity
                  </div>
                </motion.div>

                <motion.div
                  style={{ y: yCard2, rotate: rotateCard2 }}
                  className="p-5 rounded-2xl bg-gradient-to-br from-[#121212] to-[#1A0B07] text-white shadow-xl border border-white/10"
                >
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-[10px] tracking-wider uppercase text-[var(--accent-lime)] font-mono font-bold">E-Commerce</span>
                    <span className="text-[10px] text-white/50">2026</span>
                  </div>
                  <h4 className="font-display text-xl font-bold">VELOCE</h4>
                  <p className="text-xs text-white/70 mt-1 font-serif-editorial italic">60fps Hyper-Mobility</p>
                  <div className="mt-4 pt-3 border-t border-white/10 text-[11px] text-white/80 font-mono">
                    €42M Presales
                  </div>
                </motion.div>
              </div>

              {/* Horizontal Information Strip - Displaced downward to ensure ZERO collision or overlap */}
              <div className="mt-2 p-3.5 sm:p-4 rounded-xl bg-[var(--card-bg-elevated)] border border-[var(--border-color)] flex flex-col sm:flex-row items-center justify-between gap-2 text-xs shadow-sm">
                <span className="font-semibold text-[var(--text-primary)]">Interactive 3D &amp; Next.js 16</span>
                <span className="text-[var(--accent-coral)] font-mono font-medium">Sub-millisecond Edge Response</span>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="mt-10 flex items-center justify-between text-xs text-[var(--text-muted)]">
          <span className="flex items-center gap-2">
            <ArrowDown className="w-3.5 h-3.5 animate-bounce text-[var(--accent-coral)]" />
            <span className="tracking-widest uppercase font-medium">Scroll to explore studio</span>
          </span>
          <span className="hidden sm:inline font-sans uppercase tracking-wider text-[11px]">
            FORMORA® / Independent Digital Studio
          </span>
        </div>
      </div>
    </section>
  );
}
