'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {
  Activity,
  ArrowRight,
  BarChart3,
  BookOpen,
  Box,
  Brain,
  Building2,
  Calendar,
  CheckCircle2,
  ChevronRight,
  Cloud,
  Cog,
  Cpu,
  Database,
  Download,
  Factory,
  FileCheck,
  FileDown,
  FileText,
  Globe,
  HardHat,
  Headphones,
  Hexagon,
  Layers,
  Lightbulb,
  MapPin,
  Network,
  Share2,
  ShieldCheck,
  Sparkles,
  TrendingUp,
  Users,
  Wand2,
  Workflow,
  Wrench,
  X,
  type LucideIcon
} from 'lucide-react';
import { AnimatedSection, GradientButton, MagneticCard } from '@/components/ui';

export interface PlmDetailPopupData {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  heroBgImage: string;
  featurePills: { title: string; icon: LucideIcon }[];
  deliverables: string[];
  industries?: string[];
  supportedLabel?: string;
  companiesImage?: string;
  relatedServices: { title: string; icon: LucideIcon }[];
}

interface PlmCardItem {
  id: string;
  title: string;
  image: string;
  icon: LucideIcon;
  bullets: string[];
}

interface SoftwareCardItem {
  id: string;
  title: string;
  icon: LucideIcon;
  bullets: string[];
}

const plmCapabilities: PlmCardItem[] = [
  {
    id: 'plm-strategy-consulting',
    title: 'PLM Strategy & Consulting',
    image: '/image/PLM & software engineer/PLM strategy.jpg',
    icon: Users,
    bullets: ['Digital Strategy', 'Process Redesign', 'Governance & Roadmap']
  },
  {
    id: 'plm-implementation',
    title: 'PLM Implementation',
    image: '/image/PLM & software engineer/PLM implementation.jpg',
    icon: Cog,
    bullets: ['Platform Configuration', 'Migration & Upgrade', 'Workflow Automation']
  },
  {
    id: 'enterprise-integration',
    title: 'Enterprise Application Integration',
    image: '/image/PLM & software engineer/interprice implementation.jpg',
    icon: Cloud,
    bullets: ['PLM + ERP + MES', 'Data & Middleware', 'APIs & Connectors']
  },
  {
    id: 'data-migration',
    title: 'Data Migration',
    image: '/image/PLM & software engineer/data migration.jpg',
    icon: FileText,
    bullets: ['Legacy System Migration', 'CAD & BOM Migration', 'Data Validation']
  },
  {
    id: 'application-management',
    title: 'Application Management',
    image: '/image/PLM & software engineer/application managment.jpg',
    icon: Headphones,
    bullets: ['24/7 Support', 'Performance Optimization', 'Feature Enhancements']
  },
  {
    id: 'manufacturing-innovation',
    title: 'Manufacturing Information Solutions',
    image: '/image/PLM & software engineer/manufacturing innovation solution.jpg',
    icon: Factory,
    bullets: ['MES Integration', 'Digital Work Instructions', 'Production Data Management']
  }
];

const softwareCapabilities: SoftwareCardItem[] = [
  {
    id: 'system-integration',
    title: 'System Integration',
    icon: Network,
    bullets: ['API Development', 'Data Integration', 'Database Integration']
  },
  {
    id: 'knowledge-management',
    title: 'Knowledge Management',
    icon: BookOpen,
    bullets: ['Knowledge Repository', 'Document Management', 'AI-Driven Insights']
  },
  {
    id: 'design-automation',
    title: 'Design & Engineering Automation',
    icon: Cpu,
    bullets: ['CAD Automation', 'EDA Automation', 'Workflow Design']
  },
  {
    id: 'cad-customization',
    title: 'CAD Customization',
    icon: Box,
    bullets: ['Custom Plugin Development', 'Automation Scripts', 'Template Creation']
  },
  {
    id: 'application-support',
    title: 'Application Support',
    icon: Wrench,
    bullets: ['Performance Tuning', 'Bug Resolution', 'Upgrades & Enhancements']
  }
];

const plmPopupDetailsMap: Record<string, PlmDetailPopupData> = {
  'plm-strategy-consulting': {
    id: 'plm-strategy-consulting',
    title: 'PLM Strategy & Consulting',
    subtitle: 'Transform engineering data into a strategic business asset.',
    description:
      'We help organizations define and execute PLM strategies to improve product development, operational efficiency, and accelerate digital transformation.',
    heroBgImage: '/image/PLM & software engineer/PLM learn more/PLM-strategy-bg.jpg',
    featurePills: [
      { title: 'PLM Strategy & Roadmap', icon: Lightbulb },
      { title: 'Process Assessment', icon: FileCheck },
      { title: 'Digital Engineering Consulting', icon: Cpu },
      { title: 'Governance & Standards', icon: ShieldCheck }
    ],
    deliverables: [
      'PLM Roadmap & Assessment',
      'Current State Analysis',
      'Process Alignment',
      'Integration Strategy',
      'ROI Analysis'
    ],
    industries: [
      'Aerospace & Defense',
      'Manufacturing',
      'Industrial Equipment',
      'Medical Devices',
      'Energy & Utilities'
    ],
    supportedLabel: 'Supported Platforms',
    companiesImage: '/image/PLM & software engineer/PLM learn more/PLM_startegy-company.png',
    relatedServices: [
      { title: 'PLM Implementation', icon: BookOpen },
      { title: 'Enterprise Integration', icon: Network },
      { title: 'Change Management', icon: Users }
    ]
  },
  'plm-implementation': {
    id: 'plm-implementation',
    title: 'PLM Implementation',
    subtitle: 'Deploy enterprise PLM platforms that deliver real business value.',
    description:
      'We implement and configure PLM platforms with a focus on user adoption, process integration, and measurable outcomes.',
    heroBgImage: '/image/PLM & software engineer/PLM learn more/PLM-implementation.jpg',
    featurePills: [
      { title: 'System Installation & Configuration', icon: Cog },
      { title: 'Workflow Automation', icon: Workflow },
      { title: 'BOM Management', icon: Layers },
      { title: 'Change Management', icon: Users }
    ],
    deliverables: [
      'Configured PLM Environment',
      'Engineering Workflows',
      'BOM Structures'
    ],
    industries: [
      'Aerospace & Defense',
      'Industrial Equipment',
      'Automotive',
      'Life Sciences'
    ],
    supportedLabel: 'Supported Platforms',
    companiesImage: '/image/PLM & software engineer/PLM learn more/PLM-implementation-company.png',
    relatedServices: [
      { title: 'PLM Strategy', icon: BookOpen },
      { title: 'Data Migration', icon: Database },
      { title: 'Training & Enablement', icon: Users }
    ]
  },
  'enterprise-integration': {
    id: 'enterprise-integration',
    title: 'Enterprise Application Integration',
    subtitle: 'Seamlessly connect PLM with ERP, MES, and cloud platforms.',
    description:
      'We design and implement robust middleware, APIs, and real-time data pipelines that unite engineering with enterprise business operations.',
    heroBgImage: '/image/PLM & software engineer/PLM learn more/system-integration-bg.jpg',
    featurePills: [
      { title: 'PLM + ERP + MES', icon: Cloud },
      { title: 'Middleware & Connectors', icon: Network },
      { title: 'API Integration', icon: Share2 },
      { title: 'Data Synchronization', icon: Database }
    ],
    deliverables: [
      'Enterprise Integration Architecture',
      'Bi-directional BOM Sync',
      'Custom REST/SOAP APIs',
      'Real-time Data Pipelines',
      'End-to-end System Testing'
    ],
    industries: [
      'Discrete Manufacturing',
      'Automotive & Transportation',
      'Aerospace & Defense',
      'Energy & Utilities',
      'High-Tech & Electronics'
    ],
    supportedLabel: 'Supported Platforms',
    companiesImage: '/image/PLM & software engineer/PLM learn more/system-integration-company.png',
    relatedServices: [
      { title: 'PLM Implementation', icon: BookOpen },
      { title: 'Application Management', icon: Headphones },
      { title: 'Data Migration', icon: Database }
    ]
  },
  'data-migration': {
    id: 'data-migration',
    title: 'Data Migration',
    subtitle: 'Securely migrate engineering data with complete integrity.',
    description:
      'We plan, extract, transform and validate engineering data to ensure a smooth and risk-free migration to modern PLM environments.',
    heroBgImage: '/image/PLM & software engineer/PLM learn more/data-migration-bg.jpg',
    featurePills: [
      { title: 'Legacy Data Migration', icon: Database },
      { title: 'CAD Data Migration', icon: Box },
      { title: 'PDM to PLM Migration', icon: FileText },
      { title: 'Metadata Mapping', icon: Layers }
    ],
    deliverables: [
      'Migration Plan',
      'Data Cleansing',
      'Validated Data',
      'Post-Migration Support'
    ],
    industries: [
      'Aerospace & Defense',
      'Manufacturing',
      'Life Sciences',
      'Energy & Utilities'
    ],
    supportedLabel: 'Supported Platforms',
    companiesImage: '/image/PLM & software engineer/PLM learn more/data-migration-company.png',
    relatedServices: [
      { title: 'PLM Implementation', icon: BookOpen },
      { title: 'Application Management', icon: Headphones },
      { title: 'Data Validation', icon: ShieldCheck }
    ]
  },
  'application-management': {
    id: 'application-management',
    title: 'Application Management',
    subtitle: 'Maintain, optimize, and continuously improve your engineering platforms.',
    description:
      'We provide ongoing support, performance tuning, upgrades, and enhancements to ensure your PLM systems deliver maximum value.',
    heroBgImage: '/image/PLM & software engineer/PLM learn more/application-managment-bg.jpg',
    featurePills: [
      { title: 'L1/L2/L3 Support', icon: Headphones },
      { title: 'Performance Optimization', icon: TrendingUp },
      { title: 'Patch & Release Management', icon: Cog },
      { title: 'User Administration', icon: Users },
      { title: 'Continuous Improvement', icon: Activity }
    ],
    deliverables: [
      'SLA Reports',
      'Performance Reports',
      'Digital Integration',
      'System Health Checks',
      'Upgrade Support',
      'Enhancement Delivery'
    ],
    industries: [
      'Aerospace & Defense',
      'Industrial Manufacturing',
      'Automotive & Rail',
      'Energy & Utilities',
      'Medical Technology'
    ],
    supportedLabel: 'Supported Platforms',
    companiesImage: '/image/PLM & software engineer/PLM learn more/application-managment-company.png',
    relatedServices: [
      { title: 'PLM Implementation', icon: BookOpen },
      { title: 'Data Migration', icon: Database },
      { title: 'Application Support', icon: Wrench }
    ]
  },
  'manufacturing-innovation': {
    id: 'manufacturing-innovation',
    title: 'Manufacturing Information Solutions',
    subtitle: 'Bridge engineering and manufacturing for a connected enterprise.',
    description:
      'We enable seamless flow of engineering data to manufacturing systems, improving productivity, quality, and production readiness.',
    heroBgImage: '/image/PLM & software engineer/PLM learn more/manufacturing-information-solution-bg.jpg',
    featurePills: [
      { title: 'MES Integration', icon: Factory },
      { title: 'Digital Work Instructions', icon: FileText },
      { title: 'Production Data Management', icon: BarChart3 },
      { title: 'Shop Floor Connectivity', icon: Network }
    ],
    deliverables: [
      'MES Integration',
      'BOM Synchronization',
      'Digital Work Instructions',
      'Manufacturing Analytics'
    ],
    supportedLabel: 'Supported Platforms',
    companiesImage: '/image/PLM & software engineer/PLM learn more/manufacturing-information-solution-company.png',
    relatedServices: [
      { title: 'Enterprise Integration', icon: Network },
      { title: 'Application Management', icon: Headphones },
      { title: 'Digital Transformation', icon: Sparkles }
    ]
  },
  'system-integration': {
    id: 'system-integration',
    title: 'System Integration',
    subtitle: 'Integrate engineering, manufacturing, and enterprise applications.',
    description:
      'We build robust integration solutions, middleware, and data exchange frameworks for critical engineering systems.',
    heroBgImage: '/image/PLM & software engineer/PLM learn more/system-integration-bg.jpg',
    featurePills: [
      { title: 'API Development', icon: Cpu },
      { title: 'Data Integration', icon: Box },
      { title: 'Database Integration', icon: Database },
      { title: 'IoT Connectivity', icon: Activity }
    ],
    deliverables: [
      'Integration Architecture',
      'Automated Data Flows',
      'APIs & Middleware',
      'Dashboards & Reporting'
    ],
    supportedLabel: 'Supported Technologies',
    companiesImage: '/image/PLM & software engineer/PLM learn more/system-integration-company.png',
    relatedServices: [
      { title: 'Enterprise Integration', icon: Cloud },
      { title: 'Knowledge Management', icon: BookOpen },
      { title: 'Application Support', icon: Headphones }
    ]
  },
  'knowledge-management': {
    id: 'knowledge-management',
    title: 'Knowledge Management',
    subtitle: 'Capture, organize, and share engineering knowledge.',
    description:
      'We build knowledge repositories, search solutions, and collaboration tools to preserve tribal knowledge and accelerate innovation.',
    heroBgImage: '/image/PLM & software engineer/PLM learn more/knowledge-management-bg.jpg',
    featurePills: [
      { title: 'Knowledge Repository', icon: FileText },
      { title: 'Document Management', icon: BookOpen },
      { title: 'Expert Search', icon: Lightbulb },
      { title: 'AI-Driven Insights', icon: Brain }
    ],
    deliverables: [
      'Knowledge Portal',
      'Best Practice Repository',
      'Engineering Templates',
      'Governance Framework'
    ],
    supportedLabel: 'Supported Technologies',
    companiesImage: '/image/PLM & software engineer/PLM learn more/knowledge-management-company.png',
    relatedServices: [
      { title: 'System Integration', icon: Network },
      { title: 'Design Automation', icon: Cpu },
      { title: 'Application Support', icon: Headphones }
    ]
  },
  'design-automation': {
    id: 'design-automation',
    title: 'Design & Engineering Automation',
    subtitle: 'Automate repetitive engineering tasks to increase speed and quality.',
    description:
      'We develop automation tools, scripts, and templates across CAD, PLM, and simulation environments.',
    heroBgImage: '/image/PLM & software engineer/PLM learn more/designe-enginerring-automation-bg.jpg',
    featurePills: [
      { title: 'CAD Automation', icon: Box },
      { title: 'EDA Automation', icon: Cpu },
      { title: 'Engineering Consultation', icon: ShieldCheck },
      { title: 'Workflow Design', icon: Workflow }
    ],
    deliverables: [
      'Automation Scripts',
      'Engineering Standards',
      'Configurable Templates',
      'User Documentation'
    ],
    supportedLabel: 'Supported Platforms',
    companiesImage: '/image/PLM & software engineer/PLM learn more/PLM_startegy-company.png',
    relatedServices: [
      { title: 'CAD Customization', icon: Box },
      { title: 'Knowledge Management', icon: BookOpen },
      { title: 'Application Support', icon: Headphones }
    ]
  },
  'cad-customization': {
    id: 'cad-customization',
    title: 'CAD Customization',
    subtitle: 'Customize CAD platforms to fit your engineering processes.',
    description:
      'We develop custom tools, add-ins, and automation for SolidWorks, NX, CATIA, Creo, and AutoCAD.',
    heroBgImage: '/image/PLM & software engineer/PLM learn more/CDA-customization-bg.jpg',
    featurePills: [
      { title: 'Custom Plugin Development', icon: Cpu },
      { title: 'Automation Scripts', icon: FileCheck },
      { title: 'Template Creation', icon: Layers },
      { title: 'Design Standards', icon: ShieldCheck },
      { title: 'Custom Training', icon: Users }
    ],
    deliverables: [
      'CAD Plugins',
      'Configured Libraries',
      'Automation Scripts',
      'User Documentation',
      'Custom Commands'
    ],
    supportedLabel: 'Supported Platforms',
    companiesImage: '/image/PLM & software engineer/PLM learn more/CDA-customization-company.png',
    relatedServices: [
      { title: 'Design Automation', icon: Cpu },
      { title: 'Knowledge Management', icon: BookOpen },
      { title: 'Application Support', icon: Headphones }
    ]
  },
  'application-support': {
    id: 'application-support',
    title: 'Application Support',
    subtitle: 'Ensure engineering applications remain secure, optimized, and available.',
    description:
      'We provide expert support and maintenance for PLM, CAD, MES, and simulation systems to keep your operations running smoothly.',
    heroBgImage: '/image/PLM & software engineer/PLM learn more/application-support-bg.jpg',
    featurePills: [
      { title: 'User Support', icon: Headphones },
      { title: 'Issue Resolution', icon: CheckCircle2 },
      { title: 'System Monitoring', icon: Activity },
      { title: 'Updates & Patches', icon: Download },
      { title: 'Health Assessments', icon: ShieldCheck }
    ],
    deliverables: [
      'Performance Reports',
      'System Updates',
      'System-wide Maintenance'
    ],
    supportedLabel: 'Supported Platforms',
    companiesImage: '/image/PLM & software engineer/PLM learn more/image18.png',
    relatedServices: [
      { title: 'Application Management', icon: Layers },
      { title: 'Knowledge Management', icon: BookOpen }
    ]
  }
};

const statsData = [
  {
    value: '15+',
    label: 'Years in PLM & Digital Engineering Experience',
    icon: Calendar
  },
  {
    value: '100+',
    label: 'Engineering Professionals',
    icon: Users
  },
  {
    value: '500+',
    label: 'Projects Delivered',
    icon: Database
  },
  {
    value: '15+',
    label: 'Industries Supported',
    icon: Cog
  },
  {
    value: 'Global Clients',
    label: 'Across Key Regions',
    icon: Globe
  },
  {
    value: '99.9%',
    label: 'Data Integrity',
    icon: ShieldCheck
  },
  {
    value: 'USA + India',
    label: 'Delivery Centers',
    icon: MapPin
  }
];

const ecosystemPlatforms = [
  {
    category: 'PLM Platforms',
    image: '/image/PLM & software engineer/PLM plateform.png'
  },
  {
    category: 'CAD Platforms',
    image: '/image/PLM & software engineer/CAD plateform.png'
  },
  {
    category: 'Enterprise Platforms',
    image: '/image/PLM & software engineer/enterprice-plateform.png'
  },
  {
    category: 'Cloud Platforms',
    image: '/image/PLM & software engineer/cloud plateform.png'
  },
  {
    category: 'Development Technologies',
    image: '/image/PLM & software engineer/development technologies.png'
  }
];

const roadmapSteps = [
  { step: '01', title: 'Assessment' },
  { step: '02', title: 'As-Is Review' },
  { step: '03', title: 'Solution Design' },
  { step: '04', title: 'Implementation' },
  { step: '05', title: 'Integration' },
  { step: '06', title: 'Testing' },
  { step: '07', title: 'Training' },
  { step: '08', title: 'Deployment' },
  { step: '09', title: 'Support' },
  { step: '10', title: 'Continuous Improvement' }
];

const industriesSupported = [
  { name: 'Oil & Gas', image: '/image/PLM & software engineer/oil and gas.jpg' },
  { name: 'Aerospace & Defense', image: '/image/PLM & software engineer/Aerospace & Defense.jpg' },
  { name: 'Manufacturing', image: '/image/PLM & software engineer/Manufacturing.jpg' },
  { name: 'Buildings', image: '/image/PLM & software engineer/Buildings.jpg' },
  { name: 'Power & Utilities', image: '/image/PLM & software engineer/Power & Utilities.jpg' },
  { name: 'Renewables', image: '/image/PLM & software engineer/Renewables.jpg' },
  { name: 'Water & Wastewater', image: '/image/PLM & software engineer/Water & wastewater.jpg' },
  { name: 'Chemicals', image: '/image/PLM & software engineer/Chemicals.jpg' },
  { name: 'Mining & Metals', image: '/image/PLM & software engineer/Mining & Metals.jpg' },
  { name: 'Automotive', image: '/image/PLM & software engineer/Automotive.jpg' },
  { name: 'Marine', image: '/image/PLM & software engineer/Marine.jpg' },
  { name: 'Industrial Equipment', image: '/image/PLM & software engineer/Industrial Equipment.jpg' },
  { name: 'Consumer Products', image: '/image/PLM & software engineer/Consumer Products.jpg' },
  { name: 'Life Sciences', image: '/image/PLM & software engineer/Life Sciences.jpg' },
  { name: 'Energy & Utilities', image: '/image/PLM & software engineer/Energy & Utilities.jpg' },
  { name: 'Data Centers', image: '/image/PLM & software engineer/Data Centers.jpg' }
];

export default function PlmSoftwareEngineeringSection({ index = 7 }: { index?: number }) {
  const [activePopupId, setActivePopupId] = useState<string | null>(null);

  const activePopupData = activePopupId ? plmPopupDetailsMap[activePopupId] : null;

  // Handle ESC key to close popup
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setActivePopupId(null);
      }
    };
    if (activePopupId) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [activePopupId]);

  return (
    <AnimatedSection as="div" id="plm-software-engineering" className="scroll-mt-32 space-y-10">
      {/* ================= 1. TOP HERO BANNER ================= */}
      <div className="relative overflow-hidden rounded-[2.5rem] border border-blue-900/40 bg-[#020b18] p-6 text-white shadow-2xl sm:p-8 lg:p-10">
        {/* Full Section Background Image */}
        <div className="pointer-events-none absolute inset-0 select-none overflow-hidden">
          <Image
            src="/image/PLM & software engineer/main bg image.jpg"
            alt="PLM & Software Engineering Background"
            fill
            priority
            className="object-cover object-center"
            quality={95}
          />
          {/* Subtle directional dark gradients so the left text and right dashboard are ultra-clear while the turbine visual spans the full background */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#020b18]/95 via-[#020b18]/50 to-[#020b18]/85" />
          <div className="absolute inset-0 bg-gradient-to-b from-[#020b18]/70 via-transparent to-[#020b18]/80" />
        </div>

        <div className="relative z-10 grid grid-cols-1 items-center gap-8 lg:grid-cols-12 lg:gap-8">
          {/* Left Column: Heading & Description */}
          <div className="lg:col-span-7 xl:col-span-7 space-y-4">
            <div className="flex items-center gap-3">
              <span className="text-[11px] font-mono font-bold uppercase tracking-[0.24em] text-cyan-400">
                DIGITAL ENGINEERING FOR A CONNECTED TOMORROW
              </span>
            </div>

            <div className="flex items-center gap-3">
              <span className="text-xs font-mono font-bold uppercase tracking-[0.22em] text-[#0070f3] bg-blue-500/15 px-3 py-1 rounded-full border border-blue-400/30">
                {String(index).padStart(2, '0')}
              </span>
              <h2 className="font-display text-3xl font-black tracking-tight text-white sm:text-4xl lg:text-[42px] leading-[1.15]">
                PLM & Software Engineering
              </h2>
            </div>

            <h3 className="text-sm font-semibold leading-snug text-cyan-200 sm:text-base">
              Digital Engineering Platforms That Connect Engineering, Manufacturing, and Enterprise Operations
            </h3>

            <p className="text-xs sm:text-sm leading-relaxed text-slate-300 max-w-2xl">
              GTS Engineering delivers end-to-end lifecycle management (PLM), engineering software development, CAD automation, and enterprise integration and digital engineering solutions that enable organizations to accelerate innovation, improve collaboration, and maximize lifecycle performance.
            </p>

            <div className="flex flex-wrap items-center gap-3.5 pt-2">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-xl bg-[#0070f3] px-5 py-2.5 text-xs sm:text-sm font-bold text-white shadow-lg shadow-blue-500/25 transition-all hover:bg-blue-600 hover:shadow-blue-500/40 hover:-translate-y-0.5"
              >
                Request Consultation
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                href="/downloads"
                className="inline-flex items-center gap-2 rounded-xl border border-slate-700 bg-[#0c1f38]/80 px-4 py-2.5 text-xs sm:text-sm font-semibold text-slate-200 backdrop-blur-md transition-colors hover:border-cyan-400/50 hover:bg-[#132d52] hover:text-white"
              >
                <FileDown className="h-4 w-4 text-cyan-400" />
                Download Capability Statement
              </Link>
            </div>
          </div>

          {/* Right Column: Digital Engineering Overview Dashboard */}
          <div className="lg:col-span-5 xl:col-span-5 rounded-2xl border border-cyan-500/20 bg-[#05152c]/85 p-5 sm:p-6 backdrop-blur-md shadow-2xl">
            <div className="flex items-center justify-between border-b border-blue-900/50 pb-3">
              <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-cyan-300">
                DIGITAL ENGINEERING OVERVIEW
              </span>
              <span className="text-[9px] font-mono font-medium text-slate-400 uppercase">
                CONNECTED • SMARTER • MORE VALUE
              </span>
            </div>

            {/* 4 Top Overview Metrics */}
            <div className="mt-3.5 grid grid-cols-2 gap-3">
              <div className="rounded-xl border border-white/5 bg-[#081f3d]/60 p-2.5">
                <div className="flex items-center gap-1.5 text-xs font-black text-white sm:text-sm">
                  <span className="h-2 w-2 rounded-full bg-emerald-400" />
                  99.9%
                </div>
                <div className="text-[10px] text-slate-300 mt-0.5 font-medium">System Availability</div>
              </div>
              <div className="rounded-xl border border-white/5 bg-[#081f3d]/60 p-2.5">
                <div className="text-xs font-black text-cyan-400 sm:text-sm">↑ 1,200+</div>
                <div className="text-[10px] text-slate-300 mt-0.5 font-medium">Engineering Users</div>
              </div>
              <div className="rounded-xl border border-white/5 bg-[#081f3d]/60 p-2.5">
                <div className="text-xs font-black text-white sm:text-sm">20+</div>
                <div className="text-[10px] text-slate-300 mt-0.5 font-medium">Integrated Applications</div>
              </div>
              <div className="rounded-xl border border-white/5 bg-[#081f3d]/60 p-2.5">
                <div className="text-xs font-black text-cyan-400 sm:text-sm">350+</div>
                <div className="text-[10px] text-slate-300 mt-0.5 font-medium">Active Workflows</div>
              </div>
            </div>

            {/* Connected Platforms Strip */}
            <div className="mt-3 pt-2 border-t border-blue-900/50">
              <div className="text-[9px] font-mono uppercase tracking-wider text-slate-400 mb-1.5">
                Connected Platforms
              </div>
              <div className="grid grid-cols-6 gap-1 text-center">
                {['CAD', 'PLM', 'ERP', 'MES', 'Cloud', 'Analytics'].map((platform) => (
                  <div key={platform} className="rounded-lg border border-cyan-500/20 bg-[#020b18]/80 py-1 text-[9px] font-bold text-cyan-200">
                    {platform}
                  </div>
                ))}
              </div>
            </div>

            {/* Engineering Impact Grid */}
            <div className="mt-3 pt-2 border-t border-blue-900/50">
              <div className="text-[9px] font-mono uppercase tracking-wider text-slate-400 mb-1.5">
                Engineering Impact
              </div>
              <div className="grid grid-cols-4 gap-1.5 text-center">
                <div className="rounded-lg bg-blue-950/40 p-1.5 border border-blue-800/40">
                  <div className="text-[11px] font-bold text-emerald-400">↑ 42%</div>
                  <div className="text-[8px] text-slate-300 leading-tight">Eng. Change Cycle</div>
                </div>
                <div className="rounded-lg bg-blue-950/40 p-1.5 border border-blue-800/40">
                  <div className="text-[11px] font-bold text-cyan-400">↑ 71%</div>
                  <div className="text-[8px] text-slate-300 leading-tight">Design Productivity</div>
                </div>
                <div className="rounded-lg bg-blue-950/40 p-1.5 border border-blue-800/40">
                  <div className="text-[11px] font-bold text-white">99.6%</div>
                  <div className="text-[8px] text-slate-300 leading-tight">BOM Accuracy</div>
                </div>
                <div className="rounded-lg bg-blue-950/40 p-1.5 border border-blue-800/40">
                  <div className="text-[11px] font-bold text-cyan-400">↑ 38%</div>
                  <div className="text-[8px] text-slate-300 leading-tight">Review Time</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ================= 2. HIGH-IMPACT STATS BAR ================= */}
      <div className="grid grid-cols-2 gap-3 sm:grid-cols-4 lg:grid-cols-7 rounded-2xl border border-slate-200 bg-white p-4 sm:p-5 shadow-sm">
        {statsData.map((stat) => {
          const StatIcon = stat.icon;
          return (
            <div key={stat.label} className="flex flex-col items-center text-center p-2">
              <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-blue-50 text-[#0070f3] mb-1.5">
                <StatIcon className="h-4 w-4" />
              </div>
              <div className="font-display text-base sm:text-lg font-black text-slate-900 leading-tight">
                {stat.value}
              </div>
              <div className="text-[10px] sm:text-[11px] font-medium text-slate-500 mt-0.5 leading-snug">
                {stat.label}
              </div>
            </div>
          );
        })}
      </div>

      {/* ================= 3. CAPABILITIES SPLIT SECTION ================= */}
      <div className="grid grid-cols-1 gap-8 lg:grid-cols-12 lg:gap-8">
        {/* LEFT COLUMN: Our PLM Capabilities (6 cards) */}
        <div className="lg:col-span-7 space-y-6">
          <div className="flex items-center justify-between border-b border-slate-200/80 pb-3">
            <div>
              <h3 className="font-display text-xl sm:text-2xl font-bold text-slate-900">
                Our PLM Capabilities
              </h3>
              <p className="text-xs text-slate-500 mt-0.5 font-medium">
                End-to-end services to maximize the value of your engineering information
              </p>
            </div>
            <Link
              href="/menu/service-offerings/plm-and-software-engineering"
              className="hidden sm:inline-flex items-center gap-1 text-xs font-bold text-[#0070f3] hover:text-blue-700"
            >
              View All PLM Services
              <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          </div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
            {plmCapabilities.map((cap) => {
              const CapIcon = cap.icon;
              return (
                <div
                  key={cap.title}
                  className="group flex flex-col justify-between overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition-all duration-300 hover:border-blue-300 hover:shadow-md hover:-translate-y-1"
                >
                  <div>
                    {/* Thumbnail Image */}
                    <div className="relative h-28 w-full overflow-hidden bg-slate-100">
                      <Image
                        src={cap.image}
                        alt={cap.title}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent" />
                    </div>

                    {/* Card Content */}
                    <div className="p-4">
                      <div className="flex items-start gap-2.5">
                        <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-blue-50 text-[#0070f3]">
                          <CapIcon className="h-4 w-4" />
                        </div>
                        <h4 className="font-display text-xs sm:text-sm font-bold text-slate-900 leading-snug">
                          {cap.title}
                        </h4>
                      </div>

                      <ul className="mt-3 space-y-1 text-[11px] text-slate-600">
                        {cap.bullets.map((b) => (
                          <li key={b} className="flex items-center gap-1.5">
                            <span className="h-1 w-1 rounded-full bg-[#0070f3]" />
                            <span>{b}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="px-4 pb-3.5 pt-1">
                    <button
                      type="button"
                      onClick={() => setActivePopupId(cap.id)}
                      className="inline-flex items-center gap-1 text-[11px] font-bold text-[#0070f3] hover:text-blue-700 transition-colors"
                    >
                      Learn More
                      <ArrowRight className="h-3 w-3 transition-transform group-hover:translate-x-0.5" />
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* RIGHT COLUMN: Software Engineering (5 cards) */}
        <div className="lg:col-span-5 space-y-6">
          <div className="flex items-center justify-between border-b border-slate-200/80 pb-3">
            <div>
              <h3 className="font-display text-xl sm:text-2xl font-bold text-slate-900">
                Software Engineering
              </h3>
              <p className="text-xs text-slate-500 mt-0.5 font-medium">
                Industrial software solutions built around engineering
              </p>
            </div>
            <Link
              href="/menu/service-offerings/plm-and-software-engineering"
              className="hidden sm:inline-flex items-center gap-1 text-xs font-bold text-[#0070f3] hover:text-blue-700"
            >
              View All Software Services
              <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          </div>

          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3">
            {softwareCapabilities.map((soft) => {
              const SoftIcon = soft.icon;
              return (
                <div
                  key={soft.title}
                  className="group flex flex-col justify-between rounded-2xl border border-slate-200 bg-white p-4 shadow-sm transition-all duration-300 hover:border-blue-300 hover:shadow-md hover:-translate-y-1"
                >
                  <div>
                    <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-blue-50 text-[#0070f3] mb-2.5">
                      <SoftIcon className="h-4 w-4" />
                    </div>
                    <h4 className="font-display text-xs sm:text-sm font-bold text-slate-900 leading-snug">
                      {soft.title}
                    </h4>
                    <ul className="mt-2.5 space-y-1 text-[11px] text-slate-600">
                      {soft.bullets.map((b) => (
                        <li key={b} className="flex items-center gap-1.5">
                          <span className="h-1 w-1 rounded-full bg-[#0070f3]" />
                          <span>{b}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="pt-3">
                    <button
                      type="button"
                      onClick={() => setActivePopupId(soft.id)}
                      className="inline-flex items-center gap-1 text-[11px] font-bold text-[#0070f3] hover:text-blue-700 transition-colors"
                    >
                      Learn More
                      <ArrowRight className="h-3 w-3 transition-transform group-hover:translate-x-0.5" />
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* ================= 4. TECHNOLOGY ECOSYSTEM & INDUSTRIES ================= */}
      <div className="grid grid-cols-1 gap-8 lg:grid-cols-12 lg:gap-8">
        {/* Left: Our Technology Ecosystem */}
        <div className="lg:col-span-6 space-y-4">
          <div className="border-b border-slate-200/80 pb-3">
            <h3 className="font-display text-lg sm:text-xl font-bold text-slate-900">
              Our Technology Ecosystem
            </h3>
            <p className="text-xs text-slate-500 font-medium">Leading platforms. Proven expertise.</p>
          </div>

          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {ecosystemPlatforms.map((eco) => (
              <div
                key={eco.category}
                className="flex flex-col justify-between rounded-xl border border-slate-200 bg-white p-3 shadow-sm"
              >
                <div className="text-[10px] font-mono font-bold uppercase tracking-wider text-slate-500 mb-2">
                  {eco.category}
                </div>
                <div className="relative h-14 w-full overflow-hidden">
                  <Image
                    src={eco.image}
                    alt={eco.category}
                    fill
                    className="object-contain object-left"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right: Industries We Support */}
        <div className="lg:col-span-6 space-y-4">
          <div className="flex items-center justify-between border-b border-slate-200/80 pb-3">
            <div>
              <h3 className="font-display text-lg sm:text-xl font-bold text-slate-900">
                Industries We Support
              </h3>
              <p className="text-xs text-slate-500 font-medium">
                Delivering digital engineering solutions across global industries
              </p>
            </div>
            <Link
              href="/#industries-served"
              className="text-xs font-bold text-[#0070f3] hover:text-blue-700"
            >
              View All Industries →
            </Link>
          </div>

          {/* 16 Industry Photo Badges (8 x 2 grid) */}
          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-4 xl:grid-cols-4 gap-2">
            {industriesSupported.map((ind) => (
              <div
                key={ind.name}
                className="group relative h-16 rounded-xl overflow-hidden border border-slate-200 shadow-sm cursor-pointer"
              >
                <Image
                  src={ind.image}
                  alt={ind.name}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-950/40 to-transparent" />
                <div className="absolute bottom-1.5 left-2 right-2 text-[10px] font-bold text-white leading-tight drop-shadow-sm line-clamp-2">
                  {ind.name}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ================= 5. DIGITAL TRANSFORMATION JOURNEY & WHY GTS ================= */}
      <div className="grid grid-cols-1 gap-8 lg:grid-cols-12 lg:gap-8">
        {/* Left: Digital Transformation Journey (10 steps) */}
        <div className="lg:col-span-6 space-y-4">
          <div className="border-b border-slate-200/80 pb-3">
            <h3 className="font-display text-lg sm:text-xl font-bold text-slate-900">
              Digital Transformation Journey
            </h3>
            <p className="text-xs text-slate-500 font-medium">
              A proven roadmap from strategy to sustainable value
            </p>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white p-4 sm:p-5 shadow-sm">
            <div className="grid grid-cols-2 sm:grid-cols-5 gap-2.5">
              {roadmapSteps.map((stepItem, i) => (
                <div key={stepItem.title} className="flex flex-col items-center text-center p-2 rounded-xl bg-slate-50 border border-slate-100">
                  <div className="flex h-6 w-6 items-center justify-center rounded-full bg-[#0070f3] text-[10px] font-bold text-white mb-1 shadow-sm">
                    {i + 1}
                  </div>
                  <div className="text-[10px] font-bold text-slate-800 leading-tight">
                    {stepItem.title}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right: Why GTS Engineering */}
        <div className="lg:col-span-6 space-y-4">
          <div className="border-b border-slate-200/80 pb-3">
            <h3 className="font-display text-lg sm:text-xl font-bold text-slate-900">
              Why GTS Engineering®
            </h3>
            <p className="text-xs text-slate-500 font-medium">Proven execution with global capability</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm">
              <div className="flex items-center gap-2 text-sm font-bold text-slate-900">
                <Brain className="h-4 w-4 text-[#0070f3]" />
                Engineering Expertise
              </div>
              <ul className="mt-2 space-y-1 text-[11px] text-slate-600">
                <li>• Deep domain knowledge</li>
                <li>• Proven engineering lineage</li>
                <li>• Global consulting expertise</li>
              </ul>
            </div>

            <div className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm">
              <div className="flex items-center gap-2 text-sm font-bold text-slate-900">
                <Cog className="h-4 w-4 text-[#0070f3]" />
                Digital Engineering
              </div>
              <ul className="mt-2 space-y-1 text-[11px] text-slate-600">
                <li>• Automation-driven workflows</li>
                <li>• PLM & CAD integration</li>
                <li>• Future-ready architectures</li>
              </ul>
            </div>

            <div className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm">
              <div className="flex items-center gap-2 text-sm font-bold text-slate-900">
                <Share2 className="h-4 w-4 text-[#0070f3]" />
                Enterprise Integration
              </div>
              <ul className="mt-2 space-y-1 text-[11px] text-slate-600">
                <li>• Seamless integration</li>
                <li>• Between CAD, PLM, ERP, MES</li>
                <li>• Cloud & industrial analytics</li>
              </ul>
            </div>

            <div className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm">
              <div className="flex items-center gap-2 text-sm font-bold text-slate-900">
                <Globe className="h-4 w-4 text-[#0070f3]" />
                Global Delivery
              </div>
              <ul className="mt-2 space-y-1 text-[11px] text-slate-600">
                <li>• USA leadership & project mgmt</li>
                <li>• India delivery excellence</li>
                <li>• Scalable to global needs</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* ================= 6. BOTTOM READY TO TRANSFORM CTA ================= */}
      <div className="rounded-2xl border border-blue-900/40 bg-[#020b18] p-6 text-white shadow-xl sm:p-7">
        <div className="grid grid-cols-1 items-center gap-6 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <h4 className="font-display text-lg sm:text-xl font-bold text-white">
              Ready to Transform Your Engineering Operations?
            </h4>
            <p className="mt-1 text-xs text-slate-300">
              Connect with our experts to discuss your digital engineering goals.
            </p>
          </div>

          <div className="lg:col-span-3 flex items-center gap-3">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-xl bg-[#0070f3] px-5 py-2.5 text-xs sm:text-sm font-bold text-white shadow-lg shadow-blue-500/30 transition-all hover:bg-blue-600 hover:-translate-y-0.5"
            >
              Schedule Consultation
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="lg:col-span-4 grid grid-cols-2 sm:grid-cols-4 gap-3 text-center border-t border-blue-900/50 pt-4 lg:border-t-0 lg:pt-0">
            <div>
              <Lightbulb className="mx-auto h-4 w-4 text-cyan-400 mb-1" />
              <div className="text-[10px] font-bold text-white">Solve</div>
              <div className="text-[8px] text-slate-400">Complex Challenges</div>
            </div>
            <div>
              <TrendingUp className="mx-auto h-4 w-4 text-cyan-400 mb-1" />
              <div className="text-[10px] font-bold text-white">Drive</div>
              <div className="text-[8px] text-slate-400">Operational Efficiency</div>
            </div>
            <div>
              <Sparkles className="mx-auto h-4 w-4 text-cyan-400 mb-1" />
              <div className="text-[10px] font-bold text-white">Enable</div>
              <div className="text-[8px] text-slate-400">Innovation</div>
            </div>
            <div>
              <Building2 className="mx-auto h-4 w-4 text-cyan-400 mb-1" />
              <div className="text-[10px] font-bold text-white">Build</div>
              <div className="text-[8px] text-slate-400">a Smarter Tomorrow</div>
            </div>
          </div>
        </div>
      </div>

      {/* ================= 7. INTERACTIVE SIDEBAR / MODAL POPUP ================= */}
      {activePopupData && (
        <div className="fixed inset-0 z-50 flex items-center justify-end overflow-hidden">
          {/* Backdrop Blur Overlay */}
          <div
            className="absolute inset-0 bg-slate-950/70 backdrop-blur-sm transition-opacity"
            onClick={() => setActivePopupId(null)}
          />

          {/* Slide-in Drawer Container */}
          <div className="relative z-10 h-full w-full max-w-2xl bg-white shadow-2xl flex flex-col overflow-y-auto animate-in slide-in-from-right duration-300">
            {/* Modal Top Header with Background Image */}
            <div className="relative shrink-0 overflow-hidden bg-[#030d1d] p-6 pb-8 text-white min-h-[250px] flex flex-col justify-between sm:p-8 sm:pb-8">
              {/* Header Background Image */}
              <div className="pointer-events-none absolute inset-0 select-none">
                <Image
                  src={activePopupData.heroBgImage}
                  alt={activePopupData.title}
                  fill
                  className="object-cover object-center opacity-45"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-[#030d1d]/95 via-[#030d1d]/75 to-transparent" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#030d1d] via-transparent to-transparent" />
              </div>

              {/* Top Row: Close Button */}
              <div className="relative z-10 flex items-center justify-between">
                <span className="text-[10px] font-mono font-bold uppercase tracking-[0.24em] text-cyan-400">
                  PLM & SOFTWARE ENGINEERING
                </span>
                <button
                  type="button"
                  onClick={() => setActivePopupId(null)}
                  className="flex h-8 w-8 items-center justify-center rounded-full bg-black/60 text-white/90 backdrop-blur-md transition hover:bg-black hover:text-white"
                  aria-label="Close"
                >
                  <X className="h-4 w-4" />
                </button>
              </div>

              {/* Title & Description */}
              <div className="relative z-10 mt-3 space-y-2">
                <h3 className="font-display text-2xl sm:text-3xl font-black text-white leading-tight">
                  {activePopupData.title}
                </h3>
                <p className="text-xs sm:text-sm font-semibold text-cyan-200 leading-snug">
                  {activePopupData.subtitle}
                </p>
                <p className="text-xs text-slate-300 leading-relaxed max-w-xl">
                  {activePopupData.description}
                </p>

                <div className="pt-2">
                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-2 rounded-xl bg-[#0070f3] px-5 py-2.5 text-xs font-bold text-white shadow-lg shadow-blue-500/30 transition hover:bg-blue-600 hover:-translate-y-0.5"
                  >
                    Request Consultation
                    <ArrowRight className="h-3.5 w-3.5" />
                  </Link>
                </div>
              </div>
            </div>

            {/* Modal Body Content (Clean White Surface matching reference images) */}
            <div className="flex-1 space-y-6 p-6 sm:p-8 bg-[#f8fafc]">
              {/* Feature Pills Row */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
                {activePopupData.featurePills.map((pill) => {
                  const PillIcon = pill.icon;
                  return (
                    <div
                      key={pill.title}
                      className="flex flex-col items-center justify-center rounded-xl border border-blue-100 bg-white p-3 text-center shadow-xs transition hover:border-blue-300"
                    >
                      <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-blue-50 text-[#0070f3] mb-1.5">
                        <PillIcon className="h-4 w-4" />
                      </div>
                      <span className="text-[10px] font-bold text-slate-800 leading-tight">
                        {pill.title}
                      </span>
                    </div>
                  );
                })}
              </div>

              {/* Dynamic Section: Deliverables, Platforms & Services */}
              {activePopupData.id === 'application-support' ? (
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-5">
                  {/* Left Column (Deliverables + Platforms) */}
                  <div className="lg:col-span-8 space-y-4">
                    <div className="rounded-2xl border border-slate-200/80 bg-white p-5 shadow-xs space-y-3">
                      <h4 className="font-display text-sm font-bold text-slate-900 border-b border-slate-100 pb-2">
                        Key Deliverables
                      </h4>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-2.5 pt-1">
                        <div>
                          <div className="flex items-center gap-2 text-xs text-slate-700">
                            <span className="h-1.5 w-1.5 rounded-full bg-[#0070f3] shrink-0" />
                            <span>{activePopupData.deliverables[0]}</span>
                          </div>
                        </div>
                        <div className="space-y-2.5">
                          {activePopupData.deliverables.slice(1).map((item) => (
                            <div key={item} className="flex items-center gap-2 text-xs text-slate-700">
                              <span className="h-1.5 w-1.5 rounded-full bg-[#0070f3] shrink-0" />
                              <span>{item}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>

                    {activePopupData.companiesImage && (
                      <div className="rounded-2xl border border-slate-200/80 bg-white p-4 sm:p-5 shadow-xs space-y-2">
                        <h4 className="font-display text-xs font-bold uppercase tracking-wider text-slate-900">
                          {activePopupData.supportedLabel || 'Supported Platforms'}
                        </h4>
                        <div className="relative w-full overflow-hidden rounded-xl bg-slate-50/50 p-2">
                          <Image
                            src={activePopupData.companiesImage}
                            alt={activePopupData.supportedLabel || 'Supported Platforms'}
                            width={1426}
                            height={477}
                            className="w-full h-auto object-contain"
                          />
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Right Column (Related Services) */}
                  <div className="lg:col-span-4 flex flex-col">
                    <div className="rounded-2xl border border-slate-200/80 bg-white p-5 shadow-xs flex-1 space-y-3">
                      <h4 className="font-display text-xs font-bold uppercase tracking-wider text-slate-900 border-b border-slate-100 pb-2">
                        Related Services
                      </h4>
                      <div className="space-y-2.5 pt-1">
                        {activePopupData.relatedServices.map((rel) => {
                          const RelIcon = rel.icon;
                          return (
                            <div
                              key={rel.title}
                              className="flex items-center gap-2.5 rounded-xl border border-slate-200 bg-slate-50/50 p-3 shadow-xs hover:border-blue-300 transition"
                            >
                              <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-blue-50 text-[#0070f3] shrink-0">
                                <RelIcon className="h-3.5 w-3.5" />
                              </div>
                              <span className="text-[11px] font-bold text-slate-800 leading-tight">
                                {rel.title}
                              </span>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                </div>
              ) : (
                <>
                  {/* 2-Column Section: Key Deliverables & Industries / Platforms */}
                  {activePopupData.industries && activePopupData.industries.length > 0 ? (
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 rounded-2xl border border-slate-200/80 bg-white p-5 shadow-xs">
                      {/* Left Column: Key Deliverables */}
                      <div>
                        <h4 className="font-display text-sm font-bold text-slate-900 border-b border-slate-100 pb-2">
                          Key Deliverables
                        </h4>
                        <ul className="mt-3 space-y-2">
                          {activePopupData.deliverables.map((item) => (
                            <li key={item} className="flex items-center gap-2 text-xs text-slate-700">
                              <span className="h-1.5 w-1.5 rounded-full bg-[#0070f3] shrink-0" />
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Right Column: Industries */}
                      <div>
                        <h4 className="font-display text-sm font-bold text-slate-900 border-b border-slate-100 pb-2">
                          Industries
                        </h4>
                        <ul className="mt-3 space-y-2">
                          {activePopupData.industries.map((item) => (
                            <li key={item} className="flex items-center gap-2 text-xs text-slate-700">
                              <span className="h-1.5 w-1.5 rounded-full bg-[#0070f3] shrink-0" />
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  ) : activePopupData.id === 'cad-customization' ? (
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 rounded-2xl border border-slate-200/80 bg-white p-5 shadow-xs">
                      {/* Left: Deliverables */}
                      <div>
                        <h4 className="font-display text-sm font-bold text-slate-900 border-b border-slate-100 pb-2">
                          Key Deliverables
                        </h4>
                        <ul className="mt-3 space-y-2">
                          {activePopupData.deliverables.map((item) => (
                            <li key={item} className="flex items-center gap-2 text-xs text-slate-700">
                              <span className="h-1.5 w-1.5 rounded-full bg-[#0070f3] shrink-0" />
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Right: Supported Platforms */}
                      <div className="flex flex-col justify-start">
                        <h4 className="font-display text-sm font-bold text-slate-900 border-b border-slate-100 pb-2">
                          {activePopupData.supportedLabel || 'Supported Platforms'}
                        </h4>
                        {activePopupData.companiesImage && (
                          <div className="relative w-full overflow-hidden rounded-xl bg-slate-50/50 p-2 mt-2">
                            <Image
                              src={activePopupData.companiesImage}
                              alt={activePopupData.supportedLabel || 'Supported Platforms'}
                              width={1426}
                              height={477}
                              className="w-full h-auto object-contain"
                            />
                          </div>
                        )}
                      </div>
                    </div>
                  ) : (
                    <div className="rounded-2xl border border-slate-200/80 bg-white p-5 shadow-xs space-y-3">
                      <h4 className="font-display text-sm font-bold text-slate-900 border-b border-slate-100 pb-2">
                        Key Deliverables
                      </h4>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-2.5 pt-1">
                        {activePopupData.deliverables.map((item) => (
                          <div key={item} className="flex items-center gap-2 text-xs text-slate-700">
                            <span className="h-1.5 w-1.5 rounded-full bg-[#0070f3] shrink-0" />
                            <span>{item}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Supported Platforms / Technologies (Full Width when not CAD customization) */}
                  {activePopupData.companiesImage && activePopupData.id !== 'cad-customization' && (
                    <div className="rounded-2xl border border-slate-200/80 bg-white p-5 sm:p-6 shadow-xs space-y-3">
                      <h4 className="font-display text-xs font-bold uppercase tracking-wider text-slate-900">
                        {activePopupData.supportedLabel || 'Supported Platforms'}
                      </h4>
                      <div className="relative w-full overflow-hidden rounded-xl bg-slate-50/50 p-2 sm:p-3">
                        <Image
                          src={activePopupData.companiesImage}
                          alt={activePopupData.supportedLabel || 'Supported Platforms'}
                          width={1426}
                          height={477}
                          className="w-full h-auto object-contain"
                        />
                      </div>
                    </div>
                  )}

                  {/* Related Services */}
                  <div className="space-y-3">
                    <h4 className="font-display text-xs font-bold uppercase tracking-wider text-slate-900">
                      Related Services
                    </h4>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
                      {activePopupData.relatedServices.map((rel) => {
                        const RelIcon = rel.icon;
                        return (
                          <div
                            key={rel.title}
                            className="flex items-center gap-2.5 rounded-xl border border-slate-200 bg-white p-3 shadow-xs hover:border-blue-300 transition"
                          >
                            <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-blue-50 text-[#0070f3] shrink-0">
                              <RelIcon className="h-3.5 w-3.5" />
                            </div>
                            <span className="text-[11px] font-bold text-slate-800 leading-tight">
                              {rel.title}
                            </span>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      )}
    </AnimatedSection>
  );
}
