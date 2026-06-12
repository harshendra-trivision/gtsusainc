import type { ReactNode } from 'react';
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
}

export default function PageHero({ eyebrow, title, description, children, className }: PageHeroProps) {
  return (
    <section className={cn('relative overflow-hidden border-b border-slate-800 bg-slate-950 py-20 text-white sm:py-28', className)}>
      <BackgroundGrid variant="fine" className="opacity-80" />
      <FloatingParticles />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(14,165,233,0.22),transparent_38%),linear-gradient(180deg,rgba(2,6,23,0.10),#020617_86%)]" />
      <AnimatedSection className="relative z-10 mx-auto max-w-6xl px-4 text-center sm:px-6 lg:px-8">
        <div className="mx-auto inline-flex items-center rounded-full border border-cyan-200/20 bg-white/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.24em] text-cyan-100 backdrop-blur">
          {eyebrow}
        </div>
        <h1 className="mx-auto mt-6 max-w-4xl font-display text-4xl font-extrabold leading-tight tracking-tight text-white sm:text-6xl">
          {title}
        </h1>
        <p className="mx-auto mt-5 max-w-3xl text-sm leading-7 text-slate-300 sm:text-base">
          {description}
        </p>
        {children && <div className="mt-8">{children}</div>}
      </AnimatedSection>
    </section>
  );
}

export { PageHero };
