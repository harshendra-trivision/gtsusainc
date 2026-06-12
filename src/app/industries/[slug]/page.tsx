import React from 'react';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ArrowLeft, CheckCircle2, Mail, MessageSquare } from 'lucide-react';
import { industries } from '@/constants/industries';
import ImagePlaceholder from '@/components/common/ImagePlaceholder';
import { AnimatedSection, GradientButton, MagneticCard, PageHero } from '@/components/ui';

// Pre-render static paths at build time for optimal speed and SEO
export async function generateStaticParams() {
  return industries.map((ind) => ({
    slug: ind.slug,
  }));
}

// Generate dynamic metadata for search optimization
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const ind = industries.find((i) => i.slug === slug);
  if (!ind) return {};

  return {
    title: ind.seoTitle,
    description: ind.seoDescription,
    keywords: ind.seoKeywords,
    alternates: {
      canonical: `https://gtsusainc.com/industries/${slug}`
    }
  };
}

export default async function IndustryDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const ind = industries.find((i) => i.slug === slug);

  if (!ind) {
    notFound();
  }

  return (
    <div className="flex w-full flex-col">
      <PageHero
        eyebrow={`${ind.title.includes('Energy') ? 'Energy' : ind.title} Sector`}
        title={ind.title}
        description={ind.tagline}
      >
          <Link 
            href="/industries" 
            className="inline-flex items-center gap-1.5 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-xs font-mono uppercase tracking-[0.18em] text-slate-300 transition-colors hover:text-white"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            BACK TO ALL INDUSTRIES
          </Link>
      </PageHero>

      <section className="industrial-surface py-16 sm:py-24">
        <AnimatedSection as="div" className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            
            {/* Left Column: Sectors Served & Capabilities */}
            <div className="lg:col-span-8 space-y-12">
              {/* Detailed Description */}
              <div className="space-y-4">
                <h3 className="text-xl font-bold text-primary font-display">Sector Overview</h3>
                <p className="text-slate-500 text-sm leading-relaxed">
                  {ind.description}
                </p>
              </div>

              {/* Sub-sectors Checklist */}
              <div className="space-y-6">
                <h3 className="text-xl font-bold text-primary font-display">Specialized Domain Segments</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {ind.subSectors.map((sub, i) => (
                    <MagneticCard
                      key={i} 
                      className="bg-slate-50 border border-slate-200/50 rounded-lg p-4 flex items-center gap-3"
                    >
                      <span className="w-2 h-2 bg-accent rounded-full shrink-0 animate-pulse" />
                      <span className="text-xs text-slate-800 font-medium">{sub}</span>
                    </MagneticCard>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Column: Visual and Sidebar Contact */}
            <div className="lg:col-span-4 space-y-8">
              {/* Specialized Asset Image */}
              <div className="p-2 border border-slate-200 bg-white/80 rounded-2xl overflow-hidden shadow-xl shadow-blue-100/50">
                <ImagePlaceholder 
                  alt={ind.title} 
                  src="/image/showcase3.png"
                  aspectRatio="video"
                  showOverlay={true}
                  overlayText={`${ind.title.replace('Energy – ', '')} Asset`}
                />
              </div>

              {/* Bullet Highlights Card */}
              <div className="bg-slate-50 border border-slate-200 rounded-xl p-6 space-y-4">
                <h4 className="font-bold text-primary text-xs font-mono uppercase tracking-wider">
                  Highlights & Capabilities
                </h4>
                <ul className="text-xs text-slate-600 space-y-3">
                  {ind.features.map((bp, i) => (
                    <li key={i} className="flex gap-2 items-start">
                      <CheckCircle2 className="w-4 h-4 text-accent shrink-0 mt-0.5" />
                      <span className="leading-tight">{bp}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Inquiry CTA Card */}
              <div className="bg-primary text-white rounded-[1.5rem] p-6 space-y-5 shadow-lg shadow-primary/10">
                <div className="space-y-1">
                  <h4 className="font-bold text-sm">Discuss a Project</h4>
                  <p className="text-slate-300 text-[11px]">Request design extensions for your {ind.title.toLowerCase()} systems.</p>
                </div>
                <div className="space-y-2.5">
                  <GradientButton href="/contact" variant="secondary" className="w-full py-2.5 text-xs">
                    <MessageSquare className="w-4 h-4" />
                    Submit Sector Inquiry
                  </GradientButton>
                  <a 
                    href="mailto:info@gtsusainc.com" 
                    className="flex w-full items-center justify-center gap-2 rounded-lg bg-white/10 py-2.5 text-center text-xs font-semibold text-white hover:bg-white/15 transition-colors border border-white/20"
                  >
                    <Mail className="w-4 h-4" />
                    Email info@gtsusainc.com
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
