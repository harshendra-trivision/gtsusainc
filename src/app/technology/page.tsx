import type { Metadata } from 'next';
import { ArrowRight, Cpu, Handshake, type LucideIcon } from 'lucide-react';
import { technologyContent } from '@/constants/technologyContent';
import { AnimatedSection, GradientButton, PageHero } from '@/components/ui';

const categoryIcons: Record<string, LucideIcon> = {
  Handshake,
  Cpu
};

export const metadata: Metadata = {
  title: 'Technology | GTS Engineering',
  description:
    'GTS technology partnerships and representation for process licensors and OEMs, plus the engineering, simulation, automation, cloud, AI, and digital twin platforms behind our delivery.',
  alternates: {
    canonical: 'https://gtsusainc.com/technology'
  }
};

export default function TechnologyPage() {
  return (
    <div className="flex w-full flex-col">
      <PageHero
        eyebrow="Technology"
        title="Technology Partnerships & Our Engineering Ecosystem"
        description="GTS combines strategic technology representation with a deep, hands-on technology stack — from process licensors, OEM partners, and digital platforms behind every engagement."
        backgroundImage="/image/technology/technology bg.jpg"
      >
        <div className="mx-auto flex max-w-5xl flex-wrap items-center justify-center gap-3 sm:gap-4">
          {technologyContent.map((category) => (
            <a
              key={category.slug}
              href={`#${category.slug}`}
              className="inline-flex items-center gap-2 rounded-full border border-blue-400/30 bg-[#0c1f38]/80 px-5 py-2 text-xs font-medium uppercase tracking-[0.14em] text-blue-200 backdrop-blur-sm transition-all duration-200 hover:border-cyan-300/80 hover:bg-blue-900/60 hover:text-white hover:shadow-[0_0_14px_rgba(56,189,248,0.3)] sm:text-xs"
            >
              <span>{category.label}</span>
              <ArrowRight className="h-3.5 w-3.5" />
            </a>
          ))}
        </div>
      </PageHero>

      <section className="industrial-surface py-16 sm:py-24">
        <div className="mx-auto max-w-7xl space-y-20 px-4 sm:px-6 lg:px-8">
          {technologyContent.map((category, index) => {
            const Icon = categoryIcons[category.icon] ?? Cpu;

            return (
              <AnimatedSection key={category.slug} as="div" id={category.slug} className="scroll-mt-32">
                {/* Section Header with Icon */}
                <div className="flex items-start gap-4">
                  <span className="flex h-12 w-12 sm:h-14 sm:w-14 shrink-0 items-center justify-center rounded-2xl bg-blue-600 text-white shadow-lg shadow-blue-500/20">
                    <Icon className="h-6 w-6" />
                  </span>
                  <div>
                    <span className="text-xs font-mono font-bold uppercase tracking-[0.22em] text-blue-600">
                      {`TECHNOLOGY ${String(index + 1).padStart(2, '0')}`}
                    </span>
                    <h2 className="mt-0.5 font-display text-2xl font-extrabold text-slate-900 sm:text-3xl">
                      {category.label}
                    </h2>
                    {category.tagline && (
                      <p className="mt-1 text-sm font-medium text-slate-500">{category.tagline}</p>
                    )}
                  </div>
                </div>

                {category.description && (
                  <p className="mt-5 max-w-4xl text-sm leading-relaxed text-slate-600 sm:text-base">
                    {category.description}
                  </p>
                )}

                {/* Grid of Groups */}
                <div className="mt-8 grid grid-cols-1 gap-6 lg:grid-cols-2">
                  {category.groups.map((group, groupIdx) => (
                    <div
                      key={group.heading ?? groupIdx}
                      className="group relative flex flex-col justify-between overflow-hidden rounded-2xl border border-slate-200/90 bg-white p-6 shadow-xs transition-all duration-300 hover:border-blue-400 hover:shadow-lg hover:shadow-blue-500/10 sm:p-7"
                    >
                      {group.heading && (
                        <h3 className="mb-4 text-xs font-bold uppercase tracking-wider text-blue-600 sm:text-sm">
                          {group.heading}
                        </h3>
                      )}
                      <div className="flex flex-wrap gap-2">
                        {group.items.map((item) => (
                          <span
                            key={item}
                            className="rounded-full border border-slate-200 bg-slate-50/80 px-3.5 py-1.5 text-xs font-medium text-slate-700 transition-all hover:border-blue-300 hover:bg-white hover:text-blue-600"
                          >
                            {item}
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </AnimatedSection>
            );
          })}
        </div>
      </section>

      <section className="border-t border-slate-100 bg-white py-16 text-center sm:py-20">
        <h2 className="font-display text-2xl font-extrabold text-primary sm:text-3xl">
          Want to license, partner, or integrate?
        </h2>
        <p className="mx-auto mt-3 max-w-xl text-sm text-slate-500">
          Talk to our technology team about representation opportunities or engineering platform integration.
        </p>
        <div className="mt-8 flex justify-center">
          <GradientButton href="/contact">
            Contact Our Technology Team
            <ArrowRight className="h-4 w-4" />
          </GradientButton>
        </div>
      </section>
    </div>
  );
}

