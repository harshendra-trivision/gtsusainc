import type { Metadata } from 'next';
import Link from 'next/link';
import {
  ArrowRight,
  Award,
  BadgeCheck,
  CheckCircle2,
  Compass,
  Eye,
  Globe,
  Handshake,
  Heart,
  History,
  MapPin,
  Target,
  Users,
  type LucideIcon
} from 'lucide-react';
import { aboutSections, qualityContent } from '@/constants/aboutContent';
import { AnimatedSection, GradientButton, MagneticCard, PageHero } from '@/components/ui';

const categoryIcons: Record<string, LucideIcon> = {
  Users,
  Target,
  Eye,
  Compass,
  Heart,
  History,
  Globe,
  BadgeCheck,
  Handshake,
  MapPin,
  Award
};

export const metadata: Metadata = {
  title: 'About | GTS Engineering',
  description:
    'GTS Engineering — who we are, our mission, vision, purpose and values, our story, global delivery model, quality management system, technology partners, and locations.',
  alternates: {
    canonical: 'https://gtsusainc.com/about'
  }
};

function FlowSteps({ steps }: { steps: string[] }) {
  return (
    <div className="flex flex-wrap items-center gap-2">
      {steps.map((step, i) => (
        <div key={step} className="flex items-center gap-2">
          <span className="rounded-full border border-slate-200 bg-white px-3.5 py-2 text-xs font-semibold text-slate-700 shadow-sm">
            {step}
          </span>
          {i < steps.length - 1 && <ArrowRight className="h-3.5 w-3.5 shrink-0 text-slate-300" />}
        </div>
      ))}
    </div>
  );
}

export default function AboutPage() {
  return (
    <div className="flex w-full flex-col">
      <PageHero
        eyebrow="About GTS"
        title="Building Engineering Excellence Through Innovation, Technology, and Global Collaboration"
        description="GTS Engineering partners with industrial clients, EPC contractors, OEMs, and technology providers to deliver engineering, digital, and technology solutions across the complete asset lifecycle."
      >
        <div className="flex flex-wrap items-center justify-center gap-2">
          {[...aboutSections, qualityContent]
            .sort((a, b) => {
              const order = [
                'who-we-are',
                'mission',
                'vision',
                'purpose',
                'values',
                'our-story',
                'leadership',
                'quality',
                'technology-partners',
                'locations',
                'our-advantage'
              ];
              return order.indexOf(a.slug) - order.indexOf(b.slug);
            })
            .map((section) => (
              <a
                key={section.slug}
                href={`#${section.slug}`}
                className="rounded-full border border-white/15 bg-white/10 px-4 py-2 text-xs font-mono uppercase tracking-[0.18em] text-slate-300 transition-colors hover:border-cyan-200/30 hover:text-white"
              >
                {section.label}
              </a>
            ))}
        </div>
      </PageHero>

      <section className="industrial-surface py-16 sm:py-24">
        <div className="mx-auto max-w-7xl space-y-20 px-4 sm:px-6 lg:px-8">
          {aboutSections.slice(0, 7).map((section, index) => {
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

                {section.intro && (
                  <div className="mt-6 max-w-3xl space-y-4">
                    {section.intro.map((paragraph, i) => (
                      <p key={i} className="text-sm leading-relaxed text-slate-500">
                        {paragraph}
                      </p>
                    ))}
                  </div>
                )}

                {section.values && section.values.length > 0 && (
                  <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    {section.values.map((value) => (
                      <MagneticCard key={value.title} className="rounded-[1.5rem] border border-slate-200 bg-white p-6 shadow-sm">
                        <h3 className="text-sm font-bold text-primary">{value.title}</h3>
                        <p className="mt-2 text-xs leading-relaxed text-slate-500">{value.description}</p>
                      </MagneticCard>
                    ))}
                  </div>
                )}

                {section.flow && section.flow.length > 0 && (
                  <div className="mt-8 rounded-[1.5rem] border border-slate-200 bg-white p-6 shadow-sm sm:p-7">
                    <FlowSteps steps={section.flow} />
                  </div>
                )}

                {section.milestones && section.milestones.length > 0 && (
                  <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
                    {section.milestones.map((milestone) => (
                      <MagneticCard
                        key={milestone.year}
                        className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm"
                      >
                        <div className="text-xs font-mono font-bold uppercase tracking-widest text-accent">{milestone.year}</div>
                        <div className="mt-1.5 text-sm font-semibold text-primary">{milestone.title}</div>
                      </MagneticCard>
                    ))}
                  </div>
                )}

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
              </AnimatedSection>
            );
          })}

          {/* Quality — richer, dedicated content */}
          <AnimatedSection as="div" id={qualityContent.slug} className="scroll-mt-32">
            <div className="flex items-start gap-4">
              <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-[#2563eb] to-[#22d3ee] text-white shadow-lg shadow-blue-100">
                <BadgeCheck className="h-6 w-6" />
              </span>
              <div>
                <span className="text-xs font-mono font-semibold uppercase tracking-[0.22em] text-accent">08</span>
                <h2 className="mt-1 font-display text-2xl font-extrabold text-primary sm:text-3xl">{qualityContent.label}</h2>
                <p className="mt-1 text-sm font-semibold italic text-slate-500">{qualityContent.tagline}</p>
              </div>
            </div>

            <div className="mt-6 max-w-3xl space-y-4">
              {qualityContent.intro.map((paragraph, i) => (
                <p key={i} className="text-sm leading-relaxed text-slate-500">
                  {paragraph}
                </p>
              ))}
            </div>

            <div className="mt-8 grid grid-cols-1 gap-6 lg:grid-cols-2">
              <MagneticCard className="rounded-[1.5rem] border border-slate-200 bg-white p-6 shadow-sm sm:p-7">
                <h3 className="mb-3 text-sm font-bold uppercase tracking-wide text-primary">Quality Policy</h3>
                <p className="text-xs leading-relaxed text-slate-500">{qualityContent.policy}</p>
              </MagneticCard>
              <MagneticCard className="rounded-[1.5rem] border border-slate-200 bg-white p-6 shadow-sm sm:p-7">
                <h3 className="mb-3 text-sm font-bold uppercase tracking-wide text-primary">Quality Philosophy</h3>
                <p className="text-xs leading-relaxed text-slate-500">{qualityContent.philosophy}</p>
              </MagneticCard>
            </div>

            <div className="mt-8">
              <MagneticCard className="rounded-[1.5rem] border border-slate-200 bg-white p-6 shadow-sm sm:p-7">
                <h3 className="mb-4 text-sm font-bold uppercase tracking-wide text-primary">Quality Principles</h3>
                <div className="flex flex-wrap gap-2">
                  {qualityContent.principles.map((item) => (
                    <span key={item} className="rounded-full bg-slate-50 px-3 py-1.5 text-[11px] font-semibold text-slate-700 ring-1 ring-slate-200">
                      {item}
                    </span>
                  ))}
                </div>
              </MagneticCard>
            </div>

            <div className="mt-8">
              <h3 className="text-sm font-bold uppercase tracking-wide text-primary">Our Quality Commitment</h3>
              <div className="mt-4 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {qualityContent.commitments.map((commitment) => (
                  <MagneticCard key={commitment.title} className="rounded-[1.5rem] border border-slate-200 bg-white p-6 shadow-sm">
                    <h4 className="text-sm font-bold text-primary">{commitment.title}</h4>
                    <p className="mt-2 text-xs leading-relaxed text-slate-500">{commitment.description}</p>
                  </MagneticCard>
                ))}
              </div>
            </div>

            <div className="mt-8">
              <MagneticCard className="rounded-[1.5rem] border border-slate-200 bg-white p-6 shadow-sm sm:p-7">
                <h3 className="mb-4 text-sm font-bold uppercase tracking-wide text-primary">Our Quality Objectives</h3>
                <ul className="grid grid-cols-1 gap-x-6 gap-y-2.5 sm:grid-cols-2">
                  {qualityContent.objectives.map((objective) => (
                    <li key={objective} className="flex items-start gap-2 text-xs leading-relaxed text-slate-600">
                      <CheckCircle2 className="mt-0.5 h-3.5 w-3.5 shrink-0 text-accent" />
                      <span>{objective}</span>
                    </li>
                  ))}
                </ul>
              </MagneticCard>
            </div>

            <div className="mt-8">
              <h3 className="text-sm font-bold uppercase tracking-wide text-primary">Our Quality Management Approach</h3>
              <div className="mt-4 grid grid-cols-1 gap-6 lg:grid-cols-2">
                {qualityContent.approach.map((group) => (
                  <MagneticCard key={group.heading} className="rounded-[1.5rem] border border-slate-200 bg-white p-6 shadow-sm sm:p-7">
                    <h4 className="mb-4 text-sm font-bold uppercase tracking-wide text-primary">{group.heading}</h4>
                    <div className="flex flex-wrap gap-2">
                      {group.items.map((item) => (
                        <span key={item} className="rounded-full bg-slate-50 px-3 py-1.5 text-[11px] font-semibold text-slate-700 ring-1 ring-slate-200">
                          {item}
                        </span>
                      ))}
                    </div>
                  </MagneticCard>
                ))}
              </div>
            </div>

            <div className="mt-8">
              <h3 className="text-sm font-bold uppercase tracking-wide text-primary">Certifications</h3>
              <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
                {qualityContent.certifications.map((cert) => (
                  <MagneticCard key={cert.code} className="rounded-2xl border border-slate-200 bg-white p-5 text-center shadow-sm">
                    <div className="text-sm font-extrabold text-accent">{cert.code}</div>
                    <div className="mt-1 text-xs text-slate-500">{cert.title}</div>
                  </MagneticCard>
                ))}
              </div>
            </div>
          </AnimatedSection>

          {aboutSections.slice(7).map((section, index) => {
            const Icon = categoryIcons[section.icon] ?? Users;

            return (
              <AnimatedSection key={section.slug} as="div" id={section.slug} className="scroll-mt-32">
                <div className="flex items-start gap-4">
                  <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-[#2563eb] to-[#22d3ee] text-white shadow-lg shadow-blue-100">
                    <Icon className="h-6 w-6" />
                  </span>
                  <div>
                    <span className="text-xs font-mono font-semibold uppercase tracking-[0.22em] text-accent">
                      {String(index + 9).padStart(2, '0')}
                    </span>
                    <h2 className="mt-1 font-display text-2xl font-extrabold text-primary sm:text-3xl">{section.label}</h2>
                    {section.tagline && <p className="mt-1 text-sm font-semibold italic text-slate-500">{section.tagline}</p>}
                  </div>
                </div>

                {section.intro && (
                  <div className="mt-6 max-w-3xl space-y-4">
                    {section.intro.map((paragraph, i) => (
                      <p key={i} className="text-sm leading-relaxed text-slate-500">
                        {paragraph}
                      </p>
                    ))}
                  </div>
                )}

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
              </AnimatedSection>
            );
          })}
        </div>
      </section>

      <section className="border-t border-slate-100 bg-white py-16 text-center sm:py-20">
        <h2 className="font-display text-2xl font-extrabold text-primary sm:text-3xl">Want to learn more about GTS?</h2>
        <p className="mx-auto mt-3 max-w-xl text-sm text-slate-500">
          Talk to our team about how GTS can support your next engineering program.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <GradientButton href="/contact">Discuss Your Program</GradientButton>
          <Link
            href="/careers"
            className="inline-flex items-center gap-1.5 rounded-full border border-slate-200 bg-white px-5 py-3 text-sm font-bold text-primary transition-colors hover:border-accent/40 hover:text-accent"
          >
            Explore Careers
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </div>
  );
}
