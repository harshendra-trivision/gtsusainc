'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { AnimatePresence, motion } from 'framer-motion';
import { caseStudies } from '@/constants/caseStudies';

const arcadeImages = [
  '/image/image-1.png',
  '/image/image-2.png',
  '/image/image-3.png',
  '/image/image-4.png',
  '/image/image-7.png',
  '/image/image-6.png',
  '/image/image-5.png',
  '/image/image-8.png',
  '/image/image-9.png'
];

export default function ArcadeSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isInView, setIsInView] = useState(false);
  const sectionRef = useRef<HTMLElement | null>(null);
  const listRef = useRef<HTMLDivElement | null>(null);
  const thumbRefs = useRef<Array<HTMLButtonElement | null>>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setIsInView(entry.isIntersecting),
      { threshold: 0.35 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isInView) return;
    const id = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % arcadeImages.length);
    }, 2500);
    return () => clearInterval(id);
  }, [isInView]);

  useEffect(() => {
    const el = thumbRefs.current[activeIndex];
    const list = listRef.current;
    if (!el || !list) return;

    const desiredTop = el.offsetTop - list.clientHeight / 2 + el.clientHeight / 2;
    const nextTop = Math.max(0, desiredTop);
    list.scrollTo({ top: nextTop, behavior: 'smooth' });
  }, [activeIndex]);

  return (
    <section ref={sectionRef} className="py-12 sm:py-16">
      <div className="rounded-3xl border border-slate-200/80 bg-white p-4 sm:p-6 shadow-[0_18px_60px_rgba(15,23,42,0.08)]">
        <div className="grid gap-8 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <div className="mb-5">
              <span className="inline-flex rounded-md bg-sky-100 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-sky-800">
                Arcade
              </span>
            </div>

            <div className="grid gap-5 lg:grid-cols-[180px_1fr]">
              <div ref={listRef} className="h-[320px] overflow-y-auto rounded-2xl border border-slate-200 bg-slate-50 p-2">
                <div className="space-y-2">
                  {arcadeImages.map((src, idx) => {
                    const isActive = idx === activeIndex;
                    return (
                      <button
                        key={src}
                        ref={(el) => {
                          thumbRefs.current[idx] = el;
                        }}
                        onClick={() => setActiveIndex(idx)}
                        className={`relative w-full overflow-hidden rounded-lg border transition-all ${isActive ? 'border-sky-400 shadow-md' : 'border-slate-200 hover:border-sky-300'
                          }`}
                        aria-label={`Open arcade image ${idx + 1}`}
                      >
                        <div className="relative aspect-[16/10]">
                          <Image src={src} alt={`Arcade image ${idx + 1}`} fill className="object-cover" />
                        </div>
                      </button>
                    );
                  })}
                </div>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-slate-950 p-3 sm:p-4">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={arcadeImages[activeIndex]}
                    initial={{ opacity: 0, y: 8, scale: 0.99 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: -8, scale: 0.99 }}
                    transition={{ duration: 0.3 }}
                    className="relative aspect-[16/10] overflow-hidden rounded-xl"
                  >
                    <Image
                      src={arcadeImages[activeIndex]}
                      alt={`Selected arcade image ${activeIndex + 1}`}
                      fill
                      sizes="(max-width: 1024px) 100vw, 55vw"
                      className="object-contain"
                    />
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5">
            <h3 className="mb-4 text-2xl font-semibold text-[#0056a4] sm:text-3xl">Case Studies</h3>
            <div className="grid grid-cols-1 gap-3 sm:grid-cols-3 lg:grid-cols-1 xl:grid-cols-3">
              {caseStudies.slice(0, 3).map((study, index) => {
                const linkHref = study.pdfUrl && study.pdfUrl !== '#' ? study.pdfUrl : '/case-studies';
                const ctaLabel = index === 0 ? 'View Case Study' : 'Read Case Study';

                return (
                  <div key={study.id} className="rounded-md border border-slate-200 bg-white p-3">
                    <p className="line-clamp-4 min-h-[92px] text-sm text-slate-700">{study.title}</p>
                    {index === 0 ? (
                      <Link
                        href={linkHref}
                        className="mt-2 inline-block text-[15px] italic text-[#0056a4] underline underline-offset-2 hover:text-[#003f79]"
                        scroll
                      >
                        {ctaLabel}
                      </Link>
                    ) : (
                      <button
                        type="button"
                        onClick={() => {
                          window.scrollTo({ top: 0, behavior: 'smooth' });
                        }}
                        className="mt-2 inline-block text-[15px] italic text-[#0056a4] underline underline-offset-2 hover:text-[#003f79]"
                      >
                        {ctaLabel}
                      </button>
                    )}
                  </div>
                );
              })}
            </div>
            <div className="mt-6 text-right">
              <Link
                href="/downloads"
                scroll
                className="text-sm font-semibold uppercase tracking-wide text-[#0056a4] hover:text-[#003f79]"
              >
                View All Case Studies...
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
