'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Menu, Search, ChevronDown } from 'lucide-react';
import MobileMenu from '../MobileMenu';
import Image from 'next/image';
import { usePathname } from 'next/navigation';

const utilityNav = [
  { label: 'Home', href: '/' },
  { label: 'Why Us', href: '/menu/why-us/placeholder-1' },
  { label: 'Careers', href: '/careers' },
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
      <header className="z-40 w-full border-b border-slate-200 bg-[#f3f5f7]">
        <div className="mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
            <Link href="/" className="self-center lg:self-start">
              <Image src="/image/gtsLogo.png" alt="GTS Logo" width={96} height={96} className="h-20 w-auto" priority />
            </Link>

            <div className="w-full lg:w-auto">
              <div className="flex flex-wrap items-center justify-center gap-2 lg:justify-end">
                <div className="hidden items-center overflow-hidden rounded-sm bg-[#0056a4] text-[11px] font-semibold uppercase tracking-wide text-white sm:flex">
                  {utilityNav.map((item, index) => (
                    <React.Fragment key={item.label}>
                      <Link href={item.href} className="px-3 py-2 transition-colors hover:bg-[#004a8e]">
                        {item.label}
                      </Link>
                      {index < utilityNav.length - 1 && <span className="text-white/40">|</span>}
                    </React.Fragment>
                  ))}
                </div>

                <div className="hidden h-8 items-center overflow-hidden rounded-sm border border-slate-300 bg-white sm:flex">
                  <input
                    type="text"
                    placeholder="SEARCH"
                    className="h-full w-40 px-3 text-[11px] text-slate-700 outline-none"
                  />
                  <button className="h-full bg-[#0056a4] px-2.5 text-white transition-colors hover:bg-[#004a8e]" aria-label="Search">
                    <Search className="h-4 w-4" />
                  </button>
                </div>
              </div>

              <p className="mt-2 text-center text-2xl font-bold leading-tight text-[#0056a4] sm:text-3xl lg:text-right">
                Delivering Engineering Excellence & Innovation
              </p>
            </div>

            <button
              onClick={() => setIsOpen(true)}
              className="absolute right-4 top-6 flex items-center justify-center rounded-lg p-2 text-slate-600 transition-colors hover:bg-slate-100 lg:hidden"
              aria-label="Toggle Navigation Menu"
            >
              <Menu className="h-6 w-6" />
            </button>
          </div>
        </div>

        <div className="border-t border-[#2d76b5] bg-[#0056a4]">
          <div className="mx-auto hidden max-w-[1440px] px-4 sm:px-6 lg:block lg:px-8">
            <div className="flex flex-wrap">
              {primaryNav.map((item) => {
                const isActive = pathname.startsWith(`/menu/${item.slug}`);
                return (
                  <div key={item.slug} className="group relative border-r border-white/30 last:border-r-0">
                    <Link
                      href={item.submenu.length ? `/menu/${item.slug}/${toSlug(item.submenu[0])}` : '/contact'}
                      className={`flex items-center gap-1 px-5 py-4 text-[12px] font-semibold uppercase text-white transition-colors hover:bg-[#004a8e] ${isActive ? 'bg-[#004a8e]' : ''
                        }`}
                    >
                      {item.label}
                      <ChevronDown className="h-3.5 w-3.5" />
                    </Link>

                    {item.submenu.length > 0 && (
                      <div className="invisible absolute left-0 top-full z-50 min-w-[260px] border border-slate-200 bg-white opacity-0 shadow-xl transition-all duration-150 group-hover:visible group-hover:opacity-100">
                        {item.submenu.map((subItem) => (
                          <Link
                            key={`${item.slug}-${subItem}`}
                            href={`/menu/${item.slug}/${toSlug(subItem)}`}
                            className="block px-4 py-2.5 text-sm text-slate-700 transition-colors hover:bg-slate-100 hover:text-[#0056a4]"
                          >
                            {subItem}
                          </Link>
                        ))}
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
