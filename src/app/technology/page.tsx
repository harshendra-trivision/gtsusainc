'use client';

import { CheckCircle2 } from 'lucide-react';
import {
  technologyCommercialGroups,
  technologyEcosystemGroups,
  technologyPartnershipIntro
} from '@/constants/technology';
import {
  AnimatedSection,
  GradientButton,
  MagneticCard,
  PageHero,
  SectionHeading
} from '@/components/ui';

export default function TechnologyPage() {
  return (
    <div className="flex w-full flex-col">
      <PageHero
        eyebrow="Technology"
        title="Technology Partnerships & Engineering Ecosystem"
        description="Connecting proprietary process technologies, OEM partnerships, and the digital engineering platforms our teams run every day on solution and industry projects."
      />

      <section className="industrial-surface py-16 sm:py-24">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="relative overflow-hidden rounded-[2.5rem] border border-white bg-white p-8 shadow-[0_30px_90px_rgba(15,23,42,0.10)] sm:p-10">
            <div className="pointer-events-none absolute -right-20 -top-20 h-52 w-52 rounded-full bg-cyan-300/20 blur-3xl" />
            <SectionHeading
              eyebrow="Technology Partnerships & Representation"
              title="Commercializing industrial technology, together"
              description={technologyPartnershipIntro}
              align="left"
            />
          </div>
        </div>
      </section>

      <section id="commercial-capabilities" className="scroll-mt-32 industrial-surface py-16 sm:py-24">
        <AnimatedSection as="div" className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Commercial Capabilities"
            title="Market representation and technology licensing support"
            description="From process technologies to OEM partnerships, we help technology owners and industrial clients move from opportunity to commercial deployment."
          />

          <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
            {technologyCommercialGroups.map((group) => (
              <MagneticCard
                key={group.heading}
                className="group rounded-[1.75rem] border border-slate-200 bg-white p-7 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-accent/40 hover:shadow-xl hover:shadow-blue-100/70"
              >
                <div className="flex items-center justify-between gap-4">
                  <h3 className="text-lg font-extrabold text-primary">{group.heading}</h3>
                  <span className="text-xs font-mono uppercase tracking-[0.2em] text-slate-300">Technology</span>
                </div>
                <div className="mt-6 flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <span
                      key={item}
                      className="rounded-full bg-slate-50 px-3 py-1.5 text-xs font-semibold text-slate-700 ring-1 ring-slate-200"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </MagneticCard>
            ))}
          </div>
        </AnimatedSection>
      </section>

      <section id="technology-ecosystem" className="scroll-mt-32 industrial-surface py-16 sm:py-24">
        <AnimatedSection as="div" className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Technology Ecosystem"
            title="Technologies we support and integrate"
            description="The engineering platforms, simulation tools, automation systems, and AI technologies our teams actively use on solution and industry projects."
          />

          <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
            {technologyEcosystemGroups.map((group) => (
              <MagneticCard
                key={group.heading}
                className="group rounded-[1.75rem] border border-slate-200 bg-white p-7 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-accent/40 hover:shadow-xl hover:shadow-blue-100/70"
              >
                <div className="flex items-center justify-between gap-4">
                  <h3 className="text-lg font-extrabold text-primary">{group.heading}</h3>
                  <span className="text-xs font-mono uppercase tracking-[0.2em] text-slate-300">Technology</span>
                </div>
                <div className="mt-6 flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <span
                      key={item}
                      className="rounded-full bg-slate-50 px-3 py-1.5 text-xs font-semibold text-slate-700 ring-1 ring-slate-200"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </MagneticCard>
            ))}
          </div>
        </AnimatedSection>
      </section>

      <section className="industrial-surface py-16 sm:py-24">
        <AnimatedSection as="div" className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="relative overflow-hidden rounded-[2.5rem] border border-slate-900/10 bg-slate-950 p-8 text-center shadow-[0_36px_100px_rgba(15,23,42,0.28)] sm:p-12">
            <div className="pointer-events-none absolute -right-20 -top-20 h-52 w-52 rounded-full bg-cyan-300/20 blur-3xl" />
            <div className="relative z-10 mx-auto max-w-2xl space-y-6">
              <div className="mx-auto inline-flex items-center gap-2 rounded-full border border-cyan-200/20 bg-white/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.24em] text-cyan-100 backdrop-blur">
                <CheckCircle2 className="h-3.5 w-3.5" />
                Partner With GTS
              </div>
              <h2 className="font-display text-2xl font-extrabold tracking-tight text-white sm:text-3xl">
                Bring your technology to market, or put ours to work on your project
              </h2>
              <p className="text-sm leading-7 text-slate-300 sm:text-base">
                Whether you are a technology owner seeking market representation or an owner-operator evaluating a licensed process, our team can help.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <GradientButton href="/contact">Talk to Our Technology Team</GradientButton>
                <GradientButton href="/#solutions" variant="ghost">
                  Explore Solution Areas
                </GradientButton>
              </div>
            </div>
          </div>
        </AnimatedSection>
      </section>
    </div>
  );
}
