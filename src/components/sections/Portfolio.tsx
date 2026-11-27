"use client";

import React, { useRef } from "react";
import ScrollHighlightText from "@/components/ui/ScrollHighlightText";
import { ArrowUpRight, Sparkles, Layers, ShieldCheck } from "lucide-react";

interface ProjectCover {
  id: string;
  number: string;
  title: string;
  client: string;
  category: string;
  year: string;
  tagline: string;
  description: string;
  deliverables: string[];
  metrics: string;
  // Specific creative art-direction styles:
  coverTheme: {
    bgClass: string;
    textClass: string;
    accentClass: string;
    visualArt: React.ReactNode;
  };
}

export default function Portfolio() {
  const projects: ProjectCover[] = [
    {
      id: "nexora",
      number: "01",
      title: "NEXORA",
      client: "Nexora Capital Partners",
      category: "Fintech / Digital Product",
      year: "2026",
      tagline: "Autonomous Wealth Architecture for Institutional Capital",
      description:
        "A next-generation financial operating system with deep burgundy tones, algorithmic liquidity balancing, and dark telemetry interfaces designed for institutional treasuries.",
      deliverables: ["Platform UX/UI", "Design System", "Real-Time Telemetry Interface"],
      metrics: "+148% Trade Velocity",
      coverTheme: {
        bgClass: "bg-gradient-to-br from-[#200B0E] via-[#140608] to-[#0A0203]",
        textClass: "text-[#FFF0F2]",
        accentClass: "text-[#FF4A68]",
        visualArt: (
          <div className="space-y-4 p-6 rounded-2xl bg-black/40 border border-[#FF4A68]/20 backdrop-blur-md">
            <div className="flex justify-between items-center text-xs font-mono text-[#FF4A68]">
              <span>LEDGER SYNC: OK</span>
              <span>ALGO TRADING ACTIVE</span>
            </div>
            <div className="h-16 flex items-end gap-1.5 pt-2">
              {[45, 65, 30, 85, 60, 95, 75, 110, 80, 130].map((h, i) => (
                <div
                  key={i}
                  style={{ height: `${h * 0.45}px` }}
                  className="flex-1 bg-gradient-to-t from-[#FF4A68]/30 to-[#FF4A68] rounded-t-sm"
                />
              ))}
            </div>
            <div className="text-[11px] text-white/50 font-mono flex justify-between">
              <span>$482.4M CAPITAL POOL</span>
              <span className="text-[#C7F36B]">+24.8% APY</span>
            </div>
          </div>
        ),
      },
    },
    {
      id: "monograph",
      number: "02",
      title: "MONOGRAPH",
      client: "Monograph Living Zurich",
      category: "Brand Identity / Lifestyle",
      year: "2026",
      tagline: "Editorial Minimalist Homeware & Spatial Design",
      description:
        "A refined visual identity and sensorial digital flagship in warm ivory and deep charcoal, pairing Swiss editorial serif typography with curated architectural photography.",
      deliverables: ["Visual Identity", "Custom Typography", "Headless Commerce"],
      metrics: "Featured in Wallpaper* & Awwwards",
      coverTheme: {
        bgClass: "bg-gradient-to-br from-[#EAE6DD] via-[#DFDBD0] to-[#CEC8BC]",
        textClass: "text-[#1A1A18]",
        accentClass: "text-[#8B5E3C]",
        visualArt: (
          <div className="p-8 rounded-2xl bg-white/70 border border-[#1A1A18]/10 text-center space-y-4 shadow-sm">
            <span className="font-serif-editorial text-4xl italic text-[#1A1A18] block">
              &ldquo;Silence in form, clarity in everyday living.&rdquo;
            </span>
            <div className="pt-2 text-xs font-mono uppercase tracking-widest text-[#8B5E3C]">
              Zurich • Architectural Object Atelier
            </div>
          </div>
        ),
      },
    },
    {
      id: "veloce",
      number: "03",
      title: "VELOCE",
      client: "Veloce Hyper-Mobility",
      category: "E-Commerce / Experience",
      year: "2025",
      tagline: "Ultra-Lightweight Electric Supercar Configurator",
      description:
        "An automotive performance e-commerce platform featuring dynamic black surfaces, vivid coral aerodynamic trims, and high-velocity 60fps configurator interactions.",
      deliverables: ["3D Configurator", "Motion System", "Global Checkout"],
      metrics: "€42M Presales Generated",
      coverTheme: {
        bgClass: "bg-gradient-to-br from-[#121212] via-[#1A0B07] to-[#0A0504]",
        textClass: "text-white",
        accentClass: "text-[#FF5733]",
        visualArt: (
          <div className="p-6 rounded-2xl bg-white/5 border border-[#FF5733]/30 space-y-4">
            <div className="flex justify-between items-center text-xs font-mono text-[#FF5733]">
              <span>CARBON MONOCOQUE CHASSIS</span>
              <span>0-100 KM/H: 1.84s</span>
            </div>
            <div className="relative py-4 flex items-center justify-center">
              <div className="font-display text-4xl sm:text-5xl font-extrabold tracking-tighter text-white/90">
                03 // V-SPEC
              </div>
            </div>
            <div className="flex justify-between text-xs text-white/60 font-mono pt-2 border-t border-white/10">
              <span>WEIGHT: 980 KG</span>
              <span className="text-[var(--accent-lime)]">ALL ELECTRIC TORQUE</span>
            </div>
          </div>
        ),
      },
    },
    {
      id: "orbital",
      number: "04",
      title: "ORBITAL",
      client: "Orbital Cloud Systems",
      category: "SaaS / Dashboard",
      year: "2025",
      tagline: "Autonomous Kubernetes Cloud Orchestration",
      description:
        "A dark navy observability dashboard accented with ultraviolet data telemetry, delivering high-density data visualizations for distributed infrastructure architects.",
      deliverables: ["Product Architecture", "Data Visualization", "Dark Mode Suite"],
      metrics: "99.999% Fault Reduction",
      coverTheme: {
        bgClass: "bg-gradient-to-br from-[#0B0F19] via-[#080B13] to-[#04060A]",
        textClass: "text-[#F0F4FF]",
        accentClass: "text-[#818CF8]",
        visualArt: (
          <div className="p-6 rounded-2xl bg-[#818CF8]/10 border border-[#818CF8]/30 space-y-3 font-mono text-xs">
            <div className="flex items-center justify-between text-[#818CF8]">
              <span>CLUSTER // US-EAST-1</span>
              <span className="text-[#C7F36B]">HEALTH: 100%</span>
            </div>
            <div className="grid grid-cols-3 gap-2 py-2">
              <div className="p-2 rounded bg-black/40 border border-white/10 text-center">
                <span className="block text-white font-bold text-sm">2,480</span>
                <span className="text-[10px] text-white/50">Nodes Active</span>
              </div>
              <div className="p-2 rounded bg-black/40 border border-white/10 text-center">
                <span className="block text-[#818CF8] font-bold text-sm">0.8ms</span>
                <span className="text-[10px] text-white/50">Avg Latency</span>
              </div>
              <div className="p-2 rounded bg-black/40 border border-white/10 text-center">
                <span className="block text-[#C7F36B] font-bold text-sm">0 Faults</span>
                <span className="text-[10px] text-white/50">Auto-Healed</span>
              </div>
            </div>
          </div>
        ),
      },
    },
    {
      id: "noir-atelier",
      number: "05",
      title: "NOIR ATELIER",
      client: "Noir Fragrances Paris",
      category: "Luxury / Creative Direction",
      year: "2025",
      tagline: "Sensory Olfactory Exploration & Bespoke Perfumery",
      description:
        "A monochrome Parisian haute-parfumerie digital boutique with deep black and ivory contrast, dramatic editorial whitespace, and intimate olfactory storytelling.",
      deliverables: ["Creative Direction", "Editorial Storytelling", "Interactive Fragrance Wheel"],
      metrics: "4.8x Avg Session Duration",
      coverTheme: {
        bgClass: "bg-gradient-to-br from-[#111111] via-[#090909] to-[#000000]",
        textClass: "text-[#F5F5F3]",
        accentClass: "text-[#D4AF37]",
        visualArt: (
          <div className="p-8 rounded-2xl bg-white/5 border border-white/15 text-center space-y-3">
            <span className="font-serif-editorial text-3xl italic text-white/90 block">
              N° 05 — Ambre Nocturne
            </span>
            <p className="text-xs font-mono uppercase tracking-widest text-[#D4AF37]">
              Extrait de Parfum • Place Vendôme, Paris
            </p>
          </div>
        ),
      },
    },
    {
      id: "greenform",
      number: "06",
      title: "GREENFORM",
      client: "Greenform Ecological Labs",
      category: "Sustainability / Digital Experience",
      year: "2024",
      tagline: "Transparent Carbon Ledger for Circular Manufacturing",
      description:
        "An ecological data portal with natural moss-green and warm stone tones, communicating biopolymer lifecycles and verified supply-chain decarbonization audits.",
      deliverables: ["Data Journalism", "Interactive Infographics", "Public Audit Tool"],
      metrics: "1.2M Verified Tons Tracked",
      coverTheme: {
        bgClass: "bg-gradient-to-br from-[#0F1E13] via-[#0A150D] to-[#060D08]",
        textClass: "text-[#EAF4EC]",
        accentClass: "text-[#86EFAC]",
        visualArt: (
          <div className="p-6 rounded-2xl bg-[#86EFAC]/10 border border-[#86EFAC]/30 space-y-3">
            <div className="flex justify-between items-center text-xs font-mono text-[#86EFAC]">
              <span>BIOPOLYMER IMPACT AUDIT</span>
              <span>100% CIRCULAR</span>
            </div>
            <div className="text-sm font-sans text-white/80">
              Zero Petroleum • Microplastic Degradation Rate: 90 Days
            </div>
            <div className="text-xs text-[#86EFAC] font-mono pt-2 border-t border-white/10">
              Verified Open Carbon Ledger #GF-2026-EU
            </div>
          </div>
        ),
      },
    },
  ];

  return (
    <section
      id="work"
      className="py-24 md:py-36 px-6 sm:px-8 md:px-12 bg-[var(--bg-page)] border-t border-[var(--border-color)] relative transition-colors"
    >
      <div className="max-w-7xl mx-auto">
        {/* Header with Scroll Highlight */}
        <div className="mb-20 space-y-4 max-w-4xl">
          <div className="flex items-center gap-3">
            <span className="font-serif-editorial text-sm italic text-[var(--accent-coral)]">
              Selected Studio Archives
            </span>
            <span className="text-xs uppercase tracking-widest text-[var(--text-muted)]">
              / Six Distinct Case Studies
            </span>
          </div>

          <ScrollHighlightText
            className="font-display text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-[var(--text-primary)] leading-[1.08]"
            serifItalicIndices={[1, 3]}
          >
            SELECTED WORK. DIFFERENT THINKING.
          </ScrollHighlightText>

          <p className="text-base sm:text-lg text-[var(--text-muted)] font-sans leading-relaxed">
            A showcase of six bespoke digital concept systems created for progressive brands in finance, architecture, mobility, and luxury.
          </p>
        </div>

        {/* Stacked Overlapping Project Cards (Philotium Scroll Experience) */}
        <div className="relative space-y-12 md:space-y-16">
          {projects.map((project, index) => {
            // Calculating sticky top position so cards stack with controlled offset
            const stickyTop = 100 + index * 24;

            return (
              <div
                key={project.id}
                style={{ top: `${stickyTop}px` }}
                className={`sticky rounded-3xl p-8 sm:p-12 md:p-14 shadow-2xl border border-black/10 dark:border-white/15 overflow-hidden transition-all duration-300 ${project.coverTheme.bgClass} ${project.coverTheme.textClass}`}
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                  {/* Left Narrative */}
                  <div className="lg:col-span-7 space-y-6">
                    <div className="flex items-center gap-3">
                      <span className="font-serif-editorial text-2xl italic">
                        {project.number} —
                      </span>
                      <span
                        className={`text-xs font-mono uppercase tracking-wider font-semibold ${project.coverTheme.accentClass}`}
                      >
                        {project.category}
                      </span>
                      <span className="text-xs opacity-40">•</span>
                      <span className="text-xs opacity-60 font-mono">{project.year}</span>
                    </div>

                    <div>
                      <h3 className="font-display text-4xl sm:text-5xl md:text-6xl font-black tracking-tight leading-none mb-3">
                        {project.title}
                      </h3>
                      <p className="font-serif-editorial text-xl sm:text-2xl italic opacity-90">
                        {project.tagline}
                      </p>
                    </div>

                    <p className="text-sm sm:text-base opacity-80 leading-relaxed max-w-xl font-sans">
                      {project.description}
                    </p>

                    {/* Deliverables Tags */}
                    <div className="pt-2 flex flex-wrap gap-2">
                      {project.deliverables.map((del, dIdx) => (
                        <span
                          key={dIdx}
                          className="text-xs font-sans px-3 py-1 rounded-full bg-white/10 border border-white/15"
                        >
                          {del}
                        </span>
                      ))}
                    </div>

                    {/* Footer Row */}
                    <div className="pt-4 border-t border-white/10 flex items-center justify-between text-xs font-mono opacity-80">
                      <span>Client: {project.client}</span>
                      <span className="font-bold underline decoration-[var(--accent-coral)] underline-offset-4">
                        {project.metrics}
                      </span>
                    </div>
                  </div>

                  {/* Right Unique Visual Artwork & Composition */}
                  <div className="lg:col-span-5">
                    {project.coverTheme.visualArt}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Portfolio Disclaimer */}
        <div className="mt-20 p-6 rounded-2xl bg-[var(--card-bg)] border border-[var(--border-color)] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[var(--text-muted)] font-sans">
          <div className="flex items-center gap-2">
            <Sparkles className="w-4 h-4 text-[var(--accent-coral)]" />
            <span>
              All six showcased works represent studio conceptual case studies demonstrating comprehensive UI/UX and technical capabilities.
            </span>
          </div>
          <span className="text-[var(--text-primary)] font-medium whitespace-nowrap">
            Weboin Internship Evaluation
          </span>
        </div>
      </div>
    </section>
  );
}
