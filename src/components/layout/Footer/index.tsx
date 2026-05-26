'use client';

import React from 'react';
import Link from 'next/link';
import { Mail, MapPin, Phone, ArrowUpRight, ShieldCheck } from 'lucide-react';
import { services } from '@/constants/services';
import { industries } from '@/constants/industries';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-950 text-slate-400 border-t border-slate-900 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
        
        {/* Column 1: Brand & Quality Overview */}
        <div className="flex flex-col space-y-5">
          <div>
            <Link href="/" className="flex flex-col group">
              <span className="text-xl font-bold font-display tracking-tight text-white group-hover:text-accent-light transition-colors">
                GTS Engineering
              </span>
              <span className="text-[9px] font-mono tracking-widest uppercase text-slate-500 -mt-0.5 group-hover:text-slate-400 transition-colors">
                USA INCORPORATED
              </span>
            </Link>
          </div>
          <p className="text-xs leading-relaxed text-slate-500">
            A technology enabler and virtual extension of global engineering teams, delivering end-to-end design, FEA simulation, plant layouts, GIS systems, and project management controls.
          </p>
          <div className="flex items-center gap-2 pt-2 text-xs font-mono text-slate-500">
            <ShieldCheck className="w-4 h-4 text-accent-light" />
            <span>QMS Compliance: ISO 9001 / CMMI L3</span>
          </div>
        </div>

        {/* Column 2: Quick Links - Services */}
        <div className="space-y-4">
          <h4 className="text-xs font-mono uppercase tracking-widest text-slate-300 font-semibold">
            Services
          </h4>
          <ul className="text-xs space-y-2.5">
            {services.map((svc) => (
              <li key={svc.slug}>
                <Link 
                  href={`/services/${svc.slug}`}
                  className="hover:text-white transition-colors flex items-center gap-1 group"
                >
                  <span>{svc.title}</span>
                  <ArrowUpRight className="w-3 h-3 text-slate-600 group-hover:text-accent-light transition-colors opacity-0 group-hover:opacity-100" />
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Column 3: Quick Links - Industries */}
        <div className="space-y-4">
          <h4 className="text-xs font-mono uppercase tracking-widest text-slate-300 font-semibold">
            Industries
          </h4>
          <ul className="text-xs space-y-2.5">
            {industries.slice(0, 6).map((ind) => (
              <li key={ind.slug}>
                <Link 
                  href={`/industries/${ind.slug}`}
                  className="hover:text-white transition-colors flex items-center gap-1 group"
                >
                  <span>{ind.title.replace('Energy – ', '')}</span>
                  <ArrowUpRight className="w-3 h-3 text-slate-600 group-hover:text-accent-light transition-colors opacity-0 group-hover:opacity-100" />
                </Link>
              </li>
            ))}
            <li>
              <Link href="/industries" className="hover:text-white text-slate-500 transition-colors italic">
                View All Industries...
              </Link>
            </li>
          </ul>
        </div>

        {/* Column 4: Contact & Locations */}
        <div className="space-y-4">
          <h4 className="text-xs font-mono uppercase tracking-widest text-slate-300 font-semibold">
            Global Office
          </h4>
          <div className="text-xs space-y-3">
            <div className="flex items-start gap-2">
              <MapPin className="w-4 h-4 text-accent-light shrink-0 mt-0.5" />
              <span>
                <strong>USA HQ:</strong><br />
                GTS Engineering USA Inc.<br />
                Plano, Texas, USA
              </span>
            </div>
            <div className="flex items-center gap-2">
              <Mail className="w-4 h-4 text-accent-light shrink-0" />
              <a href="mailto:info@gtsusainc.com" className="hover:text-white transition-colors">
                info@gtsusainc.com
              </a>
            </div>
            <div className="flex items-center gap-2">
              <Phone className="w-4 h-4 text-accent-light shrink-0" />
              <span className="text-slate-500">Global Delivery Hubs: USA | India</span>
            </div>
          </div>
        </div>

      </div>

      {/* Bottom Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 border-t border-slate-900 mt-16 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4 text-[11px] text-slate-600">
        <div>
          &copy; {currentYear} GTS Engineering USA Incorporated. All rights reserved.
        </div>
        <div className="flex items-center gap-6">
          <Link href="/about" className="hover:text-slate-400 transition-colors">About Us</Link>
          <Link href="/infrastructure" className="hover:text-slate-400 transition-colors">Infrastructure</Link>
          <Link href="/contact" className="hover:text-slate-400 transition-colors">Contact Us</Link>
        </div>
      </div>
    </footer>
  );
}
export { Footer };
