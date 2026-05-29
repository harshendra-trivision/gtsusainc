import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ArrowLeft, CheckCircle2 } from 'lucide-react';
import { services } from '@/constants/services';

export async function generateStaticParams() {
  return services.map((svc) => ({ slug: svc.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const svc = services.find((s) => s.slug === slug);
  if (!svc) return {};

  return {
    title: svc.seoTitle,
    description: svc.seoDescription,
    keywords: svc.seoKeywords,
    alternates: { canonical: `https://gtsusainc.com/services/${slug}` }
  };
}

export default async function ServiceDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const svc = services.find((s) => s.slug === slug);
  if (!svc) notFound();

  return (
    <div className="flex flex-col w-full">
      <section className="border-b border-slate-800 bg-slate-950 py-20 text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Link href="/services" className="mb-6 inline-flex items-center gap-2 text-xs text-slate-300 hover:text-white">
            <ArrowLeft className="h-4 w-4" /> BACK TO ALL SOLUTIONS
          </Link>
          <h1 className="text-3xl font-extrabold sm:text-5xl">{svc.title}</h1>
          <p className="mt-3 max-w-3xl text-slate-300">{svc.tagline}</p>
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-12 lg:px-8">
          <div className="space-y-8 lg:col-span-8">
            <div>
              <h2 className="text-xl font-bold text-slate-900">What Problem Do We Solve?</h2>
              <p className="mt-2 text-sm text-slate-600">{svc.problemStatement}</p>
            </div>
            <div>
              <h2 className="text-xl font-bold text-slate-900">How Do We Solve It?</h2>
              <p className="mt-2 text-sm text-slate-600">{svc.approach}</p>
            </div>
            <div>
              <h2 className="text-xl font-bold text-slate-900">Capabilities</h2>
              <div className="mt-4 grid gap-4 sm:grid-cols-2">
                {svc.subServices.map((sub) => (
                  <div key={sub.title} className="rounded-lg border border-slate-200 p-4">
                    <h3 className="font-semibold text-slate-900">{sub.title}</h3>
                    <p className="mt-1 text-xs text-slate-600">{sub.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <aside className="space-y-6 lg:col-span-4">
            <div className="rounded-xl border border-slate-200 bg-slate-50 p-5">
              <h3 className="text-sm font-bold text-slate-900">Technologies We Use</h3>
              <ul className="mt-3 space-y-2 text-xs text-slate-700">
                {svc.technologies.map((tech) => (
                  <li key={tech} className="flex items-center gap-2">
                    <CheckCircle2 className="h-3.5 w-3.5 text-sky-600" /> {tech}
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-xl border border-slate-200 bg-white p-5">
              <h3 className="text-sm font-bold text-slate-900">Business Value</h3>
              <ul className="mt-3 space-y-2 text-xs text-slate-700">
                {svc.businessValue.map((item) => (
                  <li key={item} className="flex items-center gap-2">
                    <CheckCircle2 className="h-3.5 w-3.5 text-emerald-600" /> {item}
                  </li>
                ))}
              </ul>
            </div>
          </aside>
        </div>
      </section>
    </div>
  );
}
