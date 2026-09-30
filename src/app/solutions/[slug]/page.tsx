import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import {
  Activity,
  ArrowLeft,
  ArrowRight,
  Atom,
  BookOpen,
  Boxes,
  Box,
  BrainCircuit,
  Building2,
  Calendar,
  Car,
  CheckCircle2,
  Cloud,
  Cog,
  Coins,
  Construction,
  Cpu,
  Database,
  Droplets,
  Factory,
  FileCheck,
  FileText,
  FlaskConical,
  FolderKanban,
  Fuel,
  GitBranch,
  Globe,
  Grid,
  HardHat,
  Hexagon,
  Layers,
  LayoutGrid,
  Leaf,
  LineChart,
  Mail,
  MessageSquare,
  Monitor,
  Network,
  Pickaxe,
  Pill,
  Plane,
  Radio,
  Server,
  Share2,
  ShieldCheck,
  Ship,
  ShoppingCart,
  SlidersHorizontal,
  Snowflake,
  Sparkles,
  Target,
  Thermometer,
  Train,
  TrendingUp,
  Users,
  Utensils,
  Wind,
  Wine,
  Wrench,
  Zap,
} from 'lucide-react';
import { solutionPoints } from '@/constants/solutions';
import { engineeringCapabilities } from '@/constants/engineeringCapabilities';
import ImagePlaceholder from '@/components/common/ImagePlaceholder';
import { AnimatedSection, GradientButton, MagneticCard, PageHero } from '@/components/ui';

// Helper to get discipline icon matching reference mockups
const getDisciplineIcon = (name: string) => {
  const lower = name.toLowerCase();
  if (lower.includes('process design') || lower.includes('chemical')) return FlaskConical;
  if (lower.includes('feed') || lower.includes('documentation') || lower.includes('shop drawings') || lower.includes('records')) return FileText;
  if (lower.includes('manuals')) return BookOpen;
  if (lower.includes('mechanical') || lower.includes('dfm') || lower.includes('fabrication')) return Cog;
  if (lower.includes('layout') || lower.includes('cad') || lower.includes('platforms')) return LayoutGrid;
  if (lower.includes('piping') || lower.includes('rack')) return GitBranch;
  if (lower.includes('supports') || lower.includes('o&m') || lower.includes("owner's engineer")) return Wrench;
  if (lower.includes('equipment') || lower.includes('dcs')) return SlidersHorizontal;
  if (lower.includes('utility') || lower.includes('cooling')) return Droplets;
  if (lower.includes('simulation') || lower.includes('validation')) return Monitor;
  if (lower.includes('epc') || lower.includes('erection')) return Construction;
  if (lower.includes('commissioning')) return FileCheck;
  if (lower.includes('product development') || lower.includes('twin')) return Box;
  if (lower.includes('reverse engineering')) return Layers;
  if (lower.includes('prototype')) return Boxes;
  if (lower.includes('optimization')) return LineChart;
  if (lower.includes('gd&t')) return Target;
  if (lower.includes('cfd')) return Wind;
  if (lower.includes('thermal')) return Thermometer;
  if (lower.includes('fatigue')) return Activity;
  if (lower.includes('structural analysis') || lower.includes('structural design')) return Building2;
  if (lower.includes('vibration')) return Radio;
  if (lower.includes('plc')) return Server;
  if (lower.includes('scada')) return Network;
  if (lower.includes('hmi')) return Monitor;
  if (lower.includes('iot')) return Cloud;
  if (lower.includes('ai') || lower.includes('analytics') || lower.includes('intelligent')) return BrainCircuit;
  if (lower.includes('predictive')) return TrendingUp;
  if (lower.includes('tekla')) return Box;
  if (lower.includes('connection')) return Share2;
  if (lower.includes('steel detailing')) return LayoutGrid;
  if (lower.includes('plm') || lower.includes('data management')) return Database;
  if (lower.includes('document control')) return FolderKanban;
  if (lower.includes('project management') || lower.includes('risk management')) return Users;
  if (lower.includes('project controls')) return SlidersHorizontal;
  if (lower.includes('cost engineering')) return Coins;
  if (lower.includes('schedule management')) return Calendar;
  if (lower.includes('construction support')) return HardHat;
  return CheckCircle2;
};

// Helper to get industry sector icon matching reference mockups
const getIndustryIcon = (ind: string) => {
  const lower = ind.toLowerCase();
  if (lower.includes('oil') || lower.includes('gas')) return Fuel;
  if (lower.includes('lng')) return Snowflake;
  if (lower.includes('chemical') || lower.includes('petro')) return FlaskConical;
  if (lower.includes('distillery')) return Wine;
  if (lower.includes('power')) return Zap;
  if (lower.includes('hydrogen')) return Atom;
  if (lower.includes('water')) return Droplets;
  if (lower.includes('heavy')) return Construction;
  if (lower.includes('machinery')) return Cog;
  if (lower.includes('rail') || lower.includes('transportation')) return Train;
  if (lower.includes('auto')) return Car;
  if (lower.includes('aero')) return Plane;
  if (lower.includes('consumer')) return ShoppingCart;
  if (lower.includes('pharma')) return Pill;
  if (lower.includes('food') || lower.includes('beverage')) return Utensils;
  if (lower.includes('mining') || lower.includes('metal')) return Pickaxe;
  if (lower.includes('infra')) return Building2;
  if (lower.includes('marine') || lower.includes('offshore')) return Ship;
  return Factory;
};

// Software Badge component rendering authentic brand styling
function SoftwareBadge({ name }: { name: string }) {
  const lower = name.toLowerCase();

  let badgeContent = (
    <span className="font-display text-xs sm:text-sm font-bold text-slate-800">
      {name}
    </span>
  );

  if (lower.includes('ansys')) {
    badgeContent = (
      <div className="flex items-center gap-1.5 font-display text-xs sm:text-sm font-black tracking-wider text-slate-900">
        <span className="inline-block w-2.5 h-2.5 bg-amber-400 rotate-45 shrink-0" />
        <span>ANSYS</span>
      </div>
    );
  } else if (lower.includes('abaqus')) {
    badgeContent = (
      <div className="flex items-center gap-1.5 font-display text-xs sm:text-sm font-extrabold tracking-tight text-blue-700">
        <span className="text-cyan-500 font-black">:::</span>
        <span>ABAQUS</span>
      </div>
    );
  } else if (lower.includes('ls-dyna')) {
    badgeContent = (
      <span className="font-display text-xs sm:text-sm font-black tracking-wider text-blue-600">
        LS-DYNA
      </span>
    );
  } else if (lower.includes('altair') || lower.includes('hyperworks')) {
    badgeContent = (
      <div className="flex items-center gap-1 font-display text-xs sm:text-sm font-bold text-slate-900">
        <span className="text-red-500 font-black">▲</span>
        <span>Altair <span className="font-normal text-slate-500">HyperWorks</span></span>
      </div>
    );
  } else if (lower.includes('simcenter')) {
    badgeContent = (
      <div className="flex items-center gap-1.5 font-display text-xs sm:text-sm font-bold">
        <span className="font-black text-teal-600">SIEMENS</span>
        <span className="text-slate-700">Simcenter</span>
      </div>
    );
  } else if (lower.includes('tia portal')) {
    badgeContent = (
      <div className="flex items-center gap-1.5 font-display text-xs sm:text-sm font-bold">
        <span className="font-black text-teal-600">SIEMENS</span>
        <span className="text-slate-700">TIA Portal</span>
      </div>
    );
  } else if (lower.includes('openfoam')) {
    badgeContent = (
      <div className="flex items-center gap-1 font-display text-xs sm:text-sm font-bold text-cyan-700">
        <span className="text-blue-500 font-black">▽</span>
        <span>OpenFOAM®</span>
      </div>
    );
  } else if (lower.includes('matlab')) {
    badgeContent = (
      <div className="flex items-center gap-1 font-display text-xs sm:text-sm font-bold text-orange-600">
        <span className="text-red-500 font-mono font-bold">≈</span>
        <span className="text-slate-900 font-extrabold">MATLAB®</span>
      </div>
    );
  } else if (lower.includes('rockwell')) {
    badgeContent = (
      <div className="flex items-center gap-1.5 font-display text-xs sm:text-sm font-bold">
        <span className="flex h-4 w-4 items-center justify-center rounded-xs bg-red-600 text-white font-mono text-[9px] font-black">RA</span>
        <span className="text-red-700 font-extrabold">Rockwell Automation</span>
      </div>
    );
  } else if (lower.includes('aveva')) {
    badgeContent = (
      <span className="font-display text-xs sm:text-sm font-black tracking-widest text-indigo-800">
        AVEVA
      </span>
    );
  } else if (lower.includes('schneider')) {
    badgeContent = (
      <div className="flex items-center gap-1.5 font-display text-xs sm:text-sm font-bold text-emerald-700">
        <span className="text-emerald-600 font-black">🍃</span>
        <span>Schneider Electric</span>
      </div>
    );
  } else if (lower.includes('python')) {
    badgeContent = (
      <div className="flex items-center gap-1.5 font-display text-xs sm:text-sm font-bold text-slate-800">
        <span className="text-blue-500 font-mono font-black">&bull;</span>
        <span className="font-mono text-slate-900">python™</span>
      </div>
    );
  } else if (lower.includes('ignition')) {
    badgeContent = (
      <span className="font-display text-xs sm:text-sm font-black text-amber-600 italic">
        Ignition!
      </span>
    );
  } else if (lower.includes('tekla')) {
    badgeContent = (
      <div className="flex items-center gap-1.5 font-display text-xs sm:text-sm font-black text-blue-700">
        <span className="text-blue-600 font-mono">▶</span>
        <span>Tekla®</span>
      </div>
    );
  } else if (lower.includes('autocad')) {
    badgeContent = (
      <div className="flex items-center gap-1.5 font-display text-xs sm:text-sm font-bold">
        <span className="text-red-600 font-black text-xs">A</span>
        <span className="text-slate-800">AUTODESK AutoCAD</span>
      </div>
    );
  } else if (lower.includes('revit')) {
    badgeContent = (
      <div className="flex items-center gap-1.5 font-display text-xs sm:text-sm font-bold">
        <span className="text-blue-600 font-black text-xs">R</span>
        <span className="text-slate-800">AUTODESK Revit</span>
      </div>
    );
  } else if (lower.includes('staad')) {
    badgeContent = (
      <div className="flex items-center gap-1 font-display text-xs sm:text-sm font-bold text-emerald-700">
        <span className="flex h-3.5 w-3.5 items-center justify-center rounded-xs bg-emerald-600 text-white font-mono text-[9px] font-bold">B</span>
        <span>STAAD.Pro®</span>
      </div>
    );
  } else if (lower.includes('ram structural')) {
    badgeContent = (
      <div className="flex items-center gap-1 font-display text-xs sm:text-sm font-bold text-red-700">
        <span className="flex h-3.5 w-3.5 items-center justify-center rounded-xs bg-red-600 text-white font-mono text-[9px] font-bold">R</span>
        <span>RAM Structural System</span>
      </div>
    );
  } else if (lower.includes('statica')) {
    badgeContent = (
      <span className="font-display text-xs sm:text-sm font-extrabold text-orange-600">
        IDEA <span className="font-bold text-slate-800">StatiCa®</span>
      </span>
    );
  } else if (lower.includes('solidworks')) {
    badgeContent = (
      <div className="flex items-center gap-1 font-display text-xs sm:text-sm font-bold text-red-600">
        <span className="text-red-600 font-black">3D</span>
        <span className="text-slate-900 font-bold">SolidWorks®</span>
      </div>
    );
  } else if (lower.includes('teamcenter')) {
    badgeContent = (
      <div className="flex items-center gap-1.5 font-display text-xs sm:text-sm font-bold text-teal-700">
        <span className="text-teal-600 font-black">▶</span>
        <span>Teamcenter</span>
      </div>
    );
  } else if (lower === 'sap') {
    badgeContent = (
      <div className="flex items-center justify-center rounded-xs bg-[#008FD3] text-white px-2.5 py-0.5 font-display text-xs sm:text-sm font-black tracking-wider">
        SAP
      </div>
    );
  } else if (lower.includes('maximo') || lower.includes('ibm')) {
    badgeContent = (
      <div className="flex items-center gap-1.5 font-display text-xs sm:text-sm font-bold text-slate-900">
        <span className="font-mono font-black text-blue-700">IBM</span>
        <span className="font-semibold text-slate-700">Maximo</span>
      </div>
    );
  } else if (lower.includes('vault')) {
    badgeContent = (
      <div className="flex items-center gap-1.5 font-display text-xs sm:text-sm font-bold">
        <span className="text-amber-600 font-black text-xs">V</span>
        <span className="text-slate-800">AUTODESK Vault</span>
      </div>
    );
  } else if (lower.includes('3dexperience')) {
    badgeContent = (
      <div className="flex items-center gap-1.5 font-display text-xs sm:text-sm font-bold text-slate-800">
        <span className="flex h-4 w-4 items-center justify-center rounded-full bg-blue-900 text-white font-mono text-[8px] font-bold">🧭</span>
        <span>3DEXPERIENCE®</span>
      </div>
    );
  } else if (lower.includes('openbom')) {
    badgeContent = (
      <div className="flex items-center gap-1.5 font-display text-xs sm:text-sm font-extrabold text-slate-900">
        <span className="flex h-3.5 w-3.5 rounded-full border-2 border-red-500 border-t-amber-400 border-r-blue-500" />
        <span>OpenBOM</span>
      </div>
    );
  } else if (lower.includes('primavera') || lower.includes('p6')) {
    badgeContent = (
      <div className="flex items-center gap-1.5 font-display text-xs sm:text-sm font-bold">
        <span className="flex h-4 w-4 items-center justify-center rounded-xs bg-red-600 text-white font-mono text-[9px] font-black">P6</span>
        <span className="text-red-700 font-extrabold">Primavera</span>
      </div>
    );
  } else if (lower.includes('bentley')) {
    badgeContent = (
      <div className="flex items-center gap-1.5 font-display text-xs sm:text-sm font-bold text-emerald-700">
        <span className="flex h-3.5 w-3.5 items-center justify-center rounded-xs bg-emerald-600 text-white font-mono text-[9px] font-bold">B</span>
        <span>Bentley®</span>
      </div>
    );
  } else if (lower.includes('construction cloud')) {
    badgeContent = (
      <div className="flex items-center gap-1.5 font-display text-xs sm:text-sm font-bold">
        <span className="text-emerald-600 font-black text-xs">C</span>
        <span className="text-slate-800">AUTODESK Construction Cloud</span>
      </div>
    );
  } else if (lower.includes('microsoft project') || lower.includes('project')) {
    badgeContent = (
      <div className="flex items-center gap-1.5 font-display text-xs sm:text-sm font-bold text-emerald-800">
        <span className="flex h-4 w-4 items-center justify-center rounded-xs bg-emerald-700 text-white font-mono text-[9px] font-bold">P</span>
        <span>Microsoft Project</span>
      </div>
    );
  } else if (lower.includes('power bi')) {
    badgeContent = (
      <div className="flex items-center gap-1.5 font-display text-xs sm:text-sm font-bold text-amber-600">
        <span className="text-amber-500 font-mono font-black">📊</span>
        <span className="text-slate-900 font-extrabold">Power BI</span>
      </div>
    );
  }

  return (
    <div className="flex items-center justify-center rounded-xl border border-slate-200/90 bg-white px-4 py-2.5 shadow-2xs hover:border-blue-400 hover:shadow-xs transition-all">
      {badgeContent}
    </div>
  );
}

// Pre-render all solutions & capabilities at build time
export async function generateStaticParams() {
  const capabilityParams = engineeringCapabilities.map((cap) => ({
    slug: cap.slug,
  }));
  const pointParams = solutionPoints.map((pt) => ({
    slug: pt.slug,
  }));
  return [...capabilityParams, ...pointParams];
}

// Generate dynamic metadata for search crawl optimization
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const capability = engineeringCapabilities.find((c) => c.slug === slug);
  if (capability) {
    return {
      title: `${capability.title} | GTS Engineering Services`,
      description: capability.hero,
      keywords: [capability.title.toLowerCase(), 'engineering solutions', 'gts engineering', capability.slug],
      alternates: {
        canonical: `https://gtsusainc.com/solutions/${slug}`,
      },
    };
  }

  const point = solutionPoints.find((p) => p.slug === slug);
  if (!point) return {};

  return {
    title: `${point.title} Engineering Services | GTS Engineering`,
    description: `GTS Engineering provides advanced ${point.title} services, detailed design support, simulations, and deliverables for the ${point.parentHeading} sector.`,
    keywords: [point.title.toLowerCase(), `${point.title.toLowerCase()} engineering`, point.parentHeading.toLowerCase()],
    alternates: {
      canonical: `https://gtsusainc.com/solutions/${slug}`,
    },
  };
}

export default async function SolutionDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;

  // 1. Check if this slug is one of the 8 dedicated Engineering Capabilities
  const capability = engineeringCapabilities.find((c) => c.slug === slug);
  if (capability) {
    const isDarkSidebar = capability.sidebarTheme === 'dark';

    return (
      <div className="flex w-full flex-col bg-[#f8fafc] min-h-screen">
        {/* =========================================================
            PANORAMIC HERO SECTION (Pure Real Image, No White Wash)
        ========================================================= */}
        <section className="relative w-full overflow-hidden border-b border-slate-200/80 bg-slate-900 min-h-[460px] sm:min-h-[500px] flex items-center">
          {/* Panoramic Background Image - Pure Real Image */}
          <div className="absolute inset-0 select-none pointer-events-none">
            <Image
              src={capability.bgImage || '/image/our enginerring soluutions/our enginerring capabilities bg image/plant-and-process-enginerring-bg.jpg'}
              alt={capability.title}
              fill
              priority
              sizes="100vw"
              className="object-cover object-center"
            />
          </div>

          {/* Hero Content Container */}
          <div className="relative z-10 mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
            <div className="max-w-2xl">
              {/* Eyebrow: \ OUR ENGINEERING CAPABILITIES — */}
              <div className="flex items-center gap-2 mb-3">
                <span className="text-blue-600 font-extrabold text-sm sm:text-base leading-none">\</span>
                <span className="font-mono text-xs font-extrabold uppercase tracking-[0.24em] text-blue-600">
                  OUR ENGINEERING CAPABILITIES
                </span>
                <div className="w-12 h-[2px] bg-blue-600 rounded-full" />
              </div>

              {/* Huge Bold Title */}
              <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-[#0B1528] leading-[1.08]">
                {capability.title}
              </h1>

              {/* Subtitle */}
              <p className="mt-4 text-base sm:text-lg text-slate-800 font-semibold leading-relaxed max-w-xl">
                {capability.hero}
              </p>

              {/* Action Buttons */}
              <div className="mt-8 flex flex-wrap items-center gap-3.5">
                <Link
                  href="/#solutions"
                  className="inline-flex items-center gap-2 rounded-full border border-slate-300 bg-white/95 backdrop-blur-xs px-5 py-2.5 text-xs font-mono font-bold uppercase tracking-wider text-slate-800 shadow-xs hover:bg-white hover:border-blue-400 hover:text-blue-600 transition-all"
                >
                  <ArrowLeft className="w-3.5 h-3.5" />
                  <span>{capability.leftButtonText || 'CONCEPT TO COMMISSIONING'}</span>
                </Link>

                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 rounded-full bg-blue-600 px-6 py-2.5 text-xs font-mono font-bold uppercase tracking-wider text-white shadow-md shadow-blue-500/25 hover:bg-blue-700 hover:shadow-lg hover:shadow-blue-500/30 transition-all"
                >
                  <span>{capability.rightButtonText || 'PROCESS & CLEANER TOMORROW →'}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* =========================================================
            MAIN CONTENT SECTION (Matching Reference Mockups)
        ========================================================= */}
        <section className="relative py-12 sm:py-16">
          <AnimatedSection as="div" className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              
              {/* Left Column (8 cols) */}
              <div className="lg:col-span-8 space-y-6">
                
                {/* 1. Capability Overview Card */}
                <div className="rounded-2xl border border-slate-200/80 bg-white p-6 sm:p-7 shadow-xs">
                  <div className="flex items-center gap-2">
                    <div className="flex h-5 w-5 items-center justify-center text-blue-600">
                      <Hexagon className="w-5 h-5 stroke-[2.5]" />
                    </div>
                    <span className="font-mono text-xs font-extrabold uppercase tracking-widest text-blue-600">
                      CAPABILITY OVERVIEW
                    </span>
                  </div>
                  <h2 className="text-2xl sm:text-3xl font-extrabold font-display text-slate-900 mt-2.5">
                    {capability.title}
                  </h2>
                  <p className="mt-3 text-sm sm:text-base leading-relaxed text-slate-600">
                    {capability.introduction}
                  </p>
                </div>

                {/* 2. Core Engineering Disciplines & Scope */}
                {capability.sections && capability.sections.length > 0 && (
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <h3 className="text-lg sm:text-xl font-extrabold font-display text-slate-900">
                        Core Engineering Disciplines & Scope
                      </h3>
                      <span className="inline-flex items-center gap-1 font-mono text-xs font-bold uppercase tracking-wider text-blue-600">
                        {capability.sections.length} DISCIPLINES →
                      </span>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {capability.sections.map((sec) => {
                        const DisciplineIcon = getDisciplineIcon(sec);
                        return (
                          <div
                            key={sec}
                            className="flex items-center justify-between rounded-xl border border-slate-200/90 bg-white p-3.5 sm:p-4 shadow-2xs hover:border-blue-400 hover:shadow-xs transition-all group cursor-default"
                          >
                            <div className="flex items-center gap-3 min-w-0">
                              <DisciplineIcon className="w-5 h-5 text-blue-600 shrink-0" />
                              <span className="font-bold text-sm text-slate-800 group-hover:text-blue-600 transition-colors truncate">
                                {sec}
                              </span>
                            </div>
                            <ArrowRight className="w-4 h-4 text-slate-300 group-hover:text-blue-600 group-hover:translate-x-0.5 transition-all shrink-0 ml-2" />
                          </div>
                        );
                      })}
                    </div>
                  </div>
                )}

                {/* 3. Specialized Computational Software & Platforms (When Available) */}
                {capability.software && capability.software.length > 0 && (
                  <div className="rounded-2xl border border-slate-200/80 bg-white p-5 sm:p-6 shadow-xs space-y-4">
                    <div className="flex items-center gap-2.5">
                      <Monitor className="w-5 h-5 text-blue-600" />
                      <h3 className="font-extrabold text-base sm:text-lg font-display text-slate-900">
                        Specialized Computational Software & Platforms
                      </h3>
                    </div>

                    <div className="flex flex-wrap items-center gap-2.5 sm:gap-3">
                      {capability.software.map((sw) => (
                        <SoftwareBadge key={sw} name={sw} />
                      ))}
                    </div>
                  </div>
                )}

                {/* 4. Engineering Deliverables Card */}
                {capability.deliverables && capability.deliverables.length > 0 && (
                  <div className="rounded-2xl border border-slate-200/80 bg-white p-5 sm:p-6 shadow-xs space-y-4">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2.5">
                        <FileText className="w-5 h-5 text-blue-600" />
                        <h3 className="font-extrabold text-base sm:text-lg font-display text-slate-900">
                          Engineering Deliverables
                        </h3>
                      </div>
                      <span className="font-mono text-[11px] font-bold uppercase tracking-wider text-blue-600">
                        VERIFIED MORE PACKAGES →
                      </span>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2.5">
                      {capability.deliverables.map((del) => (
                        <div
                          key={del}
                          className="flex items-center gap-2.5 rounded-xl border border-slate-200/80 bg-slate-50/50 hover:bg-white px-3.5 py-2.5 shadow-2xs hover:border-emerald-300 transition-all"
                        >
                          <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                          <span className="text-xs sm:text-sm font-semibold text-slate-700 truncate">
                            {del}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* 5. Key Industrial Sectors Supported Card */}
                {capability.industries && capability.industries.length > 0 && (
                  <div className="rounded-2xl border border-slate-200/80 bg-white p-5 sm:p-6 shadow-xs space-y-4">
                    <div className="flex items-center gap-2.5">
                      <Factory className="w-5 h-5 text-blue-600" />
                      <h3 className="font-extrabold text-base sm:text-lg font-display text-slate-900">
                        Key Industrial Sectors Supported
                      </h3>
                    </div>

                    <div className="flex flex-wrap gap-2.5">
                      {capability.industries.map((ind) => {
                        const IndIcon = getIndustryIcon(ind);
                        return (
                          <div
                            key={ind}
                            className="inline-flex items-center gap-2 rounded-full border border-slate-200/90 bg-white px-4 py-2 text-xs font-semibold text-slate-700 shadow-2xs hover:border-blue-400 hover:text-blue-600 transition-all"
                          >
                            <IndIcon className="w-4 h-4 text-blue-600" />
                            <span>{ind}</span>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                )}

              </div>

              {/* Right Column (4 cols) */}
              <div className="lg:col-span-4 space-y-6 lg:sticky lg:top-24">
                
                {/* 1. Visual Showcase Card (Clean, No Play Button) */}
                <div className="relative h-56 sm:h-60 w-full rounded-2xl overflow-hidden border border-slate-200/80 shadow-md bg-slate-900 group">
                  <Image
                    src={capability.rightVisualImage || capability.image}
                    alt={capability.title}
                    fill
                    sizes="(min-width: 1024px) 33vw, 100vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  {/* Subtle dark gradient overlay for text legibility */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-950/25 to-transparent" />

                  {/* Text Overlay at Bottom */}
                  <div className="absolute bottom-3 left-4 right-4">
                    <div className="text-[10px] font-mono font-bold uppercase tracking-[0.2em] text-cyan-300">
                      {capability.rightVisualTitle || 'ENGINEERING FOCUS'}
                    </div>
                    <div className="text-xs sm:text-sm font-extrabold text-white leading-tight mt-0.5">
                      {capability.rightVisualSubtitle || capability.tagline}
                    </div>
                  </div>
                </div>

                {/* 2. Deploy this Capability Box (Dynamic Light / Dark Theme) */}
                {isDarkSidebar ? (
                  /* DARK THEME WIDGET (Simulation, Automation, Steel Detailing) */
                  <div className="relative rounded-2xl border border-slate-800 bg-[#0B1528] p-6 sm:p-7 shadow-xl overflow-hidden text-white">
                    {/* Subtle faint watermark in background */}
                    <div className="absolute -right-4 -bottom-4 w-40 h-40 opacity-10 pointer-events-none select-none">
                      <Image
                        src={capability.image}
                        alt=""
                        fill
                        className="object-cover object-center rounded-full"
                      />
                    </div>

                    <div className="relative z-10">
                      <span className="font-mono text-xs font-black uppercase tracking-[0.2em] text-cyan-400">
                        PARTNER WITH GTS
                      </span>
                      <h4 className="text-xl font-black font-display text-white mt-1">
                        Deploy this Capability
                      </h4>
                      <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mt-2">
                        {capability.sidebarDescription ||
                          'Consult with our engineering directors, request work package estimates, or scale dedicated project teams.'}
                      </p>

                      <div className="space-y-2.5 mt-5">
                        <Link
                          href="/contact"
                          className="w-full flex items-center justify-center gap-2 rounded-xl bg-blue-600 hover:bg-blue-700 text-white py-3 px-4 text-xs sm:text-sm font-bold shadow-md shadow-blue-500/25 transition-all"
                        >
                          <FileText className="w-4 h-4" />
                          <span>{capability.sidebarButton1Text || 'Submit Engineering Request'}</span>
                          <span>→</span>
                        </Link>

                        <a
                          href="mailto:info@gtsusainc.com"
                          className="w-full flex items-center justify-center gap-2 rounded-xl bg-slate-900/90 hover:bg-slate-800 text-slate-200 border border-slate-700/80 py-2.5 px-4 text-xs sm:text-sm font-semibold transition-all"
                        >
                          <Mail className="w-4 h-4 text-blue-400" />
                          <span>{capability.sidebarButton2Text || 'Consult info@gtsusainc.com'}</span>
                        </a>
                      </div>

                      {/* API/ASME Compliance & Delivery */}
                      <div className="mt-5 space-y-2 text-xs font-medium text-slate-300">
                        <div className="flex items-center gap-2">
                          <ShieldCheck className="w-4 h-4 text-cyan-400 shrink-0" />
                          <span>API, ASME, ISO & Global Codes Compliance</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Globe className="w-4 h-4 text-cyan-400 shrink-0" />
                          <span>USA Leadership + Global Delivery Centers</span>
                        </div>
                      </div>

                      {/* Optional Footer Badges */}
                      {capability.sidebarBadges && capability.sidebarBadges.length > 0 && (
                        <div className="mt-4 pt-3.5 border-t border-slate-800 flex items-center justify-between text-[10px] font-semibold text-slate-300">
                          <div className="flex items-center gap-1">
                            <Sparkles className="w-3.5 h-3.5 text-blue-400 shrink-0" />
                            <span>Innovation</span>
                          </div>
                          <span className="text-slate-700">|</span>
                          <div className="flex items-center gap-1">
                            <ShieldCheck className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                            <span>Safety</span>
                          </div>
                          <span className="text-slate-700">|</span>
                          <div className="flex items-center gap-1">
                            <Leaf className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                            <span>Sustainability</span>
                          </div>
                          <span className="text-slate-700">|</span>
                          <div className="flex items-center gap-1">
                            <TrendingUp className="w-3.5 h-3.5 text-blue-400 shrink-0" />
                            <span>Excellence</span>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                ) : (
                  /* LIGHT THEME WIDGET (Plant & Process, Product Engineering) */
                  <div className="relative rounded-2xl border border-blue-200/80 bg-gradient-to-br from-[#eef6ff] via-[#f5f9ff] to-[#eaf2fd] p-6 sm:p-7 shadow-xs overflow-hidden">
                    {/* Subtle faint watermark in background */}
                    <div className="absolute -right-4 -bottom-4 w-40 h-40 opacity-10 pointer-events-none select-none">
                      <Image
                        src={capability.image}
                        alt=""
                        fill
                        className="object-cover object-center rounded-full"
                      />
                    </div>

                    <div className="relative z-10">
                      <span className="font-mono text-xs font-extrabold uppercase tracking-[0.2em] text-blue-600">
                        LET&apos;S BUILD TOGETHER
                      </span>
                      <h4 className="text-xl font-extrabold font-display text-slate-900 mt-1">
                        Deploy this Capability
                      </h4>
                      <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mt-2">
                        {capability.sidebarDescription ||
                          'Collaborate with our engineering experts to turn your vision into a safe, efficient, and manufacturable reality.'}
                      </p>

                      <div className="space-y-2.5 mt-5">
                        <Link
                          href="/contact"
                          className="w-full flex items-center justify-center gap-2 rounded-xl bg-blue-600 hover:bg-blue-700 text-white py-3 px-4 text-xs sm:text-sm font-bold shadow-md shadow-blue-500/25 transition-all"
                        >
                          <Mail className="w-4 h-4" />
                          <span>{capability.sidebarButton1Text || 'Request Engineering Support'}</span>
                          <span>→</span>
                        </Link>

                        <Link
                          href="/contact"
                          className="w-full flex items-center justify-center gap-2 rounded-xl bg-white hover:bg-slate-50 text-slate-800 border border-slate-200/90 py-2.5 px-4 text-xs sm:text-sm font-bold shadow-2xs transition-all"
                        >
                          <Mail className="w-4 h-4 text-blue-600" />
                          <span>{capability.sidebarButton2Text || 'Contact GTS'}</span>
                        </Link>
                      </div>

                      {/* API/ASME Compliance */}
                      <div className="mt-5 flex items-center gap-2 text-xs font-medium text-slate-600">
                        <ShieldCheck className="w-4 h-4 text-blue-600 shrink-0" />
                        <span>API, ASME, ISO & Global Codes Compliance</span>
                      </div>

                      {/* Trust Badges Footer */}
                      {capability.sidebarBadges && capability.sidebarBadges.length > 0 && (
                        <div className="mt-4 pt-4 border-t border-blue-200/60 flex items-center justify-between text-[11px] font-semibold text-slate-600">
                          {capability.sidebarBadges.map((badge, idx) => (
                            <React.Fragment key={badge}>
                              {idx > 0 && <span className="text-slate-300">|</span>}
                              <div className="flex items-center gap-1.5">
                                {idx === 0 && <Leaf className="w-3.5 h-3.5 text-emerald-500 shrink-0" />}
                                {idx === 1 && <Cog className="w-3.5 h-3.5 text-blue-600 shrink-0" />}
                                {idx === 2 && <TrendingUp className="w-3.5 h-3.5 text-blue-600 shrink-0" />}
                                <span>{badge}</span>
                              </div>
                            </React.Fragment>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                )}

              </div>

            </div>
          </AnimatedSection>
        </section>
      </div>
    );
  }

  // 2. Fallback to existing SolutionPoint if not in capabilities
  const point = solutionPoints.find((p) => p.slug === slug);
  if (!point) {
    notFound();
  }

  return (
    <div className="flex w-full flex-col">
      <PageHero
        eyebrow={`${point.parentHeading} Segment`}
        title={point.title}
        description="Specialized engineering capability and custom support services designed to integrate seamlessly with your internal development schedules."
      >
        <Link
          href="/"
          className="inline-flex items-center gap-1.5 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-xs font-mono uppercase tracking-[0.18em] text-slate-300 transition-colors hover:text-white"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          BACK TO HOME
        </Link>
      </PageHero>

      <section className="industrial-surface py-16 sm:py-24">
        <AnimatedSection as="div" className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            {/* Left side details */}
            <div className="lg:col-span-8 space-y-12">
              <div className="space-y-4">
                <h3 className="text-xl font-bold text-primary font-display">Specialized Scope of Work</h3>
                <p className="text-slate-500 text-xs leading-relaxed">{point.description}</p>
                <p className="text-slate-500 text-xs leading-relaxed">
                  As part of our commitment to delivering engineering excellence, GTS deploys highly trained, experienced specialists matching your domain software stack. Our team manages calculations, revisions, standard certifications, and file migrations, allowing you to maximize core engineering focus.
                </p>
              </div>

              {/* Concrete deliverables */}
              <div className="space-y-6">
                <h3 className="text-xl font-bold text-primary font-display">Engineering Deliverables</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {point.deliverables.map((del, idx) => (
                    <MagneticCard
                      key={idx}
                      className="bg-slate-50 border border-slate-200/50 rounded-lg p-4 flex items-center gap-3 shadow-sm hover:border-slate-300 transition-colors"
                    >
                      <span className="p-1 rounded bg-accent/15 text-accent shrink-0">
                        <CheckCircle2 className="w-4 h-4" />
                      </span>
                      <span className="text-xs text-slate-800 font-medium">{del}</span>
                    </MagneticCard>
                  ))}
                </div>
              </div>
            </div>

            {/* Right side contact & placeholders */}
            <div className="lg:col-span-4 space-y-8">
              {/* Asset Box */}
              <div className="p-2 border border-slate-200 bg-white/80 rounded-2xl overflow-hidden shadow-xl shadow-blue-100/50">
                <ImagePlaceholder
                  alt={point.title}
                  src="/image/showcase1.png"
                  aspectRatio="video"
                  showOverlay={true}
                  overlayText={`${point.parentHeading} - ${point.title}`}
                />
              </div>

              {/* Action box */}
              <div className="bg-primary text-white rounded-[1.5rem] p-6 space-y-5 shadow-lg shadow-primary/10">
                <div className="space-y-1">
                  <h4 className="font-bold text-sm">Deploy this Capability</h4>
                  <p className="text-slate-300 text-[11px]">
                    Request quotes or coordinate dedicated resources for {point.title}.
                  </p>
                </div>
                <div className="space-y-2.5">
                  <GradientButton href="/contact" variant="secondary" className="w-full py-2.5 text-xs">
                    <MessageSquare className="w-4 h-4" />
                    Submit Engineering Request
                  </GradientButton>
                  <a
                    href="mailto:info@gtsusainc.com"
                    className="flex w-full items-center justify-center gap-2 rounded-lg bg-white/10 py-2.5 text-center text-xs font-semibold text-white hover:bg-white/15 transition-colors border border-white/20"
                  >
                    <Mail className="w-4 h-4" />
                    Consult info@gtsusainc.com
                  </a>
                </div>
              </div>
            </div>
          </div>
        </AnimatedSection>
      </section>
    </div>
  );
}
