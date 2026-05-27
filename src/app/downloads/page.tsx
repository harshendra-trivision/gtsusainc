import Link from 'next/link';
import Image from 'next/image';

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

export default function DownloadsPage() {
  return (
    <main className="bg-slate-50 py-12">
      <section className="mx-auto w-full max-w-6xl border-t-4 border-[#0056a4] bg-white px-5 py-6 shadow-sm sm:px-8">
        <h1 className="text-4xl font-bold text-[#0b355d]">Downloads</h1>
        <h2 className="mt-1 text-3xl font-semibold text-[#0b355d]">Flyers and Brochures</h2>

        <div className="mt-6 grid gap-8 lg:grid-cols-3">
          <div>
            <h3 className="text-xl font-semibold text-[#0b355d]">Industries</h3>
            <ul className="mt-3 space-y-1.5 text-[#0b355d]">
              {industries.map((item) => (
                <li key={item}>› {item}</li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-[#0b355d]">Offerings</h3>
            <ul className="mt-3 space-y-1.5 text-[#0b355d]">
              {offerings.map((item) => (
                <li key={item}>› {item}</li>
              ))}
            </ul>
          </div>

          <div className="flex items-start justify-center lg:justify-end">
            <div className="rounded-md border border-slate-200 p-2 shadow-md">
              <Image src="/image/gts-corporate-profile.png" alt="Corporate brochure" width={220} height={260} className="h-auto w-[220px]" />
            </div>
          </div>
        </div>

        <hr className="my-8 border-slate-200" />

        <h2 className="text-4xl font-bold text-[#0b355d]">Case Studies</h2>

        <div className="mt-4 grid gap-10 lg:grid-cols-2">
          <div>
            <h3 className="text-xl font-semibold text-[#0b355d]">CAD</h3>
            <ul className="mt-3 space-y-1.5 text-[#0b355d]">
              {cadStudies.map((item) => (
                <li key={item}>› {item}</li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-[#0b355d]">CAE</h3>
            <h4 className="mt-2 text-2xl font-semibold text-slate-700">a) Structural Analysis</h4>
            <ul className="mt-3 space-y-1.5 text-[#0b355d]">
              {caeStructural.map((item) => (
                <li key={item}>› {item}</li>
              ))}
            </ul>
          </div>
        </div>

        <hr className="my-8 border-slate-200" />

        <div className="grid gap-10 lg:grid-cols-2">
          <div>
            <h4 className="text-2xl font-semibold text-slate-700">b) CFD</h4>
            <ul className="mt-3 space-y-1.5 text-[#0b355d]">
              {caeCfd.map((item) => (
                <li key={item}>› {item}</li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-2xl font-semibold text-slate-700">Product Design</h3>
            <ul className="mt-3 space-y-1.5 text-[#0b355d]">
              {productDesign.map((item) => (
                <li key={item}>› {item}</li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-8">
          <Link href="/" className="text-sm font-semibold text-[#0056a4] hover:underline">
            Back to Home
          </Link>
        </div>
      </section>
    </main>
  );
}
