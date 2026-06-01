'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, CheckCircle2, ChevronRight } from 'lucide-react';
import { services } from '@/constants/services';
import Card from '@/components/common/Card';
import ArcadeSection from '@/components/home/ArcadeSection';

const heroSlides = [
  {
    industry: 'Energy',
    title: 'Powering Critical Energy Infrastructure',
    video: '/vedios-gts/download (16).mp4'
  },
  {
    industry: 'Heavy Engineering',
    title: 'Engineering Industrial Excellence',
    video: '/vedios-gts/download (17).mp4'
  },
  {
    industry: 'Railways',
    title: 'Advancing Smart Transportation Systems',
    video: '/vedios-gts/railway.mp4'
  },
  {
    industry: 'Marine',
    title: 'Innovating Maritime Engineering Solutions',
    video: '/vedios-gts/marine.mp4'
  },
  {
    industry: 'Consumer',
    title: 'Creating Exceptional Consumer Experiences',
    video: '/vedios-gts/consumer.mp4'
  },
  {
    industry: 'Medical Devices',
    title: 'Engineering Precision Healthcare Solutions',
    video: '/vedios-gts/medical-machine.mp4'
  },
  {
    industry: 'Telecom',
    title: 'Enabling Next-Generation Connectivity',
    video: '/vedios-gts/telecom.mp4'
  },
  {
    industry: 'Utilities',
    title: 'Building Smarter Utility Networks',
    video: '/vedios-gts/biology.mp4'
  },
  {
    industry: 'Aerospace',
    title: 'Engineering the Future of Flight',
    video: '/vedios-gts/AI.mp4'
  },
  {
    industry: 'Automotive',
    title: 'Driving Intelligent Mobility Innovation',
    video: '/vedios-gts/automobile.mp4'
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
  const videoRef = useRef<HTMLVideoElement | null>(null);

  useEffect(() => {
    const currentVideo = videoRef.current;
    if (!currentVideo) return;
    currentVideo.currentTime = 0;
    void currentVideo.play().catch(() => undefined);
  }, [activeSlide]);

  const handleSlideChange = (index: number) => {
    setActiveSlide(index);
  };

  const handleVideoEnd = () => {
    setActiveSlide((prev) => (prev + 1) % heroSlides.length);
  };

  // Animation variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 25 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } }
  };

  const staggerContainer = {
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
      <section className="relative h-[82vh] min-h-[620px] w-full overflow-hidden border-b border-slate-900 bg-slate-950">
        <video
          ref={videoRef}
          key={heroSlides[activeSlide].video}
          autoPlay
          muted
          playsInline
          preload="metadata"
          onEnded={handleVideoEnd}
          className="absolute inset-0 h-full w-full object-cover"
        >
          <source src={heroSlides[activeSlide].video} type="video/mp4" />
        </video>

        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/55 to-slate-950/30" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(45,109,246,0.25),transparent_40%),radial-gradient(circle_at_80%_60%,rgba(14,165,233,0.18),transparent_40%)]" />
        <div className="absolute inset-0 blueprint-grid-fine opacity-20" />

        <div className="relative z-10 mx-auto flex h-full w-full max-w-[1500px] items-center justify-center px-4 sm:px-6 lg:px-8 py-8">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="mx-auto flex h-full w-full max-w-6xl items-center justify-center"
          >
            <div className="w-full p-6 sm:p-10 lg:p-16">
              <AnimatePresence mode="wait">
                <motion.div
                  key={`industry-${activeSlide}`}
                  initial={{ opacity: 0, y: 26 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.65, ease: 'easeOut' }}
                  className="space-y-6 text-center"
                >
                  <p className="text-xl font-semibold tracking-wide text-cyan-100 sm:text-2xl">
                    {heroSlides[activeSlide].industry}
                  </p>

                  <h1 className="text-3xl font-extrabold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
                    <span className="text-white">{heroSlides[activeSlide].title.split(' ').slice(0, Math.ceil(heroSlides[activeSlide].title.split(' ').length / 2)).join(' ')}</span>{' '}
                    <span className="text-cyan-300">{heroSlides[activeSlide].title.split(' ').slice(Math.ceil(heroSlides[activeSlide].title.split(' ').length / 2)).join(' ')}</span>
                  </h1>

                  <p className="mx-auto max-w-3xl text-sm leading-relaxed text-slate-100 sm:text-base">
                    GTS Engineering USA acts as a trusted, extended arm of design, development, and engineering groups worldwide. We co-create value by delivering high-fidelity CAD layouts, plant FEED, structural FEA simulations, GIS utility mapping, and commissioning management.
                  </p>

                  <motion.div variants={fadeInUp} className="mt-8 flex flex-wrap items-center justify-center gap-4">
                    <Link
                      href="/services"
                      className="group inline-flex items-center justify-center gap-2 rounded-lg bg-accent px-6 py-3 text-sm font-semibold text-white transition-all hover:bg-accent-dark hover:shadow-lg hover:shadow-accent/20"
                    >
                      Explore Services Offered
                      <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </Link>
                    <Link
                      href="/contact"
                      className="rounded-lg border border-slate-300/40 bg-slate-950/25 px-6 py-3 text-sm font-semibold text-white transition-all hover:border-white/70"
                    >
                      Discuss Your Project
                    </Link>
                  </motion.div>
                </motion.div>
              </AnimatePresence>
            </div>
          </motion.div>
        </div>

        <div className="absolute bottom-8 left-1/2 z-20 flex -translate-x-1/2 items-center gap-2">
          {heroSlides.map((item, idx) => (
            <button
              key={item.video}
              onClick={() => handleSlideChange(idx)}
              className={`h-2 rounded-full transition-all ${activeSlide === idx ? 'w-10 bg-cyan-300' : 'w-2 bg-white/45 hover:bg-white/80'}`}
              aria-label={`Show industry slide ${idx + 1}`}
            />
          ))}
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
