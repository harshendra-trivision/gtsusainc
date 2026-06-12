import React from 'react';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ArrowLeft, CheckCircle2, Mail, MessageSquare } from 'lucide-react';
import { solutionPoints } from '@/constants/solutions';
import ImagePlaceholder from '@/components/common/ImagePlaceholder';
import { AnimatedSection, GradientButton, MagneticCard, PageHero } from '@/components/ui';

// Pre-render all 50+ solutions at build time for instant loading
export async function generateStaticParams() {
  return solutionPoints.map((pt) => ({
    slug: pt.slug,
  }));
}

// Generate dynamic metadata for search crawl optimization
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const point = solutionPoints.find((p) => p.slug === slug);
  if (!point) return {};

  return {
    title: `${point.title} Engineering Services | GTS Engineering`,
    description: `GTS Engineering provides advanced ${point.title} services, detailed design support, simulations, and deliverables for the ${point.parentHeading} sector.`,
    keywords: [point.title.toLowerCase(), `${point.title.toLowerCase()} engineering`, point.parentHeading.toLowerCase()],
    alternates: {
      canonical: `https://gtsusainc.com/solutions/${slug}`
    }
  };
}

export default async function SolutionDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
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
                <p className="text-slate-500 text-xs leading-relaxed">
                  {point.description}
                </p>
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
                  <p className="text-slate-300 text-[11px]">Request quotes or coordinate dedicated resources for {point.title}.</p>
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
