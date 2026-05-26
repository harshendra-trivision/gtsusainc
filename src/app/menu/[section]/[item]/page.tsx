import Link from 'next/link';
import Image from 'next/image';
import { FileText, FolderOpen } from 'lucide-react';

interface MenuSubPageProps {
  params: Promise<{
    section: string;
    item: string;
  }>;
}

const aboutUsSubmenu = [
  'Who We Are',
  'Our Team',
  'Vision & Mission',
  'Quality',
  'The GTS Engineering Advantage'
];

const whoWeAreParagraphs = [
  "A specialist in Engineering Design & Manufacturing Service Practices, GTS Engineering USA Incorporated (GTS) is a 'new age' technology company that offers young & dynamic engineering solutions in the field of Energy – Oil & Gas and Power, Heavy Engineering & Machinery, Marine, Consumer, Medical Devices, Telecom & Utilities, Aerospace & Automotive. Serving clients over a wide range of engineering segments, we work hard to maintain the highest quality standards and deliver world-class engineering solutions.",
  "GTS is an end-to-end solution provider that offers design & engineering solutions spanning across the entire Product & Plant Life Cycle Management and Support Services spectrum using a collaborative model. From designing a product to prototyping, automation, data documentation, instrumentation & controls, manufacturing support, vendor management, and precision machining, we provide support across the complete life cycle of the product & plant. We add value to client's product development process by shortening product cycle time, increasing design automation and establishing best-suited international standards & practices.",
  "We strive to help increase client's profitability & offer cost-effective solution by reducing time-to-market, product & plant development costs, extending capacity and maximizing engineering resources availability.",
  "Being a midsize company, we benefit from our ability to take quick decisions and rapidly adapt to the changing needs of our clients to deliver services that can meet their quality standards. Thus, we mould ourselves to become a 'virtual extension' to our client's engineering & design team and work in close collaboration with them to emphasize on innovation and value addition.",
  "GTS leverages a wide array of technology driven tools and platforms to deliver world-class engineering solutions in Industrial Design, CAD, CAM, and CAE in a variety of industries. Through our Global Product Development framework and our on-site/off-shore/on-shore/hybrid models, we leverage our local presence & global reach to support globalization initiatives for our customers.",
  "What differentiates us from other companies is our dedication to not only attract new clients but also nurture long-term relationships with the existing clients. We are proud to have onboard a pool of talented engineers with significant experience in various industries, platforms, and tools. We have a perfect combination of new talent with fresh ideas as well as engineers with experience of working on international clients' projects. To add to it, we have world-class infrastructure that help in data security, IP protection, security process & procedures, back-up systems and facilities, communications & collaboration system and overall ability to scale operation for project of all sizes."
];

const advisors = [
  {
    name: 'Robert Kostelnik, Senior Advisor',
    paragraphs: [
      "GTS Engineering USA Incorporated (GTS) is a strategic business partner of GlenRock RP. Robert (Bob) Kostelnik, Principal at GlenRock RP is a senior advisor of GTS USA. Prior to his association with GlenRock, Bob was President and CEO of Cinatra Clean Technologies, Inc. as well a founder of the company. Cinatra is the exclusive provider in the United States of the Oreco automated tank cleaning system to the refining, pipeline and terminal sectors of the energy industry. From 1992 thru 2007, Bob held several senior positions with CITGO Petroleum Corp. including Vice-President Refining, Vice-President Shared Services and Vice-President Health, Safety, Environmental and Security. Previously, Bob held various management positions with Shell Oil Company during his 15 year career with the company.",
      "Bob also serves on the Board of Directors of Methanex Corp. where he is a member of the Responsible Care and Corporate Governance Committees and HollyFrontier Corp. where he chairs the Health, Safety, Environmental and Public Policy Committee. Bob is a Port Commissioner for the Port of Corpus Christi Authority where he is a member of the Audit Committee. Bob is member of the Board of the Associated Chemical Industry of Texas where he serves as the Secretary/Treasurer. He is also a member of the Academy of Mechanical and Aerospace Engineering at the Missouri University of Science and Technology. Bob holds a Bachelor of Science (Mechanical Engineering) degree from the University of Missouri at Rolla and is a Registered Professional Engineer."
    ]
  },
  {
    name: 'Jason Kisch – Director Strategic Planning (Houston, Texas)',
    paragraphs: [
      'Over 40 years of professional experience in process design, systems engineering, plant operations, performance testing, troubleshooting and optimization. Major fields of experience are: Process Design of LNG Export/Import Terminal Facilities, Offshore Facilities including Marine Well Containment Systems (Modular Capture Vessels), FPSOs and platforms, onshore oil and gas pipelines including pump station and marine terminal facilities, crude processing facilities including modularized systems in arctic environment, refinery and process industrial facilities including hydrogen plant, sulfur recovery and tail gas treating units, gas processing plants, aromatic waste and VOC emission minimization (NESHAP) facilities.'
    ]
  },
  {
    name: 'Galen M. D., P.E. – Director Engineering Operations (Houston, Texas)',
    paragraphs: [
      'Project/Operations Engineer/Engineering Manager with extensive years of successful international/domestic project management, project engineering, process design, supervision, fabrication and construction experience, including assignments in the U.S., Asia, Australia, Africa, North Sea, and Gulf of Mexico. Comprehensive Project, Engineering, Construction and Operations work scopes have included Owner/Contractor EPC management of fast-track Project delivery of process development, engineering design, fabrication, procurement, project engineering, project management, contracting, startup and operation, and cost/schedule control of offshore/onshore Midstream oil and gas projects, compression and production facilities. Also, delivered EPC detailed designs for pipelines, product terminals, gas processing plants, power generation facilities, environmental and wastewater treating plants, and pump and compressor stations valued at $1MM-$250MM, with majority ranging $5MM-15MM.'
    ]
  },
  {
    name: 'Steve Kimmel – Director Process (Houston, Texas)',
    paragraphs: [
      'Forty five years’ experience in process engineering and facilities design, construction and production plant support experience in the process and mechanical design, project engineering, project management, and plant operations. Involvement at plant level and as staff consultant. Areas of technical specialty include compressor and pump stations, petrochemical plants, gas plants and pipelines.'
    ]
  },
  {
    name: 'Craig LaForce – Executive Vice President Technology & Business Development (Houston, Texas)',
    paragraphs: [
      'Craig has worked in the Industrial gases industry since 1982, initially as a process engineer, progressing to facility operations and then to various sales and business development roles in oil and gas processing, LNG, NGL, refining, and cryogenics. Craig has an MBA from Fairleigh Dickinson and BS ChE from Penn State and has authored several patents relating to gas turbine carbon capture, Blast Furnace oxygen enrichment methods.',
      'Experienced technically in distillation, molecular sieves, sulfur removal systems, thermodynamic cycle design and optimization, centrifugal and reciprocating compression, motors, gas turbine generators, steam systems, filtration, reactors, control systems and developing practical new technologies and solutions, to meet customer needs. Craig strives to structure mutually beneficial and equitable contractual arrangements, apportioning risks and rewards as appropriate.'
    ]
  }
];

const managementTeam = [
  'Ramesh Chandra – Group Chairman',
  'Gaurav Kumar – President & CEO (North America)',
  'Utkarsh Agarwal – Director Operations (US & India)',
  'Aakash Kumar – Vice President (Southeast Asia)',
  'Rahul Sharda – Manager HR & Administration (Asia Pacific)',
  'Arshia Agarwal – Sr. Executive Finance & Accounts (Asia Pacific)'
];

const toTitleCase = (value: string) =>
  decodeURIComponent(value)
    .split('-')
    .filter(Boolean)
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join(' ');

export default async function MenuSubPage({ params }: MenuSubPageProps) {
  const { section, item } = await params;
  const isWhoWeArePage = section === 'about-us' && item === 'who-we-are';
  const isOurTeamPage = section === 'about-us' && item === 'our-team';

  return (
    <main className="min-h-screen bg-[linear-gradient(180deg,#edf3fb_0%,#f8fafc_38%,#ffffff_100%)] py-10 sm:py-14">
        <section className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-2xl border border-slate-200 bg-white/95 p-4 shadow-xl shadow-slate-200/60 sm:p-8 lg:p-10">
            <div className="grid gap-8 lg:grid-cols-12">
              <aside className="lg:col-span-4 xl:col-span-3">
                <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
                  <div className="bg-gradient-to-r from-[#0056a4] to-[#0a6bc7] px-5 py-3">
                    <h2 className="text-lg font-semibold text-white">About Us</h2>
                  </div>
                  <nav className="p-2">
                    {aboutUsSubmenu.map((subItem) => {
                      const subSlug = toSlug(subItem);
                      const isActive = section === 'about-us' && item === subSlug;
                      return (
                        <Link
                          key={subItem}
                          href={`/menu/about-us/${subSlug}`}
                          className={`flex items-center rounded-lg px-3 py-2.5 text-sm transition-colors ${isActive
                              ? 'bg-blue-50 font-semibold text-[#0056a4]'
                              : 'text-slate-700 hover:bg-slate-50 hover:text-slate-900'
                            }`}
                        >
                          <span className="mr-2 text-[10px]">▸</span>
                          {subItem}
                        </Link>
                      );
                    })}
                  </nav>
                </div>

                <div className="mt-5 space-y-3">
                  <Link
                    href="/downloads"
                    className="group flex items-center rounded-xl border border-slate-200 bg-gradient-to-r from-slate-100 to-slate-50 px-4 py-3 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
                  >
                    <div className="mr-3 rounded-lg bg-white p-2 text-[#0056a4] shadow-sm">
                      <FileText className="h-5 w-5" />
                    </div>
                    <span className="font-medium text-slate-800">Brochure</span>
                  </Link>
                  <Link
                    href="/case-studies"
                    className="group flex items-center rounded-xl border border-slate-200 bg-gradient-to-r from-slate-100 to-slate-50 px-4 py-3 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
                  >
                    <div className="mr-3 rounded-lg bg-white p-2 text-[#0056a4] shadow-sm">
                      <FolderOpen className="h-5 w-5" />
                    </div>
                    <span className="font-medium text-slate-800">Case Studies</span>
                  </Link>
                </div>
              </aside>

              <div className="lg:col-span-8 xl:col-span-9">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#0056a4]">{toTitleCase(section)}</p>
                <h1 className="mt-2 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
                  {isWhoWeArePage ? 'Who We Are' : toTitleCase(item)}
                </h1>

                {isWhoWeArePage ? (
                  <>
                    <p className="mt-4 max-w-3xl text-sm font-medium uppercase tracking-[0.14em] text-slate-500">
                      Engineering Design and Manufacturing Service Specialists
                    </p>
                    <div className="mt-6 h-px w-full bg-gradient-to-r from-[#0056a4] via-slate-300 to-transparent" />
                    <div className="mt-6 space-y-6 text-base leading-8 text-slate-700">
                      {whoWeAreParagraphs.map((paragraph) => (
                        <p key={paragraph}>{paragraph}</p>
                      ))}
                    </div>
                  </>
                ) : isOurTeamPage ? (
                  <div className="mt-5 space-y-8">
                    <h2 className="text-2xl font-semibold text-[#0056a4]">Advisors</h2>

                    <article className="grid gap-5 rounded-2xl border border-slate-200 bg-slate-50 p-5 md:grid-cols-[1fr_220px]">
                      <div className="space-y-4 text-[15px] leading-7 text-slate-700">
                        <h3 className="text-lg font-semibold text-[#0056a4]">{advisors[0].name}</h3>
                        {advisors[0].paragraphs.map((paragraph) => (
                          <p key={paragraph}>{paragraph}</p>
                        ))}
                      </div>
                      <div className="md:pl-2">
                        <Image
                          src="/image/our-team.jpg"
                          alt="Robert Kostelnik"
                          width={220}
                          height={280}
                          className="h-auto w-full rounded-lg border border-slate-200 bg-white object-cover"
                        />
                      </div>
                    </article>

                    <div className="space-y-6 text-[15px] leading-7 text-slate-700">
                      {advisors.slice(1).map((advisor) => (
                        <article key={advisor.name} className="space-y-3">
                          <h3 className="text-lg font-semibold text-[#0056a4]">{advisor.name}</h3>
                          {advisor.paragraphs.map((paragraph) => (
                            <p key={paragraph}>{paragraph}</p>
                          ))}
                        </article>
                      ))}
                    </div>

                    <div className="pt-2">
                      <h2 className="text-2xl font-semibold text-[#0056a4]">Management Team</h2>
                      <ul className="mt-5 space-y-3 text-[15px] text-slate-700">
                        {managementTeam.map((member) => (
                          <li key={member} className="rounded-lg border border-slate-200 bg-slate-50 px-4 py-3">
                            {member}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ) : (
                  <p className="mt-4 text-slate-600">
                    Content for this submenu is coming soon.
                  </p>
                )}
              </div>
            </div>
          </div>
        </section>
      </main>
  );
}

const toSlug = (value: string) =>
  value
    .toLowerCase()
    .replace(/&/g, 'and')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');
