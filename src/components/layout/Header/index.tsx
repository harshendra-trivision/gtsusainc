'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Menu, Search, ChevronDown } from 'lucide-react';
import MobileMenu from '../MobileMenu';
import Image from 'next/image';
import { usePathname } from 'next/navigation';

const utilityNav = [
  { label: 'Home', href: '/' },
  { label: 'Why Us', href: '/menu/about-us/who-we-are' },
  { label: 'Careers', href: '/menu/careers/hr-values' },
  { label: 'Downloads', href: '/downloads' }
];

const primaryNav = [
  {
    label: 'About Us',
    slug: 'about-us',
    submenu: ['Who We Are', 'Our Team', 'Vision & Mission', 'Quality', 'The GTS Engineering Advantage']
  },
  {
    label: 'Service Offerings',
    slug: 'service-offerings',
    submenu: [
      'Product Engineering',
      'Plant & Process Engineering',
      'PLM & Software Engineering',
      'Geoinformatics Engineering',
      'Project Management & Controls',
      'Project Engineering',
      'Document Engineering'
    ]
  },
  {
    label: 'Industries',
    slug: 'industries',
    submenu: [
      'Energy – Oil & Gas and Power',
      'Heavy Engineering & Machinery',
      'Railways',
      'Marine',
      'Consumer',
      'Medical Devices',
      'Telecom',
      'Utilities',
      'Aerospace',
      'Automotive'
    ]
  },
  {
    label: 'Technology & Sourcing',
    slug: 'technology-sourcing',
    submenu: ['Technology Representation', 'Sourcing solutions', 'Procurement Services', 'Contract Manufacturing']
  },
  {
    label: 'Delivery Enablers',
    slug: 'delivery-enablers',
    submenu: [
      'Technology & Competencies',
      'Global Engagement Models',
      'Collaborative Communication',
      'Quality Management System',
      'HR Values',
      'Infrastructure'
    ]
  },
  {
    label: 'Careers',
    slug: 'careers',
    submenu: ['HR Values', 'Life @ GTS Engineering', 'Why Join Us', 'Employment Opportunities']
  },
  { label: 'Contact Us', slug: 'contact-us', submenu: [] }
];

const toSlug = (value: string) =>
  value
    .toLowerCase()
    .replace(/&/g, 'and')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  return (
    <>
      <header className="z-40 w-full border-b border-slate-200/80 bg-gradient-to-b from-[#f8fbff] via-[#f2f7fd] to-[#eef4fb] shadow-[0_8px_30px_rgba(0,86,164,0.08)]">
        <div className="mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-8 py-5">
          <div className="relative flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
            <Link href="/" className="self-center rounded-xl bg-white/70 p-2 shadow-sm ring-1 ring-[#0056a4]/10 backdrop-blur-sm transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md hover:ring-[#0056a4]/25 lg:self-start">
              <Image src="/image/gts-logo.png" alt="GTS Logo" width={110} height={110} className="h-20 w-auto" priority />
            </Link>

            <div className="w-full lg:w-auto">
              <div className="flex flex-wrap items-center justify-center gap-2.5 lg:justify-end">
                <div className="hidden items-center overflow-hidden rounded-md border border-[#0056a4]/20 bg-[#0056a4] text-[11px] font-semibold uppercase tracking-wide text-white shadow-sm sm:flex">
                  {utilityNav.map((item, index) => (
                    <React.Fragment key={item.label}>
                      <Link href={item.href} className="px-3.5 py-2 transition-all duration-200 hover:bg-[#004a8e] hover:text-sky-100">
                        {item.label}
                      </Link>
                      {index < utilityNav.length - 1 && <span className="text-white/40">|</span>}
                    </React.Fragment>
                  ))}
                </div>

                <div className="hidden h-9 items-center overflow-hidden rounded-md border border-[#0056a4]/25 bg-white shadow-sm transition-all duration-200 focus-within:border-[#0056a4]/50 focus-within:shadow-md sm:flex">
                  <input
                    type="text"
                    placeholder="SEARCH"
                    className="h-full w-48 bg-transparent px-3 text-[11px] font-medium text-slate-700 placeholder:text-slate-400 outline-none"
                  />
                  <button className="h-full bg-[#0056a4] px-3 text-white transition-all duration-200 hover:bg-[#004a8e] hover:text-sky-100" aria-label="Search">
                    <Search className="h-4 w-4" />
                  </button>
                </div>
              </div>

              <div className="mt-2.5 flex flex-col items-center lg:items-end">
                <p className="bg-gradient-to-r from-[#004f97] via-[#0a66b7] to-[#003d75] bg-clip-text text-center text-2  xl font-extrabold leading-tight tracking-tight text-transparent sm:text-4xl lg:text-right">
                  Delivering Engineering Excellence & Innovation
                </p>
                <span className="mt-2 block h-[2px] w-[220px] rounded-full bg-gradient-to-r from-[#60a5fa] via-[#22d3ee] to-[#93c5fd] shadow-[0_0_12px_rgba(34,211,238,0.45)] sm:w-[340px] lg:w-[430px]" />
              </div>
            </div>

            <button
              onClick={() => setIsOpen(true)}
              className="absolute right-0 top-5 flex items-center justify-center rounded-lg border border-[#0056a4]/20 bg-white/80 p-2 text-[#0056a4] shadow-sm transition-colors hover:bg-white lg:hidden"
              aria-label="Toggle Navigation Menu"
            >
              <Menu className="h-6 w-6" />
            </button>
          </div>
        </div>

        <div className="border-t border-[#2d76b5] bg-gradient-to-r from-[#045aa9] via-[#0056a4] to-[#045aa9]">
          <div className="mx-auto hidden max-w-[1440px] px-4 sm:px-6 lg:block lg:px-8">
            <div className="flex flex-wrap">
              {primaryNav.map((item) => {
                const isActive = pathname.startsWith(`/menu/${item.slug}`);
                return (
                  <div key={item.slug} className="group relative border-r border-white/25 last:border-r-0">
                    <Link
                      href={
                        item.slug === 'about-us'
                          ? '/about'
                          : item.submenu.length
                            ? `/menu/${item.slug}/${toSlug(item.submenu[0])}`
                            : '/contact'
                      }
                      className={`relative flex items-center gap-1.5 px-5 py-4 text-[12px] font-semibold uppercase tracking-wide text-white transition-all duration-300 hover:bg-[#004a8e] hover:text-sky-100 ${isActive ? 'bg-[#004a8e]' : ''
                        }`}
                    >
                      {item.label}
                      <ChevronDown className="h-3.5 w-3.5 transition-transform duration-300 group-hover:rotate-180" />
                      <span
                        className={`absolute bottom-0 left-0 h-0.5 bg-sky-200 transition-all duration-300 ${isActive ? 'w-full' : 'w-0 group-hover:w-full'
                          }`}
                      />
                    </Link>

                    {item.submenu.length > 0 && (
                      <div className="invisible absolute left-0 top-full z-50 w-[320px] translate-y-2 rounded-2xl border border-slate-200/90 bg-white/95 p-2 opacity-0 shadow-[0_18px_40px_rgba(2,84,164,0.20)] backdrop-blur-md transition-all duration-200 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100">
                        <div className="mb-1 rounded-xl bg-gradient-to-r from-sky-50 to-blue-50 px-3 py-2 text-[11px] font-semibold uppercase tracking-wider text-[#0056a4]">
                          {item.label}
                        </div>
                        <div className="space-y-1">
                          {item.submenu.map((subItem) => (
                            <Link
                              key={`${item.slug}-${subItem}`}
                              href={`/menu/${item.slug}/${toSlug(subItem)}`}
                              className="group/item flex items-center justify-between rounded-lg px-3 py-2.5 text-sm font-medium text-slate-700 transition-all duration-200 hover:bg-gradient-to-r hover:from-sky-50 hover:to-blue-50 hover:text-[#0056a4]"
                            >
                              <span className="line-clamp-1">{subItem}</span>
                              <span className="translate-x-0 text-slate-400 transition-all duration-200 group-hover/item:translate-x-0.5 group-hover/item:text-[#0056a4]">
                                ›
                              </span>
                            </Link>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </header>

      <MobileMenu isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </>
  );
}
export { Header };
