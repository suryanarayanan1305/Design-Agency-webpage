"use client";

import React from "react";
import SectionHeading from "@/components/ui/SectionHeading";
import { STUDIO_PRINCIPLES } from "@/data/agency";
import { ArrowUpRight, Compass, Shield, Terminal } from "lucide-react";

export default function Studio() {
  return (
    <section id="studio" className="py-24 md:py-32 px-6 sm:px-8 md:px-12 border-t border-[#121212]/10 bg-[#F2EFE8]">
      <div className="max-w-7xl mx-auto">
        <SectionHeading
          number="01"
          badge="Studio Philosophy"
          title="WE BELIEVE GOOD DESIGN DOES MORE THAN LOOK GOOD."
          subtitle="We combine strategy, design and technology to create meaningful digital experiences. From the first idea to the final interaction, we help ambitious brands move forward with clarity and purpose."
        />

        {/* Studio Manifesto Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 mb-20 items-stretch">
          <div className="md:col-span-7 bg-[#121212] text-[#F2EFE8] rounded-2xl p-8 sm:p-12 flex flex-col justify-between relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#FF5733]/10 rounded-full blur-2xl pointer-events-none" />
            
            <div className="space-y-6 relative z-10">
              <span className="font-mono text-xs uppercase px-3 py-1 rounded bg-white/10 text-[#C7F36B] border border-white/10">
                Core Manifesto
              </span>
              <h3 className="font-display text-3xl sm:text-4xl font-bold tracking-tight leading-snug">
                &ldquo;We don&apos;t build interchangeable templates. We engineer digital artifacts that capture memory and command loyalty.&rdquo;
              </h3>
              <p className="text-white/70 text-base leading-relaxed">
                In an era crowded with identical SaaS interfaces and repetitive cookie-cutter websites, FORMORA creates bespoke digital expressions rooted in Swiss grid discipline and expressive kinetic typography.
              </p>
            </div>

            <div className="pt-8 border-t border-white/10 mt-8 flex flex-wrap items-center justify-between gap-4 text-xs font-mono text-white/50">
              <span>FOUNDED ON PRECISION</span>
              <span>DEV-DRIVEN ART DIRECTION</span>
            </div>
          </div>

          <div className="md:col-span-5 flex flex-col gap-4">
            <div className="p-8 rounded-2xl bg-white/80 border border-[#121212]/10 backdrop-blur-sm flex-1 flex flex-col justify-center">
              <div className="w-10 h-10 rounded-lg bg-[#FF5733]/10 text-[#FF5733] flex items-center justify-center mb-4">
                <Compass className="w-5 h-5" />
              </div>
              <h4 className="font-display text-xl font-bold text-[#121212] mb-2">Intentional Asymmetry</h4>
              <p className="text-sm text-[#73736C] leading-relaxed">
                Layouts calibrated to guide the eye intuitively across editorial focal points, transforming passive browsing into active discovery.
              </p>
            </div>

            <div className="p-8 rounded-2xl bg-white/80 border border-[#121212]/10 backdrop-blur-sm flex-1 flex flex-col justify-center">
              <div className="w-10 h-10 rounded-lg bg-[#121212]/5 text-[#121212] flex items-center justify-center mb-4">
                <Terminal className="w-5 h-5" />
              </div>
              <h4 className="font-display text-xl font-bold text-[#121212] mb-2">Modern Component Rigor</h4>
              <p className="text-sm text-[#73736C] leading-relaxed">
                Atomic design architecture, strict TypeScript schemas, and zero unneeded bloat. Clean Next.js Server Components by default.
              </p>
            </div>
          </div>
        </div>

        {/* 3 Principles */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-8 border-t border-[#121212]/10">
          {STUDIO_PRINCIPLES.map((principle) => (
            <div key={principle.number} className="space-y-4">
              <span className="font-mono text-sm font-bold text-[#FF5733]">
                [{principle.number}]
              </span>
              <h4 className="font-display text-xl font-bold text-[#121212]">
                {principle.title}
              </h4>
              <p className="text-sm text-[#73736C] leading-relaxed">
                {principle.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
