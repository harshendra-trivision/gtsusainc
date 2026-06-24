'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import type { LucideIcon } from 'lucide-react';
import {
  BarChart,
  Car,
  CheckCircle2,
  Code,
  Cpu,
  FileText,
  Flame,
  Grid,
  Map,
  Radio,
  Settings,
  ShieldCheck,
  Ship,
  Smartphone,
  Train,
  Truck
} from 'lucide-react';
import {
  AnimatedSection,
  BackgroundGrid,
  FloatingParticles,
  GlassCard,
  GradientButton,
  MagneticCard,
  SectionHeading
} from '@/components/ui';

interface SolutionArea {
  id: string;
  title: string;
  description: string;
  icon: LucideIcon;
  capabilities: string[];
}

interface CapabilityDiscipline {
  name: string;
  icon: LucideIcon;
  summary: string;
  deliverables: string[];
  software: string;
}

const heroVisuals = [
  {
    label: 'Refinery & Process Plant',
    title: 'Industrial asset engineering from concept to commissioning',
    video: '/vedios-gts/energy.mp4'
  },
  {
    label: 'Steel & Structural Systems',
    title: 'Detailed structures, pipe racks, platforms, and fabrication support',
    video: '/vedios-gts/heavy-enginerring.mp4'
  },
  {
    label: '3D Product Engineering',
    title: 'Mechanical design, validation, and design automation workflows',
    video: '/vedios-gts/automobile.mp4'
  },
  {
    label: 'AI & Digital Twin',
    title: 'Connected engineering intelligence for smarter operations',
    video: '/vedios-gts/AI.mp4'
  },
  {
    label: 'Industrial Automation',
    title: 'SCADA, PLC, IoT, and analytics for Industry 4.0 programs',
    video: '/vedios-gts/biology.mp4'
  }
];

const heroVisualTags = [
  'Refinery / Process Plant',
  'Steel Structure Model',
  '3D Product Model',
  'Digital Twin',
  'AI Dashboard',
  'Industrial Automation'
];

const companyEvolutionSteps = [
  {
    phase: 'PHASE 01',
    title: 'Traditional Engineering',
    subtitle: 'Foundational Plant & Product Design',
    description: 'Standardizing conceptual layout, FEED, P&ID development, piping plans, and structural steel detailing. Focus is placed on absolute compliance with ASME, API, and local regulatory standards to ensure construction-stage feasibility.',
    outcome: 'Error-free drawings and constructible designs.'
  },
  {
    phase: 'PHASE 02',
    title: 'Digital Engineering',
    subtitle: 'Simulation-Led Design Validation',
    description: 'Moving from 2D drafts to complex 3D CAD/CAE models. Using Finite Element Analysis (FEA) and Computational Fluid Dynamics (CFD) to validate structural yields, thermal expansion, and fluid dynamics, minimizing physical prototyping.',
    outcome: '30% reduction in prototype validation cycle times.'
  },
  {
    phase: 'PHASE 03',
    title: 'AI-Enabled Engineering',
    subtitle: 'Automation & Workflow Optimization',
    description: 'Eliminating engineering bottlenecks by developing custom software macros, Tekla plug-ins, and API integrations within the engineering design stack. AI tools automatically perform design-rule audits and identify conflicts.',
    outcome: 'Up to 40% reduction in repetitive design effort.'
  },
  {
    phase: 'PHASE 04',
    title: 'Intelligent Asset Lifecycle Management',
    subtitle: 'Connected Digital Twins & Operations',
    description: 'Integrating industrial automation (SCADA/PLC) with cloud-based digital twins and predictive maintenance analytics. Assets are digitally modeled and monitored to predict wear, reduce maintenance downtime, and optimize OEE.',
    outcome: 'Enhanced asset reliability and data-driven operations.'
  }
];

const whyGtsData = [
  {
    title: 'Established Since 2012',
    description: 'Over a decade of continuous operations, successfully executing 100+ multidisciplinary projects across global markets.'
  },
  {
    title: 'US + India Delivery Model',
    description: 'Local US management ensures clear client communications, while India execution hubs provide high-capacity engineering depth.'
  },
  {
    title: 'Process Safety at the Core',
    description: 'HAZOP, SIL, and Quantitative Risk Analyses (QRA) safety systems are built directly into our process and piping designs.'
  },
  {
    title: 'Multidisciplinary Capability',
    description: 'Integrated process, mechanical, piping, electrical, structural, and digital engineering under unified project controls.'
  },
  {
    title: 'Design Automation & Speed',
    description: 'Custom software macros and automated design-clash check workflows shorten project delivery times by up to 40%.'
  },
  {
    title: 'Intelligent Asset Focus',
    description: 'We bridge the gap between physical engineering design and digital database operations to support lifecycle reliability.'
  }
];

const solutionAreas: SolutionArea[] = [
  {
    id: 'plant-process-engineering',
    title: 'Plant & Process Engineering',
    description: 'FEED, process modeling, piping layouts, and stress analysis (CAESAR II) for complex chemical and refining plants.',
    icon: Settings,
    capabilities: ['FEED', 'Process Design', 'Detailed Engineering', 'Piping Stress Analysis', 'ASME Compliance', 'Offshore Topsides']
  },
  {
    id: 'product-engineering',
    title: 'Product Engineering',
    description: 'Concept design, detailed CAD modeling, reverse engineering, and tooling design for manufacturing sectors.',
    icon: Cpu,
    capabilities: ['Mechanical Design', 'CAD Modeling', 'Reverse Engineering', 'Tooling & Fixtures', 'Design Automation', 'Prototyping']
  },
  {
    id: 'simulation-digital-validation',
    title: 'Simulation & Digital Validation',
    description: 'Advanced FEA (ANSYS, Abaqus) and CFD analysis to validate structural strength, heat transfer, and fluid dynamics.',
    icon: BarChart,
    capabilities: ['FEA Structural', 'CFD Fluid Flow', 'Thermal Analysis', 'Fatigue Life', 'Vibration/Modal', 'Mass Optimization']
  },
  {
    id: 'automation-ai-industry-4-0',
    title: 'Automation, AI & Industry 4.0',
    description: 'Operational technology integration, SCADA/PLC programming, IoT architecture, and predictive asset analytics.',
    icon: Radio,
    capabilities: ['SCADA/HMI', 'PLC Programming', 'Digital Twins', 'Industrial IoT', 'Predictive Maintenance', 'Asset Analytics']
  },
  {
    id: 'steel-detailing-structural-engineering',
    title: 'Steel Detailing & Structural Engineering',
    description: 'Structural steel modeling (Tekla), shop drawings, connection designs, and fabricator support.',
    icon: Grid,
    capabilities: ['Tekla 3D Modeling', 'Connection Design', 'Shop Drawings', 'BOM Generation', 'Pipe Racks', 'Equipment Platforms']
  },
  {
    id: 'technical-documentation-asset-intelligence',
    title: 'Technical Documentation & Asset Intelligence',
    description: 'S1000D/ATA iSpec XML documentation, wiring schematics, and interactive operational manuals.',
    icon: FileText,
    capabilities: ['PLM Systems', 'S1000D XML', 'ATA iSpec 2200', 'Wiring Schematics', 'Maintenance Checklists', 'Interactive Manuals']
  }
];

const industriesServed = [
  { title: 'Oil & Gas', icon: Flame },
  { title: 'Refineries', icon: Settings },
  { title: 'Petrochemicals', icon: Flame },
  { title: 'Energy & Utilities', icon: Grid },
  { title: 'Heavy Equipment', icon: Truck },
  { title: 'Advanced Manufacturing', icon: Settings },
  { title: 'Marine & Offshore', icon: Ship },
  { title: 'Water & Wastewater', icon: Grid },
  { title: 'Automotive', icon: Car },
  { title: 'Rail', icon: Train },
  { title: 'Mining', icon: Truck },
  { title: 'Infrastructure', icon: Map }
];

const engineeringCapabilities: CapabilityDiscipline[] = [
  {
    name: 'Process Engineering',
    icon: Settings,
    summary: 'Process design packages and flow modeling that define safe, efficient, and scalable industrial processing operations.',
    deliverables: ['PFD & P&ID Development', 'Material & Energy Balances', 'Equipment Sizing Sheets', 'Utilities Systems Design'],
    software: 'HYSYS | Aspen Plus | AutoCAD'
  },
  {
    name: 'Piping Engineering',
    icon: Grid,
    summary: 'Layout design and stress analysis for piping systems across high-temperature, high-pressure process and utility lines.',
    deliverables: ['Piping Material Specs', 'Isometrics & Layouts', 'CAESAR II Stress Reports', 'Support & Hanger Design'],
    software: 'CAESAR II | PDMS | SP3D | Plant 3D'
  },
  {
    name: 'Structural Engineering',
    icon: Grid,
    summary: 'Structural engineering, detailing, and connection calculations for industrial steel, pipe racks, and foundations.',
    deliverables: ['3D Tekla Models', 'Connection details', 'Shop Drawings', 'Structural Analysis (STAAD)'],
    software: 'Tekla Structures | STAAD.Pro | SDS2'
  },
  {
    name: 'Mechanical Engineering',
    icon: Cpu,
    summary: 'Mechanical engineering for products, pressure vessels, equipment packages, and moving components.',
    deliverables: ['3D CAD Assemblies', 'GD&T Drawings', 'Design Validation', 'Manufacturing Release (BOM)'],
    software: 'SolidWorks | CATIA | NX | Inventor'
  },
  {
    name: 'Automation & Controls',
    icon: Radio,
    summary: 'Operational technology architecture connecting industrial control systems, field telemetry, and cloud databases.',
    deliverables: ['SCADA HMI Layouts', 'PLC Logic Coding', 'Industrial IoT Gateway', 'Operational Dashboards'],
    software: 'FactoryTalk | Siemens TIA Portal | Ignition'
  }
];

const processSafetyItems = [
  {
    title: 'Safety in Design (SiD)',
    description: 'Integrating Process Safety Management (PSM), HAZOP, and SIL classifications early in layout stages to eliminate risks.'
  },
  {
    title: 'EPCM Support',
    description: 'We coordinate procurement timelines, verify technical bid qualifications, and execute detailed project schedules.'
  },
  {
    title: 'PMC Representation',
    description: "Serving as Owner's Representatives to coordinate construction logistics, vendor QA audits, and mechanical hand-overs."
  }
];

const caseStudiesData = [
  {
    title: 'Distillery Plant Engineering',
    challenge: 'Re-engineering process piping layouts within an active greenfield distillery layout to accommodate thermal expansions.',
    solution: 'Performed dynamic CAESAR II stress analysis and optimized loop locations without altering civil structural layout.',
    outcome: 'Zero piping alignment errors during erection and 100% compliance with ASME B31.3.'
  },
  {
    title: 'Heavy Equipment Structural Optimization',
    challenge: 'Reducing structural mass of an industrial processing chassis by 18% without yielding structural integrity under dynamic loading.',
    solution: 'Implemented transient FEA simulation (ANSYS) and iterative design optimization loops.',
    outcome: 'Eliminated two structural redesign phases, reducing manufacturing cost by 12%.'
  },
  {
    title: 'Industrial SCADA Automation',
    challenge: 'Modernizing instrumentation logic and control loops for a regional water treatment system with high downtime occurrences.',
    solution: 'Re-architected SCADA/HMI loops, automated telemetry reports, and configured PLC data paths.',
    outcome: 'Achieved 99.8% asset uptime reporting and enabled preventative maintenance alerts.'
  },
  {
    title: '2D to 3D Compressor Conversion',
    challenge: 'Converting massive archives of legacy 2D drawings into highly accurate 3D solid models with correct parametric references.',
    solution: 'Used a dedicated conversion framework to build clean 3D solid models of all 450+ components, verifying clearances.',
    outcome: 'Converted 100% of legacy paper records to parametric CAD models with zero errors.'
  }
];

const softwareExpertise = [
  { category: 'Plant Design', tools: 'PDMS | SP3D | Plant 3D | CAESAR II' },
  { category: 'Product Engineering', tools: 'SolidWorks | CATIA | NX | Inventor' },
  { category: 'Simulation', tools: 'ANSYS | Abaqus | HyperMesh | LS-Dyna' },
  { category: 'Structural Detailing', tools: 'Tekla | STAAD | SDS2' },
  { category: 'Digital & Cloud', tools: 'Python | MATLAB | Esri ArcGIS | AWS / Azure' }
];

const clientSignals = [
  'EPC Contractors',
  'Energy Operators',
  'Manufacturing OEMs',
  'Utility Providers',
  'Infrastructure Teams',
  'Technology Partners'
];

const qualitySignals = [
  { name: 'ISO 9001 Quality System', desc: 'Dual-level peer reviews and standard checklist controls on all design packages.' },
  { name: 'ASME & API Compliance', desc: 'Detailed mechanical calculations matching high-pressure and processing assets.' },
  { name: 'Secure Project Data', desc: 'Encrypted databases and isolated network repositories protecting client IP.' },
  { name: 'On-Time Project Controls', desc: 'Resource-loaded critical path schedules (CPM) for reliable delivery.' }
];

export default function HomePage() {
  const [activeSlide, setActiveSlide] = useState(0);
  const [activeDiscipline, setActiveDiscipline] = useState(engineeringCapabilities[0].name);
  const [activeEvolutionStep, setActiveEvolutionStep] = useState(0);
  const videoRef = useRef<HTMLVideoElement | null>(null);

  const selectedCapability =
    engineeringCapabilities.find((capability) => capability.name === activeDiscipline) ?? engineeringCapabilities[0];
  const ActiveCapabilityIcon = selectedCapability.icon;

  useEffect(() => {
    const currentVideo = videoRef.current;
    if (!currentVideo) return;
    currentVideo.currentTime = 0;
    void currentVideo.play().catch(() => undefined);
  }, [activeSlide]);

  const handleVideoEnd = () => {
    setActiveSlide((prev) => (prev + 1) % heroVisuals.length);
  };

  return (
    <div className="flex w-full flex-col overflow-hidden bg-white">
      {/* 1. HERO SECTION */}
      <section className="relative min-h-[760px] overflow-hidden bg-slate-950 text-white">
        <video
          ref={videoRef}
          key={heroVisuals[activeSlide].video}
          autoPlay
          muted
          playsInline
          preload="metadata"
          onEnded={handleVideoEnd}
          className="absolute inset-0 h-full w-full object-cover opacity-45"
        >
          <source src={heroVisuals[activeSlide].video} type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/88 to-slate-950/40" />
        <BackgroundGrid variant="fine" className="opacity-70" />
        <FloatingParticles />

        <div className="relative z-10 mx-auto grid min-h-[760px] max-w-7xl grid-cols-1 items-center gap-12 px-4 py-20 sm:px-6 lg:grid-cols-12 lg:px-8">
          <AnimatedSection as="div" className="space-y-8 lg:col-span-7">
            <div className="inline-flex items-center gap-2 rounded-full border border-cyan-200/25 bg-white/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.24em] text-cyan-100 backdrop-blur">
              GTS Engineering®
            </div>
            <div className="space-y-5">
              <p className="text-lg font-semibold text-cyan-200 sm:text-xl">
                Engineering Excellence Powered by AI & Innovation
              </p>
              <h1 className="font-display text-4xl font-extrabold leading-[1.12] tracking-[-0.035em] sm:text-5xl lg:text-[2.85rem] xl:text-[3rem]">
                <span className="block">Multidisciplinary</span>
                <span className="block bg-gradient-to-r from-cyan-200 via-sky-300 to-accent-light bg-clip-text text-transparent drop-shadow-[0_0_24px_rgba(34,211,238,0.18)] lg:whitespace-nowrap">
                  Engineering Solutions
                </span>
                <span className="block">
                  for{' '}
                  <span className="bg-gradient-to-r from-cyan-200 via-sky-300 to-accent-light bg-clip-text text-transparent drop-shadow-[0_0_24px_rgba(34,211,238,0.18)] lg:whitespace-nowrap">
                    Complex Industrial Assets
                  </span>
                </span>
              </h1>
              <p className="max-w-3xl text-base leading-8 text-slate-200 sm:text-lg">
                Delivering end-to-end FEED, detailed plant design, process safety, mechanical validation, and digital workflows for global energy, manufacturing, and infrastructure sectors.
              </p>
            </div>
            <div className="flex flex-wrap gap-4">
              <GradientButton href="/#solutions">
                Explore Core Solutions
              </GradientButton>
              <GradientButton href="/contact" variant="ghost">
                Request Technical Consultation
              </GradientButton>
            </div>
            <p className="max-w-2xl text-[10px] font-mono uppercase tracking-[0.22em] text-slate-400">
              [SYS REGISTRY: US+INDIA GLOBAL DELIVERY MODEL // ESTABLISHED 2012 // COMPLIANT WITH ASME, API, OSHA PSM]
            </p>
          </AnimatedSection>

          <AnimatedSection as="div" delay={0.12} className="lg:col-span-5">
            <GlassCard tone="dark" className="rounded-[2rem] p-3 shadow-2xl shadow-slate-950/60">
              <div className="relative min-h-[420px] overflow-hidden rounded-[1.5rem] border border-white/10 bg-slate-950">
                <video
                  key={`panel-${heroVisuals[activeSlide].video}`}
                  autoPlay
                  muted
                  loop
                  playsInline
                  preload="metadata"
                  className="absolute inset-0 h-full w-full object-cover opacity-70"
                >
                  <source src={heroVisuals[activeSlide].video} type="video/mp4" />
                </video>
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/55 to-transparent" />
                <div className="absolute left-5 right-5 top-5 rounded-2xl border border-cyan-200/20 bg-slate-950/55 p-4 backdrop-blur">
                  <div className="flex items-center justify-between text-xs text-cyan-100">
                    <span className="font-mono uppercase tracking-[0.22em]">Digital Engineering View</span>
                    <span className="rounded-full bg-emerald-400/15 px-2 py-1 text-emerald-200">Live</span>
                  </div>
                  <div className="mt-4 grid grid-cols-3 gap-3">
                    {['Asset Health', 'Design Risk', 'Schedule'].map((metric, index) => (
                      <div key={metric} className="rounded-xl bg-white/10 p-3">
                        <div className="text-[10px] uppercase tracking-wider text-slate-300">{metric}</div>
                        <div className="mt-2 text-lg font-bold text-white">{index === 0 ? '98%' : index === 1 ? 'Low' : '24/7'}</div>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="absolute bottom-5 left-5 right-5 space-y-4">
                  <div>
                    <div className="text-xs font-semibold uppercase tracking-[0.24em] text-cyan-200">
                      {heroVisuals[activeSlide].label}
                    </div>
                    <h3 className="mt-2 text-2xl font-bold leading-tight text-white">
                      {heroVisuals[activeSlide].title}
                    </h3>
                  </div>
                  <div className="grid grid-cols-2 gap-2">
                    {heroVisualTags.slice(0, 4).map((tag) => (
                      <div key={tag} className="rounded-xl border border-white/10 bg-white/10 px-3 py-2 text-[11px] font-medium text-slate-100 backdrop-blur">
                        {tag}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </GlassCard>

            <div className="mt-5 flex justify-center gap-2">
              {heroVisuals.map((visual, index) => (
                <button
                  key={visual.video}
                  onClick={() => setActiveSlide(index)}
                  className={`h-2 rounded-full transition-all ${activeSlide === index ? 'w-10 bg-cyan-300' : 'w-2 bg-white/40 hover:bg-white/70'}`}
                  aria-label={`Show ${visual.label}`}
                />
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* 2. ABOUT GTS & THE COMPANY EVOLUTION STORY */}
      <section className="relative overflow-hidden border-b border-slate-200 bg-slate-50 py-20 sm:py-28">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_12%_15%,rgba(72,202,228,0.12),transparent_32%),radial-gradient(circle_at_90%_28%,rgba(63,55,201,0.08),transparent_34%),linear-gradient(180deg,#f8fafc_0%,#eef4f8_100%)]" />
        <div className="absolute right-0 top-0 h-full w-1/2 blueprint-grid-fine opacity-50" />
        <div className="absolute left-8 top-16 hidden h-28 w-28 rounded-full border border-cyan-300/30 bg-cyan-200/10 blur-sm lg:block" />

        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 items-start">
            {/* Left Column: About GTS & Active Phase details */}
            <div className="lg:col-span-6 space-y-8">
              <div className="relative overflow-hidden rounded-[2.5rem] border border-white/80 bg-white/75 p-8 shadow-[0_30px_90px_rgba(15,23,42,0.06)] backdrop-blur-xl sm:p-10">
                <div className="pointer-events-none absolute -right-20 -top-20 h-52 w-52 rounded-full bg-cyan-300/10 blur-3xl" />
                <div className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-accent/30 to-transparent" />

                <SectionHeading
                  eyebrow="COMPANY OVERVIEW"
                  title="A Decade of Engineering Integrity and Innovation"
                  description="GTS Engineering® has evolved from a specialized structural detailing shop into a multidisciplinary engineering and digital technology partner. We combine classical engineering disciplines with modern automation and data intelligence to keep industrial assets safe, compliant, and highly productive."
                  align="left"
                />

                <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center">
                  <GradientButton href="/about">
                    Read Our Journey
                  </GradientButton>
                  <div className="rounded-full border border-slate-200 bg-slate-100/80 px-4 py-2 text-xs font-bold uppercase tracking-[0.18em] text-slate-600">
                    Established 2012
                  </div>
                </div>
              </div>

              {/* Active Evolution Phase Detail Card */}
              <GlassCard tone="light" className="rounded-3xl p-6 border-slate-200/50 bg-white/85 shadow-lg">
                <div className="flex items-center gap-3">
                  <span className="font-mono text-[10px] font-bold tracking-[0.2em] text-accent px-2.5 py-1 rounded-md bg-accent/10">
                    {companyEvolutionSteps[activeEvolutionStep].phase}
                  </span>
                  <span className="text-xs font-bold text-slate-500">Asset Evolution Stage</span>
                </div>
                <h3 className="mt-4 text-xl font-extrabold text-slate-900">
                  {companyEvolutionSteps[activeEvolutionStep].subtitle}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-slate-600">
                  {companyEvolutionSteps[activeEvolutionStep].description}
                </p>
                <div className="mt-5 border-t border-slate-200/60 pt-4 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                  <span className="text-xs font-mono uppercase tracking-wider text-slate-400">Key Outcome:</span>
                  <span className="text-sm font-extrabold text-accent">
                    {companyEvolutionSteps[activeEvolutionStep].outcome}
                  </span>
                </div>
              </GlassCard>
            </div>

            {/* Right Column: Interactive Vertical Timeline */}
            <div className="lg:col-span-6">
              <div className="relative">
                <div className="absolute -inset-4 rounded-[2.75rem] bg-gradient-to-br from-cyan-300/10 via-accent/5 to-slate-950/5 blur-2xl" />
                <div className="relative rounded-[2.5rem] border border-slate-200 bg-white/90 p-6 sm:p-8 shadow-xl">
                  <h3 className="font-display text-lg font-bold text-slate-900 mb-6 flex items-center gap-2">
                    <span className="h-2 w-2 rounded-full bg-accent animate-pulse" />
                    Company Evolution Story
                  </h3>
                  
                  <div className="relative border-l border-slate-200 ml-4 space-y-8">
                    {companyEvolutionSteps.map((step, idx) => {
                      const isActive = idx === activeEvolutionStep;
                      return (
                        <div key={step.phase} className="relative pl-8">
                          {/* Timeline node */}
                          <button
                            onClick={() => setActiveEvolutionStep(idx)}
                            className={`absolute -left-[15px] top-0.5 flex h-7 w-7 items-center justify-center rounded-full border-2 transition-all ${
                              isActive
                                ? 'bg-accent border-accent text-white scale-110 shadow-lg shadow-accent/25'
                                : 'bg-white border-slate-300 text-slate-400 hover:border-accent hover:text-accent'
                            }`}
                          >
                            <span className="text-[10px] font-bold">{idx + 1}</span>
                          </button>

                          <div
                            onClick={() => setActiveEvolutionStep(idx)}
                            className={`cursor-pointer group rounded-xl p-4 transition-all ${
                              isActive
                                ? 'bg-slate-50 border border-slate-200 shadow-sm'
                                : 'hover:bg-slate-50/50'
                            }`}
                          >
                            <div className="flex items-center justify-between">
                              <span className="text-[10px] font-mono tracking-wider text-slate-400 group-hover:text-accent">
                                {step.phase}
                              </span>
                              {isActive && (
                                <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                              )}
                            </div>
                            <h4 className={`text-base font-bold mt-1 group-hover:text-accent ${isActive ? 'text-accent' : 'text-slate-700'}`}>
                              {step.title}
                            </h4>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. WHY GTS */}
      <section className="relative overflow-hidden bg-slate-950 py-20 text-white sm:py-28">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_0%,rgba(72,202,228,0.18),transparent_30%),radial-gradient(circle_at_84%_20%,rgba(63,55,201,0.18),transparent_30%),linear-gradient(135deg,rgba(2,6,23,0.98),rgba(15,23,42,0.98))]" />
        <BackgroundGrid variant="fine" className="opacity-30" />

        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <AnimatedSection as="div" className="mx-auto mb-16 max-w-3xl text-center">
            <p className="text-xs font-bold uppercase tracking-[0.28em] text-cyan-200">
              KEY DIFFERENTIATORS
            </p>
            <h2 className="mt-4 font-display text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
              Built to Solve Complex Engineering Challenges
            </h2>
            <p className="mt-4 text-base text-slate-400">
              Why asset owners, EPC contractors, and manufacturing OEMs trust GTS with their critical infrastructure.
            </p>
          </AnimatedSection>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {whyGtsData.map((differentiator) => (
              <MagneticCard
                key={differentiator.title}
                intensity={3}
                className="rounded-3xl border-white/10 bg-white/[0.05] p-6 shadow-xl backdrop-blur-sm"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-cyan-200/20 bg-cyan-200/10 text-cyan-200">
                  <CheckCircle2 className="h-5 w-5" />
                </div>
                <h3 className="mt-6 text-xl font-bold tracking-tight text-white">
                  {differentiator.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-slate-300">
                  {differentiator.description}
                </p>
              </MagneticCard>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link href="/downloads" className="inline-flex items-center justify-center rounded-xl border border-white/15 bg-white/5 px-6 py-3 text-sm font-bold text-white transition hover:bg-white/10 hover:border-cyan-300/30">
              Download Full Capability Statement (PDF)
            </Link>
          </div>
        </div>
      </section>

      {/* 4. CORE SOLUTIONS */}
      <section id="solutions" className="relative scroll-mt-32 overflow-hidden bg-white py-20 sm:py-28">
        <div className="absolute inset-0 bg-[url('/image/background.jpg')] bg-cover bg-center bg-no-repeat opacity-10" />
        <div className="absolute inset-0 bg-white/90" />
        <div className="absolute right-0 top-0 h-full w-1/3 blueprint-grid opacity-25" />

        <AnimatedSection as="div" className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="SERVICE PORTFOLIO"
            title="Integrated Solutions Across the Industrial Lifecycle"
            description="Six specialized engineering divisions operating under unified project controls to deliver safe, accurate, and compliant capital projects."
          />

          <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
            {solutionAreas.map((area) => {
              const Icon = area.icon;

              return (
                <MagneticCard
                  id={area.id}
                  key={area.id}
                  className="group scroll-mt-36 rounded-[1.75rem] border border-slate-200 bg-white p-7 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-accent-light/40 hover:shadow-xl hover:shadow-cyan-100/50"
                >
                  <div className="flex items-start justify-between gap-4">
                    <div className="rounded-2xl bg-accent/10 p-3 text-accent transition-colors group-hover:bg-accent group-hover:text-white">
                      <Icon className="h-6 w-6" />
                    </div>
                    <span className="text-xs font-mono uppercase tracking-[0.2em] text-slate-400">Solution</span>
                  </div>
                  <h3 className="mt-6 text-xl font-extrabold text-[#0c132b]">{area.title}</h3>
                  <p className="mt-3 min-h-[72px] text-sm leading-relaxed text-slate-500">{area.description}</p>
                  <div className="mt-6 flex flex-wrap gap-2">
                    {area.capabilities.map((capability) => (
                      <span key={capability} className="rounded-full bg-slate-50 px-3 py-1.5 text-xs font-semibold text-slate-700 ring-1 ring-slate-200">
                        {capability}
                      </span>
                    ))}
                  </div>
                </MagneticCard>
              );
            })}
          </div>
        </AnimatedSection>
      </section>

      {/* 5. INDUSTRIES SERVED */}
      <section id="industries-served" className="scroll-mt-32 border-y border-slate-200 bg-slate-50 py-20 sm:py-28">
        <AnimatedSection as="div" className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="SECTOR EXPERTISE"
            title="Delivering Engineered Solutions Across Diverse Verticals"
            description="GTS supports asset owners, OEMs, EPC teams, and utility operations across critical infrastructure and industrial classes worldwide."
          />
          <div className="mt-14 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
            {industriesServed.map((industry) => {
              const Icon = industry.icon;

              return (
                <MagneticCard key={industry.title} intensity={5} className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition-all hover:-translate-y-0.5 hover:shadow-md">
                  <Icon className="h-6 w-6 text-accent" />
                  <div className="mt-4 text-sm font-extrabold text-slate-900">{industry.title}</div>
                </MagneticCard>
              );
            })}
          </div>
        </AnimatedSection>
      </section>

      {/* 6. ENGINEERING CAPABILITIES */}
      <section className="bg-white py-20 sm:py-28">
        <AnimatedSection as="div" className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="DISCIPLINE MATRIX"
            title="Granular Engineering and Execution Capabilities"
            description="Select a discipline to see how GTS structures design workflows, coordinates deliverables, and maps software tools around industrial needs."
          />

          <div className="mt-14 grid grid-cols-1 gap-8 lg:grid-cols-12">
            <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:col-span-5 lg:grid-cols-2">
              {engineeringCapabilities.map((capability) => {
                const Icon = capability.icon;
                const isActive = capability.name === activeDiscipline;

                return (
                  <button
                    key={capability.name}
                    onClick={() => setActiveDiscipline(capability.name)}
                    className={`flex items-center gap-3 rounded-2xl border p-4 text-left transition-all cursor-pointer ${isActive
                      ? 'border-accent bg-accent text-white shadow-lg shadow-accent/20'
                      : 'border-slate-200 bg-slate-50 text-slate-700 hover:border-accent/40 hover:bg-white'
                      }`}
                  >
                    <Icon className="h-5 w-5 shrink-0" />
                    <span className="text-sm font-bold">{capability.name}</span>
                  </button>
                );
              })}
            </div>

            <div className="lg:col-span-7">
              <div className="h-full rounded-[2rem] border border-slate-200 bg-slate-950 p-8 text-white shadow-xl">
                <div className="flex items-center gap-4">
                  <div className="rounded-2xl bg-cyan-300/15 p-4 text-cyan-200">
                    <ActiveCapabilityIcon className="h-8 w-8" />
                  </div>
                  <div>
                    <div className="text-xs font-mono uppercase tracking-[0.24em] text-cyan-200">Selected Discipline</div>
                    <h3 className="mt-1 text-2xl font-extrabold">{selectedCapability.name}</h3>
                  </div>
                </div>
                <p className="mt-6 text-sm leading-7 text-slate-300">{selectedCapability.summary}</p>
                
                <div className="mt-6">
                  <span className="text-xs font-mono uppercase tracking-wider text-slate-400">Primary Systems: </span>
                  <span className="text-xs font-mono font-bold text-cyan-200">{selectedCapability.software}</span>
                </div>

                <div className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-2">
                  {selectedCapability.deliverables.map((deliverable) => (
                    <div key={deliverable} className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 p-4">
                      <CheckCircle2 className="h-5 w-5 shrink-0 text-cyan-300" />
                      <span className="text-sm font-semibold text-slate-100">{deliverable}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </AnimatedSection>
      </section>

      {/* 7. PROCESS SAFETY & EPC SUPPORT */}
      <section className="bg-slate-50 py-20 sm:py-28 border-t border-slate-200">
        <AnimatedSection as="div" className="mx-auto grid max-w-7xl grid-cols-1 gap-12 px-4 sm:px-6 lg:grid-cols-12 lg:px-8">
          <div className="lg:col-span-5">
            <SectionHeading
              eyebrow="RISK MITIGATION"
              title="Uncompromising Process Safety & EPCM Support"
              description="We integrate hazard identification (HAZOP/SIL) and engineering design early. This helps mitigate construction risk, protect field personnel, and maintain schedule compliance."
              align="left"
            />
          </div>
          <div className="lg:col-span-7">
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
              {processSafetyItems.map((item) => (
                <MagneticCard key={item.title} intensity={4} className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm flex flex-col justify-between">
                  <div>
                    <ShieldCheck className="h-6 w-6 text-accent" />
                    <h3 className="mt-4 text-base font-extrabold text-slate-900">{item.title}</h3>
                    <p className="mt-2 text-xs leading-relaxed text-slate-500">{item.description}</p>
                  </div>
                </MagneticCard>
              ))}
            </div>
          </div>
        </AnimatedSection>
      </section>

      {/* 8. DIGITAL TRANSFORMATION & AI */}
      <section id="ai-digital" className="scroll-mt-32 overflow-hidden bg-slate-950 py-20 text-white sm:py-28">
        <AnimatedSection as="div" className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 px-4 sm:px-6 lg:grid-cols-12 lg:px-8">
          <div className="lg:col-span-6">
            <SectionHeading
              eyebrow="DIGITAL STRATEGY"
              title="Engineering Intelligence for Smart Operations"
              description="Connecting physical assets with telemetry data. We customize PLM setups (Teamcenter, Windchill), configure automation logic, and develop custom CAD macros to automate up to 40% of drafting tasks."
              align="left"
              theme="dark"
            />
            <div className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-2">
              {[
                'AI-Powered CAD Automation',
                'Predictive Maintenance Analytics',
                'Connected Digital Twins',
                'PLM Workflow Integrations',
                'OT SCADA to IT ERP Bridges',
                'Data-Driven Operations'
              ].map((capability) => (
                <div key={capability} className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 p-4">
                  <CheckCircle2 className="h-5 w-5 shrink-0 text-cyan-300" />
                  <span className="text-sm font-semibold text-slate-100">{capability}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:col-span-6">
            <div className="rounded-[2rem] border border-cyan-200/20 bg-white/10 p-4 shadow-2xl shadow-cyan-950/40">
              <div className="relative min-h-[420px] overflow-hidden rounded-[1.5rem] bg-slate-900">
                <video autoPlay muted loop playsInline preload="metadata" className="absolute inset-0 h-full w-full object-cover opacity-55">
                  <source src="/vedios-gts/AI.mp4" type="video/mp4" />
                </video>
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/55 to-slate-950/10" />
                <div className="absolute inset-x-5 top-5 grid grid-cols-3 gap-3">
                  {[
                    ['OEE Metric', '91%'],
                    ['Anomaly Risk', 'Low'],
                    ['MTBF Factor', '+18%']
                  ].map(([label, value]) => (
                    <div key={label} className="rounded-2xl border border-white/10 bg-slate-950/55 p-4 backdrop-blur">
                      <div className="text-[10px] uppercase tracking-[0.2em] text-slate-400">{label}</div>
                      <div className="mt-2 text-2xl font-extrabold text-cyan-200">{value}</div>
                    </div>
                  ))}
                </div>
                <div className="absolute bottom-5 left-5 right-5 rounded-2xl border border-cyan-200/20 bg-slate-950/65 p-5 backdrop-blur">
                  <div className="mb-4 flex items-center justify-between">
                    <span className="text-xs font-mono uppercase tracking-[0.24em] text-cyan-200">Industrial IoT Dashboard</span>
                    <span className="rounded-full bg-cyan-300/15 px-3 py-1 text-xs text-cyan-100">Live Telemetry</span>
                  </div>
                  <div className="space-y-3">
                    {['Predict compressor valve wear', 'Optimize plant heat load balance', 'Align EPCM maintenance schedule'].map((item, index) => (
                      <div key={item} className="flex items-center gap-3 rounded-xl bg-white/10 p-3">
                        <span className="flex h-7 w-7 items-center justify-center rounded-full bg-cyan-300/15 text-xs font-bold text-cyan-100">
                          {index + 1}
                        </span>
                        <span className="text-sm text-slate-100">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </AnimatedSection>
      </section>

      {/* 9. FEATURED PROJECTS & CASE STUDIES */}
      <section id="featured-projects" className="scroll-mt-32 bg-white py-20 sm:py-28">
        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="PROVEN TRACK RECORD"
            title="Representative Projects Mapped to Client Value"
            description="Review specific engineering challenges and measurable business outcomes GTS teams have delivered to global operators."
          />
          <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-2">
            {caseStudiesData.map((project, index) => (
              <MagneticCard key={project.title} className="group rounded-[1.75rem] border border-slate-200 bg-slate-50 p-6 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-mono tracking-wider text-slate-400 uppercase">CASE STUDY 0{index + 1}</span>
                    <span className="h-2 w-2 rounded-full bg-[#3f37c9]" />
                  </div>
                  <h3 className="mt-4 text-xl font-extrabold text-slate-900">{project.title}</h3>
                  
                  <div className="mt-4 space-y-3 border-t border-slate-200/60 pt-4">
                    <p className="text-xs text-slate-600">
                      <strong className="text-slate-800 font-bold uppercase tracking-wider block text-[10px] mb-1">Challenge:</strong>
                      {project.challenge}
                    </p>
                    <p className="text-xs text-slate-600">
                      <strong className="text-slate-800 font-bold uppercase tracking-wider block text-[10px] mb-1">Solution:</strong>
                      {project.solution}
                    </p>
                  </div>
                </div>
                
                <div className="mt-6 border-t border-slate-200/60 pt-4 flex items-center justify-between">
                  <span className="text-[10px] font-mono uppercase tracking-wider text-slate-400">Business Outcome:</span>
                  <span className="text-xs font-extrabold text-accent text-right pl-4">{project.outcome}</span>
                </div>
              </MagneticCard>
            ))}
          </div>
          
          <div className="mt-10 text-center">
            <Link href="/case-studies" className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-wider text-accent hover:text-accent-indigo">
              View All Global Case Studies →
            </Link>
          </div>
        </div>
      </section>

      {/* 10. SOFTWARE & TECHNOLOGY EXPERTISE */}
      <section className="bg-slate-950 py-20 text-white sm:py-28">
        <AnimatedSection as="div" className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="TOOL STACK ALIGNMENT"
            title="Engineering Platforms and CAD/CAE Systems"
            description="We support major industrial software tools to ensure seamless data integration with client engineering environments."
            theme="dark"
          />
          <div className="mt-14 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-5">
            {softwareExpertise.map((stack) => (
              <GlassCard key={stack.category} tone="dark" className="rounded-[1.5rem] p-6 border-white/5 bg-white/[0.03]">
                <div className="text-xs font-mono uppercase tracking-[0.22em] text-cyan-200">{stack.category}</div>
                <p className="mt-5 text-sm font-semibold leading-7 text-white font-mono">{stack.tools}</p>
              </GlassCard>
            ))}
          </div>
        </AnimatedSection>
      </section>

      {/* 11. GLOBAL DELIVERY MODEL */}
      <section className="bg-white py-20 sm:py-28">
        <AnimatedSection as="div" className="mx-auto grid max-w-7xl grid-cols-1 gap-12 px-4 sm:px-6 lg:grid-cols-12 lg:px-8">
          <div className="lg:col-span-5">
            <SectionHeading
              eyebrow="EXECUTION INTEGRITY"
              title="Global Delivery Model: Continuous Engineering"
              description="Connecting local US project management offices with high-performance engineering delivery hubs in Pune, India."
              align="left"
            />
            <p className="mt-6 text-sm leading-relaxed text-slate-600">
              Our dual-shore framework matches timezone gaps. While local US leads coordinate directly with your teams on design criteria and safety goals, India hubs execute detailed drafting, structural modeling, and code validation, keeping cycle times short.
            </p>
          </div>
          <div className="lg:col-span-7">
            <div className="relative rounded-[2.5rem] border border-slate-200 bg-slate-50 p-6 sm:p-8 shadow-sm">
              <div className="absolute right-6 top-6 rounded-full bg-accent/10 px-3.5 py-1.5 text-[10px] font-bold uppercase tracking-wider text-accent font-mono">
                Active Delivery Link
              </div>
              <h3 className="font-display text-lg font-bold text-slate-900 mb-6">Execution Loop</h3>
              <div className="space-y-4">
                {[
                  { title: 'US Management Hub', desc: 'Direct contract alignment, local design reviews, and engineering scope definitions.' },
                  { title: 'Continuous 24h Project Loop', desc: 'Detailed engineering runs continue in India delivery centers as local business days conclude.' },
                  { title: 'Quality Gate Reviews', desc: 'Standard dual-level peer review checks before releasing final design files.' }
                ].map((step, idx) => (
                  <div key={step.title} className="flex gap-4 p-4 rounded-xl border border-slate-200 bg-white">
                    <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-accent/10 text-xs font-bold text-accent">
                      0{idx + 1}
                    </span>
                    <div>
                      <h4 className="text-sm font-bold text-slate-900">{step.title}</h4>
                      <p className="mt-1 text-xs text-slate-500">{step.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </AnimatedSection>
      </section>

      {/* 12. CLIENTS & CERTIFICATIONS */}
      <section className="bg-slate-50 py-20 sm:py-28 border-t border-slate-200">
        <AnimatedSection as="div" className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="SECURITY & TRUST"
            title="Quality Assurance Systems & Standards Compliance"
            description="We build our workflows around rigorous safety, quality control, and data protection rules."
          />
          <div className="mt-14 grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-6">
            {clientSignals.map((signal) => (
              <MagneticCard key={signal} intensity={3} className="flex min-h-28 items-center justify-center rounded-2xl border border-dashed border-slate-300 bg-white p-4 text-center text-xs font-bold uppercase tracking-wide text-slate-500">
                {signal}
              </MagneticCard>
            ))}
          </div>
          <div className="mt-8 grid grid-cols-1 gap-4 md:grid-cols-4">
            {qualitySignals.map((signal) => (
              <MagneticCard key={signal.name} intensity={3} className="rounded-2xl border border-slate-200 bg-white p-5 text-center shadow-sm flex flex-col justify-between items-center">
                <div className="flex flex-col items-center">
                  <ShieldCheck className="h-6 w-6 text-accent" />
                  <div className="mt-3 text-sm font-extrabold text-slate-900">{signal.name}</div>
                  <div className="mt-2 text-xs text-slate-500 leading-normal">{signal.desc}</div>
                </div>
              </MagneticCard>
            ))}
          </div>
        </AnimatedSection>
      </section>

      {/* 13. CONTACT & CONSULTATION CTA */}
      <section className="bg-primary py-20 text-white sm:py-28">
        <AnimatedSection as="div" className="mx-auto grid max-w-7xl grid-cols-1 gap-12 px-4 sm:px-6 lg:grid-cols-12 lg:px-8">
          <div className="lg:col-span-5">
            <SectionHeading
              eyebrow="CONTACT / CONSULTATION"
              title="Discuss Your Next Capital Project With Us"
              description="Fill out our project intake form to connect with a senior engineering discipline lead. We will review your requirements and follow up with a technical proposal."
              align="left"
              theme="dark"
            />
            <p className="mt-6 text-xs text-slate-400 font-mono tracking-wider uppercase">
              STRATEGIC CONTACT OFFICES: HOUSTON, USA | PUNE, INDIA
            </p>
          </div>

          <div className="lg:col-span-7">
            <form action="/contact" method="get" className="rounded-[2rem] border border-slate-800 bg-slate-900 p-6 text-slate-900 shadow-2xl sm:p-8">
              <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                <label className="flex flex-col gap-2 text-sm font-bold text-slate-200">
                  <span>Industry Sector</span>
                  <select name="industry" defaultValue="" required className="w-full rounded-xl border border-slate-700 bg-slate-850 px-4 py-3 text-sm font-medium text-slate-200 outline-none transition focus:border-accent-light focus:bg-slate-800">
                    <option value="" disabled>Choose industry</option>
                    {industriesServed.map((industry) => (
                      <option key={industry.title} value={industry.title} className="text-slate-800 bg-white">{industry.title}</option>
                    ))}
                  </select>
                </label>

                <label className="flex flex-col gap-2 text-sm font-bold text-slate-200">
                  <span>Service Area</span>
                  <select name="service_area" defaultValue="" required className="w-full rounded-xl border border-slate-700 bg-slate-850 px-4 py-3 text-sm font-medium text-slate-200 outline-none transition focus:border-accent-light focus:bg-slate-800">
                    <option value="" disabled>Choose service area</option>
                    {solutionAreas.map((area) => (
                      <option key={area.id} value={area.title} className="text-slate-800 bg-white">{area.title}</option>
                    ))}
                  </select>
                </label>

                <label className="flex flex-col gap-2 text-sm font-bold text-slate-200">
                  <span>Project Delivery Stage</span>
                  <select name="delivery_stage" defaultValue="" required className="w-full rounded-xl border border-slate-700 bg-slate-850 px-4 py-3 text-sm font-medium text-slate-200 outline-none transition focus:border-accent-light focus:bg-slate-800">
                    <option value="" disabled>Choose stage</option>
                    <option value="concept-feed" className="text-slate-800 bg-white">Conceptual / FEED</option>
                    <option value="detail-design" className="text-slate-800 bg-white">Detail Design</option>
                    <option value="construction-support" className="text-slate-800 bg-white">Procurement & Construction Support</option>
                    <option value="operations" className="text-slate-800 bg-white">Operations & Maintenance</option>
                  </select>
                </label>

                <label className="flex flex-col gap-2 text-sm font-bold text-slate-200">
                  <span>Project Timeline</span>
                  <select name="project_timeline" defaultValue="" required className="w-full rounded-xl border border-slate-700 bg-slate-850 px-4 py-3 text-sm font-medium text-slate-200 outline-none transition focus:border-accent-light focus:bg-slate-800">
                    <option value="" disabled>Choose timeline</option>
                    <option value="immediate" className="text-slate-800 bg-white">Immediate (Under 30 days)</option>
                    <option value="planning" className="text-slate-800 bg-white">Planning Phase (30–90 days)</option>
                    <option value="long-term" className="text-slate-800 bg-white">Long-Term (90 days+)</option>
                  </select>
                </label>
              </div>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <GradientButton type="submit" className="flex-1 cursor-pointer">
                  Submit Engineering Inquiry
                </GradientButton>
                <Link href="/downloads" className="inline-flex flex-1 items-center justify-center rounded-xl border border-slate-700 bg-slate-800 px-6 py-3 text-sm font-bold text-slate-200 transition hover:bg-slate-700 hover:text-white">
                  Download Capability statement
                </Link>
              </div>
            </form>
          </div>
        </AnimatedSection>
      </section>
    </div>
  );
}
