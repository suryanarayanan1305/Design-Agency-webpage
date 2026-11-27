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
  const yCard1 = useTransform(scrollYProgress, [0, 1], [0, -110]);
  const yCard2 = useTransform(scrollYProgress, [0, 1], [0, -60]);
  const yCard3 = useTransform(scrollYProgress, [0, 1], [0, -140]);
  const rotateCard1 = useTransform(scrollYProgress, [0, 1], [-2, 3]);
  const rotateCard2 = useTransform(scrollYProgress, [0, 1], [3, -2]);

  return (
    <section
      ref={containerRef}
      className="relative pt-36 pb-24 md:pt-48 md:pb-36 px-6 sm:px-8 md:px-12 overflow-hidden bg-[var(--bg-page)]"
    >
      {/* Clean ambient depth glow - ZERO geometric grid lines */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[450px] ambient-glow rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Top Editorial Metadata Banner */}
        <div className="flex flex-wrap items-center justify-between gap-4 mb-10 pb-5 border-b border-[var(--border-color)] text-xs text-[var(--text-muted)] font-sans">
          <div className="flex items-center gap-3">
            <span className="tracking-widest uppercase font-semibold text-[var(--text-primary)]">
              VOL. 2026 / 27
            </span>
            <span className="opacity-30">•</span>
            <span className="tracking-wide uppercase text-[var(--accent-coral)] flex items-center gap-1.5 font-medium">
              <Sparkles className="w-3.5 h-3.5" />
              Creative Architecture &amp; Engineering
            </span>
          </div>

          <div className="hidden sm:flex items-center gap-2 tracking-wide font-medium">
            <span>Studio operating from India &amp; Remote Worldwide</span>
          </div>
        </div>

        {/* Hero Editorial Composition */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end mb-20">
          <div className="lg:col-span-8 space-y-3">
            <motion.h1
              initial={{ opacity: 0, y: 35 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1] }}
              className="font-display text-5xl sm:text-7xl md:text-8xl lg:text-[6.6rem] tracking-tight leading-[0.92] text-[var(--text-primary)]"
            >
              WE MAKE <br />
              <span className="font-serif-editorial text-[1.12em] tracking-normal font-normal text-[var(--accent-coral)]">
                digital
              </span>{" "}
              <br />
              FEEL DIFFERENT.
            </motion.h1>
          </div>

          <div className="lg:col-span-4 space-y-6 lg:pl-4 pb-2">
            <motion.p
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.85, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="text-[var(--text-muted)] text-base sm:text-lg leading-relaxed font-sans"
            >
              An independent creative studio shaping iconic brands, crafting responsive
              digital experiences, and turning ambitious concepts into memorable,
              high-performance interactions.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.85, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-wrap items-center gap-4 pt-1"
            >
              <Link
                href="#contact"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-[var(--text-primary)] text-[var(--bg-page)] font-semibold text-xs tracking-wider uppercase hover:bg-[var(--accent-coral)] hover:text-white transition-all shadow-md group"
              >
                Start a Project
                <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>

              <Link
                href="#work"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full border border-[var(--border-color)] text-[var(--text-primary)] font-medium text-xs tracking-wider uppercase hover:border-[var(--accent-coral)] transition-colors"
              >
                Explore Selected Work
                <MoveRight className="w-4 h-4" />
              </Link>
            </motion.div>
          </div>
        </div>

        {/* Cinematic Floating Art-Direction Showcase (Philotium Motion Inspired) */}
        <div className="relative rounded-3xl border border-[var(--border-color)] bg-[var(--card-bg)] p-8 sm:p-12 overflow-hidden shadow-xl transition-colors">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center relative z-10">
            {/* Left Narrative */}
            <div className="md:col-span-6 space-y-5">
              <span className="inline-block text-xs uppercase px-3 py-1 rounded-full bg-[var(--accent-coral)]/10 text-[var(--accent-coral)] border border-[var(--accent-coral)]/20 font-medium">
                Art Direction &amp; Technology
              </span>
              <h3 className="font-display text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-[var(--text-primary)] leading-snug">
                Where <span className="font-serif-editorial text-[1.15em] font-normal text-[var(--accent-coral)]">uncompromising</span> aesthetic craft meets React engineering.
              </h3>
              <p className="text-[var(--text-muted)] text-sm sm:text-base leading-relaxed max-w-lg">
                We craft bespoke digital identities and fluid digital flagships for progressive brands worldwide. Every project is engineered with intentional typography and zero latency.
              </p>
            </div>

            {/* Right: Floating Visual Previews with subtle scroll parallax */}
            <div className="md:col-span-6 grid grid-cols-2 gap-4 relative">
              <motion.div
                style={{ y: yCard1, rotate: rotateCard1 }}
                className="p-5 rounded-2xl bg-gradient-to-br from-neutral-900 to-black text-white shadow-xl border border-white/10"
              >
                <div className="flex items-center justify-between mb-4">
                  <span className="text-[10px] tracking-wider uppercase text-[var(--accent-coral)] font-mono font-bold">Fintech Platform</span>
                  <span className="text-[10px] text-white/50">2026</span>
                </div>
                <h4 className="font-display text-xl font-bold">NEXORA</h4>
                <p className="text-xs text-white/60 mt-1 font-serif-editorial italic">Autonomous Wealth Interface</p>
                <div className="mt-4 pt-3 border-t border-white/10 text-[11px] text-[var(--accent-lime)] font-mono">
                  +148% Trade Velocity
                </div>
              </motion.div>

              <motion.div
                style={{ y: yCard2, rotate: rotateCard2 }}
                className="p-5 rounded-2xl bg-gradient-to-br from-stone-800 to-neutral-900 text-white shadow-xl border border-white/10"
              >
                <div className="flex items-center justify-between mb-4">
                  <span className="text-[10px] tracking-wider uppercase text-[var(--accent-lime)] font-mono font-bold">E-Commerce</span>
                  <span className="text-[10px] text-white/50">2026</span>
                </div>
                <h4 className="font-display text-xl font-bold">VELOCE</h4>
                <p className="text-xs text-white/60 mt-1 font-serif-editorial italic">60fps Hyper-Mobility</p>
                <div className="mt-4 pt-3 border-t border-white/10 text-[11px] text-white/80 font-mono">
                  €42M Presales
                </div>
              </motion.div>

              <motion.div
                style={{ y: yCard3 }}
                className="col-span-2 p-4 rounded-xl bg-black/5 dark:bg-white/5 border border-[var(--border-color)] flex items-center justify-between text-xs text-[var(--text-muted)]"
              >
                <span className="font-medium text-[var(--text-primary)]">Interactive 3D &amp; Next.js 16</span>
                <span className="text-[var(--accent-coral)] font-mono">Sub-millisecond Edge Response</span>
              </motion.div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="mt-12 flex items-center justify-between text-xs text-[var(--text-muted)]">
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
