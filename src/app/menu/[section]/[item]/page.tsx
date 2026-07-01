import Link from 'next/link';
import Image from 'next/image';
import { ArrowUpRight, BriefcaseBusiness, FileText, FolderOpen, Globe2, GraduationCap, Users } from 'lucide-react';
import TechnologyCompetenciesContent from '@/components/menu/delivery/TechnologyCompetenciesContent';
import GlobalEngagementModelsContent from '@/components/menu/delivery/GlobalEngagementModelsContent';
import CollaborativeCommunicationContent from '@/components/menu/delivery/CollaborativeCommunicationContent';
import QualityManagementSystemContent from '@/components/menu/delivery/QualityManagementSystemContent';
import HrValuesContent from '@/components/menu/delivery/HrValuesContent';
import InfrastructureContent from '@/components/menu/delivery/InfrastructureContent';
import LifeAtGtsContent from '@/components/menu/careers/LifeAtGtsContent';
import WhyJoinUsContent from '@/components/menu/careers/WhyJoinUsContent';
import EmploymentOpportunitiesContent from '@/components/menu/careers/EmploymentOpportunitiesContent';
import { AnimatedSection, GradientButton, MagneticCard, SectionHeading } from '@/components/ui';

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
  'The GTS Engineering Advantage',
  'Careers'
];

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

const serviceOfferingsSubmenu = [
  'Product Engineering',
  'Plant & Process Engineering',
  'PLM & Software Engineering',
  'Geoinformatics Engineering',
  'Project Management & Controls',
  'Project Engineering',
  'Document Engineering'
];

const industriesSubmenu = [
  'Energy – Oil & Gas and Power',
  'Heavy Engineering & Machinery',
  'Railways',
  'Marine',
  'Consumer',
  'Medical Devices',
  'Telecom',
  'Utilities',
  'Aerospace',
  'Automotive'
];

const technologySourcingSubmenu = [
  'Technology Representation',
  'Sourcing solutions',
  'Procurement Services'
];

const deliveryEnablersSubmenu = [
  'Technology & Competencies',
  'Global Engagement Models',
  'Collaborative Communication',
  'Quality Management System',
  'HR Values',
  'Infrastructure'
];

const careersSubmenu = [
  'HR Values',
  'Life @ GTS Engineering',
  'Why Join Us',
  'Employment Opportunities'
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

const visionMissionContent = {
  vision:
    '"Collaboratively delivering Innovative Manufacturing & Plant Solutions to enable our customers effectively lead their markets."',
  mission:
    '"To co-create values & opportunities of growth for our customers through harnessing our passion & innovation."',
  philosophy1:
    '“To deliver Context & Core approach as Engineering is a Highly Collaborative Process, involves IP & requires Domain Knowledge.”',
  philosophy2: '“FOCUS ON CORE; USE GTS ENGINEERS FOR CONTEXT WORK”',
  coreContext:
    '*Core Processes in an organization are those that differentiate you and your offering so that the customers select you over the competition. Everything else is Context.',
  proposition:
    `"Integrating seamlessly as a 'virtual extension' of the Engineering & Design team of the client, leveraging on a multi-location approach to Manufacturing & Plant Design & Engineering Solutions with our collaborative model which emphasizes innovation & value."`,
  bullets: [
    'Leveraging on our engineering skill, GTS has formed a Engineering Services group which provides worldwide services in Mechanical Design, Plant Design Automation & Technical Documentation.',
    'Aim to cover complete services spectrum from Industrial Design to Original Design Manufacturing & Plant Design Automation with technical publishing of all the engineered goods.',
    'Conceptualization through manufacturing capability.',
    'Creation of Centers of Excellence',
    'Engineering Disciplines',
    'Technology Platforms',
    'Domains/ Verticals',
    'To evolve from a discrete services model to an integrated & innovative solution model'
  ]
};

const qualityObjectives = [
  'To reduce Time to Market by providing our customers with on-time deliverables which meet their quality specifications just as they want',
  'To ensure security & confidentiality of our customers’ data with the strictest adherence to our Information Security and Management System',
  'To deliver excellent engineering solutions by using cutting-edge tools, technologies and methodologies',
  'To offer cost-effective solutions and enhance customer profitability',
  'To delight customers with delivery excellence and consistent quality',
  'To attract, train and retain talented professionals through active employee engagement & effective corporate policies',
  'To become a leader in engineering services through continual process improvement.',
  'To achieve operational excellence through continuous training and adoption of the latest technologies'
];

const gtsAdvantages = [
  {
    title: 'Reduced Time to Market',
    body: 'We have proved time and again that we can design and deliver a product faster than our competitors. Our shorter time cycle for product and plant development makes us preferred choice for our clients.'
  },
  {
    title: 'Skilled Engineers',
    body: 'At GTS, we have a pool of highly skilled & talented engineers knowledgeable in both hardware & software technology. It enhances our ability to design superior products in the most cost-effective manner.'
  },
  {
    title: 'Enhance Client’s Internal Resources',
    body: 'We have gained invaluable expertise by working on a wide range of diverse and complex projects. Our clients benefit from our expertise and gain knowledge that enhances our client’s internal resource and help them focus on critical and core areas.'
  },
  {
    title: 'Lower Total Cost of Ownership',
    body: 'We help the client in identifying better opportunities and take best business decisions. We help them design and manufacture products that are profitable. The best part is that our client owns the IP once the project is complete. We offer a lower "Total Cost of Ownership" (TCO) in the Engineering & Design process.'
  }
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
  const isVisionMissionPage = section === 'about-us' && item === 'vision-and-mission';
  const isQualityPage = section === 'about-us' && item === 'quality';
  const isGtsAdvantagePage = section === 'about-us' && item === 'the-gts-engineering-advantage';
  const isCareersPage = section === 'about-us' && item === 'careers';
  const isProductEngineeringPage = section === 'service-offerings' && item === 'product-engineering';
  const isPlantProcessEngineeringPage =
    section === 'service-offerings' &&
    (item === 'plant-and-process-engineering' || item === 'plant-process-engineering');
  const isPlmSoftwareEngineeringPage =
    section === 'service-offerings' &&
    (item === 'plm-and-software-engineering' || item === 'plm-software-engineering');
  const isGeoinformaticsEngineeringPage =
    section === 'service-offerings' &&
    (item === 'geoinformatics-engineering' || item === 'geo-informatics-engineering');
  const isProjectManagementControlsPage =
    section === 'service-offerings' &&
    (item === 'project-management-and-controls' || item === 'project-management-controls');
  const isProjectEngineeringPage =
    section === 'service-offerings' && (item === 'project-engineering' || item === 'project-enginerring');
  const isDocumentEngineeringPage =
    section === 'service-offerings' && (item === 'document-engineering' || item === 'document-enginerring');
  const isEnergyIndustryPage =
    section === 'industries' && (item === 'energy-oil-gas-and-power' || item === 'energy-oil-and-gas-and-power');
  const isHeavyEngineeringMachineryPage =
    section === 'industries' &&
    (item === 'heavy-engineering-and-machinery' || item === 'heavy-engineering-machinery');
  const isRailwaysIndustryPage =
    section === 'industries' && (item === 'railways' || item === 'railway');
  const isMarineIndustryPage =
    section === 'industries' && (item === 'marine' || item === 'marin');
  const isConsumerIndustryPage = section === 'industries' && item === 'consumer';
  const isMedicalDevicesIndustryPage =
    section === 'industries' && (item === 'medical-devices' || item === 'medical-device');
  const isUtilitiesIndustryPage = section === 'industries' && item === 'utilities';
  const isAerospaceIndustryPage = section === 'industries' && item === 'aerospace';
  const isAutomotiveIndustryPage =
    section === 'industries' && (item === 'automotive' || item === 'automotives');
  const isSourcingSolutionsPage =
    section === 'technology-sourcing' &&
    (item === 'sourcing-solutions' || item === 'procurement-services' || item === 'proceurement-service');
  const isTechnologyRepresentationPage =
    section === 'technology-sourcing' && item === 'technology-representation';
  const isTechnologyCompetenciesPage =
    section === 'delivery-enablers' && item === 'technology-and-competencies';
  const isGlobalEngagementModelsPage =
    section === 'delivery-enablers' && item === 'global-engagement-models';
  const isCollaborativeCommunicationPage =
    section === 'delivery-enablers' && item === 'collaborative-communication';
  const isQualityManagementSystemPage =
    section === 'delivery-enablers' && item === 'quality-management-system';
  const isHrValuesPage =
    (section === 'delivery-enablers' && item === 'hr-values') ||
    (section === 'careers' && item === 'hr-values');
  const isInfrastructurePage = section === 'delivery-enablers' && item === 'infrastructure';
  const isLifeAtGtsPage = section === 'careers' && item === 'life-gts-engineering';
  const isWhyJoinUsPage =
    section === 'careers' && (item === 'why-join-us' || item === 'why-we-us');
  const isEmploymentOpportunitiesPage = section === 'careers' && item === 'employment-opportunities';
  const sidebarTitle = section === 'service-offerings' ? 'Services' : 'About Us';
  const sidebarSubmenu =
    section === 'service-offerings'
      ? serviceOfferingsSubmenu
      : section === 'industries'
        ? industriesSubmenu
        : section === 'technology-sourcing'
          ? technologySourcingSubmenu
          : section === 'delivery-enablers'
            ? deliveryEnablersSubmenu
            : section === 'careers'
              ? careersSubmenu
          : aboutUsSubmenu;
  const resolvedSidebarTitle =
    section === 'service-offerings'
      ? 'Services'
      : section === 'industries'
        ? 'Industries'
        : section === 'technology-sourcing'
          ? 'Technology & Sourcing'
          : section === 'delivery-enablers'
            ? 'Delivery Enablers'
            : section === 'careers'
              ? 'Careers'
        : sidebarTitle;

  return (
    <main className="industrial-surface min-h-screen py-10 sm:py-14">
      <section className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <AnimatedSection as="div" className="rounded-[2rem] border border-slate-200 bg-white/95 p-4 shadow-xl shadow-blue-100/60 backdrop-blur sm:p-8 lg:p-10">
          <div className="grid gap-8 lg:grid-cols-12">
            <aside className="lg:col-span-4 xl:col-span-3">
              <MagneticCard className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
                <div className="bg-gradient-to-r from-slate-950 to-blue-900 px-5 py-3">
                  <h2 className="text-lg font-semibold text-white">{resolvedSidebarTitle}</h2>
                </div>
                <nav className="p-2">
                  {sidebarSubmenu.map((subItem) => {
                    const subSlug = toSlug(subItem);
                    const isActive = item === subSlug;
                    return (
                      <Link
                        key={subItem}
                        href={`/menu/${section}/${subSlug}`}
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
              </MagneticCard>

              <div className="mt-5 space-y-3">
                {isProductEngineeringPage && (
                  <>
                    <div className="overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm">
                      <div className="bg-[#0056a4] px-3 py-2 text-sm font-semibold text-white">Our Showcase</div>
                      <Image src="/image/showcase1.png" alt="Showcase 1" width={320} height={220} className="h-auto w-full object-cover" />
                    </div>
                    <div className="overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm">
                      <div className="bg-[#0056a4] px-3 py-2 text-sm font-semibold text-white">Our Showcase</div>
                      <Image src="/image/showcase2.jpg" alt="Showcase 2" width={320} height={220} className="h-auto w-full object-cover" />
                    </div>
                    <div className="overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm">
                      <div className="bg-[#0056a4] px-3 py-2 text-sm font-semibold text-white">Our Showcase</div>
                      <Image src="/image/showcase3.png" alt="Showcase 3" width={320} height={220} className="h-auto w-full object-cover" />
                    </div>
                  </>
                )}

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
              ) : isVisionMissionPage ? (
                <div className="mt-5 space-y-8">
                  <section className="space-y-3">
                    <h2 className="text-2xl font-semibold text-[#0056a4]">Our Vision:</h2>
                    <p className="text-[15px] leading-7 text-slate-700">{visionMissionContent.vision}</p>
                  </section>

                  <section className="space-y-3">
                    <h2 className="text-2xl font-semibold text-[#0056a4]">Our Mission:</h2>
                    <p className="text-[15px] leading-7 text-slate-700">{visionMissionContent.mission}</p>
                  </section>

                  <section className="space-y-3">
                    <h2 className="text-2xl font-semibold text-[#0056a4]">Our Business Philosophy:</h2>
                    <p className="text-[15px] leading-7 text-slate-700">{visionMissionContent.philosophy1}</p>
                    <p className="text-center text-base font-bold tracking-wide text-slate-900">{visionMissionContent.philosophy2}</p>
                    <p className="text-[15px] leading-7 text-slate-700">{visionMissionContent.coreContext}</p>
                  </section>

                  <section className="space-y-4">
                    <h3 className="text-3xl font-semibold leading-tight text-[#254b85]">
                      “Context to Core” Approach: Expand Your Competitive Edge
                    </h3>
                    <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white p-3 sm:p-5">
                      <Image
                        src="/image/engineering-capicity-maturity-roadmap.png"
                        alt="Engineering Capability Maturity Roadmap"
                        width={1100}
                        height={700}
                        className="h-auto w-full object-contain"
                      />
                    </div>
                  </section>

                  <section className="space-y-4">
                    <h2 className="text-2xl font-semibold text-[#0056a4]">Our Value Proposition:</h2>
                    <p className="text-[15px] leading-7 text-slate-700">{visionMissionContent.proposition}</p>

                    <ul className="space-y-2 text-[15px] leading-7 text-slate-700">
                      {visionMissionContent.bullets.map((point, index) => {
                        const isSubPoint = index >= 4 && index <= 6;
                        return (
                          <li
                            key={point}
                            className={`${isSubPoint ? 'ml-6 list-none' : 'ml-5 list-disc'}`}
                          >
                            {isSubPoint ? `– ${point}` : point}
                          </li>
                        );
                      })}
                    </ul>
                  </section>
                </div>
              ) : isQualityPage ? (
                <div className="mt-5 space-y-6">
                  <section className="space-y-3">
                    <h2 className="text-2xl font-semibold text-[#0056a4]">Our Quality Policy:</h2>
                    <p className="text-xl font-semibold leading-8 text-slate-800">
                      &ldquo;We are committed to deliver innovative solutions that delight Customers through deployment of robust processes.&rdquo;
                    </p>
                  </section>

                  <section className="space-y-4 text-[15px] leading-8 text-slate-700">
                    <p>
                      At GTS Engineering USA Incorporated (GTS), we understand that each customer has unique quality requirements.
                      To meet these varied ranges of customer&apos;s requirement, we emphasize on working with their quality department.
                      Long list of satisfied customer is the testimony of our timely & quality deliveries. In fact, most of our customers
                      have availed our services more than once, which is because we believe in delivering quality not only first time
                      but every time you choose to work with us.
                    </p>
                    <p>
                      While we focus to meet customer requirements on time, quality parameters never take a back seat. We strive for
                      continuous improvement and never hesitate to take even toughest quality challenges.
                    </p>
                  </section>

                  <section className="space-y-4">
                    <h2 className="text-2xl font-semibold text-[#0056a4]">Our Quality Objectives:</h2>
                    <ul className="ml-5 space-y-2 text-[15px] leading-8 text-slate-700">
                      {qualityObjectives.map((objective) => (
                        <li key={objective} className="list-disc">
                          {objective}
                        </li>
                      ))}
                    </ul>
                  </section>

                  <p className="text-[15px] leading-8 text-slate-700">
                    All in all, we commit as an organization to continuously create & implement quality management system to achieve
                    business excellence in our work environment as well as in the business processes we employ.
                  </p>
                </div>
              ) : isGtsAdvantagePage ? (
                <div className="mt-5 space-y-7 text-[15px] leading-8 text-slate-700">
                  <p>
                    At GTS Engineering USA Incoporated (GTS), we combine experience of completed projects and zest of learning new
                    technologies to deliver engineering excellence. Whether you are looking to increase the efficiency of an existing
                    manufacturing process or want to design the first prototype of something completely new, our skilled team, latest
                    infrastructure, and technical competency help us deliver the best engineering solutions.
                  </p>

                  <p>
                    As a client of GTS, you can take advantage of its flexible delivery options and choose to work with us in discrete
                    phases of Product Development, such as Design Detailing, Solid Modeling or FEA. You can also choose to strategically
                    partner with us in a global concurrent engineering model for value engineering, reverse engineering or new product
                    design initiatives.
                  </p>

                  <section className="space-y-4">
                    <h2 className="text-2xl font-semibold text-[#0056a4]">Working with GTS can assure you the following advantages:</h2>
                    <div className="space-y-4">
                      {gtsAdvantages.map((advantage) => (
                        <article key={advantage.title} className="rounded-xl border border-slate-200 bg-slate-50 px-4 py-3">
                          <h3 className="text-lg font-semibold text-slate-900">{advantage.title}:</h3>
                          <p className="mt-1 text-slate-700">{advantage.body}</p>
                        </article>
                      ))}
                    </div>
                  </section>

                  <section className="space-y-4">
                    <h2 className="text-2xl font-semibold text-[#0056a4]">What Enables US to Offer you ‘The GTS Advantage’</h2>
                    <p>
                      We our diligent efforts and significant experience in the industry, we have been able to create our differentiators.
                      These differentiators not only give us an edge among our competitors, but also do they enable us to offer you a
                      suite of advantages. These differentiators are:
                    </p>
                  </section>

                  <section className="space-y-4">
                    <article className="rounded-xl border border-slate-200 bg-slate-50 px-4 py-3">
                      <h3 className="text-lg font-semibold text-slate-900">Our Tripod of Strength</h3>
                      <p className="mt-1">
                        The tripod of strength, as we refer to it, consists of the core strengths we have gathered in the field of
                        engineering services and manufacturing, plus a sound financial backup. The synergy of these three strengths
                        enables us to deliver the time-tested and cost-effective solutions to our clients’ demands.
                      </p>
                    </article>

                    <article className="rounded-xl border border-slate-200 bg-slate-50 px-4 py-3">
                      <h3 className="text-lg font-semibold text-slate-900">Our Corporate Support</h3>
                      <p className="mt-1">
                        We are committed to create long-term value for our shareholders, employees, and customers. Being a corporate-level
                        initiative, founded to deliver strategic value, GTS enjoys dedicated corporate support of the group.
                      </p>
                    </article>

                    <article className="rounded-xl border border-slate-200 bg-slate-50 px-4 py-3">
                      <h3 className="text-lg font-semibold text-slate-900">Strategic vision</h3>
                      <p className="mt-1">
                        We are envisioned to work with our clients adhering to a ‘win-win philosophy’, which means that our clients get
                        the value for every penny they spend and we continue to leverage on the lessons learned and expand upon the
                        opportunities created by virtue of the quality deliveries each time.
                      </p>
                    </article>

                    <article className="rounded-xl border border-slate-200 bg-slate-50 px-4 py-3">
                      <h3 className="text-lg font-semibold text-slate-900">Corporate Strength</h3>
                      <p className="mt-1">
                        We proactively invest in enablement of the technology-driven offshore delivery, which has been made possible due
                        to our financial stability. We derive value from our technology reliance coupled with the matured and time-tested
                        processes, and utilize our extensive market reach as a corporate to strengthen our foundation continually.
                      </p>
                    </article>
                  </section>

                  <p className="font-medium text-slate-800">
                    If you are looking for a trusted engineering partner and looking forward to the standards that our company offers,
                    we would love to hear from you. Simply call us or contact us today!
                  </p>
                </div>
              ) : isCareersPage ? (
                <div className="mt-5 space-y-8">
                  <p className="text-[15px] leading-8 text-slate-700">
                    Join a multidisciplinary engineering environment focused on technical quality, delivery discipline, and global industrial transformation.
                  </p>
                  <div className="mt-4 flex flex-col gap-4 sm:flex-row sm:items-center">
                    <GradientButton href="/menu/careers/employment-opportunities">
                      View Opportunities
                    </GradientButton>
                  </div>

                  <div className="mt-6 h-px w-full bg-gradient-to-r from-[#0056a4] via-slate-300 to-transparent" />

                  <div className="mt-6">
                    <SectionHeading
                      eyebrow="Career Tracks"
                      title="A practical environment for serious engineering talent"
                      description="GTS career content remains available through the existing routes, now presented through a cleaner enterprise pathway."
                      align="left"
                    />

                    <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2">
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

                    <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2">
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
                  </div>
                </div>
              ) : isProductEngineeringPage ? (
                <div className="mt-5 space-y-6 text-[15px] leading-7 text-slate-700">
                  <p>
                    In today&apos;s era of cut-throat competition, it is vital for any business to innovate and develop products that
                    help your business jostle through the crowd of competitors. Goals of such innovations are reduced time-to-market,
                    lower TCO (Total Cost of Ownership), increased efficiency and richer feature sets.
                  </p>
                  <p>
                    We, at GTS Engineering USA Incorporated (GTS), are committed to support you at any stage of product design and
                    engineering so that you can channelize your core strengths to your business leverage. Working in close coordination
                    with our customers, we help reduce the overall timelines and the cost incurred while ensuring the optimum quality
                    of your products.
                  </p>
                  <p>
                    Our product engineering consultants possess vast experience in carrying out complete product lifecycles as well as
                    in contributing at various individual stages. Starting from product conceptualization and preliminary design, we are
                    able to step in at any stage until the finalization and market launch of your products. Whether it&apos;s about a new
                    product conception, product revamp, value engineering, reverse engineering or defect fixing, we are capable of
                    making your product engineering endeavours successful.
                  </p>

                  <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white p-3 sm:p-5">
                    <Image
                      src="/image/product.png"
                      alt="Engineering Capability Maturity Roadmap"
                      width={1100}
                      height={700}
                      className="h-auto w-full object-contain"
                    />
                  </div>

                  <p>
                    Equipped with a wide exposure numerous industries and an apt understanding of underlying processes, our product
                    engineering professionals are able to help you though the following phases of product engineering:
                  </p>

                  <section className="space-y-4">
                    <h2 className="text-xl font-semibold text-[#0056a4]">Ideation and Inception Stage</h2>
                    <p>
                      This phase involves study and analysis of a new idea or a response to a market demand. Along with analysis, an ECR
                      (Engineering Change Request) may be raised as per the situation&apos;s demand. Depending upon the situation, an ECN
                      (Engineering Change Notification) may be circulated amongst the stakeholders. We also perform reverse engineering
                      and ergonomics study to help you conceptualize a high quality product.
                    </p>

                    <h2 className="text-xl font-semibold text-[#0056a4]">Preliminary Design Stage</h2>
                    <p>
                      After a successful ideation, the preliminary design activities, such as concept design, material and component
                      selection, free body diagrams and preliminary calculations take place. Our experts ensure that the actual product
                      design starts off after a carefully performed preliminary design to ensure a higher quality product. They are also
                      able to offer you the collective advantage of all or few of the activities involved in preliminary design.
                    </p>

                    <h2 className="text-xl font-semibold text-[#0056a4]">Design Stage</h2>
                    <p>
                      This stage is the most crucial stage in the entire product engineering process as it involves brief and detailed
                      designing of the product using various tools and techniques. Along with CAD modelling and general arrangement, we
                      conduct assembly and detailing of the product, and employ Geometric dimensioning and tolerancing (GD & T)
                      techniques to recommend the right dimensions and permissible variations in the dimensions of the product under
                      question.
                    </p>

                    <h2 className="text-xl font-semibold text-[#0056a4]">Validation Stage</h2>
                    <p>
                      This stage involves several activities related to design validation and optimizations. For instance, our design
                      analysts are also able to perform FEA Driven design and FEA/CAE validations to give rise to the best-fit design
                      for the product. In addition, we balance the cost and value aspects by performing weight/cost optimizations and
                      value analysis if required. Our expertise lies in performing these activities individually or collectively to give
                      you a right fit solution to your precise needs.
                    </p>

                    <h2 className="text-xl font-semibold text-[#0056a4]">Tooling stage</h2>
                    <p>
                      We also perform tooling stage activities, such as designing tool & die, casting the product, purchasing parts,
                      and establishing the quality parameters for testing the constructed product against. In addition, we facilitate
                      creation of prototypes, trials, and testing of the product.
                    </p>

                    <h2 className="text-xl font-semibold text-[#0056a4]">Testing and Prototype</h2>
                    <p>
                      We assist with the creation of product mock-ups and prototypes as well as in performing functional tests and trials.
                      We are also able to understand any underlying regulatory requirements and address any compliance related issues
                      giving rise to an exhaustive coverage of your testing and prototyping needs.
                    </p>
                  </section>
                </div>
              ) : isPlantProcessEngineeringPage ? (
                <div className="mt-5 space-y-6 text-[15px] leading-7 text-slate-700">
                  <p>
                    Success of a business is largely driven by the efficiency of its processes, effectiveness of its manufacturing
                    infrastructure and aptness of its individuals. Combined together, these factors are also responsible for a well
                    designed plant and a carefully established manufacturing process. A well designed engineering process and an optimally
                    working plant are vital to the smooth sailing of your manufacturing units and in turn, your business&apos; success.
                  </p>
                  <p>
                    At GTS Engineering USA Incorporated (GTS), we offer advantage of our process and plant engineering expertise to enable
                    our customers to improve productivity of their plants. At the same time, we ensure that all the implicit goals of your
                    plant, such as safety, quality, performance, dependability, efficiency and operability are consistently met. We also
                    take care of all the compliance and regulatory aspects while assisting you with our plant and process engineering
                    services.
                  </p>

                  <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white p-3 sm:p-5">
                    <Image
                      src="/image/plant&process-enginerring.png"
                      alt="Plant and Process Engineering"
                      width={1100}
                      height={700}
                      className="h-auto w-full object-contain"
                    />
                  </div>

                  <p>Our wide range of plant and process engineering services include:</p>

                  <section className="space-y-4">
                    <h2 className="text-xl font-semibold text-[#0056a4]">Process Design and Basic Engineering</h2>
                    <p>
                      Our process design and basic engineering services include simulation of process using adequate tools upon a careful
                      analysis of requirements. This gives you an early view of various steps, activities, and events participating in a
                      process. During process design and engineering, we consider physical properties of materials and constraints
                      associated with the process under question. We also offer Basic Design Package (BDP), which consists of several
                      useful artefacts, such as project design basis and process description, process and utility flow diagrams etc.
                    </p>
                    <p>
                      Our experts also create preliminary layouts of your prospective plant and assist you with the cost, time, scope and
                      schedule estimates. In addition, we create preliminary PIDs (Piping and Instrument Diagrams) and process flow
                      diagrams (PFDs) in order to give you a basic representation of the overall preliminary process design.
                    </p>

                    <h2 className="text-xl font-semibold text-[#0056a4]">FEED</h2>
                    <p>
                      A plant and process engineering project requires a number of diagrams, feeds, data sheets and lists to be generated.
                      These artefacts serve as building blocks while carrying out phases of an engineering project. Our professionals have
                      extensive experience in creating equipment lists and data sheets with their specifications, performing sizing
                      calculations for optimum results, developing schematics for instrumentation and wiring, generating 3D plant models,
                      and creating intelligent P & ID (Piping and Instrument Diagrams). These models, sheets and diagrams are crucial to
                      detailing of the design and optimization of the design given all the constraints.
                    </p>

                    <h2 className="text-xl font-semibold text-[#0056a4]">Detailed Design</h2>
                    <p>
                      Detailed design involves detailing of the designs and layouts prepared at the preliminary stages. During the detailed
                      design phase, we create equipment layouts and BOMs (Bills of Materials), detail up the piping layouts and piping
                      support designs while generating equipment and piping GA drawings in detailed and isometric fashions to give realistic
                      idea of their designs. In addition, we employ standard techniques and modern tools to perform interference and clash
                      detection.
                    </p>

                    <h2 className="text-xl font-semibold text-[#0056a4]">Specialized</h2>
                    <p>
                      GTS helps with conceptual studies of your project to identify the optimization points, potential risks, feasibility,
                      safety issues and possible bottlenecks. We also perform feasibility study of your process and plant design to
                      generate a design feasibility report to help you make well-informed decisions about your design.
                    </p>
                    <p>
                      We are instrumental in performing HAZOP and HAZAN studies for our customers to identify and analyze possible hazards
                      and deviations from the standard operating conditions. In addition to hazard analysis, we undertake process safety
                      audit and risk analysis to estimate risk and unearth safety issues at early stages itself.
                    </p>
                    <p>
                      Our specialized services include stress analysis of piping systems using the modern tools and proven techniques as
                      well as identification and removal of bottlenecks, and troubleshooting as per the clients&apos; requirements.
                    </p>
                    <p>
                      We also assist our clients by creating As-Built Drawing to give them an almost accurate pictorial idea of the
                      finally built plant at an earlier stage. These drawings enable them to visualize the appearance and functioning of
                      their plant, and help them make crucial business decisions about adequacy of their investments and future steps.
                    </p>
                  </section>
                </div>
              ) : isPlmSoftwareEngineeringPage ? (
                <div className="mt-5 space-y-6 text-[15px] leading-7 text-slate-700">
                  <p>
                    For most product-based companies, engineering companies, and manufacturers, PLM is a set of activities that fall
                    completely or partially outside of their own periphery of expertise. It requires a different focus and skills than
                    product development and involves several challenges, such as focus on process establishment, reinforcement and
                    adherence, selection of right tools and people for the right tasks, availability of adequate technical experience,
                    consistency of product quality, and suitable infrastructure.
                  </p>
                  <p>
                    In order to help you combat these challenges with ease we, at GTS Engineering USA Incorporated (GTS), offer an
                    integrated array of services in the field of Product Lifecycle Management (PLM) and software engineering. We help
                    you bring your products to market quickly, manage increasing complexity, and in turn, cut down overall cost of
                    managing your products. Our PLM experts help you gain the most out of your investments while you keep your focus on
                    the tasks where your core strengths lie.
                  </p>

                  <section className="space-y-4">
                    <h2 className="text-3xl font-semibold text-[#0056a4]">PLM</h2>
                    <p>
                      Our offerings in the field of PLM primarily include PLM Consulting and other important services, such as Enterprise
                      Application Integration/implementation/customization, application management, and MIS.
                    </p>

                    <h3 className="text-xl font-semibold text-[#0056a4]">PLM Consulting</h3>
                    <p>
                      In order to ensure that your conceptualized product meets its core objectives and delivers the expected value, we
                      assist in strategizing alignment of your product vision with your organization&apos;s objectives and targets. Our PLM
                      consultants work with our customers to help them model their new processes and to optimize the existing ones making
                      use of Lean principles. For instance, they help formulate the change management processes so that the changes are
                      dealt in the most efficient and cost-effective manner. They also help manage risk by careful examination of
                      requirements, scope, and schedules.
                    </p>
                    <p>
                      Overall, our PLM consultants keep &apos;maximum value derivation&apos; at the centre of their objectives so that you reap
                      the maximum off every penny you invest!
                    </p>

                    <h3 className="text-xl font-semibold text-[#0056a4]">
                      Implementation, customization & Enterprise Application Integration
                    </h3>
                    <p>
                      In order to leverage the collective benefit of your enterprise I.T. assets to your business needs, GTS offers an
                      extensive array of enterprise application services associated with your PLM platform. Our services include
                      implementation, customization and integration of enterprise applications. Our team is able to address the dynamically
                      changing requirements of your business by implementing enterprise tools, such as ERP (e.g. SAP) and customize them
                      upon a careful analysis of your business.
                    </p>

                    <h3 className="text-xl font-semibold text-[#0056a4]">Migration and support</h3>
                    <p>
                      With vast experience in the field of PLM, our professionals possess sound understanding of the issues most companies
                      face during the usage phases of their PLM platforms. These issues typically include troubles in data management,
                      migration, performance, reliability, and operational efficiency. In order to address these frequent issues, GTS
                      offers services of an apt team of PLM support analysts and migration experts. We help in migrating the PDM data
                      across the legacy or modern systems while offering a wide range of support activities pertinent to the data
                      migration and management.
                    </p>

                    <h3 className="text-xl font-semibold text-[#0056a4]">Application Management</h3>
                    <p>
                      Our PLM support analysts constitute our managed services team and work as per the industry-standard frameworks like
                      ITIL. Our application management services include maintenance of legacy applications and PDM data, multi-line
                      support, documentation, incident management using market-leading tools. By ensuring that our SLAs are consistently
                      met, we help our clients keep their attention on their core business activities. Being a firm believer of Kaizen,
                      we maintain our knowledge repository to avoid re-inventing the wheel and use our lessons from the past.
                    </p>

                    <h3 className="text-xl font-semibold text-[#0056a4]">Manufacturing Information Solutions</h3>
                    <p>
                      At GTS, we realize that there can be a huge efficiency gain if the right and streamlined manufacturing processes are
                      used at your manufacturing units or plants. This is where a Manufacturing Information Solution (MIS) is of vital
                      importance. We bring in our expertise in providing manufacturing information solutions to help you get the most from
                      your investments. It&apos;s indeed a direct outcome of our expertise in manufacturing and process optimization that we
                      are able to support our customers in cutting down the costs and increasing the overall efficiency.
                    </p>
                  </section>

                  <section className="space-y-4">
                    <h2 className="text-3xl font-semibold text-[#0056a4]">Software Engineering</h2>
                    <p>
                      Our software engineering services are tailored to help our clients make the best use of the latest tools and emerging
                      technologies to ease up their organizational activities. We specialize in offering several services related to software
                      engineering that provide you value addition on a number of facets.
                    </p>

                    <h3 className="text-xl font-semibold text-[#0056a4]">Integration with engineering & business systems</h3>
                    <p>
                      For optimum usage of information technology, disparate engineering and business systems must be designed to interact
                      with each other. However, it&apos;s a challenging task for most enterprises to make their separate departments,
                      engineering and business systems collaborate to gain the advantage of seamless data communication and reduced
                      latencies. Our integration experts, having experience in integrating various systems, can help design and implement
                      an integration project to a successful closure.
                    </p>

                    <h3 className="text-xl font-semibold text-[#0056a4]">Utilization of Corporate Engineering Knowledge</h3>
                    <p>
                      Despite the scattered availability of the engineering knowledge available with various individuals, most organizations
                      fail to utilize it in the most effective way. GTS offers its knowledge-base engineering service to strategize,
                      organize, and collate the useful scattered knowledge to build a useful knowledge repository. With our knowledge
                      engineering services, you can be assured of lossless and exhaustive coverage of knowledge with the easiest
                      availability right when it&apos;s needed.
                    </p>

                    <h3 className="text-xl font-semibold text-[#0056a4]">Design & Process Automation</h3>
                    <p>
                      To maximize the efficiency of your manufacturing processes and help you migrate to use the latest automated methods
                      of designing, we offer our design & process automation service. Our design experts and consultants have assisted
                      several organizations to shift from the traditional and less effective working methods to the modern, efficient, and
                      accurate methods of designing.
                    </p>

                    <h3 className="text-xl font-semibold text-[#0056a4]">CAD Customization & Interfaces</h3>
                    <p>
                      GTS, being a &apos;new age&apos; company, possesses expertise in using the software tools to aid customization of your
                      designs. We are able to customize the CAD based designs and interfaces to assist you create the most accurate
                      designs in a cost-effective fashion.
                    </p>

                    <h3 className="text-xl font-semibold text-[#0056a4]">Application Support & Maintenance</h3>
                    <p>
                      IT experts of GTS are able to take care of your applications with our support and maintenance services. They
                      undertake various activities, such as application tuning, optimization, data fixes, sanitization, change
                      management, incident management etc in order to ensure that your software applications do not become a bottleneck in
                      carrying out your business processes smoothly.
                    </p>
                  </section>
                </div>
              ) : isGeoinformaticsEngineeringPage ? (
                <div className="mt-5 space-y-6 text-[15px] leading-7 text-slate-700">
                  <p>
                    GTS Engineering USA Incorporated (GTS) strives to provide you the benefit of the cutting-edge geo-informatics
                    services we have earned expertise in. Few of our Geo-informatics services are:
                  </p>

                  <section className="space-y-4">
                    <h2 className="text-xl font-semibold text-[#0056a4]">Consulting</h2>
                    <p>
                      At GTS, we are committed to providing you the GIS solutions to deliver the optimum business value. Our Geoinformatics
                      consultants provide a complete array of consulting services, including assessment of your geographical and geo-spatial
                      data requirements, information gather procedures and evaluation of your GIS IT infrastructure. Our consultants are also
                      able to perform geospatial workflow analysis, design and optimize geospatial workflows as per your requirements.
                    </p>
                    <p>
                      We help our clients build their GIS roadmap, identify the technology candidates and the best-fit technology. Our GIS
                      experts specialize in assisting our clients with identification of data, application design, database design, and
                      execution methodologies. Our consultants are also skilled in optimizing your workflows and automating them to maximize
                      the work productivity. In addition, we are instrumental in defining the data migration and system integration
                      strategies so as to minimize the post-implementation overheads and the maintenance costs.
                    </p>

                    <h2 className="text-xl font-semibold text-[#0056a4]">Application Development</h2>
                    <p>
                      GTS employs a team of expert GIS application developers who selectively combine the best-fit technologies to build GIS
                      applications, maintain existing ones, and integrate them with other business systems. We are able to develop specific
                      data models for your GIS applications. In addition, we have completed several Web-based and mobile-based GIS
                      applications, which illustrates our capabilities in the field of GIS application development. We also help our
                      customers leverage the interconnectivity between the systems by integrating their GIS applications with their
                      existing/new enterprise IT systems.
                    </p>

                    <h2 className="text-xl font-semibold text-[#0056a4]">Geo-Spatial Data Services</h2>
                    <p>
                      We are able to convert and digitalize your printed data, drawings, satellite imagery and photographs so that your GIS
                      applications may make use of them. We have extensive experience in remote sensing, i.e. in satellite image sensing and
                      interpretation. One of our key offerings is image processing that ensures that high-resolution images are rasterized
                      maintaining the highest possible quality. Our service offerings include geo-referencing, ortho-rectification,
                      mosaicing, color balancing, and cutting to specified output formats. We also offer survey data integration services
                      that include digitalization and interpretation of observations from field surveys. Our data services are custom-tailored
                      to meet your specific GIS data conversation and interpretation needs.
                    </p>

                    <h2 className="text-xl font-semibold text-[#0056a4]">Managed Services</h2>
                    <p>
                      Our managed service offering has been designed to manage and maintain your GIS applications and data in a round-the-clock
                      fashion. We managed service team follows the proven processes and ensure maintenance of their SLA&apos;s with our clients.
                      They provide 24×7 helpdesk and support services and are able to resolve your issues within acceptable timeframes to the
                      desired levels of satisfaction. Our managed services team takes care of your GIS data updates, GIS work order posting
                      and data conversion and also, perform quality testing of your GIS applications.
                    </p>

                    <h2 className="text-xl font-semibold text-[#0056a4]">Network Asset Management</h2>
                    <p>
                      In order to manage your geographically distributed network assets, we offer our network asset management services.
                      These assets may be drainage systems, pipelines, optical fibre networks, underground circuits, pavements. These all
                      assets need to be linked directly to your information systems in order to allow you to monitor progress of the work,
                      ensure smooth working of your network using GIS. We facilitate work and asset management using our expertise in
                      integration of geographically scattered assets into your business systems. We undertake GIS transformation projects that
                      involve maintenance and transformation of spatial data.
                    </p>

                    <h2 className="text-xl font-semibold text-[#0056a4]">Land Management</h2>
                    <p>
                      Land management experts at GTS understand the spatial extent and usage of land information so that we can help
                      organize the land records data for an effective planning. Land records data management is often a daunting task, which
                      can be eased up with our land management engagement. We also help our clients with land valuation, land parcels&apos;
                      mapping, and integrating land records to allow assessment of infrastructure for suitability of specific purposes and
                      better management of land resources.
                    </p>
                    <p>
                      We also help our clients in their smart governance and e-governance enablement initiatives at various stages.
                      Including the analysis of current governance practices, reviews, recommendations, planning, project execution and staff
                      training, we are able to help at any/all stages whilst giving you the benefit of our strong technological foundation
                      along the course.
                    </p>

                    <h2 className="text-xl font-semibold text-[#0056a4]">Risk Management</h2>
                    <p>
                      Geo-informatics can help you understand any possible hazards and the risks associated with your widespread network
                      assets. Our geo-informatics services are designed to give you an excellent view of such hazards and facilitate
                      disaster management and outage management. We help develop risk profiles and prepare risk mitigation mechanisms
                      considering the information like location-based data, road access, traffic flow patterns, vegetation density etc.
                    </p>
                    <p>
                      We also help our clients with claims analysis and management by optimizing their claims workflow. Our team ensures
                      that your staff members get the most accurate location-based information to understand the losses your customers
                      suffered and to devise plans to meet their needs precisely.
                    </p>

                    <h2 className="text-xl font-semibold text-[#0056a4]">Location Intelligence</h2>
                    <p>
                      In several business scenarios, location awareness about your assets, equipments, and people may be vital for smooth
                      operations. We provide the location intelligence services to equip you with tools that keep you informed about the
                      location and location-specific attributes related to your assets. We provide location-intelligent fleet management and
                      emergency response services. We enable our customers to identify the location of their fleet and make crucial business
                      decisions in real-time. Also, we strive to provide a good view of your assets so that you can respond to emergencies
                      without having to suffer losses. Our team works with our customers to understand their requirements so that they may
                      benefit from our location-based services and derive the maximum value.
                    </p>
                  </section>
                </div>
              ) : isProjectManagementControlsPage ? (
                <div className="mt-5 space-y-6 text-[15px] leading-7 text-slate-700">
                  <section className="space-y-3">
                    <h2 className="text-3xl font-semibold text-[#0056a4]">Management Services and Consultancy</h2>
                    <p>
                      It&apos;s a well-known fact that a majority of projects across the world do not reach their successful closure as
                      reported by PMI (Project Management Institute). According to the project management experts, the most common reason
                      behind this frequent failure of projects is inadequate project management practices, impractical process and limited
                      project management skills with most organizations.
                    </p>
                  </section>

                  <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white p-3 sm:p-5">
                    <Image
                      src="/image/product-managment&controls.png"
                      alt="Project Management and Controls"
                      width={1100}
                      height={700}
                      className="h-auto w-full object-contain"
                    />
                  </div>

                  <p>
                    In order to drive your engineering & manufacturing projects to their timely completion without budget overruns, we have
                    evolved as an expert project management consulting company. GTS is able to carry out individual phases of project
                    management as well as manage entire projects right from their conceptualization to closure. Depending upon the
                    requirement scenarios, we offer our project management and consulting services in the following areas:
                  </p>

                  <section className="space-y-4">
                    <h2 className="text-3xl font-semibold text-[#0056a4]">Project Management</h2>
                    <p>
                      Spanning across several industry verticals, GTS has proven its expertise in project management. We have helped
                      several clients with their projects. Our Prince2 and PMP certified project managers bring in their years of rich
                      project management experience to your strategic advantage. Following are the major project management services we
                      specialize in:
                    </p>

                    <h3 className="text-xl font-semibold text-[#0056a4]">Project Planning, Scheduling and Monitoring</h3>
                    <p>
                      Based on the understanding of requirements, we plan the project incorporating all the vital aspects of your project,
                      such as stakeholders&apos; expectations, budget and resources, scope, risk, tasks and responsibilities, communication
                      planning, timeline and the quality. Based on the estimates, we create baselines that help us create project schedules,
                      such as cost, activities and work packages, resources and risk. We make use of PERT (Program Evaluation & Review
                      Technique) to create the optimum schedules and are also able to fast-track or crash the projects as per the situation.
                    </p>

                    <h3 className="text-xl font-semibold text-[#0056a4]">Cost Engineering</h3>
                    <p>
                      Considering cost as the focal point of any project, we perform various cost engineering activities, such as
                      identification and optimization of cost-centric activities, cost estimation using standard estimation techniques,
                      optimum resource scheduling, and cost control during project execution. In order to optimize costs, we are able to
                      introduce our services during contract negotiations, vendor management, procurement, technology evaluation, and risk
                      identification. Overall, the goal of our cost engineering services is be best able to predict or assess cost,
                      minimise the risk and impact of overspends against budgets, and to ensure that there is an appropriate balance
                      between technical aspects and the related costs.
                    </p>

                    <h3 className="text-xl font-semibold text-[#0056a4]">Project Management Consultancy (PMC)</h3>
                    <p>
                      Our Project Management Consultancy services are crafted to cater to the creation, establishment, reinforcement,
                      monitoring and control of the project management processes at your organization. We analyse the current project
                      management framework at our clients&apos; organization and make recommendations around:
                    </p>
                    <ul className="ml-5 space-y-2">
                      <li className="list-disc">Project governance standards</li>
                      <li className="list-disc">Communication mechanisms and procedures</li>
                      <li className="list-disc">Organization and maintenance of EEFs (Enterprise Environmental Factors)</li>
                      <li className="list-disc">PM competency evaluation</li>
                      <li className="list-disc">Estimation practices</li>
                      <li className="list-disc">Portfolio resource utilization</li>
                      <li className="list-disc">Change management</li>
                      <li className="list-disc">Risk management</li>
                    </ul>

                    <h3 className="text-xl font-semibold text-[#0056a4]">Procurement Management</h3>
                    <p>
                      For a successful project execution, procurement and acquisition of resources may require additional expertise and may
                      be a time-consuming activity. This is why we help you on various aspects related to procurement, such as equipment
                      sourcing and vendor selection, vendor expediting and inspection services and other purchasing activities. We following
                      standard processes related to equipment and material identification and analyse them on the basis of cost and benefits.
                      Also, we perform activities like, sending RFIs and RFPs, quotation invitations, vendor short-listing, contract
                      negotiations and ensuring timely deliveries. We also step in during the project execution to expedite supplies and
                      inspect the quality of their services and products to avoid any quality shortcomings.
                    </p>

                    <h3 className="text-xl font-semibold text-[#0056a4]">Construction Management</h3>
                    <p>
                      In any construction project, aspects related to quality control and measuring progress require a deep understanding
                      of the construction business. We, at GTS, offer our services to ensure the quality of your construction projects
                      with our services, including construction supervision, regular site inspections, monitoring of the quality and
                      progress, and quality control. We also help you during the planning phase of your construction project and keep a
                      check on the quality and speed with our progress reporting and monitoring services.
                    </p>

                    <h3 className="text-xl font-semibold text-[#0056a4]">Commissioning Services</h3>
                    <p>
                      In any project, commissioning of the procured equipments and material supplies is crucial for a successful execution
                      or construction phase of a project. Our project management consultants and commissioning engineers take up the
                      responsibilities of supporting and supervising the commissioning activities. These activities include performing
                      evaluation/trial runs, conducting equipment reviews, creating commissioning strategy documents, creating and performing
                      test procedures, ensuring adherence to safety practices, investigating and troubleshooting issues. If required, they
                      also conduct trainings to the maintenance and operative staff.
                    </p>
                    <p>
                      Our commissioning engineers and project management consultants collaborate with our customers and their project
                      engineers to ensure safe and cost-effective commissioning activities.
                    </p>
                  </section>
                </div>
              ) : isProjectEngineeringPage ? (
                <div className="mt-5 space-y-7 text-[15px] leading-7 text-slate-700">
                  <section className="space-y-3">
                    <h2 className="text-2xl font-semibold text-[#0056a4]">MECHANICAL</h2>
                    <h3 className="text-xl font-semibold text-[#0056a4]">HVAC</h3>

                    <h4 className="text-lg font-semibold text-slate-900">High Side</h4>
                    <ul className="ml-5 space-y-2">
                      <li className="list-disc">Equipment Selections/ Specifications/ Sizing</li>
                      <li className="list-disc">Plant/ Equipment room coordinated layouts with two line piping, panels, wiring etc.</li>
                      <li className="list-disc">Plant Loop System design</li>
                      <li className="list-disc">Equipment Schedule and BOM</li>
                    </ul>

                    <h4 className="pt-2 text-lg font-semibold text-slate-900">Low Side</h4>
                    <h5 className="font-semibold text-slate-900">Air System Design</h5>
                    <p className="font-medium">Heat Load Estimation</p>
                    <ul className="ml-5 space-y-2">
                      <li className="list-disc">Trane Tracer/ E-20 II HAP method used for commercial buildings/ standard systems</li>
                      <li className="list-disc">Low RH areas</li>
                      <li className="list-disc">High RH areas</li>
                      <li className="list-disc">High Sensible Load Applications</li>
                      <li className="list-disc">100% fresh air systems etc.</li>
                    </ul>

                    <p className="pt-2 font-medium">Air Distribution System types</p>
                    <ul className="ml-5 space-y-2">
                      <li className="list-disc">Single zone (constant volume/ single unit)</li>
                      <li className="list-disc">Single zone/ multiple terminal units like FCUs, PKC etc.</li>
                      <li className="list-disc">Multi-zone, variable volume systems with VAVs</li>
                      <li className="list-disc">Once through systems</li>
                      <li className="list-disc">Air System Design contd…</li>
                    </ul>

                    <p className="pt-2 font-medium">Air Distribution System: Duct Design Pressures</p>
                    <ul className="ml-5 space-y-2">
                      <li className="list-disc">Low Pressure Ducting</li>
                      <li className="list-disc">Medium Pressure Ducting</li>
                      <li className="list-disc">High Pressure Ducting</li>
                    </ul>

                    <p className="pt-2 font-medium">Duct Fabrication Standards</p>
                    <ul className="ml-5 space-y-2">
                      <li className="list-disc">SMACNA</li>
                      <li className="list-disc">DW144/ DW143</li>
                    </ul>

                    <p className="pt-2 font-medium">Air-conditioned Room Pressures</p>
                    <ul className="ml-5 space-y-2">
                      <li className="list-disc">Normal pressure</li>
                      <li className="list-disc">
                        Positive pressure rooms like clean rooms (designed as per FS 209E and ISO 14644 Classification Standards),
                        operation theaters, isolation rooms etc.
                      </li>
                      <li className="list-disc">
                        Negative pressure rooms like isolation rooms, vaccination/ viral/ bio-production areas etc.
                      </li>
                    </ul>

                    <p className="pt-2 font-medium">Air Handling Unit Design/ Configurations</p>
                    <ul className="ml-5 space-y-2">
                      <li className="list-disc">For Cooling/ Heating/ Humidification/ De-humidification/ Heat recovery</li>
                      <li className="list-disc">Single fan/ Two fan systems</li>
                      <li className="list-disc">
                        Air Filtration Systems like HEPA filters (0.3/ 0.12 microns), Microvee filters (5/ 3 microns), Pre filters
                        (20 microns) etc.
                      </li>
                      <li className="list-disc">Control System P&amp;I and Operation Logic</li>
                    </ul>

                    <h5 className="pt-2 font-semibold text-slate-900">Air System Design Highlights</h5>
                    <ul className="ml-5 space-y-2">
                      <li className="list-disc">Coordinated ducting layout drawings and AHU room layouts on AutoCAD</li>
                      <li className="list-disc">Interference checking on 2D/3D</li>
                      <li className="list-disc">Air side pressure drop calculations</li>
                      <li className="list-disc">Design/ Drafting software used to prepare layout drawings</li>
                      <li className="list-disc">
                        Production Wizard software – an ERP/ BOM processor used to generate Bill of Materials based on G.I. coil width
                        for fabricating the ducts. The software can accept output file from AutoCAD in any format
                      </li>
                      <li className="list-disc">Control loops and P&amp;I diagram with logic</li>
                    </ul>

                    <h5 className="pt-2 font-semibold text-slate-900">Low Side contd…</h5>
                    <ul className="ml-5 space-y-2">
                      <li className="list-disc">Water Piping System Design</li>
                    </ul>
                    <p>Chilled water/ Condenser water/ Hot water/ Dual temperature water systems design</p>

                    <p className="font-medium">Closed water systems design categories</p>
                    <ul className="ml-5 space-y-2">
                      <li className="list-disc">Constant flow or Variable flow</li>
                      <li className="list-disc">Direct return or Reverse return water systems</li>
                      <li className="list-disc">Two pipe or Four pipe water systems for Dual temperature systems</li>
                    </ul>

                    <p>Plant Building Loop combination (primary/ secondary pumping systems)</p>
                    <p>Plant Distribution Building Loop combination</p>
                    <p className="font-medium">Specifications/ selection & sizing</p>
                    <ul className="ml-5 space-y-2">
                      <li className="list-disc">Pumps for Constant volume/ Variable volume pumping systems</li>
                      <li className="list-disc">Control valves</li>
                      <li className="list-disc">Piping, valves & pipe accessories</li>
                      <li className="list-disc">Cooling towers</li>
                      <li className="list-disc">Expansion tank/ compression tank (closed expansion tank)</li>
                    </ul>

                    <p>Design of Control Systems for plant building loop and plant distribution building loop combinations</p>

                    <h5 className="pt-2 font-semibold text-slate-900">Water Piping System Design Highlights</h5>
                    <ul className="ml-5 space-y-2">
                      <li className="list-disc">Construction/ shop drawing:</li>
                      <li className="list-disc">Coordinated equipment/ piping layout drawings with interference check on 2D/3D</li>
                      <li className="list-disc">Calculation of water side pressure drop</li>
                      <li className="list-disc">Equipment schedules with specifications</li>
                      <li className="list-disc">BOM with specifications based on final drawings</li>
                      <li className="list-disc">Schematic piping layout drawings</li>
                      <li className="list-disc">Control loops and P&amp;I diagrams with logic</li>
                    </ul>
                  </section>

                  <section className="space-y-3">
                    <h2 className="text-2xl font-semibold text-[#0056a4]">MECHANICAL</h2>
                    <h3 className="text-xl font-semibold text-[#0056a4]">Fire Protection System (FPS)</h3>
                    <ul className="ml-5 space-y-2">
                      <li className="list-disc">FPS design including smoke exhaust system</li>
                      <li className="list-disc">Equipment selection/ sizing & specifications</li>
                      <li className="list-disc">Coordinated plant/ equipment room layout with two line piping, pumps etc.</li>
                      <li className="list-disc">Wet riser/ dry riser sizing, coordinated layout drawings</li>
                      <li className="list-disc">Sprinkler piping selection/ layout drawings</li>
                      <li className="list-disc">Smoke exhaust ducting design & coordinated layout drawings</li>
                      <li className="list-disc">
                        Design details of fire dampers including sizing/ location & installation details for air distribution systems/
                        duct layouts
                      </li>
                      <li className="list-disc">Operation logic & control systems</li>
                      <li className="list-disc">Bill of Materials (BOM)</li>
                    </ul>
                  </section>

                  <section className="space-y-3">
                    <h2 className="text-2xl font-semibold text-[#0056a4]">PLUMBING</h2>
                    <p className="font-medium">Design & engineering of :</p>
                    <ul className="ml-5 space-y-2">
                      <li className="list-disc">Domestic & Process Water supply systems</li>
                      <li className="list-disc">Water Drainage & Sewage systems</li>
                      <li className="list-disc">Steam piping</li>
                      <li className="list-disc">Gaseous Systems</li>
                      <li className="list-disc">Plumbing sizes/ coordinated layout drawings</li>
                      <li className="list-disc">Equipment selection/ specifications</li>
                      <li className="list-disc">Pressure drop calculations</li>
                      <li className="list-disc">Bill of Materials</li>
                    </ul>
                  </section>

                  <section className="space-y-3">
                    <h2 className="text-2xl font-semibold text-[#0056a4]">ELECTRICAL</h2>
                    <ul className="ml-5 space-y-2">
                      <li className="list-disc">Design of Electrical distribution systems (High Voltage/ Low Voltage)</li>
                      <li className="list-disc">
                        Electrical load list indicating critical loads and single line diagrams including emergency supply
                      </li>
                      <li className="list-disc">Preparation of coordinated electrical drawings</li>
                      <li className="list-disc">
                        Preparation of cable layouts for power, control and earthing for HVAC systems, industrial installations, other
                        building services like Fire Protections System, Water Supply System and Lighting
                      </li>
                      <li className="list-disc">
                        Interference management with other engineering disciplines, mechanical systems like HVAC, FPS, BMS, false ceiling
                        levels, location and levels of RCC beams etc. while finalizing the layouts
                      </li>
                      <li className="list-disc">
                        Design and preparation of layout drawings of cable trays for HV/ LV, power & control cables
                      </li>
                      <li className="list-disc">
                        Calculations for sizing, earthing, cabling, lightning protection, indoor & outdoor lighting illumination, DG Sets,
                        UPS, Battery and Battery chargers etc.
                      </li>
                      <li className="list-disc">
                        Preparation of specifications, drawings, BOM, data sheets etc. for electrical motors, cables, MCC, DG Sets, UPS,
                        Lighting Systems, Lighting Fixtures, Battery with Battery chargers and accessories
                      </li>
                      <li className="list-disc">
                        Design and preparation of layout for Control Systems Communication Systems, Data and Voice Systems, Structured
                        Cabling Systems, networks etc.
                      </li>
                    </ul>
                  </section>

                  <section className="space-y-3">
                    <h2 className="text-2xl font-semibold text-[#0056a4]">Our Service Offerings for MEP Sectors:</h2>

                    <h3 className="text-xl font-semibold text-[#0056a4]">Drafting & Detailing</h3>
                    <ul className="ml-5 space-y-2">
                      <li className="list-disc">Coordinated system layout drawings (2D) with interference check (3D)</li>
                      <li className="list-disc">Across all phases of the project including Design Development, Construction Drawings, etc.</li>
                      <li className="list-disc">
                        Across all engineering disciplines including Mechanical, Fire Protection Systems, Electrical, Instrumentation and
                        Plumbing
                      </li>
                      <li className="list-disc">Schematic layouts / loop drawings</li>
                      <li className="list-disc">Drawing detailing including</li>
                      <li className="list-disc">Sections of critical elevations</li>
                      <li className="list-disc">Sizing, locations, installations & support details</li>
                      <li className="list-disc">Tag Nos.</li>
                      <li className="list-disc">Detailed BOM</li>
                    </ul>

                    <h3 className="text-xl font-semibold text-[#0056a4]">Design Development</h3>
                    <ul className="ml-5 space-y-2">
                      <li className="list-disc">Energy efficient system design</li>
                      <li className="list-disc">Equipment selection/ sizing and finalization of specifications</li>
                      <li className="list-disc">
                        Preparation of construction/ shop drawings in coordination with building structures/ interior layouts & other services
                      </li>
                      <li className="list-disc">Equipment schedules</li>
                      <li className="list-disc">Bill of Materials for variable materials/ items with specifications</li>
                    </ul>

                    <h3 className="text-xl font-semibold text-[#0056a4]">Construction Documentation</h3>
                    <ul className="ml-5 space-y-2">
                      <li className="list-disc">Preparation of RFQ and detailed specifications of plant equipment / materials</li>
                      <li className="list-disc">Tender evaluation (if-required) of plant equipment / materials</li>
                      <li className="list-disc">Preparation of installation/ commissioning check documents</li>
                      <li className="list-disc">Design Qualification</li>
                      <li className="list-disc">Installation Qualification</li>
                      <li className="list-disc">Operation Qualification</li>
                      <li className="list-disc">Performance Qualification</li>
                    </ul>

                    <ul className="ml-5 space-y-2 pt-1">
                      <li className="list-disc">
                        Preparation of O&amp;M manuals based on spare parts list & Equipment details provided by vendors
                      </li>
                      <li className="list-disc">Preparation of as-built drawings based on site modifications</li>
                    </ul>
                  </section>
                </div>
              ) : isDocumentEngineeringPage ? (
                <div className="mt-5 space-y-6 text-[15px] leading-7 text-slate-700">
                  <p>
                    GTS Engineering USA Incorporated (GTS) enables entrepreneurs and companies from start-ups to Fortune 500s produce,
                    organize, and maintain engineering documentation without the expense of establishing or expanding their own
                    engineering staff. With a strong focus on providing excellent engineering services, we understand the nuance of the
                    trade. As a result, we have equipped ourselves with the skills to meet the need for document engineering for your
                    enterprise.
                  </p>

                  <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white p-3 sm:p-5">
                    <Image
                      src="/image/document-enginerring.png"
                      alt="Document Engineering"
                      width={1100}
                      height={700}
                      className="h-auto w-full object-contain"
                    />
                  </div>

                  <section className="space-y-3">
                    <p>We realize that appropriate documentation is important from many perspectives:</p>
                    <ul className="ml-5 space-y-2">
                      <li className="list-disc">Knowledge sharing and preservation</li>
                      <li className="list-disc">Record keeping and information organization & maintenance</li>
                      <li className="list-disc">Simplification of complex models and theories via illustrations</li>
                      <li className="list-disc">Analysis and statistics generation</li>
                      <li className="list-disc">Aiding users, vendors, stakeholders, sponsors and other parties</li>
                      <li className="list-disc">
                        Product/service marketing and disseminating the relevant information
                      </li>
                    </ul>
                    <p>
                      Understanding these goals, our document engineers serve our clients with an extensive array of services listed below:
                    </p>
                  </section>

                  <section className="space-y-4">
                    <h2 className="text-3xl font-semibold text-[#0056a4]">Text Authoring</h2>
                    <p>
                      Our text authoring specialists possess sound knowledge of engineering, design, and manufacturing and are adept at
                      transforming it into technical or business language using the appropriate writing styles. Our text authoring service
                      spawns across a wide range of written creations, including manuals, catalogs, reports, process documents, program
                      documentation, certificate documentation, or design documentation. Specifically, we specialize in creation and
                      revision of:
                    </p>
                    <ul className="ml-5 space-y-2">
                      <li className="list-disc">Maintenance, Operators/User and Training Manuals</li>
                      <li className="list-disc">Standard Practices Manual</li>
                      <li className="list-disc">Shop Floor Manuals & Installation Manuals</li>
                      <li className="list-disc">Spare Parts Manual</li>
                      <li className="list-disc">Illustrated Tools & Equipment Manuals</li>
                      <li className="list-disc">Ground Equipment operating Manuals</li>
                      <li className="list-disc">Test facility planning manual</li>
                      <li className="list-disc">Service Bulletins</li>
                      <li className="list-disc">Illustrated Parts Catalog</li>
                      <li className="list-disc">e parts Catalog</li>
                      <li className="list-disc">Procedures and Reports</li>
                      <li className="list-disc">Repair Procedures development</li>
                      <li className="list-disc">Software (tools) user guide</li>
                      <li className="list-disc">Program Documentation</li>
                      <li className="list-disc">Design Documentation</li>
                      <li className="list-disc">Certification Documentation</li>
                    </ul>
                  </section>

                  <section className="space-y-4">
                    <h2 className="text-3xl font-semibold text-[#0056a4]">Illustrations and Animations</h2>
                    <p>
                      Often, textual content and design artefacts are best represented in the visual and audio-visual formats. We employ
                      a talented pool of design experts and animators who help you with the creation, revision, organization and
                      maintenance of the designs, schematics, animations and interactive manuals. Our experts specialize in creation of
                      two-dimensional, orthographic, and isometric illustrations as well as wiring diagrams and the electrical and
                      mechanical schematics.
                    </p>
                    <p>
                      We are also capable of creating 2D and 3D animations to make your illustrations livelier. In addition, we provide
                      expert services in the field of e-learning and interactive instructional design, creation of interactive electronic
                      technical manuals utilizing our experience. Our professionals also offer top of the line audio and video integration
                      and editing services to help you deliver the desired audio-visual experience to your target user group.
                    </p>
                  </section>

                  <section className="space-y-4">
                    <h2 className="text-3xl font-semibold text-[#0056a4]">Miscellaneous Document Engineering Services</h2>
                    <p>
                      We provide a comprehensive array of knowledge management and document engineering services. In addition to the text
                      authoring and illustration/animation related services, we help you with creation of maintenance planning documents,
                      process sheets and assembly instruction sheets. We also take care of engineering change updates in your projects or
                      engineering operations.
                    </p>
                    <p>
                      For your business&apos;s readiness for a cross-lingual environment, we provide translation services encompassing a range
                      of global languages. In order to ensure meaningfulness, organization, and maintenance of your data, we provide data
                      mining, cleansing and migration services in addition to transformation of printed information into its digital
                      counterparts.
                    </p>
                  </section>
                </div>
              ) : isEnergyIndustryPage ? (
                <div className="mt-5 space-y-6 text-[15px] leading-7 text-slate-700">
                  <p>
                    Our offerings in the energy-related industries are diverse and so is our capability to offer an array of solutions
                    specific to our customers&apos; requirements. Ranging from conventional sources of energy to renewable ones, we cater
                    to requirements related to energy distribution, increasing the energy efficiency of your facilities, transport of
                    energy, energy plant design and engineering.
                  </p>
                  <p>
                    At GTS, we specialize in the solutions in the fields of Oil & Gas and power. Here is the brief overview of our
                    strengths in these industries.
                  </p>

                  <section className="space-y-4">
                    <h2 className="text-3xl font-semibold text-[#0056a4]">Oil & Gas</h2>
                    <p>
                      GTS strives to contribute to the activities of oil and gas customers who are related to the exploration and
                      production of hydrocarbon fuels. Our objective is to assist our customers in improvement of safety, enhancement
                      of best practice and reduction of project and operational costs with an appropriate usage of advanced technologies
                      and techniques.
                    </p>

                    <h3 className="text-xl font-semibold text-[#0056a4]">Onshore & Offshore Oil & Gas</h3>
                    <p>
                      We have assisted many of our noteworthy clients with cost-effective, safe and reliable extraction, production, and
                      transport of oil & gas from offshore and onshore oil & gas fields. We have equipped ourselves with expertise in
                      providing technological solutions for extraction of oil, consultancy to reduce costs associated with aspects like
                      compliance with regulation, and in providing support throughout the project lifecycles, from the FEED stage to
                      installation, performance monitoring, progress tracking and issue-addressing.
                    </p>

                    <h3 className="text-xl font-semibold text-[#0056a4]">Pipeline</h3>
                    <p>
                      In order to ensure that supply chains of the Oil & Gas industries meet the standards and needs of today, we help
                      our clients to enhance their safety policies, best practices, and optimize costs with the utilization of the latest
                      tools and technologies. In particular, we help our clients with important aspects, including material selection,
                      corrosion mitigation, installation, inspection planning, testing and research.
                    </p>

                    <h3 className="text-xl font-semibold text-[#0056a4]">Petrochemical & Refinery</h3>
                    <p>
                      GTS offers its excellent research, project management, operation and testing services to the companies in the field
                      of petrochemical plants, gas and steam turbines, refineries, natural gas production and refining. With our
                      multi-disciplinary approach, we assist our clients to optimize their operations and ensure their regulatory
                      compliance. Our experts also provide research and testing services for chemical and petrochemical plants, utility
                      boilers with steam and gas turbines, and all other associated process facilities.
                    </p>
                  </section>

                  <section className="space-y-4">
                    <h2 className="text-3xl font-semibold text-[#0056a4]">Power</h2>
                    <p>
                      GTS possesses expertise in helping utility companies, OEMs, service providers, nuclear decommissioning agencies,
                      research organizations and regulators to ensure smooth and safe operation of their power generation and distribution
                      plants and assets. We have provided considerable value-addition to our customers in the power industry by providing
                      technological solutions, advice and consultancy, all underpinned by world-class research.
                    </p>

                    <h3 className="text-xl font-semibold text-[#0056a4]">Thermal</h3>
                    <p>
                      With the ever increasing demand for electricity, number of thermal plant projects is also increasing worldwide.
                      This, in turn, generates demand for in-depth materials knowledge, robust asset management approaches, and proven
                      project management processes. Our services are aimed at improving plant profitability by helping you with optimum
                      replacement scheduling, reduced overhaul costs, reduced outages, and balancing cost versus plant life. We have
                      proven track record in providing services, including outage management, plant life extension, and quality assurance
                      for new and existing plant projects.
                    </p>

                    <h3 className="text-xl font-semibold text-[#0056a4]">Hydro</h3>
                    <p>
                      In the growing and natural resource rich countries, hydropower is major source of electricity. Whereas long plant
                      life and greater safety are the key drivers for utilization of hydropower, it involves issues related to concrete
                      encasement and size of components, low temperature operation and aging asset management. GTS offers its unique
                      expertise in structural integrity, inspection, repair and risk based asset life optimization.
                    </p>

                    <h3 className="text-xl font-semibold text-[#0056a4]">Wind</h3>
                    <p>
                      One of the most promising sources of renewable energy, wind, is having a constantly growing demand these days. With
                      the demand for wind turbines, there is an ongoing emphasis on lighter structures, better efficiencies, and optimal
                      manufacturing. This generates a need for performance monitoring of turbines, regular inspection, appropriate material
                      selection, fabrication, integrity assessment, and compliance. We, at GTS, offer our expertise in materials,
                      fabrication and inspection, corrosion protection, fatigue assessments and structural integrity maintenance to wind
                      energy operators, developers and OEMs. We are able to support our customers at any stage of a new project and also,
                      can ensure operational effectiveness of their existing plants.
                    </p>

                    <h3 className="text-xl font-semibold text-[#0056a4]">Nuclear</h3>
                    <p>
                      Nuclear power utilization poses several challenges related to efficiency, waste management, disaster management,
                      safety and regulatory compliances. We help the nuclear power operators and OEMs in addressing these challenges
                      considering their geographic uniqueness. In particular, we help our customers in carrying out the following crucial
                      activities:
                    </p>
                    <ul className="ml-5 space-y-2">
                      <li className="list-disc">Implementing enhanced techniques to optimize efficiency of the welding processes</li>
                      <li className="list-disc">Repair procedures</li>
                      <li className="list-disc">Non-Destructive Engineering (NDE)</li>
                      <li className="list-disc">Structural integrity assessment of the aging plants</li>
                      <li className="list-disc">
                        Training the staff on welding and inspection to ensuring their qualification during the construction phases
                      </li>
                      <li className="list-disc">Waste management</li>
                      <li className="list-disc">Decommissioning support</li>
                      <li className="list-disc">Risk management and disaster management</li>
                      <li className="list-disc">Plant lifetime extension, cost reduction and reliability assurance.</li>
                    </ul>
                  </section>
                </div>
              ) : isHeavyEngineeringMachineryPage ? (
                <div className="mt-5 space-y-6 text-[15px] leading-7 text-slate-700">
                  <p>
                    GTS has earned a significant reputation in the field of heavy engineering and machinery in the global markets.
                    With our strong engineering & design capabilities and profound industry experience, we are able to serve our
                    customers in various segments related to heavy engineering and machinery. Few of these segments include oil & gas
                    equipment, steel, cement & power plant equipment, transportation, mining & exploration, earthmoving & yellow line
                    equipment, agricultural machinery & equipment, material handling equipment, packaging machinery and machine tools.
                  </p>

                  <section className="space-y-4">
                    <h2 className="text-3xl font-semibold text-[#0056a4]">Oil & Gas Equipment</h2>
                    <p>
                      We have helped our clients, including oil & gas operators, exploring & irrigation companies with our services in
                      equipment design and engineering. With our deep understanding and thorough expertise in this field, we have been
                      able to offer our oil & gas clients excellent design solutions in a cost-effective fashion.
                    </p>

                    <h2 className="text-3xl font-semibold text-[#0056a4]">Steel, Cement & Power Plant Equipment</h2>
                    <p>
                      Our solutions are crafted around leveraging the benefit of our design, validation, testing and PLM expertise to our
                      clients in the field of steel, cement and power plants. Through the product lifecycle, we provide services that
                      complement the service offerings and product vision of our clients. With our services, we enable our clients to
                      introduce variations and test them at all the aspects to spell success.
                    </p>

                    <h2 className="text-3xl font-semibold text-[#0056a4]">Transportation</h2>
                    <p>
                      In the transportation industry, it&apos;s vital for manufacturers and OEMs to keep investing in newer and innovative
                      products. GTS helps our transportation clients by providing time-testing design, illustrations, and FEA validation
                      services so that they can ensure better products and reduce the time to market.
                    </p>

                    <h2 className="text-3xl font-semibold text-[#0056a4]">Mining & Exploration</h2>
                    <p>
                      Many of the leading mining & exploration companies have been relying on our expertise in PLM, design, validation,
                      quality assurance and structural integrity assessment. As a result, our clients have been able to maintain efficiency
                      in their supply chain and optimize their profitability.
                    </p>

                    <h2 className="text-3xl font-semibold text-[#0056a4]">Earthmoving & Yellow Line Equipment</h2>
                    <p>
                      We help our clients with the design and validation of their heavy earthmoving and yellow line equipment. We cater
                      to the resource deficiency needs of our clients in these industries and streamline their product engineering and
                      design activities utilizing our expertise.
                    </p>

                    <h2 className="text-3xl font-semibold text-[#0056a4]">Agricultural Machinery & Equipment</h2>
                    <p>
                      We understand the design concerns associated with the agricultural machinery and carefully consider all the pertinent
                      issues while assisting our clients. While performing the design & validation we take care of all the crucial
                      aspects, such as safety, compliance, supply chain, hazards, noise, and vibration etc.
                    </p>

                    <h2 className="text-3xl font-semibold text-[#0056a4]">Material Handling Equipment</h2>
                    <p>
                      Our proven material handling equipment design process involves input from all parties affected by the system including
                      operations, maintenance, IT and vendors. We rely on our extensive industry experience to develop a material handling
                      system design and a comprehensive set of performance and bid specifications. We can define system and subsystem-level
                      requirements, develop layout options, perform simulation and analysis, and select best-of-breed technologies.
                    </p>

                    <h2 className="text-3xl font-semibold text-[#0056a4]">Packaging Machinery</h2>
                    <p>
                      We contribute to the packaging machinery industry by responding to the increasing challenges related to
                      bio-degradability, recycling capability, increasing complexity, cost-effectiveness, load bearing capability, volume
                      capacity. Our deep understanding of design, material selection, procurement, and manufacturing coupled with our
                      expertise in simulation, analysis and modeling gives us an edge over our competitors and makes us a favorite choice
                      for our clients worldwide.
                    </p>
                  </section>
                </div>
              ) : isRailwaysIndustryPage ? (
                <div className="mt-5 space-y-6 text-[15px] leading-7 text-slate-700">
                  <p>
                    GTS offers world-class range of services to the railway industry and help in meeting customer specific requirements.
                    We aim at designing solutions that are cost-effective as well as environment friendly. We specialize in railroad
                    signal and communications and we offer wide range of services, such as signal and communications design, estimating,
                    field surveys, field testing, cutover testing, as-in service preparation, signal construction, construction
                    management, project management, and commissioning support. Our engineers are working on diverse engineering solutions
                    & applications as below catering to Rail Road industry:
                  </p>

                  <ul className="ml-5 space-y-2">
                    <li className="list-disc">Mechanical – design & analysis</li>
                    <li className="list-disc">Signaling & Interlocking/ Signal & Telecom</li>
                    <li className="list-disc">Civil & Structural – bridge & tunnel engineering</li>
                    <li className="list-disc">Electrical & Electronics</li>
                    <li className="list-disc">Technical Publications</li>
                    <li className="list-disc">Engineering IT & design automation/ Rail Software Development</li>
                    <li className="list-disc">
                      Rail Asset Management, Rail Network Data Capturing/ network engineering – GIS
                    </li>
                    <li className="list-disc">Project management</li>
                  </ul>

                  <p>
                    For Rail Road, we mainly follow AREMA standards along with ISO/ ASME/ ANSI. Our state-of-the-art Engineering Centers
                    has highly skilled engineers and established competencies in Rail Solutions.
                  </p>

                  <section className="space-y-4">
                    <h2 className="text-3xl font-semibold text-[#0056a4]">
                      Our key services in the railway industry also include:
                    </h2>

                    <h3 className="text-xl font-semibold text-[#0056a4]">
                      Engineering IT and Design Automation Service
                    </h3>
                    <p>
                      We have both expertise and experience is designing solutions for Wayside Train Control Systems and Highway Grade
                      Crossing Warning Systems. We offer complete design packages, including site surveys, detailed design sketches, etc.
                      for project of all sizes. GTS also specializes in offering custom design solutions, which can also be complemented
                      with in-service testing document for best implementation of custom design.
                    </p>

                    <h3 className="text-xl font-semibold text-[#0056a4]">Mechanical Design & Analysis</h3>
                    <p>
                      GTS possesses expert resources in the form of employees who are specialized in providing both Computer Aided Design
                      & Drafting (CADD) as well as manual drafting. We have the required infrastructure and advanced AutoCAD and 3D CAD
                      software to provide Computer Aided Designing for Mechanical Components, Finite Element Modeling as well as
                      Computational Fluid Dynamics (CFD). We convert manual drawing to electronic format by redrawing or scanning it. In
                      addition to this, we can combine a raster file with client&apos;s vector file to create a hybrid CADD file. Our engineers
                      are also well equipped with required expertise to create preliminary structural designs and drawings.
                    </p>

                    <h3 className="text-xl font-semibold text-[#0056a4]">Construction Services & Management</h3>
                    <p>
                      The experienced construction team at GTS can provide field construction and equipment installation of your highway
                      crossing or wayside signal project. We complete all the required documents before the construction begins to ensure
                      that all construction is performed in compliance with Federal Railroad Administration (FRA), and client regulations
                      and standards. Our construction services are backed with day-to-day construction management, including supervision of
                      field forces, project schedule maintenance, budget maintenance, and quality assurance. We also provide on-site
                      project management as well as technical support during installation.
                    </p>

                    <h3 className="text-xl font-semibold text-[#0056a4]">
                      Communication & Electrical Engineering Services
                    </h3>
                    <p>
                      GTS provides complete solutions for your communications and electrical network. Our range of communication services
                      includes outside plant, inside plant, and optical engineering, in addition to services like CCTV design, data
                      collection/fusion, and bandwidth studies. Our electrical design services include design of Cubicles, Panels,
                      Switchgear, Battery Box, Lighting System, Cable Schematic and Wiring Harnesses. We have been providing solutions for
                      various types of projects, including Advanced Transportation Management System, Infrastructure Asset Management,
                      Geographic Information System, and Inventory Management System.
                    </p>
                  </section>
                </div>
              ) : isMarineIndustryPage ? (
                <div className="mt-5 space-y-6 text-[15px] leading-7 text-slate-700">
                  <p>
                    GTS has been providing world-class engineering solutions to the commercial marine market. We offer next-generation
                    engineering solutions for ship designing, ship construction, ship repair and overall lifecycle management by
                    continually seeking new and improved ways of providing services needed by the customers.
                  </p>
                  <p>
                    We are proud to have onboard a team of experienced designers and naval architects who are proficient in using our
                    sophisticated software system to lower design cost, fast project deliveries and overall enhance productivity. What
                    makes us different from others is our experienced skill base for Marine Services, which include:
                  </p>

                  <ul className="ml-5 space-y-2">
                    <li className="list-disc">
                      Naval Architects with diverse expertise & extensive experience in design & construction of ships at shipyards
                    </li>
                    <li className="list-disc">
                      Marine Chief Engineers with experience in different types of vessels & shipyards
                    </li>
                    <li className="list-disc">
                      Well Qualified Graduate Engineers, Mechanical, Structural, Electrical & Metallurgical with experience in Marine industry
                    </li>
                    <li className="list-disc">Designers with experience in marine structure and engineering</li>
                    <li className="list-disc">CAD Engineers with experience in 3D drawing and CAD modelling</li>
                  </ul>

                  <p>
                    We have the required skill set and experience needed for using advanced software, such as Tribon, Intelliship, Ship
                    Constructor, PDS, AutoCAD, and many more. We invite you all to enjoy the benefits of marine engineering services
                    offered by GTS and avail its quick response service and ability to provide fast turnaround repairs, thus minimizing
                    disruption for ship operators.
                  </p>

                  <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white p-3 sm:p-5">
                    <Image
                      src="/image/industries-marin.png"
                      alt="Marine Industry Engineering Services"
                      width={1100}
                      height={700}
                      className="h-auto w-full object-contain"
                    />
                  </div>
                </div>
              ) : isConsumerIndustryPage ? (
                <div className="mt-5 space-y-6 text-[15px] leading-7 text-slate-700">
                  <p>
                    To survive in today&apos;s harsh and competitive business environment, consumer companies need to understand the
                    changing consumer needs and come up rapidly with relevant product and solutions. To do this, the consumer companies
                    must answer few important questions – How to enhance business efficiency and streamline operations? How to increase
                    affordability, reduce cost and ensure security of supply? All of these conditions must be met, while under immense
                    pressure, to deliver what consumer wants and thus gain an edge over your competitors.
                  </p>
                  <p>
                    At GTS, we help consumer companies to address these challenges and develop faster, smoother and easier technologies
                    to reduce time and enhance cost-performance ratio. With decades of combined engineering experience, our teams of
                    expert professionals can support entire product lifecycle from pre-product development to its manufacturing, support,
                    and testing. We cater to needs of varied industry groups, including office automation, consumer electronics, consumer
                    durables, security, and gaming equipment.
                  </p>

                  <section className="space-y-4">
                    <h2 className="text-3xl font-semibold text-[#0056a4]">Office Automation:</h2>
                    <p>
                      Ever-changing business needs, increasing complexity, and cut-throat competition has forced companies to demand for
                      faster and smoother office automation products. To stay abreast with the latest technologies and to reduce time and
                      cost for processing digital media, you need smart and creative office solutions. Innovative designs at GTS helps
                      you streamline office processes and offer a quick turnaround time for your customers thus reducing time to market.
                    </p>
                    <p>Our office automation services include:</p>
                    <ul className="ml-5 space-y-2">
                      <li className="list-disc">Hardware and application development</li>
                      <li className="list-disc">Software support</li>
                      <li className="list-disc">Benchmarking and pre-product development</li>
                      <li className="list-disc">Product re-engineering</li>
                      <li className="list-disc">System integration</li>
                      <li className="list-disc">Manufacturing support</li>
                      <li className="list-disc">After market support</li>
                    </ul>
                  </section>

                  <section className="space-y-4">
                    <h2 className="text-3xl font-semibold text-[#0056a4]">Electronics and Durables</h2>
                    <p>
                      Both Consumer Electronics and Consumer Durables are probably the fastest growing business segments. The revolutions
                      in these industries are in full throttle. Smartphones and tablets have changed the way people used to stay connected.
                      Working in the consumer electronics industry demands you to be one your toes where a new product is instantly replaced
                      by a newer one. Similarly consumer durables demand for greener, lighter, and more eco friendly appliances to suit
                      today&apos;s busy and budget-conscious lifestyle.
                    </p>
                    <p>
                      At GTS, we understand the need of today&apos;s consumers and offer our clients with the modern and most economic designs
                      that are sure to lure their consumers. We use our years of engineering experience to design products that are both
                      eco and cost friendly. We stay abreast with latest technology and design futuristic products to meet consumer needs
                      today as well as in coming time.
                    </p>
                    <p>Our Consumer Electronics and Consumer Durables services include:</p>
                    <ul className="ml-5 space-y-2">
                      <li className="list-disc">Product design and development</li>
                      <li className="list-disc">Hardware and firmware development</li>
                      <li className="list-disc">Application development</li>
                      <li className="list-disc">Product testing and support</li>
                      <li className="list-disc">Manufacturing support</li>
                      <li className="list-disc">Value added services</li>
                    </ul>
                  </section>

                  <section className="space-y-4">
                    <h2 className="text-3xl font-semibold text-[#0056a4]">Security and Gaming Equipment</h2>
                    <p>
                      At GTS, we understand the importance of security for your business and that is why we have a special team of
                      talented and experienced engineers who work hard to come up with innovative designs that are reliable as well. Our
                      several years of experience in designing security equipment have helped us establish ourselves as market leaders in
                      designing robust and reliable security products that too at extremely pocket-friendly prices.
                    </p>
                    <p>
                      With new and better gaming consoles being invented with each passing day, people working in consumer gaming equipment
                      must stay ready to deal with the competition. Consumer demands for newer and smarter gaming consoles and as a
                      consumer-centric company, we work real hard to provide our customers with the best gaming experience. We design
                      futuristic games to ensure our customers always stay ahead in the race regardless of the changes.
                    </p>
                    <p>Our Security and Gaming Equipment services include:</p>
                    <ul className="ml-5 space-y-2">
                      <li className="list-disc">Product design and development</li>
                      <li className="list-disc">Application development</li>
                      <li className="list-disc">Testing and validation</li>
                      <li className="list-disc">System integration</li>
                      <li className="list-disc">User interface and control development</li>
                      <li className="list-disc">Gaming algorithm and application development</li>
                      <li className="list-disc">Integrated security management</li>
                    </ul>
                  </section>
                </div>
              ) : isMedicalDevicesIndustryPage ? (
                <div className="mt-5 space-y-6 text-[15px] leading-7 text-slate-700">
                  <p>
                    GTS provides medical technologies that aim towards providing cost-effective patient care solutions. Our medical
                    equipment research and development team strives to create a fast and fluent system of patient monitoring. We are
                    integrating early diagnosis, remote patient monitoring, wireless devices, innovative parameters, and zero-defect
                    miniature devices to create a fast, fluent, and smooth system of patient care.
                  </p>
                  <p>
                    We understand the need of continuous evolution and innovation in the medical sector and at the same time the pressure
                    medical device manufacturers face due to increased financial pressures. That is why, at GTS we offer complete
                    engineering solutions for medical device manufacturers and deliver carefully designed solutions that drive innovation,
                    cost effective solution and a reduced time to market.
                  </p>
                  <p>
                    Our medical device Research &Development team works on three major product segments:
                  </p>

                  <section className="space-y-4">
                    <h2 className="text-3xl font-semibold text-[#0056a4]">Diagnostic Imaging</h2>
                    <p>
                      With new and advanced diagnostics imaging solutions being launched in the market on a daily basis, the demand for
                      innovative imaging technology is at all time high. At GTS, we work with global leaders to deliver high-end
                      diagnostic image processing solutions spanning across complete medical imaging lifecycle. Our medical engineers are
                      expert in various imaging processes and technologies and help our global clients by offering them imaging solutions
                      with efficient algorithms and faster computing applications.
                    </p>
                    <p>
                      We have the capability to deal with the entire complex development process in the diagnostic imaging sector and
                      deliver solution for various product platforms, such as:
                    </p>
                    <ul className="ml-5 space-y-2">
                      <li className="list-disc">Digital X-Ray Systems</li>
                      <li className="list-disc">Diagnostic Ultrasound Imaging System</li>
                      <li className="list-disc">Tele-Radiology and Tele-Pathology</li>
                      <li className="list-disc">MRI and CT scan systems</li>
                      <li className="list-disc">Computed Tomography Systems</li>
                      <li className="list-disc">Magnetic Resonance Imaging Systems</li>
                      <li className="list-disc">Angiography Systems</li>
                      <li className="list-disc">Nuclear Medicine Imaging Systems</li>
                    </ul>
                  </section>

                  <section className="space-y-4">
                    <h2 className="text-3xl font-semibold text-[#0056a4]">Patient Monitoring System</h2>
                    <p>
                      At GTS, our continuous effort is in developing a world-class, futuristic, and cost-effective patient monitoring
                      system. Our patient monitoring system comprises of complete range of patient care starting from hospital monitoring
                      to bedside monitoring, home monitoring, and much more. Our innovative products are designed to stand tall in the
                      highly competitive market of medical devices and integrate modern trends in healthcare such as wireless communication
                      technology and mobile healthcare with product portfolio to deliver the best and streamlined patient monitoring
                      system. We are committed to deliver cost-effective patient monitoring solutions with a reduced time to market.
                    </p>
                    <p>We offer end-to-end engineering solution to deliver a wide range of patient monitoring system, such as:</p>
                    <ul className="ml-5 space-y-2">
                      <li className="list-disc">ECG, NIBP, IBP, CO2, SPO2, Heart Rate and Fetal Monitors</li>
                      <li className="list-disc">Single and Multi Vital Sign Monitors</li>
                      <li className="list-disc">Multiparameter Cardiac Monitors</li>
                      <li className="list-disc">Central Hand Helds</li>
                      <li className="list-disc">Holter Monitors</li>
                      <li className="list-disc">Respiratory and Anesthesia Monitors</li>
                      <li className="list-disc">Blood Glucose Monitors</li>
                      <li className="list-disc">Spyrometers and Capnographs</li>
                      <li className="list-disc">EEG, EMG, Apnea Monitors</li>
                      <li className="list-disc">Central Nurses&apos; Stations</li>
                      <li className="list-disc">And Remote Patient Monitoring System</li>
                    </ul>
                  </section>

                  <section className="space-y-4">
                    <h2 className="text-3xl font-semibold text-[#0056a4]">Therapeutic Equipment</h2>
                    <p>
                      At GTS, we have a brilliant team of in-house medical device consultants with wealth of knowledge and experience in
                      the therapeutic segment. Our experts posses a deep knowledge in major therapeutic areas and are capable of delivering
                      a wide range of solutions related to medical products and technologies. We can take the product from the initial
                      stages of product development and work on its complete lifecycle. We can also step in at any particular stage and
                      assist our clients with their endeavors. Given below is a representative list of our engineering solutions for the
                      therapeutic segment
                    </p>
                    <ul className="ml-5 space-y-2">
                      <li className="list-disc">Electrosurgical Units</li>
                      <li className="list-disc">Implantable Devices</li>
                      <li className="list-disc">Dialysis Machines</li>
                      <li className="list-disc">Lithotriptors</li>
                      <li className="list-disc">Infusion Pumps</li>
                      <li className="list-disc">Consumer/OTC Products</li>
                      <li className="list-disc">Diabetes Management</li>
                      <li className="list-disc">Wound Care / Wound Healing</li>
                    </ul>
                  </section>
                </div>
              ) : isUtilitiesIndustryPage ? (
                <div className="mt-5 space-y-6 text-[15px] leading-7 text-slate-700">
                  <p>
                    Utilities industry has always been a challenging one. Multiple factors collectively shape its landscape, including
                    factors such as privatization, increasing capital and cross border investments, shifting demands, increasing consumer
                    expectations, and demand for a low carbon future. GTS deep industry knowledge and innovative engineering solutions help
                    our clients in utility industry not only to meet these challenges but to succeed and reach new heights in terms of
                    performance.
                  </p>

                  <section className="space-y-3">
                    <h2 className="text-3xl font-semibold text-[#0056a4]">Client Challenges</h2>
                    <ul className="ml-5 space-y-2">
                      <li className="list-disc">
                        Cope with the increasing consumer demands by building required infrastructure
                      </li>
                      <li className="list-disc">
                        Cut down energy costs by adopting energy efficient technologies
                      </li>
                      <li className="list-disc">
                        Reducing carbon footprints by using alternate and greener source of technologies
                      </li>
                      <li className="list-disc">
                        Maintaining profit with increasing competition, privatization, and cross border investments
                      </li>
                      <li className="list-disc">Adhere to regulatory norms</li>
                    </ul>
                    <p>
                      Our cutting-edge solutions and technical competency in the utilities industry will help you address these challenges
                      in an effective manner as well as enable you to cash opportunities coming your way. Our solutions include:
                    </p>
                  </section>

                  <section className="space-y-4">
                    <h2 className="text-3xl font-semibold text-[#0056a4]">Smart Grid</h2>
                    <p>
                      A smart grid application is designed by making an intelligent combination of various smart grid components. At GTS,
                      we work as your partner to help you with this as well as help you monitor and interpret information to ensure safe
                      and reliable operation while minimizing outages. Our service offerings include various components of smart grid,
                      such as smart data services, meter data management, system integration, and communication solutions.
                    </p>

                    <h2 className="text-3xl font-semibold text-[#0056a4]">IT Systems</h2>
                    <p>
                      Our vast experience in managing IT systems across various industries helps us in gaining a clear understanding of
                      physical networks and inventories in the utilities industries as well. We use our expertise and experience to manage
                      infrastructure and offer IT services such as – Consultancy Services, Data Services, Application Development,
                      Migration, and Integration Services, Testing Services, and Application Support. We provide end to end engineering
                      solutions across complete lifecycle around GIS, OMS, and WMS.
                    </p>

                    <h2 className="text-3xl font-semibold text-[#0056a4]">Operational Systems</h2>
                    <p>
                      At GTS, we use our expertise to help customers offer a range of focused solutions and help them make their
                      operational technology ready for smart grid. We stay abreast with the latest operational technologies such as SCADA
                      and DMS and help in incorporating them for substation and distribution automation. Our insight will help our clients
                      from utility industry to tap the wealth of real-time information collected from SCADA and other intelligent devices
                      and deliver it in order to improve operational efficiency, supply reliability and customer satisfaction.
                    </p>

                    <h2 className="text-3xl font-semibold text-[#0056a4]">Power Engineering</h2>
                    <p>
                      In order to solve system problems, increase efficiency and improve system performance, one needs to understand system
                      needs and solve system problem. At GTS, we provide engineering consulting services to assist customers with this. Our
                      experienced engineering team uses the leading and latest software tools and is capable of providing full range of
                      engineering and network designing solutions for transmission, distribution and industrial systems.
                    </p>
                  </section>
                </div>
              ) : isAerospaceIndustryPage ? (
                <div className="mt-5 space-y-6 text-[15px] leading-7 text-slate-700">
                  <p>
                    Aerospace is one of the most volatile industries that have to deal with technical and global development on one hand
                    and with the rising fuel prices and stringent fleet regulations on the other. To survive and grow in this industry,
                    you need to deliver innovative and quality aerospace engineering solutions while reducing operational cost. GTS
                    Aerospace engineering solutions can help you offer customer-friendly and quality aerospace engineering services while
                    gaining a long-term revenue advantage. Our service offering in the aerospace industry covers:
                  </p>

                  <section className="space-y-4">
                    <h2 className="text-3xl font-semibold text-[#0056a4]">Aero Interiors:</h2>
                    <p>
                      We are known to offer aesthetic design and development services for aircraft interiors. Over the years of serving
                      aero interiors industry, we have helped our clients in designing high-quality, high-comfort aircraft interiors. Our
                      design engineers are highly skilled and expert in designing aircraft interiors tuned to body ergonomics while
                      optimizing weight and space for maximum comfort of the passenger.
                    </p>
                    <p>
                      Our dedicated interior team provides end-to-end solutions for aircraft interiors and seating system. We ensure that
                      our solutions comply with all regulatory requirements and prove to be the most innovative and cost-efficient solution
                      for aero interiors. We offer concept design, detailed design, design review and analysis and optimization for
                      commercial, general aviation and executive jets. We have vast experience in designing the following systems:
                    </p>
                    <ul className="ml-5 space-y-2">
                      <li className="list-disc">Seats</li>
                      <li className="list-disc">Lightings</li>
                      <li className="list-disc">Galley</li>
                      <li className="list-disc">Closets</li>
                      <li className="list-disc">Lavatory</li>
                      <li className="list-disc">Stow bins</li>
                      <li className="list-disc">Ceiling</li>
                      <li className="list-disc">Side Walls</li>
                      <li className="list-disc">Flooring</li>
                      <li className="list-disc">Heat Ventilation</li>
                      <li className="list-disc">Air Conditioning System</li>
                    </ul>
                  </section>

                  <section className="space-y-4">
                    <h2 className="text-3xl font-semibold text-[#0056a4]">Aero Structures:</h2>
                    <p>
                      Continuous innovation in design of airframe and focus on increasing passenger comfort is the success-formula for any
                      aero structure manufacturer. GTS strives to provide the same and work hard to create new innovative designs by making
                      use of latest lightweight materials that can reduce operational cost of the aircraft and help in reducing carbon
                      footprints. With several years of experience in designing aerospace structure, we combine our knowledge and expertise
                      in material science engineering to design the best aircraft design with reduced structural weight thus accelerating
                      cost savings and decreasing the need for fabrication and maintenance.
                    </p>
                    <p>
                      We take care of entire product lifecycle from basic design modification to manufacturing and testing of
                      Aerostructures. We excel in designing the following:
                    </p>
                    <ul className="ml-5 space-y-2">
                      <li className="list-disc">Fuselage</li>
                      <li className="list-disc">Wing & Empennage</li>
                      <li className="list-disc">Leading edge</li>
                      <li className="list-disc">Flap track beam</li>
                      <li className="list-disc">Spoiler and Rudder</li>
                      <li className="list-disc">Vertical and Horizontal Stabilizer</li>
                      <li className="list-disc">Flaps and elevators</li>
                      <li className="list-disc">Elevator</li>
                      <li className="list-disc">Landing gear</li>
                      <li className="list-disc">Nacelle</li>
                      <li className="list-disc">Skin</li>
                      <li className="list-disc">Tail cone</li>
                    </ul>
                  </section>

                  <section className="space-y-4">
                    <h2 className="text-3xl font-semibold text-[#0056a4]">Aero Systems:</h2>
                    <p>
                      GTS aims at making the complex aerospace design system easy for all its clients by providing end-to-end solutions
                      for aero system design. Starting from Product Design to Product Definition, Structural Analysis, Thermal Analysis,
                      Computational Fluid Dynamics Analysis, Avionics, and Embedded System Design, we offer all these services under one
                      roof.
                    </p>
                    <p>
                      Our aero system offering cover the complete product lifecycle from concept to designing, validation, qualification
                      testing and documentation in sub-systems like hydraulic systems, landing gear, fuel system, etc. We provide our
                      clients with solutions that help them meet their stringent budget and time constraints and overcome the pressure
                      faced by aerospace engineering companies to match tight development schedules of the OE. We have established
                      ourselves as experts in offering high technology and high quality services for aero systems thus meeting the
                      challenging engineering needs of all our clients.
                    </p>
                  </section>

                  <section className="space-y-4">
                    <h2 className="text-3xl font-semibold text-[#0056a4]">Aero Engines:</h2>
                    <p>
                      Today, when the prices of aviation fuel are at all time high, aerospace manufacturers are facing dual challenge to
                      design engine with increased performance but with reduced fuel consumption. At GTS, we accept this challenge and
                      promise you to deliver aero engines engineering solutions that aim at accelerating business while taking care of
                      environmental needs.
                    </p>
                    <p>
                      We work independently as well as in collaboration with various global engineering service providers. Our team of
                      expert engineers work real hard on various system designs to ensure that your aero engine project see faster
                      development cycles, improved productivity and reduced operational and product costs.
                    </p>
                    <p>
                      Air engines being a complex machine needs regular maintenance and repair. At GTS, we help you to deal with wear and
                      tear of engines and keep it in excellent operating conditions. In short, we serve as a one-stop shop for all your
                      design, analysis, manufacturing, maintenance, and repair needs of aero engines. Few areas of our expertise include:
                    </p>
                    <ul className="ml-5 space-y-2">
                      <li className="list-disc">Blades</li>
                      <li className="list-disc">Discs</li>
                      <li className="list-disc">Shafts</li>
                      <li className="list-disc">Bearing Supports</li>
                      <li className="list-disc">Nozzle and Nacelle structure</li>
                      <li className="list-disc">After burner systems</li>
                      <li className="list-disc">Casings</li>
                    </ul>
                  </section>
                </div>
              ) : isAutomotiveIndustryPage ? (
                <div className="mt-5 space-y-6 text-[15px] leading-7 text-slate-700">
                  <p>
                    With more and more players entering the market, the automotive landscape is presently going through a rapid
                    technological transformation. Fast changing market trends are forcing automotive OEMs to rethink about their
                    production strategies. In order to survive the intense competition in today&apos;s economy, automotive companies need to
                    develop new ground-breaking designs at affordable prices and reduced time-to-market.
                  </p>
                  <p>
                    GTS industrial automation and control solutions deliver integrated engineering solutions and can help you in addressing
                    these challenges. With our advanced automotive solutions spanning across entire automotive supply chain, we can help
                    our clients capitalize on service opportunities and focus on improving quality, reducing cost, and improving
                    time-to-market.
                  </p>
                  <p>
                    Our in-depth experience in delivering world-class automotive manufacturing solutions enable us to provide right
                    consultation services to our clients about everything related to automotive industry ranging from material to
                    operations and finished product requirements. We understand that different clients have different requirements and
                    hence we work with full dedication to design independent cost-effective and result-oriented solutions for each client.
                  </p>
                  <p>
                    We use of cross-industry knowledge to develop the best solutions for our clients based on various emerging market
                    trends. We ensure to abide by the standards and regulation of the automotive industry by focusing on the locality out
                    customers belongs to. Whatever your automation requirements and challenges are, GTS has a solution!
                  </p>

                  <section className="space-y-3">
                    <h2 className="text-3xl font-semibold text-[#0056a4]">
                      GTS can support your engineering design and analysis programs in the following areas of the automotive industry:
                    </h2>
                    <ul className="ml-5 space-y-2">
                      <li className="list-disc">
                        BIW – Underbody, Floors, Sills, Firewalls, Roof, Side Panels, Dash Front
                      </li>
                      <li className="list-disc">
                        Closures – Doors, Hoods, Mirrors, Deck lids, Sealing
                      </li>
                      <li className="list-disc">
                        Interior – Body, Door, Side trims, Seating systems, IP consoles, Safety systems, HVAC
                      </li>
                      <li className="list-disc">
                        Exterior – Bumpers, Front ends, Lighting systems, Exterior Trim
                      </li>
                      <li className="list-disc">
                        Underbody – Chassis, Suspensions, Braking systems, Wheels, Axles, Sub frames
                      </li>
                      <li className="list-disc">
                        Powertrain – Engine casting, Engine integration, Engine testing and performance
                      </li>
                      <li className="list-disc">
                        Electrical & Electronics – Wire harness, Electrical distribution systems, Safety systems, Telematic systems, and
                        Engine management systems
                      </li>
                    </ul>
                  </section>
                </div>
              ) : isSourcingSolutionsPage ? (
                <div className="mt-5 space-y-6 text-[15px] leading-7 text-slate-700">
                  <h2 className="text-3xl font-semibold text-[#0056a4]">Sourcing solutions</h2>
                  <p>
                    Continually escalating costs of product development and a struggling profitability has necessitated for the companies
                    to look for more agile and cost-effective product building strategies. Understanding this, GTS has been instrumental
                    in providing the best value for your money with its sourcing solutions. Having a team of apt professionals at offshore
                    locations, we are able to reduce the total cost of ownership with our engineering and sourcing expertise.
                  </p>
                  <p>
                    We have developed comprehensive datasheets of suppliers with their respective strengths. This has enabled us to take
                    care of various aspects related to sourcing, such as vendor development and management, supply chain and logistics,
                    quality assurance. With our expertise in source various categories of components, we have helped our clients innovate
                    and mitigate the negative impacts of fierce market competition.
                  </p>

                  <section className="space-y-4">
                    <h3 className="text-3xl font-semibold text-[#0056a4]">Our sourcing competency covers:</h3>
                    <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white p-3 sm:p-5">
                      <Image
                        src="/image/sourcing-solutions.png"
                        alt="Sourcing Solutions Competency"
                        width={1100}
                        height={700}
                        className="h-auto w-full object-contain"
                      />
                    </div>
                  </section>

                  <section className="space-y-4">
                    <h3 className="text-3xl font-semibold text-[#0056a4]">Vendor Development & Management</h3>
                    <p>
                      Vendor management and development is a key aspect associated with any engagement involving sourcing of equipment,
                      components, supplies, or skills. At GTS, we follow a tested methodology of vendor development, which has manifested
                      its success in many of our sourcing related engagements so far.
                    </p>
                    <p>
                      Our vendor development approach is systematic and methodical and allows us to follow every step with complete care
                      and diligence. We attribute the success of our vendor development methodology to the stages including:
                    </p>
                    <ul className="ml-5 space-y-2">
                      <li className="list-disc">Vendor Identification & Selection</li>
                      <li className="list-disc">Vendor Assessment</li>
                      <li className="list-disc">Vendor Matrix and Database Management</li>
                      <li className="list-disc">Prototype Development, Pilot Batch Production & Mass Production</li>
                      <li className="list-disc">Workflow</li>
                    </ul>
                  </section>

                  <section className="space-y-4">
                    <h3 className="text-3xl font-semibold text-[#0056a4]">Quality Assurance</h3>
                    <p>
                      Quality of a developed product is largely dependent on the quality of sourced materials and equipment. This is why
                      importance of quality assurance during the sourcing stage of a product lifecycle cannot be underestimated.
                    </p>
                    <p>
                      The GTS quality team includes quality engineers and inspectors who are able to ensure the highest viable quality
                      employing a number of proven techniques and methods. In order that every sourced part and component meets the
                      quality demands and the exact specifications, we offer the following services related to quality assurance and
                      management:
                    </p>
                    <ul className="ml-5 space-y-2">
                      <li className="list-disc">Supplier Quality Audits</li>
                      <li className="list-disc">Supplier Technical Assessment</li>
                      <li className="list-disc">Advanced Quality Planning & Adherence to APQP procedures</li>
                      <li className="list-disc">Compliance to PPAP requirements</li>
                      <li className="list-disc">Outgoing inspection at each factory</li>
                      <li className="list-disc">Incoming inspection at customers&apos; location(s)</li>
                    </ul>
                  </section>
                </div>
              ) : isTechnologyRepresentationPage ? (
                <div className="mt-5 space-y-6 text-[15px] leading-7 text-slate-700">
                  <h2 className="text-3xl font-semibold text-[#0056a4]">Technology Representation</h2>
                  <p>
                    Many product based companies realize the potential in expanding their market reach to newer markets, industries and
                    geographies. However, with the constraints related to time, money, and expertise, it is often difficult to showcase
                    their strengths, technological foundation and products in newer markets.
                  </p>
                  <p>
                    GTS offers services related to representation of critical products, tools and technologies as per the demand in India.
                    With our technology representation services, we have enabled several leading companies to innovate and market their
                    technology/equipment in upcoming markets and untapped customer segments.
                  </p>

                  <section className="space-y-3">
                    <h3 className="text-3xl font-semibold text-[#0056a4]">
                      Our expertise in technology representation covers many crucial aspects, including:
                    </h3>
                    <ul className="ml-5 space-y-2">
                      <li className="list-disc">
                        Identification and introduction of the latest technology and equipment from across the world to Indian
                        sub-continent
                      </li>
                      <li className="list-disc">
                        Providing of complete technology solutions at the best industry prices
                      </li>
                      <li className="list-disc">Offer superior marketing and technical services to our principals</li>
                    </ul>
                  </section>

                  <section className="space-y-3">
                    <h3 className="text-3xl font-semibold text-[#0056a4]">
                      What makes us the best – Our strengths and capabilities:
                    </h3>
                    <ul className="ml-5 space-y-2">
                      <li className="list-disc">
                        Expert agent services with experience, technological innovation, and in-depth understanding of business
                      </li>
                      <li className="list-disc">Complete transparency and accurate record maintenance</li>
                      <li className="list-disc">Promptness in action and notification</li>
                      <li className="list-disc">
                        Experience of working across geographies and strong global connections
                      </li>
                      <li className="list-disc">Highly trained and qualified resources</li>
                      <li className="list-disc">
                        Required capital and technical competency to sustain long development cycles
                      </li>
                      <li className="list-disc">
                        Ability to customize services specific to company&apos;s size, location and customer segment targets
                      </li>
                      <li className="list-disc">
                        Ability to take care of all aspects of your business from installation to after sales services
                      </li>
                      <li className="list-disc">
                        Proven record of introducing many new technologies and products from all over the world to the Indian technical
                        industry
                      </li>
                    </ul>
                  </section>
                </div>
                ) : isTechnologyCompetenciesPage ? (
                  <TechnologyCompetenciesContent />
                ) : isGlobalEngagementModelsPage ? (
                  <GlobalEngagementModelsContent />
                ) : isCollaborativeCommunicationPage ? (
                  <CollaborativeCommunicationContent />
                ) : isQualityManagementSystemPage ? (
                  <QualityManagementSystemContent />
                ) : isHrValuesPage ? (
                  <HrValuesContent />
                ) : isInfrastructurePage ? (
                  <InfrastructureContent />
                ) : isLifeAtGtsPage ? (
                  <LifeAtGtsContent />
                ) : isWhyJoinUsPage ? (
                  <WhyJoinUsContent />
                ) : isEmploymentOpportunitiesPage ? (
                  <EmploymentOpportunitiesContent />
                ) : (
                  <p className="mt-4 text-slate-600">
                    Content for this submenu is coming soon.
                  </p>
              )}
            </div>
          </div>
        </AnimatedSection>
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

export function generateStaticParams() {
  const sectionToSubmenu: Record<string, string[]> = {
    'about-us': aboutUsSubmenu,
    'service-offerings': serviceOfferingsSubmenu,
    industries: industriesSubmenu,
    'technology-sourcing': technologySourcingSubmenu,
    'delivery-enablers': deliveryEnablersSubmenu,
    careers: careersSubmenu
  };

  return Object.entries(sectionToSubmenu).flatMap(([section, items]) =>
    items.map((entry) => ({
      section,
      item: toSlug(entry)
    }))
  );
}
