'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Menu } from 'lucide-react';
import { usePathname } from 'next/navigation';
import MobileMenu from '../MobileMenu';

const links = [
  { label: 'Home', href: '/' },
  { label: 'Solutions', href: '/services' },
  { label: 'Industries', href: '/industries' },
  { label: 'AI & Digital', href: '/services/ai-digital-transformation' },
  { label: 'Case Studies', href: '/case-studies' },
  { label: 'About Us', href: '/about' },
  { label: 'Careers', href: '/careers' },
  { label: 'Contact', href: '/contact' }
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  return (
    <>
      <header className="sticky top-0 z-40 border-b border-slate-800 bg-slate-950/95 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
          <Link href="/" className="flex items-center gap-3">
            <Image src="/image/gts-logo.png" alt="GTS Logo" width={54} height={54} className="h-12 w-auto" priority />
            <div className="leading-tight">
              <div className="text-sm font-bold tracking-wide text-white">GTS</div>
              <div className="text-[10px] uppercase tracking-[0.18em] text-sky-300">AI-Powered Industrial Engineering</div>
            </div>
          </Link>

          <nav className="hidden items-center gap-6 lg:flex">
            {links.map((link) => {
              const active = pathname === link.href || (link.href !== '/' && pathname.startsWith(link.href));
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`text-sm transition-colors ${active ? 'text-sky-300' : 'text-slate-200 hover:text-white'}`}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          <button
            onClick={() => setIsOpen(true)}
            className="rounded-lg border border-slate-700 bg-slate-900 p-2 text-slate-200 lg:hidden"
            aria-label="Toggle navigation"
          >
            <Menu className="h-5 w-5" />
          </button>
        </div>
      </header>

      <MobileMenu isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </>
  );
}

export { Header };
