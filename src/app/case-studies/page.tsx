'use client';

import { useMemo, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {
  ArrowRight,
  CheckCircle2,
  Database,
  Factory,
  Flame,
  Truck,
  Sparkles,
  type LucideIcon
} from 'lucide-react';
import { caseStudies, type CaseStudy } from '@/constants/caseStudies';
import {
  dataCenterCapabilities,
  representativeEngagements,
  targetMarkets,
  type CapabilityScope
} from '@/constants/dataCenterPortfolio';
import { projectsMegaMenu } from '@/constants/projectsMenu';
import { AnimatedSection, GradientButton, PageHero } from '@/components/ui';

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
  manufacturing: [
    'Robotics Automation',
    'Digital Transformation',
    'Supply Chain Optimization',
    'Lean Manufacturing',
    'AI Predictive Maintenance'
  ],
  'heavy-engineering': [
    'Mining Trucks',
    'Freight Cars',
    'Bogies',
    'Boom Cranes',
    'Drilling Rigs'
  ]
};

function CaseStudyCard({ caseStudy, index }: { caseStudy: CaseStudy; index: number }) {
  return (
    <div className="group relative flex flex-col justify-between overflow-hidden rounded-2xl border border-slate-200/90 bg-white shadow-xs transition-all duration-300 hover:-translate-y-1 hover:border-blue-400 hover:shadow-xl hover:shadow-blue-500/10">
      {/* Top Image Banner */}
      <div className="relative h-44 sm:h-48 w-full overflow-hidden bg-slate-900">
        <Image
          src={caseStudy.imageUrl || '/image/projects/project bg.jpg'}
          alt={caseStudy.title}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
        {/* Dark subtle gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-950/30 to-slate-950/60" />

        {/* Top Header Overlay inside Image */}
        <div className="absolute inset-x-0 top-0 flex items-center justify-between p-3.5 sm:p-4">
          <span className="inline-flex items-center gap-1.5 rounded-full border border-cyan-400/40 bg-blue-950/75 px-3 py-1 text-[10px] font-semibold uppercase tracking-wider text-cyan-200 backdrop-blur-md">
            <span className="h-1.5 w-1.5 rounded-full bg-cyan-400 animate-pulse" />
            <span className="truncate max-w-[180px]">{caseStudy.industry}</span>
          </span>
          <span className="text-[11px] font-mono font-semibold uppercase tracking-[0.2em] text-white/85 drop-shadow-sm">
            {`CASE ${String(index + 1).padStart(2, '0')}`}
          </span>
        </div>
      </div>

      {/* Card Body */}
      <div className="flex flex-1 flex-col justify-between p-5 sm:p-6">
        <div>
          <h3 className="font-display text-base sm:text-lg font-bold leading-snug text-slate-900 group-hover:text-blue-600 transition-colors">
            {caseStudy.title}
          </h3>
          {caseStudy.client && (
            <p className="mt-1 text-xs font-medium text-slate-500">Client: {caseStudy.client}</p>
          )}
          <p className="mt-2.5 text-xs leading-relaxed text-slate-600">{caseStudy.challenge}</p>

          {/* GTS SOLUTION */}
          {caseStudy.solution && caseStudy.solution.length > 0 && (
            <div className="mt-4 border-t border-slate-100 pt-3">
              <div className="mb-2 text-[10px] font-mono font-bold uppercase tracking-wider text-slate-400">
                GTS SOLUTION
              </div>
              <div className="flex flex-wrap gap-1.5">
                {caseStudy.solution.map((item) => (
                  <span
                    key={item}
                    className="inline-flex items-center gap-1.5 rounded-full border border-blue-100 bg-blue-50/70 px-2.5 py-0.5 text-[11px] font-medium text-blue-900"
                  >
                    <span className="h-1 w-1 shrink-0 rounded-full bg-blue-500" />
                    <span>{item}</span>
                  </span>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* BUSINESS OUTCOME & Action Arrow */}
        {caseStudy.outcomes && caseStudy.outcomes.length > 0 && (
          <div className="mt-4 border-t border-slate-100 pt-3 flex items-end justify-between gap-3">
            <div className="flex-1 space-y-1.5">
              <div className="mb-1 text-[10px] font-mono font-bold uppercase tracking-wider text-slate-400">
                BUSINESS OUTCOME
              </div>
              <ul className="space-y-1">
                {caseStudy.outcomes.map((outcome) => (
                  <li key={outcome} className="flex items-start gap-1.5 text-xs font-medium text-slate-700 leading-snug">
                    <CheckCircle2 className="mt-0.5 h-3.5 w-3.5 shrink-0 text-blue-600" />
                    <span>{outcome}</span>
                  </li>
                ))}
              </ul>
            </div>

            <Link
              href="/contact"
              className="mb-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-blue-300 text-blue-600 transition-all hover:border-blue-600 hover:bg-blue-600 hover:text-white shadow-xs"
              aria-label={`Inquire about ${caseStudy.title}`}
            >
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}

function DataCenterCapabilityCard({
  capability,
  index
}: {
  capability: CapabilityScope;
  index: number;
}) {
  return (
    <div className="group relative flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 sm:gap-4 overflow-hidden rounded-2xl border border-slate-200/90 bg-white p-3 sm:p-3.5 shadow-xs hover:border-blue-400 hover:shadow-lg hover:shadow-blue-500/10 transition-all duration-300">
      {/* Left Thumbnail Image */}
      <div className="relative h-32 sm:h-36 w-full sm:w-40 md:w-44 shrink-0 overflow-hidden rounded-xl bg-slate-900">
        <Image
          src={capability.imageUrl || '/image/projects/Hyperscale Data Center Engineering .jpg'}
          alt={capability.title}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1200px) 25vw, 15vw"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/40 via-transparent to-transparent" />
      </div>

      {/* Right Content Area */}
      <div className="flex flex-1 flex-col justify-between py-1 pr-1">
        <div>
          <h4 className="font-display text-sm sm:text-[14px] font-bold text-slate-900 leading-snug group-hover:text-blue-600 transition-colors">
            {capability.title}
          </h4>

          <ul className="mt-2 space-y-1">
            {capability.scope.map((item) => (
              <li
                key={item}
                className="flex items-start gap-1.5 text-[11px] sm:text-xs text-slate-600 leading-tight"
              >
                <span className="mt-1 h-1 w-1 shrink-0 rounded-full bg-blue-500" />
                <span className="leading-tight">{item}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-2.5 flex justify-end">
          <Link
            href="/contact"
            className="flex h-7 w-7 items-center justify-center rounded-full border border-blue-300 text-blue-600 transition-all hover:border-blue-600 hover:bg-blue-600 hover:text-white shadow-xs"
            aria-label={`Inquire about ${capability.title}`}
          >
            <ArrowRight className="h-3.5 w-3.5" />
          </Link>
        </div>
      </div>
    </div>
  );
}

function PracticeSection({
  category,
  index,
  caseStudiesList,
  highlights
}: {
  category: (typeof projectsMegaMenu)[number];
  index: number;
  caseStudiesList: CaseStudy[];
  highlights?: string[];
}) {
  const [activeFilter, setActiveFilter] = useState<string>('all');
  const Icon = categoryIcons[category.icon] ?? Flame;
  const isDataCenters = category.slug === 'data-centers-mission-critical';

  // Filter case studies based on active filter
  const displayedCaseStudies = useMemo(() => {
    if (activeFilter === 'all') return caseStudiesList;
    const filterLower = activeFilter.toLowerCase();
    const matched = caseStudiesList.filter((cs) => {
      return (
        cs.title.toLowerCase().includes(filterLower) ||
        filterLower.includes(cs.title.toLowerCase()) ||
        cs.industry.toLowerCase().includes(filterLower) ||
        filterLower.includes(cs.industry.toLowerCase()) ||
        cs.solution.some((s) => s.toLowerCase().includes(filterLower) || filterLower.includes(s.toLowerCase()))
      );
    });
    return matched.length > 0 ? matched : caseStudiesList;
  }, [activeFilter, caseStudiesList]);

  return (
    <AnimatedSection as="div" id={category.slug} className="scroll-mt-32">
      {/* Practice Header with Icon */}
      <div className="flex items-start gap-4">
        <span className="flex h-12 w-12 sm:h-14 sm:w-14 shrink-0 items-center justify-center rounded-2xl bg-blue-600 text-white shadow-lg shadow-blue-500/20">
          <Icon className="h-6 w-6" />
        </span>
        <div>
          <span className="text-xs font-mono font-bold uppercase tracking-[0.22em] text-blue-600">
            {`PRACTICE ${String(index + 1).padStart(2, '0')}`}
          </span>
          <h2 className="mt-0.5 font-display text-2xl font-extrabold text-slate-900 sm:text-3xl">
            {category.label}
          </h2>
          {category.tagline && (
            <p className="mt-1 text-sm font-medium text-slate-500">{category.tagline}</p>
          )}
        </div>
      </div>

      {/* Filter Tabs / Pills Row (for practices other than Data Centers) */}
      {!isDataCenters && highlights && highlights.length > 0 && (
        <div className="mt-6 flex flex-wrap items-center gap-2">
          <button
            type="button"
            onClick={() => setActiveFilter('all')}
            className={`rounded-full px-4 py-1.5 text-xs font-medium transition-all duration-200 ${
              activeFilter === 'all'
                ? 'bg-blue-600 text-white shadow-sm'
                : 'border border-slate-200 bg-white text-slate-700 hover:border-blue-300 hover:text-blue-600'
            }`}
          >
            All Projects
          </button>
          {highlights.map((item) => {
            const isSelected = activeFilter.toLowerCase() === item.toLowerCase();
            return (
              <button
                key={item}
                type="button"
                onClick={() => setActiveFilter(isSelected ? 'all' : item)}
                className={`rounded-full px-4 py-1.5 text-xs font-medium transition-all duration-200 ${
                  isSelected
                    ? 'bg-blue-600 text-white shadow-sm'
                    : 'border border-slate-200 bg-white text-slate-700 hover:border-blue-300 hover:text-blue-600'
                }`}
              >
                {item}
              </button>
            );
          })}
        </div>
      )}

      {/* Content Rendering */}
      {isDataCenters ? (
        <div className="mt-8 space-y-12">
          {/* 12 Horizontal Split Capability Cards Grid */}
          <div className="grid grid-cols-1 gap-4 sm:gap-5 md:grid-cols-2 xl:grid-cols-3">
            {dataCenterCapabilities.map((cap, capIdx) => (
              <DataCenterCapabilityCard key={cap.title} capability={cap} index={capIdx} />
            ))}
          </div>

          {/* Bottom Split Section: Left (Table + Target Markets) | Right (Industrial Facility Modularization Card) */}
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-12 lg:items-start">
            {/* Left: Representative Engagements Table & Target Markets */}
            <div className="space-y-6 lg:col-span-8">
              <div>
                <h3 className="mb-3 text-xs sm:text-sm font-bold uppercase tracking-wider text-slate-900">
                  REPRESENTATIVE ENGINEERING ENGAGEMENTS
                </h3>
                <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-xs">
                  <table className="w-full text-left text-xs">
                    <thead className="border-b border-slate-100 bg-slate-50 text-[10px] font-semibold uppercase tracking-wider text-slate-500">
                      <tr>
                        <th className="px-5 py-3">REPRESENTATIVE PROJECT TYPE</th>
                        <th className="px-5 py-3">TYPICAL SERVICES</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100 text-slate-600">
                      {representativeEngagements.map((row) => (
                        <tr key={row.projectType} className="transition-colors hover:bg-blue-50/40">
                          <td className="px-5 py-2.5 font-semibold text-slate-900">{row.projectType}</td>
                          <td className="px-5 py-2.5 text-slate-500">{row.typicalServices}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              <div>
                <h4 className="mb-3 text-xs font-bold uppercase tracking-wider text-slate-900">
                  TARGET MARKETS WE SERVE
                </h4>
                <div className="flex flex-wrap gap-2">
                  {targetMarkets.map((market) => (
                    <span
                      key={market}
                      className="rounded-full border border-blue-100/90 bg-blue-50/80 px-3 py-1 text-[11px] font-medium text-blue-900"
                    >
                      {market}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Right: Case Study Card for Data Centers (Industrial Facility Modularization) */}
            <div className="lg:col-span-4">
              {caseStudiesList.length > 0 ? (
                caseStudiesList.map((cs, csIndex) => (
                  <CaseStudyCard key={cs.id} caseStudy={cs} index={csIndex} />
                ))
              ) : null}
            </div>
          </div>
        </div>
      ) : (
        /* Non-DataCenters standard 3-column grid */
        displayedCaseStudies.length > 0 && (
          <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {displayedCaseStudies.map((cs, csIndex) => (
              <CaseStudyCard key={cs.id} caseStudy={cs} index={csIndex} />
            ))}
          </div>
        )
      )}
    </AnimatedSection>
  );
}

export default function CaseStudiesPage() {
  return (
    <div className="flex w-full flex-col">
      <PageHero
        eyebrow="Representative Projects"
        title="Engineering Delivered At Scale"
        description="From refinery technology transfer to hyperscale data centers and heavy equipment value engineering, GTS delivers multidisciplinary engineering across energy, mission-critical infrastructure, manufacturing, and heavy industry."
        backgroundImage="/image/projects/project bg.jpg"
      >
        <div className="mx-auto flex max-w-5xl flex-wrap items-center justify-center gap-2.5 sm:gap-3">
          {projectsMegaMenu.map((category) => (
            <a
              key={category.slug}
              href={`#${category.slug}`}
              className="rounded-full border border-blue-400/30 bg-[#0c1f38]/80 px-4 py-1.5 text-[11px] font-medium uppercase tracking-[0.14em] text-blue-200 backdrop-blur-sm transition-all duration-200 hover:border-cyan-300/80 hover:bg-blue-900/60 hover:text-white hover:shadow-[0_0_14px_rgba(56,189,248,0.3)] sm:px-5 sm:py-2 sm:text-xs"
            >
              {category.label}
            </a>
          ))}
        </div>
      </PageHero>

      <section className="industrial-surface py-16 sm:py-24">
        <div className="mx-auto max-w-7xl space-y-24 px-4 sm:px-6 lg:px-8">
          {projectsMegaMenu.map((category, index) => {
            const highlights = categoryHighlights[category.slug];
            const categoryCaseStudies = caseStudies.filter((cs) => cs.category === category.slug);

            return (
              <PracticeSection
                key={category.slug}
                category={category}
                index={index}
                caseStudiesList={categoryCaseStudies}
                highlights={highlights}
              />
            );
          })}
        </div>
      </section>

      <section className="border-t border-slate-100 bg-white py-16 text-center sm:py-20">
        <h2 className="font-display text-2xl font-extrabold text-primary sm:text-3xl">
          Have a project like these?
        </h2>
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

