import { Mail, MapPin, Phone } from 'lucide-react';
import { AnimatedSection, GradientButton, MagneticCard, PageHero, SectionHeading } from '@/components/ui';

const captcha = 'GTS7';

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
        title="Let’s Discuss Your Engineering Program"
        description="Connect with GTS offices and delivery centers for plant, product, automation, documentation, and digital engineering requirements."
      />

      <section className="industrial-surface py-14 sm:py-20">
        <AnimatedSection as="div" className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-12">
            <div className="space-y-6 lg:col-span-6">
              <SectionHeading
                eyebrow="Global Access"
                title="US presence with international delivery reach"
                description="Use the contact details or inquiry form to route your request to the relevant engineering team."
                align="left"
              />
              <div className="grid gap-5">
                {primaryLocations.map((location) => (
                  <LocationCard key={location.title} {...location} />
                ))}
              </div>
            </div>

            <div className="lg:col-span-6">
              <MagneticCard className="rounded-[2rem] p-6 sm:p-8">
                <h2 className="text-2xl font-extrabold text-primary">Write to Us</h2>
                <p className="mt-2 text-sm leading-7 text-slate-500">
                  Share a concise scope and GTS will follow up through the most relevant engineering function.
                </p>

                <form className="mt-6 grid gap-4">
                  <label className="space-y-2 text-sm font-semibold text-slate-800">
                    <span>Name</span>
                    <input className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 outline-none transition focus:border-accent focus:bg-white" placeholder="Your name" />
                  </label>

                  <label className="space-y-2 text-sm font-semibold text-slate-800">
                    <span>Company / Address</span>
                    <input className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 outline-none transition focus:border-accent focus:bg-white" placeholder="Company and location" />
                  </label>

                  <div className="grid gap-4 sm:grid-cols-2">
                    <label className="space-y-2 text-sm font-semibold text-slate-800">
                      <span>Phone no</span>
                      <input className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 outline-none transition focus:border-accent focus:bg-white" placeholder="Phone number" />
                    </label>

                    <label className="space-y-2 text-sm font-semibold text-slate-800">
                      <span>Email</span>
                      <input type="email" className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 outline-none transition focus:border-accent focus:bg-white" placeholder="name@company.com" />
                    </label>
                  </div>

                  <label className="space-y-2 text-sm font-semibold text-slate-800">
                    <span>Enquiry</span>
                    <textarea
                      className="min-h-[140px] w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 outline-none transition focus:border-accent focus:bg-white"
                      placeholder="Tell us about your project, industry, timelines, and service needs."
                    />
                  </label>

                  <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
                    <p className="text-sm font-semibold text-slate-800">Prove that you are human using the captcha below:</p>
                    <div className="mt-3 inline-block rounded-xl border border-slate-300 bg-white px-4 py-2 text-2xl font-extrabold tracking-[0.35em] text-slate-900">
                      {captcha}
                    </div>
                  </div>

                  <GradientButton type="submit" className="w-full">Send Engineering Inquiry</GradientButton>
                </form>
              </MagneticCard>
            </div>
          </div>

          <div className="mt-14">
            <SectionHeading
              eyebrow="Delivery Centers"
              title="Engineering execution across GTS locations"
              description="GTS maintains delivery and manufacturing support locations for scalable project execution."
            />
            <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
              {deliveryLocations.map((location) => (
                <LocationCard key={location.title} {...location} />
              ))}
            </div>
          </div>

          <div className="mt-12 grid gap-4 rounded-[2rem] border border-slate-200 bg-white/90 p-6 shadow-xl shadow-blue-100/50 md:grid-cols-2">
            <a href="mailto:info@gtsusainc.com" className="flex items-center gap-3 text-sm font-bold text-primary transition hover:text-accent">
              <Mail className="h-5 w-5 text-accent" />
              info@gtsusainc.com
            </a>
            <div className="flex items-center gap-3 text-sm font-bold text-primary">
              <Phone className="h-5 w-5 text-accent" />
              USA: 832-295-0545 / 832-295-0587
            </div>
          </div>
        </AnimatedSection>
      </section>
    </main>
  );
}
