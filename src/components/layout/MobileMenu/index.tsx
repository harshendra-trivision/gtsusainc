'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { X, ChevronDown, Cpu, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { services } from '@/constants/services';
import { industries } from '@/constants/industries';
import { IconMapper } from '../Navbar';

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  const pathname = usePathname();
  const [expandedSection, setExpandedSection] = useState<'services' | 'industries' | null>(null);

  const isActive = (path: string) => pathname === path;
  const isSubRoute = (parentPath: string) => pathname.startsWith(parentPath);

  const toggleSection = (section: 'services' | 'industries') => {
    setExpandedSection(expandedSection === section ? null : section);
  };

  const handleLinkClick = () => {
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop blur overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 z-50 bg-slate-950/40 backdrop-blur-sm lg:hidden"
          />

          {/* Drawer container */}
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed bottom-0 right-0 top-0 z-50 flex h-full w-full max-w-xs flex-col bg-white shadow-2xl lg:hidden border-l border-slate-100"
          >
            {/* Drawer Header */}
            <div className="flex items-center justify-between border-b border-slate-100 px-5 py-4">
              <span className="text-base font-bold font-display tracking-tight text-primary">
                GTS Engineering
              </span>
              <button
                onClick={onClose}
                className="p-1.5 rounded-full hover:bg-slate-100 text-slate-500 transition-colors focus:outline-none"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Navigation items list */}
            <div className="flex-1 overflow-y-auto px-4 py-6 font-medium text-slate-800 space-y-2">
              {/* Home */}
              <Link
                href="/"
                onClick={handleLinkClick}
                className={`flex items-center justify-between px-3 py-3 rounded-lg hover:bg-slate-50 transition-colors ${
                  isActive('/') ? 'bg-slate-50 text-accent font-semibold' : ''
                }`}
              >
                <span>Home</span>
                <ChevronRight className="w-4 h-4 text-slate-400" />
              </Link>

              {/* Services Accordion */}
              <div>
                <button
                  onClick={() => toggleSection('services')}
                  className={`flex w-full items-center justify-between px-3 py-3 rounded-lg hover:bg-slate-50 transition-colors focus:outline-none ${
                    isSubRoute('/services') ? 'text-accent font-semibold' : ''
                  }`}
                >
                  <span>Services</span>
                  <ChevronDown
                    className={`w-4 h-4 text-slate-400 transition-transform duration-200 ${
                      expandedSection === 'services' ? 'rotate-180 text-accent' : ''
                    }`}
                  />
                </button>

                <AnimatePresence>
                  {expandedSection === 'services' && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="overflow-hidden bg-slate-50 rounded-lg mt-1 px-2 space-y-1"
                    >
                      {services.map((svc) => (
                        <Link
                          key={svc.slug}
                          href={`/services/${svc.slug}`}
                          onClick={handleLinkClick}
                          className={`flex items-center gap-2.5 px-3 py-2.5 rounded-md text-xs hover:bg-slate-100 transition-colors ${
                            isActive(`/services/${svc.slug}`) ? 'text-accent font-semibold bg-white shadow-sm' : 'text-slate-600'
                          }`}
                        >
                          <IconMapper name={svc.iconName} className="w-4 h-4 text-slate-500" />
                          <span>{svc.title}</span>
                        </Link>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Industries Accordion */}
              <div>
                <button
                  onClick={() => toggleSection('industries')}
                  className={`flex w-full items-center justify-between px-3 py-3 rounded-lg hover:bg-slate-50 transition-colors focus:outline-none ${
                    isSubRoute('/industries') ? 'text-accent font-semibold' : ''
                  }`}
                >
                  <span>Industries</span>
                  <ChevronDown
                    className={`w-4 h-4 text-slate-400 transition-transform duration-200 ${
                      expandedSection === 'industries' ? 'rotate-180 text-accent' : ''
                    }`}
                  />
                </button>

                <AnimatePresence>
                  {expandedSection === 'industries' && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="overflow-hidden bg-slate-50 rounded-lg mt-1 px-2 space-y-1"
                    >
                      {industries.map((ind) => (
                        <Link
                          key={ind.slug}
                          href={`/industries/${ind.slug}`}
                          onClick={handleLinkClick}
                          className={`flex items-center gap-2.5 px-3 py-2.5 rounded-md text-xs hover:bg-slate-100 transition-colors ${
                            isActive(`/industries/${ind.slug}`) ? 'text-accent font-semibold bg-white shadow-sm' : 'text-slate-600'
                          }`}
                        >
                          <IconMapper name={ind.iconName} className="w-4 h-4 text-slate-500" />
                          <span>{ind.title.replace('Energy – ', '')}</span>
                        </Link>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Case Studies */}
              <Link
                href="/case-studies"
                onClick={handleLinkClick}
                className={`flex items-center justify-between px-3 py-3 rounded-lg hover:bg-slate-50 transition-colors ${
                  isActive('/case-studies') ? 'bg-slate-50 text-accent font-semibold' : ''
                }`}
              >
                <span>Case Studies</span>
                <ChevronRight className="w-4 h-4 text-slate-400" />
              </Link>

              {/* Infrastructure */}
              <Link
                href="/infrastructure"
                onClick={handleLinkClick}
                className={`flex items-center justify-between px-3 py-3 rounded-lg hover:bg-slate-50 transition-colors ${
                  isActive('/infrastructure') ? 'bg-slate-50 text-accent font-semibold' : ''
                }`}
              >
                <span>Infrastructure</span>
                <ChevronRight className="w-4 h-4 text-slate-400" />
              </Link>

              {/* About */}
              <Link
                href="/about"
                onClick={handleLinkClick}
                className={`flex items-center justify-between px-3 py-3 rounded-lg hover:bg-slate-50 transition-colors ${
                  isActive('/about') ? 'bg-slate-50 text-accent font-semibold' : ''
                }`}
              >
                <span>About</span>
                <ChevronRight className="w-4 h-4 text-slate-400" />
              </Link>
            </div>

            {/* Bottom Contact CTA */}
            <div className="border-t border-slate-100 p-5 bg-slate-50">
              <Link
                href="/contact"
                onClick={handleLinkClick}
                className="flex w-full items-center justify-center rounded-lg bg-primary py-3 text-center text-sm font-semibold text-white hover:bg-accent transition-colors"
              >
                Contact Us
              </Link>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
export { MobileMenu };
