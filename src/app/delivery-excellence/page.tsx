import type { Metadata } from 'next';
import Link from 'next/link';
import {
  Activity,
  ArrowRight,
  Award,
  Boxes,
  ClipboardCheck,
  Compass,
  Gauge,
  Globe,
  Layers,
  ListChecks,
  Users,
  type LucideIcon
} from 'lucide-react';
import { deliveryExcellenceContent } from '@/constants/deliveryExcellenceContent';
import { AnimatedSection, GradientButton, MagneticCard, PageHero } from '@/components/ui';

const categoryIcons: Record<string, LucideIcon> = {
  Compass,
  Globe,
  ListChecks,
  Gauge,
  ClipboardCheck,
  Layers,
  Users,
  Activity,
  Boxes,
  Award
};

export const metadata: Metadata = {
  title: 'Delivery Excellence | GTS Engineering',
  description:
    'How GTS Engineering delivers — our delivery philosophy, global delivery model, project execution framework, quality management, digital delivery, and why clients choose GTS.',
  alternates: {
    canonical: 'https://gtsusainc.com/delivery-excellence'
  }
};

function FlowSteps({ title, steps }: { title?: string; steps: string[] }) {
  return (
    <div>
      {title && <div className="mb-3 text-[10px] font-mono font-semibold uppercase tracking-widest text-slate-400">{title}</div>}
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
    </div>
  );
}

export default function DeliveryExcellencePage() {
  return (
    <div className="flex w-full flex-col">
      <PageHero
        eyebrow="Delivery Excellence"
        title="Delivering Engineering Excellence with Confidence"
        description="At GTS Engineering, delivery excellence is more than completing projects on time and within budget. It is our disciplined approach to engineering, collaboration, quality, technology, and project execution that enables clients to successfully deliver complex industrial projects across the complete asset lifecycle. By combining local leadership, global engineering resources, digital technologies, and proven project management methodologies, we consistently deliver high-quality engineering solutions that reduce risk, improve efficiency, and create long-term value."
      >
        <div className="flex flex-wrap items-center justify-center gap-2">
          {deliveryExcellenceContent.map((section) => (
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
          {deliveryExcellenceContent.map((section, index) => {
            const Icon = categoryIcons[section.icon] ?? Compass;

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

                {section.flows && section.flows.length > 0 && (
                  <div className="mt-8 space-y-6 rounded-[1.5rem] border border-slate-200 bg-white p-6 shadow-sm sm:p-7">
                    {section.flows.map((flow) => (
                      <FlowSteps key={flow.title ?? flow.steps.join('-')} title={flow.title} steps={flow.steps} />
                    ))}
                  </div>
                )}

                {section.groups && section.groups.length > 0 && (
                  <div
                    className={
                      section.groups.length > 1
                        ? 'mt-8 grid grid-cols-1 gap-6 lg:grid-cols-2'
                        : 'mt-8 grid grid-cols-1 gap-6'
                    }
                  >
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
        <h2 className="font-display text-2xl font-extrabold text-white sm:text-3xl">Ready to Deliver Your Next Project?</h2>
        <p className="mx-auto mt-3 max-w-xl text-sm leading-relaxed text-slate-300">
          Let&apos;s discuss how GTS Engineering can support your project from concept through commissioning and beyond.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <GradientButton href="/contact">Request Consultation</GradientButton>
          <GradientButton href="/contact" variant="secondary">
            Request Proposal
          </GradientButton>
        </div>
      </section>
    </div>
  );
}
