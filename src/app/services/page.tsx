'use client';

import { services } from '@/constants/services';
import { IconMapper } from '@/components/layout/Navbar';
import { AnimatedSection, GradientButton, MagneticCard, PageHero } from '@/components/ui';

export default function ServicesLandingPage() {
  return (
    <div className="flex w-full flex-col">
      <PageHero
        eyebrow="GTS Services"
        title="Engineering & Technology Capabilities"
        description="Delivering bespoke design, CAD modeling, FEA simulation, GIS assets tracking, and commissioning controls across the product and plant lifecycle."
      />

      <section className="industrial-surface py-16 sm:py-24">
        <AnimatedSection className="mx-auto max-w-7xl space-y-12 px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((svc) => (
              <MagneticCard
                key={svc.slug}
                className="group flex flex-col rounded-[1.75rem] border border-slate-200/75 bg-white/90 p-8 shadow-sm backdrop-blur"
              >
                <div className="mb-6 self-start rounded-2xl bg-slate-50 p-3.5 text-slate-600 transition-colors group-hover:bg-accent group-hover:text-white">
                  <IconMapper name={svc.iconName} className="w-6 h-6" />
                </div>

                <h2 className="text-lg font-bold text-primary group-hover:text-accent transition-colors mb-3">
                  {svc.title}
                </h2>

                <p className="text-slate-500 text-xs leading-relaxed mb-6">
                  {svc.tagline}
                </p>

                <div className="border-t border-slate-100 pt-5 mt-auto space-y-3">
                  <div className="text-[10px] font-mono tracking-widest uppercase text-slate-400 font-semibold">
                    Service Competencies
                  </div>
                  <ul className="text-xs text-slate-600 space-y-2">
                    {svc.subServices.map((sub, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-accent mt-1.5 shrink-0" />
                        <span className="text-[11px] leading-tight font-medium text-slate-700">{sub.title}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-6 mt-6 border-t border-slate-100/50">
                  <GradientButton href={svc.href || `/services/${svc.slug}`} className="w-full py-3 text-xs">
                    Explore Detailed Offerings
                  </GradientButton>
                </div>
              </MagneticCard>
            ))}
          </div>
        </AnimatedSection>
      </section>
    </div>
  );
}
