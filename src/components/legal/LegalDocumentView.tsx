import { Mail, Phone } from 'lucide-react';
import { PageHero } from '@/components/ui';
import type { LegalDocument } from '@/constants/legalContent';

export default function LegalDocumentView({ document }: { document: LegalDocument }) {
  return (
    <div className="flex w-full flex-col">
      <PageHero eyebrow={document.eyebrow} title={document.title} description={document.description} />

      <section className="bg-slate-50 py-14 sm:py-20">
        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-10 px-4 sm:px-6 lg:grid-cols-12 lg:px-8">
          {/* Table of contents */}
          <aside className="lg:col-span-4">
            <nav className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm lg:sticky lg:top-32">
              <div className="mb-3 text-[10px] font-mono font-bold uppercase tracking-[0.24em] text-[#0A3DF0]">
                On this page
              </div>
              <ol className="space-y-1">
                {document.sections.map((section, index) => (
                  <li key={section.slug}>
                    <a
                      href={`#${section.slug}`}
                      className="flex gap-2 rounded-lg px-2 py-1.5 text-xs text-slate-600 transition-colors hover:bg-blue-50 hover:text-[#0A3DF0]"
                    >
                      <span className="font-mono text-slate-400">{String(index + 1).padStart(2, '0')}</span>
                      <span>{section.heading}</span>
                    </a>
                  </li>
                ))}
              </ol>
            </nav>
          </aside>

          {/* Document body */}
          <article className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm sm:p-10 lg:col-span-8">
            <div className="mb-8 border-b border-slate-100 pb-6">
              <div className="text-sm font-bold text-slate-900">GTS Engineering® USA Incorporated</div>
              {document.effectiveDate && (
                <div className="mt-1 text-xs text-slate-500">Effective Date: {document.effectiveDate}</div>
              )}
            </div>

            <div className="space-y-10">
              {document.sections.map((section) => (
                <section key={section.slug} id={section.slug} className="scroll-mt-32">
                  <h2 className="font-display text-lg font-extrabold tracking-tight text-slate-900 sm:text-xl">
                    {section.heading}
                  </h2>

                  {section.intro?.map((paragraph) => (
                    <p key={paragraph} className="mt-3 text-sm leading-7 text-slate-600">
                      {paragraph}
                    </p>
                  ))}

                  {section.list && (
                    <ul className="mt-4 grid grid-cols-1 gap-x-6 gap-y-2 sm:grid-cols-2">
                      {section.list.map((item) => (
                        <li key={item} className="flex items-start gap-2.5 text-sm text-slate-700">
                          <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#0A3DF0]" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  )}

                  {section.outro?.map((paragraph) => (
                    <p key={paragraph} className="mt-4 text-sm leading-7 text-slate-600">
                      {paragraph}
                    </p>
                  ))}

                  {section.address && (
                    <div className="mt-4 rounded-2xl border border-slate-200 bg-slate-50 p-5 text-sm leading-6 text-slate-700">
                      {section.address.map((line, index) => (
                        <div key={line} className={index === 0 ? 'font-bold text-slate-900' : undefined}>
                          {line}
                        </div>
                      ))}
                      <div className="mt-4 flex flex-col gap-2 sm:flex-row sm:gap-6">
                        <a href="tel:+18322950545" className="inline-flex items-center gap-2 font-semibold text-[#0A3DF0] hover:underline">
                          <Phone className="h-4 w-4" />
                          +1 (832) 295-0545
                        </a>
                        <a href="mailto:info@gtsusainc.com" className="inline-flex items-center gap-2 font-semibold text-[#0A3DF0] hover:underline">
                          <Mail className="h-4 w-4" />
                          info@gtsusainc.com
                        </a>
                      </div>
                    </div>
                  )}
                </section>
              ))}
            </div>
          </article>
        </div>
      </section>
    </div>
  );
}
