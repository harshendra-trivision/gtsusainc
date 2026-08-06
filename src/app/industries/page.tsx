'use client';

import { ChevronRight } from 'lucide-react';
import Link from 'next/link';
import { industries } from '@/constants/industries';
import { IconMapper } from '@/components/layout/Navbar';
import { AnimatedSection, MagneticCard, PageHero } from '@/components/ui';

export default function IndustriesLandingPage() {
  return (
    <div className="flex w-full flex-col">
      <PageHero
        eyebrow="Sectors Served"
        title="Target Industry Verticals"
        description="Applying advanced engineering solutions, stress analytics, CAD validations, and standards documentation across diverse industrial markets worldwide."
      />

      <section className="industrial-surface py-16 sm:py-24">
        <AnimatedSection as="div" className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-7 md:grid-cols-2 xl:grid-cols-3">
            {industries.map((ind, index) => {
              const visibleSubSectors = ind.subSectors.slice(0, 5);
              const remaining = ind.subSectors.length - visibleSubSectors.length;

              return (
                <MagneticCard
                  key={ind.slug}
                  className="group relative flex flex-col overflow-hidden rounded-[1.75rem] border border-slate-200 bg-white p-7 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-accent/40 hover:shadow-xl hover:shadow-blue-100/70"
                >
                  <div className="pointer-events-none absolute inset-x-0 top-0 h-1 origin-left scale-x-0 bg-gradient-to-r from-[#2563eb] to-[#22d3ee] transition-transform duration-300 group-hover:scale-x-100" />

                  <div className="flex items-start justify-between gap-4">
                    <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-[#2563eb] to-[#22d3ee] text-white shadow-lg shadow-blue-100 transition-transform duration-300 group-hover:scale-110">
                      <IconMapper name={ind.iconName} className="w-6 h-6" />
                    </div>
                    <span className="text-xs font-mono uppercase tracking-[0.2em] text-slate-300">
                      {`Sector ${String(index + 1).padStart(2, '0')}`}
                    </span>
                  </div>

                  <h2 className="mt-6 text-lg font-extrabold leading-snug text-primary transition-colors group-hover:text-accent">
                    {ind.title}
                  </h2>

                  <p className="mt-3 min-h-[60px] text-xs leading-relaxed text-slate-500">
                    {ind.tagline}
                  </p>

                  <div className="mt-6 border-t border-slate-100 pt-5">
                    <div className="mb-3 text-[9px] font-mono font-semibold uppercase tracking-widest text-slate-400">
                      Industry Subsectors
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {visibleSubSectors.map((sub) => (
                        <span
                          key={sub}
                          className="rounded-full bg-slate-50 px-3 py-1.5 text-[11px] font-semibold text-slate-700 ring-1 ring-slate-200 transition-colors group-hover:ring-accent/30"
                        >
                          {sub}
                        </span>
                      ))}
                      {remaining > 0 && (
                        <span className="rounded-full bg-accent/10 px-3 py-1.5 text-[11px] font-semibold text-accent ring-1 ring-accent/20">
                          +{remaining} more
                        </span>
                      )}
                    </div>
                  </div>

                  <div className="mt-7 border-t border-slate-100/50 pt-6">
                    <Link
                      href={`/industries/${ind.slug}`}
                      className="flex w-full items-center justify-center gap-1.5 rounded-xl bg-slate-50 py-2.5 text-center text-xs font-semibold text-accent transition-all hover:bg-accent hover:text-white"
                    >
                      View Industrial Focus
                      <ChevronRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </Link>
                  </div>
                </MagneticCard>
              );
            })}
          </div>
        </AnimatedSection>
      </section>
    </div>
  );
}
