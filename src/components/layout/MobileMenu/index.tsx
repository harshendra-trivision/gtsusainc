'use client';

import React, { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { X, ChevronDown, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { primaryNavigation } from '../navigation';
import { GradientButton } from '@/components/ui';

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  const pathname = usePathname();
  const [expandedSection, setExpandedSection] = useState<string | null>('Solutions');
  const onCloseRef = useRef(onClose);

  useEffect(() => {
    onCloseRef.current = onClose;
  }, [onClose]);

  useEffect(() => {
    onCloseRef.current();
  }, [pathname]);

  const isActive = (href: string) => {
    if (href === '/') return pathname === '/';
    if (href.includes('#')) return false;
    return pathname === href || pathname.startsWith(`${href}/`);
  };

  const toggleSection = (section: string) => {
    setExpandedSection(expandedSection === section ? null : section);
  };

  const handleLinkClick = () => {
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 z-[90] bg-slate-950/60 backdrop-blur-md lg:hidden"
          />

          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed bottom-0 right-0 top-0 z-[91] flex h-full w-full max-w-sm flex-col border-l border-white/10 bg-slate-950/94 text-white shadow-[0_30px_100px_rgba(2,6,23,0.7)] backdrop-blur-2xl lg:hidden"
          >
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_0%,rgba(37,99,235,0.20),transparent_35%),linear-gradient(180deg,rgba(15,23,42,0.70),rgba(2,6,23,0.96))]" />
            <div className="relative flex items-center justify-between border-b border-white/10 px-5 py-5">
              <div>
                <span className="font-display text-lg font-bold tracking-tight text-white">GTS Engineering</span>
                <span className="mt-1 block text-[10px] font-mono uppercase tracking-[0.22em] text-cyan-200">
                  Industrial Intelligence
                </span>
              </div>
              <button
                onClick={onClose}
                className="rounded-full border border-white/10 bg-white/5 p-2 text-slate-300 transition-colors hover:bg-white/10 hover:text-white focus:outline-none"
                aria-label="Close navigation menu"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            <div className="relative flex-1 space-y-2 overflow-y-auto px-4 py-6 font-medium text-slate-100">
              {primaryNavigation.map((item) => {
                const hasSubmenu = Boolean(item.submenu?.length);

                if (hasSubmenu && item.submenu) {
                  return (
                    <div key={item.label}>
                      <button
                        onClick={() => toggleSection(item.label)}
                        className={`relative flex w-full items-center justify-between rounded-xl px-3 py-3 transition-colors hover:bg-white/10 focus:outline-none ${
                          isActive(item.href) ? 'font-semibold text-cyan-200' : ''
                        }`}
                      >
                        <span>{item.label}</span>
                        <ChevronDown
                          className={`h-4 w-4 text-slate-400 transition-transform duration-200 ${
                            expandedSection === item.label ? 'rotate-180 text-accent' : ''
                          }`}
                        />
                      </button>

                      <AnimatePresence>
                        {expandedSection === item.label && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: 'auto', opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            className="mt-1 space-y-1 overflow-hidden rounded-2xl border border-white/10 bg-white/[0.04] px-2"
                          >
                            {item.submenu.map((subItem) => (
                              <Link
                                key={subItem.href}
                                href={subItem.href}
                                onClick={handleLinkClick}
                                className="flex items-center justify-between rounded-xl px-3 py-2.5 text-xs text-slate-300 transition-colors hover:bg-white/10 hover:text-cyan-200"
                              >
                                <span>{subItem.label}</span>
                                <ChevronRight className="h-3.5 w-3.5 text-slate-500" />
                              </Link>
                            ))}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  );
                }

                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={handleLinkClick}
                    className={`relative flex items-center justify-between rounded-xl px-3 py-3 transition-colors hover:bg-white/10 ${
                      isActive(item.href) ? 'bg-white/10 font-semibold text-cyan-200' : ''
                    }`}
                  >
                    {isActive(item.href) && (
                      <motion.span
                        layoutId="mobile-nav-active"
                        className="absolute inset-0 rounded-xl border border-cyan-200/15 bg-white/10"
                        transition={{ type: 'spring', stiffness: 420, damping: 34 }}
                      />
                    )}
                    <span className="relative z-10">{item.label}</span>
                    <ChevronRight className="relative z-10 h-4 w-4 text-slate-500" />
                  </Link>
                );
              })}
            </div>

            <div className="relative border-t border-white/10 bg-white/[0.03] p-5">
              <GradientButton href="/contact" className="w-full" onClick={handleLinkClick}>
                Schedule Consultation
              </GradientButton>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
export { MobileMenu };
