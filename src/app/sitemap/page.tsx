import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowUpRight, ChevronRight } from 'lucide-react';
import { PageHero } from '@/components/ui';
import { sitemapGroups } from '@/constants/legalContent';

export const metadata: Metadata = {
  title: 'Sitemap | GTS Engineering',
  description: 'Every page on the GTS Engineering® USA Incorporated website — solutions, industries, projects, technology, downloads, company, and contact.',
  alternates: {
    canonical: 'https://gtsusainc.com/sitemap'
  }
};

const linkClassName =
  'group flex items-center justify-between gap-2 rounded-lg px-2 py-1.5 text-sm text-slate-600 transition-colors hover:bg-blue-50 hover:text-[#0A3DF0]';

export default function SitemapPage() {
  return (
    <div className="flex w-full flex-col">
      <PageHero
        eyebrow="Navigate"
        title="Sitemap"
        description="Find every section of the GTS Engineering website, from engineering solutions and industries to projects, downloads, and contact options."
        backgroundImage="/image/footer/sitemap-bg.jpg"
      />

      <section className="bg-slate-50 py-14 sm:py-20">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-6 px-4 sm:grid-cols-2 sm:px-6 lg:grid-cols-3 lg:px-8 xl:grid-cols-4">
          {sitemapGroups.map((group) => (
            <div key={group.heading} className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
              <h2 className="mb-3 border-b border-slate-100 pb-3 text-[11px] font-mono font-bold uppercase tracking-[0.22em] text-[#0A3DF0]">
                {group.heading}
              </h2>
              <ul className="space-y-0.5">
                {group.links.map((link) => (
                  <li key={link.label}>
                    {link.external ? (
                      <a href={link.href} target="_blank" rel="noopener noreferrer" className={linkClassName}>
                        <span>{link.label}</span>
                        <ArrowUpRight className="h-3.5 w-3.5 shrink-0 text-slate-400 group-hover:text-[#0A3DF0]" />
                      </a>
                    ) : (
                      <Link href={link.href} className={linkClassName}>
                        <span>{link.label}</span>
                        <ChevronRight className="h-3.5 w-3.5 shrink-0 text-slate-300 transition-transform group-hover:translate-x-0.5 group-hover:text-[#0A3DF0]" />
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
