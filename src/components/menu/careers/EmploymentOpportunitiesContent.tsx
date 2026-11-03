'use client';

import { useMemo, useState } from 'react';
import Image from 'next/image';
import { Briefcase, ChevronDown, Clock, Mail, MapPin, Search } from 'lucide-react';
import {
  careerOpenings,
  fairHiringNote,
  howToApply,
  workingRelationships,
  type CareerOpening,
  type JobLocation
} from '@/constants/careerOpenings';

type CareerPathway = {
  title: string;
  description: string;
  tags: string[];
  image: string;
};

const careerPathways: CareerPathway[] = [
  {
    title: 'USA Engineering Delivery Center',
    description:
      'Opportunities in core engineering, technical leadership, engineering design reviews, client coordination, project management, and quality oversight.',
    tags: ['Core Engineering', 'Technical Leadership', 'Project Delivery'],
    image: '/image/USA-enginerring-delivery-network.jpg'
  },
  {
    title: 'India Engineering Delivery Center',
    description:
      'Opportunities in detailed engineering, CAD modeling, drafting, technical documentation, PLM support, engineering data management, and production engineering services.',
    tags: ['Detailed Design', 'Engineering Production', 'Documentation'],
    // Resized WebP of india-enginerring-delivery-network.png (4.8 MB original).
    image: '/image/india-enginerring-delivery-network.webp'
  },
  {
    title: 'Dedicated Engineering Centers & CoEs',
    description:
      'Opportunities to work in dedicated client-aligned teams supporting specialized engineering programs, long-term projects, and client-specific engineering technologies.',
    tags: ['Dedicated Teams', 'Specialized Expertise', 'Long-Term Programs'],
    image: '/image/dedicated-enginerring-center&COES.jpg'
  }
];

type LocationFilter = 'All' | JobLocation;

const LOCATION_FILTERS: LocationFilter[] = ['All', 'USA', 'India'];

// Roles open in both countries count toward both the USA and the India totals.
const locationCounts: Record<LocationFilter, number> = {
  All: careerOpenings.length,
  USA: careerOpenings.filter((job) => job.locations.includes('USA')).length,
  India: careerOpenings.filter((job) => job.locations.includes('India')).length
};

const matchesSearch = (job: CareerOpening, query: string) =>
  [job.title, job.department, job.deliveryCenter, job.overview, ...job.required, ...job.preferred]
    .join(' ')
    .toLowerCase()
    .includes(query);

function JobDetailList({ title, items }: { title: string; items: string[] }) {
  return (
    <div>
      <h5 className="text-[11px] font-mono font-bold uppercase tracking-[0.18em] text-cyan-300">{title}</h5>
      <ul className="mt-2 space-y-1.5">
        {items.map((item) => (
          <li key={item} className="flex items-start gap-2 text-sm leading-6 text-slate-200">
            <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-cyan-400" />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function EmploymentOpportunitiesContent() {
  const [openRef, setOpenRef] = useState<string | null>(null);
  const [locationFilter, setLocationFilter] = useState<LocationFilter>('All');
  const [query, setQuery] = useState('');

  const visibleJobs = useMemo(() => {
    const normalized = query.trim().toLowerCase();
    return careerOpenings.filter(
      (job) =>
        (locationFilter === 'All' || job.locations.includes(locationFilter)) &&
        (!normalized || matchesSearch(job, normalized))
    );
  }, [locationFilter, query]);

  return (
    <div className="mt-5 space-y-6 text-[15px] leading-7 text-slate-700">
      {/* <h2 className="text-3xl font-semibold text-[#0056a4]">Employment Opportunities</h2> */}

      <p>
        GTS, with its experience, professional expertise and established network is committed to represent, market, promote, and provide
        after sales service to North American, European, & Asian industrial manufacturers in the Indian subcontinent.
      </p>
      <p>
        GTS, Also a technology enabler & a &quot;new age&quot; technology company offers the wide range of Engineering Solutions to a number of
        clients all over the world in Energy, Heavy Engineering and Machinery, Railways, Aerospace, Marine, Automotive, Medical, Consumer
        Products, Telecom and Utilities.
      </p>
      <p>
        We are in need of young, energetic, Motivated and experienced Engineers/Designers/Technologists for our clients based in USA and
        EU.
      </p>
      <p>
        Applicants should have 5-20 years of relevant experience (for Graduate Engineers) or 2-30 years (for Diploma Engineers) in
        reputed engineering organizations. Knowledge of applicable Indian and international Codes and Standards is essential.
      </p>

      <section className="space-y-4">
        <h3 className="text-2xl font-semibold text-[#0056a4]">Build Your Future with GTS Engineering</h3>
        <p>
          At GTS Engineering, we believe talented engineers are the foundation of exceptional engineering solutions.
        </p>
        <p>
          We bring together experienced professionals, emerging engineering talent, and technical specialists to support clients across
          product engineering, plant and process engineering, PLM and software engineering, geoinformatics, project engineering, and
          technical documentation.
        </p>
        <p>
          Our integrated USA–India delivery model combines core engineering expertise and client-facing technical leadership in the
          United States with scalable engineering design, production, documentation, and project delivery capabilities in India.
        </p>
        <p>
          For select clients, we also establish dedicated Engineering &amp; Design Centers and Centers of Excellence (CoEs) in India,
          offering long-term engineering support aligned with client technologies, engineering standards, and business objectives.
        </p>
        <p>
          Whether you are an experienced engineering professional or beginning your career, GTS Engineering offers opportunities to
          contribute to challenging engineering projects, develop technical capabilities, and collaborate with multidisciplinary teams.
        </p>
        <p className="font-semibold text-slate-900">
          Explore our career opportunities and become part of the GTS Engineering team.
        </p>
      </section>

      <section className="space-y-3">
        <h3 className="text-2xl font-semibold text-[#0056a4]">Our Engineering Career Pathways</h3>

        <div className="divide-y divide-slate-200 rounded-2xl border border-slate-200 bg-slate-50/60 px-4 sm:px-6">
          {careerPathways.map((pathway) => (
            <article key={pathway.title} className="flex flex-col gap-4 py-5 sm:flex-row sm:items-start sm:gap-6">
              <div className="relative aspect-[16/10] w-full shrink-0 overflow-hidden rounded-2xl shadow-sm sm:w-56">
                <Image
                  src={pathway.image}
                  alt={pathway.title}
                  fill
                  sizes="(min-width: 640px) 224px, 100vw"
                  className="object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>
              <div className="min-w-0">
                <h4 className="text-lg font-semibold text-slate-900">{pathway.title}</h4>
                <p className="mt-1.5">{pathway.description}</p>
                <p className="mt-2 text-xs text-slate-500">{pathway.tags.join(' · ')}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="space-y-4">
        <h3 className="text-2xl font-semibold text-[#0056a4]">Compensation &amp; Benefits</h3>
        <div className="space-y-4 rounded-2xl border border-blue-100 bg-blue-50/60 p-5 sm:p-6">
          <p>
            GTS Engineering offers competitive compensation packages aligned with prevailing industry standards in the United States and
            India.
          </p>
          <p>
            Compensation is determined based on the position, relevant experience, technical expertise, qualifications, work location, and
            project-specific requirements.
          </p>
          <p>
            For professionals working in our USA Engineering Delivery Center, India Engineering Delivery Center, and dedicated client
            Engineering Centers of Excellence (CoEs), compensation packages are structured to reflect local market conditions, individual
            capabilities, and role responsibilities.
          </p>
          <p>
            Additional benefits and professional development opportunities are provided in accordance with applicable company policies and
            local employment regulations.
          </p>
        </div>
      </section>

      <section className="space-y-3">
        <h3 className="text-2xl font-semibold text-[#0056a4]">Current Openings</h3>

        <div className="overflow-hidden rounded-3xl border border-cyan-500/20 bg-gradient-to-b from-[#0b2340] to-[#071a31] p-4 text-white shadow-xl shadow-blue-950/20 sm:p-6">
          <div className="flex flex-wrap items-baseline justify-between gap-2">
            <h4 className="font-display text-lg font-bold sm:text-xl">Explore Career Opportunities</h4>
            <span className="text-xs font-medium text-slate-400">
              {locationCounts.USA} in USA · {locationCounts.India} in India
            </span>
          </div>

          {/* Search */}
          <label className="relative mt-4 block">
            <span className="sr-only">Search engineering positions</span>
            <Search className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
            <input
              type="search"
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder="Search engineering positions..."
              className="w-full rounded-full border border-white/15 bg-white/5 py-2.5 pl-11 pr-4 text-sm text-white placeholder:text-slate-400 outline-none transition focus:border-cyan-400/60 focus:bg-white/10"
            />
          </label>

          {/* Location filter with job counts */}
          <div role="tablist" aria-label="Filter by location" className="mt-4 flex flex-wrap gap-2">
            {LOCATION_FILTERS.map((filter) => {
              const isActive = locationFilter === filter;
              return (
                <button
                  key={filter}
                  type="button"
                  role="tab"
                  aria-selected={isActive}
                  onClick={() => setLocationFilter(filter)}
                  className={`inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-bold transition-colors ${
                    isActive ? 'bg-white text-[#0b2340]' : 'bg-white/5 text-slate-300 hover:bg-white/10 hover:text-white'
                  }`}
                >
                  {filter}
                  <span
                    className={`rounded-full px-1.5 py-0.5 text-[10px] tabular-nums ${
                      isActive ? 'bg-[#0b2340] text-white' : 'bg-white/10 text-slate-300'
                    }`}
                  >
                    {locationCounts[filter]}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Job cards */}
          <div className="mt-4 space-y-3">
            {visibleJobs.map((job) => {
              const isOpen = openRef === job.ref;
              return (
                <article
                  key={job.ref}
                  className={`overflow-hidden rounded-2xl border transition-colors ${
                    isOpen ? 'border-cyan-400/40 bg-white/[0.07]' : 'border-white/10 bg-white/[0.04] hover:border-cyan-400/30 hover:bg-white/[0.06]'
                  }`}
                >
                  <button
                    type="button"
                    onClick={() => setOpenRef(isOpen ? null : job.ref)}
                    aria-expanded={isOpen}
                    className="flex w-full items-center justify-between gap-3 px-4 py-4 text-left sm:px-5"
                  >
                    <span className="min-w-0">
                      <span className="block font-semibold leading-snug text-white">{job.title}</span>
                      <span className="mt-1 block text-xs text-slate-400">
                        {job.department} · {job.locations.join(' / ')} · {job.experience}
                      </span>
                    </span>
                    <ChevronDown
                      className={`h-5 w-5 shrink-0 text-cyan-300 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
                    />
                  </button>

                  {isOpen && (
                    <div className="space-y-5 border-t border-white/10 px-4 py-5 sm:px-5">
                      <p className="text-sm leading-6 text-slate-200">{job.overview}</p>

                      <dl className="grid gap-3 text-xs sm:grid-cols-3">
                        {[
                          { icon: MapPin, label: 'Delivery center', value: job.deliveryCenter },
                          { icon: Clock, label: 'Suggested experience', value: job.experience },
                          { icon: Briefcase, label: 'Employment type', value: job.employmentType }
                        ].map(({ icon: Icon, label, value }) => (
                          <div key={label} className="rounded-xl border border-white/10 bg-white/5 p-3">
                            <dt className="flex items-center gap-1.5 font-semibold text-cyan-300">
                              <Icon className="h-3.5 w-3.5" />
                              {label}
                            </dt>
                            <dd className="mt-1 text-slate-200">{value}</dd>
                          </div>
                        ))}
                      </dl>

                      <p className="text-xs leading-5 text-slate-400">
                        <span className="font-semibold text-slate-300">Location / work model: </span>
                        {job.workModel}
                      </p>

                      <div className="grid gap-5 lg:grid-cols-3">
                        <JobDetailList title="Key responsibilities" items={job.responsibilities} />
                        <JobDetailList title="Required qualifications" items={job.required} />
                        <JobDetailList title="Preferred qualifications" items={job.preferred} />
                      </div>

                      <a
                        href={`mailto:hr@gtsusainc.com?subject=${encodeURIComponent(`Application: ${job.title} (Ref. ${job.ref})`)}`}
                        className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 px-5 py-2.5 text-sm font-bold text-white shadow-lg shadow-cyan-500/20 transition-transform hover:scale-105"
                      >
                        <Mail className="h-4 w-4" />
                        Apply for this role
                      </a>
                    </div>
                  )}
                </article>
              );
            })}

            {visibleJobs.length === 0 && (
              <p className="rounded-2xl border border-dashed border-white/15 px-4 py-8 text-center text-sm text-slate-400">
                No positions match your search. Try another keyword or location.
              </p>
            )}
          </div>

          <p className="mt-4 text-xs text-slate-400">
            Showing {visibleJobs.length} of {careerOpenings.length} positions
          </p>
        </div>
      </section>

      <div className="space-y-3 rounded-xl border border-blue-100 bg-blue-50 px-4 py-4 text-slate-800">
        <p>
          <span className="font-semibold text-slate-900">How to apply: </span>
          {howToApply} You can also email your application to{' '}
          <a href="mailto:hr@gtsusainc.com" className="font-semibold text-[#0056a4] hover:underline">
            hr@gtsusainc.com
          </a>
          .
        </p>
        <p className="text-sm text-slate-600">{workingRelationships}</p>
        <p className="text-xs text-slate-500">{fairHiringNote}</p>
      </div>
    </div>
  );
}
