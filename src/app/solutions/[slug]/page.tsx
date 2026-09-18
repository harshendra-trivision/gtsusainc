import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import {
  ArrowLeft,
  CheckCircle2,
  Cpu,
  Factory,
  Globe,
  Mail,
  MessageSquare,
  ShieldCheck,
  Sparkles,
} from 'lucide-react';
import { solutionPoints } from '@/constants/solutions';
import { engineeringCapabilities } from '@/constants/engineeringCapabilities';
import ImagePlaceholder from '@/components/common/ImagePlaceholder';
import { AnimatedSection, GradientButton, MagneticCard, PageHero } from '@/components/ui';

// Pre-render all solutions & capabilities at build time
export async function generateStaticParams() {
  const capabilityParams = engineeringCapabilities.map((cap) => ({
    slug: cap.slug,
  }));
  const pointParams = solutionPoints.map((pt) => ({
    slug: pt.slug,
  }));
  return [...capabilityParams, ...pointParams];
}

// Generate dynamic metadata for search crawl optimization
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const capability = engineeringCapabilities.find((c) => c.slug === slug);
  if (capability) {
    return {
      title: `${capability.title} | GTS Engineering Services`,
      description: capability.hero,
      keywords: [capability.title.toLowerCase(), 'engineering solutions', 'gts engineering', capability.slug],
      alternates: {
        canonical: `https://gtsusainc.com/solutions/${slug}`,
      },
    };
  }

  const point = solutionPoints.find((p) => p.slug === slug);
  if (!point) return {};

  return {
    title: `${point.title} Engineering Services | GTS Engineering`,
    description: `GTS Engineering provides advanced ${point.title} services, detailed design support, simulations, and deliverables for the ${point.parentHeading} sector.`,
    keywords: [point.title.toLowerCase(), `${point.title.toLowerCase()} engineering`, point.parentHeading.toLowerCase()],
    alternates: {
      canonical: `https://gtsusainc.com/solutions/${slug}`,
    },
  };
}

export default async function SolutionDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;

  // 1. Check if this slug is one of the 8 dedicated Engineering Capabilities
  const capability = engineeringCapabilities.find((c) => c.slug === slug);
  if (capability) {
    return (
      <div className="flex w-full flex-col">
        {/* Page Hero */}
        <PageHero
          eyebrow="OUR ENGINEERING CAPABILITIES"
          title={capability.title}
          description={capability.hero}
        >
          <div className="flex flex-wrap items-center gap-3">
            <Link
              href="/#solutions"
              className="inline-flex items-center gap-1.5 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-xs font-mono uppercase tracking-[0.18em] text-slate-300 transition-colors hover:text-white"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              BACK TO CAPABILITIES
            </Link>
            <span className="rounded-full bg-blue-500/20 border border-blue-400/30 px-3.5 py-1 text-xs font-mono uppercase tracking-wider text-cyan-300 font-bold">
              {capability.tagline}
            </span>
          </div>
        </PageHero>

        {/* Content Section */}
        <section className="industrial-surface py-16 sm:py-24">
          <AnimatedSection as="div" className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
              
              {/* Left Main Column */}
              <div className="lg:col-span-8 space-y-12">
                {/* Introduction */}
                <div className="space-y-4 rounded-3xl border border-slate-200/80 bg-white p-6 sm:p-8 shadow-xs">
                  <div className="inline-flex items-center gap-2 text-blue-600 font-mono text-xs font-bold uppercase tracking-widest">
                    <Sparkles className="w-4 h-4" />
                    <span>Capability Overview</span>
                  </div>
                  <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 font-display leading-tight">
                    {capability.title}
                  </h2>
                  <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                    {capability.introduction}
                  </p>
                </div>

                {/* Specialized Engineering Sections */}
                {capability.sections && capability.sections.length > 0 && (
                  <div className="space-y-6">
                    <div className="flex items-center justify-between">
                      <h3 className="text-xl font-extrabold text-slate-900 font-display">
                        Core Engineering Disciplines & Scope
                      </h3>
                      <span className="text-xs font-mono font-bold uppercase tracking-wider text-blue-600">
                        {capability.sections.length} Disciplines
                      </span>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                      {capability.sections.map((sec, idx) => (
                        <div
                          key={sec}
                          className="flex items-center gap-3.5 rounded-2xl border border-slate-200/80 bg-white p-4 shadow-xs transition-all hover:border-blue-300 hover:shadow-md group"
                        >
                          <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-blue-600 font-mono text-xs font-bold group-hover:bg-blue-600 group-hover:text-white transition-colors">
                            {String(idx + 1).padStart(2, '0')}
                          </span>
                          <span className="text-sm font-bold text-slate-800 leading-snug group-hover:text-blue-600 transition-colors">
                            {sec}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Concrete Deliverables */}
                {capability.deliverables && capability.deliverables.length > 0 && (
                  <div className="space-y-6">
                    <div className="flex items-center justify-between">
                      <h3 className="text-xl font-extrabold text-slate-900 font-display">
                        Engineering Deliverables
                      </h3>
                      <span className="text-xs font-mono font-bold uppercase tracking-wider text-emerald-600">
                        Verified Work Packages
                      </span>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                      {capability.deliverables.map((del) => (
                        <div
                          key={del}
                          className="flex items-start gap-3 rounded-2xl border border-slate-200/70 bg-white p-4 shadow-xs transition-all hover:border-emerald-300"
                        >
                          <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-emerald-50 text-emerald-600 mt-0.5 border border-emerald-100">
                            <CheckCircle2 className="w-3.5 h-3.5" />
                          </span>
                          <span className="text-xs sm:text-sm font-semibold text-slate-800 leading-relaxed">
                            {del}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Computational Software (if applicable) */}
                {capability.software && capability.software.length > 0 && (
                  <div className="space-y-4 rounded-3xl border border-blue-100 bg-blue-50/40 p-6 sm:p-7">
                    <h3 className="text-lg font-bold text-slate-900 font-display flex items-center gap-2">
                      <Cpu className="w-5 h-5 text-blue-600" />
                      Specialized Computational Software & Platforms
                    </h3>
                    <div className="flex flex-wrap gap-2.5 pt-2">
                      {capability.software.map((sw) => (
                        <span
                          key={sw}
                          className="rounded-xl border border-blue-200/80 bg-white px-4 py-2 font-mono text-xs font-bold text-blue-700 shadow-xs"
                        >
                          {sw}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                {/* Target Industries (if applicable) */}
                {capability.industries && capability.industries.length > 0 && (
                  <div className="space-y-4 rounded-3xl border border-slate-200/80 bg-white p-6 sm:p-7 shadow-xs">
                    <h3 className="text-lg font-bold text-slate-900 font-display flex items-center gap-2">
                      <Factory className="w-5 h-5 text-blue-600" />
                      Key Industrial Sectors Supported
                    </h3>
                    <div className="flex flex-wrap gap-2 pt-2">
                      {capability.industries.map((ind) => (
                        <span
                          key={ind}
                          className="rounded-full border border-slate-200 bg-slate-50 px-3.5 py-1.5 text-xs font-semibold text-slate-700"
                        >
                          {ind}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {/* Right Sticky Sidebar */}
              <div className="lg:col-span-4 space-y-8 sticky top-28">
                {/* Visual Showcase Card */}
                <div className="relative h-60 w-full rounded-3xl overflow-hidden border border-slate-200/80 shadow-lg bg-slate-900">
                  <Image
                    src={capability.image}
                    alt={capability.title}
                    fill
                    sizes="(min-width: 1024px) 33vw, 100vw"
                    className="object-cover opacity-85"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="text-[10px] font-mono font-bold uppercase tracking-[0.24em] text-cyan-300">
                      ENGINEERING FOCUS
                    </div>
                    <div className="text-sm font-extrabold text-white mt-1 leading-snug">
                      {capability.tagline}
                    </div>
                  </div>
                </div>

                {/* Deploy this Capability Box */}
                <div className="bg-slate-950 text-white rounded-3xl p-6 sm:p-7 space-y-5 shadow-2xl border border-slate-800">
                  <div className="space-y-1.5">
                    <span className="text-[10px] font-mono font-bold uppercase tracking-[0.24em] text-blue-400">
                      PARTNER WITH GTS
                    </span>
                    <h4 className="font-extrabold text-base font-display">
                      Deploy this Capability
                    </h4>
                    <p className="text-slate-400 text-xs leading-relaxed">
                      Consult with senior engineering directors, request work package estimates, or scale dedicated project teams.
                    </p>
                  </div>
                  
                  <div className="space-y-2.5 pt-2">
                    <GradientButton href="/contact" className="w-full justify-center py-3 text-xs font-bold">
                      <MessageSquare className="w-4 h-4" />
                      Submit Engineering Request
                    </GradientButton>
                    <a
                      href="mailto:info@gtsusainc.com"
                      className="flex w-full items-center justify-center gap-2 rounded-xl bg-white/10 py-3 text-center text-xs font-semibold text-white hover:bg-white/15 transition-colors border border-white/15"
                    >
                      <Mail className="w-4 h-4" />
                      Consult info@gtsusainc.com
                    </a>
                  </div>

                  {/* Trust list */}
                  <div className="pt-4 border-t border-slate-800 space-y-2 text-[11px] text-slate-300">
                    <div className="flex items-center gap-2">
                      <ShieldCheck className="w-4 h-4 text-cyan-400 shrink-0" />
                      <span>API, ASME, ISO & Global Codes Compliance</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Globe className="w-4 h-4 text-cyan-400 shrink-0" />
                      <span>USA Leadership + Global Delivery Centers</span>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </AnimatedSection>
        </section>
      </div>
    );
  }

  // 2. Fallback to existing SolutionPoint if not in capabilities
  const point = solutionPoints.find((p) => p.slug === slug);
  if (!point) {
    notFound();
  }

  return (
    <div className="flex w-full flex-col">
      <PageHero
        eyebrow={`${point.parentHeading} Segment`}
        title={point.title}
        description="Specialized engineering capability and custom support services designed to integrate seamlessly with your internal development schedules."
      >
        <Link
          href="/"
          className="inline-flex items-center gap-1.5 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-xs font-mono uppercase tracking-[0.18em] text-slate-300 transition-colors hover:text-white"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          BACK TO HOME
        </Link>
      </PageHero>

      <section className="industrial-surface py-16 sm:py-24">
        <AnimatedSection as="div" className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            {/* Left side details */}
            <div className="lg:col-span-8 space-y-12">
              <div className="space-y-4">
                <h3 className="text-xl font-bold text-primary font-display">Specialized Scope of Work</h3>
                <p className="text-slate-500 text-xs leading-relaxed">{point.description}</p>
                <p className="text-slate-500 text-xs leading-relaxed">
                  As part of our commitment to delivering engineering excellence, GTS deploys highly trained, experienced specialists matching your domain software stack. Our team manages calculations, revisions, standard certifications, and file migrations, allowing you to maximize core engineering focus.
                </p>
              </div>

              {/* Concrete deliverables */}
              <div className="space-y-6">
                <h3 className="text-xl font-bold text-primary font-display">Engineering Deliverables</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {point.deliverables.map((del, idx) => (
                    <MagneticCard
                      key={idx}
                      className="bg-slate-50 border border-slate-200/50 rounded-lg p-4 flex items-center gap-3 shadow-sm hover:border-slate-300 transition-colors"
                    >
                      <span className="p-1 rounded bg-accent/15 text-accent shrink-0">
                        <CheckCircle2 className="w-4 h-4" />
                      </span>
                      <span className="text-xs text-slate-800 font-medium">{del}</span>
                    </MagneticCard>
                  ))}
                </div>
              </div>
            </div>

            {/* Right side contact & placeholders */}
            <div className="lg:col-span-4 space-y-8">
              {/* Asset Box */}
              <div className="p-2 border border-slate-200 bg-white/80 rounded-2xl overflow-hidden shadow-xl shadow-blue-100/50">
                <ImagePlaceholder
                  alt={point.title}
                  src="/image/showcase1.png"
                  aspectRatio="video"
                  showOverlay={true}
                  overlayText={`${point.parentHeading} - ${point.title}`}
                />
              </div>

              {/* Action box */}
              <div className="bg-primary text-white rounded-[1.5rem] p-6 space-y-5 shadow-lg shadow-primary/10">
                <div className="space-y-1">
                  <h4 className="font-bold text-sm">Deploy this Capability</h4>
                  <p className="text-slate-300 text-[11px]">
                    Request quotes or coordinate dedicated resources for {point.title}.
                  </p>
                </div>
                <div className="space-y-2.5">
                  <GradientButton href="/contact" variant="secondary" className="w-full py-2.5 text-xs">
                    <MessageSquare className="w-4 h-4" />
                    Submit Engineering Request
                  </GradientButton>
                  <a
                    href="mailto:info@gtsusainc.com"
                    className="flex w-full items-center justify-center gap-2 rounded-lg bg-white/10 py-2.5 text-center text-xs font-semibold text-white hover:bg-white/15 transition-colors border border-white/20"
                  >
                    <Mail className="w-4 h-4" />
                    Consult info@gtsusainc.com
                  </a>
                </div>
              </div>
            </div>
          </div>
        </AnimatedSection>
      </section>
    </div>
  );
}
