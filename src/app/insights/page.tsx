import type { Metadata } from 'next';
import Link from 'next/link';
import {
  ArrowRight,
  BadgeCheck,
  Briefcase,
  FileText,
  FolderOpen,
  Library,
  Newspaper,
  PenTool,
  RefreshCw,
  Send,
  Star,
  Tag,
  BookMarked,
  type LucideIcon
} from 'lucide-react';
import { insightsContent } from '@/constants/insightsContent';
import { AnimatedSection, GradientButton, MagneticCard, PageHero } from '@/components/ui';

const categoryIcons: Record<string, LucideIcon> = {
  Star,
  Tag,
  FileText,
  Newspaper,
  PenTool,
  Briefcase,
  BookMarked,
  Library,
  RefreshCw,
  BadgeCheck,
  FolderOpen
};

export const metadata: Metadata = {
  title: 'Insights | GTS Engineering',
  description:
    'Technical knowledge, industry perspectives, engineering innovation, and practical solutions shaping the future of industrial infrastructure — from GTS Engineering.',
  alternates: {
    canonical: 'https://gtsusainc.com/insights'
  }
};

export default function InsightsPage() {
  return (
    <div className="flex w-full flex-col">
      <PageHero
        eyebrow="Insights"
        title="Engineering Insights"
        description="Technical knowledge, industry perspectives, engineering innovation, and practical solutions shaping the future of industrial infrastructure."
      >
        <div className="flex flex-wrap items-center justify-center gap-2">
          {insightsContent.map((category) => (
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
          {insightsContent.map((category, index) => {
            const Icon = categoryIcons[category.icon] ?? Star;
            const isCaseStudies = category.slug === 'case-studies';

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

                <div className="mt-8 grid grid-cols-1 gap-6 lg:grid-cols-2">
                  {category.groups.map((group, groupIdx) => (
                    <MagneticCard
                      key={group.heading ?? groupIdx}
                      className="rounded-[1.5rem] border border-slate-200 bg-white p-6 shadow-sm sm:p-7"
                    >
                      {group.heading && (
                        <h3 className="mb-4 text-sm font-bold uppercase tracking-wide text-primary">{group.heading}</h3>
                      )}
                      <div className="flex flex-wrap gap-2">
                        {group.items.map((item) => (
                          <span
                            key={item}
                            className="rounded-full bg-slate-50 px-3 py-1.5 text-[11px] font-semibold text-slate-700 ring-1 ring-slate-200"
                          >
                            {item}
                          </span>
                        ))}
                      </div>
                    </MagneticCard>
                  ))}
                </div>

                {isCaseStudies && (
                  <div className="mt-6">
                    <Link
                      href="/case-studies"
                      className="inline-flex items-center gap-1.5 rounded-full bg-accent/10 px-4 py-2.5 text-xs font-semibold text-accent transition-colors hover:bg-accent hover:text-white"
                    >
                      View Full Case Studies
                      <ArrowRight className="h-3.5 w-3.5" />
                    </Link>
                  </div>
                )}
              </AnimatedSection>
            );
          })}
        </div>
      </section>

      <section className="border-t border-slate-100 bg-slate-950 py-16 text-center sm:py-20">
        <span className="text-xs font-mono font-semibold uppercase tracking-[0.22em] text-cyan-200">Stay Informed</span>
        <h2 className="mt-3 font-display text-2xl font-extrabold text-white sm:text-3xl">Get Engineering Insights In Your Inbox</h2>
        <p className="mx-auto mt-3 max-w-xl text-sm leading-relaxed text-slate-300">
          Subscribe for new white papers, engineering guides, and industry updates from GTS Engineering.
        </p>
        <form className="mx-auto mt-8 flex max-w-md flex-col gap-3 px-4 sm:flex-row sm:px-0">
          <input
            type="email"
            required
            placeholder="Work email address"
            className="w-full flex-1 rounded-full border border-white/15 bg-white/10 px-5 py-3 text-sm text-white placeholder:text-slate-400 focus:border-cyan-300/50 focus:outline-none"
          />
          <GradientButton type="submit" showIcon={false} className="justify-center px-5 py-3 text-xs">
            Subscribe
            <Send className="h-3.5 w-3.5" />
          </GradientButton>
        </form>
        <p className="mt-3 text-[11px] text-slate-500">No spam. Unsubscribe anytime.</p>
      </section>
    </div>
  );
}
