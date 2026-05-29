import Link from 'next/link';
import { ArrowRight, Brain, Factory, ShieldCheck, Sparkles, TrendingUp } from 'lucide-react';
import { services } from '@/constants/services';
import { industries } from '@/constants/industries';

const flagshipSolutions = [
  'Smart Refinery Solutions',
  'Digital Plant Operations',
  'Predictive Maintenance Platform',
  'Intelligent Process Optimization',
  'AI-Based Asset Monitoring',
  'Industrial Cybersecurity Integration'
];

const innovationRoadmap = [
  'Artificial Intelligence',
  'Digital Twins',
  'Industrial Analytics',
  'Industry 4.0',
  'Edge AI',
  'Cloud Engineering',
  'Smart Infrastructure'
];

export default function HomePage() {
  return (
    <div className="flex flex-col w-full">
      <section className="relative overflow-hidden border-b border-slate-800 bg-slate-950 py-24 text-white">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(56,189,248,0.16),transparent_35%),radial-gradient(circle_at_80%_20%,rgba(37,99,235,0.20),transparent_42%)]" />
        <div className="relative z-10 mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-12 lg:px-8">
          <div className="space-y-6 lg:col-span-7">
            <div className="inline-flex items-center gap-2 rounded-full border border-sky-400/30 bg-sky-400/10 px-3 py-1 text-xs uppercase tracking-wider text-sky-300">
              <Sparkles className="h-3.5 w-3.5" /> AI-Powered Industrial Engineering
            </div>
            <h1 className="text-4xl font-extrabold leading-tight sm:text-5xl">AI-Powered Engineering & Digital Transformation Solutions</h1>
            <p className="max-w-2xl text-sm text-slate-300 sm:text-base">
              Helping industrial, energy, and manufacturing companies optimize operations, reduce costs, and accelerate engineering workflows through automation, AI, and industrial software.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link href="/contact" className="inline-flex items-center gap-2 rounded-lg bg-sky-500 px-5 py-3 text-sm font-semibold text-white hover:bg-sky-400">
                Book Consultation <ArrowRight className="h-4 w-4" />
              </Link>
              <Link href="/services" className="rounded-lg border border-slate-600 px-5 py-3 text-sm font-semibold text-slate-100 hover:border-slate-400 hover:text-white">
                Explore Solutions
              </Link>
            </div>
          </div>
          <div className="lg:col-span-5">
            <div className="rounded-2xl border border-slate-700 bg-slate-900/70 p-6">
              <p className="text-xs uppercase tracking-widest text-slate-400">Website Positioning</p>
              <p className="mt-3 text-lg font-bold text-white">One Brand. Engineering + Automation + AI + Industrial Software + Digital Transformation.</p>
              <p className="mt-3 text-sm text-slate-300">Built for enterprise outcomes: efficiency, automation, cost optimization, operational intelligence.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-10 flex items-end justify-between">
            <div>
              <p className="text-xs uppercase tracking-widest text-sky-700">Core Solutions</p>
              <h2 className="mt-2 text-3xl font-bold text-slate-900">Solutions, Not Staffing</h2>
            </div>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {services.map((svc) => (
              <Link key={svc.slug} href={`/services/${svc.slug}`} className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-0.5 hover:border-sky-300 hover:shadow-md">
                <h3 className="text-lg font-bold text-slate-900">{svc.title}</h3>
                <p className="mt-2 text-sm text-slate-600">{svc.tagline}</p>
                <div className="mt-4 text-xs font-semibold text-sky-700">Explore solution</div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-slate-950 py-20 text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p className="text-xs uppercase tracking-widest text-sky-300">Why GTS</p>
          <div className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {[
              'US leadership + India delivery model',
              'Faster turnaround and cost optimization',
              'AI-enabled engineering workflows',
              'Scalable multi-disciplinary project support'
            ].map((item) => (
              <div key={item} className="rounded-xl border border-slate-700 bg-slate-900 p-5 text-sm text-slate-200">{item}</div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p className="text-xs uppercase tracking-widest text-sky-700">Industries</p>
          <h2 className="mt-2 text-3xl font-bold text-slate-900">Industry-Specific Transformation Programs</h2>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {industries.map((industry) => (
              <Link key={industry.slug} href={`/industries/${industry.slug}`} className="rounded-xl border border-slate-200 p-5 hover:border-sky-300">
                <h3 className="font-bold text-slate-900">{industry.title}</h3>
                <p className="mt-2 text-sm text-slate-600">{industry.tagline}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-slate-50 py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p className="text-xs uppercase tracking-widest text-sky-700">Solution Portfolio</p>
          <div className="mt-6 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {flagshipSolutions.map((solution) => (
              <div key={solution} className="rounded-xl border border-slate-200 bg-white p-4 text-sm font-medium text-slate-800">{solution}</div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-slate-900 py-20 text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p className="text-xs uppercase tracking-widest text-sky-300">Innovation & Emerging Technologies</p>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {innovationRoadmap.map((item) => (
              <div key={item} className="rounded-lg border border-slate-700 bg-slate-800 p-4 text-sm">{item}</div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
