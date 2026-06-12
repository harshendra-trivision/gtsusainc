import Link from 'next/link';
import { ArrowUpRight, BriefcaseBusiness, Globe2, GraduationCap, Users } from 'lucide-react';
import { AnimatedSection, GradientButton, MagneticCard, PageHero, SectionHeading } from '@/components/ui';

const careerLinks = [
  { label: 'HR Values', href: '/menu/careers/hr-values' },
  { label: 'Life @ GTS Engineering', href: '/menu/careers/life-gts-engineering' },
  { label: 'Why Join Us', href: '/menu/careers/why-join-us' },
  { label: 'Employment Opportunities', href: '/menu/careers/employment-opportunities' }
];

const careerPillars = [
  {
    title: 'Engineering Depth',
    description: 'Work across product, plant, process, documentation, simulation, and automation programs.',
    icon: BriefcaseBusiness
  },
  {
    title: 'Global Delivery',
    description: 'Collaborate with US and India teams on industrial programs for global customers.',
    icon: Globe2
  },
  {
    title: 'Continuous Learning',
    description: 'Grow technical capability through domain tools, project exposure, and quality systems.',
    icon: GraduationCap
  },
  {
    title: 'Collaborative Culture',
    description: 'Join multidisciplinary teams built around accountability, responsiveness, and engineering rigor.',
    icon: Users
  }
];

export default function CareersPage() {
  return (
    <main className="min-h-screen">
      <PageHero
        eyebrow="Careers"
        title="Build Industrial Engineering Capability With GTS"
        description="Join a multidisciplinary engineering environment focused on technical quality, delivery discipline, and global industrial transformation."
      >
        <GradientButton href="/menu/careers/employment-opportunities">View Opportunities</GradientButton>
      </PageHero>

      <section className="industrial-surface py-16 sm:py-24">
        <AnimatedSection as="div" className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Career Tracks"
            title="A practical environment for serious engineering talent"
            description="GTS career content remains available through the existing routes, now presented through a cleaner enterprise pathway."
          />

          <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
            {careerPillars.map((pillar) => {
              const Icon = pillar.icon;

              return (
                <MagneticCard key={pillar.title} className="p-6">
                  <Icon className="h-7 w-7 text-accent" />
                  <h2 className="mt-5 text-lg font-extrabold text-primary">{pillar.title}</h2>
                  <p className="mt-3 text-sm leading-7 text-slate-500">{pillar.description}</p>
                </MagneticCard>
              );
            })}
          </div>

          <div className="mt-12 grid grid-cols-1 gap-4 md:grid-cols-2">
            {careerLinks.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="group flex items-center justify-between rounded-2xl border border-slate-200 bg-white/90 p-5 text-sm font-bold text-slate-800 shadow-sm transition-all hover:-translate-y-1 hover:border-cyan-300 hover:text-accent hover:shadow-xl hover:shadow-blue-100/60"
              >
                <span>{item.label}</span>
                <ArrowUpRight className="h-4 w-4 text-slate-400 transition-colors group-hover:text-accent" />
              </Link>
            ))}
          </div>
        </AnimatedSection>
      </section>
    </main>
  );
}
