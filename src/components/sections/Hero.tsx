"use client";

import React from "react";
import Link from "next/link";
import { ArrowUpRight, Sparkles, ArrowDown, MoveRight } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative pt-36 pb-20 md:pt-48 md:pb-32 px-6 sm:px-8 md:px-12 bg-agency-grid overflow-hidden">
      {/* Decorative architectural background circle */}
      <div className="absolute top-20 right-10 w-96 h-96 bg-[#FF5733]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-1/3 w-80 h-80 bg-[#C7F36B]/15 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        {/* Top Badges & Micro-meta */}
        <div className="flex flex-wrap items-center justify-between gap-4 mb-8 pb-6 border-b border-[#121212]/10">
          <div className="flex items-center gap-3">
            <span className="font-mono text-xs uppercase tracking-wider text-[#121212]/60 font-semibold">
              Vol. 2026 / 27
            </span>
            <span className="text-black/20">•</span>
            <span className="font-mono text-xs uppercase tracking-wider text-[#FF5733] font-medium flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5" />
              Creative Architecture &amp; Engineering
            </span>
          </div>

          <div className="hidden sm:flex items-center gap-6 font-mono text-xs text-[#121212]/60">
            <span>[EST. 2022]</span>
            <span>LAT. 35.6762° N / 139.6503° E</span>
          </div>
        </div>

        {/* Hero Headline Composition - Swiss Editorial Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end mb-16">
          <div className="lg:col-span-8 space-y-4">
            <h1 className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-tight leading-[0.94] text-[#121212]">
              WE MAKE <br />
              <span className="text-[#FF5733]">DIGITAL</span> <br />
              FEEL DIFFERENT.
            </h1>
          </div>

          <div className="lg:col-span-4 space-y-6 lg:pl-6 pb-2">
            <p className="text-[#121212]/80 text-lg sm:text-xl leading-relaxed font-sans">
              An independent creative studio shaping brands, building responsive
              digital experiences, and turning ambitious ideas into meaningful,
              high-performance interactions.
            </p>

            <div className="flex flex-wrap items-center gap-4 pt-2">
              <Link
                href="#contact"
                className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-full bg-[#121212] text-[#F2EFE8] font-semibold text-sm uppercase tracking-wider hover:bg-[#FF5733] transition-all shadow-md group"
              >
                Start a Project
                <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>

              <Link
                href="#work"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full border border-[#121212]/20 text-[#121212] font-semibold text-sm uppercase tracking-wider hover:bg-[#121212]/5 transition-colors"
              >
                Explore Work
                <MoveRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>

        {/* Hero Interactive Visual Showcase Card */}
        <div className="relative rounded-2xl border border-[#121212]/15 bg-[#121212] text-[#F2EFE8] p-8 sm:p-12 overflow-hidden shadow-xl">
          <div className="absolute top-0 right-0 w-full h-full bg-dark-grid opacity-20 pointer-events-none" />

          {/* Abstract geometric sculpture / architectural preview */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 relative z-10 items-center">
            <div className="md:col-span-7 space-y-4">
              <span className="inline-block font-mono text-xs uppercase px-3 py-1 rounded bg-[#FF5733]/20 text-[#FF5733] border border-[#FF5733]/30">
                Philosophy in Practice
              </span>
              <h3 className="font-display text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight leading-snug">
                Where uncompromising aesthetic direction meets modern React engineering.
              </h3>
              <p className="text-white/60 text-sm sm:text-base leading-relaxed max-w-xl">
                We bridge the chasm between visionary brand identity, ergonomic UI/UX, and sub-millisecond Next.js App Router performance.
              </p>
            </div>

            <div className="md:col-span-5 grid grid-cols-2 gap-4">
              <div className="p-5 rounded-xl bg-white/5 border border-white/10 hover:border-[#FF5733]/40 transition-colors">
                <span className="font-display text-3xl sm:text-4xl font-bold text-[#FF5733]">99.8%</span>
                <p className="text-xs text-white/60 mt-1 uppercase tracking-wider font-mono">Performance Score</p>
              </div>
              <div className="p-5 rounded-xl bg-white/5 border border-white/10 hover:border-[#C7F36B]/40 transition-colors">
                <span className="font-display text-3xl sm:text-4xl font-bold text-[#C7F36B]">14+</span>
                <p className="text-xs text-white/60 mt-1 uppercase tracking-wider font-mono">Design Accolades</p>
              </div>
              <div className="p-5 rounded-xl bg-white/5 border border-white/10 hover:border-[#C7F36B]/40 transition-colors">
                <span className="font-display text-3xl sm:text-4xl font-bold text-white">60fps</span>
                <p className="text-xs text-white/60 mt-1 uppercase tracking-wider font-mono">Fluid Motion</p>
              </div>
              <div className="p-5 rounded-xl bg-white/5 border border-white/10 hover:border-[#FF5733]/40 transition-colors">
                <span className="font-display text-3xl sm:text-4xl font-bold text-white">100%</span>
                <p className="text-xs text-white/60 mt-1 uppercase tracking-wider font-mono">TypeScript Typesafe</p>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="mt-12 flex items-center justify-between text-xs font-mono text-[#121212]/50">
          <span className="flex items-center gap-2">
            <ArrowDown className="w-3.5 h-3.5 animate-bounce text-[#FF5733]" />
            SCROLL TO EXPLORE STUDIO
          </span>
          <span className="hidden sm:inline">FORMORA® / DESIGN AGENCY REPUTATION</span>
        </div>
      </div>
    </section>
  );
}
