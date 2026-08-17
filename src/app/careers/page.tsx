import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, Briefcase, HeartHandshake, Users, type LucideIcon } from 'lucide-react';
import { careersContent } from '@/constants/careersContent';
import { AnimatedSection, GradientButton, MagneticCard, PageHero } from '@/components/ui';

const categoryIcons: Record<string, LucideIcon> = {
  Users,
  Briefcase,
  HeartHandshake
};

export const metadata: Metadata = {
  title: 'Careers | GTS Engineering',
  description:
    'Build the future with GTS Engineering. Explore why engineers join GTS, our career areas across engineering, digital, and AI, and our commitment to CSR.',
  alternates: {
    canonical: 'https://gtsusainc.com/careers'
  }
};

export default function CareersPage() {
  return (
    <div className="flex w-full flex-col">
      <PageHero
        eyebrow="Careers"
        title="Build the Future With Us"
        description="At GTS Engineering, you'll work alongside experienced engineers, industry leaders, and technology innovators on projects that shape the future of energy, infrastructure, manufacturing, and digital engineering."
      >
        <GradientButton href="/menu/careers/employment-opportunities">View Open Positions</GradientButton>
      </PageHero>

      <section className="industrial-surface py-16 sm:py-24">
        <div className="mx-auto max-w-7xl space-y-20 px-4 sm:px-6 lg:px-8">
          {careersContent.map((section, index) => {
            const Icon = categoryIcons[section.icon] ?? Users;

            return (
              <AnimatedSection key={section.slug} as="div" id={section.slug} className="scroll-mt-32">
                <div className="flex items-start gap-4">
                  <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-[#2563eb] to-[#22d3ee] text-white shadow-lg shadow-blue-100">
                    <Icon className="h-6 w-6" />
                  </span>
                  <div>
                    <span className="text-xs font-mono font-semibold uppercase tracking-[0.22em] text-accent">
                      {String(index + 1).padStart(2, '0')}
                    </span>
                    <h2 className="mt-1 font-display text-2xl font-extrabold text-primary sm:text-3xl">{section.label}</h2>
                    {section.tagline && <p className="mt-1 text-sm font-semibold italic text-slate-500">{section.tagline}</p>}
                  </div>
                </div>

                {section.intro && <p className="mt-6 max-w-3xl text-sm leading-relaxed text-slate-500">{section.intro}</p>}

                {section.groups && section.groups.length > 0 && (
                  <div className="mt-8 grid grid-cols-1 gap-6">
                    {section.groups.map((group, groupIdx) => (
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
                              className="rounded-full bg-slate-50 px-3 py-1.5 text-[11px] font-semibold text-slate-700 ring-1 ring-slate-200"
                            >
                              {item}
                            </span>
                          ))}
                        </div>
                      </MagneticCard>
                    ))}
                  </div>
                )}

                {section.cta && (
                  <div className="mt-6">
                    <Link
                      href={section.cta.href}
                      className="inline-flex items-center gap-1.5 rounded-full bg-accent/10 px-4 py-2.5 text-xs font-semibold text-accent transition-colors hover:bg-accent hover:text-white"
                    >
                      {section.cta.label}
                      <ArrowRight className="h-3.5 w-3.5" />
                    </Link>
                  </div>
                )}
              </AnimatedSection>
            );
          })}
        </div>
      </section>

      <section className="border-t border-slate-100 bg-slate-950 py-16 text-center sm:py-20">
        <h2 className="font-display text-2xl font-extrabold text-white sm:text-3xl">Ready to build the future with us?</h2>
        <p className="mx-auto mt-3 max-w-xl text-sm leading-relaxed text-slate-300">
          Explore open roles across engineering, digital, AI, and corporate teams.
        </p>
        <div className="mt-8 flex justify-center">
          <GradientButton href="/menu/careers/employment-opportunities">View Open Positions</GradientButton>
        </div>
      </section>
    </div>
  );
}
