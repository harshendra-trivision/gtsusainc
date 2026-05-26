'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowRight, ChevronRight } from 'lucide-react';
import { industries } from '@/constants/industries';
import { IconMapper } from '@/components/layout/Navbar';
import Card from '@/components/common/Card';

export default function IndustriesLandingPage() {
  return (
    <div className="flex flex-col w-full">
      {/* Page Header */}
      <section className="bg-slate-950 text-white py-20 blueprint-grid relative">
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-slate-950/70 to-slate-950" />
        <div className="max-w-5xl mx-auto px-4 relative z-10 text-center space-y-4">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-accent/15 border border-accent/30 text-xs font-mono text-accent-light uppercase tracking-wider">
            Sectors Served
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold font-display tracking-tight text-white">
            Target Industry Verticals
          </h1>
          <p className="text-slate-400 text-sm max-w-2xl mx-auto leading-relaxed">
            Applying advanced engineering solutions, stress analytics, CAD validations, and standards documentation across diverse industrial markets worldwide.
          </p>
        </div>
      </section>

      {/* Industries Directory */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {industries.map((ind) => (
              <Card
                key={ind.slug}
                className="flex flex-col bg-white border border-slate-200/75 p-6 rounded-xl shadow-sm hover:shadow-md hover:border-slate-350 transition-all group"
              >
                {/* Icon wrapper */}
                <div className="p-3 rounded-lg bg-slate-50 text-slate-600 group-hover:bg-accent group-hover:text-white transition-colors self-start mb-5">
                  <IconMapper name={ind.iconName} className="w-5 h-5" />
                </div>

                <h2 className="text-base font-bold text-primary group-hover:text-accent transition-colors mb-2">
                  {ind.title}
                </h2>

                <p className="text-slate-500 text-xs leading-relaxed line-clamp-3 mb-6">
                  {ind.tagline}
                </p>

                {/* Sub-sectors snippet */}
                <div className="border-t border-slate-100 pt-4 mt-auto">
                  <div className="text-[9px] font-mono tracking-widest uppercase text-slate-400 font-semibold mb-2">
                    Industry Subsectors
                  </div>
                  <ul className="text-[11px] text-slate-600 space-y-1">
                    {ind.subSectors.slice(0, 3).map((sub, i) => (
                      <li key={i} className="flex items-center gap-1.5">
                        <span className="w-1 h-1 rounded-full bg-accent shrink-0" />
                        <span className="line-clamp-1">{sub}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-6 mt-5 border-t border-slate-100/50">
                  <Link 
                    href={`/industries/${ind.slug}`}
                    className="flex w-full items-center justify-center gap-1.5 rounded-lg bg-slate-50 py-2.5 text-center text-xs font-semibold text-accent hover:bg-accent hover:text-white transition-all"
                  >
                    View Industrial Focus
                    <ChevronRight className="w-4 h-4" />
                  </Link>
                </div>

              </Card>
            ))}
          </div>

        </div>
      </section>
    </div>
  );
}
export { IndustriesLandingPage };
