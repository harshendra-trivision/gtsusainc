'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, CheckCircle2, ChevronRight, Sparkles, Cpu, Zap, Pause, Play } from 'lucide-react';
import { services } from '@/constants/services';
import Card from '@/components/common/Card';
import ArcadeSection from '@/components/home/ArcadeSection';

// 11 Sections Data structure matching points exactly
interface Slide {
  heading: string;
  image: string;
  points: { title: string; slug: string }[];
}

const slides: Slide[] = [
  {
    heading: "An Engineering Solution Specialist",
    image: "/image/an-engineering-solution-specialist.png",
    points: [
      { title: "Our Benefits", slug: "our-benefits" },
      { title: "Virtual Extension", slug: "virtual-extension" },
      { title: "Extended Arm", slug: "extended-arm" },
      { title: "Increasing Efficiency", slug: "increasing-efficiency" },
      { title: "Optimization", slug: "optimization" },
      { title: "3F Strategy - Customer delight", slug: "3f-strategy" },
      { title: "Fast", slug: "fast" },
      { title: "Flexible", slug: "flexible" },
      { title: "Focused", slug: "focused" }
    ]
  },
  {
    heading: "Energy",
    image: "/image/energy.png",
    points: [
      { title: "Oil & Gas", slug: "oil-gas" },
      { title: "Onshore & Offshore", slug: "onshore-offshore" },
      { title: "Pipeline", slug: "pipeline" },
      { title: "Petrochemical & Refinery", slug: "petrochemical-refinery" },
      { title: "Power", slug: "power" },
      { title: "Thermal", slug: "thermal" },
      { title: "Hydro", slug: "hydro" },
      { title: "Wind", slug: "wind" },
      { title: "Nuclear", slug: "nuclear" }
    ]
  },
  {
    heading: "Heavy Engineering & Machinery",
    image: "/image/heavy-enginerring-machinery.png",
    points: [
      { title: "Oil & Gas Equipment", slug: "oil-gas-equipment" },
      { title: "Steel & Cement Plant", slug: "steel-cement-plant" },
      { title: "Transportation", slug: "transportation" },
      { title: "Mining & Exploration", slug: "mining-exploration" },
      { title: "Agricultural Machinery", slug: "agricultural-machinery" },
      { title: "Material Handling", slug: "material-handling" },
      { title: "Packaging Machinery", slug: "packaging-machinery" },
      { title: "Machine Tools", slug: "machine-tools" }
    ]
  },
  {
    heading: "Marine",
    image: "/image/marin.png",
    points: [
      { title: "Naval architecture", slug: "naval-architecture" },
      { title: "Hull Structure", slug: "hull-structure" },
      { title: "Machinery", slug: "machinery" },
      { title: "Marine & utility systems", slug: "marine-utility-systems" },
      { title: "Piping design & analysis", slug: "piping-design-analysis" },
      { title: "HVAC", slug: "hvac" },
      { title: "Outfitting", slug: "outfitting" }
    ]
  },
  {
    heading: "Consumer",
    image: "/image/consumer.png",
    points: [
      { title: "Office Automation", slug: "office-automation" },
      { title: "Electronics & Durables", slug: "electronics-durables" },
      { title: "Security & Gaming Equipment", slug: "security-gaming" }
    ]
  },
  {
    heading: "Medical Devices",
    image: "/image/medical-device.png",
    points: [
      { title: "Diagnostic Imaging", slug: "diagnostic-imaging" },
      { title: "Patient Monitoring Systems", slug: "patient-monitoring" },
      { title: "Therapeutic Equipment", slug: "therapeutic-equipment" }
    ]
  },
  {
    heading: "Telecom",
    image: "/image/telcome.png",
    points: [
      { title: "Consulting & Implementation", slug: "consulting-implementation" },
      { title: "Network Inventory Management", slug: "network-inventory" },
      { title: "Network Operations Support", slug: "network-operations" },
      { title: "Network Operational Support Systems", slug: "network-operational-systems" }
    ]
  },
  {
    heading: "Utilities",
    image: "/image/utilities.png",
    points: [
      { title: "Smart Grid", slug: "smart-grid" },
      { title: "IT Systems", slug: "it-systems" },
      { title: "Operational Systems", slug: "operational-systems" },
      { title: "Power Engineering", slug: "power-engineering" }
    ]
  },
  {
    heading: "Aerospace",
    image: "/image/aerospace.png",
    points: [
      { title: "Aero Interiors", slug: "aero-interiors" },
      { title: "Aero Structures", slug: "aero-structures" },
      { title: "Aero Systems", slug: "aero-systems" },
      { title: "Aero Engines", slug: "aero-engines" }
    ]
  },
  {
    heading: "Automotive",
    image: "/image/automotives.png",
    points: [
      { title: "BIW", slug: "biw" },
      { title: "Closures", slug: "closures" },
      { title: "Interior", slug: "interior" },
      { title: "Exterior", slug: "exterior" },
      { title: "Underbody", slug: "underbody" },
      { title: "Powertrain", slug: "powertrain" },
      { title: "Electrical & Electronics", slug: "electrical-electronics" }
    ]
  },
  {
    heading: "Railways",
    image: "/image/railway.png",
    points: [
      { title: "Positive Train Control", slug: "positive-train-control" },
      { title: "Signalling & Interlocking", slug: "signalling-interlocking" },
      { title: "Electrical & Electronics Design", slug: "rail-electrical-electronics" },
      { title: "Mechanical Design & Analysis", slug: "rail-mechanical-design" },
      { title: "Technical Publication", slug: "rail-technical-publication" },
      { title: "Design Automation", slug: "rail-design-automation" },
      { title: "Interiors & Seating", slug: "rail-interiors-seating" }
    ]
  }
];

const serviceCardImages: Record<string, string> = {
  'product-engineering': '/image/product-engin.png',
  'plant-process-design': '/image/plant-process-design.png',
  'document-engineering': '/image/docu-engin.png',
  'geoinformatics-engineering': '/image/geoinformatic-information.png',
  'plm-software-engineering': '/image/plm.png',
  'project-management-controls': '/image/project-development-cycle.png'
};

export default function HomePage() {
  const [activeSlide, setActiveSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [isImageLoaded, setIsImageLoaded] = useState(false);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  // 3-second slider interval setup
  useEffect(() => {
    if (!isPaused) {
      timerRef.current = setInterval(() => {
        setActiveSlide((prev) => (prev + 1) % slides.length);
      }, 3000);
    }
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [isPaused]);

  const handleSlideChange = (index: number) => {
    setActiveSlide(index);
  };

  // Animation variants
  const fadeInUp: any = {
    hidden: { opacity: 0, y: 25 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } }
  };

  const staggerContainer: any = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  return (
    <div className="flex flex-col w-full overflow-hidden">
      {/* SECTION 1: HERO */}
      <section className="relative bg-slate-950 text-white py-20 sm:py-28 blueprint-grid overflow-hidden border-b border-slate-900">
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-slate-950/75 to-slate-950 z-0" />

        {/* Glow Highlights */}
        <div className="absolute top-1/4 left-1/4 w-[400px] h-[400px] bg-accent/10 rounded-full blur-[120px] pointer-events-none z-0" />
        <div className="absolute bottom-1/4 right-1/4 w-[300px] h-[300px] bg-accent-light/10 rounded-full blur-[100px] pointer-events-none z-0" />

        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">

            {/* Left Column: Widescreen Text Block (lg:col-span-5) */}
            <motion.div
              initial="hidden"
              animate="visible"
              variants={staggerContainer}
              className="lg:col-span-5 flex flex-col space-y-6 text-left"
            >
              <motion.div variants={fadeInUp} className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-accent/10 border border-accent/20 text-xs font-mono text-accent-light uppercase tracking-wider self-start">
                <Sparkles className="w-3.5 h-3.5 animate-pulse" />
                Virtual Engineering Center
              </motion.div>

              <motion.h1 variants={fadeInUp} className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-display leading-[1.1] tracking-tight">
                An Engineering <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-light to-accent">Virtual Extension</span> of Your Team
              </motion.h1>

              <motion.p variants={fadeInUp} className="text-xs sm:text-sm text-slate-400 leading-relaxed max-w-xl">
                GTS Engineering USA acts as a trusted, extended arm of design, development, and engineering groups worldwide. We co-create value by delivering high-fidelity CAD layouts, plant FEED, structural FEA simulations, GIS utility mapping, and commissioning management.
              </motion.p>

              <motion.div variants={fadeInUp} className="flex flex-wrap gap-4 pt-2">
                <Link
                  href="/services"
                  className="px-5 py-3 rounded-lg bg-accent text-white hover:bg-accent-dark hover:shadow-lg hover:shadow-accent/20 transition-all font-semibold flex items-center justify-center gap-2 group text-xs"
                >
                  Explore Services Offered
                  <ArrowRight className="w-3.5 h-3.5 transform group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link
                  href="/contact"
                  className="px-5 py-3 rounded-lg border border-slate-700 bg-slate-900/40 text-slate-350 hover:border-slate-500 hover:text-white transition-all font-semibold text-center text-xs"
                >
                  Discuss Your Project
                </Link>
              </motion.div>
            </motion.div>

            {/* Right Column: Massive Interactive Slideshow Centerpiece (lg:col-span-7) */}
            <div className="lg:col-span-7 w-full">
              <div
                className="relative aspect-[16/10] sm:aspect-[16/9] w-full rounded-2xl overflow-hidden border border-slate-800 bg-slate-900 shadow-2xl group"
                onMouseEnter={() => setIsPaused(true)}
                onMouseLeave={() => setIsPaused(false)}
              >
                {/* 1. Large Slide Image Background (Transition Zoom/Fade) */}
                <div className="absolute inset-0 z-0 bg-slate-950 overflow-hidden">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={activeSlide}
                      initial={{ opacity: 0, scale: 1.05 }}
                      animate={{ opacity: 0.5, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.95 }}
                      transition={{ duration: 0.7, ease: 'easeInOut' }}
                      className="relative w-full h-full"
                    >
                      <Image
                        src={slides[activeSlide].image}
                        alt={`GTS industrial slide ${slides[activeSlide].heading}`}
                        fill
                        className="object-cover"
                        priority
                        onLoad={() => setIsImageLoaded(true)}
                      />
                    </motion.div>
                  </AnimatePresence>

                  {/* Grid overlays */}
                  <div className="absolute inset-0 blueprint-grid-fine opacity-20 z-10" />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-slate-950/40 z-15" />
                </div>

                {/* 2. Floating Slider Status & Pause Trigger */}
                <div className="absolute top-4 left-4 z-30 flex items-center gap-2">
                  <span className="bg-slate-950/80 backdrop-blur-md border border-slate-800 rounded px-2.5 py-1 text-[9px] font-mono text-slate-400 tracking-wider">
                    SECTOR: 0{activeSlide + 1} / 11
                  </span>
                  <button
                    onClick={() => setIsPaused(!isPaused)}
                    className="p-1 rounded bg-slate-950/80 backdrop-blur-md border border-slate-800 text-slate-400 hover:text-white transition-colors focus:outline-none"
                    aria-label={isPaused ? "Play slide timer" : "Pause slide timer"}
                  >
                    {isPaused ? <Play className="w-3 h-3" /> : <Pause className="w-3 h-3" />}
                  </button>
                </div>

                {/* 3. Floating points panel inside the image at the bottom-right */}
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeSlide}
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 15 }}
                    transition={{ duration: 0.4 }}
                    className="absolute bottom-5 right-5 sm:bottom-6 sm:right-6 z-25 w-[90%] sm:w-[480px] bg-slate-950/15 backdrop-blur-[2px] rounded-2xl p-5 sm:p-6 shadow-2xl"                  >
                    <div className="space-y-3">
                      {/* Active Heading */}
                      <div className="flex items-center gap-2">
                        <span className="p-1 border border-accent/30 rounded text-accent-light">
                          <Cpu className="w-3.5 h-3.5" />
                        </span>
                        <h3 className="text-xs sm:text-sm font-extrabold text-white font-display tracking-tight leading-tight">
                          {slides[activeSlide].heading}
                        </h3>
                      </div>

                      <div className="h-px bg-slate-800/80" />

                      {/* Points Grid organized in columns */}
                      <div className="grid grid-cols-2 gap-x-4 gap-y-2 text-left">
                        {slides[activeSlide].points.map((pt, i) => (
                          <Link
                            key={pt.slug}
                            href={`/solutions/${pt.slug}`}
                            className="hover:text-accent-light text-[10px] leading-snug flex items-start gap-1 transition-colors font-medium text-slate-400 py-0.5 group/pt"
                          >
                            <span className="w-1.5 h-1.5 rounded-full bg-slate-700 mt-1 shrink-0 group-hover/pt:bg-accent-light transition-colors" />
                            <span className="hover:underline line-clamp-1">{pt.title}</span>
                          </Link>
                        ))}
                      </div>

                      {/* Prompt guidance */}
                    </div>
                  </motion.div>
                </AnimatePresence>

                {/* 4. Slides Progress Indicator bar dot indicators */}
                <div className="absolute bottom-5 left-5 z-25 flex items-center gap-1.5">
                  {slides.map((_, idx) => (
                    <button
                      key={idx}
                      onClick={() => handleSlideChange(idx)}
                      className={`h-1.5 rounded-full transition-all focus:outline-none ${activeSlide === idx
                        ? 'w-6 bg-accent'
                        : 'w-1.5 bg-slate-700 hover:bg-slate-500'
                        }`}
                      aria-label={`Jump to sector slide 0${idx + 1}`}
                    />
                  ))}
                </div>

              </div>
            </div>

          </div>
        </div>
      </section>

      {/* SECTION 2: SERVICES OVERVIEW */}
      <section className="py-20 sm:py-28 bg-slate-50 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Header */}
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
            <div className="text-xs font-mono font-semibold tracking-widest text-accent uppercase">
              Core Capabilities
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold font-display text-primary tracking-tight">
              Comprehensive Engineering Offerings
            </h2>
            <div className="h-1 w-12 bg-accent mx-auto rounded-full" />
            <p className="text-slate-500 text-sm leading-relaxed pt-2">
              We cover the entire Product and Plant Life Cycle (PPLC), delivering customized solutions that reduce costs and accelerate your time-to-market.
            </p>
          </div>
          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((svc) => (
              <Card
                key={svc.slug}
                className="flex flex-col h-full overflow-hidden bg-white border border-slate-200/70 rounded-2xl shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group"
              >
                <div className="relative aspect-[16/9] overflow-hidden">
                  <Image
                    src={serviceCardImages[svc.slug] || '/image/product-engin.png'}
                    alt={svc.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/65 via-slate-900/20 to-transparent" />
                  <h3 className="absolute left-4 right-4 bottom-3 text-lg font-bold text-white leading-tight">
                    {svc.title}
                  </h3>
                </div>

                <div className="flex flex-col flex-grow p-6">
                  <p className="text-slate-600 text-xs leading-relaxed flex-grow mb-5 min-h-[56px]">
                    {svc.tagline}
                  </p>

                  <div className="border-t border-slate-100 pt-4 mt-auto">
                    <div className="text-[10px] font-mono tracking-widest uppercase text-slate-400 mb-2.5">Key Focus Areas</div>
                    <ul className="text-[11px] text-slate-700 space-y-1.5 min-h-[62px]">
                      {svc.bulletPoints.slice(0, 3).map((bp, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-accent-light mt-1 shrink-0" />
                          <span className="leading-snug">{bp}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <Link
                    href={svc.href || `/services/${svc.slug}`}
                    className="flex items-center gap-1 text-xs font-semibold text-accent group-hover:text-accent-dark transition-colors pt-5 mt-4 border-t border-slate-100"
                  >
                    Read More Details
                    <ChevronRight className="w-4 h-4 transform group-hover:translate-x-0.5 transition-transform" />
                  </Link>
                </div>
              </Card>
            ))}
          </div>

          <ArcadeSection />

        </div>
      </section>

      {/* SECTION 3: VISION & PHILOSOPHY */}
      <section className="py-20 sm:py-28 bg-white border-y border-slate-100 relative overflow-hidden">
        {/* Decorative blueprint grids */}
        <div className="absolute inset-y-0 right-0 w-1/3 blueprint-grid-fine opacity-20 pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">

            {/* Left: Core Philosophy & Vision */}
            <div className="lg:col-span-6 space-y-8">
              <div className="space-y-3">
                <div className="text-xs font-mono font-semibold tracking-widest text-accent uppercase">
                  Corporate Philosophy
                </div>
                <h2 className="text-3xl sm:text-4xl font-extrabold font-display text-primary tracking-tight">
                  Our Identity & Business Value
                </h2>
                <div className="h-1 w-12 bg-accent rounded-full" />
              </div>

              {/* Vision Statement */}
              <div className="p-6 rounded-xl bg-slate-50 border-l-4 border-accent space-y-2">
                <div className="text-[10px] font-mono text-slate-400 uppercase tracking-widest font-bold">Our Vision</div>
                <p className="text-slate-800 text-sm font-semibold leading-relaxed">
                  &ldquo;Collaboratively delivering Innovative Manufacturing & Plant Solutions to enable our customers effectively lead their markets.&rdquo;
                </p>
              </div>

              {/* Mission Statement */}
              <div className="p-6 rounded-xl bg-slate-50 border-l-4 border-accent-light space-y-2">
                <div className="text-[10px] font-mono text-slate-400 uppercase tracking-widest font-bold">Our Mission</div>
                <p className="text-slate-700 text-sm italic leading-relaxed">
                  &ldquo;To co-create values & opportunities of growth for our customers through harnessing our passion & innovation.&rdquo;
                </p>
              </div>

              {/* Context and Core Approach */}
              <div className="space-y-4 pt-2">
                <h4 className="font-bold text-primary text-base">The &ldquo;Context vs. Core&rdquo; Philosophy</h4>
                <p className="text-slate-500 text-xs leading-relaxed">
                  Our core strategy encourages engineering organizations to focus their key executive resources on core proprietary competencies, while outsourcing non-core procedural or capacity work (context work) to GTS. This virtual extension enhances operational efficiency and dramatically lowers Total Cost of Ownership (TCO).
                </p>
              </div>
            </div>

            {/* Right: 3F Strategy */}
            <div className="lg:col-span-6 space-y-6">
              <div className="bg-slate-50 border border-slate-200/80 rounded-2xl p-8 space-y-6 shadow-sm">
                <div>
                  <h3 className="text-xl font-extrabold text-primary">3F Strategy</h3>
                  <p className="text-slate-400 text-[10px] font-mono uppercase tracking-widest mt-0.5">Delivering Customer Delight</p>
                </div>

                <div className="space-y-5">
                  {/* FAST */}
                  <div className="flex gap-4">
                    <div className="p-2.5 h-10 w-10 rounded-full bg-accent/10 text-accent flex items-center justify-center shrink-0">
                      <CheckCircle2 className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-900 text-sm">Fast</h4>
                      <p className="text-slate-500 text-xs mt-1 leading-relaxed">
                        Rapid turnaround and swift response times matching project schedules. We facilitate expedited execution pipelines across timezone-shifted global delivery structures.
                      </p>
                    </div>
                  </div>

                  {/* FLEXIBLE */}
                  <div className="flex gap-4">
                    <div className="p-2.5 h-10 w-10 rounded-full bg-accent-light/10 text-accent-light flex items-center justify-center shrink-0">
                      <CheckCircle2 className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-900 text-sm">Flexible</h4>
                      <p className="text-slate-500 text-xs mt-1 leading-relaxed">
                        Highly customizable engagement models (onshore, offshore, hybrid) tailored to adapt instantly to fluctuating customer requirements and sizing needs.
                      </p>
                    </div>
                  </div>

                  {/* FOCUSED */}
                  <div className="flex gap-4">
                    <div className="p-2.5 h-10 w-10 rounded-full bg-slate-950/10 text-slate-950 flex items-center justify-center shrink-0">
                      <CheckCircle2 className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-900 text-sm">Focused</h4>
                      <p className="text-slate-500 text-xs mt-1 leading-relaxed">
                        Dedicated engineering teams committed 100% to your specifications, engineering compliance, and information confidentiality protocols.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

    </div>
  );
}
export { HomePage };
