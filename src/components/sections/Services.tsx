"use client";

import React, { useState } from "react";
import SectionHeading from "@/components/ui/SectionHeading";
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
        return <Layout className="w-6 h-6" />;
      case "Code2":
        return <Code2 className="w-6 h-6" />;
      case "Sparkles":
        return <Sparkles className="w-6 h-6" />;
      case "Boxes":
        return <Boxes className="w-6 h-6" />;
      default:
        return <Layout className="w-6 h-6" />;
    }
  };

  return (
    <section id="services" className="py-24 md:py-32 px-6 sm:px-8 md:px-12 bg-[#121212] text-[#F2EFE8] relative">
      <div className="max-w-7xl mx-auto relative z-10">
        <SectionHeading
          number="02"
          badge="Our Core Capabilities"
          title="WHAT WE BRING TO THE TABLE."
          subtitle="Four disciplined creative practices engineered to transform ideas into memorable digital products and resilient brand systems."
          isDark={true}
        />

        {/* Editorial Accordion / Interactive Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Services List Column */}
          <div className="lg:col-span-5 space-y-3">
            {SERVICES.map((service) => {
              const isActive = activeService === service.id;
              return (
                <button
                  key={service.id}
                  onClick={() => setActiveService(service.id)}
                  className={`w-full text-left p-6 rounded-2xl transition-all border flex items-center justify-between group ${
                    isActive
                      ? "bg-white/10 border-[#FF5733] shadow-lg shadow-[#FF5733]/5 text-white"
                      : "bg-white/5 border-white/10 hover:border-white/20 text-white/70 hover:text-white"
                  }`}
                >
                  <div className="flex items-center gap-4">
                    <span
                      className={`font-mono text-xs font-semibold px-2 py-1 rounded ${
                        isActive
                          ? "bg-[#FF5733] text-white"
                          : "bg-white/10 text-white/60"
                      }`}
                    >
                      {service.number}
                    </span>
                    <span className="font-display text-lg sm:text-xl font-bold tracking-tight">
                      {service.title}
                    </span>
                  </div>

                  <div
                    className={`p-2 rounded-full transition-transform ${
                      isActive
                        ? "bg-[#FF5733] text-white translate-x-1"
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
                  className="p-8 sm:p-12 rounded-3xl bg-neutral-900 border border-white/15 relative overflow-hidden transition-all duration-300"
                >
                  <div className="absolute top-0 right-0 w-80 h-80 bg-[#FF5733]/10 rounded-full blur-3xl pointer-events-none" />

                  {/* Header */}
                  <div className="flex items-center justify-between pb-8 border-b border-white/10 mb-8">
                    <div className="flex items-center gap-3">
                      <div className="p-3 rounded-xl bg-[#FF5733]/20 text-[#FF5733] border border-[#FF5733]/30">
                        {getServiceIcon(service.icon)}
                      </div>
                      <div>
                        <span className="font-mono text-xs text-[#C7F36B] uppercase tracking-wider">
                          Practice Area
                        </span>
                        <h3 className="font-display text-2xl sm:text-3xl font-bold text-white">
                          {service.title}
                        </h3>
                      </div>
                    </div>
                    <span className="font-mono text-3xl font-black text-white/20">
                      {service.number}
                    </span>
                  </div>

                  {/* Description */}
                  <p className="text-white/80 text-base sm:text-lg leading-relaxed mb-8 font-sans">
                    {service.description}
                  </p>

                  {/* Key Deliverables */}
                  <div className="mb-8">
                    <h4 className="font-mono text-xs uppercase tracking-wider text-white/50 mb-4">
                      Strategic Deliverables
                    </h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {service.deliverables.map((item, idx) => (
                        <div
                          key={idx}
                          className="flex items-center gap-2.5 text-sm text-white/90 bg-white/5 p-3 rounded-xl border border-white/5"
                        >
                          <CheckCircle2 className="w-4 h-4 text-[#C7F36B] shrink-0" />
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Tooling & Capabilities */}
                  <div>
                    <h4 className="font-mono text-xs uppercase tracking-wider text-white/50 mb-3">
                      Core Stack &amp; Methodologies
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {service.capabilities.map((cap, idx) => (
                        <span
                          key={idx}
                          className="px-3 py-1 rounded-full text-xs font-mono bg-white/10 text-white/70 border border-white/10"
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
