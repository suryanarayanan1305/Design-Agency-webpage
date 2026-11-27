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
      className="py-24 md:py-36 px-6 sm:px-8 md:px-12 bg-[var(--surface-dark)] text-white relative transition-colors"
    >
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="mb-16 md:mb-20 space-y-4">
          <div className="flex items-center gap-3">
            <span className="font-serif-editorial text-sm italic text-[var(--accent-coral)]">
              Practice Disciplines
            </span>
            <span className="text-xs uppercase tracking-widest text-white/50">
              / Four Core Capabilities
            </span>
          </div>

          <h2 className="font-display text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-white leading-tight">
            WHAT WE BRING TO THE TABLE.
          </h2>
          <p className="text-white/60 text-base sm:text-lg max-w-2xl font-sans leading-relaxed">
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
                      ? "bg-white/10 border-[var(--accent-coral)] text-white shadow-lg"
                      : "bg-white/5 border-white/10 hover:border-white/25 text-white/70 hover:text-white"
                  }`}
                >
                  <div className="flex items-center gap-4">
                    <span className="font-serif-editorial text-lg italic text-[var(--accent-coral)]">
                      {service.number}
                    </span>
                    <span className="font-display text-lg sm:text-xl font-bold tracking-tight">
                      {service.title}
                    </span>
                  </div>

                  <div
                    className={`p-2 rounded-full transition-all ${
                      isActive
                        ? "bg-[var(--accent-coral)] text-white translate-x-1"
                        : "bg-white/5 text-white/40 group-hover:text-white"
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
                  className="p-8 sm:p-12 rounded-3xl bg-[var(--surface-dark-card)] border border-white/15 relative overflow-hidden transition-all duration-300"
                >
                  {/* Subtle Accent Glow */}
                  <div className="absolute top-0 right-0 w-80 h-80 bg-[var(--accent-coral)]/10 rounded-full blur-3xl pointer-events-none" />

                  {/* Header */}
                  <div className="flex items-center justify-between pb-8 border-b border-white/10 mb-8">
                    <div className="flex items-center gap-3">
                      <div className="p-3 rounded-xl bg-[var(--accent-coral)]/20 text-[var(--accent-coral)] border border-[var(--accent-coral)]/30">
                        {getServiceIcon(service.icon)}
                      </div>
                      <div>
                        <span className="text-xs text-[var(--accent-lime)] font-mono tracking-wider uppercase">
                          Practice Area
                        </span>
                        <h3 className="font-display text-2xl sm:text-3xl font-bold text-white">
                          {service.title}
                        </h3>
                      </div>
                    </div>
                    <span className="font-serif-editorial text-4xl italic text-white/20">
                      {service.number}
                    </span>
                  </div>

                  {/* Description */}
                  <p className="text-white/80 text-base sm:text-lg leading-relaxed mb-8 font-sans">
                    {service.description}
                  </p>

                  {/* Strategic Deliverables */}
                  <div className="mb-8">
                    <h4 className="text-xs uppercase tracking-wider text-white/50 mb-4 font-sans font-medium">
                      Strategic Deliverables
                    </h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {service.deliverables.map((item, idx) => (
                        <div
                          key={idx}
                          className="flex items-center gap-2.5 text-sm text-white/90 bg-white/5 p-3 rounded-xl border border-white/5"
                        >
                          <CheckCircle2 className="w-4 h-4 text-[var(--accent-lime)] shrink-0" />
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Core Methodologies & Stack */}
                  <div>
                    <h4 className="text-xs uppercase tracking-wider text-white/50 mb-3 font-sans font-medium">
                      Core Stack &amp; Methodologies
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {service.capabilities.map((cap, idx) => (
                        <span
                          key={idx}
                          className="px-3 py-1 rounded-full text-xs font-sans bg-white/10 text-white/80 border border-white/10"
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
