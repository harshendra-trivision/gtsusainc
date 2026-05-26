import React from 'react';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ArrowLeft, CheckCircle2, ChevronRight, HelpCircle, Mail, MessageSquare } from 'lucide-react';
import { industries } from '@/constants/industries';
import { IconMapper } from '@/components/layout/Navbar';
import ImagePlaceholder from '@/components/common/ImagePlaceholder';
import Card from '@/components/common/Card';

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
    <div className="flex flex-col w-full">
      {/* Industry Header */}
      <section className="bg-slate-950 text-white py-20 blueprint-grid relative border-b border-slate-900">
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-slate-950/70 to-slate-950" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          <Link 
            href="/industries" 
            className="inline-flex items-center gap-1.5 text-xs text-slate-400 hover:text-white transition-colors mb-6 font-mono"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            BACK TO ALL INDUSTRIES
          </Link>

          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div className="space-y-4 max-w-3xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-accent/20 border border-accent/30 text-xs font-mono text-accent-light uppercase">
                <IconMapper name={ind.iconName} className="w-3.5 h-3.5 text-accent-light" />
                {ind.title.includes('Energy') ? 'Energy' : ind.title} Sector
              </div>
              <h1 className="text-3xl sm:text-5xl font-extrabold font-display tracking-tight text-white leading-tight">
                {ind.title}
              </h1>
              <p className="text-slate-350 text-base leading-relaxed">
                {ind.tagline}
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* Main Details Structure */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
                    <div 
                      key={i} 
                      className="bg-slate-50 border border-slate-200/50 rounded-lg p-4 flex items-center gap-3"
                    >
                      <span className="w-2 h-2 bg-accent rounded-full shrink-0 animate-pulse" />
                      <span className="text-xs text-slate-800 font-medium">{sub}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Column: Visual and Sidebar Contact */}
            <div className="lg:col-span-4 space-y-8">
              {/* Specialized Asset Image */}
              <div className="p-2 border border-slate-200 bg-slate-50 rounded-2xl overflow-hidden shadow-sm">
                <ImagePlaceholder 
                  alt={ind.title} 
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
              <div className="bg-primary text-white rounded-xl p-6 space-y-5 shadow-lg shadow-primary/10">
                <div className="space-y-1">
                  <h4 className="font-bold text-sm">Discuss a Project</h4>
                  <p className="text-slate-350 text-[11px]">Request design extensions for your {ind.title.toLowerCase()} systems.</p>
                </div>
                <div className="space-y-2.5">
                  <Link 
                    href="/contact" 
                    className="flex w-full items-center justify-center gap-2 rounded-lg bg-white py-2.5 text-center text-xs font-semibold text-primary hover:bg-slate-100 transition-colors"
                  >
                    <MessageSquare className="w-4 h-4" />
                    Submit Sector Inquiry
                  </Link>
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
        </div>
      </section>
    </div>
  );
}
