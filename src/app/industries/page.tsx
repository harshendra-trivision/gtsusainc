'use client';

import Image from 'next/image';
import Link from 'next/link';
import {
  Factory,
  Zap,
  Server,
  Cpu,
  Cog,
  Route,
  Mountain,
  FlaskConical,
  UtensilsCrossed,
  Ship,
  Landmark,
  ArrowRight
} from 'lucide-react';
import { industries, type Industry } from '@/constants/industries';
import { AnimatedSection } from '@/components/ui';

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Factory,
  Zap,
  Server,
  Cpu,
  Cog,
  Route,
  Mountain,
  FlaskConical,
  UtensilsCrossed,
  Ship,
  Landmark
};

export default function IndustriesLandingPage() {
  const row1 = industries.slice(0, 5);
  const row2 = industries.slice(5, 11);

  const renderCard = (ind: Industry) => {
    const Icon = iconMap[ind.iconName] || Factory;
    const tags = ind.cardTags || ind.subSectors.slice(0, 6);

    return (
      <div
        key={ind.slug}
        className="group relative flex flex-col justify-between overflow-hidden rounded-2xl border border-slate-200/90 bg-white shadow-xs transition-all duration-300 hover:-translate-y-1.5 hover:border-blue-300 hover:shadow-xl hover:shadow-blue-500/10"
      >
        {/* Top Industry Image */}
        <div className="relative h-36 sm:h-40 w-full overflow-hidden bg-slate-100">
          <Image
            src={ind.image || '/image/industries/Energy & Process Industry.jpg'}
            alt={ind.title}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw, 20vw"
            className="object-cover transition-transform duration-500 group-hover:scale-105"
            quality={90}
          />
        </div>

        {/* Floating Circular Icon Badge */}
        <div className="relative -mt-5 ml-4 z-10 flex h-10 w-10 sm:h-11 sm:w-11 items-center justify-center rounded-full bg-[#0070f3] text-white shadow-md ring-4 ring-white transition-transform duration-300 group-hover:scale-110">
          <Icon className="h-5 w-5" />
        </div>

        {/* Card Body */}
        <div className="flex flex-1 flex-col p-4 pt-2.5">
          <h3 className="text-sm sm:text-[15px] font-bold text-slate-900 leading-snug transition-colors group-hover:text-[#0070f3] min-h-[42px] flex items-center">
            {ind.title}
          </h3>

          <p className="mt-1.5 text-[11px] sm:text-xs leading-relaxed text-slate-500 min-h-[50px] line-clamp-3">
            {ind.cardDescription || ind.tagline}
          </p>

          {/* Subsector Pills */}
          <div className="mt-3 flex flex-wrap gap-1.5 min-h-[52px] content-start">
            {tags.map((tag) => (
              <span
                key={tag}
                className="rounded-md bg-slate-50 px-2 py-0.5 text-[10px] font-medium text-slate-600 border border-slate-200/80"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Action Link */}
          <div className="mt-4 pt-3 border-t border-slate-100">
            <Link
              href={`/industries/${ind.slug}`}
              className="flex items-center justify-center gap-1.5 text-xs font-semibold text-[#0070f3] transition-colors group-hover:text-blue-700"
            >
              <span>View Industry Focus</span>
              <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="flex w-full flex-col bg-[#f8fafc]">
      {/* Hero Banner Section with public/image/industries/indistries-main-bg.jpg */}
      <section className="relative overflow-hidden bg-slate-950 py-20 sm:py-28 lg:py-32">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/image/industries/indistries-main-bg.jpg"
            alt="Target Industry Verticals Background"
            fill
            priority
            quality={95}
            className="object-cover object-center"
          />
          {/* Subtle dark gradient overlay to ensure high contrast for typography */}
          <div className="absolute inset-0 bg-gradient-to-b from-slate-950/75 via-slate-950/50 to-slate-950/80" />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center justify-center gap-3">
            <span className="h-px w-8 bg-sky-400/80" />
            <span className="text-xs font-bold uppercase tracking-[0.25em] text-sky-400">
              SECTOR-DRIVEN EXPERTISE
            </span>
            <span className="h-px w-8 bg-sky-400/80" />
          </div>

          <h1 className="mt-4 text-3xl font-black tracking-tight text-white sm:text-5xl lg:text-6xl font-display">
            Target Industry Verticals
          </h1>

          <p className="mx-auto mt-4 max-w-3xl text-sm sm:text-base leading-relaxed text-slate-200">
            Applying advanced engineering solutions, across analysis, CAD utilization, and standards documentation
            across diverse industrial market verticals.
          </p>
        </div>
      </section>

      {/* Target Industry Cards Grid */}
      <section className="py-12 sm:py-16">
        <AnimatedSection as="div" className="mx-auto max-w-[1560px] px-4 sm:px-6 lg:px-8">
          {/* Row 1: Top 5 Industries */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-5">
            {row1.map(renderCard)}
          </div>

          {/* Row 2: Bottom 6 Industries */}
          <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-5">
            {row2.map(renderCard)}
          </div>
        </AnimatedSection>
      </section>
    </div>
  );
}
