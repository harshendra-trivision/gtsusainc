'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import {
  Boxes,
  ChevronDown,
  Cpu,
  Database,
  Factory,
  Flame,
  HardHat,
  HeartPulse,
  Landmark,
  Menu,
  Mountain,
  Route,
  ShieldCheck,
  Ship,
  Truck,
  UtensilsCrossed,
  Wrench,
  Zap,
  type LucideIcon
} from 'lucide-react';
import MobileMenu from '../MobileMenu';
import { primaryNavigation } from '../navigation';
import { GradientButton, cn } from '@/components/ui';
import type { MegaMenuIconName } from '@/constants/megaMenu';
import { useBodyScrollLock } from '@/hooks/useBodyScrollLock';

const megaMenuIcons: Record<MegaMenuIconName, LucideIcon> = {
  Wrench,
  ShieldCheck,
  HardHat,
  Boxes,
  Flame,
  Zap,
  Database,
  Cpu,
  Factory,
  Route,
  Mountain,
  HeartPulse,
  UtensilsCrossed,
  Ship,
  Landmark,
  Truck
};

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [isHeaderVisible, setIsHeaderVisible] = useState(true);
  const [isScrolled, setIsScrolled] = useState(false);
  const lastScrollY = useRef(0);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname();
  const shouldReduceMotion = useReducedMotion();

  useBodyScrollLock(activeDropdown !== null);

  const isActiveItem = (href: string) => {
    if (href === '/') return pathname === '/';
    if (href.includes('#')) return false;
    return pathname === href || pathname.startsWith(`${href}/`);
  };

  useEffect(() => {
    if (!activeDropdown) return;

    const handlePointerDown = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setActiveDropdown(null);
      }
    };

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setActiveDropdown(null);
      }
    };

    document.addEventListener('mousedown', handlePointerDown);
    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('mousedown', handlePointerDown);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [activeDropdown]);

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
            {/* <span className="hidden sm:block">
              <span className="block font-display text-lg font-extrabold leading-tight tracking-tight text-white">
                GTS Engineering
              </span>
            </span> */}
          </Link>

          <div className="flex items-center gap-4 lg:gap-6">
            <div ref={dropdownRef} className="relative hidden lg:block" onMouseLeave={() => setActiveDropdown(null)}>
              <nav className="flex items-center gap-1">
                {primaryNavigation.map((item) => {
                  const hasSubmenu = Boolean(item.submenu?.length);
                  const hasMegaMenu = Boolean(item.megaMenu?.length);
                  const hasDropdown = hasSubmenu || hasMegaMenu;
                  const isActive = isActiveItem(item.href);

                  return (
                    <div
                      key={item.label}
                      className="relative"
                      onMouseEnter={() => setActiveDropdown(hasDropdown ? item.label : null)}
                      onFocus={() => setActiveDropdown(hasDropdown ? item.label : null)}
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
                        {hasDropdown && (
                          <ChevronDown
                            className={cn(
                              'relative z-10 h-3.5 w-3.5 transition-transform group-hover:rotate-180',
                              activeDropdown === item.label && 'rotate-180'
                            )}
                          />
                        )}
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

              <AnimatePresence>
                {(() => {
                  const activeMegaItem = primaryNavigation.find(
                    (item) => item.megaMenu?.length && item.label === activeDropdown
                  );
                  if (!activeMegaItem?.megaMenu) return null;

                  return (
                    <motion.div
                      key={activeMegaItem.label}
                      initial={shouldReduceMotion ? false : { opacity: 0, y: 12, scale: 0.98 }}
                      animate={shouldReduceMotion ? undefined : { opacity: 1, y: 0, scale: 1 }}
                      exit={shouldReduceMotion ? undefined : { opacity: 0, y: 10, scale: 0.98 }}
                      transition={{ duration: 0.2, ease: 'easeOut' }}
                      style={{ x: '-50%' }}
                      className="absolute left-1/2 top-full z-50 w-[min(96vw,1180px)] max-w-[calc(100vw-2rem)] pt-4"
                    >
                      <div className="overflow-hidden rounded-3xl border border-white/12 bg-slate-950/85 shadow-[0_30px_90px_rgba(2,6,23,0.5)] ring-1 ring-cyan-200/10 backdrop-blur-2xl">
                        <div className="grid grid-cols-1 gap-x-6 gap-y-8 p-6 sm:grid-cols-2 lg:grid-cols-4 lg:p-8">
                          {activeMegaItem.megaMenu.map((category) => {
                            const CategoryIcon = megaMenuIcons[category.icon];
                            const linkTo = activeMegaItem.megaMenuLinkTo;
                            const categoryHref = linkTo ? `${linkTo}#${category.slug}` : undefined;

                            return (
                              <div key={category.slug} className="flex flex-col">
                                {categoryHref ? (
                                  <Link
                                    href={categoryHref}
                                    onClick={() => setActiveDropdown(null)}
                                    className="group/cat mb-4 flex items-start gap-3 rounded-2xl border border-white/10 bg-white/[0.05] p-3 transition-colors hover:border-cyan-200/30 hover:bg-white/10"
                                  >
                                    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl border border-cyan-200/20 bg-cyan-400/10 text-cyan-200">
                                      <CategoryIcon className="h-[18px] w-[18px]" />
                                    </span>
                                    <span>
                                      <span className="block text-[13px] font-bold leading-tight text-white transition-colors group-hover/cat:text-cyan-200">
                                        {category.label}
                                      </span>
                                      {category.tagline && (
                                        <span className="mt-1 block text-[10px] font-medium italic text-cyan-200/70">
                                          {category.tagline}
                                        </span>
                                      )}
                                    </span>
                                  </Link>
                                ) : (
                                  <div className="mb-4 flex items-start gap-3 rounded-2xl border border-white/10 bg-white/[0.05] p-3">
                                    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl border border-cyan-200/20 bg-cyan-400/10 text-cyan-200">
                                      <CategoryIcon className="h-[18px] w-[18px]" />
                                    </span>
                                    <span>
                                      <span className="block text-[13px] font-bold leading-tight text-white">
                                        {category.label}
                                      </span>
                                      {category.tagline && (
                                        <span className="mt-1 block text-[10px] font-medium italic text-cyan-200/70">
                                          {category.tagline}
                                        </span>
                                      )}
                                    </span>
                                  </div>
                                )}

                                <div className={cn('space-y-4', category.groups.length > 0 && 'max-h-[52vh] overflow-y-auto overscroll-contain pr-1')}>
                                  {category.groups.map((group, groupIdx) => (
                                    <div key={group.heading ?? groupIdx}>
                                      {group.heading && (
                                        <div className="mb-1.5 text-[10px] font-mono font-semibold uppercase tracking-[0.14em] text-slate-500">
                                          {group.heading}
                                        </div>
                                      )}
                                      <ul className="space-y-0.5">
                                        {group.items.map((label) =>
                                          categoryHref ? (
                                            <li key={label}>
                                              <Link
                                                href={categoryHref}
                                                onClick={() => setActiveDropdown(null)}
                                                className="block rounded-lg px-2 py-1 text-[12px] leading-snug text-slate-300 transition-colors hover:bg-white/10 hover:text-cyan-200"
                                              >
                                                {label}
                                              </Link>
                                            </li>
                                          ) : (
                                            <li
                                              key={label}
                                              className="flex items-start gap-1.5 rounded-lg px-2 py-1 text-[12px] leading-snug text-slate-300"
                                            >
                                              <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-cyan-300/50" />
                                              <span>{label}</span>
                                            </li>
                                          )
                                        )}
                                      </ul>
                                    </div>
                                  ))}
                                </div>
                              </div>
                            );
                          })}
                        </div>

                        <div className="flex items-center justify-between border-t border-white/10 bg-white/[0.04] px-6 py-4 lg:px-8">
                          <p className="text-[11px] text-slate-400">
                            {activeMegaItem.megaMenu.length} {activeMegaItem.label.toLowerCase()} categories
                          </p>
                          {activeMegaItem.megaMenuLinkTo && (
                            <Link
                              href={activeMegaItem.megaMenuLinkTo}
                              onClick={() => setActiveDropdown(null)}
                              className="group/all inline-flex items-center gap-1.5 rounded-full border border-cyan-200/20 bg-cyan-400/10 px-4 py-2 text-xs font-semibold text-cyan-200 transition-colors hover:bg-cyan-400/20"
                            >
                              View all {activeMegaItem.label.toLowerCase()}
                              <ChevronDown className="h-3.5 w-3.5 -rotate-90 transition-transform group-hover/all:translate-x-1" />
                            </Link>
                          )}
                        </div>
                      </div>
                    </motion.div>
                  );
                })()}
              </AnimatePresence>
            </div>

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
