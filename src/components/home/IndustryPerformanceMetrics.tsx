'use client';

import React, { useState, useRef } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Flame,
  Snowflake,
  Database,
  Cpu,
  Zap,
  Droplets,
  FlaskConical,
  Factory,
  Pickaxe,
  Train,
  Ship,
  Sun,
  Building2,
  Plane,
  Stethoscope,
  Pill,
  Car,
  UtensilsCrossed,
  Radio,
  ChevronLeft,
  ChevronRight,
  ArrowRight,
  ShieldCheck,
  Award,
  Globe2,
  Clock,
  Sparkles,
} from 'lucide-react';

interface MetricItem {
  value: string;
  label: string;
  description: string;
}

interface IndustryMetricGroup {
  id: string;
  name: string;
  shortName: string;
  icon: React.ComponentType<{ className?: string }>;
  tagline: string;
  description: string;
  slug: string;
  metrics: MetricItem[];
}

const industryMetricsData: IndustryMetricGroup[] = [
  {
    id: 'oil-gas',
    name: 'Oil & Gas',
    shortName: 'Oil & Gas',
    icon: Flame,
    tagline: 'Engineering Impact Across the Oil & Gas Value Chain',
    description: 'Comprehensive engineering support from upstream exploration and offshore platforms through pipeline networks, processing facilities, and brownfield revamps.',
    slug: 'energy-process-industries',
    metrics: [
      {
        value: '120+',
        label: 'Projects Delivered',
        description: 'Upstream, midstream & downstream facilities delivered worldwide.',
      },
      {
        value: '800+ Miles',
        label: 'Pipeline Engineering',
        description: 'Transmission, gathering, compressor stations & distribution lines.',
      },
      {
        value: '15+',
        label: 'Processing Facilities',
        description: 'Refineries, petrochemical units, and gas processing plants.',
      },
      {
        value: 'FEED → EPC',
        label: 'Delivery Capability',
        description: 'Front-end design, detailed engineering, revamps & lifecycle delivery.',
      },
    ],
  },
  {
    id: 'lng',
    name: 'LNG & Gas Processing',
    shortName: 'LNG',
    icon: Snowflake,
    tagline: 'Delivering Engineering for the Global LNG Industry',
    description: 'World-class cryogenic engineering for export liquefaction, import regasification hubs, containment tanks, and marine bunkering terminals.',
    slug: 'energy-process-industries',
    metrics: [
      {
        value: '10+',
        label: 'LNG Terminals',
        description: 'Export liquefaction & import regasification facility programs.',
      },
      {
        value: '35+ MTPA',
        label: 'LNG Capacity',
        description: 'Global liquefaction & storage throughput supported by our teams.',
      },
      {
        value: '25+',
        label: 'Cryogenic Facilities',
        description: 'Storage tanks, cryogenic piping & marine bunkering systems.',
      },
      {
        value: 'FEED → EPC',
        label: 'Project Lifecycle',
        description: 'End-to-end liquefaction, regasification & storage execution.',
      },
    ],
  },
  {
    id: 'data-centers',
    name: 'Data Centers & Cloud',
    shortName: 'Data Centers',
    icon: Database,
    tagline: 'Engineering Mission-Critical Infrastructure',
    description: 'High-density power distribution, redundant cooling architectures, and commissioning for hyperscale and enterprise compute environments.',
    slug: 'data-centers-digital-infrastructure',
    metrics: [
      {
        value: '5+',
        label: 'Data Centers',
        description: 'Hyperscale & enterprise mission-critical facility programs.',
      },
      {
        value: '150+ MW',
        label: 'IT Load Supported',
        description: 'Critical power capacity and precision thermal management.',
      },
      {
        value: '99.999%',
        label: 'High Availability',
        description: 'Tier III & Tier IV architectural designs and fault-tolerant power.',
      },
      {
        value: '24/7',
        label: 'Mission Critical',
        description: 'Commissioning, digital twins & continuous engineering support.',
      },
    ],
  },
  {
    id: 'semiconductors',
    name: 'Semiconductors',
    shortName: 'Semiconductors',
    icon: Cpu,
    tagline: 'Precision Engineering for Advanced Manufacturing',
    description: 'Ultra-pure utility networks, ISO cleanroom environments, and basebuild-to-tool-hookup engineering for cutting-edge fabs.',
    slug: 'semiconductor-advanced-manufacturing',
    metrics: [
      {
        value: '6+',
        label: 'Fab Facilities',
        description: 'Semiconductor manufacturing complexes & advanced foundries.',
      },
      {
        value: 'ISO Class 1–100',
        label: 'Cleanrooms',
        description: 'High-precision cleanroom environments and airflow design.',
      },
      {
        value: 'Ultra High Purity',
        label: 'Process Utilities',
        description: 'UPW, CDA, specialty chemicals & bulk gas distribution systems.',
      },
      {
        value: 'Fab Ready',
        label: 'Tool Hookups',
        description: 'Basebuild engineering, matrix routing & tool installation.',
      },
    ],
  },
  {
    id: 'power-utilities',
    name: 'Power & Utilities',
    shortName: 'Power & Utilities',
    icon: Zap,
    tagline: 'Engineering Reliable Energy Infrastructure',
    description: 'End-to-end electrical engineering across generation assets, high-voltage transmission, substations, and modern smart grid architectures.',
    slug: 'power-utilities-energy-transition',
    metrics: [
      {
        value: '5+ GW',
        label: 'Power Capacity',
        description: 'Thermal, utility-scale & renewable generation programs.',
      },
      {
        value: '30+',
        label: 'Grid Projects',
        description: 'High-voltage transmission, distribution networks & substations.',
      },
      {
        value: 'Multi-Energy',
        label: 'Engineering Depth',
        description: 'Renewable grid interconnection & battery storage (BESS).',
      },
      {
        value: 'Smart Grid',
        label: 'Digital Engineering',
        description: 'Protection coordination, SCADA & smart utility systems.',
      },
    ],
  },
  {
    id: 'water-wastewater',
    name: 'Water & Wastewater',
    shortName: 'Water & Waste',
    icon: Droplets,
    tagline: 'Sustainable Water Infrastructure',
    description: 'Potable water networks, municipal treatment plants, desalination facilities, and industrial effluent recycling ecosystems.',
    slug: 'infrastructure-transportation',
    metrics: [
      {
        value: '600+ MLD',
        label: 'Treatment Capacity',
        description: 'Daily potable water and industrial wastewater volume engineered.',
      },
      {
        value: '20+',
        label: 'Treatment Plants',
        description: 'Municipal, industrial & zero-liquid-discharge (ZLD) facilities.',
      },
      {
        value: 'Water Reuse',
        label: 'Process Capability',
        description: 'Desalination, membrane bioreactors & circular recycling.',
      },
      {
        value: 'Smart Water',
        label: 'Digital Systems',
        description: 'Hydraulic modeling, telemetry, SCADA & digital asset tracking.',
      },
    ],
  },
  {
    id: 'chemicals',
    name: 'Chemicals & Petrochemicals',
    shortName: 'Chemicals',
    icon: FlaskConical,
    tagline: 'Engineering Complex Process Industries',
    description: 'Specialty chemical synthesis, polymer plants, process safety management, HAZOP facilitation, and debottlenecking revamps.',
    slug: 'energy-process-industries',
    metrics: [
      {
        value: '25+',
        label: 'Process Plants',
        description: 'Petrochemical, chemical & specialty polymer production units.',
      },
      {
        value: '150+',
        label: 'Process Units',
        description: 'Reaction, distillation, crystallization & utility packages.',
      },
      {
        value: 'HAZOP & SIL',
        label: 'Safety Engineering',
        description: 'Safety Integrity Level, QRA & compliance risk assessments.',
      },
      {
        value: 'FEED → EPC',
        label: 'Lifecycle Delivery',
        description: 'Basic engineering design through commissioning & expansions.',
      },
    ],
  },
  {
    id: 'manufacturing',
    name: 'Manufacturing & Industry 4.0',
    shortName: 'Manufacturing',
    icon: Factory,
    tagline: 'Next-Generation Industrial Production',
    description: 'Smart factory architectures, automated assembly lines, robotics integration, and industrial digital twin implementations.',
    slug: 'manufacturing-industrial-systems',
    metrics: [
      {
        value: '80+',
        label: 'Manufacturing Plants',
        description: 'Heavy machinery, discrete manufacturing & assembly facilities.',
      },
      {
        value: '150+',
        label: 'Automation Projects',
        description: 'Robotic workcells, conveyor systems & automated tooling.',
      },
      {
        value: 'Industry 4.0',
        label: 'Smart Factory',
        description: 'MES connectivity, IIoT telemetry & digital shopfloor twins.',
      },
      {
        value: 'End-to-End',
        label: 'Production Systems',
        description: 'Tooling design, line balancing & manufacturing optimization.',
      },
    ],
  },
  {
    id: 'mining-metals',
    name: 'Mining & Metals',
    shortName: 'Mining & Metals',
    icon: Pickaxe,
    tagline: 'Heavy Industrial Engineering',
    description: 'Heavy-duty structural and mechanical engineering for bulk material handling, mineral processing, crushing, and smelters.',
    slug: 'mining-metals',
    metrics: [
      {
        value: '15+',
        label: 'Mining Projects',
        description: 'Open-pit, underground extraction & mineral processing sites.',
      },
      {
        value: '40+',
        label: 'Material Handling',
        description: 'Crushers, stacker-reclaimers, overland conveyors & storage silos.',
      },
      {
        value: 'Digital Mine',
        label: 'Technology Solutions',
        description: 'Automated logistics, asset telemetry & process optimization.',
      },
      {
        value: 'Global Hubs',
        label: 'Engineering Delivery',
        description: 'Heavy structural steel detailing, chutes & slurry piping.',
      },
    ],
  },
  {
    id: 'rail-transportation',
    name: 'Rail & Transportation',
    shortName: 'Rail & Transit',
    icon: Train,
    tagline: 'Engineering Modern Connected Transit',
    description: 'Permanent way alignment, catenary systems, intermodal stations, freight corridors, and maintenance depot infrastructure.',
    slug: 'infrastructure-transportation',
    metrics: [
      {
        value: '25+',
        label: 'Transit Projects',
        description: 'High-speed rail, light rail, metro & freight network corridors.',
      },
      {
        value: '500+ Miles',
        label: 'Track Engineering',
        description: 'Track alignment, permanent way, switches & signaling systems.',
      },
      {
        value: 'Multi-Facility',
        label: 'Transit Stations',
        description: 'Passenger terminals, intermodal hubs, depots & maintenance yards.',
      },
      {
        value: 'BIM & GIS',
        label: 'Asset Management',
        description: '3D rail corridor modeling, asset tracking & lifecycle maintenance.',
      },
    ],
  },
  {
    id: 'marine-offshore',
    name: 'Marine & Offshore',
    shortName: 'Marine & Offshore',
    icon: Ship,
    tagline: 'Naval Architecture & Ocean Engineering',
    description: 'Fixed and floating offshore platforms, FPSOs, marine jetties, hydrodynamic simulations, and subsea structures.',
    slug: 'marine-offshore',
    metrics: [
      {
        value: '25+',
        label: 'Offshore Facilities',
        description: 'Fixed jackets, topside modules, substructures & FPSO vessels.',
      },
      {
        value: '30+',
        label: 'Marine Structures',
        description: 'Jetties, berths, docking facilities & offshore wind foundations.',
      },
      {
        value: 'SACS & FEA',
        label: 'Structural Analysis',
        description: 'Hydrodynamic, wave loading, mooring & fatigue calculations.',
      },
      {
        value: 'Full Lifecycle',
        label: 'Offshore Support',
        description: 'Naval architecture, structural retrofits & decommissioning.',
      },
    ],
  },
  {
    id: 'renewable-energy',
    name: 'Renewable Energy',
    shortName: 'Renewables',
    icon: Sun,
    tagline: 'Powering the Global Energy Transition',
    description: 'Solar PV parks, onshore & offshore wind farms, utility-scale battery energy storage (BESS), and green hydrogen systems.',
    slug: 'power-utilities-energy-transition',
    metrics: [
      {
        value: '21,700+ MW',
        label: 'Renewable Capacity',
        description: 'Solar PV, wind & energy storage capacity across global markets.',
      },
      {
        value: '10,000+',
        label: 'Operating Assets',
        description: 'Wind turbines, inverters, transformers & storage enclosures.',
      },
      {
        value: '800+',
        label: 'Global Clients',
        description: 'IPPs, developers, utilities & asset owners supported worldwide.',
      },
      {
        value: '17+',
        label: 'Countries Connected',
        description: 'International renewable ecosystems and cross-border delivery.',
      },
    ],
  },
  {
    id: 'smart-infrastructure',
    name: 'Smart Infrastructure',
    shortName: 'Smart Infra',
    icon: Building2,
    tagline: 'Engineering Smarter, Resilient Cities',
    description: 'Civil structures, bridges, urban utility networks, smart city frameworks, and collaborative GIS/BIM modeling.',
    slug: 'infrastructure-transportation',
    metrics: [
      {
        value: '35+',
        label: 'Infrastructure Programs',
        description: 'Urban expressways, bridges, drainage & public works programs.',
      },
      {
        value: '10+',
        label: 'Urban Masterplans',
        description: 'Smart city utility corridors, digital mobility & streetscapes.',
      },
      {
        value: 'GIS & BIM',
        label: 'Digital Twins',
        description: 'Integrated 3D spatial infrastructure modeling & project controls.',
      },
      {
        value: 'Resilient',
        label: 'Sustainable Growth',
        description: 'Environmental drainage, stormwater & structural durability.',
      },
    ],
  },
  {
    id: 'aerospace',
    name: 'Aerospace & Defense',
    shortName: 'Aerospace',
    icon: Plane,
    tagline: 'High-Precision Aerospace Engineering',
    description: 'Aerostructure modeling, CFD aerothermal analysis, mechanical avionics enclosures, and ATA iSpec 2200 technical publishing.',
    slug: 'manufacturing-industrial-systems',
    metrics: [
      {
        value: '10+',
        label: 'Aerospace Programs',
        description: 'Commercial aviation, defense systems & space flight hardware.',
      },
      {
        value: '30+',
        label: 'Product Assemblies',
        description: 'Fuselage structures, nacelles, tooling jigs & interior suites.',
      },
      {
        value: 'FEA & CFD',
        label: 'Aerothermal Simulation',
        description: 'Dynamic shock, vibration, modal, thermal & fatigue validation.',
      },
      {
        value: 'AS9100',
        label: 'Certified Engineering',
        description: 'Compliant design controls, technical documentation & PLM.',
      },
    ],
  },
  {
    id: 'medical-devices',
    name: 'Medical Devices',
    shortName: 'Medical Devices',
    icon: Stethoscope,
    tagline: 'Engineering Innovation for Healthcare',
    description: 'ISO 13485-compliant product design, precision diagnostic housings, risk management (FMEA), and design verification (V&V).',
    slug: 'life-sciences-healthcare',
    metrics: [
      {
        value: '30+',
        label: 'Device Programs',
        description: 'Diagnostic imaging, therapeutic systems & patient monitors.',
      },
      {
        value: 'ISO 13485',
        label: 'Quality Standards',
        description: 'Medical device quality management system & design history files.',
      },
      {
        value: 'Design Controls',
        label: 'Product Engineering',
        description: 'Risk management, tolerance stackup & biocompatible design.',
      },
      {
        value: 'FDA & CE',
        label: 'Regulatory Ready',
        description: 'Design verification, validation testing & submission packages.',
      },
    ],
  },
  {
    id: 'life-sciences',
    name: 'Pharmaceuticals & Life Sciences',
    shortName: 'Pharma & Biotech',
    icon: Pill,
    tagline: 'Engineering for Regulated Manufacturing',
    description: 'cGMP facilities, sterile suites, clean utilities (WFI, pure steam, clean gases), and computerized system validation.',
    slug: 'life-sciences-healthcare',
    metrics: [
      {
        value: '25+',
        label: 'Pharma Projects',
        description: 'Active pharmaceutical ingredient (API), formulation & biotech labs.',
      },
      {
        value: '15+',
        label: 'cGMP Facilities',
        description: 'Classified cleanrooms, sterile barrier suites & fill-finish lines.',
      },
      {
        value: 'Clean Utilities',
        label: 'Process Systems',
        description: 'WFI systems, pure steam, clean compressed air & HVAC zoning.',
      },
      {
        value: 'FDA & EMA',
        label: 'Validation Ready',
        description: 'Commissioning, qualification (IQ/OQ/PQ) & GAMP5 documentation.',
      },
    ],
  },
  {
    id: 'automotive',
    name: 'Automotive & Mobility',
    shortName: 'Automotive',
    icon: Car,
    tagline: 'Engineering Future Mobility',
    description: 'Electric vehicle architectures, chassis structures, automated assembly tooling, and crashworthiness simulations.',
    slug: 'manufacturing-industrial-systems',
    metrics: [
      {
        value: '35+',
        label: 'Automotive Programs',
        description: 'EV powertrain platforms, battery enclosures & chassis systems.',
      },
      {
        value: 'Digital Factory',
        label: 'Industry 4.0',
        description: 'Automated assembly, weld fixtures & material handling cells.',
      },
      {
        value: 'Automation',
        label: 'Production Lines',
        description: 'Body-in-white (BIW) robotic lines & assembly sequencing.',
      },
      {
        value: 'Crash & NVH',
        label: 'CAE Simulation',
        description: 'Nonlinear crashworthiness, durability & noise/vibration analysis.',
      },
    ],
  },
  {
    id: 'food-beverage',
    name: 'Food & Beverage',
    shortName: 'Food & Beverage',
    icon: UtensilsCrossed,
    tagline: 'Process Engineering for Safe Production',
    description: 'Hygienic processing facilities, clean-in-place (CIP/SIP) systems, automated packaging cells, and energy recovery networks.',
    slug: 'manufacturing-industrial-systems',
    metrics: [
      {
        value: '20+',
        label: 'Processing Facilities',
        description: 'Breweries, dairy plants, beverage packaging & food processing.',
      },
      {
        value: 'Sanitary Design',
        label: 'Hygienic Engineering',
        description: 'EHEDG & 3-A sanitary piping, sterile valves & CIP/SIP loops.',
      },
      {
        value: 'Smart Factory',
        label: 'Automation',
        description: 'Batch process automation, recipe management & packaging lines.',
      },
      {
        value: 'Energy Efficient',
        label: 'Sustainable Ops',
        description: 'Heat recovery exchangers, water reclamation & green utilities.',
      },
    ],
  },
  {
    id: 'telecom',
    name: 'Telecommunications',
    shortName: 'Telecom',
    icon: Radio,
    tagline: 'Engineering the Connected World',
    description: '5G cellular infrastructure, OSP fiber networks, telecom central offices, and edge computing enclosures.',
    slug: 'data-centers-digital-infrastructure',
    metrics: [
      {
        value: '5G Ready',
        label: 'Network Engineering',
        description: 'Tower structural analysis, small cell deployment & antenna mounts.',
      },
      {
        value: 'Mission Critical',
        label: 'Switch Facilities',
        description: 'Telecom central offices, power backup & cooling architecture.',
      },
      {
        value: 'Fiber Networks',
        label: 'GIS Infrastructure',
        description: 'Outside plant (OSP) route engineering, right-of-way & splicing.',
      },
      {
        value: 'Connected',
        label: 'Digital Future',
        description: 'Resilient broadband, edge network facilities & smart corridors.',
      },
    ],
  },
];

export default function IndustryPerformanceMetrics() {
  const [activeId, setActiveId] = useState<string>('oil-gas');
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const activeIndustry = industryMetricsData.find((item) => item.id === activeId) || industryMetricsData[0];
  const ActiveIcon = activeIndustry.icon;

  const scrollTabs = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const scrollAmount = direction === 'left' ? -280 : 280;
      scrollContainerRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <section className="relative overflow-hidden border-b border-cyan-200/10 bg-slate-950 py-20 text-white sm:py-24">
      {/* Dynamic ambient radial glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_0%,rgba(20,184,166,0.2),transparent_35%),radial-gradient(circle_at_84%_20%,rgba(37,99,235,0.22),transparent_35%),linear-gradient(135deg,rgba(2,6,23,0.98),rgba(15,118,110,0.4),rgba(2,6,23,0.98))]" />

      {/* Subtle World Map Watermark */}
      <div className="absolute inset-0 bg-[url('/image/map.png')] bg-cover bg-center bg-no-repeat opacity-[0.05] pointer-events-none mix-blend-screen" />

      <div className="relative z-10 mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-8">
        {/* ================= HEADER AREA ================= */}
        <div className="text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2.5">
            <span className="h-0.5 w-6 bg-[#0070f3] rounded-full" />
            <span className="text-xs font-mono font-bold uppercase tracking-[0.24em] text-cyan-400">
              INDUSTRY PERFORMANCE METRICS
            </span>
            <span className="h-0.5 w-6 bg-[#0070f3] rounded-full" />
          </div>

          <h2 className="mt-3 text-3xl font-black tracking-tight text-white sm:text-4xl lg:text-5xl font-display leading-[1.15]">
            Engineering Impact Across{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 via-sky-400 to-blue-500">
              Global Industries
            </span>
          </h2>

          <p className="mt-4 text-sm sm:text-base text-slate-300 leading-relaxed">
            Select an industry below to view verified delivery metrics, technical capabilities, and execution scope across complex programs worldwide.
          </p>
        </div>

        {/* ================= INDUSTRY TAB SELECTOR WITH CONTROLS ================= */}
        <div className="relative mt-10">
          {/* Scroll navigation arrows */}
          <div className="hidden sm:flex items-center justify-between pointer-events-none absolute -top-12 right-0 gap-2 z-20">
            <button
              onClick={() => scrollTabs('left')}
              aria-label="Scroll industries left"
              className="pointer-events-auto flex h-9 w-9 items-center justify-center rounded-full border border-slate-700/80 bg-slate-900/90 text-slate-300 hover:border-cyan-400 hover:text-white transition-all shadow-md active:scale-95"
            >
              <ChevronLeft className="h-4 w-4" />
            </button>
            <button
              onClick={() => scrollTabs('right')}
              aria-label="Scroll industries right"
              className="pointer-events-auto flex h-9 w-9 items-center justify-center rounded-full border border-slate-700/80 bg-slate-900/90 text-slate-300 hover:border-cyan-400 hover:text-white transition-all shadow-md active:scale-95"
            >
              <ChevronRight className="h-4 w-4" />
            </button>
          </div>

          {/* Horizontal scroll container */}
          <div
            ref={scrollContainerRef}
            className="flex items-center gap-2.5 overflow-x-auto pb-4 pt-1 scrollbar-thin scrollbar-thumb-cyan-500/20 scrollbar-track-transparent select-none no-scrollbar"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {industryMetricsData.map((ind) => {
              const Icon = ind.icon;
              const isActive = ind.id === activeId;
              return (
                <button
                  key={ind.id}
                  onClick={() => setActiveId(ind.id)}
                  className={`group relative flex items-center gap-2.5 rounded-full px-4 py-2.5 text-xs sm:text-sm font-semibold transition-all duration-300 shrink-0 ${
                    isActive
                      ? 'bg-gradient-to-r from-[#0060df] via-[#0070f3] to-[#0ea5e9] text-white shadow-lg shadow-blue-500/25 border border-cyan-300/40 scale-[1.02]'
                      : 'border border-slate-800 bg-slate-900/80 text-slate-400 hover:border-cyan-500/40 hover:bg-slate-800/80 hover:text-slate-200'
                  }`}
                >
                  <Icon className={`h-4 w-4 ${isActive ? 'text-white' : 'text-cyan-400 group-hover:text-cyan-300'}`} />
                  <span className="whitespace-nowrap">{ind.shortName}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* ================= ACTIVE INDUSTRY DETAILS & 4 KPI CARDS ================= */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeIndustry.id}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.28, ease: 'easeOut' }}
            className="mt-8 rounded-3xl border border-cyan-500/20 bg-slate-900/60 p-6 sm:p-8 lg:p-10 backdrop-blur-md shadow-2xl shadow-slate-950/60"
          >
            {/* Industry Sub-header */}
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 border-b border-slate-800/80 pb-6">
              <div className="flex items-center gap-4">
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl border border-cyan-400/40 bg-gradient-to-br from-cyan-400/20 to-blue-600/30 text-cyan-300 shadow-md shadow-cyan-500/20">
                  <ActiveIcon className="h-7 w-7" />
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <h3 className="font-display text-xl sm:text-2xl font-black text-white">
                      {activeIndustry.name}
                    </h3>
                    <span className="rounded-full bg-cyan-400/15 px-2.5 py-0.5 text-[11px] font-mono font-bold uppercase text-cyan-300 border border-cyan-400/30">
                      Active Metrics
                    </span>
                  </div>
                  <p className="text-xs sm:text-sm text-cyan-200/90 font-medium mt-1">
                    {activeIndustry.tagline}
                  </p>
                </div>
              </div>

              <Link
                href={`/industries/${activeIndustry.slug}`}
                className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold text-cyan-400 hover:text-white transition-colors self-start sm:self-center"
              >
                <span>Explore {activeIndustry.shortName} Solutions</span>
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>

            {/* 4 KPI Cards Grid */}
            <div className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {activeIndustry.metrics.map((metric, idx) => (
                <div
                  key={metric.label}
                  className="group relative overflow-hidden rounded-2xl border border-cyan-500/20 bg-gradient-to-b from-slate-950/80 to-slate-900/90 p-6 backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:border-cyan-400/60 hover:shadow-xl hover:shadow-cyan-500/10"
                >
                  {/* Subtle corner glow */}
                  <div className="pointer-events-none absolute -right-10 -top-10 h-24 w-24 rounded-full bg-cyan-400/10 blur-xl group-hover:bg-cyan-400/20 transition-all" />

                  {/* Metric index badge */}
                  <div className="flex items-center justify-between text-[11px] font-mono font-bold text-slate-500">
                    <span>KPI 0{idx + 1}</span>
                    <span className="h-1.5 w-1.5 rounded-full bg-cyan-400/60 group-hover:bg-cyan-300" />
                  </div>

                  {/* Metric Value */}
                  <div className="mt-4 font-display text-3xl sm:text-4xl lg:text-[2.6rem] font-black tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-cyan-200 via-sky-300 to-blue-400 leading-tight">
                    {metric.value}
                  </div>

                  {/* Metric Label */}
                  <h4 className="mt-3 text-sm sm:text-base font-bold text-white transition-colors group-hover:text-cyan-200">
                    {metric.label}
                  </h4>

                  {/* Metric Context */}
                  <p className="mt-1.5 text-xs text-slate-400 leading-relaxed">
                    {metric.description}
                  </p>

                  {/* Accent bottom line */}
                  <div className="mt-5 h-0.5 w-8 rounded-full bg-cyan-500/50 group-hover:w-14 group-hover:bg-cyan-400 transition-all duration-300" />
                </div>
              ))}
            </div>

            {/* Narrative description */}
            <div className="mt-6 pt-5 border-t border-slate-800/80 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 text-xs text-slate-400">
              <p className="max-w-3xl leading-relaxed">
                <span className="text-slate-200 font-semibold">Scope of Delivery: </span>
                {activeIndustry.description}
              </p>
              <span className="shrink-0 text-cyan-400/80 font-mono font-semibold">
                USA + Global Delivery Hubs
              </span>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* ================= BOTTOM CAPABILITIES & TRUST STRIP ================= */}
        <div className="mt-10 rounded-2xl border border-slate-800/80 bg-slate-900/50 p-5 sm:p-6 backdrop-blur-sm">
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5 divide-y sm:divide-y-0 sm:divide-x divide-slate-800/80">
            <div className="flex items-center gap-3">
              <ShieldCheck className="h-5 w-5 text-cyan-400 shrink-0" />
              <div>
                <div className="text-xs font-bold text-white leading-tight">FEED → EPC Delivery</div>
                <div className="text-[11px] text-slate-400">Concept to commissioning</div>
              </div>
            </div>

            <div className="flex items-center gap-3 pt-3 sm:pt-0 sm:pl-4">
              <Award className="h-5 w-5 text-cyan-400 shrink-0" />
              <div>
                <div className="text-xs font-bold text-white leading-tight">Multidisciplinary</div>
                <div className="text-[11px] text-slate-400">10 integrated disciplines</div>
              </div>
            </div>

            <div className="flex items-center gap-3 pt-3 sm:pt-0 sm:pl-4">
              <Sparkles className="h-5 w-5 text-cyan-400 shrink-0" />
              <div>
                <div className="text-xs font-bold text-white leading-tight">AI & Digital Twins</div>
                <div className="text-[11px] text-slate-400">Next-gen smart engineering</div>
              </div>
            </div>

            <div className="flex items-center gap-3 pt-3 sm:pt-0 sm:pl-4">
              <Globe2 className="h-5 w-5 text-cyan-400 shrink-0" />
              <div>
                <div className="text-xs font-bold text-white leading-tight">USA + India Delivery</div>
                <div className="text-[11px] text-slate-400">Round-the-clock execution</div>
              </div>
            </div>

            <div className="flex items-center gap-3 pt-3 sm:pt-0 sm:pl-4">
              <Clock className="h-5 w-5 text-cyan-400 shrink-0" />
              <div>
                <div className="text-xs font-bold text-white leading-tight">Safety & Compliance</div>
                <div className="text-[11px] text-slate-400">Zero compromise standard</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
