import Link from 'next/link';
import { AnimatedSection, GradientButton, MagneticCard, PageHero } from '@/components/ui';

const aboutUsSubmenu = [
  { label: 'Who We Are', href: '/menu/about-us/who-we-are' },
  { label: 'Our Team', href: '/menu/about-us/our-team' },
  { label: 'Vision & Mission', href: '/menu/about-us/vision-and-mission' },
  { label: 'Quality', href: '/menu/about-us/quality' },
  { label: 'The GTS Engineering Advantage', href: '/menu/about-us/the-gts-engineering-advantage' },
  { label: 'Careers', href: '/menu/about-us/careers' }
];

export default function AboutPage() {
  return (
    <main className="min-h-screen">
      <PageHero
        eyebrow="About GTS"
        title="Engineering Expertise. Digital Intelligence. Global Delivery."
        description="GTS Engineering USA Incorporated is a technology enabler and engineering solutions partner supporting product, plant, digital, and project execution programs."
      />
      <section className="industrial-surface py-14 sm:py-20">
      <AnimatedSection as="div" className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-12">
          <aside className="lg:col-span-4 xl:col-span-3">
            <MagneticCard className="overflow-hidden rounded-[1.5rem] border border-slate-200 bg-white shadow-sm">
              <div className="bg-gradient-to-r from-slate-950 to-blue-900 px-5 py-4">
                <h2 className="text-lg font-semibold text-white">About Us</h2>
              </div>
              <nav className="p-2">
                {aboutUsSubmenu.map((item) => (
                  <Link
                    key={item.label}
                    href={item.href}
                    className="flex items-center rounded-lg px-3 py-2.5 text-sm text-slate-700 transition-colors hover:bg-slate-50 hover:text-slate-900"
                  >
                    <span className="mr-2 text-[10px] text-accent">▸</span>
                    {item.label}
                  </Link>
                ))}
              </nav>
            </MagneticCard>
          </aside>

          <div className="rounded-[2rem] border border-slate-200 bg-white/92 px-6 py-8 shadow-xl shadow-blue-100/50 backdrop-blur sm:px-10 sm:py-12 lg:col-span-8 xl:col-span-9">
            <h1 className="font-display text-3xl font-extrabold tracking-tight text-primary sm:text-4xl">About us</h1>

            <div className="mt-7 space-y-6 text-[15px] leading-8 text-slate-700">
              <p>
                GTS Engineering USA Incorporated (GTS), a technology enabler &amp; a &ldquo;new age&rdquo; technology company, maintains
                the highest standards of quality, enabling us to realistically strive for a Zero Defect Environment. GTS is an
                end-to-end solutions provider, offering design &amp; engineering services and solutions spanning the entire
                &ldquo;Product &amp; Plant Life Cycle Management and Support Services&rdquo; spectrum using a collaborative model and
                becoming a virtual extension of your design development &amp; engineering teams. As a medium size company we
                benefit from our ability to take quick decisions and rapidly adapt to the changing needs of our clients.
              </p>

              <p>
                We have an established State-of-the-art Engineering Center for executing projects on the QCD (Quality, Cost
                effectiveness &amp; Delivery) model that boasts of expert groups, engineering domains combined synergistically with
                collaboration project management &amp; quality processes. Given the engineering lineage of GTS as well as similarity
                in product &amp; plant life cycle with our offshore engineering teams have architecture of a unique road map to
                deliver Context to Core support for your design development goals in the short &amp; long term. We have existing
                investments, resources and process knowledge to support needs of your division both in sustaining as well as new
                product &amp; plant development.
              </p>
            </div>
            <div className="mt-8">
              <GradientButton href="/contact">Discuss Your Program</GradientButton>
            </div>
          </div>
        </div>
      </AnimatedSection>
      </section>
    </main>
  );
}
