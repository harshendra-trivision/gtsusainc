import Link from 'next/link';
import Image from 'next/image';
import { ArrowLeft, Download, FileText } from 'lucide-react';
import { AnimatedSection, GradientButton, MagneticCard, PageHero, SectionHeading } from '@/components/ui';

const industries = [
  'Energy',
  'Heavy Engineering & Machinery',
  'Marine',
  'Consumer',
  'Medical Devices',
  'Telecom',
  'Utilities',
  'Aerospace',
  'Automotive'
];

const offerings = [
  'Product Engineering',
  'Plant & Process Engineering',
  'PLM & Software Engineering',
  'Geoinformatics Engineering',
  'Project Management & Controls',
  'Document Engineering',
  'Project Engineering'
];

const cadStudies = [
  'Castings – Compressor Housing',
  'Compressor Assembly Modeling',
  'Design of Plastic Drill Cover',
  'Freezer Full Shelf Redesign',
  'Ice Twister Redesign'
];

const caeStructural = [
  'Connecting Rod Optimization',
  'Spacer & Pin of Engine Fan',
  'Main Shaft Fatigue Analysis',
  'Exhaust System Modal Analysis',
  'Discharge manifold – Modal / Linear Static Analysis',
  'Discharge Head Thermal Analysis',
  'Differential carrier – Torque Analysis'
];

const caeCfd = [
  'Compressor Muffler Flow',
  'Compressor Discharge Manifold',
  '2 Stroke Engine Flow Path Optimization',
  'Carrier – 2D Case Analysis For Laminar /Turbulent Flow',
  'APD-Pipe Bend Analysis – Flow'
];

const productDesign = [
  'Screw Chiller Design',
  'Telepac Unit Design',
  'Bus Seating Design',
  'Cardio Tread Mill',
  'Industrial Boiler Redesign',
  'Solar Casserole Design'
];

function ListCard({ title, items }: { title: string; items: string[] }) {
  return (
    <MagneticCard className="h-full p-6">
      <div className="mb-4 flex items-center gap-3">
        <span className="rounded-xl bg-accent/10 p-2 text-accent">
          <FileText className="h-5 w-5" />
        </span>
        <h3 className="text-lg font-extrabold text-primary">{title}</h3>
      </div>
      <ul className="space-y-2.5 text-sm text-slate-600">
        {items.map((item) => (
          <li key={item} className="flex gap-2">
            <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </MagneticCard>
  );
}

export default function DownloadsPage() {
  return (
    <main className="min-h-screen">
      <PageHero
        eyebrow="Downloads"
        title="Flyers, Brochures, and Engineering Case Studies"
        description="Review GTS capability areas, industry coverage, and representative CAD, CAE, CFD, and product design case study topics."
      >
        <GradientButton href="/documents/Compressor Housing.pdf">Download Sample PDF</GradientButton>
      </PageHero>

      <section className="industrial-surface py-16 sm:py-24">
        <AnimatedSection as="div" className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-12">
            <div className="lg:col-span-8">
              <SectionHeading
                eyebrow="Capability Materials"
                title="Structured technical content for industrial buyers"
                description="Use these sections as the download hub for GTS brochures, engineering flyers, and project documents."
                align="left"
              />

              <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2">
                <ListCard title="Industries" items={industries} />
                <ListCard title="Offerings" items={offerings} />
              </div>
            </div>

            <div className="lg:col-span-4">
              <MagneticCard className="overflow-hidden p-3">
                <div className="relative aspect-[4/5] overflow-hidden rounded-[1.25rem] bg-slate-950">
                  <Image src="/image/showcase1.png" alt="Corporate capability brochure" fill className="object-cover opacity-80" />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/30 to-transparent" />
                  <div className="absolute bottom-5 left-5 right-5">
                    <div className="text-xs font-mono uppercase tracking-[0.22em] text-cyan-200">Capability Statement</div>
                    <h2 className="mt-2 text-2xl font-extrabold text-white">GTS Engineering Profile</h2>
                    <a
                      href="/documents/Compressor Housing.pdf"
                      className="mt-5 inline-flex items-center gap-2 rounded-xl bg-white px-4 py-2 text-xs font-bold text-primary transition hover:bg-cyan-50"
                    >
                      <Download className="h-4 w-4" />
                      Download PDF
                    </a>
                  </div>
                </div>
              </MagneticCard>
            </div>
          </div>

          <div className="mt-14">
            <SectionHeading
              eyebrow="Case Studies"
              title="CAD, CAE, CFD, and product design references"
              description="Representative study areas for engineering analysis, conversion, redesign, and optimization programs."
            />
            <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2">
              <ListCard title="CAD" items={cadStudies} />
              <ListCard title="CAE · Structural Analysis" items={caeStructural} />
              <ListCard title="CAE · CFD" items={caeCfd} />
              <ListCard title="Product Design" items={productDesign} />
            </div>
          </div>

          <div className="mt-10">
            <Link href="/" className="inline-flex items-center gap-2 text-sm font-bold text-accent transition hover:text-accent-dark">
              <ArrowLeft className="h-4 w-4" />
              Back to Home
            </Link>
          </div>
        </AnimatedSection>
      </section>
    </main>
  );
}
