'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowRight, ChevronRight } from 'lucide-react';
import { services } from '@/constants/services';
import { IconMapper } from '@/components/layout/Navbar';
import Card from '@/components/common/Card';

export default function ServicesLandingPage() {
  return (
    <div className="flex flex-col w-full">
      {/* Page Header */}
      <section className="bg-slate-950 text-white py-20 blueprint-grid relative">
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-slate-950/70 to-slate-950" />
        <div className="max-w-5xl mx-auto px-4 relative z-10 text-center space-y-4">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-accent/15 border border-accent/30 text-xs font-mono text-accent-light uppercase tracking-wider">
            GTS Services
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold font-display tracking-tight text-white">
            Engineering & Technology Capabilities
          </h1>
          <p className="text-slate-400 text-sm max-w-2xl mx-auto leading-relaxed">
            Delivering bespoke design, CAD modeling, FEA simulation, GIS assets tracking, and commissioning controls across the product and plant lifecycle.
          </p>
        </div>
      </section>

      {/* Services Directory */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((svc) => (
              <Card
                key={svc.slug}
                className="flex flex-col bg-white border border-slate-200/75 p-8 rounded-xl shadow-sm hover:shadow-md hover:border-slate-350 transition-all group"
              >
                {/* Icon wrapper */}
                <div className="p-3.5 rounded-xl bg-slate-50 text-slate-600 group-hover:bg-accent group-hover:text-white transition-colors self-start mb-6">
                  <IconMapper name={svc.iconName} className="w-6 h-6" />
                </div>

                <h2 className="text-lg font-bold text-primary group-hover:text-accent transition-colors mb-3">
                  {svc.title}
                </h2>

                <p className="text-slate-500 text-xs leading-relaxed mb-6">
                  {svc.tagline}
                </p>

                {/* Sub-services breakdown snippet */}
                <div className="border-t border-slate-100 pt-5 mt-auto space-y-3">
                  <div className="text-[10px] font-mono tracking-widest uppercase text-slate-400 font-semibold">
                    Service Competencies
                  </div>
                  <ul className="text-xs text-slate-600 space-y-2">
                    {svc.subServices.map((sub, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-accent mt-1.5 shrink-0" />
                        <span className="text-[11px] leading-tight font-medium text-slate-700">{sub.title}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-6 mt-6 border-t border-slate-100/50">
                  <Link 
                    href={`/services/${svc.slug}`}
                    className="flex w-full items-center justify-center gap-2 rounded-lg bg-slate-50 py-3 text-center text-xs font-semibold text-accent hover:bg-accent hover:text-white transition-all group-hover:shadow-sm"
                  >
                    Explore Detailed Offerings
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>

              </Card>
            ))}
          </div>

        </div>
      </section>
    </div>
  );
}
export { ServicesLandingPage };
