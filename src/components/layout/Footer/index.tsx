'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import {
  ArrowRight,
  ChevronRight,
  Globe,
  Mail,
  MapPin,
  Phone,
  Users,
  Cpu,
  Layers,
  Leaf,
} from 'lucide-react';

const solutionsList = [
  { title: 'Plant Engineering', href: '/solutions/plant-process-engineering' },
  { title: 'Product Engineering', href: '/solutions/product-engineering' },
  { title: 'Structural Engineering', href: '/solutions/steel-detailing-structural-engineering' },
  { title: 'Piping Engineering', href: '/solutions/plant-process-engineering' },
  { title: 'Electrical Engineering', href: '/solutions/plant-process-engineering' },
  { title: 'Instrumentation & Controls', href: '/solutions/automation-ai-industry-4' },
  { title: 'Simulation & Analysis', href: '/solutions/simulation-digital-validation' },
  { title: 'Automation & Industry 4.0', href: '/solutions/automation-ai-industry-4' },
  { title: 'Infrastructure & BIM', href: '/infrastructure' },
  { title: 'Project & Program Support', href: '/solutions/project-engineering-advisory' },
  { title: 'Asset Lifecycle Support', href: '/solutions/digital-engineering-asset-lifecycle' },
  { title: 'Technical Documentation', href: '/solutions/technical-documentation-asset-intelligence' },
];

const industriesList = [
  { title: 'Oil & Gas', href: '/industries/energy-process-industries' },
  { title: 'Refining & Petrochemicals', href: '/industries/energy-process-industries' },
  { title: 'LNG & Gas Processing', href: '/industries/energy-process-industries' },
  { title: 'Power, Utilities & Energy Transition', href: '/industries/power-utilities-energy-transition' },
  { title: 'Manufacturing', href: '/industries/manufacturing-industrial-systems' },
  { title: 'Semiconductor & Advanced Manufacturing', href: '/industries/semiconductor-advanced-manufacturing' },
  { title: 'Data Centers & Digital Infrastructure', href: '/industries/data-centers-digital-infrastructure' },
  { title: 'Mining & Metals', href: '/industries/mining-metals' },
  { title: 'Marine & Offshore', href: '/industries/marine-offshore' },
  { title: 'Water & Wastewater', href: '/industries/infrastructure-transportation' },
  { title: 'Infrastructure & Transportation', href: '/industries/infrastructure-transportation' },
  { title: 'Automotive', href: '/industries/manufacturing-industrial-systems' },
  { title: 'Pharmaceuticals & Healthcare', href: '/industries/life-sciences-healthcare' },
];

const companyList = [
  { title: 'About Us', href: '/about' },
  { title: 'Our Approach', href: '/delivery-excellence' },
  { title: 'Leadership', href: '/about#leadership' },
  { title: 'Global Delivery Model', href: '/delivery-excellence' },
  { title: 'Quality & HSE', href: '/delivery-excellence#quality' },
  { title: 'Sustainability', href: '/about#sustainability' },
  { title: 'Careers', href: '/careers' },
  { title: 'News & Insights', href: '/insights' },
  { title: 'Projects', href: '/case-studies' },
  { title: 'Resources & Downloads', href: '/downloads' },
  { title: 'Contact', href: '/contact' },
];

const featurePills = [
  {
    icon: Users,
    title: 'People',
    subtitle: 'Expert Teams',
  },
  {
    icon: Cpu,
    title: 'Technology',
    subtitle: 'Digital by Design',
  },
  {
    icon: Layers,
    title: 'Solutions',
    subtitle: 'Across Industries',
  },
  {
    icon: Leaf,
    title: 'Global Impact',
    subtitle: 'A Sustainable Future',
  },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative overflow-hidden bg-[#02132e] text-slate-300 border-t border-blue-950/80">
      {/* Background radial gradient glow */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_15%_10%,rgba(0,112,243,0.14),transparent_40%),radial-gradient(circle_at_85%_90%,rgba(14,165,233,0.12),transparent_45%)]" />

      {/* Decorative flowing wave lines on bottom right matching the mockup */}
      <svg
        className="pointer-events-none absolute -right-16 -bottom-10 h-[360px] w-[560px] opacity-20 select-none hidden sm:block"
        viewBox="0 0 560 360"
        fill="none"
      >
        <path
          d="M 0 360 C 160 310 320 230 440 130 C 490 90 530 40 560 0"
          stroke="#0284c7"
          strokeWidth="1.2"
          strokeDasharray="4 4"
        />
        <path
          d="M 60 360 C 200 300 340 210 460 110 C 510 70 540 30 560 10"
          stroke="#0070f3"
          strokeWidth="1.5"
        />
        <path
          d="M 120 360 C 240 285 360 190 480 85 C 520 50 545 25 560 20"
          stroke="#38bdf8"
          strokeWidth="1"
        />
        <path
          d="M 180 360 C 280 270 390 170 500 50"
          stroke="#0ea5e9"
          strokeWidth="1.2"
          strokeDasharray="5 3"
        />
      </svg>

      <div className="relative z-10 mx-auto max-w-[1440px] px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-12 lg:gap-8">
          {/* ================= COLUMN 1: BRAND & PILLARS ================= */}
          <div className="md:col-span-2 lg:col-span-3 flex flex-col justify-between">
            <div>
              {/* Brand Logo & Name */}
              <Link href="/" className="group inline-flex flex-col items-start">
                <Image
                  src="/icons/logo transparent.png"
                  alt="GTS Engineering Logo"
                  width={200}
                  height={167}
                  className="h-16 sm:h-20 w-auto object-contain transition-transform duration-300 group-hover:scale-105 drop-shadow-[0_0_2px_rgba(255,255,255,0.95)] drop-shadow-[0_0_10px_rgba(255,255,255,0.45)]"
                  priority
                />
                <span className="mt-2 text-[10px] sm:text-[11px] font-mono uppercase tracking-[0.28em] text-cyan-200/90 font-semibold">
                  USA INCORPORATED
                </span>
              </Link>

              {/* Slogan */}
              <h3 className="mt-5 font-display text-base sm:text-[17px] font-bold leading-snug text-white">
                Engineering a Smarter, Cleaner and More Sustainable Tomorrow.
              </h3>

              {/* Description */}
              <p className="mt-3 text-xs sm:text-[13px] leading-relaxed text-slate-300/80 max-w-sm">
                AI-enabled engineering, automation, digital transformation, and project execution support for global industrial assets.
              </p>

              {/* 2x2 Feature Pills */}
              <div className="mt-6 grid grid-cols-2 gap-3 max-w-sm">
                {featurePills.map((pill) => {
                  const Icon = pill.icon;
                  return (
                    <div key={pill.title} className="flex items-center gap-2.5">
                      <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-cyan-400/40 bg-cyan-500/10 text-cyan-300 shadow-sm shadow-cyan-500/10">
                        <Icon className="h-4 w-4" />
                      </div>
                      <div className="min-w-0">
                        <div className="text-xs font-bold text-white leading-tight">{pill.title}</div>
                        <div className="text-[10.5px] text-slate-400 leading-tight mt-0.5">{pill.subtitle}</div>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* CTA Button */}
              <div className="mt-7">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#0060df] via-[#0070f3] to-[#0ea5e9] px-6 py-2.5 text-xs sm:text-sm font-bold text-white shadow-lg shadow-blue-600/30 transition-all duration-300 hover:scale-[1.02] hover:shadow-cyan-400/30 active:scale-[0.98]"
                >
                  Schedule Consultation
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>

              {/* Sub-slogan */}
              <div className="mt-4 text-[10.5px] font-mono font-bold uppercase tracking-[0.22em] text-cyan-400">
                LET&apos;S ENGINEER PROGRESS TOGETHER
              </div>
            </div>
          </div>

          {/* ================= COLUMN 2: SOLUTIONS ================= */}
          <div className="lg:col-span-2">
            <h4 className="text-xs font-mono font-bold uppercase tracking-[0.24em] text-cyan-400">
              SOLUTIONS
            </h4>
            <ul className="mt-5 space-y-2.5 text-xs sm:text-[13px]">
              {solutionsList.map((item) => (
                <li key={item.title}>
                  <Link
                    href={item.href}
                    className="group flex items-center justify-between text-slate-300 transition-colors hover:text-white"
                  >
                    <span className="truncate pr-2">{item.title}</span>
                    <ChevronRight className="h-3.5 w-3.5 text-slate-500 transition-all group-hover:translate-x-0.5 group-hover:text-cyan-400 shrink-0" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* ================= COLUMN 3: INDUSTRIES ================= */}
          <div className="lg:col-span-2">
            <h4 className="text-xs font-mono font-bold uppercase tracking-[0.24em] text-cyan-400">
              INDUSTRIES
            </h4>
            <ul className="mt-5 space-y-2.5 text-xs sm:text-[13px]">
              {industriesList.map((item) => (
                <li key={item.title}>
                  <Link
                    href={item.href}
                    className="group flex items-center justify-between text-slate-300 transition-colors hover:text-white"
                  >
                    <span className="truncate pr-2">{item.title}</span>
                    <ChevronRight className="h-3.5 w-3.5 text-slate-500 transition-all group-hover:translate-x-0.5 group-hover:text-cyan-400 shrink-0" />
                  </Link>
                </li>
              ))}
              <li className="pt-1.5">
                <Link
                  href="/industries"
                  className="inline-flex items-center gap-1.5 text-xs sm:text-[13px] font-semibold text-cyan-400 transition-colors hover:text-white"
                >
                  View all industries
                  <ArrowRight className="h-3.5 w-3.5" />
                </Link>
              </li>
            </ul>
          </div>

          {/* ================= COLUMN 4: COMPANY ================= */}
          <div className="lg:col-span-2">
            <h4 className="text-xs font-mono font-bold uppercase tracking-[0.24em] text-cyan-400">
              COMPANY
            </h4>
            <ul className="mt-5 space-y-2.5 text-xs sm:text-[13px]">
              {companyList.map((item) => (
                <li key={item.title}>
                  <Link
                    href={item.href}
                    className="group flex items-center justify-between text-slate-300 transition-colors hover:text-white"
                  >
                    <span className="truncate pr-2">{item.title}</span>
                    <ChevronRight className="h-3.5 w-3.5 text-slate-500 transition-all group-hover:translate-x-0.5 group-hover:text-cyan-400 shrink-0" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* ================= COLUMN 5: GLOBAL OFFICE & WORLD MAP ================= */}
          <div className="md:col-span-2 lg:col-span-3">
            <h4 className="text-xs font-mono font-bold uppercase tracking-[0.24em] text-cyan-400">
              GLOBAL OFFICE
            </h4>

            {/* Office Details */}
            <div className="mt-5 space-y-3.5 text-xs sm:text-[13px]">
              <div className="flex items-start gap-3">
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-cyan-400/40 bg-cyan-500/10 text-cyan-300 mt-0.5">
                  <MapPin className="h-4 w-4" />
                </div>
                <div className="leading-snug">
                  <strong className="text-white font-bold block">
                    GTS Engineering® USA Incorporated
                  </strong>
                  <span className="text-slate-300 text-xs">
                    10500 Valley Forge Drive, Suite 202 B,
                  </span>
                  <br />
                  <span className="text-slate-300 text-xs">
                    Houston, Texas 77042-1839, USA
                  </span>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <Phone className="h-4 w-4 text-cyan-400 shrink-0 ml-2" />
                <a
                  href="tel:+18322950545"
                  className="font-bold text-white transition-colors hover:text-cyan-300"
                >
                  +1 832 295 0545
                </a>
              </div>

              <div className="flex items-center gap-3">
                <Mail className="h-4 w-4 text-cyan-400 shrink-0 ml-2" />
                <a
                  href="mailto:info@gtsusainc.com"
                  className="text-cyan-400 transition-colors hover:text-cyan-300 font-medium"
                >
                  info@gtsusainc.com
                </a>
              </div>
            </div>

            {/* Subtle Divider */}
            <div className="my-5 h-px w-full bg-slate-800/80" />

            {/* Global Presence Header */}
            <div>
              <div className="flex items-center gap-2.5">
                <Globe className="h-5 w-5 text-cyan-400 shrink-0" />
                <div>
                  <span className="text-xs font-mono font-bold uppercase tracking-[0.22em] text-cyan-400 block">
                    GLOBAL PRESENCE
                  </span>
                  <span className="text-xs text-slate-300 font-medium">
                    USA | India | Global Delivery Hubs
                  </span>
                </div>
              </div>

              {/* Connected World Map Graphic matching the reference mockup */}
              <div className="relative mt-4 w-full overflow-hidden rounded-xl border border-blue-900/30 bg-[#010c1e]/60 p-2 backdrop-blur-xs">
                <svg
                  viewBox="0 0 480 200"
                  className="w-full h-auto select-none"
                  fill="none"
                >
                  <defs>
                    <pattern
                      id="worldDotsPattern"
                      x="0"
                      y="0"
                      width="7"
                      height="7"
                      patternUnits="userSpaceOnUse"
                    >
                      <circle cx="2" cy="2" r="0.9" fill="#0070f3" fillOpacity="0.45" />
                    </pattern>
                    <linearGradient id="mapArcGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="#0ea5e9" stopOpacity="0.85" />
                      <stop offset="50%" stopColor="#38bdf8" stopOpacity="1" />
                      <stop offset="100%" stopColor="#0070f3" stopOpacity="0.85" />
                    </linearGradient>
                  </defs>

                  {/* Continent Silhouettes with Dotted Pattern Fill */}
                  {/* North America */}
                  <path
                    d="M 50 35 C 75 25, 120 28, 140 45 C 150 55, 155 75, 140 90 C 125 105, 105 115, 110 125 C 100 120, 85 105, 75 90 C 65 80, 55 60, 50 35 Z"
                    fill="url(#worldDotsPattern)"
                    stroke="#0070f3"
                    strokeWidth="0.8"
                    strokeOpacity="0.35"
                  />
                  {/* South America */}
                  <path
                    d="M 115 130 C 135 132, 155 145, 150 165 C 145 185, 130 195, 120 185 C 110 170, 108 145, 115 130 Z"
                    fill="url(#worldDotsPattern)"
                    stroke="#0070f3"
                    strokeWidth="0.8"
                    strokeOpacity="0.3"
                  />
                  {/* Europe & North Asia */}
                  <path
                    d="M 215 35 C 245 28, 295 30, 340 45 C 370 55, 410 70, 395 90 C 375 100, 345 95, 320 85 C 295 75, 275 80, 260 70 C 245 60, 235 45, 215 35 Z"
                    fill="url(#worldDotsPattern)"
                    stroke="#0070f3"
                    strokeWidth="0.8"
                    strokeOpacity="0.35"
                  />
                  {/* Africa */}
                  <path
                    d="M 220 85 C 245 90, 265 105, 270 125 C 275 145, 260 165, 245 180 C 235 170, 225 145, 220 125 C 215 105, 218 92, 220 85 Z"
                    fill="url(#worldDotsPattern)"
                    stroke="#0070f3"
                    strokeWidth="0.8"
                    strokeOpacity="0.3"
                  />
                  {/* India Subcontinent */}
                  <path
                    d="M 320 85 C 335 85, 350 95, 355 110 C 350 125, 335 138, 330 130 C 322 120, 318 100, 320 85 Z"
                    fill="url(#worldDotsPattern)"
                    stroke="#38bdf8"
                    strokeWidth="1.2"
                    strokeOpacity="0.6"
                  />
                  {/* East Asia & Southeast Asia */}
                  <path
                    d="M 355 75 C 385 70, 420 80, 430 95 C 435 110, 415 125, 395 130 C 380 125, 365 115, 355 75 Z"
                    fill="url(#worldDotsPattern)"
                    stroke="#0070f3"
                    strokeWidth="0.8"
                    strokeOpacity="0.35"
                  />
                  {/* Australia */}
                  <path
                    d="M 390 140 C 420 138, 440 150, 435 170 C 425 185, 400 185, 390 170 C 382 155, 385 145, 390 140 Z"
                    fill="url(#worldDotsPattern)"
                    stroke="#0070f3"
                    strokeWidth="0.8"
                    strokeOpacity="0.3"
                  />

                  {/* Connecting Arcs (Glowing Flight/Data Paths) */}
                  {/* Houston to India (Great Circle Sweeping Arc) */}
                  <path
                    d="M 105 85 Q 220 10 340 110"
                    stroke="url(#mapArcGradient)"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeDasharray="4 2"
                  />
                  {/* Houston to London / Europe */}
                  <path
                    d="M 105 85 Q 165 35 235 55"
                    stroke="url(#mapArcGradient)"
                    strokeWidth="1.6"
                    strokeLinecap="round"
                  />
                  {/* Europe to India */}
                  <path
                    d="M 235 55 Q 285 50 340 110"
                    stroke="url(#mapArcGradient)"
                    strokeWidth="1.6"
                    strokeLinecap="round"
                  />
                  {/* India to Singapore / East Asia */}
                  <path
                    d="M 340 110 Q 375 90 405 100"
                    stroke="url(#mapArcGradient)"
                    strokeWidth="1.2"
                    strokeDasharray="3 2"
                  />

                  {/* Hub 1: Houston USA (HQ) */}
                  <g transform="translate(105, 85)">
                    <circle r="7" stroke="#38bdf8" strokeWidth="1" opacity="0.6" />
                    <circle r="3.5" fill="#0070f3" />
                    <circle r="1.5" fill="#ffffff" />
                  </g>

                  {/* Hub 2: Europe / London */}
                  <g transform="translate(235, 55)">
                    <circle r="6" stroke="#38bdf8" strokeWidth="1" opacity="0.5" />
                    <circle r="3" fill="#38bdf8" />
                    <circle r="1.2" fill="#ffffff" />
                  </g>

                  {/* Hub 3: India (Delivery Centers) */}
                  <g transform="translate(340, 110)">
                    <circle r="8" stroke="#38bdf8" strokeWidth="1.2" opacity="0.7" />
                    <circle r="4" fill="#0070f3" />
                    <circle r="1.8" fill="#ffffff" />
                  </g>

                  {/* Hub 4: East Asia */}
                  <g transform="translate(405, 100)">
                    <circle r="5" stroke="#38bdf8" strokeWidth="1" opacity="0.5" />
                    <circle r="2.5" fill="#38bdf8" />
                  </g>
                </svg>

                {/* Subtitle under map */}
                <div className="mt-2 text-center">
                  <div className="text-[10px] font-mono font-bold uppercase tracking-[0.24em] text-slate-400">
                    ENGINEERING FOR A CONNECTED WORLD
                  </div>
                  <div className="mx-auto mt-1 h-0.5 w-6 rounded-full bg-[#0070f3]" />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ================= BOTTOM BAR / SUB-FOOTER ================= */}
        <div className="mt-14 flex flex-col gap-4 border-t border-slate-800/80 pt-6 text-xs text-slate-400 sm:flex-row sm:items-center sm:justify-between">
          <div>
            &copy; {currentYear} GTS Engineering USA Incorporated. All rights reserved.
          </div>

          <div className="flex flex-wrap items-center gap-3 sm:gap-4">
            <Link href="/privacy-policy" className="transition-colors hover:text-slate-200">
              Privacy Policy
            </Link>
            <span className="text-slate-700">|</span>
            <Link href="/terms-of-use" className="transition-colors hover:text-slate-200">
              Terms of Use
            </Link>
            <span className="text-slate-700">|</span>
            <Link href="/sitemap" className="transition-colors hover:text-slate-200">
              Sitemap
            </Link>

            {/* LinkedIn Icon */}
            <a
              href="https://www.linkedin.com/company/gts-usa/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="text-cyan-400 transition-colors hover:text-white ml-1"
            >
              <svg className="h-4 w-4 fill-current" viewBox="0 0 24 24">
                <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
              </svg>
            </a>

            <span className="text-slate-700">|</span>

            {/* Tagline Watermark */}
            <div className="inline-flex items-center text-[10.5px] font-mono font-extrabold uppercase tracking-wider text-cyan-300">
              <span>A SMARTER TOMORROW.</span>
              <span className="ml-2 inline-block h-0.5 w-6 bg-[#0070f3]" />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export { Footer };
