'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import { ChevronDown, Menu, Search } from 'lucide-react';
import MobileMenu from '../MobileMenu';
import { primaryNavigation } from '../navigation';
import { GradientButton, cn } from '@/components/ui';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [isHeaderVisible, setIsHeaderVisible] = useState(true);
  const [isScrolled, setIsScrolled] = useState(false);
  const lastScrollY = useRef(0);
  const pathname = usePathname();
  const shouldReduceMotion = useReducedMotion();

  const isActiveItem = (href: string) => {
    if (href === '/') return pathname === '/';
    if (href.includes('#')) return false;
    return pathname === href || pathname.startsWith(`${href}/`);
  };

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setIsScrolled(currentScrollY > 10);

      if (currentScrollY <= 10) {
        setIsHeaderVisible(true);
      } else {
        setIsHeaderVisible(currentScrollY < lastScrollY.current);
      }

      lastScrollY.current = currentScrollY;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <motion.header
        initial={false}
        animate={{ y: isHeaderVisible || isOpen ? 0 : '-100%' }}
        transition={{ duration: 0.32, ease: [0.16, 1, 0.3, 1] }}
        className={cn(
          "fixed inset-x-0 top-0 z-[80] w-full border-b text-white transition-all duration-500 ease-in-out",
          isScrolled
            ? "border-white/10 bg-slate-950/70 backdrop-blur-md shadow-[0_18px_70px_rgba(2,6,23,0.34)]"
            : "border-transparent bg-transparent backdrop-blur-none shadow-none"
        )}
      >
        <div
          className={cn(
            "pointer-events-none absolute inset-0 transition-opacity duration-500 ease-in-out",
            isScrolled
              ? "opacity-100 bg-[radial-gradient(circle_at_12%_0%,rgba(37,99,235,0.20),transparent_34%),linear-gradient(90deg,rgba(15,23,42,0.96),rgba(15,23,42,0.78),rgba(2,6,23,0.94))]"
              : "opacity-0"
          )}
        />
        <div className={cn(
          "pointer-events-none absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-cyan-300/40 to-transparent transition-opacity duration-500 ease-in-out",
          isScrolled ? "opacity-100" : "opacity-0"
        )} />

        <div className="relative flex items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
          <Link href="/" className="flex items-center gap-3 rounded-2xl focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300">
            <span className="relative flex h-14 w-14 items-center justify-center overflow-hidden rounded-2xl border border-white/15 bg-white/95 shadow-[0_10px_28px_rgba(14,165,233,0.14)]">
              <Image src="/image/gts-logo.png" alt="GTS Logo" width={76} height={76} className="h-12 w-auto object-contain" priority />
            </span>
            <span className="hidden sm:block">
              <span className="block font-display text-lg font-extrabold leading-tight tracking-tight text-white">
                GTS Engineering
              </span>
            </span>
          </Link>

          <div className="flex items-center gap-4 lg:gap-6">
            <nav className="hidden items-center gap-1 lg:flex" onMouseLeave={() => setActiveDropdown(null)}>
              {primaryNavigation.map((item) => {
                const hasSubmenu = Boolean(item.submenu?.length);
                const isActive = isActiveItem(item.href);

                return (
                  <div
                    key={item.label}
                    className="relative"
                    onMouseEnter={() => setActiveDropdown(hasSubmenu ? item.label : null)}
                    onFocus={() => setActiveDropdown(hasSubmenu ? item.label : null)}
                  >
                    <Link
                      href={item.href}
                      className={cn(
                        'group relative isolate flex items-center gap-1.5 whitespace-nowrap rounded-full px-4 py-2 text-sm font-semibold text-slate-200 transition-colors duration-200 hover:bg-white/10 hover:text-cyan-200',
                        'after:absolute after:inset-x-4 after:-bottom-1 after:h-px after:origin-left after:scale-x-0 after:rounded-full after:bg-gradient-to-r after:from-blue-400 after:to-cyan-300 after:transition-transform after:duration-300 hover:after:scale-x-100',
                        isActive && 'text-white'
                      )}
                    >
                      {isActive && (
                        <motion.span
                          layoutId="header-active-pill"
                          className="absolute inset-0 -z-10 rounded-full border border-cyan-200/20 bg-white/10 shadow-[0_0_28px_rgba(34,211,238,0.16)]"
                          transition={{ type: 'spring', stiffness: 420, damping: 34 }}
                        />
                      )}
                      <span className="relative z-10">{item.label}</span>
                      {hasSubmenu && <ChevronDown className="relative z-10 h-3.5 w-3.5 transition-transform group-hover:rotate-180" />}
                    </Link>

                    <AnimatePresence>
                      {hasSubmenu && activeDropdown === item.label && item.submenu && (
                        <motion.div
                          initial={shouldReduceMotion ? false : { opacity: 0, y: 12, scale: 0.98 }}
                          animate={shouldReduceMotion ? undefined : { opacity: 1, y: 0, scale: 1 }}
                          exit={shouldReduceMotion ? undefined : { opacity: 0, y: 10, scale: 0.98 }}
                          transition={{ duration: 0.2, ease: 'easeOut' }}
                          style={{ x: '-50%' }}
                          className="absolute left-1/2 top-full z-50 w-[420px] max-w-[calc(100vw-2rem)] pt-4"
                        >
                          <div className="overflow-hidden rounded-3xl border border-white/12 bg-slate-950/78 p-2 shadow-[0_30px_90px_rgba(2,6,23,0.45)] ring-1 ring-cyan-200/10 backdrop-blur-2xl">
                            <div className="rounded-2xl border border-white/10 bg-white/[0.06] px-4 py-3 text-[11px] font-mono uppercase tracking-[0.22em] text-cyan-200">
                              {item.label}
                            </div>
                            <div className="mt-2 space-y-1">
                              {item.submenu.map((subItem) => (
                                <Link
                                  key={subItem.href}
                                  href={subItem.href}
                                  className="group/item flex items-center justify-between rounded-2xl px-4 py-3 text-sm font-semibold text-slate-200 transition-all hover:bg-white/10 hover:text-cyan-200"
                                >
                                  <span>{subItem.label}</span>
                                  <span className="text-slate-500 transition-transform group-hover/item:translate-x-1 group-hover/item:text-cyan-200">→</span>
                                </Link>
                              ))}
                            </div>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              })}
            </nav>

            <div className="hidden items-center gap-3 lg:flex">
              {/* <button
                className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/[0.06] text-slate-300 transition-colors hover:border-cyan-200/30 hover:bg-white/10 hover:text-cyan-200"
                aria-label="Search"
              >
                <Search className="h-4 w-4" />
              </button> */}
              <GradientButton href="/contact" className="px-4 py-2.5 text-xs">
                Consultation
              </GradientButton>
            </div>

            <button
              onClick={() => setIsOpen(true)}
              className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/[0.06] text-slate-100 shadow-sm transition-colors hover:border-cyan-200/30 hover:bg-white/10 hover:text-cyan-200 lg:hidden"
              aria-label="Open navigation menu"
            >
              <Menu className="h-6 w-6" />
            </button>
          </div>
        </div>
      </motion.header>

      <MobileMenu isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </>
  );
}
export { Header };
