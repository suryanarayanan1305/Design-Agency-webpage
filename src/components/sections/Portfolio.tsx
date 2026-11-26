"use client";

import React, { useState } from "react";
import SectionHeading from "@/components/ui/SectionHeading";
import { PROJECTS, Project } from "@/data/agency";
import { ArrowUpRight, Layers, ExternalLink, Sparkles } from "lucide-react";

export default function Portfolio() {
  const [activeFilter, setActiveFilter] = useState("All");

  const categories = ["All", "Fintech", "Brand Identity", "E-Commerce", "SaaS", "Luxury"];

  const filteredProjects = PROJECTS.filter((project) => {
    if (activeFilter === "All") return true;
    return project.category.toLowerCase().includes(activeFilter.toLowerCase());
  });

  return (
    <section id="work" className="py-24 md:py-32 px-6 sm:px-8 md:px-12 bg-[#F2EFE8] border-t border-[#121212]/10">
      <div className="max-w-7xl mx-auto">
        <SectionHeading
          number="03"
          badge="Selected Studio Archives"
          title="SELECTED WORK. DIFFERENT THINKING."
          subtitle="A showcase of six bespoke digital concept systems created for progressive brands in finance, architecture, mobility, and luxury."
        />

        {/* Filter Pills */}
        <div className="flex flex-wrap items-center gap-2.5 mb-14 pb-4 border-b border-[#121212]/10">
          <span className="font-mono text-xs uppercase text-[#121212]/50 mr-2 flex items-center gap-1.5">
            <Layers className="w-3.5 h-3.5" /> Filter by:
          </span>
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveFilter(cat)}
              className={`px-4 py-1.5 rounded-full text-xs font-mono transition-all uppercase tracking-wider ${
                activeFilter === cat
                  ? "bg-[#121212] text-[#F2EFE8] font-bold shadow-sm"
                  : "bg-black/5 text-[#121212]/70 hover:bg-black/10"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Editorial Asymmetric Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          {filteredProjects.map((project, idx) => {
            // Asymmetric spans: 1st and 4th projects take 7 cols, 2nd and 5th take 5 cols, etc.
            const isWide = idx % 3 === 0;
            const colSpanClass = isWide ? "md:col-span-7" : "md:col-span-5";

            return (
              <article
                key={project.id}
                className={`${colSpanClass} group rounded-3xl overflow-hidden border border-[#121212]/12 bg-white flex flex-col justify-between hover:shadow-xl hover:border-[#121212]/30 transition-all duration-300`}
              >
                {/* Visual Thumbnail Container with Artistic Gradient & Typography */}
                <div
                  className={`relative h-64 sm:h-80 md:h-96 w-full p-8 flex flex-col justify-between bg-gradient-to-br ${project.gradient} text-white overflow-hidden`}
                >
                  {/* Subtle Grid Backdrop */}
                  <div className="absolute inset-0 bg-dark-grid opacity-30 pointer-events-none" />

                  {/* Top Bar inside card */}
                  <div className="relative z-10 flex items-center justify-between">
                    <span className="font-mono text-xs font-bold px-3 py-1 rounded-full bg-white/10 backdrop-blur-md border border-white/20">
                      {project.number} / {project.badge}
                    </span>
                    <span className="font-mono text-xs text-white/60">
                      {project.year}
                    </span>
                  </div>

                  {/* Ambient Monogram / Typography Artwork */}
                  <div className="relative z-10 my-auto text-center transform transition-transform duration-500 group-hover:scale-105">
                    <h3 className="font-display text-4xl sm:text-5xl md:text-6xl font-black tracking-tight text-white/90">
                      {project.title}
                    </h3>
                    <p className="font-mono text-xs uppercase tracking-widest text-[#C7F36B] mt-2">
                      {project.tagline}
                    </p>
                  </div>

                  {/* Bottom Stats / Metrics */}
                  <div className="relative z-10 flex items-center justify-between pt-4 border-t border-white/10 text-xs">
                    <span className="font-mono text-white/70">
                      Client: {project.client}
                    </span>
                    <span className="font-mono font-semibold px-2.5 py-0.5 rounded bg-white/10 text-white">
                      {project.metrics}
                    </span>
                  </div>
                </div>

                {/* Content Details Below Thumbnail */}
                <div className="p-6 sm:p-8 space-y-4 flex-grow flex flex-col justify-between">
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="font-mono text-xs uppercase tracking-wider text-[#FF5733] font-semibold">
                        {project.category}
                      </span>
                      <ArrowUpRight className="w-5 h-5 text-[#121212] group-hover:text-[#FF5733] group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
                    </div>
                    <p className="text-sm text-[#73736C] leading-relaxed font-sans">
                      {project.description}
                    </p>
                  </div>

                  {/* Deliverables tags */}
                  <div className="pt-4 border-t border-[#121212]/10 flex flex-wrap gap-1.5">
                    {project.deliverables.map((item, dIdx) => (
                      <span
                        key={dIdx}
                        className="text-[11px] font-mono px-2.5 py-1 rounded-md bg-[#121212]/5 text-[#121212]/70"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </article>
            );
          })}
        </div>

        {/* Portfolio Disclaimer */}
        <div className="mt-14 p-5 rounded-2xl bg-black/5 border border-black/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-[#73736C]">
          <div className="flex items-center gap-2">
            <Sparkles className="w-4 h-4 text-[#FF5733]" />
            <span>
              All six showcased works represent studio conceptual case studies demonstrating comprehensive UI/UX &amp; technical capabilities.
            </span>
          </div>
          <span className="text-[#121212] font-semibold whitespace-nowrap">
            Weboin Internship Evaluation
          </span>
        </div>
      </div>
    </section>
  );
}
