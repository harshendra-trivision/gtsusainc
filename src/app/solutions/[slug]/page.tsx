import React from 'react';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ArrowLeft, CheckCircle2, Cpu, HelpCircle, Mail, MessageSquare } from 'lucide-react';
import { solutionPoints } from '@/constants/solutions';
import Card from '@/components/common/Card';
import ImagePlaceholder from '@/components/common/ImagePlaceholder';

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
    <div className="flex flex-col w-full">
      {/* Detail Header */}
      <section className="bg-slate-950 text-white py-20 blueprint-grid relative border-b border-slate-900">
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-slate-950/70 to-slate-950" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          <Link 
            href="/" 
            className="inline-flex items-center gap-1.5 text-xs text-slate-400 hover:text-white transition-colors mb-6 font-mono"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            BACK TO HOME
          </Link>

          <div className="space-y-4 max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-accent/20 border border-accent/30 text-xs font-mono text-accent-light uppercase">
              <Cpu className="w-3.5 h-3.5 text-accent-light" />
              {point.parentHeading} Segment
            </div>
            <h1 className="text-3xl sm:text-5xl font-extrabold font-display tracking-tight text-white leading-tight">
              {point.title}
            </h1>
            <p className="text-slate-350 text-sm leading-relaxed max-w-xl">
              Specialized engineering capability and custom support services designed to integrate seamlessly with your internal development schedules.
            </p>
          </div>

        </div>
      </section>

      {/* Content Body */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
                    <div 
                      key={idx} 
                      className="bg-slate-50 border border-slate-200/50 rounded-lg p-4 flex items-center gap-3 shadow-sm hover:border-slate-300 transition-colors"
                    >
                      <span className="p-1 rounded bg-accent/15 text-accent shrink-0">
                        <CheckCircle2 className="w-4 h-4" />
                      </span>
                      <span className="text-xs text-slate-800 font-medium">{del}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right side contact & placeholders */}
            <div className="lg:col-span-4 space-y-8">
              {/* Asset Box */}
              <div className="p-2 border border-slate-200 bg-slate-50 rounded-2xl overflow-hidden shadow-sm">
                <ImagePlaceholder 
                  alt={point.title} 
                  aspectRatio="video"
                  showOverlay={true}
                  overlayText={`${point.parentHeading} - ${point.title}`}
                />
              </div>

              {/* Action box */}
              <div className="bg-primary text-white rounded-xl p-6 space-y-5 shadow-lg shadow-primary/10">
                <div className="space-y-1">
                  <h4 className="font-bold text-sm">Deploy this Capability</h4>
                  <p className="text-slate-350 text-[11px]">Request quotes or coordinate dedicated resources for {point.title}.</p>
                </div>
                <div className="space-y-2.5">
                  <Link 
                    href="/contact" 
                    className="flex w-full items-center justify-center gap-2 rounded-lg bg-white py-2.5 text-center text-xs font-semibold text-primary hover:bg-slate-100 transition-colors"
                  >
                    <MessageSquare className="w-4 h-4" />
                    Submit Engineering Request
                  </Link>
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
        </div>
      </section>
    </div>
  );
}
