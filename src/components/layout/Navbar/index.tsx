'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ChevronDown, Cpu, Settings, FileText, Map, Code, BarChart, Flame, Truck, Ship, Smartphone, Radio, Grid, Plane, Car, Train } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { services } from '@/constants/services';
import { industries } from '@/constants/industries';

// Mapper to map strings to Lucide icon components
export const IconMapper = ({ name, className = "w-5 h-5" }: { name: string; className?: string }) => {
  switch (name) {
    case 'Cpu': return <Cpu className={className} />;
    case 'Settings': return <Settings className={className} />;
    case 'FileText': return <FileText className={className} />;
    case 'Map': return <Map className={className} />;
    case 'Code': return <Code className={className} />;
    case 'BarChart': return <BarChart className={className} />;
    case 'Flame': return <Flame className={className} />;
    case 'Truck': return <Truck className={className} />;
    case 'Ship': return <Ship className={className} />;
    case 'Smartphone': return <Smartphone className={className} />;
    case 'Radio': return <Radio className={className} />;
    case 'Grid': return <Grid className={className} />;
    case 'Plane': return <Plane className={className} />;
    case 'Car': return <Car className={className} />;
    case 'Train': return <Train className={className} />;
    default: return <Settings className={className} />;
  }
};

export default function Navbar() {
  const pathname = usePathname();
  const [activeDropdown, setActiveDropdown] = useState<'services' | 'industries' | null>(null);

  const isActive = (path: string) => pathname === path;
  const isSubRoute = (parentPath: string) => pathname.startsWith(parentPath);

  return (
    <nav 
      className="hidden lg:flex items-center gap-8 font-medium text-sm text-slate-700"
      onMouseLeave={() => setActiveDropdown(null)}
    >
      {/* Home Route */}
      <Link 
        href="/" 
        className={`hover:text-accent transition-colors py-2 relative ${isActive('/') ? 'text-accent font-semibold' : ''}`}
      >
        Home
        {isActive('/') && (
          <motion.div layoutId="nav-underline" className="absolute bottom-0 left-0 right-0 h-0.5 bg-accent" />
        )}
      </Link>

      {/* Services Dropdown */}
      <div 
        className="relative py-2"
        onMouseEnter={() => setActiveDropdown('services')}
      >
        <button 
          className={`flex items-center gap-1 hover:text-accent transition-colors focus:outline-none ${isSubRoute('/services') ? 'text-accent font-semibold' : ''}`}
        >
          Services
          <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${activeDropdown === 'services' ? 'rotate-180' : ''}`} />
        </button>

        <AnimatePresence>
          {activeDropdown === 'services' && (
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 15 }}
              transition={{ duration: 0.2 }}
              className="absolute left-1/2 -translate-x-1/2 top-full pt-4 w-[640px] z-50"
            >
              <div className="bg-white border border-slate-200 rounded-xl shadow-xl p-6 grid grid-cols-2 gap-4">
                <div className="col-span-2 border-b border-slate-100 pb-3 mb-2">
                  <div className="text-xs font-mono tracking-widest text-slate-400 uppercase">GTS Service Offerings</div>
                </div>
                {services.map((svc) => (
                  <Link
                    key={svc.slug}
                    href={`/services/${svc.slug}`}
                    className="flex items-start gap-3 p-3 rounded-lg hover:bg-slate-50 transition-colors group"
                  >
                    <div className="p-2 rounded-lg bg-slate-100 text-slate-600 group-hover:bg-accent group-hover:text-white transition-colors">
                      <IconMapper name={svc.iconName} className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="font-semibold text-slate-900 text-sm group-hover:text-accent transition-colors">
                        {svc.title}
                      </div>
                      <div className="text-xs text-slate-500 line-clamp-1 mt-0.5">
                        {svc.tagline}
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Industries Dropdown */}
      <div 
        className="relative py-2"
        onMouseEnter={() => setActiveDropdown('industries')}
      >
        <button 
          className={`flex items-center gap-1 hover:text-accent transition-colors focus:outline-none ${isSubRoute('/industries') ? 'text-accent font-semibold' : ''}`}
        >
          Industries
          <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${activeDropdown === 'industries' ? 'rotate-180' : ''}`} />
        </button>

        <AnimatePresence>
          {activeDropdown === 'industries' && (
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 15 }}
              transition={{ duration: 0.2 }}
              className="absolute left-1/2 -translate-x-1/2 top-full pt-4 w-[780px] z-50"
            >
              <div className="bg-white border border-slate-200 rounded-xl shadow-xl p-6 grid grid-cols-3 gap-3">
                <div className="col-span-3 border-b border-slate-100 pb-3 mb-2">
                  <div className="text-xs font-mono tracking-widest text-slate-400 uppercase">Engineering Sectors Served</div>
                </div>
                {industries.map((ind) => (
                  <Link
                    key={ind.slug}
                    href={`/industries/${ind.slug}`}
                    className="flex items-start gap-2.5 p-2 rounded-lg hover:bg-slate-50 transition-colors group"
                  >
                    <div className="p-1.5 rounded bg-slate-100 text-slate-600 group-hover:bg-accent group-hover:text-white transition-colors mt-0.5">
                      <IconMapper name={ind.iconName} className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="font-semibold text-slate-900 text-xs group-hover:text-accent transition-colors line-clamp-1">
                        {ind.title.replace('Energy – ', '')}
                      </div>
                      <div className="text-[10px] text-slate-400 line-clamp-1 mt-0.5">
                        {ind.tagline}
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Case Studies Route */}
      <Link 
        href="/case-studies" 
        className={`hover:text-accent transition-colors py-2 relative ${isActive('/case-studies') ? 'text-accent font-semibold' : ''}`}
      >
        Case Studies
        {isActive('/case-studies') && (
          <motion.div layoutId="nav-underline" className="absolute bottom-0 left-0 right-0 h-0.5 bg-accent" />
        )}
      </Link>

      {/* Infrastructure Route */}
      <Link 
        href="/infrastructure" 
        className={`hover:text-accent transition-colors py-2 relative ${isActive('/infrastructure') ? 'text-accent font-semibold' : ''}`}
      >
        Infrastructure
        {isActive('/infrastructure') && (
          <motion.div layoutId="nav-underline" className="absolute bottom-0 left-0 right-0 h-0.5 bg-accent" />
        )}
      </Link>

      {/* About US Route */}
      <Link 
        href="/about" 
        className={`hover:text-accent transition-colors py-2 relative ${isActive('/about') ? 'text-accent font-semibold' : ''}`}
      >
        About
        {isActive('/about') && (
          <motion.div layoutId="nav-underline" className="absolute bottom-0 left-0 right-0 h-0.5 bg-accent" />
        )}
      </Link>

      {/* Contact Route */}
      <Link 
        href="/contact" 
        className="px-4 py-2 rounded-full bg-primary text-white hover:bg-accent hover:shadow-lg hover:shadow-accent/20 transition-all font-semibold"
      >
        Contact
      </Link>
    </nav>
  );
}
