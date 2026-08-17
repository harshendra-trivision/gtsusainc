import type { Metadata } from 'next';
import {
  BarChart3,
  BookOpen,
  Bot,
  Brain,
  BrainCircuit,
  Building2,
  FileSearch,
  FlaskConical,
  GraduationCap,
  Handshake,
  Layers,
  Lightbulb,
  Map,
  Megaphone,
  PlayCircle,
  Sparkles,
  TestTube,
  TrendingUp,
  Workflow,
  type LucideIcon
} from 'lucide-react';
import { innovationContent } from '@/constants/innovationContent';
import { AnimatedSection, GradientButton, MagneticCard, PageHero } from '@/components/ui';

const categoryIcons: Record<string, LucideIcon> = {
  FlaskConical,
  Sparkles,
  TestTube,
  Handshake,
  Megaphone,
  Building2,
  BrainCircuit,
  BookOpen,
  Map,
  Workflow,
  GraduationCap,
  Lightbulb,
  PlayCircle,
  TrendingUp,
  Brain,
  Bot,
  FileSearch,
  Layers,
  BarChart3
};

export const metadata: Metadata = {
  title: 'Innovation | GTS Engineering',
  description:
    'Engineering the future through innovation — R&D, emerging technologies, our Innovation Lab, technology partnerships, industrial AI research, and future infrastructure at GTS Engineering.',
  alternates: {
    canonical: 'https://gtsusainc.com/innovation'
  }
};

export default function InnovationPage() {
  return (
    <div className="flex w-full flex-col">
      <PageHero
        eyebrow="Innovation"
        title="Engineering the Future Through Innovation"
        description="Innovation is at the core of everything we do. At GTS Engineering, we continuously explore emerging technologies, advanced engineering methodologies, and digital solutions that help our clients improve performance, reduce risk, accelerate project delivery, and build the industries of tomorrow. By combining engineering expertise with artificial intelligence, digital technologies, strategic partnerships, and research-driven innovation, we help organizations remain competitive in an increasingly connected and rapidly evolving industrial landscape."
      >
        <div className="flex flex-wrap items-center justify-center gap-2">
          {innovationContent.map((category) => (
            <a
              key={category.slug}
              href={`#${category.slug}`}
              className="rounded-full border border-white/15 bg-white/10 px-4 py-2 text-xs font-mono uppercase tracking-[0.18em] text-slate-300 transition-colors hover:border-cyan-200/30 hover:text-white"
            >
              {category.label}
            </a>
          ))}
        </div>
      </PageHero>

      <section className="industrial-surface py-16 sm:py-24">
        <div className="mx-auto max-w-7xl space-y-20 px-4 sm:px-6 lg:px-8">
          {innovationContent.map((category, index) => {
            const Icon = categoryIcons[category.icon] ?? Sparkles;

            return (
              <AnimatedSection key={category.slug} as="div" id={category.slug} className="scroll-mt-32">
                <div className="flex items-start gap-4">
                  <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-[#2563eb] to-[#22d3ee] text-white shadow-lg shadow-blue-100">
                    <Icon className="h-6 w-6" />
                  </span>
                  <div>
                    <span className="text-xs font-mono font-semibold uppercase tracking-[0.22em] text-accent">
                      {String(index + 1).padStart(2, '0')}
                    </span>
                    <h2 className="mt-1 font-display text-2xl font-extrabold text-primary sm:text-3xl">{category.label}</h2>
                  </div>
                </div>

                {category.description && (
                  <p className="mt-6 max-w-3xl text-sm leading-relaxed text-slate-500">{category.description}</p>
                )}

                <div className="mt-8 grid grid-cols-1 gap-6">
                  {category.groups.map((group, groupIdx) => (
                    <MagneticCard
                      key={group.heading ?? groupIdx}
                      className="rounded-[1.5rem] border border-slate-200 bg-white p-6 shadow-sm sm:p-7"
                    >
                      {group.heading && (
                        <h3 className="mb-4 text-sm font-bold uppercase tracking-wide text-primary">{group.heading}</h3>
                      )}
                      <div className="grid grid-cols-1 gap-x-6 gap-y-2.5 sm:grid-cols-2 lg:grid-cols-3">
                        {group.items.map((item) => (
                          <div key={item} className="flex items-start gap-2 text-xs leading-relaxed text-slate-600">
                            <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-accent" />
                            <span>{item}</span>
                          </div>
                        ))}
                      </div>
                    </MagneticCard>
                  ))}
                </div>
              </AnimatedSection>
            );
          })}
        </div>
      </section>

      <section className="border-t border-slate-100 bg-white py-16 text-center sm:py-20">
        <span className="text-xs font-mono font-semibold uppercase tracking-[0.22em] text-accent">Innovation Framework</span>
        <h2 className="mt-3 font-display text-2xl font-extrabold text-primary sm:text-3xl">Building the Future of Engineering</h2>
        <p className="mx-auto mt-3 max-w-2xl text-sm leading-relaxed text-slate-500">
          Innovation is not a separate service — it is embedded in everything we do. By combining engineering excellence with
          emerging technologies, strategic partnerships, and continuous research, GTS Engineering helps clients navigate today&apos;s
          challenges while preparing for the industries of tomorrow.
        </p>
        <div className="mt-8 flex justify-center">
          <GradientButton href="/contact">Discuss an Innovation Partnership</GradientButton>
        </div>
      </section>
    </div>
  );
}
