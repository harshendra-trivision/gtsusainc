import type { Metadata } from 'next';
import { Cpu, Handshake, type LucideIcon } from 'lucide-react';
import { technologyContent } from '@/constants/technologyContent';
import { AnimatedSection, GradientButton, MagneticCard, PageHero } from '@/components/ui';

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
        description="GTS combines strategic technology representation with a deep, hands-on technology stack — the process licensors, OEM partners, and digital platforms behind every engagement."
      >
        <div className="flex flex-wrap items-center justify-center gap-2">
          {technologyContent.map((category) => (
            <a
              key={category.slug}
              href={`#${category.slug}`}
              className="rounded-full border border-white/15 bg-white/10 px-4 py-2 text-xs font-mono uppercase tracking-[0.18em] text-slate-300 transition-colors hover:border-cyan-200/30 hover:text-white"
            >
              {category.label}
            </a>
          ))}
        </div>
      </PageHero>

      <section className="industrial-surface py-16 sm:py-24">
        <div className="mx-auto max-w-7xl space-y-24 px-4 sm:px-6 lg:px-8">
          {technologyContent.map((category, index) => {
            const Icon = categoryIcons[category.icon] ?? Cpu;

            return (
              <AnimatedSection key={category.slug} as="div" id={category.slug} className="scroll-mt-32">
                <div className="flex items-start gap-4">
                  <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-[#2563eb] to-[#22d3ee] text-white shadow-lg shadow-blue-100">
                    <Icon className="h-6 w-6" />
                  </span>
                  <div>
                    <span className="text-xs font-mono font-semibold uppercase tracking-[0.22em] text-accent">
                      {`Technology ${String(index + 1).padStart(2, '0')}`}
                    </span>
                    <h2 className="mt-1 font-display text-2xl font-extrabold text-primary sm:text-3xl">{category.label}</h2>
                    {category.tagline && (
                      <p className="mt-1 text-sm font-semibold italic text-slate-500">{category.tagline}</p>
                    )}
                  </div>
                </div>

                {category.description && (
                  <p className="mt-6 max-w-3xl text-sm leading-relaxed text-slate-500">{category.description}</p>
                )}

                <div className="mt-8 grid grid-cols-1 gap-6 lg:grid-cols-2">
                  {category.groups.map((group, groupIdx) => (
                    <MagneticCard
                      key={group.heading ?? groupIdx}
                      className="rounded-[1.5rem] border border-slate-200 bg-white p-6 shadow-sm sm:p-7"
                    >
                      {group.heading && (
                        <h3 className="mb-4 text-sm font-bold uppercase tracking-wide text-primary">{group.heading}</h3>
                      )}
                      <div className="flex flex-wrap gap-2">
                        {group.items.map((item) => (
                          <span
                            key={item}
                            className="rounded-full bg-slate-50 px-3 py-1.5 text-[11px] font-semibold text-slate-700 ring-1 ring-slate-200 transition-colors hover:ring-accent/30"
                          >
                            {item}
                          </span>
                        ))}
                      </div>
                    </MagneticCard>
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
          <GradientButton href="/contact">Contact Our Technology Team</GradientButton>
        </div>
      </section>
    </div>
  );
}
