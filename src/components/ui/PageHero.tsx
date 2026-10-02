import type { ReactNode } from 'react';
import Image from 'next/image';
import BackgroundGrid from './BackgroundGrid';
import FloatingParticles from './FloatingParticles';
import AnimatedSection from './AnimatedSection';
import { cn } from './utils';

interface PageHeroProps {
  eyebrow: string;
  title: string;
  description: string;
  children?: ReactNode;
  className?: string;
  backgroundImage?: string;
  backgroundImageAlt?: string;
}

export default function PageHero({
  eyebrow,
  title,
  description,
  children,
  className,
  backgroundImage,
  backgroundImageAlt
}: PageHeroProps) {
  return (
    <section className={cn('relative overflow-hidden border-b border-slate-800 bg-slate-950 py-20 text-white sm:py-28', className)}>
      {backgroundImage ? (
        <div className="absolute inset-0 z-0">
          <Image
            src={backgroundImage}
            alt={backgroundImageAlt || title}
            fill
            priority
            sizes="100vw"
            className="object-cover object-center"
          />
          {/* Light overall tint so the image colors and details on sides remain vivid */}
          <div className="absolute inset-0 bg-slate-950/20" />
          {/* Concentrated dark vignette in the center to keep title and content sharp & legible */}
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_65%_70%_at_50%_48%,rgba(2,6,23,0.80)_0%,rgba(2,6,23,0.52)_50%,transparent_85%)]" />
          {/* Subtle top & bottom edge gradients for seamless header and section transitions */}
          <div className="absolute inset-0 bg-gradient-to-b from-slate-950/60 via-transparent via-50% to-slate-950/85" />
        </div>
      ) : (
        <>
          <BackgroundGrid variant="fine" className="opacity-80" />
          <FloatingParticles />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(14,165,233,0.22),transparent_38%),linear-gradient(180deg,rgba(2,6,23,0.10),#020617_86%)]" />
        </>
      )}

      {backgroundImage && <FloatingParticles />}

      <AnimatedSection className="relative z-10 mx-auto max-w-6xl px-4 text-center sm:px-6 lg:px-8">
        <div className="mx-auto inline-flex items-center rounded-full border border-cyan-400/30 bg-[#0B1E3B]/70 px-5 py-1.5 text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300 shadow-[0_0_15px_rgba(6,182,212,0.15)] backdrop-blur-md">
          {eyebrow}
        </div>
        <h1 className="mx-auto mt-6 max-w-4xl font-display text-3xl font-extrabold leading-tight tracking-tight text-white drop-shadow-md sm:text-5xl lg:text-6xl">
          {title}
        </h1>
        <p className="mx-auto mt-5 max-w-4xl text-sm leading-relaxed text-slate-100/95 drop-shadow-sm sm:text-base sm:leading-8">
          {description}
        </p>
        {children && <div className="mt-8 sm:mt-10">{children}</div>}
      </AnimatedSection>
    </section>
  );
}

export { PageHero };

