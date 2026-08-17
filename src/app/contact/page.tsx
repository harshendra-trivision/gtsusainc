import Link from 'next/link';
import {
  ArrowRight,
  Briefcase,
  ExternalLink,
  FileText,
  Handshake,
  HelpCircle,
  Mail,
  MapPin,
  MessageSquare,
  Phone,
  Upload,
  type LucideIcon
} from 'lucide-react';
import { contactSections } from '@/constants/contactContent';
import { industriesMegaMenu } from '@/constants/industriesMenu';
import { AnimatedSection, GradientButton, MagneticCard, PageHero, SectionHeading } from '@/components/ui';

const categoryIcons: Record<string, LucideIcon> = {
  MessageSquare,
  FileText,
  Handshake,
  Briefcase,
  HelpCircle
};

const serviceOptions = [
  'Engineering Consulting',
  'Front-End Engineering & Design (FEED)',
  'EPCM Support',
  'Construction Engineering',
  'Digital Engineering',
  'Process Safety Studies',
  'AI & Automation Solutions',
  'Technology Representation',
  'Other'
];

const timelineOptions = ['Immediate (0–3 months)', 'Short-term (3–6 months)', 'Medium-term (6–12 months)', 'Long-term (12+ months)', 'Planning stage'];

const budgetOptions = ['Under $100K', '$100K – $500K', '$500K – $1M', '$1M – $5M', '$5M+', 'Prefer not to say'];

const primaryLocations = [
  {
    title: 'GTS Engineering USA Incorporated',
    lines: ['Physical Address:', '888 W Sam Houston Pkwy S, Suite 225 B,', 'Houston, TX 77042-1909', '832-295-0545', '832-295-0587', 'info@gtsusainc.com', 'skype – gaurav_blue']
  },
  {
    title: 'GTS – Singapore Sales Office',
    lines: ['26 Bayshore Road, 21-01,', 'Singapore 469972']
  },
  {
    title: 'GTS – Middle East Sales Office',
    lines: ['3/4, 1st Floor, Sercon Building,', 'Musa Bin Nussair Street,', 'Riyadh, Saudi Arabia']
  }
];

const deliveryLocations = [
  {
    title: 'Global Delivery Center',
    lines: ['GTS Techno Projects (India) P Limited', 'An ISO 9001:2015 certified company', '(A subsidiary of GTS Engineering USA Incorporated)', 'G – 41, Sector – 63,', 'Noida, U.P. – 201301', 'INDIA']
  },
  {
    title: 'GTS Manufacturing – Adomac Technicals',
    lines: ['G – 230, Sector – 63,', 'Noida, U.P., India – 201309']
  },
  {
    title: 'GTS India – Gurgaon',
    lines: ['Unit 405, Sector – 21,', 'Suncity Trade Tower', 'Gurgaon, Haryana, India – 122016']
  },
  {
    title: 'GTS India – Haridwar',
    lines: ['Kankhal, Haridwar,', 'Uttarakhand, India – 249408']
  },
  {
    title: 'GTS India – GOA',
    lines: ['A5, RR Towers,', 'Near Vodafone Gallery,', 'Mapusa, Goa, India- 403507']
  }
];

function LocationCard({ title, lines }: { title: string; lines: string[] }) {
  return (
    <MagneticCard className="p-5">
      <div className="mb-3 flex items-center gap-2">
        <MapPin className="h-5 w-5 text-accent" />
        <h3 className="font-bold text-primary">{title}</h3>
      </div>
      <div className="space-y-1 text-sm leading-6 text-slate-600">
        {lines.map((line) => (
          <p key={line}>{line}</p>
        ))}
      </div>
    </MagneticCard>
  );
}

export default function ContactPage() {
  return (
    <main className="min-h-screen">
      <PageHero
        eyebrow="Contact GTS"
        title="Let's Build the Future Together"
        description="Whether you're planning a new project, seeking engineering expertise, exploring technology partnerships, or looking for career opportunities, our team is ready to help. Connect with GTS Engineering to discuss how we can support your business objectives with innovative, reliable, and high-quality engineering solutions."
      />

      {/* Request Consultation / Request Proposal / Partner With Us / Join Our Team / General Inquiry */}
      <section className="industrial-surface py-16 sm:py-24">
        <div className="mx-auto max-w-7xl space-y-16 px-4 sm:px-6 lg:px-8">
          {contactSections.map((section, index) => {
            const Icon = categoryIcons[section.icon] ?? MessageSquare;

            return (
              <AnimatedSection key={section.slug} as="div" id={section.slug} className="scroll-mt-32">
                <MagneticCard className="rounded-[2rem] border border-slate-200 bg-white p-7 shadow-sm sm:p-10">
                  <div className="flex items-start gap-4">
                    <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-[#2563eb] to-[#22d3ee] text-white shadow-lg shadow-blue-100">
                      <Icon className="h-6 w-6" />
                    </span>
                    <div>
                      <span className="text-xs font-mono font-semibold uppercase tracking-[0.22em] text-accent">
                        {String(index + 1).padStart(2, '0')}
                      </span>
                      <h2 className="mt-1 font-display text-2xl font-extrabold text-primary sm:text-3xl">{section.label}</h2>
                      <p className="mt-1 text-sm font-semibold italic text-slate-500">{section.tagline}</p>
                    </div>
                  </div>

                  <p className="mt-6 max-w-3xl text-sm leading-relaxed text-slate-500">{section.intro}</p>

                  {section.items.length > 0 && (
                    <div className="mt-6">
                      <div className="mb-3 text-[10px] font-mono font-semibold uppercase tracking-widest text-slate-400">{section.listHeading}</div>
                      <div className="flex flex-wrap gap-2">
                        {section.items.map((item) => (
                          <span key={item} className="rounded-full bg-slate-50 px-3 py-1.5 text-[11px] font-semibold text-slate-700 ring-1 ring-slate-200">
                            {item}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}

                  <div className="mt-7">
                    {section.ctaHref.startsWith('#') ? (
                      <a
                        href={section.ctaHref}
                        className="inline-flex items-center gap-1.5 rounded-full bg-accent/10 px-4 py-2.5 text-xs font-semibold text-accent transition-colors hover:bg-accent hover:text-white"
                      >
                        {section.ctaLabel}
                        <ArrowRight className="h-3.5 w-3.5" />
                      </a>
                    ) : (
                      <Link
                        href={section.ctaHref}
                        className="inline-flex items-center gap-1.5 rounded-full bg-accent/10 px-4 py-2.5 text-xs font-semibold text-accent transition-colors hover:bg-accent hover:text-white"
                      >
                        {section.ctaLabel}
                        <ArrowRight className="h-3.5 w-3.5" />
                      </Link>
                    )}
                  </div>
                </MagneticCard>
              </AnimatedSection>
            );
          })}
        </div>
      </section>

      {/* Office Locations */}
      <section id="office-locations" className="scroll-mt-32 bg-white py-16 sm:py-24">
        <AnimatedSection as="div" className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Office Locations"
            title="Global Presence. Local Support."
            description="GTS Engineering serves clients across North America and internationally through a collaborative global delivery model, combining local project leadership with worldwide engineering expertise."
            align="left"
          />
          <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {primaryLocations.map((location) => (
              <LocationCard key={location.title} {...location} />
            ))}
          </div>

          <div className="mt-14">
            <SectionHeading
              eyebrow="Delivery Centers"
              title="Engineering execution across GTS locations"
              description="GTS maintains delivery and manufacturing support locations for scalable project execution."
              align="left"
            />
            <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
              {deliveryLocations.map((location) => (
                <LocationCard key={location.title} {...location} />
              ))}
            </div>
          </div>
        </AnimatedSection>
      </section>

      {/* Contact Form */}
      <section className="industrial-surface py-16 sm:py-24">
        <AnimatedSection as="div" className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <p className="text-center text-sm font-semibold text-slate-500">
            Serving clients across North America and supporting global projects through our international engineering network.
          </p>

          <MagneticCard id="contact-form" className="mt-8 scroll-mt-32 rounded-[2rem] p-6 sm:p-10">
            <h2 className="text-2xl font-extrabold text-primary">Tell Us About Your Project</h2>
            <p className="mt-2 text-sm leading-7 text-slate-500">
              Share your project details and GTS will route your inquiry to the most relevant engineering team.
            </p>

            <form className="mt-8 grid gap-5">
              <div className="grid gap-5 sm:grid-cols-2">
                <label className="space-y-2 text-sm font-semibold text-slate-800">
                  <span>Name</span>
                  <input className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 outline-none transition focus:border-accent focus:bg-white" placeholder="Your full name" />
                </label>
                <label className="space-y-2 text-sm font-semibold text-slate-800">
                  <span>Company</span>
                  <input className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 outline-none transition focus:border-accent focus:bg-white" placeholder="Company name" />
                </label>
              </div>

              <div className="grid gap-5 sm:grid-cols-2">
                <label className="space-y-2 text-sm font-semibold text-slate-800">
                  <span>Job Title</span>
                  <input className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 outline-none transition focus:border-accent focus:bg-white" placeholder="Your role" />
                </label>
                <label className="space-y-2 text-sm font-semibold text-slate-800">
                  <span>Country</span>
                  <input className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 outline-none transition focus:border-accent focus:bg-white" placeholder="Country" />
                </label>
              </div>

              <div className="grid gap-5 sm:grid-cols-2">
                <label className="space-y-2 text-sm font-semibold text-slate-800">
                  <span>Email</span>
                  <input type="email" className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 outline-none transition focus:border-accent focus:bg-white" placeholder="name@company.com" />
                </label>
                <label className="space-y-2 text-sm font-semibold text-slate-800">
                  <span>Phone</span>
                  <input className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 outline-none transition focus:border-accent focus:bg-white" placeholder="Phone number" />
                </label>
              </div>

              <div className="grid gap-5 sm:grid-cols-2">
                <label className="space-y-2 text-sm font-semibold text-slate-800">
                  <span>Service of Interest</span>
                  <select className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 outline-none transition focus:border-accent focus:bg-white" defaultValue="">
                    <option value="" disabled>
                      Select a service
                    </option>
                    {serviceOptions.map((option) => (
                      <option key={option} value={option}>
                        {option}
                      </option>
                    ))}
                  </select>
                </label>
                <label className="space-y-2 text-sm font-semibold text-slate-800">
                  <span>Industry</span>
                  <select className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 outline-none transition focus:border-accent focus:bg-white" defaultValue="">
                    <option value="" disabled>
                      Select an industry
                    </option>
                    {industriesMegaMenu.map((industry) => (
                      <option key={industry.slug} value={industry.label}>
                        {industry.label}
                      </option>
                    ))}
                  </select>
                </label>
              </div>

              <label className="space-y-2 text-sm font-semibold text-slate-800">
                <span>Project Description</span>
                <textarea
                  className="min-h-[140px] w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 outline-none transition focus:border-accent focus:bg-white"
                  placeholder="Tell us about your project, scope, and objectives."
                />
              </label>

              <div className="grid gap-5 sm:grid-cols-2">
                <label className="space-y-2 text-sm font-semibold text-slate-800">
                  <span>Estimated Project Timeline</span>
                  <select className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 outline-none transition focus:border-accent focus:bg-white" defaultValue="">
                    <option value="" disabled>
                      Select a timeline
                    </option>
                    {timelineOptions.map((option) => (
                      <option key={option} value={option}>
                        {option}
                      </option>
                    ))}
                  </select>
                </label>
                <label className="space-y-2 text-sm font-semibold text-slate-800">
                  <span>Estimated Budget (Optional)</span>
                  <select className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 outline-none transition focus:border-accent focus:bg-white" defaultValue="">
                    <option value="" disabled>
                      Select a range
                    </option>
                    {budgetOptions.map((option) => (
                      <option key={option} value={option}>
                        {option}
                      </option>
                    ))}
                  </select>
                </label>
              </div>

              <label className="space-y-2 text-sm font-semibold text-slate-800">
                <span>Preferred Contact Method</span>
                <div className="flex flex-wrap gap-4 pt-1 text-sm font-medium text-slate-600">
                  {['Email', 'Phone', 'Either'].map((method) => (
                    <label key={method} className="flex items-center gap-2">
                      <input type="radio" name="preferredContact" value={method} className="h-4 w-4 accent-accent" />
                      {method}
                    </label>
                  ))}
                </div>
              </label>

              <label className="space-y-2 text-sm font-semibold text-slate-800">
                <span>File Upload (RFP, drawings, specifications)</span>
                <div className="flex items-center gap-3 rounded-xl border border-dashed border-slate-300 bg-slate-50 px-4 py-4 text-sm text-slate-500">
                  <Upload className="h-4 w-4 shrink-0 text-accent" />
                  <input type="file" className="w-full text-xs text-slate-500 file:mr-3 file:rounded-lg file:border-0 file:bg-accent/10 file:px-3 file:py-2 file:text-xs file:font-semibold file:text-accent" />
                </div>
              </label>

              <GradientButton type="submit" className="w-full">
                Send Inquiry
              </GradientButton>
            </form>
          </MagneticCard>
        </AnimatedSection>
      </section>

      {/* Quick Contact Information + Social */}
      <section className="border-t border-slate-100 bg-white py-16 sm:py-20">
        <AnimatedSection as="div" className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-4 rounded-[2rem] border border-slate-200 bg-white/90 p-6 shadow-xl shadow-blue-100/50 md:grid-cols-2">
            <a href="mailto:info@gtsusainc.com" className="flex items-center gap-3 text-sm font-bold text-primary transition hover:text-accent">
              <Mail className="h-5 w-5 text-accent" />
              info@gtsusainc.com
            </a>
            <div className="flex items-center gap-3 text-sm font-bold text-primary">
              <Phone className="h-5 w-5 text-accent" />
              USA: 832-295-0545 / 832-295-0587
            </div>
          </div>

          <div className="mt-6 flex items-center justify-center gap-3">
            <span className="text-xs font-mono uppercase tracking-widest text-slate-400">Follow GTS Engineering</span>
            <a
              href="#"
              aria-label="GTS Engineering on LinkedIn"
              className="inline-flex items-center gap-1.5 rounded-full border border-slate-200 bg-white px-4 py-2 text-xs font-semibold text-primary transition-colors hover:border-accent/40 hover:text-accent"
            >
              LinkedIn
              <ExternalLink className="h-3.5 w-3.5" />
            </a>
          </div>
        </AnimatedSection>
      </section>
    </main>
  );
}
