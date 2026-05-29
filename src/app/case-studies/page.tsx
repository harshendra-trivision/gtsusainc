'use client';

import React, { useState } from 'react';
import { FileText, Filter, CheckCircle2 } from 'lucide-react';
import { caseStudies } from '@/constants/caseStudies';
import Card from '@/components/common/Card';
import ImagePlaceholder from '@/components/common/ImagePlaceholder';

export default function CaseStudiesPage() {
  const [activeCategory, setActiveCategory] = useState<string>('all');

  const categories = [
    { id: 'all', label: 'All Projects' },
    { id: 'Oil & Gas', label: 'Oil & Gas' },
    { id: 'Manufacturing', label: 'Manufacturing' },
    { id: 'Power & Utilities', label: 'Power & Utilities' }
  ];

  const filteredCaseStudies =
    activeCategory === 'all'
      ? caseStudies
      : caseStudies.filter((cs) => cs.clientIndustry === activeCategory);

  return (
    <div className="flex flex-col w-full">
      <section className="bg-slate-950 text-white py-20 blueprint-grid relative">
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-slate-950/70 to-slate-950" />
        <div className="max-w-5xl mx-auto px-4 relative z-10 text-center space-y-4">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-accent/15 border border-accent/30 text-xs font-mono text-accent-light uppercase tracking-wider">
            Proven Performance
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold font-display tracking-tight text-white">
            Industrial Transformation Case Studies
          </h1>
          <p className="text-slate-400 text-sm max-w-2xl mx-auto leading-relaxed">
            Client challenge, implemented solution, technologies used, and measurable business impact from AI, automation, and digital engineering programs.
          </p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="flex flex-wrap items-center justify-center gap-3">
            <div className="flex items-center gap-2 text-xs font-mono text-slate-400 mr-2 uppercase tracking-wider">
              <Filter className="w-4 h-4 text-slate-400" />
              Filter by sector:
            </div>
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-4 py-2 rounded-full text-xs font-semibold transition-all border ${
                  activeCategory === cat.id
                    ? 'bg-accent text-white border-accent shadow-sm'
                    : 'bg-slate-50 text-slate-600 border-slate-200 hover:bg-slate-100'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          <div className="space-y-12">
            {filteredCaseStudies.map((cs) => (
              <Card
                key={cs.id}
                className="bg-white border border-slate-200/80 rounded-2xl p-6 sm:p-8 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start shadow-sm hover:shadow-md transition-all"
              >
                <div className="lg:col-span-4 relative border border-slate-200 rounded-xl overflow-hidden p-1.5 bg-slate-50">
                  <ImagePlaceholder alt={cs.title} aspectRatio="video" showOverlay={true} overlayText={cs.clientIndustry} />
                </div>

                <div className="lg:col-span-8 space-y-6">
                  <div>
                    <div className="text-[10px] font-mono text-accent font-semibold uppercase tracking-wider mb-1.5">
                      Case File: {cs.clientIndustry}
                    </div>
                    <h2 className="text-lg sm:text-xl font-extrabold text-primary leading-snug">{cs.title}</h2>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-xs text-slate-600">
                    <div className="space-y-2">
                      <h4 className="font-bold text-primary">Client Challenge</h4>
                      <p className="leading-relaxed text-slate-500">{cs.challenge}</p>
                    </div>
                    <div className="space-y-2">
                      <h4 className="font-bold text-primary">Solution Implemented</h4>
                      <p className="leading-relaxed text-slate-500">{cs.solution}</p>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-xs text-slate-600">
                    <div className="space-y-2">
                      <h4 className="font-bold text-primary">Technologies Used</h4>
                      <p className="leading-relaxed text-slate-500">{cs.technologies.join(', ')}</p>
                    </div>
                    <div className="space-y-2">
                      <h4 className="font-bold text-primary">Engineering Scope</h4>
                      <p className="leading-relaxed text-slate-500">{cs.engineeringScope}</p>
                    </div>
                  </div>

                  <div className="border-t border-slate-100 pt-5 space-y-3">
                    <h4 className="text-[10px] font-mono text-slate-400 uppercase tracking-widest font-semibold">
                      Measurable Business Impact
                    </h4>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-700 font-medium">
                      {cs.results.map((res, idx) => (
                        <li key={idx} className="flex gap-2 items-start bg-slate-50 p-2.5 rounded border border-slate-100">
                          <CheckCircle2 className="w-4 h-4 text-accent shrink-0 mt-0.5" />
                          <span className="leading-tight">{res}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="pt-4 border-t border-slate-50 flex items-center justify-between">
                    {cs.pdfUrl !== '#' ? (
                      <a
                        href={cs.pdfUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 rounded-lg bg-accent/10 px-4 py-2.5 text-xs font-mono font-semibold text-accent hover:bg-accent hover:text-white transition-all"
                      >
                        <FileText className="w-4 h-4" />
                        DOWNLOAD CASE STUDY
                      </a>
                    ) : (
                      <span className="text-[10px] font-mono text-slate-400 uppercase italic">
                        Detailed case file available on request
                      </span>
                    )}
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
