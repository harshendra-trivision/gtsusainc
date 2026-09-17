'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import {
  Activity,
  Award,
  BadgeCheck,
  BarChart3,
  BookMarked,
  BookOpen,
  Boxes,
  Bot,
  Brain,
  BrainCircuit,
  Briefcase,
  Building2,
  ChevronDown,
  ClipboardCheck,
  Cog,
  Compass,
  Cpu,
  Database,
  Eye,
  Factory,
  FileSearch,
  FileText,
  Flame,
  FlaskConical,
  FolderOpen,
  Gauge,
  Globe,
  GraduationCap,
  HardHat,
  Handshake,
  Heart,
  HeartHandshake,
  HeartPulse,
  HelpCircle,
  History,
  Landmark,
  Layers,
  Library,
  Lightbulb,
  ListChecks,
  Map,
  MapPin,
  Megaphone,
  Menu,
  MessageSquare,
  Mountain,
  Newspaper,
  PenTool,
  PlayCircle,
  RefreshCw,
  Rocket,
  Route,
  ShieldCheck,
  Ship,
  Sparkles,
  Star,
  Tag,
  Target,
  TestTube,
  TrendingUp,
  Truck,
  UtensilsCrossed,
  Users,
  Wand2,
  Workflow,
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
  Truck,
  Handshake,
  Brain,
  Cog,
  Bot,
  FileSearch,
  BookOpen,
  Layers,
  BarChart3,
  FlaskConical,
  Sparkles,
  TestTube,
  Megaphone,
  Building2,
  BrainCircuit,
  Map,
  Workflow,
  GraduationCap,
  Lightbulb,
  PlayCircle,
  TrendingUp,
  Eye,
  Wand2,
  Rocket,
  Star,
  Tag,
  FileText,
  Briefcase,
  Newspaper,
  PenTool,
  RefreshCw,
  BookMarked,
  BadgeCheck,
  Library,
  FolderOpen,
  Compass,
  Globe,
  ListChecks,
  Gauge,
  ClipboardCheck,
  Users,
  Activity,
  Award,
  Target,
  Heart,
  History,
  MapPin,
  HeartHandshake,
  MessageSquare,
  HelpCircle
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
          "fixed inset-x-0 top-0 z-[80] w-full border-b transition-all duration-500 ease-in-out",
          isScrolled
            ? "border-slate-200/80 bg-white/95 backdrop-blur-md shadow-[0_4px_25px_rgba(15,23,42,0.08)]"
            : "border-transparent bg-transparent backdrop-blur-none shadow-none"
        )}
      >
        <div
          className={cn(
            "pointer-events-none absolute inset-0 bg-gradient-to-b from-white/95 via-slate-50/90 to-white/95 transition-opacity duration-500 ease-in-out",
            isScrolled ? "opacity-100" : "opacity-0"
          )}
        />
        <div
          className={cn(
            "pointer-events-none absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-blue-500/25 to-transparent transition-opacity duration-500 ease-in-out",
            isScrolled ? "opacity-100" : "opacity-0"
          )}
        />

        <div className="relative flex items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
          <Link
            href="/"
            className="group relative flex items-center gap-3 rounded-2xl focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
          >
            <Image
              src="/icons/logo transparent.png"
              alt="GTS Logo"
              width={300}
              height={300}
              className={cn(
                "h-20 sm:h-22 w-auto object-contain transition-all duration-300 group-hover:scale-105",
                isScrolled
                  ? "drop-shadow-none"
                  : "drop-shadow-[0_0_1px_rgba(255,255,255,0.95)] drop-shadow-[0_0_8px_rgba(255,255,255,0.65)]"
              )}
              priority
            />
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
                          'group relative isolate flex items-center gap-1.5 whitespace-nowrap rounded-full px-3.5 py-2 text-sm font-semibold transition-colors duration-200',
                          isScrolled
                            ? 'text-slate-700 hover:bg-slate-100 hover:text-blue-600'
                            : 'text-slate-100 hover:bg-white/10 hover:text-white',
                          'after:absolute after:inset-x-3.5 after:-bottom-1 after:h-0.5 after:origin-left after:scale-x-0 after:rounded-full after:bg-gradient-to-r after:from-blue-600 after:to-cyan-500 after:transition-transform after:duration-300 hover:after:scale-x-100',
                          isActive && (isScrolled ? 'text-blue-600 font-bold' : 'text-white font-bold')
                        )}
                      >
                        {isActive && (
                          <motion.span
                            layoutId="header-active-pill"
                            className={cn(
                              "absolute inset-0 -z-10 rounded-full",
                              isScrolled
                                ? "border border-blue-200/80 bg-blue-50/80 shadow-[0_2px_8px_rgba(37,99,235,0.08)]"
                                : "border border-white/20 bg-white/15 shadow-[0_0_24px_rgba(34,211,238,0.25)]"
                            )}
                            transition={{ type: 'spring', stiffness: 420, damping: 34 }}
                          />
                        )}
                        <span className="relative z-10">{item.label}</span>
                        {hasDropdown && (
                          <ChevronDown
                            className={cn(
                              'relative z-10 h-3.5 w-3.5 transition-transform group-hover:rotate-180',
                              isScrolled
                                ? 'text-slate-400 group-hover:text-blue-600'
                                : 'text-slate-300 group-hover:text-white',
                              activeDropdown === item.label && (isScrolled ? 'rotate-180 text-blue-600' : 'rotate-180 text-cyan-200')
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
                            <div className="overflow-hidden rounded-3xl border border-slate-200/90 bg-white/95 p-2 shadow-[0_25px_60px_rgba(15,23,42,0.15)] ring-1 ring-slate-900/5 backdrop-blur-2xl">
                              <div className="rounded-2xl border border-blue-100 bg-blue-50/60 px-4 py-3 text-[11px] font-mono font-bold uppercase tracking-[0.22em] text-blue-600">
                                {item.label}
                              </div>
                              <div className="mt-2 space-y-1">
                                {item.submenu.map((subItem) => (
                                  <Link
                                    key={subItem.href}
                                    href={subItem.href}
                                    className="group/item flex items-center justify-between rounded-2xl px-4 py-3 text-sm font-semibold text-slate-700 transition-all hover:bg-blue-50/80 hover:text-blue-600"
                                  >
                                    <span>{subItem.label}</span>
                                    <span className="text-slate-400 transition-transform group-hover/item:translate-x-1 group-hover/item:text-blue-600">→</span>
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
                      <div className="overflow-hidden rounded-3xl border border-slate-200/90 bg-white/95 shadow-[0_30px_90px_rgba(15,23,42,0.18)] ring-1 ring-slate-900/5 backdrop-blur-2xl">
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
                                    className="group/cat mb-4 flex items-start gap-3 rounded-2xl border border-slate-200/70 bg-slate-50/80 p-3 transition-colors hover:border-blue-300 hover:bg-blue-50/60"
                                  >
                                    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl border border-blue-200/60 bg-blue-50 text-blue-600">
                                      <CategoryIcon className="h-[18px] w-[18px]" />
                                    </span>
                                    <span>
                                      <span className="block text-[13px] font-bold leading-tight text-slate-900 transition-colors group-hover/cat:text-blue-600">
                                        {category.label}
                                      </span>
                                      {category.tagline && (
                                        <span className="mt-1 block text-[10px] font-medium italic text-slate-500">
                                          {category.tagline}
                                        </span>
                                      )}
                                    </span>
                                  </Link>
                                ) : (
                                  <div className="mb-4 flex items-start gap-3 rounded-2xl border border-slate-200/70 bg-slate-50/80 p-3">
                                    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl border border-blue-200/60 bg-blue-50 text-blue-600">
                                      <CategoryIcon className="h-[18px] w-[18px]" />
                                    </span>
                                    <span>
                                      <span className="block text-[13px] font-bold leading-tight text-slate-900">
                                        {category.label}
                                      </span>
                                      {category.tagline && (
                                        <span className="mt-1 block text-[10px] font-medium italic text-slate-500">
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
                                        <div className="mb-1.5 text-[10px] font-mono font-semibold uppercase tracking-[0.14em] text-slate-400">
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
                                                className="block rounded-lg px-2 py-1 text-[12px] leading-snug text-slate-600 transition-colors hover:bg-blue-50 hover:text-blue-600"
                                              >
                                                {label}
                                              </Link>
                                            </li>
                                          ) : (
                                            <li
                                              key={label}
                                              className="flex items-start gap-1.5 rounded-lg px-2 py-1 text-[12px] leading-snug text-slate-600"
                                            >
                                              <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-blue-500/60" />
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

                        <div className="flex items-center justify-between border-t border-slate-100 bg-slate-50/60 px-6 py-4 lg:px-8">
                          <p className="text-[11px] text-slate-500">
                            {activeMegaItem.megaMenu.length} {activeMegaItem.label.toLowerCase()} categories
                          </p>
                          {activeMegaItem.megaMenuLinkTo && (
                            <Link
                              href={activeMegaItem.megaMenuLinkTo}
                              onClick={() => setActiveDropdown(null)}
                              className="group/all inline-flex items-center gap-1.5 rounded-full border border-blue-200 bg-blue-50 px-4 py-2 text-xs font-semibold text-blue-600 transition-colors hover:bg-blue-100"
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
              className={cn(
                "flex h-11 w-11 items-center justify-center rounded-xl shadow-sm transition-colors lg:hidden",
                isScrolled
                  ? "border border-slate-200/80 bg-slate-50 text-slate-700 hover:border-blue-300 hover:bg-blue-50 hover:text-blue-600"
                  : "border border-white/20 bg-white/10 text-white hover:bg-white/20 hover:text-cyan-200"
              )}
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
