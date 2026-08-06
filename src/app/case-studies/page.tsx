'use client';

import { ArrowRight, CheckCircle2, Database, Factory, Flame, Truck, type LucideIcon } from 'lucide-react';
import { caseStudies, type CaseStudy } from '@/constants/caseStudies';
import { dataCenterCapabilities, representativeEngagements, targetMarkets } from '@/constants/dataCenterPortfolio';
import { projectsMegaMenu } from '@/constants/projectsMenu';
import { AnimatedSection, GradientButton, MagneticCard, PageHero } from '@/components/ui';

const categoryIcons: Record<string, LucideIcon> = {
  Flame,
  Database,
  Factory,
  Truck
};

const categoryHighlights: Record<string, string[]> = {
  'energy-process-industries': [
    'Delayed Coker Technology Transfer',
    'Water Treatment Plant',
    'Biodiesel Plant',
    'Fish Protein Plant',
    'Industrial Boiler Emissions Technology',
    'Process Safety Center',
    'Custom Drilling Equipment',
    'Refinery Turnaround'
  ],
  manufacturing: ['Robotics Automation', 'Digital Transformation', 'Supply Chain Optimization', 'Lean Manufacturing', 'AI Predictive Maintenance'],
  'heavy-engineering': ['Mining Trucks', 'Freight Cars', 'Bogies', 'Boom Cranes', 'Drilling Rigs']
};

function CaseStudyCard({ caseStudy, index }: { caseStudy: CaseStudy; index: number }) {
  return (
    <MagneticCard className="group relative flex flex-col overflow-hidden rounded-[1.75rem] border border-slate-200 bg-white p-7 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-accent/40 hover:shadow-xl hover:shadow-blue-100/70">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-1 origin-left scale-x-0 bg-gradient-to-r from-[#2563eb] to-[#22d3ee] transition-transform duration-300 group-hover:scale-x-100" />

      <div className="flex items-start justify-between gap-4">
        <span className="rounded-full bg-slate-50 px-3 py-1.5 text-[10px] font-mono font-semibold uppercase tracking-wider text-accent ring-1 ring-slate-200">
          {caseStudy.industry}
        </span>
        <span className="text-xs font-mono uppercase tracking-[0.2em] text-slate-300">
          {`Case ${String(index + 1).padStart(2, '0')}`}
        </span>
      </div>

      <h3 className="mt-4 text-lg font-extrabold leading-snug text-primary">{caseStudy.title}</h3>
      {caseStudy.client && <p className="mt-1 text-xs font-semibold text-slate-400">Client: {caseStudy.client}</p>}
      <p className="mt-3 text-xs leading-relaxed text-slate-500">{caseStudy.challenge}</p>

      {caseStudy.solution.length > 0 && (
        <div className="mt-5 border-t border-slate-100 pt-4">
          <div className="mb-2 text-[9px] font-mono font-semibold uppercase tracking-widest text-slate-400">GTS Solution</div>
          <div className="flex flex-wrap gap-1.5">
            {caseStudy.solution.map((item) => (
              <span key={item} className="rounded-full bg-slate-50 px-2.5 py-1 text-[11px] font-medium text-slate-700 ring-1 ring-slate-200">
                {item}
              </span>
            ))}
          </div>
        </div>
      )}

      {caseStudy.disciplines && caseStudy.disciplines.length > 0 && (
        <div className="mt-4">
          <div className="mb-2 text-[9px] font-mono font-semibold uppercase tracking-widest text-slate-400">Engineering Disciplines</div>
          <div className="flex flex-wrap gap-1.5">
            {caseStudy.disciplines.map((item) => (
              <span key={item} className="rounded-full bg-accent/10 px-2.5 py-1 text-[11px] font-medium text-accent ring-1 ring-accent/20">
                {item}
              </span>
            ))}
          </div>
        </div>
      )}

      <div className="mt-5 border-t border-slate-100 pt-4">
        <div className="mb-2 text-[9px] font-mono font-semibold uppercase tracking-widest text-slate-400">Business Outcome</div>
        <ul className="space-y-1.5">
          {caseStudy.outcomes.map((outcome) => (
            <li key={outcome} className="flex items-start gap-2 text-xs font-medium text-slate-700">
              <CheckCircle2 className="mt-0.5 h-3.5 w-3.5 shrink-0 text-accent" />
              <span className="leading-tight">{outcome}</span>
            </li>
          ))}
        </ul>
      </div>
    </MagneticCard>
  );
}

export default function CaseStudiesPage() {
  return (
    <div className="flex w-full flex-col">
      <PageHero
        eyebrow="Representative Projects"
        title="Engineering Delivered At Scale"
        description="From refinery technology transfer to hyperscale data centers and heavy equipment value engineering, GTS delivers multidisciplinary engineering across energy, mission-critical infrastructure, manufacturing, and heavy industry."
      >
        <div className="flex flex-wrap items-center justify-center gap-2">
          {projectsMegaMenu.map((category) => (
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
          {projectsMegaMenu.map((category, index) => {
            const Icon = categoryIcons[category.icon] ?? Flame;
            const highlights = categoryHighlights[category.slug];
            const categoryCaseStudies = caseStudies.filter((cs) => cs.category === category.slug);
            const isDataCenters = category.slug === 'data-centers-mission-critical';

            return (
              <AnimatedSection key={category.slug} as="div" id={category.slug} className="scroll-mt-32">
                <div className="flex items-start gap-4">
                  <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-[#2563eb] to-[#22d3ee] text-white shadow-lg shadow-blue-100">
                    <Icon className="h-6 w-6" />
                  </span>
                  <div>
                    <span className="text-xs font-mono font-semibold uppercase tracking-[0.22em] text-accent">
                      {`Practice ${String(index + 1).padStart(2, '0')}`}
                    </span>
                    <h2 className="mt-1 font-display text-2xl font-extrabold text-primary sm:text-3xl">{category.label}</h2>
                    {category.tagline && <p className="mt-1 text-sm font-semibold italic text-slate-500">{category.tagline}</p>}
                  </div>
                </div>

                {highlights && (
                  <div className="mt-6 flex flex-wrap gap-2">
                    {highlights.map((item) => (
                      <span key={item} className="rounded-full bg-white px-3.5 py-2 text-xs font-semibold text-slate-700 ring-1 ring-slate-200">
                        {item}
                      </span>
                    ))}
                  </div>
                )}

                {isDataCenters && (
                  <>
                    <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
                      {dataCenterCapabilities.map((cap) => (
                        <MagneticCard key={cap.title} className="rounded-[1.5rem] border border-slate-200 bg-white p-6 shadow-sm">
                          <h4 className="mb-3 text-sm font-bold text-primary">{cap.title}</h4>
                          <ul className="space-y-1.5">
                            {cap.scope.map((item) => (
                              <li key={item} className="flex items-start gap-2 text-xs leading-relaxed text-slate-600">
                                <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-accent" />
                                <span>{item}</span>
                              </li>
                            ))}
                          </ul>
                        </MagneticCard>
                      ))}
                    </div>

                    <div className="mt-12">
                      <h3 className="text-sm font-bold uppercase tracking-wide text-primary">Representative Engineering Engagements</h3>
                      <div className="mt-4 overflow-x-auto rounded-2xl border border-slate-200 bg-white shadow-sm">
                        <table className="w-full min-w-[560px] text-left text-xs">
                          <thead className="bg-slate-50 text-[10px] uppercase tracking-wider text-slate-500">
                            <tr>
                              <th className="px-5 py-3 font-semibold">Representative Project Type</th>
                              <th className="px-5 py-3 font-semibold">Typical Services</th>
                            </tr>
                          </thead>
                          <tbody className="divide-y divide-slate-100">
                            {representativeEngagements.map((row) => (
                              <tr key={row.projectType} className="transition-colors hover:bg-slate-50/70">
                                <td className="px-5 py-3.5 font-semibold text-primary">{row.projectType}</td>
                                <td className="px-5 py-3.5 text-slate-500">{row.typicalServices}</td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    </div>

                    <div className="mt-12">
                      <h3 className="text-sm font-bold uppercase tracking-wide text-primary">Target Markets We Serve</h3>
                      <div className="mt-4 flex flex-wrap gap-2">
                        {targetMarkets.map((market) => (
                          <span key={market} className="rounded-full bg-accent/10 px-3.5 py-2 text-xs font-semibold text-accent ring-1 ring-accent/20">
                            {market}
                          </span>
                        ))}
                      </div>
                    </div>
                  </>
                )}

                {categoryCaseStudies.length > 0 && (
                  <div className="mt-12 grid grid-cols-1 gap-7 md:grid-cols-2 xl:grid-cols-3">
                    {categoryCaseStudies.map((cs, csIndex) => (
                      <CaseStudyCard key={cs.id} caseStudy={cs} index={csIndex} />
                    ))}
                  </div>
                )}
              </AnimatedSection>
            );
          })}
        </div>
      </section>

      <section className="border-t border-slate-100 bg-white py-16 text-center sm:py-20">
        <h2 className="font-display text-2xl font-extrabold text-primary sm:text-3xl">Have a project like these?</h2>
        <p className="mx-auto mt-3 max-w-xl text-sm text-slate-500">
          Talk to our engineering team about how GTS can support your next facility, program, or product.
        </p>
        <div className="mt-8 flex justify-center">
          <GradientButton href="/contact">
            Discuss Your Project
            <ArrowRight className="h-4 w-4" />
          </GradientButton>
        </div>
      </section>
    </div>
  );
}
