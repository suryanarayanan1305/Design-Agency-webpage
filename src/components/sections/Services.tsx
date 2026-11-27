"use client";

import React, { useState } from "react";
import { SERVICES } from "@/data/agency";
import {
  Layout,
  Code2,
  Sparkles,
  Boxes,
  ArrowUpRight,
  CheckCircle2,
} from "lucide-react";

export default function Services() {
  const [activeService, setActiveService] = useState<string>(SERVICES[0].id);

  const getServiceIcon = (iconName: string) => {
    switch (iconName) {
      case "Layout":
        return <Layout className="w-5 h-5" />;
      case "Code2":
        return <Code2 className="w-5 h-5" />;
      case "Sparkles":
        return <Sparkles className="w-5 h-5" />;
      case "Boxes":
        return <Boxes className="w-5 h-5" />;
      default:
        return <Layout className="w-5 h-5" />;
    }
  };

  return (
    <section
      id="services"
      className="py-24 md:py-36 px-6 sm:px-8 md:px-12 bg-[var(--bg-page)] border-t border-[var(--border-color)] relative transition-colors"
    >
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header - Fixed contrast: Deep charcoal in light mode, warm white in dark mode */}
        <div className="mb-16 md:mb-20 space-y-4 max-w-4xl">
          <div className="flex items-center gap-3">
            <span className="font-serif-editorial text-sm italic text-[var(--accent-coral)] font-semibold">
              Practice Disciplines
            </span>
            <span className="text-xs uppercase tracking-widest text-[var(--text-muted)] font-medium">
              / Four Core Capabilities
            </span>
          </div>

          <h2 className="font-display text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-[var(--text-primary)] leading-tight">
            WHAT WE BRING TO THE TABLE.
          </h2>
          <p className="text-[var(--text-muted)] text-base sm:text-lg max-w-2xl font-sans leading-relaxed">
            Four disciplined creative practices engineered to transform ideas into memorable digital products and resilient brand systems.
          </p>
        </div>

        {/* Services Master Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Services Selector Column */}
          <div className="lg:col-span-5 space-y-3">
            {SERVICES.map((service) => {
              const isActive = activeService === service.id;
              return (
                <button
                  key={service.id}
                  onClick={() => setActiveService(service.id)}
                  className={`w-full text-left p-6 rounded-2xl transition-all border flex items-center justify-between group cursor-pointer ${
                    isActive
                      ? "bg-[var(--card-bg)] border-[var(--accent-coral)] text-[var(--text-primary)] shadow-md ring-1 ring-[var(--accent-coral)]/30"
                      : "bg-[var(--card-bg)] border-[var(--border-color)] hover:border-[var(--accent-coral)]/50 text-[var(--text-primary)]/80 hover:text-[var(--text-primary)]"
                  }`}
                >
                  <div className="flex items-center gap-4">
                    <span className="font-serif-editorial text-xl italic text-[var(--accent-coral)] font-bold">
                      {service.number}
                    </span>
                    <span className="font-display text-lg sm:text-xl font-bold tracking-tight text-[var(--text-primary)]">
                      {service.title}
                    </span>
                  </div>

                  <div
                    className={`p-2 rounded-full transition-all ${
                      isActive
                        ? "bg-[var(--accent-coral)] text-white translate-x-1"
                        : "bg-black/5 dark:bg-white/10 text-[var(--text-muted)] group-hover:text-[var(--accent-coral)]"
                    }`}
                  >
                    <ArrowUpRight className="w-4 h-4" />
                  </div>
                </button>
              );
            })}
          </div>

          {/* Active Service Showcase Detail Pane */}
          <div className="lg:col-span-7">
            {SERVICES.map((service) => {
              if (service.id !== activeService) return null;
              return (
                <div
                  key={service.id}
                  className="p-8 sm:p-12 rounded-3xl bg-[var(--card-bg)] border border-[var(--border-color)] shadow-xl relative overflow-hidden transition-all duration-300"
                >
                  {/* Subtle Accent Glow */}
                  <div className="absolute top-0 right-0 w-80 h-80 bg-[var(--accent-coral)]/8 rounded-full blur-3xl pointer-events-none" />

                  {/* Header */}
                  <div className="flex items-center justify-between pb-7 border-b border-[var(--border-color)] mb-7">
                    <div className="flex items-center gap-3.5">
                      <div className="p-3 rounded-xl bg-[var(--accent-coral)]/15 text-[var(--accent-coral)] border border-[var(--accent-coral)]/25">
                        {getServiceIcon(service.icon)}
                      </div>
                      <div>
                        <span className="text-xs text-[var(--accent-coral)] font-mono tracking-wider uppercase font-semibold">
                          Practice Area
                        </span>
                        <h3 className="font-display text-2xl sm:text-3xl font-bold text-[var(--text-primary)]">
                          {service.title}
                        </h3>
                      </div>
                    </div>
                    <span className="font-serif-editorial text-4xl italic text-[var(--text-muted)]/40">
                      {service.number}
                    </span>
                  </div>

                  {/* Description */}
                  <p className="text-[var(--text-primary)]/85 text-base sm:text-lg leading-relaxed mb-8 font-sans">
                    {service.description}
                  </p>

                  {/* Strategic Deliverables */}
                  <div className="mb-8">
                    <h4 className="text-xs uppercase tracking-wider text-[var(--text-muted)] mb-3.5 font-sans font-bold">
                      Strategic Deliverables
                    </h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {service.deliverables.map((item, idx) => (
                        <div
                          key={idx}
                          className="flex items-center gap-2.5 text-sm text-[var(--text-primary)] bg-[var(--bg-page)] p-3 rounded-xl border border-[var(--border-color)]"
                        >
                          <CheckCircle2 className="w-4 h-4 text-[var(--accent-coral)] shrink-0" />
                          <span className="font-medium">{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Core Methodologies & Stack */}
                  <div>
                    <h4 className="text-xs uppercase tracking-wider text-[var(--text-muted)] mb-3 font-sans font-bold">
                      Core Stack &amp; Methodologies
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {service.capabilities.map((cap, idx) => (
                        <span
                          key={idx}
                          className="px-3 py-1 rounded-full text-xs font-sans bg-[var(--bg-page)] text-[var(--text-muted)] border border-[var(--border-color)] font-medium"
                        >
                          {cap}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
