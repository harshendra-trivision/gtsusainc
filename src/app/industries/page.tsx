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
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {industries.map((ind) => (
              <MagneticCard
                key={ind.slug}
                className="group flex flex-col rounded-[1.75rem] border border-slate-200/75 bg-white/90 p-6 shadow-sm backdrop-blur"
              >
                <div className="p-3 rounded-lg bg-slate-50 text-slate-600 group-hover:bg-accent group-hover:text-white transition-colors self-start mb-5">
                  <IconMapper name={ind.iconName} className="w-5 h-5" />
                </div>

                <h2 className="text-base font-bold text-primary group-hover:text-accent transition-colors mb-2">
                  {ind.title}
                </h2>

                <p className="text-slate-500 text-xs leading-relaxed line-clamp-3 mb-6">
                  {ind.tagline}
                </p>

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
              </MagneticCard>
            ))}
          </div>
        </AnimatedSection>
      </section>
    </div>
  );
}
