'use client';

import Link from 'next/link';
import { ArrowUpRight, Mail, MapPin, Phone, ShieldCheck } from 'lucide-react';
import { services } from '@/constants/services';
import { industries } from '@/constants/industries';
import { BackgroundGrid, GradientButton } from '@/components/ui';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative overflow-hidden border-t border-slate-800 bg-slate-950 text-slate-400">
      <BackgroundGrid variant="fine" className="opacity-45" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_0%,rgba(37,99,235,0.18),transparent_32%),linear-gradient(180deg,rgba(2,6,23,0.4),#020617_78%)]" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <Link href="/" className="group inline-flex flex-col">
              <span className="font-display text-2xl font-extrabold tracking-tight text-white transition-colors group-hover:text-cyan-200">
                GTS Engineering
              </span>
              <span className="mt-1 text-[10px] font-mono uppercase tracking-[0.28em] text-cyan-200">
                USA Incorporated
              </span>
            </Link>
            <p className="mt-6 max-w-sm text-sm leading-7 text-slate-400">
              AI-enabled engineering, automation, digital transformation, and project execution support for global industrial assets.
            </p>
            <div className="mt-6 flex items-center gap-2 rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-xs font-mono uppercase tracking-wider text-slate-300">
              <ShieldCheck className="h-4 w-4 text-cyan-200" />
              Quality Systems · Secure Delivery
            </div>
            <div className="mt-8">
              <GradientButton href="/contact">Schedule Consultation</GradientButton>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-10 sm:grid-cols-3 lg:col-span-8">
            <div>
              <h4 className="text-xs font-mono font-semibold uppercase tracking-[0.24em] text-slate-200">Solutions</h4>
              <ul className="mt-5 space-y-3 text-sm">
                {services.map((svc) => (
                  <li key={svc.slug}>
                    <Link href={svc.href || `/services/${svc.slug}`} className="group inline-flex items-center gap-2 transition-colors hover:text-white">
                      <span>{svc.title}</span>
                      <ArrowUpRight className="h-3.5 w-3.5 opacity-0 transition-opacity group-hover:opacity-100" />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-xs font-mono font-semibold uppercase tracking-[0.24em] text-slate-200">Industries</h4>
              <ul className="mt-5 space-y-3 text-sm">
                {industries.slice(0, 7).map((ind) => (
                  <li key={ind.slug}>
                    <Link href={`/industries/${ind.slug}`} className="group inline-flex items-center gap-2 transition-colors hover:text-white">
                      <span>{ind.title.replace('Energy – ', '')}</span>
                      <ArrowUpRight className="h-3.5 w-3.5 opacity-0 transition-opacity group-hover:opacity-100" />
                    </Link>
                  </li>
                ))}
                <li>
                  <Link href="/industries" className="text-cyan-200 transition-colors hover:text-white">
                    View all industries
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-xs font-mono font-semibold uppercase tracking-[0.24em] text-slate-200">Global Office</h4>
              <div className="mt-5 space-y-4 text-sm leading-6">
                <div className="flex items-start gap-3">
                  <MapPin className="mt-1 h-4 w-4 shrink-0 text-cyan-200" />
                  <span>
                    <strong className="text-white">USA HQ</strong>
                    <br />
                    GTS Engineering USA Inc.
                    <br />
                    Plano, Texas, USA
                  </span>
                </div>
                <a href="mailto:info@gtsusainc.com" className="flex items-center gap-3 transition-colors hover:text-white">
                  <Mail className="h-4 w-4 text-cyan-200" />
                  info@gtsusainc.com
                </a>
                <div className="flex items-center gap-3">
                  <Phone className="h-4 w-4 text-cyan-200" />
                  <span>Global Delivery Hubs: USA | India</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-4 border-t border-white/10 pt-8 text-xs text-slate-500 sm:flex-row sm:items-center sm:justify-between">
          <div>&copy; {currentYear} GTS Engineering USA Incorporated. All rights reserved.</div>
          <div className="flex flex-wrap gap-5">
            <Link href="/about" className="transition-colors hover:text-slate-300">About</Link>
            <Link href="/case-studies" className="transition-colors hover:text-slate-300">Projects</Link>
            <Link href="/downloads" className="transition-colors hover:text-slate-300">Downloads</Link>
            <Link href="/contact" className="transition-colors hover:text-slate-300">Contact</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
export { Footer };
