'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import type { LucideIcon } from 'lucide-react';
import {
  Activity,
  ArrowRight,
  Award,
  BarChart,
  Bot,
  Box,
  BrainCircuit,
  Briefcase,
  Building2,
  Calendar,
  Check,
  CheckCircle2,
  ChevronRight,
  Clock,
  Cloud,
  Code,
  Cog,
  Cpu,
  Database,
  Factory,
  FileCheck,
  FileText,
  Globe,
  Grid,
  Handshake,
  HardHat,
  Landmark,
  Laptop,
  Layers,
  Leaf,
  Lightbulb,
  LineChart,
  Map,
  MapPin,
  MessageSquare,
  Microscope,
  Monitor,
  Network,
  Plane,
  Radio,
  RotateCw,
  Search,
  Server,
  Settings,
  ShieldCheck,
  Ship,
  Sliders,
  Smartphone,
  Sparkles,
  Star,
  TrendingUp,
  Users,
  Wind,
  X,
  Zap
} from 'lucide-react';
import { solutionCapabilities } from '@/constants/engineeringCapabilities';
import {
  AnimatedSection,
  FloatingParticles,
  GlassCard,
  GradientButton,
  MagneticCard,
  SectionHeading
} from '@/components/ui';
import ConsultationSection from '@/components/home/ConsultationSection';
import CapabilitiesInteractiveMap from '@/components/home/CapabilitiesInteractiveMap';
import IndustryPerformanceMetrics from '@/components/home/IndustryPerformanceMetrics';

interface SolutionArea {
  id: string;
  title: string;
  description: string;
  icon: string;
  capabilities: string[];
}

interface CapabilityDiscipline {
  name: string;
  icon: LucideIcon;
  summary: string;
  deliverables: string[];
}

interface HeroMetric {
  label: string;
  value: string;
}

interface HeroSubSector {
  name: string;
  icon?: LucideIcon;
}

interface HeroVisual {
  id: string;
  label: string;
  category: string;
  title1: string;
  title2: string;
  subtitle: string;
  description: string;
  dashboardTitle: string;
  metrics: HeroMetric[];
  tags: string[];
  video: string;
  card1: string;
  card2: string;
  card3: string;
  card4: string;
  card5: string;
  subSectors: string[];
}

const heroVisuals: HeroVisual[] = [
  {
    id: 'oil-and-gas',
    label: 'Oil & Gas',
    category: 'OIL & GAS ENGINEERING',
    title1: 'Engineering',
    title2: 'Beyond Boundaries',
    subtitle: 'Energy Solutions for a Brighter Tomorrow',
    description:
      'Delivering end-to-end oil & gas engineering, digital solutions, and automation to build safer, smarter, and more sustainable energy systems for a global future.',
    dashboardTitle: 'OIL & GAS ENGINEERING VIEW',
    metrics: [
      { label: 'Asset Health', value: '98%' },
      { label: 'Safety Compliance', value: '100%' },
      { label: 'Production Status', value: 'Live' }
    ],
    tags: [
      'Process Engineering',
      'FEED & Detailed Engineering',
      'P&ID Design',
      'Construction Support',
      '3D Plant Design',
      'Digital Twin',
      'Asset Integrity',
      'Operations Support'
    ],
    video: '/vedios-gts/oil-and-gas/oil-and-gas-bg-video.mp4',
    card1: '/vedios-gts/oil-and-gas/oil-and-gas-card1.jpg',
    card2: '/vedios-gts/oil-and-gas/oil-and-gas-card2.jpg',
    card3: '/vedios-gts/oil-and-gas/oil-and-gas-card3.jpg',
    card4: '/vedios-gts/oil-and-gas/oil-and-gas-card4.jpg',
    card5: '/vedios-gts/oil-and-gas/oil-and-gas-card5.jpg',
    subSectors: [
      'Exploration & Production',
      'Midstream & Pipelines',
      'Refining & Petrochemicals',
      'LNG & Terminals',
      'Sustainability'
    ]
  },
  {
    id: 'power-utility',
    label: 'Power & Utilities',
    category: 'POWER & UTILITIES ENGINEERING',
    title1: 'Engineering',
    title2: 'Beyond Boundaries',
    subtitle: 'Intelligent Solutions for a Sustainable Tomorrow',
    description:
      'Delivering end-to-end power & utilities engineering, digital solutions, and automation to build safer, smarter, and more sustainable energy infrastructure for a resilient future.',
    dashboardTitle: 'POWER & UTILITIES VIEW',
    metrics: [
      { label: 'Grid Stability', value: 'Stable' },
      { label: 'Substation Health', value: '99%' },
      { label: 'SCADA Status', value: 'Online' }
    ],
    tags: [
      'Grid Studies',
      'Relay Coordination',
      'Substation Engineering',
      'Load Flow & Short Circuit',
      'Protection & Control',
      'Power Quality',
      'Transmission & Distribution',
      'Asset Integrity',
      'Renewable Integration',
      'Energy Management Systems',
      'Grid Modernization',
      'Decarbonization Solutions'
    ],
    video: '/vedios-gts/power-utility/power-utility-bg-video.mp4',
    card1: '/vedios-gts/power-utility/power-utility1.jpg',
    card2: '/vedios-gts/power-utility/power-utility2.jpg',
    card3: '/vedios-gts/power-utility/power-utility3.jpg',
    card4: '/vedios-gts/power-utility/power-utility5.png',
    card5: '/vedios-gts/power-utility/power-utility4.jpg',
    subSectors: [
      'Power Generation',
      'Transmission & Distribution',
      'Renewable Energy',
      'Energy Storage',
      'Utilities Infrastructure',
      'Sustainability'
    ]
  },
  {
    id: 'data-center',
    label: 'Data Centers',
    category: 'DATA CENTER ENGINEERING',
    title1: 'Engineering',
    title2: 'Beyond Boundaries',
    subtitle: 'Mission-critical Solutions for a Smarter Tomorrow',
    description:
      'Delivering end-to-end data center engineering, digital solutions, and automation to build safer, smarter, and more sustainable digital infrastructure for a connected future.',
    dashboardTitle: 'DATA CENTERS VIEW',
    metrics: [
      { label: 'Uptime', value: '99.999%' },
      { label: 'Capacity Status', value: 'Optimal' },
      { label: 'Operations', value: '24/7' }
    ],
    tags: [
      'Electrical Engineering',
      'CFD Cooling Design',
      'BIM',
      'Commissioning',
      'UPS Systems',
      'Digital Twin',
      'Power Distribution',
      'Energy Modeling'
    ],
    video: '/vedios-gts/data-center/data-center-bg-video.mp4',
    card1: '/vedios-gts/data-center/data-center-card1.jpg',
    card2: '/vedios-gts/data-center/data-center-card2.jpg',
    card3: '/vedios-gts/data-center/data-center-card3.jpg',
    card4: '/vedios-gts/data-center/data-center-card4.png',
    card5: '/vedios-gts/data-center/data-center-card5.jpg',
    subSectors: [
      'Data Center Design',
      'Power & Cooling',
      'Electrical Systems',
      'Building Infrastructure',
      'Security & Safety',
      'Sustainability'
    ]
  },
  {
    id: 'home-process',
    label: 'Process Engineering',
    category: 'PROCESS ENGINEERING',
    title1: 'Engineering',
    title2: 'Beyond Boundaries',
    subtitle: 'Intelligent Solutions for a Sustainable Tomorrow',
    description:
      'Delivering end-to-end process engineering, digital solutions, and automation to build safer, smarter, and more sustainable process industries for a global future.',
    dashboardTitle: 'PROCESS ENGINEERING VIEW',
    metrics: [
      { label: 'Plant Efficiency', value: '96%' },
      { label: 'Simulation Status', value: 'Running' },
      { label: 'Design Review', value: 'Complete' }
    ],
    tags: [
      'Process Simulation',
      'Heat & Mass Balance',
      'Equipment Design',
      'Utility Systems',
      'Process Optimization',
      'Plant Design',
      'Aspen HYSYS',
      'Digital Twin',
      'FEED & Detailed Engineering',
      'Operations Support'
    ],
    video: '/vedios-gts/home-process/home-process-bg-video.mp4',
    card1: '/vedios-gts/home-process/home-process1.jpg',
    card2: '/vedios-gts/home-process/home-process2.jpg',
    card3: '/vedios-gts/home-process/home-process3.jpg',
    card4: '/vedios-gts/home-process/home-process4.png',
    card5: '/vedios-gts/home-process/home-process5.jpg',
    subSectors: [
      'Chemicals & Petrochemicals',
      'Refining',
      'Pharmaceuticals',
      'Food & Beverage',
      'Specialty Chemicals',
      'Energy & Fuels'
    ]
  },
  {
    id: 'process-safety',
    label: 'Process Safety',
    category: 'PROCESS SAFETY ENGINEERING',
    title1: 'Engineering',
    title2: 'Beyond Boundaries',
    subtitle: 'Safer Processes for a Brighter Tomorrow',
    description:
      'Delivering end-to-end process safety engineering, digital solutions, and automation to build safer, smarter, and more sustainable process industries for a global future.',
    dashboardTitle: 'PROCESS SAFETY VIEW',
    metrics: [
      { label: 'Risk Level', value: 'Low' },
      { label: 'Compliance', value: '100%' },
      { label: 'Safety Review', value: 'Complete' }
    ],
    tags: [
      'HAZOP',
      'HAZID',
      'LOPA',
      'Fire Protection',
      'Relief Systems',
      'Emergency Response',
      'PSM',
      'Risk Assessment',
      'SIL Studies',
      'Safety Culture & Training'
    ],
    video: '/vedios-gts/process-safty/process-safty-bg-video.mp4',
    card1: '/vedios-gts/process-safty/process-safty1.jpg',
    card2: '/vedios-gts/process-safty/process-safty2.jpg',
    card3: '/vedios-gts/process-safty/process-safty3.jpg',
    card4: '/vedios-gts/process-safty/process-safty4.png',
    card5: '/vedios-gts/process-safty/process-safty6.jpg',
    subSectors: [
      'Chemicals & Petrochemicals',
      'Refining',
      'Pharmaceuticals',
      'Food & Beverage',
      'Specialty Chemicals',
      'Energy & Fuels'
    ]
  },
  {
    id: 'lng',
    label: 'LNG',
    category: 'LNG ENGINEERING',
    title1: 'Engineering',
    title2: 'Beyond Boundaries',
    subtitle: 'Clean Energy Solutions for a Brighter Tomorrow',
    description:
      'Delivering end-to-end LNG engineering, digital solutions, and automation to build safer, smarter, and more sustainable energy systems for a global future.',
    dashboardTitle: 'LNG FACILITY VIEW',
    metrics: [
      { label: 'Asset Health', value: '98%' },
      { label: 'Safety Compliance', value: '100%' },
      { label: 'Terminal Status', value: 'LIVE' }
    ],
    tags: [
      'Liquefaction Engineering',
      'FEED & Detailed Engineering',
      'LNG Storage',
      'Construction Support',
      'Regasification',
      'Digital Twin',
      'Marine Loading',
      'Operations Support',
      'Asset Integrity',
      'Decarbonization Solutions'
    ],
    video: '/vedios-gts/lng/lng-bg-video.mp4',
    card1: '/vedios-gts/lng/lng-1.jpg',
    card2: '/vedios-gts/lng/lng-2.jpg',
    card3: '/vedios-gts/lng/lng-3.jpg',
    card4: '/vedios-gts/lng/lng-4.png',
    card5: '/vedios-gts/lng/lng-5.jpg',
    subSectors: [
      'LNG Terminals',
      'Liquefaction',
      'Storage & Tanks',
      'Regasification',
      'Marine & Shipping',
      'Gas Infrastructure',
      'Sustainability'
    ]
  },
  {
    id: 'semiconductor',
    label: 'Semiconductor',
    category: 'SEMICONDUCTOR ENGINEERING',
    title1: 'Engineering',
    title2: 'Beyond Boundaries',
    subtitle: 'Intelligent Solutions for a Sustainable Tomorrow',
    description:
      'Delivering end-to-end semiconductor engineering, digital solutions, and automation to build safer, smarter, and more sustainable semiconductor manufacturing for a connected future.',
    dashboardTitle: 'SEMICONDUCTOR FACILITY VIEW',
    metrics: [
      { label: 'Cleanroom Status', value: 'ISO 3' },
      { label: 'Facility Status', value: 'Operational' },
      { label: 'Equipment Status', value: 'Online' }
    ],
    tags: [
      'Cleanroom Design',
      'Chemical Systems',
      'Process Utilities',
      'BIM',
      'Digital Twin',
      'Ultra Pure Water',
      'HVAC',
      'Equipment Layout',
      'Facility Automation',
      'Energy Modeling'
    ],
    video: '/vedios-gts/semiconductor/Semiconductors-bg-video.mp4',
    card1: '/vedios-gts/semiconductor/Semiconductors1.jpg',
    card2: '/vedios-gts/semiconductor/Semiconductors2.jpg',
    card3: '/vedios-gts/semiconductor/image2.jpg',
    card4: '/vedios-gts/semiconductor/image1.png',
    card5: '/vedios-gts/semiconductor/Semiconductors5.jpg',
    subSectors: [
      'Wafer Fabs',
      'Assembly & Test',
      'OSAT',
      'Semiconductor Materials',
      'Utilities & Infrastructure',
      'Facility Automation',
      'Sustainability'
    ]
  },
  {
    id: 'water-wastewater',
    label: 'Water & Wastewater',
    category: 'WATER & WASTEWATER ENGINEERING',
    title1: 'Engineering',
    title2: 'Beyond Boundaries',
    subtitle: 'Intelligent Solutions for a Sustainable Tomorrow',
    description:
      'Delivering end-to-end water & wastewater engineering, digital solutions, and automation to build safer, smarter, and more sustainable water infrastructure for a healthier, more resilient future.',
    dashboardTitle: 'WATER & WASTEWATER VIEW',
    metrics: [
      { label: 'Plant Performance', value: '98%' },
      { label: 'Water Quality', value: 'Within Spec' },
      { label: 'Operations', value: 'Continuous' }
    ],
    tags: [
      'Water Treatment',
      'Wastewater',
      'Pump Stations',
      'Network Modeling',
      'SCADA',
      'Instrumentation',
      'Process Control',
      'Digital Twin'
    ],
    video: '/vedios-gts/water-wastewater/water-wastewater-bg-video.mp4',
    card1: '/vedios-gts/water-wastewater/water-wastewater1.jpg',
    card2: '/vedios-gts/water-wastewater/water-wastewater2.jpg',
    card3: '/vedios-gts/water-wastewater/water-wastewater3.jpg',
    card4: '/vedios-gts/water-wastewater/water-wastewater4.png',
    card5: '/vedios-gts/water-wastewater/image2.jpg',
    subSectors: [
      'Water Treatment',
      'Wastewater Treatment',
      'Pumping Systems',
      'Distribution Networks',
      'Stormwater Management',
      'Asset Optimization',
      'Sustainability'
    ]
  },
  {
    id: 'Telecommunication',
    label: 'Telecommunication',
    category: 'Telecommunication ENGINEERING',
    title1: 'Engineering',
    title2: 'Beyond Boundaries',
    subtitle: 'Intelligent Solutions for a Sustainable Tomorrow',
    description:
      'Delivering end-to-end Telecommunication engineering, digital solutions, and automation to build safer, smarter, and more sustainable water infrastructure for a healthier, more resilient future.',
    dashboardTitle: 'Telecommunication VIEW',
    metrics: [
      { label: 'Plant Performance', value: '98%' },
      { label: 'Water Quality', value: 'Within Spec' },
      { label: 'Operations', value: 'Continuous' }
    ],
    tags: [
      'Water Treatment',
      'Wastewater',
      'Pump Stations',
      'Network Modeling',
      'SCADA',
      'Instrumentation',
      'Process Control',
      'Digital Twin'
    ],
    video: '/vedios-gts/telecommunication/telecommunication-bg-cideo.mp4',
    card1: '/vedios-gts/water-wastewater/water-wastewater1.jpg',
    card2: '/vedios-gts/water-wastewater/water-wastewater2.jpg',
    card3: '/vedios-gts/water-wastewater/water-wastewater3.jpg',
    card4: '/vedios-gts/water-wastewater/water-wastewater4.png',
    card5: '/vedios-gts/water-wastewater/image2.jpg',
    subSectors: [
      'Water Treatment',
      'Wastewater Treatment',
      'Pumping Systems',
      'Distribution Networks',
      'Stormwater Management',
      'Asset Optimization',
      'Sustainability'
    ]
  },
  {
    id: 'Railway',
    label: 'Railway',
    category: 'Railway ENGINEERING',
    title1: 'Engineering',
    title2: 'Beyond Boundaries',
    subtitle: 'Intelligent Solutions for a Sustainable Tomorrow',
    description:
      'Delivering end-to-end Railway engineering, digital solutions, and automation to build safer, smarter, and more sustainable water infrastructure for a healthier, more resilient future.',
    dashboardTitle: 'Railway VIEW',
    metrics: [
      { label: 'Plant Performance', value: '98%' },
      { label: 'Water Quality', value: 'Within Spec' },
      { label: 'Operations', value: 'Continuous' }
    ],
    tags: [
      'Water Treatment',
      'Wastewater',
      'Pump Stations',
      'Network Modeling',
      'SCADA',
      'Instrumentation',
      'Process Control',
      'Digital Twin'
    ],
    video: '/vedios-gts/railway/railway-bg-video.mp4',
    card1: '/vedios-gts/water-wastewater/water-wastewater1.jpg',
    card2: '/vedios-gts/water-wastewater/water-wastewater2.jpg',
    card3: '/vedios-gts/water-wastewater/water-wastewater3.jpg',
    card4: '/vedios-gts/water-wastewater/water-wastewater4.png',
    card5: '/vedios-gts/water-wastewater/image2.jpg',
    subSectors: [
      'Water Treatment',
      'Wastewater Treatment',
      'Pumping Systems',
      'Distribution Networks',
      'Stormwater Management',
      'Asset Optimization',
      'Sustainability'
    ]
  },
  {
    id: 'Marine',
    label: 'Marine',
    category: 'Marine ENGINEERING',
    title1: 'Engineering',
    title2: 'Beyond Boundaries',
    subtitle: 'Intelligent Solutions for a Sustainable Tomorrow',
    description:
      'Delivering end-to-end Marine engineering, digital solutions, and automation to build safer, smarter, and more sustainable water infrastructure for a healthier, more resilient future.',
    dashboardTitle: 'Marine VIEW',
    metrics: [
      { label: 'Plant Performance', value: '98%' },
      { label: 'Water Quality', value: 'Within Spec' },
      { label: 'Operations', value: 'Continuous' }
    ],
    tags: [
      'Water Treatment',
      'Wastewater',
      'Pump Stations',
      'Network Modeling',
      'SCADA',
      'Instrumentation',
      'Process Control',
      'Digital Twin'
    ],
    video: '/vedios-gts/marine/marine-bg-video.mp4',
    card1: '/vedios-gts/water-wastewater/water-wastewater1.jpg',
    card2: '/vedios-gts/water-wastewater/water-wastewater2.jpg',
    card3: '/vedios-gts/water-wastewater/water-wastewater3.jpg',
    card4: '/vedios-gts/water-wastewater/water-wastewater4.png',
    card5: '/vedios-gts/water-wastewater/image2.jpg',
    subSectors: [
      'Water Treatment',
      'Wastewater Treatment',
      'Pumping Systems',
      'Distribution Networks',
      'Stormwater Management',
      'Asset Optimization',
      'Sustainability'
    ]
  },
  {
    id: 'mining & metals',
    label: 'mining & metals',
    category: 'mining & metals ENGINEERING',
    title1: 'Engineering',
    title2: 'Beyond Boundaries',
    subtitle: 'Intelligent Solutions for a Sustainable Tomorrow',
    description:
      'Delivering end-to-end mining & metals engineering, digital solutions, and automation to build safer, smarter, and more sustainable water infrastructure for a healthier, more resilient future.',
    dashboardTitle: 'mining & metals VIEW',
    metrics: [
      { label: 'Plant Performance', value: '98%' },
      { label: 'Water Quality', value: 'Within Spec' },
      { label: 'Operations', value: 'Continuous' }
    ],
    tags: [
      'Water Treatment',
      'Wastewater',
      'Pump Stations',
      'Network Modeling',
      'SCADA',
      'Instrumentation',
      'Process Control',
      'Digital Twin'
    ],
    video: '/vedios-gts/mining/mining & metals-bg-video.mp4',
    card1: '/vedios-gts/water-wastewater/water-wastewater1.jpg',
    card2: '/vedios-gts/water-wastewater/water-wastewater2.jpg',
    card3: '/vedios-gts/water-wastewater/water-wastewater3.jpg',
    card4: '/vedios-gts/water-wastewater/water-wastewater4.png',
    card5: '/vedios-gts/water-wastewater/image2.jpg',
    subSectors: [
      'Water Treatment',
      'Wastewater Treatment',
      'Pumping Systems',
      'Distribution Networks',
      'Stormwater Management',
      'Asset Optimization',
      'Sustainability'
    ]
  },
  {
    id: 'renewable energy',
    label: 'renewable energy',
    category: 'renewable energy ENGINEERING',
    title1: 'Engineering',
    title2: 'Beyond Boundaries',
    subtitle: 'Intelligent Solutions for a Sustainable Tomorrow',
    description:
      'Delivering end-to-end renewable energy engineering, digital solutions, and automation to build safer, smarter, and more sustainable water infrastructure for a healthier, more resilient future.',
    dashboardTitle: 'renewable energy VIEW',
    metrics: [
      { label: 'Plant Performance', value: '98%' },
      { label: 'Water Quality', value: 'Within Spec' },
      { label: 'Operations', value: 'Continuous' }
    ],
    tags: [
      'Water Treatment',
      'Wastewater',
      'Pump Stations',
      'Network Modeling',
      'SCADA',
      'Instrumentation',
      'Process Control',
      'Digital Twin'
    ],
    video: '/vedios-gts/renewable energy/renewable energy.mp4',
    card1: '/vedios-gts/water-wastewater/water-wastewater1.jpg',
    card2: '/vedios-gts/water-wastewater/water-wastewater2.jpg',
    card3: '/vedios-gts/water-wastewater/water-wastewater3.jpg',
    card4: '/vedios-gts/water-wastewater/water-wastewater4.png',
    card5: '/vedios-gts/water-wastewater/image2.jpg',
    subSectors: [
      'Water Treatment',
      'Wastewater Treatment',
      'Pumping Systems',
      'Distribution Networks',
      'Stormwater Management',
      'Asset Optimization',
      'Sustainability'
    ]
  },
  {
    id: 'Medical Machine',
    label: 'Medical Machine',
    category: 'Medical Machine ENGINEERING',
    title1: 'Engineering',
    title2: 'Beyond Boundaries',
    subtitle: 'Intelligent Solutions for a Sustainable Tomorrow',
    description:
      'Delivering end-to-end Medical Machine engineering, digital solutions, and automation to build safer, smarter, and more sustainable water infrastructure for a healthier, more resilient future.',
    dashboardTitle: 'Medical Machine VIEW',
    metrics: [
      { label: 'Plant Performance', value: '98%' },
      { label: 'Water Quality', value: 'Within Spec' },
      { label: 'Operations', value: 'Continuous' }
    ],
    tags: [
      'Water Treatment',
      'Wastewater',
      'Pump Stations',
      'Network Modeling',
      'SCADA',
      'Instrumentation',
      'Process Control',
      'Digital Twin'
    ],
    video: '/vedios-gts/medical/medical.mp4',
    card1: '/vedios-gts/water-wastewater/water-wastewater1.jpg',
    card2: '/vedios-gts/water-wastewater/water-wastewater2.jpg',
    card3: '/vedios-gts/water-wastewater/water-wastewater3.jpg',
    card4: '/vedios-gts/water-wastewater/water-wastewater4.png',
    card5: '/vedios-gts/water-wastewater/image2.jpg',
    subSectors: [
      'Water Treatment',
      'Wastewater Treatment',
      'Pumping Systems',
      'Distribution Networks',
      'Stormwater Management',
      'Asset Optimization',
      'Sustainability'
    ]
  },
  {
    id: 'Biology',
    label: 'Biology',
    category: 'Biology ENGINEERING',
    title1: 'Engineering',
    title2: 'Beyond Boundaries',
    subtitle: 'Intelligent Solutions for a Sustainable Tomorrow',
    description:
      'Delivering end-to-end Biology engineering, digital solutions, and automation to build safer, smarter, and more sustainable water infrastructure for a healthier, more resilient future.',
    dashboardTitle: 'Biology VIEW',
    metrics: [
      { label: 'Plant Performance', value: '98%' },
      { label: 'Water Quality', value: 'Within Spec' },
      { label: 'Operations', value: 'Continuous' }
    ],
    tags: [
      'Water Treatment',
      'Wastewater',
      'Pump Stations',
      'Network Modeling',
      'SCADA',
      'Instrumentation',
      'Process Control',
      'Digital Twin'
    ],
    video: '/vedios-gts/biology/biology.mp4',
    card1: '/vedios-gts/water-wastewater/water-wastewater1.jpg',
    card2: '/vedios-gts/water-wastewater/water-wastewater2.jpg',
    card3: '/vedios-gts/water-wastewater/water-wastewater3.jpg',
    card4: '/vedios-gts/water-wastewater/water-wastewater4.png',
    card5: '/vedios-gts/water-wastewater/image2.jpg',
    subSectors: [
      'Water Treatment',
      'Wastewater Treatment',
      'Pumping Systems',
      'Distribution Networks',
      'Stormwater Management',
      'Asset Optimization',
      'Sustainability'
    ]
  },
  {
    id: 'Consumer',
    label: 'Consumer',
    category: 'Consumer ENGINEERING',
    title1: 'Engineering',
    title2: 'Beyond Boundaries',
    subtitle: 'Intelligent Solutions for a Sustainable Tomorrow',
    description:
      'Delivering end-to-end Consumer engineering, digital solutions, and automation to build safer, smarter, and more sustainable water infrastructure for a healthier, more resilient future.',
    dashboardTitle: 'Consumer VIEW',
    metrics: [
      { label: 'Plant Performance', value: '98%' },
      { label: 'Water Quality', value: 'Within Spec' },
      { label: 'Operations', value: 'Continuous' }
    ],
    tags: [
      'Water Treatment',
      'Wastewater',
      'Pump Stations',
      'Network Modeling',
      'SCADA',
      'Instrumentation',
      'Process Control',
      'Digital Twin'
    ],
    video: '/vedios-gts/consumer/consumer.mp4',
    card1: '/vedios-gts/water-wastewater/water-wastewater1.jpg',
    card2: '/vedios-gts/water-wastewater/water-wastewater2.jpg',
    card3: '/vedios-gts/water-wastewater/water-wastewater3.jpg',
    card4: '/vedios-gts/water-wastewater/water-wastewater4.png',
    card5: '/vedios-gts/water-wastewater/image2.jpg',
    subSectors: [
      'Water Treatment',
      'Wastewater Treatment',
      'Pumping Systems',
      'Distribution Networks',
      'Stormwater Management',
      'Asset Optimization',
      'Sustainability'
    ]
  },
  {
    id: 'Aerospace',
    label: 'Aerospace',
    category: 'Aerospace ENGINEERING',
    title1: 'Engineering',
    title2: 'Beyond Boundaries',
    subtitle: 'Intelligent Solutions for a Sustainable Tomorrow',
    description:
      'Delivering end-to-end Aerospace engineering, digital solutions, and automation to build safer, smarter, and more sustainable water infrastructure for a healthier, more resilient future.',
    dashboardTitle: 'Aerospace VIEW',
    metrics: [
      { label: 'Plant Performance', value: '98%' },
      { label: 'Water Quality', value: 'Within Spec' },
      { label: 'Operations', value: 'Continuous' }
    ],
    tags: [
      'Water Treatment',
      'Wastewater',
      'Pump Stations',
      'Network Modeling',
      'SCADA',
      'Instrumentation',
      'Process Control',
      'Digital Twin'
    ],
    video: '/vedios-gts/aerospace/aerospace.mp4',
    card1: '/vedios-gts/water-wastewater/water-wastewater1.jpg',
    card2: '/vedios-gts/water-wastewater/water-wastewater2.jpg',
    card3: '/vedios-gts/water-wastewater/water-wastewater3.jpg',
    card4: '/vedios-gts/water-wastewater/water-wastewater4.png',
    card5: '/vedios-gts/water-wastewater/image2.jpg',
    subSectors: [
      'Water Treatment',
      'Wastewater Treatment',
      'Pumping Systems',
      'Distribution Networks',
      'Stormwater Management',
      'Asset Optimization',
      'Sustainability'
    ]
  },
  {
    id: 'Process enginerring',
    label: 'Process enginerring',
    category: 'Process enginerring ENGINEERING',
    title1: 'Engineering',
    title2: 'Beyond Boundaries',
    subtitle: 'Intelligent Solutions for a Sustainable Tomorrow',
    description:
      'Delivering end-to-end Process enginerring engineering, digital solutions, and automation to build safer, smarter, and more sustainable water infrastructure for a healthier, more resilient future.',
    dashboardTitle: 'Process enginerring VIEW',
    metrics: [
      { label: 'Plant Performance', value: '98%' },
      { label: 'Water Quality', value: 'Within Spec' },
      { label: 'Operations', value: 'Continuous' }
    ],
    tags: [
      'Water Treatment',
      'Wastewater',
      'Pump Stations',
      'Network Modeling',
      'SCADA',
      'Instrumentation',
      'Process Control',
      'Digital Twin'
    ],
    video: '/vedios-gts/process-enginerring/process engineering.mp4',
    card1: '/vedios-gts/water-wastewater/water-wastewater1.jpg',
    card2: '/vedios-gts/water-wastewater/water-wastewater2.jpg',
    card3: '/vedios-gts/water-wastewater/water-wastewater3.jpg',
    card4: '/vedios-gts/water-wastewater/water-wastewater4.png',
    card5: '/vedios-gts/water-wastewater/image2.jpg',
    subSectors: [
      'Water Treatment',
      'Wastewater Treatment',
      'Pumping Systems',
      'Distribution Networks',
      'Stormwater Management',
      'Asset Optimization',
      'Sustainability'
    ]
  },
];
const trustStats = [
  {
    title: 'Established 2012',
    image: '/image/trusted enginerring/Established.jpg',
    description:
      'More than a decade of delivering multidisciplinary engineering solutions for industrial clients through innovation, digital engineering, and execution excellence.'
  },
  {
    title: '500+ Projects Delivered',
    image: '/image/trusted enginerring/Projects Delivered.jpg',
    description:
      'Successfully supporting FEED, detailed engineering, EPC, brownfield expansions, and digital transformation projects across multiple industries.'
  },
  {
    title: 'Global Delivery Model',
    image: '/image/trusted enginerring/Global Delivery Model.jpg',
    description:
      'Integrated project leadership from the United States with scalable engineering execution through global delivery centers and digital collaboration.'
  },
  {
    title: 'Multidisciplinary Engineering Teams',
    image: '/image/trusted enginerring/Multidisciplinary Engineering Teams.jpg',
    description:
      'Integrated engineering teams collaborate across all major disciplines to deliver coordinated, constructible, and digitally enabled engineering solutions.'
  },
  {
    title: 'AI & Digital Engineering Capability',
    image: '/image/trusted enginerring/AI-Enabled Digital Engineering.jpg',
    description:
      'AI-assisted engineering workflows, digital twins, engineering analytics, and simulation technologies improve quality, accelerate schedules, and reduce project risk.'
  },
  {
    title: 'US + India Operations',
    image: '/image/trusted enginerring/USA + India.jpg',
    description:
      'Combining USA project leadership with global engineering execution to provide responsive, scalable, and cost-effective engineering support.'
  }
];

const whoWeAreTrustStats = [
  { value: '100+', label: 'Qualified Professionals', icon: Users },
  { value: '500+', label: 'Projects Delivered', icon: FileText },
  { value: '15+', label: 'Industry Sectors Supported', icon: Cog },
  { value: 'USA • India', label: 'Engineering Centers', icon: Globe },
  { value: '24/7', label: 'Engineering Collaboration', icon: Clock },
  { value: 'Trusted', label: 'Quality, Safety & Compliance', icon: ShieldCheck }
];

const engineeringPillars = [
  { title: 'Multi-Discipline', subtitle: 'Expertise', icon: Cog },
  { title: 'Faster', subtitle: 'Project Delivery', icon: Zap },
  { title: 'Cost', subtitle: 'Optimization', icon: BarChart },
  { title: 'Sustainable', subtitle: 'Industrial Growth', icon: Leaf }
];

export interface EngineeringSolutionItem {
  id: string;
  title: string;
  shortDesc: string;
  fullDesc: string;
  image: string;
  icon: LucideIcon;
  stats: { value: string; label: string }[];
  keyServices: string[];
  softwareTools: string[];
  relatedIndustries: string[];
  bottomMetrics: { label: string; sublabel: string }[];
}

const engineeringSolutions: EngineeringSolutionItem[] = [
  {
    id: 'process-engineering',
    title: 'Process Engineering',
    shortDesc: 'Process design, heat & material balance, hydraulics, P&ID, HAZOP, and process safety for cleaner, safer operations.',
    fullDesc:
      'End-to-end engineering solutions for process plants, refineries, LNG, power, chemicals, and industrial facilities, delivered with accuracy, efficiency, and industry expertise.',
    image: '/image/who we are/plant enginerring.jpg',
    icon: Factory,
    stats: [
      { value: '50+', label: 'Plant Projects' },
      { value: '25+', label: 'Clients' },
      { value: '15+', label: 'Industries' }
    ],
    keyServices: [
      'FEED and Detailed Engineering',
      'Process Design (PFD, P&ID)',
      '3D Modeling & Plant Layout',
      'Piping & Stress Analysis',
      'Mechanical Equipment Design',
      'Electrical, Instrumentation & Automation',
      'Civil & Structural Engineering',
      'Utility Systems & Infrastructure',
      'EPC Support and Commissioning Assistance'
    ],
    softwareTools: ['PDMS', 'SP3D', 'E3D', 'AutoCAD Plant 3D', 'CAESAR II', 'AVEVA', 'Hexagon SmartPlant'],
    relatedIndustries: ['Oil & Gas', 'LNG', 'Chemicals', 'Power', 'Refining', 'Manufacturing', 'Pharmaceuticals'],
    bottomMetrics: [
      { label: '500+', sublabel: 'Projects Delivered' },
      { label: '20+', sublabel: 'Years Experience' },
      { label: 'Global', sublabel: 'Project Support' }
    ]
  },
  {
    id: 'product-engineering',
    title: 'Product Engineering',
    shortDesc: 'Equipment design, package engineering, CAD/CAE, reverse engineering and manufacturing support.',
    fullDesc:
      'Mechanical design, product development, reverse engineering, and manufacturing support for industrial equipment and systems.',
    image: '/image/who we are/product enginerring.jpg',
    icon: Box,
    stats: [
      { value: '50+', label: 'Products Engineered' },
      { value: '30+', label: 'Global Clients' },
      { value: 'Cost', label: 'Optimized Designs' }
    ],
    keyServices: [
      'Mechanical Design & 3D Modeling',
      'Equipment & Machinery Design',
      'Reverse Engineering',
      'Design for Manufacturing (DFM)',
      'Pressure Vessel Design',
      'Product Development',
      'Detailed Drawings & Documentation',
      'Manufacturing Support'
    ],
    softwareTools: ['SolidWorks', 'CATIA', 'NX', 'Inventor', 'Creo', 'AutoCAD Mechanical'],
    relatedIndustries: ['Oil & Gas', 'Power', 'Manufacturing', 'Heavy Industry', 'Mining', 'Process Equipment'],
    bottomMetrics: [
      { label: '50+', sublabel: 'Products Engineered' },
      { label: '30+', sublabel: 'Global Clients' },
      { label: 'Cost', sublabel: 'Optimized Designs' }
    ]
  },
  {
    id: 'structural-engineering',
    title: 'Structural Engineering',
    shortDesc: 'Steel detailing, structural analysis, fabrication drawings, and offshore structures.',
    fullDesc:
      'Steel detailing, structural analysis, fabrication drawings, and offshore engineering for industrial plants, infrastructure, and marine structures.',
    image: '/image/who we are/structured enginerring.jpg',
    icon: Layers,
    stats: [
      { value: '1,000+', label: 'Structural Drawings' },
      { value: '15+', label: 'Years Experience' },
      { value: 'Global', label: 'Project Execution' }
    ],
    keyServices: [
      'Structural Analysis & Design',
      'Steel Detailing & Fabrication Drawings',
      'Connection Design',
      'Industrial & Offshore Structures',
      'Pipe Racks & Modules',
      'Foundation & Civil Structures',
      'Erection Drawings & Support',
      'Design to International Standards'
    ],
    softwareTools: ['STAAD Pro', 'Tekla Structures', 'Revit Structure', 'SAP2000', 'ETABS', 'Advance Steel'],
    relatedIndustries: ['Oil & Gas', 'LNG', 'Power', 'Infrastructure', 'Marine', 'Manufacturing'],
    bottomMetrics: [
      { label: '1,000+', sublabel: 'Structural Drawings' },
      { label: '15+', sublabel: 'Years Experience' },
      { label: 'Global', sublabel: 'Project Execution' }
    ]
  },
  {
    id: 'digital-engineering',
    title: 'Digital Engineering',
    shortDesc: '3D modeling, digital twins, BIM, engineering analytics, and automation solutions.',
    fullDesc:
      'AI-enabled engineering workflows, digital twins, BIM, engineering analytics, and data intelligence for smarter, faster, and more efficient project delivery.',
    image: '/image/who we are/digital enginerring.jpg',
    icon: Monitor,
    stats: [
      { value: 'Faster', label: 'Decision Making' },
      { value: 'Higher', label: 'Project Accuracy' },
      { value: 'Smarter', label: 'Project Operations' }
    ],
    keyServices: [
      'Digital Twin Development',
      'BIM & 3D Visualization',
      'AI Engineering & Automation',
      'Engineering Data Analytics',
      'Digital Project Collaboration',
      'Reality Capture & Laser Scanning',
      'Virtual Commissioning',
      'Cloud-based Engineering Platforms'
    ],
    softwareTools: ['AVEVA', 'Bentley', 'Autodesk', 'Azure Digital Twins', 'Power BI', 'Python'],
    relatedIndustries: ['Oil & Gas', 'Power', 'Manufacturing', 'Infrastructure', 'Chemicals', 'Renewables'],
    bottomMetrics: [
      { label: 'Faster', sublabel: 'Decision Making' },
      { label: 'Higher', sublabel: 'Project Accuracy' },
      { label: 'Smarter', sublabel: 'Project Operations' }
    ]
  },
  {
    id: 'simulation-analysis',
    title: 'Simulation & Analysis',
    shortDesc: 'FEA, CFD, thermal analysis, vibration, and multi-physics simulation for optimized designs.',
    fullDesc:
      'Advanced engineering simulation including structural, thermal, CFD, fatigue, vibration, and multi-physics analysis to improve performance, safety, and reliability.',
    image: '/image/who we are/simulation and analyses.jpg',
    icon: BrainCircuit,
    stats: [
      { value: 'Reliable', label: 'Design Outcomes' },
      { value: 'Reduced', label: 'Project Risk' },
      { value: 'Optimized', label: 'Performance' }
    ],
    keyServices: [
      'Finite Element Analysis (FEA)',
      'Computational Fluid Dynamics (CFD)',
      'Thermal & Stress Analysis',
      'Fatigue & Vibration Analysis',
      'Multi-Physics Simulation',
      'Design Optimization',
      'Failure Analysis',
      'Digital Validation & Certification Support'
    ],
    softwareTools: ['ANSYS', 'Abaqus', 'HyperMesh', 'LS-DYNA', 'COMSOL', 'Fluent', 'OpenFOAM'],
    relatedIndustries: ['Oil & Gas', 'Aerospace', 'Power', 'Manufacturing', 'Automotive', 'Heavy Equipment'],
    bottomMetrics: [
      { label: 'Reliable', sublabel: 'Design Outcomes' },
      { label: 'Reduced', sublabel: 'Project Risk' },
      { label: 'Optimized', sublabel: 'Performance' }
    ]
  },
  {
    id: 'automation-controls',
    title: 'Automation & Controls',
    shortDesc: 'PLC, SCADA, IIoT, Industry 4.0, and smart manufacturing solutions.',
    fullDesc:
      'Industrial automation, communication systems, SCADA, IIoT, and smart manufacturing solutions to improve operational efficiency and plant performance.',
    image: '/image/who we are/automation and control.jpg',
    icon: Sliders,
    stats: [
      { value: 'Increased', label: 'Operational Efficiency' },
      { value: 'Reduced', label: 'Downtime' },
      { value: 'Smarter', label: 'Plant Operations' }
    ],
    keyServices: [
      'PLC & SCADA System Design',
      'Instrumentation & Control Design',
      'DCS & Safety Systems',
      'IIoT & Industry 4.0 Integration',
      'Control Panel Design',
      'Automation Software Development',
      'System Testing & Commissioning',
      'Predictive Maintenance Solutions'
    ],
    softwareTools: ['Siemens TIA Portal', 'Rockwell Studio 5000', 'AVEVA', 'Wonderware', 'Ignition', 'OSI PI', 'WinCC'],
    relatedIndustries: ['Oil & Gas', 'Power', 'Manufacturing', 'Chemicals', 'Water', 'Pharmaceuticals'],
    bottomMetrics: [
      { label: 'Increased', sublabel: 'Operational Efficiency' },
      { label: 'Reduced', sublabel: 'Downtime' },
      { label: 'Smarter', sublabel: 'Plant Operations' }
    ]
  },
  {
    id: 'infrastructure-bim',
    title: 'Infrastructure & BIM',
    shortDesc: 'Civil, infrastructure design, 3D coordination, BIM, and digital project delivery.',
    fullDesc:
      'Civil, infrastructure, and BIM solutions including 3D modeling, construction coordination, and digital project delivery for industrial and infrastructure projects.',
    image: '/image/who we are/infra and BIM.jpg',
    icon: Building2,
    stats: [
      { value: 'Faster', label: 'Project Delivery' },
      { value: 'Reduced', label: 'Rework' },
      { value: 'Better', label: 'Collaboration' }
    ],
    keyServices: [
      '3D BIM Modeling',
      'Civil & Infrastructure Design',
      'Construction Coordination',
      'Digital Project Delivery',
      'Clash Detection & Resolution',
      'Quantity Takeoff & Modeling',
      'As-built Modeling',
      'Integration with Engineering Disciplines'
    ],
    softwareTools: ['Revit', 'Civil 3D', 'Navisworks', 'Bentley', 'MicroStation', 'OpenRoads'],
    relatedIndustries: ['Industrial Facilities', 'Infrastructure', 'Transportation', 'Power', 'Water', 'Commercial'],
    bottomMetrics: [
      { label: 'Faster', sublabel: 'Project Delivery' },
      { label: 'Reduced', sublabel: 'Rework' },
      { label: 'Better', sublabel: 'Collaboration' }
    ]
  },
  {
    id: 'project-program-support',
    title: 'Project & Program Support',
    shortDesc: 'Project controls, document management, engineering reviews, and EPC support.',
    fullDesc:
      'Comprehensive project support services including planning, document management, engineering reviews, and EPC support to ensure successful project execution.',
    image: '/image/who we are/project and program support.jpg',
    icon: FileText,
    stats: [
      { value: 'On-Time', label: 'Project Execution' },
      { value: 'Within Budget', label: 'Cost Control' },
      { value: 'Successful', label: 'Project Outcomes' }
    ],
    keyServices: [
      'Project Planning & Scheduling',
      'Document Control & Management',
      'Engineering Reviews (IDR/HAZOP)',
      'Cost Estimation Support',
      'Procurement & Vendor Coordination',
      'EPC Execution Support',
      'Risk Management',
      'Commissioning & Start-up Support'
    ],
    softwareTools: ['Primavera P6', 'MS Project', 'Aconex', 'SharePoint', 'Autodesk Construction Cloud', 'OpenText'],
    relatedIndustries: ['Oil & Gas', 'Power', 'Chemicals', 'Manufacturing', 'Mining', 'Renewables'],
    bottomMetrics: [
      { label: 'On-Time', sublabel: 'Project Execution' },
      { label: 'Within Budget', sublabel: 'Cost Control' },
      { label: 'Successful', sublabel: 'Project Outcomes' }
    ]
  },
  {
    id: 'asset-lifecycle-support',
    title: 'Asset Lifecycle Support',
    shortDesc: 'Brownfield engineering, debottlenecking, operations support, reliability, and sustainability solutions.',
    fullDesc:
      'Lifecycle engineering solutions to maximize asset performance, reliability, and sustainability from operations through decommissioning.',
    image: '/image/who we are/Asset lifecycle managment.jpg',
    icon: RotateCw,
    stats: [
      { value: 'Higher', label: 'Asset Reliability' },
      { value: 'Extended', label: 'Asset Life' },
      { value: 'More', label: 'Sustainable Operations' }
    ],
    keyServices: [
      'Brownfield Engineering',
      'Debottlenecking & Revamps',
      'Asset Integrity & Reliability',
      'Maintenance Planning',
      'Life Extension Studies',
      'Sustainability & Emissions Reduction',
      'Decommissioning Support',
      'Digital Asset Management'
    ],
    softwareTools: ['AVEVA', 'AssetWise', 'SAP', 'IBM Maximo', 'Power BI', 'Azure IoT'],
    relatedIndustries: ['Oil & Gas', 'Power', 'Chemicals', 'Manufacturing', 'Mining', 'Infrastructure'],
    bottomMetrics: [
      { label: 'Higher', sublabel: 'Asset Reliability' },
      { label: 'Extended', sublabel: 'Asset Life' },
      { label: 'More', sublabel: 'Sustainable Operations' }
    ]
  }
];

const solutionAreas: SolutionArea[] = [
  {
    id: 'plant-process-engineering',
    title: 'Plant & Process Engineering',
    description: 'Integrated plant, process, piping, pipeline, offshore, and EPC support for complex industrial assets.',
    icon: '/icons/process-enginerring.png',
    capabilities: ['FEED', 'Process Design', 'Detailed Engineering', 'EPC Support', 'Pipelines', 'Offshore']
  },
  {
    id: 'product-engineering',
    title: 'Product Engineering',
    description: 'Mechanical product development from concept models through CAD, reverse engineering, automation, and prototype support.',
    icon: '/icons/product-enginerring.png',
    capabilities: ['Mechanical Design', 'CAD', 'Reverse Engineering', 'Product Development', 'Design Automation', 'Prototyping']
  },
  {
    id: 'simulation-digital-validation',
    title: 'Simulation & Digital Validation',
    description: 'CAE-led validation to reduce physical iteration, improve reliability, and optimize product and asset performance.',
    icon: '/icons/simulation.png',
    capabilities: ['FEA', 'CFD', 'Structural Analysis', 'Fatigue', 'Thermal Analysis', 'Optimization']
  },
  {
    id: 'automation-ai-industry-4-0',
    title: 'Automation, AI & Industry 4.0',
    description: 'Operational technology and industrial intelligence programs connecting assets, controls, data, and decisions.',
    icon: '/icons/automation.png',
    capabilities: ['SCADA', 'PLC', 'Digital Twins', 'Industrial IoT', 'Predictive Maintenance', 'AI Analytics']
  },
  {
    id: 'steel-detailing-structural-engineering',
    title: 'Steel Detailing & Structural Engineering',
    description: 'High-accuracy structural steel modeling and fabrication packages for industrial structures and project execution teams.',
    icon: '/icons/structure-enginerring.png',
    capabilities: [
      'Structural Steel Detailing',
      'Tekla Modeling',
      'Shop Drawings',
      'Fabrication Drawings',
      'Connection Design',
      'Industrial Structures',
      'Pipe Racks',
      'Platforms'
    ]
  },
  {
    id: 'technical-documentation-asset-intelligence',
    title: 'Technical Documentation & Asset Intelligence',
    description: 'Structured technical content, engineering data, PLM support, and asset documentation that improve lifecycle visibility.',
    icon: '/icons/technology-document.png',
    capabilities: ['PLM', 'Manuals', 'Asset Documentation', 'Engineering Data Management', 'Intelligent Documentation']
  },
  {
    id: 'project-engineering-advisory',
    title: 'Project Engineering & Advisory',
    description: 'Integrated project management, controls, cost engineering, schedule governance, and owner’s engineering advisory.',
    icon: '/icons/process-enginerring.png',
    capabilities: ['Project Controls', 'Cost Engineering', 'Commissioning Support', "Owner's Engineer", 'Risk Management']
  },
  {
    id: 'digital-engineering-asset-lifecycle',
    title: 'Digital Engineering & Asset Lifecycle',
    description: 'Digital twins, engineering analytics, GIS mapping, predictive AI, and lifecycle solutions to maximize asset performance.',
    icon: '/icons/automation.png',
    capabilities: ['Digital Twin', 'Data Analytics', 'GIS', 'AI Enabled Engineering', 'Sustainability']
  }
];

const capabilityIconsMap: Record<string, LucideIcon> = {
  Factory: Factory,
  Cog: Cog,
  Cpu: Cpu,
  BrainCircuit: BrainCircuit,
  Building2: Building2,
  FileText: FileText,
  Briefcase: Briefcase,
  BarChart: BarChart
};

const capabilityPillars = [
  {
    icon: Users,
    title: 'Multidisciplinary Teams',
    subtitle: 'All engineering disciplines under one partner'
  },
  {
    icon: Lightbulb,
    title: 'Industry Expertise',
    subtitle: '26+ industries served globally'
  },
  {
    icon: Globe,
    title: 'Global Delivery',
    subtitle: 'USA + India delivery centers'
  },
  {
    icon: ShieldCheck,
    title: 'Quality & Compliance',
    subtitle: 'International standards (API, ASME, ISO)'
  },
  {
    icon: TrendingUp,
    title: 'Faster Project Delivery',
    subtitle: 'Optimized processes and digital workflows'
  },
  {
    icon: Leaf,
    title: 'Sustainable Solutions',
    subtitle: 'Engineering for a better tomorrow'
  }
];

interface DigitalCapabilityItem {
  title: string;
  subtitle: string;
  icon: LucideIcon;
}

const digitalCapabilities: DigitalCapabilityItem[] = [
  {
    title: 'AI-Powered Engineering',
    subtitle: 'Smarter insights, faster decisions',
    icon: BrainCircuit,
  },
  {
    title: 'Predictive Maintenance',
    subtitle: 'Maximize uptime, reduce costs',
    icon: TrendingUp,
  },
  {
    title: 'Digital Twin Solutions',
    subtitle: 'Virtual assets, real outcomes',
    icon: Box,
  },
  {
    title: 'Intelligent Asset Management',
    subtitle: 'Data-driven lifecycle decisions',
    icon: Database,
  },
  {
    title: 'Industrial Analytics',
    subtitle: 'Turn data into operational value',
    icon: Cog,
  },
  {
    title: 'Smart Manufacturing',
    subtitle: 'Connected, efficient, future-ready',
    icon: Factory,
  },
  {
    title: 'Engineering Automation',
    subtitle: 'Automate repetitive tasks, improve quality',
    icon: Bot,
  },
  {
    title: 'Data-Driven Operations',
    subtitle: 'Integrated, real-time intelligence',
    icon: Network,
  },
];

interface IndustryServedItem {
  title: string;
  topText: string;
  icon: string | LucideIcon;
  bgImage: string;
}

const industriesServed: IndustryServedItem[] = [
  {
    title: 'Oil & Gas',
    topText: 'OIL & GAS',
    icon: '/icons/oil-gas.png',
    bgImage: '/image/industry-image/oilandgas.jpg',
  },
  {
    title: 'LNG',
    topText: 'LNG',
    icon: '/icons/refinery.png',
    bgImage: '/image/industry-image/refineries.jpg',
  },
  {
    title: 'Chemicals & Petrochemicals',
    topText: 'CHEMICALS & PETROCHEMICALS',
    icon: '/icons/petrochemical.png',
    bgImage: '/image/industry-image/Petrochemicals.jpg',
  },
  {
    title: 'Power & Utilities',
    topText: 'POWER & UTILITIES',
    icon: '/icons/solar-utilities.png',
    bgImage: '/image/industry-image/Energy.jpg',
  },
  {
    title: 'Renewables',
    topText: 'RENEWABLES',
    icon: Wind,
    bgImage: '/image/utilities.png',
  },
  {
    title: 'Data Centers',
    topText: 'DATA CENTERS',
    icon: Server,
    bgImage: '/image/Data Center.jpg',
  }, 
  {
    title: 'Semiconductors',
    topText: 'SEMICONDUCTORS',
    icon: Cpu,
    bgImage: '/image/Semiconductors.jpg'
  },
  {
    title: 'Manufacturing',
    topText: 'MANUFACTURING',
    icon: '/icons/manufacturing.png',
    bgImage: '/image/industry-image/equipment-heavy.jpg',
  },
  {
    title: 'Mining & Metals',
    topText: 'MINING & METALS',
    icon: '/icons/mining.png',
    bgImage: '/image/industry-image/mining.jpg',
  },
  {
    title: 'Infrastructure',
    topText: 'INFRASTRUCTURE & SMART CITIES',
    icon: '/icons/infrastructure.png',
    bgImage: '/image/industry-image/Infrastructure.jpg',
  },
  {
    title: 'Water & Wastewater',
    topText: 'WATER & ENVIRONMENT',
    icon: '/icons/water-filter.png',
    bgImage: '/image/industry-image/water.jpg',
  },
  {
    title: 'Life Sciences & Pharma',
    topText: 'LIFE SCIENCES & PHARMA',
    icon: Microscope,
    bgImage: '/image/Lifesciences & Pharma.jpg'
  },
  {
    title: 'Automotive',
    topText: 'AUTOMOTIVE',
    icon: '/icons/automotive.png',
    bgImage: '/image/industry-image/automotive-1.jpg',
  },
  {
    title: 'Rail & Transportation',
    topText: 'RAIL & TRANSPORTATION',
    icon: '/icons/train.png',
    bgImage: '/image/industry-image/rail.jpg',
  },
  {
    title: 'Aerospace & Defense',
    topText: 'AEROSPACE & DEFENSE',
    icon: Plane,
    bgImage: '/image/aerospace.png',
  },
];

const engineeringCapabilities: CapabilityDiscipline[] = [
  {
    name: 'Process',
    icon: Settings,
    summary: 'Process design packages that define safe, efficient, and scalable industrial operations.',
    deliverables: ['PFD / P&ID support', 'Equipment sizing', 'Utility systems', 'Process data sheets']
  },
  {
    name: 'Mechanical',
    icon: Cpu,
    summary: 'Mechanical engineering for products, equipment, packages, skids, and plant assets.',
    deliverables: ['3D CAD assemblies', 'GD&T drawings', 'Design validation', 'Manufacturing release']
  },
  {
    name: 'Piping',
    icon: Grid,
    summary: 'Plant piping design and stress support for process, utility, and offshore systems.',
    deliverables: ['Piping layouts', 'Isometrics', 'Stress support', 'Pipe rack coordination']
  },
  {
    name: 'Electrical',
    icon: Radio,
    summary: 'Electrical engineering support for industrial facilities, equipment, and utility systems.',
    deliverables: ['Cable routing', 'Single line support', 'Panel documentation', 'Field coordination']
  },
  {
    name: 'Instrumentation',
    icon: BarChart,
    summary: 'Instrumentation and controls documentation that connects plant assets to reliable operations.',
    deliverables: ['Instrument indexes', 'Loop diagrams', 'I/O lists', 'Control narratives']
  },
  {
    name: 'Structural',
    icon: Grid,
    summary: 'Structural engineering and detailing for industrial steel, platforms, supports, and foundations.',
    deliverables: ['Steel models', 'Connection details', 'Shop drawings', 'Structural analysis']
  },
  {
    name: 'Pipeline',
    icon: Map,
    summary: 'Pipeline engineering for routing, crossings, supports, stress, and asset documentation.',
    deliverables: ['Route studies', 'Alignment sheets', 'Stress inputs', 'Construction support']
  },
  {
    name: 'Offshore',
    icon: Ship,
    summary: 'Offshore engineering support for topsides, marine structures, piping, and asset integrity.',
    deliverables: ['Structural checks', 'Layout support', 'Deck outfitting', 'Offshore documentation']
  },
  {
    name: 'Automation',
    icon: Code,
    summary: 'Automation architecture connecting industrial controls, dashboards, analytics, and operations.',
    deliverables: ['SCADA support', 'PLC logic support', 'Industrial IoT', 'Operations dashboards']
  },
  {
    name: 'Product Design',
    icon: Smartphone,
    summary: 'Product design and engineering support across mechanical systems, tooling, and documentation.',
    deliverables: ['Concept design', 'Reverse engineering', 'Prototype support', 'Design automation']
  }
];

const processSafetyCards = [
  {
    icon: ShieldCheck,
    title: 'Process Safety Management (PSM)',
    description: 'Implementing risk-based PSM programs to prevent incidents and ensure safer operations.'
  },
  {
    icon: Factory,
    title: 'HAZOP',
    description: 'Facilitating HAZOP studies to identify and mitigate process hazards early.'
  },
  {
    icon: FileText,
    title: 'SIL',
    description: 'Safety Instrumented Systems design and verification to achieve required SIL levels.'
  },
  {
    icon: Search,
    title: 'Risk Assessments',
    description: 'Comprehensive HRA, QRA, and LOPA to quantify and manage process risks.'
  },
  {
    icon: Award,
    title: 'QRA',
    description: 'Quantitative risk analysis for informed decision-making and regulatory compliance.'
  },
  {
    icon: Database,
    title: 'Asset Integrity',
    description: 'Integrity management programs to extend asset life and ensure reliable operations.'
  },
  {
    icon: Cog,
    title: 'EPC',
    description: 'End-to-end EPC support from engineering definition to commissioning.'
  },
  {
    icon: FileCheck,
    title: 'EPCM',
    description: 'Engineering, procurement and construction management for successful project delivery.'
  },
  {
    icon: HardHat,
    title: 'PMC',
    description: 'Project management consulting to drive cost, schedule, and quality excellence.'
  }
];

const processSafetyStats = [
  {
    icon: ShieldCheck,
    value: '100+',
    label: 'Safety Studies Completed'
  },
  {
    icon: Factory,
    value: '50+',
    label: 'EPC/EPCM Projects'
  },
  {
    icon: Users,
    value: '15+',
    label: 'Industries Served'
  },
  {
    icon: Clock,
    value: '30%',
    label: 'Faster Project Delivery'
  },
  {
    icon: TrendingUp,
    value: '20%',
    label: 'Lower Project Costs'
  },
  {
    icon: HardHat,
    value: 'Zero',
    label: 'Compromise on Safety'
  }
];

interface FeaturedProject {
  title: string;
  description: string;
  tags: string[];
  icon: LucideIcon;
  image: string;
}

const featuredProjects: FeaturedProject[] = [
  {
    title: 'Distillery Plant Engineering',
    description: 'GTS provides complete engineering support for distillery and ethanol facilities including process engineering, piping, equipment layout, utility systems, structural design, electrical, instrumentation, automation, and detailed engineering packages from FEED through commissioning support.',
    tags: [
      'Process Design',
      'PFD & P&ID',
      'Equipment Layout',
      'Utility Systems',
      'Piping Design',
      'Instrumentation',
      'Structural',
      'Electrical',
      '3D Plant Modeling'
    ],
    icon: Factory,
    image: "/image/featured projects/Distillery Plant Engineering.jpg",
  },
  {
    title: 'Storage Terminal Design',
    description: 'Engineering services for crude oil, LNG, chemicals, LPG, aviation fuel, and bulk liquid storage terminals including tank farm design, piping networks, loading facilities, fire protection systems, civil works, structural engineering, and project execution support.',
    tags: [
      'Tank Farm Design',
      'Loading Facilities',
      'Fire Protection',
      'Piping',
      'Civil',
      'Structural',
      'Instrumentation',
      'EPC Support'
    ],
    icon: Database,
    image: "/image/featured projects/Storage Terminal Design.jpg"
  },
  {
    title: 'Offshore Structural Analysis',
    description: 'Structural engineering and offshore analysis for platforms, jackets, topsides, modules, subsea structures, and marine facilities using advanced finite element analysis and international offshore design standards.',
    tags: [
      'Offshore Structures',
      'FEA',
      'Fatigue Analysis',
      'Structural Design',
      'Jacket Platforms',
      'Topsides',
      'Marine Engineering'
    ],
    icon: Ship,
    image: "/image/featured projects/Offshore Structural Analysis.jpg"
  },
  {
    title: 'Pipeline Engineering',
    description: 'Engineering support for transmission and distribution pipelines including routing studies, stress analysis, hydraulic calculations, material specifications, pipeline integrity, crossings, and construction engineering.',
    tags: [
      'Pipeline Design',
      'Stress Analysis',
      'CAESAR II',
      'Hydraulic Analysis',
      'Pipeline Integrity',
      'Crossings',
      'Construction Support'
    ],
    icon: Activity,
    image: "/image/featured projects/Pipeline Engineering .jpg"
  },
  {
    title: 'Steel Detailing & Structural Engineering',
    description: 'Preparation of structural steel models, fabrication drawings, connection design, shop drawings, erection packages, and detailed structural engineering for industrial plants, process facilities, and infrastructure projects.',
    tags: [
      'Tekla',
      'Structural Steel',
      'Shop Drawings',
      'Connection Design',
      'Fabrication Packages',
      'Industrial Structures'
    ],
    icon: Landmark,
    image: "/image/featured projects/Steel Detailing & Structural Engineering.jpg"
  },
  {
    title: 'Heavy Equipment Design',
    description: 'Mechanical engineering for heavy industrial equipment including pressure vessels, material handling systems, rotating equipment, machinery components, product development, and manufacturing support.',
    tags: [
      'Mechanical Design',
      'CAD Modeling',
      'Pressure Vessels',
      'Product Development',
      'Heavy Machinery',
      'Manufacturing Support'
    ],
    icon: Cog,
    image: "/image/featured projects/Heavy Equipment Design.jpg"
  },
  {
    title: 'Simulation & FEA Engineering',
    description: 'Advanced engineering simulation including structural, thermal, CFD, fatigue, vibration, optimization, and digital validation to improve product performance, safety, and operational reliability.',
    tags: [
      'ANSYS',
      'Abaqus',
      'CFD',
      'Thermal Analysis',
      'Structural FEA',
      'Optimization',
      'Digital Validation'
    ],
    icon: LineChart,
    image: "/image/featured projects/Simulation & FEA Engineering .jpg"
  },
  {
    title: 'Industrial Automation & Digital Engineering',
    description: 'Industrial automation, PLC/SCADA systems, Industry 4.0 integration, Digital Twin solutions, predictive maintenance, industrial AI, and operational analytics to improve plant performance and decision-making.',
    tags: [
      'PLC',
      'SCADA',
      'Digital Twin',
      'AI Analytics',
      'Industry 4.0',
      'Predictive Maintenance'
    ],
    icon: Bot,
    image: "/image/featured projects/Industrial Automation & Digital Engineering.jpg"
  }
];

interface TechnologyPillar {
  number: string;
  title: string;
  description: string;
  capabilities: string[];
  software: string[];
}

const technologyPillars: TechnologyPillar[] = [
  {
    number: '01',
    title: 'Plant Engineering',
    description: 'Engineering design platforms for process plants, refineries, LNG, power, chemicals, and industrial facilities.',
    capabilities: [
      'FEED & Detailed Engineering',
      'Piping & Stress Analysis',
      'P&IDs & Process Design',
      'Instrumentation & Electrical',
      '3D Modelling & Equipment Layout',
      'Plant Integration'
    ],
    software: [
      'PDMS',
      'SP3D',
      'E3D',
      'AutoCAD Plant 3D',
      'CAESAR II',
      'AVEVA',
      'Hexagon SmartPlant'
    ]
  },
  {
    number: '02',
    title: 'Mechanical & Product Engineering',
    description: 'Mechanical design, product development, reverse engineering, and manufacturing support.',
    capabilities: [
      'Mechanical Design & Analysis',
      'Pressure Vessels & Machinery',
      'Product Development',
      'CAD Modelling',
      'Reverse Engineering',
      'Manufacturing Support'
    ],
    software: [
      'SolidWorks',
      'CATIA',
      'NX',
      'Inventor',
      'Creo',
      'AutoCAD Mechanical'
    ]
  },
  {
    number: '03',
    title: 'Structural & Steel Engineering',
    description: 'Industrial structural analysis, steel detailing, fabrication drawings, and offshore engineering.',
    capabilities: [
      'Structural Analysis & Design',
      'Offshore Structures',
      'Steel Detailing & Shop Drawings',
      'Fabrication Packages',
      'Connection Design',
      'Pipe Supports'
    ],
    software: [
      'STAAD Pro',
      'Tekla Structures',
      'Revit Structure',
      'SAP2000',
      'ETABS',
      'Advance Steel'
    ]
  },
  {
    number: '04',
    title: 'Simulation & Engineering Analysis',
    description: 'Virtual engineering, finite element analysis, CFD, thermal analysis, and digital validation.',
    capabilities: [
      'Structural & Thermal Analysis',
      'Optimization',
      'CFD & Flow Simulation',
      'Digital Validation',
      'Fatigue & Vibration Analysis',
      'Multi-physics Analysis'
    ],
    software: [
      'ANSYS',
      'Abaqus',
      'HyperMesh',
      'LS-DYNA',
      'COMSOL',
      'Fluent',
      'OpenFOAM'
    ]
  },
  {
    number: '05',
    title: 'BIM, Infrastructure & Construction',
    description: 'Building information modeling, construction coordination, and digital project delivery.',
    capabilities: [
      '3D BIM Modelling',
      'Civil & Infrastructure Design',
      'Construction Coordination',
      'Digital Project Delivery',
      'Clash Detection & Visualization',
      'As-Built Documentation'
    ],
    software: [
      'Revit',
      'Civil 3D',
      'Navisworks',
      'Bentley',
      'MicroStation',
      'OpenRoads'
    ]
  },
  {
    number: '06',
    title: 'Automation, Controls & Industry 4.0',
    description: 'Industrial automation, control systems, SCADA, IIoT, and smart manufacturing technologies.',
    capabilities: [
      'PLC & SCADA System Design',
      'Digital Twin Integration',
      'Control System Integration',
      'Plant Automation',
      'IIoT & Industry 4.0',
      'Operational Analytics'
    ],
    software: [
      'Siemens TIA Portal',
      'Rockwell Studio 5000',
      'Wonderware',
      'Ignition',
      'AVEVA PI',
      'OSI PI',
      'WinCC'
    ]
  },
  {
    number: '07',
    title: 'AI, Data & Digital Engineering',
    description: 'Artificial intelligence, engineering analytics, digital twins, predictive maintenance, and intelligent automation.',
    capabilities: [
      'AI-Assisted Engineering',
      'Engineering Data Analytics',
      'Digital Twins & Asset Analytics',
      'Process Optimization',
      'Predictive Maintenance',
      'Custom AI Solutions'
    ],
    software: [
      'Python',
      'MATLAB',
      'Power BI',
      'Azure AI',
      'AWS',
      'TensorFlow',
      'PyTorch',
      'Azure Digital Twins'
    ]
  },
  {
    number: '08',
    title: 'Project & Document Management',
    description: 'Collaborative engineering execution, document control, digital workflows, and project lifecycle management.',
    capabilities: [
      'Project Planning & Scheduling',
      'PLM & Data Management',
      'Document Control & Workflow',
      'Vendor & Subcontractor Mgmt',
      'Engineering Collaboration',
      'Knowledge Management'
    ],
    software: [
      'Autodesk Construction Cloud',
      'SharePoint',
      'Primavera P6',
      'Microsoft Project',
      'Aconex',
      'OpenText',
      'Teamcenter',
      'Windchill'
    ]
  }
];

const aiWorkflowSteps = [
  {
    icon: FileText,
    title: 'Client Requirements',
    description: 'Project goals, specifications and data inputs'
  },
  {
    icon: Cog,
    title: 'Engineering Design',
    description: 'Multidisciplinary design & collaboration'
  },
  {
    icon: Box,
    title: '3D Modelling',
    description: 'Integrated plant, product and structural models'
  },
  {
    icon: Activity,
    title: 'Simulation & Validation',
    description: 'FEA, CFD, and performance analysis'
  },
  {
    icon: BrainCircuit,
    title: 'AI Review & Optimization',
    description: 'AI-assisted quality check and design optimization'
  },
  {
    icon: CheckCircle2,
    title: 'Quality Assurance',
    description: 'Standards, compliance and multi-level reviews'
  },
  {
    icon: FileCheck,
    title: 'Digital Deliverables',
    description: 'Models, drawings, data and project handover'
  }
];

const technologyMetrics = [
  {
    icon: Layers,
    value: '100+',
    label: 'Engineering Software & Tools'
  },
  {
    icon: Briefcase,
    value: '10+',
    label: 'Technology Domains'
  },
  {
    icon: BrainCircuit,
    value: 'AI-Enabled',
    label: 'Engineering Workflows'
  },
  {
    icon: Globe,
    value: 'Global',
    label: 'Collaboration Platforms'
  },
  {
    icon: Database,
    value: 'Scalable',
    label: 'Digital Infrastructure'
  },
  {
    icon: Award,
    value: 'Future-Ready',
    label: 'For Smarter Engineering'
  }
];

const technologyPartners = [
  'Autodesk',
  'AVEVA',
  'Hexagon',
  'Bentley',
  'Siemens',
  'Microsoft',
  'AWS',
  'Dassault Systèmes',
  'ANSYS',
  'PTC'
];

interface WhyGtsFeature {
  title: string;
  description: string;
  icon: LucideIcon;
}

interface WhyGtsStat {
  value: string;
  label: string;
  icon: LucideIcon;
}

const whyGtsFeatures: WhyGtsFeature[] = [
  {
    title: 'USA + Global Engineering Delivery',
    description: 'Integrated project leadership from the United States with scalable engineering execution through our global delivery centers.',
    icon: Globe
  },
  {
    title: 'Multidisciplinary Engineering',
    description: 'Mechanical, Process, Piping, Civil, Structural, Electrical, Instrumentation, Automation, Digital Engineering, and Project Controls under one partner.',
    icon: Users
  },
  {
    title: 'AI & Digital Engineering',
    description: 'AI-assisted engineering workflows, automation, simulation, digital twins, and engineering analytics improve productivity and project quality.',
    icon: BrainCircuit
  },
  {
    title: 'Faster Project Delivery',
    description: 'Optimized engineering processes and global collaboration reduce project schedules while maintaining engineering quality.',
    icon: Zap
  },
  {
    title: 'Scalable Engineering Resources',
    description: 'Engineering teams expand quickly to support FEED, detailed engineering, EPC, brownfield, and mega-project requirements.',
    icon: TrendingUp
  },
  {
    title: 'Industry Expertise',
    description: 'Experience supporting Oil & Gas, LNG, Data Centers, Power, Infrastructure, Manufacturing, Mining, Pharmaceuticals, and other industrial sectors.',
    icon: Factory
  },
  {
    title: 'Quality & Compliance',
    description: 'Structured QA/QC procedures, engineering reviews, document control, and compliance with international engineering standards.',
    icon: ShieldCheck
  },
  {
    title: 'Cost Optimization',
    description: 'Global engineering delivery and digital workflows reduce total engineering cost while maintaining technical excellence.',
    icon: Database
  },
  {
    title: 'Long-Term Engineering Partner',
    description: 'Supporting clients throughout the complete project lifecycle—from concept and FEED through commissioning, operations, and asset optimization.',
    icon: Handshake
  }
];

const whyGtsStats: WhyGtsStat[] = [
  {
    value: '2012',
    label: 'Established',
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
    icon: FileText
  },
  {
    value: '15+',
    label: 'Industries Supported',
    icon: Layers
  },
  {
    value: 'USA + India',
    label: 'Delivery Centers',
    icon: MapPin
  },
  {
    value: '24/7',
    label: 'Engineering Collaboration',
    icon: Clock
  },
  {
    value: '10+',
    label: 'Engineering Disciplines',
    icon: Cog
  }
];

const excellencePillars = [
  {
    title: 'Quality',
    description: 'Structured quality systems to ensure engineering excellence.',
    icon: ShieldCheck,
    items: [
      'Engineering QA/QC',
      'Independent Design Reviews',
      'Document Control',
      'Revision Management',
      'Continuous Improvement'
    ]
  },
  {
    title: 'Engineering Standards',
    description: 'Compliance with global engineering standards.',
    icon: FileCheck,
    items: [
      'API, ASME, ASTM, AISC, AWS',
      'IEC, IEEE, NFPA, ACI, ANSI',
      'ISO-based Quality Systems',
      'Client Specifications',
      'EPC & Industry Standards'
    ]
  },
  {
    title: 'Digital Delivery',
    description: 'AI-enabled workflows for smarter, faster project execution.',
    icon: Laptop,
    items: [
      'AI Engineering',
      'BIM & 3D Models',
      'Digital Twin',
      'Engineering Analytics',
      'Cloud Collaboration'
    ]
  },
  {
    title: 'Global Execution',
    description: 'A global delivery model for scalable project success.',
    icon: Globe,
    items: [
      'USA Project Leadership',
      'India Engineering Center',
      'Scalable Resources',
      'Fast Turnaround',
      '24-Hour Delivery Model'
    ]
  }
];

const excellenceStats = [
  {
    icon: Users,
    value: '100+',
    label: 'Engineering Professionals'
  },
  {
    icon: FileText,
    value: '100+',
    label: 'Projects Delivered'
  },
  {
    icon: Cog,
    value: '15+',
    label: 'Industries Supported'
  },
  {
    icon: Globe,
    value: 'USA + India',
    label: 'Delivery Centers'
  },
  {
    icon: Clock,
    value: '24/7',
    label: 'Engineering Collaboration'
  },
  {
    icon: Star,
    value: 'ISO-Aligned',
    label: 'Quality Systems'
  }
];

const certificationLogos = [
  {
    name: 'API',
    title: 'American Petroleum Institute (API)',
    src: '/image/client and certificate/image1.png',
    width: 1428,
    height: 813,
    className: 'h-6 sm:h-7 w-auto object-contain'
  },
  {
    name: 'ASME',
    title: 'American Society of Mechanical Engineers (ASME)',
    src: '/image/client and certificate/image3.png',
    width: 1430,
    height: 712,
    className: 'h-6 sm:h-7 w-auto object-contain'
  },
  {
    name: 'ASTM',
    title: 'ASTM International',
    src: '/image/client and certificate/image2.png',
    width: 1426,
    height: 955,
    className: 'h-6 sm:h-7 w-auto object-contain'
  },
  {
    name: 'AISC',
    title: 'American Institute of Steel Construction (AISC)',
    src: '/image/client and certificate/image5.png',
    width: 1426,
    height: 1103,
    className: 'h-7 sm:h-8 w-auto object-contain'
  },
  {
    name: 'AWS',
    title: 'American Welding Society (AWS)',
    src: '/image/client and certificate/image4.png',
    width: 1262,
    height: 1246,
    className: 'h-6 sm:h-7 w-auto object-contain'
  },
  {
    name: 'IEC',
    title: 'International Electrotechnical Commission (IEC)',
    src: '/image/client and certificate/image7.png',
    width: 1254,
    height: 1254,
    className: 'h-6 sm:h-7 w-auto rounded-[3px] object-contain'
  },
  {
    name: 'IEEE',
    title: 'Institute of Electrical and Electronics Engineers (IEEE)',
    src: '/image/client and certificate/image6.png',
    width: 1431,
    height: 475,
    className: 'h-5 sm:h-6 w-auto object-contain'
  },
  {
    name: 'NFPA',
    title: 'National Fire Protection Association (NFPA)',
    src: '/image/client and certificate/image9.png',
    width: 1322,
    height: 1190,
    className: 'h-6 sm:h-7 w-auto object-contain'
  },
  {
    name: 'ISO',
    title: 'International Organization for Standardization (ISO)',
    src: '/image/client and certificate/image12.png',
    width: 1426,
    height: 955,
    className: 'h-6 sm:h-7 w-auto object-contain'
  },
  {
    name: 'ACI',
    title: 'American Concrete Institute (ACI)',
    src: '/image/client and certificate/image10.png',
    width: 1430,
    height: 712,
    className: 'h-5 sm:h-6 w-auto object-contain'
  },
  {
    name: 'ANSI',
    title: 'American National Standards Institute (ANSI)',
    src: '/image/client and certificate/image11.png',
    width: 1430,
    height: 866,
    className: 'h-5 sm:h-6 w-auto object-contain'
  },
  {
    name: 'Client Specifications',
    title: 'Client-Specific Engineering Specifications',
    src: '/image/client and certificate/image13.png',
    width: 1254,
    height: 1254,
    className: 'h-6 sm:h-7 w-auto object-contain',
    showLabel: true
  }
];

const clientSignals = [
  'Industrial Owners',
  'Energy Operators',
  'Manufacturing OEMs',
  'Infrastructure Teams',
  'Technology Partners',
  'EPC Contractors'
];

const qualitySignals = ['Quality Systems', 'Engineering Reviews', 'Secure Delivery', 'Technology Partnerships'];

interface CountUpProps {
  end: number;
  duration?: number;
  suffix?: string;
  separator?: boolean;
}

function AnimatedCounter({ end, duration = 2000, suffix = '', separator = true }: CountUpProps) {
  const [count, setCount] = useState(0);
  const elementRef = useRef<HTMLSpanElement | null>(null);
  const [hasStarted, setHasStarted] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setHasStarted(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!hasStarted) return;
    let startTimestamp: number | null = null;
    const step = (timestamp: number) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      setCount(Math.floor(progress * end));
      if (progress < 1) {
        window.requestAnimationFrame(step);
      }
    };
    window.requestAnimationFrame(step);
  }, [hasStarted, end, duration]);

  const formattedCount = separator ? count.toLocaleString() : count.toString();
  return <span ref={elementRef}>{formattedCount}{suffix}</span>;
}

export default function HomePage() {
  const [activeSlide, setActiveSlide] = useState(0);
  const [hoveredIndustryIndex, setHoveredIndustryIndex] = useState<number | null>(null);
  const [selectedSolution, setSelectedSolution] = useState<EngineeringSolutionItem | null>(null);
  const videoRef = useRef<HTMLVideoElement | null>(null);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setSelectedSolution(null);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  useEffect(() => {
    if (selectedSolution) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [selectedSolution]);

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
      <section className="relative isolate flex min-h-screen flex-col overflow-hidden bg-sky-100 text-slate-900">
        {/* Background Video */}
        <video
          ref={videoRef}
          key={`hero-video-${activeSlide}`}
          autoPlay
          muted
          playsInline
          preload="metadata"
          onEnded={handleVideoEnd}
          className="absolute inset-0 h-full w-full object-cover"
        >
          <source src={heroVisuals[activeSlide].video} type="video/mp4" />
        </video>

        {/* Overlays: full veil on mobile, left wash on desktop, white fade at the bottom */}
        <div className="pointer-events-none absolute inset-0 z-[1] bg-white/60 lg:hidden" />
        <div className="pointer-events-none absolute inset-y-0 left-0 z-[1] hidden w-[52%] bg-gradient-to-r from-white/90 via-white/50 to-transparent lg:block" />
        <div className="pointer-events-none absolute inset-x-0 bottom-0 z-[1] h-64 bg-gradient-to-t from-white via-white/85 to-transparent" />
        <FloatingParticles />

        {/* Main Content Area */}
        <div className="relative z-10 mx-auto flex w-full max-w-[1720px] flex-1 flex-col gap-6 px-4 pb-5 pt-24 sm:px-6 sm:pt-28 lg:gap-7 lg:px-8">
          <div className="grid flex-1 grid-cols-1 gap-6 lg:grid-cols-12 lg:gap-8">
            {/* Left column: headline + Card 5 */}
            <div className="flex flex-col justify-between gap-6 lg:col-span-5">
              <AnimatedSection as="div" className="space-y-4">
                <p className="text-xs font-extrabold uppercase tracking-[0.22em] text-[#071A4A] sm:text-sm">
                  {heroVisuals[activeSlide].category}
                </p>

                <h1 className="font-display text-[clamp(2.125rem,3.4vw,4rem)] font-black leading-[1] tracking-[-0.03em]">
                  <span className="block text-[#071A4A]">{heroVisuals[activeSlide].title1}</span>
                  <span className="block text-[#0A3DF0] lg:whitespace-nowrap">{heroVisuals[activeSlide].title2}</span>
                </h1>

                <p className="text-[clamp(1.125rem,1.7vw,1.75rem)] font-extrabold leading-tight tracking-tight text-[#071A4A]">
                  {heroVisuals[activeSlide].subtitle}
                </p>

                <p className="max-w-[31rem] text-[clamp(0.9375rem,1.15vw,1.125rem)] font-medium leading-snug text-[#0A3DC2]">
                  {heroVisuals[activeSlide].description}
                </p>

                <div className="flex flex-wrap items-center gap-3 pt-2">
                  <a
                    href="/#solutions"
                    className="inline-flex items-center justify-center gap-2 rounded-md bg-[#0A3DF0] px-6 py-3 text-base font-semibold text-white shadow-lg shadow-blue-600/25 transition-colors hover:bg-[#0832C8]"
                  >
                    Explore Solutions <ArrowRight className="h-4 w-4" />
                  </a>
                  <a
                    href="/contact"
                    className="inline-flex items-center justify-center gap-2 rounded-md border-2 border-[#0A3DF0] bg-white px-6 py-[10px] text-base font-semibold text-[#0A3DF0] transition-colors hover:bg-blue-50"
                  >
                    Schedule Consultation <ArrowRight className="h-4 w-4" />
                  </a>
                </div>
              </AnimatedSection>

              {/* Card 5 (Digital Twin) — frame has no fixed height, so it follows the image's own aspect ratio */}
              <AnimatedSection as="div" delay={0.15}>
                <div className="w-full max-w-[540px] overflow-hidden rounded-xl shadow-[0_0_24px_rgba(37,99,235,0.45)] transition-transform duration-300 hover:-translate-y-1 lg:max-w-[clamp(260px,44vh,540px)] lg:rounded-2xl">
                  <img
                    src={heroVisuals[activeSlide].card5}
                    alt={`${heroVisuals[activeSlide].label} Card 5`}
                    className="block h-auto w-full"
                  />
                </div>
              </AnimatedSection>
            </div>

            {/* Right column: Cards 1–3 + Card 4 */}
            <div className="flex flex-col justify-between gap-5 lg:col-span-7">
              {/* Cards 1, 2, 3 — swipeable row on phones, 3 columns from sm */}
              <AnimatedSection as="div" delay={0.1}>
                <div className="-mx-4 flex snap-x snap-mandatory items-start gap-3 overflow-x-auto px-4 py-3 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden sm:mx-0 sm:grid sm:grid-cols-3 sm:gap-4 sm:overflow-visible sm:p-0">
                  {[
                    heroVisuals[activeSlide].card1,
                    heroVisuals[activeSlide].card2,
                    heroVisuals[activeSlide].card3
                  ].map((src, index) => (
                    <div
                      key={src}
                      className="w-[78%] shrink-0 snap-center overflow-hidden rounded-xl shadow-[0_0_24px_rgba(37,99,235,0.45)] transition-transform duration-300 hover:-translate-y-1 sm:w-auto lg:rounded-2xl"
                    >
                      <img
                        src={src}
                        alt={`${heroVisuals[activeSlide].label} Card ${index + 1}`}
                        className="block h-auto w-full"
                      />
                    </div>
                  ))}
                </div>
              </AnimatedSection>

              {/* Card 4 (Engineering View Panel) */}
              <AnimatedSection as="div" delay={0.2} className="flex lg:justify-end">
                <div className="w-full max-w-[580px] overflow-hidden rounded-xl shadow-[0_0_24px_rgba(37,99,235,0.45)] transition-transform duration-300 hover:-translate-y-1 lg:max-w-[clamp(300px,52vh,580px)] lg:rounded-2xl">
                  <img
                    src={heroVisuals[activeSlide].card4}
                    alt={`${heroVisuals[activeSlide].label} Card 4`}
                    className="block h-auto w-full"
                  />
                </div>
              </AnimatedSection>
            </div>
          </div>

          {/* Bottom band — row 1: stats + industry switcher, row 2: sub-sectors + slogan */}
          <div className="space-y-4">
            <div className="flex flex-col gap-4 xl:flex-row xl:items-center xl:justify-between xl:gap-8">
              {/* Stats */}
              <ul className="grid grid-cols-2 gap-x-6 gap-y-4 sm:flex sm:flex-wrap sm:items-center sm:gap-x-8 xl:gap-x-12">
                {[
                  { icon: Globe, value: '15+', label: 'Industries Served' },
                  { icon: Users, value: '100+', label: 'Projects Delivered' },
                  { icon: Award, value: '15+', label: 'Years of Engineering Excellence' },
                  { icon: Leaf, value: 'A Cleaner', label: 'Brighter Tomorrow' }
                ].map(({ icon: Icon, value, label }) => (
                  <li key={label} className="flex items-center gap-3">
                    <Icon className="h-9 w-9 shrink-0 text-[#0A3DF0]" strokeWidth={1.75} />
                    <div className="leading-tight">
                      <div className="text-xl font-extrabold text-[#0A3DF0]">{value}</div>
                      {/* <div className="max-w-[9rem] text-xs font-semibold text-[#0A2A8A] sm:text-[13px]">{label}</div> */}
                    </div>
                  </li>
                ))}
              </ul>

              {/* Industry Switcher Tabs — shown only when there is more than one industry */}
              {heroVisuals.length > 1 && (
                <div className="flex flex-wrap items-center gap-2 xl:justify-end">
                  {heroVisuals.map((visual, index) => (
                    <button
                      key={visual.id}
                      type="button"
                      onClick={() => setActiveSlide(index)}
                      className={`rounded-full px-3.5 py-1.5 text-xs font-bold tracking-wide transition-colors ${
                        activeSlide === index
                          ? 'bg-[#0A3DF0] text-white shadow-md shadow-blue-600/30'
                          : 'border border-slate-200 bg-white/85 text-slate-700 hover:border-[#0A3DF0] hover:text-[#0A3DF0]'
                      }`}
                    > * 
                    </button>
                  ))}
                </div>
              )}
            </div>

            <div className="flex flex-wrap items-center justify-between gap-x-6 gap-y-3 border-t border-[#0A3DF0]/15 pt-4">
              {/* Sub-sectors */}
              {heroVisuals[activeSlide].subSectors && (
                <ul className="flex flex-wrap items-center gap-x-5 gap-y-2 2xl:gap-x-7">
                  {heroVisuals[activeSlide].subSectors.map((sub) => (
                    <li key={sub} className="flex items-center gap-2 text-xs font-semibold text-[#0A2A8A] 2xl:text-[13px]">
                      <span className="h-1.5 w-1.5 rounded-full bg-[#0A3DF0]" />
                      {sub}
                    </li>
                  ))}
                </ul>
              )}

              {/* Slogan */}
              <p className="ml-auto flex max-w-full flex-wrap items-center gap-x-2 gap-y-1 text-[11px] font-bold tracking-[0.1em] text-[#0A3DF0] sm:flex-nowrap sm:whitespace-nowrap 2xl:gap-x-3 2xl:text-xs 2xl:tracking-[0.18em]">
                {['PEOPLE', 'TECHNOLOGY', 'INDUSTRY', 'A CLEANER', 'BRIGHTER', 'TOMORROW'].map((word, index) => (
                  <span key={word} className="flex items-center gap-x-2 2xl:gap-x-3">
                    {index > 0 && <span className="opacity-50">|</span>}
                    {word} 
                  </span>
                ))}
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden border-y border-cyan-200/10 bg-slate-950 py-20 text-white sm:py-28">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_0%,rgba(20,184,166,0.26),transparent_30%),radial-gradient(circle_at_84%_20%,rgba(37,99,235,0.24),transparent_30%),linear-gradient(135deg,rgba(2,6,23,0.96),rgba(15,118,110,0.78),rgba(2,6,23,0.96))]" />

        {/* Map Background with Minimum Visibility */}
        <div
          className="absolute inset-0 bg-[url('/image/map.png')] bg-cover bg-center bg-no-repeat opacity-[0.06] pointer-events-none mix-blend-screen"
        />

        <div className="relative z-10 mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-8">
          <AnimatedSection as="div" className="mx-auto mb-16 max-w-3xl text-center">
            <p className="text-xs font-bold uppercase tracking-[0.28em] text-cyan-200">
              Trusted Engineering Delivery
            </p>

            <h2 className="mt-4 font-display text-3xl font-extrabold tracking-tight text-white sm:text-3xl">
              Why Global Industrial Companies Trust GTS
            </h2>
            <p className="mt-2 text-xs leading-relaxed text-slate-200 opacity-90 sm:text-sm drop-shadow-[0_1px_2px_rgba(0,0,0,0.8)]">
              From concept through commissioning, GTS combines multidisciplinary engineering, AI-enabled digital delivery, global execution, and rigorous quality systems to successfully deliver complex industrial projects across energy, manufacturing, infrastructure, and technology sectors.
            </p>

          </AnimatedSection>

          <div className="mt-14">
            <div className="grid grid-cols-1 gap-0 overflow-hidden border border-white/15 bg-slate-900/40 md:grid-cols-2 lg:grid-cols-4">

              {/* =========================================================
        CARD 1 — ESTABLISHED 2012
        Large feature card
    ========================================================= */}
              <div className="group relative min-h-[360px] overflow-hidden border-b border-white/15 md:col-span-2 lg:col-span-2 lg:row-span-2 lg:border-r">
                <Image
                  src={trustStats[0].image}
                  alt={trustStats[0].title}
                  fill
                  sizes="(min-width: 1024px) 50vw, 100vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/55 to-slate-950/10" />

                {/* Technical grid */}
                <div className="pointer-events-none absolute inset-0 opacity-20 [background-image:linear-gradient(rgba(255,255,255,0.15)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.15)_1px,transparent_1px)] [background-size:32px_32px]" />

                {/* Content */}
                <div className="absolute inset-x-0 bottom-0 z-10 p-6 sm:p-8">
                  <div className="mb-3 flex items-center gap-3">
                    <span className="h-px w-8 bg-cyan-400" />
                    <span className="text-[10px] font-mono font-bold uppercase tracking-[0.28em] text-cyan-300">
                      Engineering Excellence
                    </span>
                  </div>

                  <h3 className="max-w-xl font-display text-2xl font-extrabold tracking-tight text-white sm:text-3xl">
                    {trustStats[0].title}
                  </h3>

                  <p className="mt-3 max-w-xl text-sm leading-6 text-slate-200">
                    {trustStats[0].description}
                  </p>
                </div>
              </div>


              {/* =========================================================
        CARD 2 — GLOBAL DELIVERY
        Large right card
    ========================================================= */}
              <div className="group relative min-h-[260px] overflow-hidden border-b border-white/15 lg:col-span-2 lg:border-r">
                <Image
                  src={trustStats[2].image}
                  alt={trustStats[2].title}
                  fill
                  sizes="(min-width: 1024px) 50vw, 100vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/60 to-slate-950/15" />

                <div className="pointer-events-none absolute inset-0 opacity-15 [background-image:linear-gradient(rgba(255,255,255,0.18)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.18)_1px,transparent_1px)] [background-size:28px_28px]" />

                <div className="absolute inset-x-0 bottom-0 z-10 p-6">
                  <div className="mb-2 text-[10px] font-mono font-bold uppercase tracking-[0.28em] text-cyan-300">
                    Global Delivery
                  </div>

                  <h3 className="font-display text-xl font-extrabold text-white sm:text-2xl">
                    {trustStats[2].title}
                  </h3>

                  <p className="mt-2 max-w-2xl text-xs leading-5 text-slate-300">
                    {trustStats[2].description}
                  </p>
                </div>
              </div>


              {/* =========================================================
        CARD 3 — AI
        Small card
    ========================================================= */}
              <div className="group relative min-h-[170px] overflow-hidden border-b border-white/15 lg:col-span-1 lg:border-r">
                <Image
                  src={trustStats[4].image}
                  alt={trustStats[4].title}
                  fill
                  sizes="(min-width: 1024px) 25vw, 100vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />

                <div className="absolute inset-0 bg-slate-950/75 transition-colors duration-300 group-hover:bg-slate-950/55" />

                <div className="absolute inset-0 z-10 flex flex-col justify-end p-5">
                  <div className="mb-2 text-[10px] font-mono font-bold uppercase tracking-[0.25em] text-cyan-300">
                    AI
                  </div>

                  <h3 className="text-base font-extrabold text-white">
                    AI-Enabled Digital Engineering
                  </h3>
                  <p className="mt-2 max-w-2xl text-xs leading-5 text-slate-300">
                    AI-assisted engineering workflows, digital twins, engineering analytics, and simulation technologies improve quality, accelerate schedules, and reduce project risk.
                  </p>
                </div>
              </div>


              {/* =========================================================
        CARD 4 — TEAMS
        Small card
    ========================================================= */}
              <div className="group relative min-h-[170px] overflow-hidden border-b border-white/15 lg:col-span-1">
                <Image
                  src={trustStats[3].image}
                  alt={trustStats[3].title}
                  fill
                  sizes="(min-width: 1024px) 25vw, 100vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />

                <div className="absolute inset-0 bg-slate-950/75 transition-colors duration-300 group-hover:bg-slate-950/55" />

                <div className="absolute inset-0 z-10 flex flex-col justify-end p-5">
                  <div className="mb-2 text-[10px] font-mono font-bold uppercase tracking-[0.25em] text-cyan-300">
                    Teams
                  </div>

                  <h3 className="text-base font-extrabold text-white">
                    Multidisciplinary Engineering Teams
                  </h3>
                  <p className="mt-2 max-w-2xl text-xs leading-5 text-slate-300">
                    Integrated engineering teams collaborate across all major disciplines to deliver coordinated, constructible, and digitally enabled engineering solutions.
                  </p>
                </div>
              </div>


              {/* =========================================================
        CARD 5 — USA + INDIA
        Small card
    ========================================================= */}
              <div className="group relative min-h-[170px] overflow-hidden border-b border-white/15 md:border-r lg:col-span-1">
                <Image
                  src={trustStats[5].image}
                  alt={trustStats[5].title}
                  fill
                  sizes="(min-width: 1024px) 25vw, 100vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />

                <div className="absolute inset-0 bg-slate-950/75 transition-colors duration-300 group-hover:bg-slate-950/55" />

                <div className="absolute inset-0 z-10 flex flex-col justify-end p-5">
                  <div className="mb-2 text-[10px] font-mono font-bold uppercase tracking-[0.25em] text-cyan-300">
                    Operations
                  </div>

                  <h3 className="text-base font-extrabold text-white">
                    USA + India
                  </h3>
                  <p className="mt-2 max-w-2xl text-xs leading-5 text-slate-300">
                    Combining USA project leadership with global engineering execution to provide responsive, scalable, and cost-effective engineering support.
                  </p>
                </div>
              </div>


              {/* =========================================================
        CARD 6 — PROJECTS DELIVERED
        Bottom wide feature card
    ========================================================= */}
              <div className="group relative min-h-[220px] overflow-hidden md:col-span-2 lg:col-span-3">
                <Image
                  src={trustStats[1].image}
                  alt={trustStats[1].title}
                  fill
                  sizes="(min-width: 1024px) 75vw, 100vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />

                <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/70 to-slate-950/25" />

                <div className="absolute inset-0 z-10 flex items-center p-6 sm:p-8">
                  <div>
                    <div className="mb-3 flex items-center gap-3">
                      <span className="h-px w-8 bg-cyan-400" />

                      <span className="text-[10px] font-mono font-bold uppercase tracking-[0.28em] text-cyan-300">
                        Delivery Track Record
                      </span>
                    </div>

                    <h3 className="font-display text-2xl font-extrabold text-white sm:text-3xl">
                      {trustStats[1].title}
                    </h3>

                    <p className="mt-3 max-w-2xl text-sm leading-6 text-slate-300">
                      {trustStats[1].description}
                    </p>
                  </div>
                </div>
              </div>


            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          DYNAMIC INDUSTRY PERFORMANCE METRICS
      ========================================================= */}
      <IndustryPerformanceMetrics />

      {/* =========================================================
          ENGINEERING SOLUTIONS & INTRO SECTION (Matching Mockup)
      ========================================================= */}
      <section className="relative overflow-hidden border-y border-slate-200/80 bg-slate-50 py-16 sm:py-20 lg:py-24 text-slate-900">
        {/* Background Image: public/image/who we are/who we are bg.jpg */}
        <div className="absolute inset-0 pointer-events-none select-none z-0">
          <Image
            src="/image/who we are/who we are bg.jpg"
            alt="Who We Are Background"
            fill
            sizes="100vw"
            className="object-cover object-center"
            priority
          />
          {/* Subtle directional washes: keep left text, logo and frosted cards clear while refinery towers and sunset stay vivid */}
          <div className="absolute inset-0 bg-gradient-to-r from-white/75 via-white/25 to-transparent sm:from-white/60 sm:via-white/15 sm:to-transparent" />
          <div className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-white/60 to-transparent" />
          <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-white/60 to-transparent" />
        </div>

        <div className="relative z-10 mx-auto max-w-[1520px] px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-8 items-start">

            {/* Left Column: Logo, Intro & Trust Signals (lg:col-span-4) */}
            <div className="relative flex flex-col justify-between pr-0 lg:pr-6 lg:col-span-4">
              <div>
                {/* GTS Engineering Logo */}
                <div className="flex items-center">
                  <Image
                    src="/icons/logo transparent.png"
                    alt="GTS Engineering"
                    width={180}
                    height={70}
                    className="h-14 sm:h-16 w-auto object-contain"
                    priority
                  />
                </div>

                {/* Eyebrow */}
                <div className="mt-5 inline-flex items-center gap-2.5">
                  <span className="font-mono text-xs font-bold uppercase tracking-[0.24em] text-[#0070f3]">
                    WHO WE ARE
                  </span>
                  <span className="h-[2px] w-8 rounded-full bg-[#0070f3]" />
                </div>

                {/* Heading */}
                <h2 className="mt-4 font-display text-3xl sm:text-4xl lg:text-[42px] font-black leading-[1.12] tracking-tight text-slate-900">
                  Engineering <br />
                  Expertise. <br />
                  Digital Innovation. <br />
                  <span className="text-[#0070f3]">Global Impact.</span>
                </h2>

                {/* Description */}
                <p className="mt-4 text-xs sm:text-sm leading-relaxed text-slate-700 font-medium max-w-md">
                  GTS Engineering delivers multidisciplinary engineering, digital and lifecycle services across the industrial value chain — from concept to commissioning, operations, and beyond.
                </p>

                {/* 6 Trust Signals list - Frosted Glass Pill Cards */}
                <div className="mt-6 flex flex-col gap-2.5 max-w-sm">
                  {whoWeAreTrustStats.map((item) => {
                    const ItemIcon = item.icon;
                    return (
                      <div
                        key={item.label}
                        className="flex items-center gap-3.5 rounded-2xl border border-white/70 bg-white/80 p-3 shadow-xs backdrop-blur-md transition-all duration-300 hover:bg-white/95 hover:shadow-md"
                      >
                        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-blue-50/90 text-[#0070f3] border border-blue-100/60 shadow-xs">
                          <ItemIcon className="h-5 w-5" />
                        </div>
                        <div className="min-w-0">
                          <div className="text-[14px] sm:text-[15px] font-extrabold text-slate-900 leading-none drop-shadow-xs">
                            {item.value}
                          </div>
                          <div className="text-[11px] sm:text-xs text-slate-600 font-medium mt-1 leading-tight">
                            {item.label}
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>

                {/* Taglines: PEOPLE / TECHNOLOGY / SOLUTIONS + GLOBAL IMPACT */}
                <div className="mt-8 flex flex-col gap-2.5">
                  <div className="flex flex-col space-y-0.5 font-mono text-[10px] font-bold tracking-[0.24em] text-slate-500 uppercase">
                    <span>PEOPLE</span>
                    <span>TECHNOLOGY</span>
                    <span>SOLUTIONS</span>
                  </div>
                  <div className="flex flex-wrap items-center gap-2.5 font-mono text-xs font-bold tracking-[0.16em]">
                    <span className="text-[#0070f3] font-black uppercase whitespace-nowrap">GLOBAL IMPACT</span>
                    <span className="h-[2px] w-6 bg-[#0070f3]/70 rounded-full shrink-0" />
                    <span className="text-slate-800 uppercase whitespace-nowrap text-[11px] sm:text-xs">
                      ENGINEERING A CLEANER BRIGHTER TOMORROW
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: 3x3 Engineering Solutions Grid (lg:col-span-8) */}
            <div className="lg:col-span-8 rounded-[28px] sm:rounded-3xl border border-slate-200/90 bg-white p-5 sm:p-7 lg:p-8 shadow-2xl backdrop-blur-sm">
              {/* Header Bar */}
              <div className="flex flex-wrap items-center justify-between gap-3 pb-5 border-b border-slate-100">
                <div className="inline-flex items-center gap-2.5">
                  <span className="font-mono text-xs sm:text-[13px] font-bold uppercase tracking-[0.22em] text-[#0070f3]">
                    OUR ENGINEERING SOLUTIONS
                  </span>
                  <span className="h-[2px] w-8 rounded-full bg-[#0070f3]" />
                </div>
                <div className="hidden sm:block text-[11px] font-semibold tracking-wider text-slate-400 uppercase">
                  END-TO-END ENGINEERING &nbsp;|&nbsp; DIGITAL &nbsp;|&nbsp; OPERATIONS SUPPORT
                </div>
              </div>

              {/* 3x3 Grid of 9 Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-6">
                {engineeringSolutions.map((sol) => {
                  const SolIcon = sol.icon;
                  const isSelected = selectedSolution?.id === sol.id;
                  return (
                    <button
                      key={sol.id}
                      type="button"
                      onClick={() => setSelectedSolution(sol)}
                      className={`group relative flex flex-col justify-between rounded-2xl border p-2.5 sm:p-3 text-left transition-all duration-300 hover:-translate-y-1 hover:shadow-lg cursor-pointer ${
                        isSelected
                          ? 'border-[#0070f3] ring-4 ring-blue-500/10 shadow-blue-100 bg-white'
                          : 'border-slate-200/70 bg-white hover:border-blue-300'
                      }`}
                    >
                      {/* Card Thumbnail Image with Floating Icon Badge */}
                      <div className="relative h-28 sm:h-32 w-full rounded-xl overflow-hidden mb-3 bg-slate-100">
                        <Image
                          src={sol.image}
                          alt={sol.title}
                          fill
                          sizes="(min-width: 1024px) 25vw, 50vw"
                          className="object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/30 via-transparent to-transparent" />
                        {/* Floating Icon Badge on bottom-left */}
                        <div className="absolute bottom-2 left-2 flex h-8 w-8 sm:h-8.5 sm:w-8.5 items-center justify-center rounded-xl bg-white shadow-md border border-slate-100 text-[#0070f3] transition-transform duration-300 group-hover:scale-110">
                          <SolIcon className="h-4 w-4" />
                        </div>
                      </div>

                      {/* Title and Short Description */}
                      <div className="flex-1 flex flex-col justify-between">
                        <div className="flex items-center justify-between gap-1.5">
                          <h3 className="font-bold text-slate-900 text-sm sm:text-[14.5px] leading-snug group-hover:text-[#0070f3] transition-colors">
                            {sol.title}
                          </h3>
                          <span className="text-[#0070f3] shrink-0 transition-transform duration-200 group-hover:translate-x-1">
                            <ArrowRight className="h-3.5 w-3.5" />
                          </span>
                        </div>
                        <p className="mt-1.5 text-[11px] sm:text-xs text-slate-500 leading-relaxed line-clamp-3">
                          {sol.shortDesc}
                        </p>
                      </div>
                    </button>
                  );
                })}
              </div>

              {/* Bottom 4-Pillar Highlights Bar */}
              <div className="mt-6 pt-5 border-t border-slate-100 grid grid-cols-2 lg:grid-cols-4 gap-4">
                {engineeringPillars.map((hl) => {
                  const HlIcon = hl.icon;
                  return (
                    <div key={hl.title} className="flex items-center gap-2.5">
                      <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-[#0070f3] border border-blue-100/60">
                        <HlIcon className="h-4.5 w-4.5" />
                      </div>
                      <div className="min-w-0">
                        <span className="block text-xs sm:text-[13px] font-bold text-slate-900 leading-tight">
                          {hl.title}
                        </span>
                        <span className="block text-[10px] sm:text-[11px] text-slate-500 font-medium leading-tight mt-0.5">
                          {hl.subtitle}
                        </span>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>

        {/* Slide-over Detail Drawer / Side Card */}
        {selectedSolution && (
          <div className="fixed inset-0 z-50 overflow-hidden">
            {/* Backdrop */}
            <div
              className="absolute inset-0 bg-slate-950/40 backdrop-blur-sm transition-opacity animate-in fade-in duration-200"
              onClick={() => setSelectedSolution(null)}
            />

            <div className="fixed inset-y-0 right-0 flex max-w-full pl-6 sm:pl-10">
              <div className="relative w-screen max-w-lg sm:max-w-xl md:max-w-2xl bg-white shadow-2xl overflow-y-auto border-l border-slate-200 animate-in slide-in-from-right duration-300 flex flex-col">
                {/* Sticky Header */}
                <div className="sticky top-0 z-20 bg-white/95 backdrop-blur-md px-6 py-4 border-b border-slate-100 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-blue-600 border border-blue-100">
                      {(() => {
                        const Icon = selectedSolution.icon;
                        return <Icon className="h-6 w-6" />;
                      })()}
                    </div>
                    <div>
                      <div className="text-[10px] font-mono font-bold uppercase tracking-[0.2em] text-blue-600">
                        OUR SOLUTIONS
                      </div>
                      <h3 className="text-xl font-extrabold text-slate-900 leading-tight">
                        {selectedSolution.title}
                      </h3>
                    </div>
                  </div>

                  <button
                    type="button"
                    onClick={() => setSelectedSolution(null)}
                    className="rounded-full p-2 text-slate-400 hover:bg-slate-100 hover:text-slate-700 transition-colors"
                    aria-label="Close panel"
                  >
                    <X className="h-5 w-5" />
                  </button>
                </div>

                {/* Body Content */}
                <div className="p-6 space-y-6 flex-1">
                  {/* Full Description */}
                  <p className="text-sm text-slate-600 leading-relaxed font-normal">
                    {selectedSolution.fullDesc}
                  </p>

                  {/* Hero Image with Stats Overlay */}
                  <div className="relative h-48 sm:h-56 w-full rounded-2xl overflow-hidden bg-slate-100 shadow-sm border border-slate-100">
                    <Image
                      src={selectedSolution.image}
                      alt={selectedSolution.title}
                      fill
                      sizes="(min-width: 768px) 600px, 100vw"
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-950/30 to-transparent" />

                    {/* Stats Overlay on Image */}
                    <div className="absolute inset-x-4 bottom-3 grid grid-cols-3 gap-2 text-center">
                      {selectedSolution.stats.map((st) => (
                        <div key={st.label} className="rounded-xl bg-white/10 backdrop-blur-md p-2 border border-white/10">
                          <div className="text-base sm:text-lg font-extrabold text-cyan-200 leading-none">
                            {st.value}
                          </div>
                          <div className="text-[10px] sm:text-xs text-slate-200 font-medium mt-1 leading-tight">
                            {st.label}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Key Services */}
                  <div>
                    <div className="text-xs font-mono font-bold uppercase tracking-[0.2em] text-slate-400">
                      KEY SERVICES
                    </div>
                    <div className="mt-3 grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                      {selectedSolution.keyServices.map((service) => (
                        <div key={service} className="flex items-start gap-2.5 text-xs sm:text-[13px] text-slate-700 font-medium leading-snug">
                          <Check className="h-4 w-4 text-blue-600 shrink-0 mt-0.5" />
                          <span>{service}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Software & Tools */}
                  <div>
                    <div className="text-xs font-mono font-bold uppercase tracking-[0.2em] text-slate-400">
                      SOFTWARE & TOOLS
                    </div>
                    <div className="mt-2.5 flex flex-wrap gap-2">
                      {selectedSolution.softwareTools.map((tool) => (
                        <span
                          key={tool}
                          className="rounded-xl border border-blue-100 bg-blue-50/70 px-3 py-1.5 text-xs font-semibold text-blue-700 shadow-sm"
                        >
                          {tool}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Related Industries */}
                  <div>
                    <div className="text-xs font-mono font-bold uppercase tracking-[0.2em] text-slate-400">
                      RELATED INDUSTRIES
                    </div>
                    <div className="mt-2.5 grid grid-cols-2 sm:grid-cols-3 gap-2">
                      {selectedSolution.relatedIndustries.map((ind) => (
                        <div
                          key={ind}
                          className="flex items-center gap-2 rounded-xl border border-slate-200/80 bg-slate-50/70 p-2.5 text-xs font-semibold text-slate-800 shadow-sm"
                        >
                          <Factory className="h-3.5 w-3.5 text-blue-600 shrink-0" />
                          <span className="truncate">{ind}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Bottom Impact Metrics */}
                  <div className="grid grid-cols-3 gap-3 border-t border-slate-200/80 pt-4">
                    {selectedSolution.bottomMetrics.map((met) => (
                      <div key={met.sublabel} className="text-center rounded-xl bg-slate-50 p-2.5 border border-slate-100">
                        <div className="text-sm sm:text-base font-extrabold text-blue-600 leading-tight">
                          {met.label}
                        </div>
                        <div className="text-[10px] sm:text-[11px] text-slate-500 font-medium mt-0.5 leading-tight">
                          {met.sublabel}
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* CTA Button */}
                  <div className="pt-2">
                    <GradientButton href="/contact" className="w-full justify-center text-sm py-3.5 shadow-md">
                      Get in Touch About {selectedSolution.title} →
                    </GradientButton>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </section>

      {/* =========================================================
          OUR ENGINEERING CAPABILITIES (Matching Reference Mockup)
      ========================================================= */}
      <section id="solutions" className="relative scroll-mt-32 overflow-hidden border-y border-slate-200/80 bg-white py-20 sm:py-28 text-slate-900">
        {/* Background Image with 20% visibility */}
        <div className="absolute inset-0 pointer-events-none select-none z-0">
          <Image
            src="/image/background.jpg"
            alt="Engineering Capabilities Background"
            fill
            sizes="100vw"
            className="object-cover object-center opacity-20"
            priority={false}
          />
        </div>

        <AnimatedSection as="div" className="relative z-10 mx-auto max-w-[1520px] px-4 sm:px-6 lg:px-8">

          {/* Section Header with Left & Right Taglines */}
          <div className="grid grid-cols-1 items-start gap-6 lg:grid-cols-12">

            {/* Left Tagline Accent (Visible on lg+) */}
            <div className="hidden lg:col-span-2 lg:flex items-start gap-3 pt-2">
              <div className="w-[3px] h-20 rounded-full bg-blue-600 shrink-0 shadow-[0_0_8px_rgba(37,99,235,0.4)]" />
              <div className="flex flex-col space-y-1 font-mono text-[10px] font-bold tracking-[0.22em] text-slate-400 uppercase">
                <span>PEOPLE</span>
                <span>TECHNOLOGY</span>
                <span>ENGINEERING</span>
                <span className="text-slate-500">A BETTER TOMORROW</span>
              </div>
            </div>

            {/* Center Heading & Subtitle */}
            <div className="lg:col-span-8 text-center">
              <div className="inline-flex items-center gap-2 rounded-full border border-blue-200/80 bg-blue-50/80 px-4 py-1.5 text-xs font-mono font-bold uppercase tracking-[0.22em] text-blue-600 shadow-2xs mb-4">
                <span>OUR ENGINEERING CAPABILITIES</span>
              </div>

              <h2 className="font-display text-3xl sm:text-4xl lg:text-[42px] font-extrabold tracking-tight text-slate-900 leading-[1.15]">
                Integrated Engineering Solutions Across the Complete Industrial Asset Lifecycle
              </h2>

              <p className="mt-4 max-w-3xl mx-auto text-xs sm:text-sm lg:text-base leading-relaxed text-slate-600">
                From concept and FEED through detailed engineering, digital transformation, automation, commissioning, and lifecycle optimization—GTS delivers multidisciplinary engineering solutions for energy, infrastructure, manufacturing, and technology industries.
              </p>
            </div>

            {/* Right Tagline Accent */}
            <div className="hidden lg:col-span-2 lg:flex items-start justify-end gap-3 pt-2 text-right">
              <div className="flex flex-col space-y-1 font-mono text-[10px] font-bold tracking-[0.22em] text-slate-400 uppercase">
                <span>ENGINEERING</span>
                <span>A SMARTER,</span>
                <span>SAFER & MORE</span>
                <span>SUSTAINABLE</span>
                <span className="text-slate-500">TOMORROW</span>
              </div>
              <div className="w-[3px] h-24 rounded-full bg-blue-600 shrink-0 shadow-[0_0_8px_rgba(37,99,235,0.4)]" />
            </div>
          </div>

          {/* 8-Card Responsive Grid (2 rows of 4 on lg) */}
          <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {solutionCapabilities.map((cap) => {
              const CapIcon = capabilityIconsMap[cap.iconName] || Factory;
              return (
                <div
                  key={cap.id}
                  className="group relative flex flex-col justify-between rounded-2xl border border-slate-200/90 bg-white p-4 sm:p-5 shadow-[0_2px_12px_rgba(15,23,42,0.03)] transition-all duration-300 hover:-translate-y-1.5 hover:border-blue-300 hover:shadow-xl hover:shadow-blue-500/10"
                >
                  <div>
                    {/* Thumbnail Image with Tagline Badge & Overlapping Icon */}
                    <div className="relative h-44 w-full rounded-xl overflow-hidden mb-4 bg-slate-100">
                      <Image
                        src={cap.image}
                        alt={cap.title}
                        fill
                        sizes="(min-width: 1024px) 25vw, 50vw"
                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-slate-950/20 to-transparent" />

                      {/* Top-Left Tagline Badge */}
                      <div className="absolute top-2.5 left-2.5 max-w-[85%] rounded-md  px-2 py-1 text-[9px] font-mono font-bold uppercase tracking-wider text-white border border-white/10 leading-tight">
                        {cap.tagline}
                      </div>

                      {/* Bottom-Left Floating Icon Badge */}
                      <div className="absolute -bottom-2 left-3 flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-blue-600 to-cyan-500 text-white shadow-lg border-2 border-white transition-transform duration-300 group-hover:scale-110">
                        <CapIcon className="h-5 w-5" />
                      </div>
                    </div>

                    {/* Card Title & Description */}
                    <div className="pt-2">
                      <h3 className="font-display text-base sm:text-[17px] font-bold text-slate-900 leading-snug group-hover:text-blue-600 transition-colors">
                        {cap.title}
                      </h3>
                      <p className="mt-2 text-xs text-slate-600 leading-relaxed line-clamp-3 min-h-[48px]">
                        {cap.cardDescription}
                      </p>
                    </div>

                    {/* Capability Tags / Pills */}
                    <div className="mt-4 flex flex-wrap gap-1.5">
                      {cap.cardPills.map((pill) => (
                        <span
                          key={pill}
                          className="rounded-full bg-slate-50 border border-slate-200/80 px-2.5 py-0.5 text-[11px] font-medium text-slate-600"
                        >
                          {pill}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Explore Capabilities Action Link */}
                  <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between">
                    <Link
                      href={`/solutions/${cap.slug}`}
                      className="group/link inline-flex items-center gap-1.5 text-xs font-bold font-mono text-blue-600 hover:text-blue-700 transition-colors"
                    >
                      <span>Explore Capabilities</span>
                      <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover/link:translate-x-1" />
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Bottom 6-Pillar Feature Strip */}
          <div className="mt-16 pt-8 border-t border-slate-200/80 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6 items-start">
            {capabilityPillars.map((pillar) => {
              const PillarIcon = pillar.icon;
              return (
                <div key={pillar.title} className="flex items-start gap-3">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-blue-600 border border-blue-100/70 shadow-2xs">
                    <PillarIcon className="h-5 w-5" />
                  </div>
                  <div className="min-w-0">
                    <h4 className="text-xs sm:text-sm font-bold text-slate-900 leading-tight">
                      {pillar.title}
                    </h4>
                    <p className="mt-1 text-[11px] text-slate-500 font-medium leading-snug">
                      {pillar.subtitle}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

        </AnimatedSection>
      </section>

      <section id="ai-digital" className="relative scroll-mt-32 overflow-hidden bg-white pt-14 pb-12 sm:pt-16 sm:pb-14 lg:pt-20 lg:pb-16 border-b border-slate-200/80">
        <AnimatedSection as="div" className="relative z-10 mx-auto max-w-[1520px] px-4 sm:px-6 lg:px-8">
          
          {/* Main Upper Showcase Area: Left content + Right full-height image blending to white */}
          <div className="relative min-h-[580px] lg:min-h-[640px] xl:min-h-[680px] flex flex-col justify-between">
            
            {/* Desktop Full-Height Background Image (No Frame, Bleeds to white on left with low low opacity) */}
            <div
              className="hidden lg:block absolute top-0 right-0 bottom-0 w-[55%] xl:w-[50%] pointer-events-none select-none z-0"
              style={{
                maskImage: 'linear-gradient(to right, transparent 0%, rgba(0,0,0,0.03) 10%, rgba(0,0,0,0.15) 22%, rgba(0,0,0,0.5) 38%, rgba(0,0,0,0.9) 55%, rgba(0,0,0,1) 70%, rgba(0,0,0,1) 100%)',
                WebkitMaskImage: 'linear-gradient(to right, transparent 0%, rgba(0,0,0,0.03) 10%, rgba(0,0,0,0.15) 22%, rgba(0,0,0,0.5) 38%, rgba(0,0,0,0.9) 55%, rgba(0,0,0,1) 70%, rgba(0,0,0,1) 100%)',
              }}
            >
              <div className="relative w-full h-full">
                <Image
                  src="/image/ai digital and enginerring/ai and digital intelligence.png"
                  alt="Engineering Intelligence for Industry 4.0 - Digital Twin, AI Analytics, Smart Manufacturing"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover object-right-bottom"
                  priority
                />
              </div>
            </div>

            {/* Top Right Header Text Overlay (from Mockup) */}
            <div className="hidden lg:block absolute top-2 right-2 xl:top-4 xl:right-4 text-right pointer-events-none z-20">
              <div className="font-mono text-xs sm:text-sm font-extrabold uppercase tracking-[0.2em] text-blue-600 drop-shadow-xs">
                REAL DATA.
              </div>
              <div className="font-mono text-xs sm:text-sm font-extrabold uppercase tracking-[0.2em] text-blue-600 drop-shadow-xs">
                REAL INSIGHTS.
              </div>
              <div className="font-mono text-xs sm:text-sm font-extrabold uppercase tracking-[0.2em] text-blue-600 drop-shadow-xs">
                REAL IMPACT.
              </div>
            </div>

            {/* Left Content Column */}
            <div className="relative z-10 max-w-full lg:max-w-[56%] xl:max-w-[54%]">
              {/* Eyebrow with accent underline */}
              <div>
                <span className="text-xs sm:text-sm font-mono font-bold uppercase tracking-[0.2em] text-blue-600">
                  AI & DIGITAL ENGINEERING
                </span>
                <div className="mt-2 h-1 w-12 rounded-full bg-blue-600" />
              </div>

              {/* Title */}
              <h2 className="mt-5 font-display text-3xl sm:text-4xl lg:text-[42px] font-extrabold tracking-tight text-slate-900 leading-[1.15]">
                Engineering Intelligence <br />
                for <span className="text-blue-600">Industry 4.0</span>
              </h2>

              {/* Description */}
              <p className="mt-4 text-sm leading-relaxed text-slate-600 sm:text-base max-w-2xl">
                We combine AI analytics, digital twins, automation, and operational data to help industrial companies improve reliability, optimize performance, reduce risk, and accelerate their journey to a smarter, more sustainable future.
              </p>

              {/* 8 Capability Cards Grid */}
              <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-3.5 sm:gap-4">
                {digitalCapabilities.map((item) => {
                  const ItemIcon = item.icon;
                  return (
                    <div
                      key={item.title}
                      className="group flex items-center gap-3.5 rounded-2xl border border-slate-200/90 bg-white/95 backdrop-blur-xs p-3.5 sm:p-4 shadow-2xs hover:border-blue-400 hover:shadow-md transition-all duration-200"
                    >
                      <div className="flex h-11 w-11 sm:h-12 sm:w-12 shrink-0 items-center justify-center rounded-xl bg-blue-600 text-white shadow-xs group-hover:scale-105 transition-transform duration-200">
                        <ItemIcon className="h-5 w-5 sm:h-6 sm:w-6 stroke-[2]" />
                      </div>
                      <div className="min-w-0">
                        <div className="font-display text-sm sm:text-[15px] font-bold text-slate-900 group-hover:text-blue-600 transition-colors leading-snug">
                          {item.title}
                        </div>
                        <div className="text-xs text-slate-500 font-normal mt-0.5 leading-snug">
                          {item.subtitle}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Action Buttons */}
              <div className="mt-8 flex flex-wrap items-center gap-4">
                <Link
                  href="/solutions"
                  className="inline-flex items-center gap-2.5 rounded-xl bg-blue-600 hover:bg-blue-700 px-7 py-3.5 text-sm font-bold text-white shadow-md shadow-blue-600/25 transition-all hover:shadow-lg hover:shadow-blue-600/30 active:scale-[0.98]"
                >
                  <span>Explore Capabilities</span>
                  <ArrowRight className="h-4 w-4" />
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2.5 rounded-xl border border-blue-600 bg-white hover:bg-blue-50/60 px-6 py-3.5 text-sm font-bold text-blue-600 transition-all shadow-2xs active:scale-[0.98]"
                >
                  <MessageSquare className="h-4 w-4 text-blue-600" />
                  <span>Talk to Our Experts</span>
                  <ArrowRight className="h-4 w-4 text-blue-600" />
                </Link>
              </div>
            </div>

            {/* Mobile / Tablet Dedicated Image Display (Below buttons on < lg screens) */}
            <div className="lg:hidden mt-10 relative w-full aspect-square sm:aspect-[4/3] rounded-2xl overflow-hidden shadow-lg border border-slate-200/90">
              <Image
                src="/image/ai digital and enginerring/ai and digital intelligence.png"
                alt="Engineering Intelligence for Industry 4.0 - Digital Twin, AI Analytics, Smart Manufacturing"
                fill
                sizes="100vw"
                className="object-cover object-center"
              />
              <div className="absolute top-4 right-4 text-right pointer-events-none z-10">
                <div className="font-mono text-xs font-extrabold uppercase tracking-[0.2em] text-blue-600 drop-shadow-xs">
                  REAL DATA.
                </div>
                <div className="font-mono text-xs font-extrabold uppercase tracking-[0.2em] text-blue-600 drop-shadow-xs">
                  REAL INSIGHTS.
                </div>
                <div className="font-mono text-xs font-extrabold uppercase tracking-[0.2em] text-blue-600 drop-shadow-xs">
                  REAL IMPACT.
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Stats / Metrics Strip (5 Columns) */}
          <div className="mt-12 sm:mt-16 pt-8 sm:pt-10 border-t border-slate-200/90">
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 sm:gap-8 items-center">
              {/* Metric 1 */}
              <div className="flex items-center gap-3.5">
                <Cog className="h-9 w-9 sm:h-10 sm:w-10 text-blue-600 shrink-0 stroke-[1.75]" />
                <div>
                  <div className="font-display text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight leading-none">
                    30%
                  </div>
                  <div className="text-xs sm:text-sm text-slate-600 font-medium mt-1 leading-snug">
                    Higher Equipment Availability
                  </div>
                </div>
              </div>

              {/* Metric 2 */}
              <div className="flex items-center gap-3.5">
                <TrendingUp className="h-9 w-9 sm:h-10 sm:w-10 text-blue-600 shrink-0 stroke-[1.75]" />
                <div>
                  <div className="font-display text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight leading-none">
                    20%
                  </div>
                  <div className="text-xs sm:text-sm text-slate-600 font-medium mt-1 leading-snug">
                    Lower Operating Costs
                  </div>
                </div>
              </div>

              {/* Metric 3 */}
              <div className="flex items-center gap-3.5">
                <Leaf className="h-9 w-9 sm:h-10 sm:w-10 text-blue-600 shrink-0 stroke-[1.75]" />
                <div>
                  <div className="font-display text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight leading-none">
                    25%
                  </div>
                  <div className="text-xs sm:text-sm text-slate-600 font-medium mt-1 leading-snug">
                    Reduction in Emissions
                  </div>
                </div>
              </div>

              {/* Metric 4 */}
              <div className="flex items-center gap-3.5">
                <Clock className="h-9 w-9 sm:h-10 sm:w-10 text-blue-600 shrink-0 stroke-[1.75]" />
                <div>
                  <div className="font-display text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight leading-none">
                    2x
                  </div>
                  <div className="text-xs sm:text-sm text-slate-600 font-medium mt-1 leading-snug">
                    Faster Decision Making
                  </div>
                </div>
              </div>

              {/* Right Statement */}
              <div className="col-span-2 md:col-span-1 border-l-2 border-blue-600 pl-4 sm:pl-5 flex flex-col justify-center">
                <div className="text-[10px] sm:text-[11px] font-mono font-bold uppercase tracking-[0.22em] text-slate-400 leading-tight">
                  BUILDING
                </div>
                <div className="text-xs sm:text-sm font-display font-extrabold uppercase tracking-wider text-slate-900 leading-tight mt-0.5">
                  A MORE EFFICIENT,
                </div>
                <div className="text-xs sm:text-sm font-display font-extrabold uppercase tracking-wider text-blue-600 leading-tight mt-0.5">
                  SUSTAINABLE TOMORROW
                </div>
              </div>
            </div>
          </div>
        </AnimatedSection>
      </section>
      
      <section
        id="industries-served"
        onMouseLeave={() => setHoveredIndustryIndex(null)}
        className="scroll-mt-32 relative overflow-hidden py-16 sm:py-24 lg:py-28 min-h-[680px] sm:min-h-[720px] flex items-center bg-slate-900"
      >
        {/* Dynamic 15-Strip Vertical Accordion Background */}
        <div className="absolute inset-0 w-full h-full flex overflow-hidden z-0">
          {industriesServed.map((industry, index) => {
            const isHovered = hoveredIndustryIndex === index;
            const isAnyHovered = hoveredIndustryIndex !== null;

            return (
              <div
                key={industry.title}
                onMouseEnter={() => setHoveredIndustryIndex(index)}
                onMouseLeave={() => setHoveredIndustryIndex(null)}
                style={{
                  flex: isAnyHovered ? (isHovered ? '1 0 100%' : '0 0 0%') : '1 1 0%',
                  opacity: isAnyHovered ? (isHovered ? 1 : 0) : 1,
                  minWidth: isAnyHovered ? (isHovered ? '100%' : '0%') : '0%',
                }}
                className={`relative h-full transition-all duration-700 ease-in-out overflow-hidden cursor-pointer ${isAnyHovered && !isHovered ? 'border-r-0' : 'border-r border-white/20 last:border-r-0'
                  }`}
              >
                {/* Background Image */}
                <div
                  className="absolute inset-0 w-full h-full bg-cover bg-center transition-transform duration-1000 ease-out"
                  style={{
                    backgroundImage: `url('${industry.bgImage}')`,
                    transform: isHovered ? 'scale(1.04)' : 'scale(1)',
                  }}
                />

                {/* Top Text with subtle white background directly behind text */}
                <div className="absolute top-2 sm:top-2.5 inset-x-1 flex flex-col items-center pointer-events-none z-10 text-center">
                  <span className="inline-block rounded bg-white/80 px-1.5 py-0.5 text-[8px] sm:text-[9px] lg:text-[10px] font-extrabold text-slate-900 uppercase tracking-tight leading-tight line-clamp-2 shadow-xs">
                    {industry.topText}
                  </span>
                </div>

              </div>
            );
          })}
        </div>

        {/* Soft luminous ambient white glow strictly behind the central text to keep all images 100% clear and crisp */}
        <div className="absolute left-1/2 top-1/4 -translate-x-1/2 -translate-y-1/2 w-[750px] max-w-[90vw] h-[280px] bg-white/80 rounded-full blur-3xl pointer-events-none z-[1]" />

        {/* Foreground Content */}
        <AnimatedSection as="div" className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 w-full">
          <div className="text-center max-w-4xl mx-auto">
            <span className="inline-block rounded-full bg-white/90 px-4 py-1 text-xs sm:text-sm font-extrabold uppercase tracking-widest text-[#0070f3] shadow-xs">
              INDUSTRIES WE SERVE
            </span>
            <h2 className="mt-3 text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-950 tracking-tight leading-tight [text-shadow:_0_0_20px_rgba(255,255,255,1),_0_0_10px_rgba(255,255,255,1)]">
              Industrial sectors supported by GTS’s multidisciplinary expertise
            </h2>
            <p className="mt-3 sm:mt-4 text-xs sm:text-sm md:text-base text-slate-800 max-w-3xl mx-auto font-semibold leading-relaxed [text-shadow:_0_0_16px_rgba(255,255,255,1),_0_0_8px_rgba(255,255,255,1)]">
              GTS supports asset owners, OEMs, EPC teams, and technology programs across energy, infrastructure, manufacturing, transportation, and new industries.
            </p>
          </div>

          {/* 15 Cards Grid: 5 columns x 3 rows matching mockup */}
          <div className="mt-8 sm:mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3 lg:gap-3.5">
            {industriesServed.map((industry, index) => {
              const isHovered = hoveredIndustryIndex === index;

              return (
                <MagneticCard
                  key={industry.title}
                  intensity={4}
                  className={`rounded-2xl border px-3.5 py-3 transition-all duration-300 cursor-pointer ${isHovered
                      ? 'border-[#0090e7] bg-white shadow-xl scale-[1.03] ring-2 ring-[#0090e7]/25'
                      : 'border-white/80 bg-white/95 backdrop-blur-md shadow-sm hover:border-sky-300 hover:bg-white hover:shadow-md'
                    }`}
                  onMouseEnter={() => setHoveredIndustryIndex(index)}
                  onMouseLeave={() => setHoveredIndustryIndex(null)}
                >
                  <div className="flex items-center gap-3">
                    <div className="flex h-8 w-8 sm:h-9 sm:w-9 shrink-0 items-center justify-center">
                      {typeof industry.icon === 'string' ? (
                        <div
                          style={{
                            WebkitMaskImage: `url('${industry.icon}')`,
                            maskImage: `url('${industry.icon}')`,
                            WebkitMaskRepeat: 'no-repeat',
                            maskRepeat: 'no-repeat',
                            WebkitMaskPosition: 'center',
                            maskPosition: 'center',
                            WebkitMaskSize: 'contain',
                            maskSize: 'contain',
                          }}
                          className="h-6 w-6 bg-[#0090e7] shrink-0 transition-transform duration-300 group-hover:scale-110"
                        />
                      ) : (
                        <industry.icon
                          className="h-6 w-6 text-[#0090e7] shrink-0 transition-transform duration-300 group-hover:scale-110"
                          strokeWidth={2.2}
                        />
                      )}
                    </div>
                    <div className="min-w-0 flex-1">
                      <span className="text-xs sm:text-sm font-extrabold text-slate-800 group-hover:text-slate-950 leading-snug line-clamp-2 block">
                        {industry.title}
                      </span>
                    </div>
                  </div>
                </MagneticCard>
              );
            })}
          </div>
        </AnimatedSection>
      </section>
      <CapabilitiesInteractiveMap />

      <section className="relative overflow-hidden py-16 sm:py-20 lg:py-24 border-b border-slate-200/60">
        {/* Background Industrial Facility Image from public/image/process and safty/image2.jpg */}
        <div className="pointer-events-none absolute inset-0 select-none overflow-hidden">
          <Image
            src="/image/process and safty/image2.jpg"
            alt="Process Safety & EPC Industrial Facility"
            fill
            priority
            className="object-cover object-center"
            quality={95}
          />
          {/* Subtle directional washes: softer on left so headline is super clear while sunset & plant towers stay vivid */}
          <div className="absolute inset-0 bg-gradient-to-r from-white/90 via-white/40 to-transparent sm:from-white/75 sm:via-white/20 sm:to-transparent" />
          <div className="absolute inset-x-0 top-0 h-20 bg-gradient-to-b from-[#f8fafc]/80 to-transparent" />
          <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-white/80 to-transparent" />
        </div>

        <AnimatedSection as="div" className="relative z-10 mx-auto max-w-[1520px] px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-8 items-start">
            {/* Left Column: Heading & Description */}
            <div className="lg:col-span-4 flex flex-col justify-start pr-0 lg:pr-4">
              <div className="inline-flex items-center gap-2.5">
                <span className="text-xs font-mono font-bold uppercase tracking-[0.22em] text-[#0070f3]">
                  PROCESS SAFETY & EPC
                </span>
                <span className="h-0.5 w-8 bg-[#0070f3]/70 rounded-full" />
              </div>

              <h2 className="mt-3 text-3xl font-black tracking-tight text-slate-900 sm:text-4xl lg:text-[44px] font-display leading-[1.12]">
                Process Safety & <br className="hidden sm:inline" />
                <span className="text-[#0070f3]">Project Execution</span>
              </h2>

              <p className="mt-4 text-sm sm:text-[15px] leading-relaxed text-slate-800 font-medium max-w-md">
                Combines process safety, asset integrity, and project quality control to help industrial organizations move from engineering definition to execution with stronger risk visibility and safer, more reliable operations.
              </p>
            </div>

            {/* Right Column: 3x3 Grid of 9 Cards + Bottom Bar */}
            <div className="lg:col-span-8 flex flex-col gap-6">
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {processSafetyCards.map((card) => {
                  const Icon = card.icon;
                  return (
                    <div
                      key={card.title}
                      className="group relative flex flex-col justify-between rounded-2xl border border-slate-200/90 bg-white/95 p-4 sm:p-5 shadow-xs shadow-slate-200/30 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-blue-300 hover:shadow-lg hover:shadow-blue-500/10 min-h-[140px]"
                    >
                      <div>
                        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-blue-50/90 text-[#0070f3] group-hover:bg-[#0070f3] group-hover:text-white transition-colors duration-200">
                          <Icon className="h-5 w-5" />
                        </div>
                        <h3 className="mt-3 text-sm font-bold text-slate-900 group-hover:text-[#0070f3] transition-colors duration-200 leading-snug">
                          {card.title}
                        </h3>
                        <p className="mt-1 text-xs text-slate-500 leading-relaxed">
                          {card.description}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Bottom Trust & Performance Metrics Bar directly under the 9 cards */}
              <div className="rounded-2xl border border-slate-200/90 bg-white/95 p-4 sm:p-5 shadow-sm backdrop-blur-sm">
                <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6 divide-y sm:divide-y-0 sm:divide-x divide-slate-100">
                  {processSafetyStats.map((stat, idx) => {
                    const Icon = stat.icon;
                    return (
                      <div
                        key={stat.label}
                        className={`flex items-center gap-2.5 ${idx > 0 ? 'sm:pl-3 xl:pl-4' : ''}`}
                      >
                        <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-blue-50 text-[#0070f3]">
                          <Icon className="h-4 w-4 sm:h-4.5 sm:w-4.5" />
                        </div>
                        <div>
                          <div className="text-sm sm:text-base font-black text-slate-900 font-display leading-tight">
                            {stat.value}
                          </div>
                          <div className="text-[10px] font-medium text-slate-500 leading-tight mt-0.5">
                            {stat.label}
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </AnimatedSection>
      </section>

      <section id="featured-projects" className="scroll-mt-32 bg-slate-50/40 py-20 sm:py-28 relative overflow-hidden">
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-blue-50/50 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-cyan-50/40 rounded-full blur-3xl pointer-events-none" />

        <AnimatedSection as="div" className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <div className="flex items-center justify-center gap-3">
              <div className="h-0.5 w-7 sm:w-10 bg-blue-500/50" />
              <span className="text-xs sm:text-sm font-bold uppercase tracking-widest text-[#0070f3]">
                FEATURED PROJECTS
              </span>
              <div className="h-0.5 w-7 sm:w-10 bg-blue-500/50" />
            </div>
            <h2 className="mt-3 text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
              Engineering Solutions Delivered Across{' '}
              <span className="text-[#0070f3]">Industrial Projects</span>
            </h2>
            <p className="mt-3 sm:mt-4 text-xs sm:text-sm md:text-base text-slate-600 max-w-4xl mx-auto font-normal leading-relaxed">
              From concept development and FEED through detailed engineering, digital engineering, procurement support, and project execution, GTS delivers multidisciplinary engineering services across complex industrial facilities worldwide.
            </p>
          </div>

          <div className="mt-12 sm:mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredProjects.map((project) => {
              const Icon = project.icon;

              return (
                <div
                  key={project.title}
                  className="group rounded-2xl border border-slate-200/80 bg-white overflow-hidden shadow-xs transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:border-blue-200 flex flex-col"
                >
                  {/* Card Image Container */}
                  <div className="relative h-44 sm:h-48 w-full overflow-hidden bg-slate-100">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 via-transparent to-transparent" />

                    {/* Floating Icon Badge */}
                    <div className="absolute bottom-3 left-4 flex h-10 w-10 sm:h-11 sm:w-11 items-center justify-center rounded-xl bg-[#0070f3] text-white shadow-md ring-2 ring-white">
                      <Icon className="h-5 w-5 sm:h-5.5 sm:w-5.5" strokeWidth={2.2} />
                    </div>
                  </div>

                  {/* Card Body */}
                  <div className="p-5 sm:p-6 flex-1 flex flex-col justify-between">
                    <div>
                      <h3 className="text-base sm:text-lg font-extrabold text-slate-900 leading-snug tracking-tight group-hover:text-[#0070f3] transition-colors">
                        {project.title}
                      </h3>
                      <p className="mt-2.5 text-xs text-slate-600 leading-relaxed font-normal">
                        {project.description}
                      </p>
                    </div>

                    {/* Tags */}
                    <div className="mt-5 flex flex-wrap gap-1.5 pt-3 border-t border-slate-100">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="rounded-full bg-blue-50/70 border border-blue-100/80 px-2.5 py-1 text-[10.5px] font-medium text-blue-700 leading-none"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </AnimatedSection>
      </section>

      <section className="relative overflow-hidden bg-slate-950 py-20 text-white sm:py-28">
        {/* Ambient subtle tech background glow */}
        <div className="pointer-events-none absolute -top-40 left-1/2 -translate-x-1/2 h-[500px] w-[900px] rounded-full bg-blue-600/10 blur-[130px]" />
        <div className="pointer-events-none absolute bottom-0 right-0 h-[400px] w-[500px] rounded-full bg-cyan-500/5 blur-[120px]" />

        <AnimatedSection as="div" className="relative z-10 mx-auto max-w-[1480px] px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="ENGINEERING TECHNOLOGIES & DIGITAL PLATFORMS"
            title="Engineering Technologies & Digital Platforms"
            description="GTS leverages industry-leading engineering software, simulation platforms, AI technologies, and digital collaboration tools to deliver accurate, efficient, and globally integrated engineering solutions across the complete project lifecycle."
            theme="dark"
          />

          {/* 8 Technology Pillars Grid */}
          <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-6">
            {technologyPillars.map((pillar) => (
              <div
                key={pillar.number}
                className="group relative flex flex-col justify-between rounded-2xl border border-slate-800/90 bg-slate-900/60 p-5 sm:p-6 backdrop-blur-sm transition-all duration-300 hover:border-[#0070f3]/60 hover:bg-slate-900/95 hover:shadow-xl hover:shadow-[#0070f3]/10"
              >
                <div>
                  {/* Header: Number Badge + Title */}
                  <div className="flex items-center gap-2.5">
                    <span className="inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-[#0070f3] text-xs font-black text-white shadow-sm shadow-blue-500/25">
                      {pillar.number}
                    </span>
                    <h3 className="text-base sm:text-[17px] font-bold text-white tracking-tight group-hover:text-blue-400 transition-colors">
                      {pillar.title}
                    </h3>
                  </div>

                  {/* Description */}
                  <p className="mt-3 text-xs leading-relaxed text-slate-300 min-h-[38px]">
                    {pillar.description}
                  </p>

                  {/* Key Capabilities */}
                  <div className="mt-4 pt-3.5 border-t border-slate-800/80">
                    <div className="text-[10.5px] font-black uppercase tracking-wider text-[#38bdf8]">
                      Key Capabilities
                    </div>
                    <ul className="mt-2.5 grid grid-cols-2 gap-x-2 gap-y-1.5">
                      {pillar.capabilities.map((cap) => (
                        <li key={cap} className="flex items-start gap-1.5 text-[11px] leading-tight text-slate-300">
                          <Check className="h-3 w-3 text-[#0070f3] shrink-0 mt-0.5" />
                          <span>{cap}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Software & Platforms */}
                <div className="mt-5 pt-3.5 border-t border-slate-800/80">
                  <div className="text-[10px] font-mono uppercase tracking-wider text-slate-400">
                    Software & Platforms
                  </div>
                  <div className="mt-2 flex flex-wrap gap-1.5">
                    {pillar.software.map((sw) => (
                      <span
                        key={sw}
                        className="rounded-md border border-slate-700/70 bg-slate-800/70 px-2 py-0.5 text-[10.5px] font-medium text-slate-200 transition-colors group-hover:border-slate-600 group-hover:text-white"
                      >
                        {sw}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Section Footer: AI-Enabled Engineering Workflow Banner & Capabilities (From Image 2) */}
          <div className="mt-14 rounded-2xl border border-blue-900/60 bg-gradient-to-r from-[#03152c] via-[#051f40] to-[#041936] p-6 sm:p-8 shadow-2xl relative overflow-hidden">
            {/* Subtle circuit background pattern */}
            <div className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-blue-500/10 blur-3xl" />
            <div className="pointer-events-none absolute -left-20 -bottom-20 h-64 w-64 rounded-full bg-cyan-500/10 blur-3xl" />

            {/* Workflow Header */}
            <div className="relative z-10 flex flex-col md:flex-row md:items-end justify-between gap-4 mb-7">
              <div>
                <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-cyan-400">
                  <Sparkles className="h-3.5 w-3.5" />
                  <span>Next-Gen Delivery Model</span>
                </div>
                <h3 className="mt-1.5 text-xl sm:text-2xl font-black text-white tracking-tight">
                  AI-Enabled Engineering Workflow
                </h3>
                <p className="mt-1 text-xs sm:text-sm text-slate-300">
                  From concept to delivery — smarter, faster, more reliable.
                </p>
              </div>
              <div className="hidden md:flex items-center gap-2 text-xs text-cyan-300/80 font-mono bg-blue-950/60 border border-blue-800/60 rounded-full px-3 py-1">
                <span className="inline-block h-2 w-2 rounded-full bg-cyan-400 animate-pulse" />
                Continuous AI Validation Pipeline
              </div>
            </div>

            {/* 7 Workflow Step Cards Connected with Arrows */}
            <div className="relative z-10 grid grid-cols-2 sm:grid-cols-4 xl:flex xl:items-stretch gap-2.5 sm:gap-3">
              {aiWorkflowSteps.map((step, idx) => {
                const Icon = step.icon;
                const isLast = idx === aiWorkflowSteps.length - 1;
                return (
                  <div key={step.title} className="contents xl:flex xl:items-center xl:flex-1">
                    <div className="flex flex-col items-center justify-between rounded-xl bg-white p-3.5 text-center shadow-md border border-slate-100 transition-transform duration-200 hover:-translate-y-0.5 w-full h-full">
                      <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-blue-50 text-[#0070f3]">
                        <Icon className="h-5 w-5" />
                      </div>
                      <div className="my-2">
                        <div className="text-xs font-extrabold text-[#0f2d4a] leading-tight">
                          {step.title}
                        </div>
                        <div className="mt-1 text-[9.5px] leading-tight text-slate-500">
                          {step.description}
                        </div>
                      </div>
                      <span className="text-[9px] font-mono font-bold text-blue-600 bg-blue-50 rounded px-1.5 py-0.5">
                        Step 0{idx + 1}
                      </span>
                    </div>

                    {!isLast && (
                      <div className="hidden xl:flex items-center justify-center px-1 text-cyan-400 shrink-0">
                        <ChevronRight className="h-5 w-5 stroke-[2.5]" />
                      </div>
                    )}
                  </div>
                );
              })}
            </div>

            {/* Bottom 6 Metrics Ribbon (From Image 2) */}
            <div className="relative z-10 mt-8 pt-7 border-t border-blue-800/60 grid grid-cols-2 sm:grid-cols-3 xl:grid-cols-6 gap-5 sm:gap-6">
              {technologyMetrics.map((metric) => {
                const Icon = metric.icon;
                return (
                  <div key={metric.label} className="flex items-center gap-3">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-blue-500/15 border border-blue-400/25 text-cyan-300">
                      <Icon className="h-5 w-5" />
                    </div>
                    <div>
                      <div className="text-base sm:text-lg font-black text-white tracking-tight leading-none">
                        {metric.value}
                      </div>
                      <div className="mt-1 text-[11px] font-medium text-slate-300 leading-tight">
                        {metric.label}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Technology Partners Bar & CTA (Prompt recommendation) */}
          <div className="mt-8 rounded-2xl border border-slate-800 bg-slate-900/60 p-5 sm:p-6 backdrop-blur-sm flex flex-col lg:flex-row items-center justify-between gap-6">
            <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-4 text-center sm:text-left">
              <span className="text-xs font-mono uppercase tracking-wider text-slate-400 shrink-0">
                Technology Partners:
              </span>
              <div className="flex flex-wrap items-center justify-center sm:justify-start gap-1.5 sm:gap-2">
                {technologyPartners.map((partner) => (
                  <span
                    key={partner}
                    className="rounded-full bg-slate-800/80 border border-slate-700/70 px-3 py-1 text-xs font-medium text-slate-300 hover:text-white hover:border-slate-500 transition-colors"
                  >
                    {partner}
                  </span>
                ))}
              </div>
            </div>
            <div className="flex items-center gap-3 shrink-0">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-xl bg-[#0070f3] px-5 py-2.5 text-xs sm:text-sm font-semibold text-white shadow-lg shadow-blue-500/25 transition-all hover:bg-blue-600 hover:shadow-blue-500/40"
              >
                <span>Request Consultation</span>
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </AnimatedSection>
      </section>

      {/* =========================================================
          WHY GTS SECTION (Why Leading Industrial Companies Partner with GTS)
      ========================================================= */}
      <section className="relative overflow-hidden border-y border-slate-200/80 bg-slate-50/50 py-16 sm:py-20 lg:py-24 text-slate-900">
        <div className="relative z-10 mx-auto max-w-[1480px] px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-8 items-start">
            {/* Left Column (lg:col-span-4) */}
            <div className="relative flex flex-col justify-between pr-0 lg:pr-4 lg:col-span-4">
              {/* Globe Background per instructions: smaller, transparent, positioned at bottom-right */}
              <div className="pointer-events-none absolute -bottom-10 -right-2 sm:-right-6 w-60 h-60 sm:w-72 sm:h-72 select-none">
                <div className="relative h-full w-full rounded-full overflow-hidden [mask-image:radial-gradient(circle_at_center,black_45%,transparent_55%)]">
                  {/* Subtle texture from background.jpg with soft radial fade */}
                  <Image
                    src="/image/background.jpg"
                    alt="Global Network"
                    fill
                    sizes="288px"
                    className="object-cover opacity-[0.08] mix-blend-multiply"
                  />
                  {/* Soft atmospheric radial gradient */}
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_45%_45%,rgba(191,219,254,0.35)_0%,rgba(219,234,254,0.15)_50%,transparent_70%)]" />

                  {/* High-fidelity transparent globe with continents, parallels, and network nodes */}
                  <svg className="absolute inset-0 h-full w-full" viewBox="0 0 200 200" fill="none">
                    {/* Faint continent landmasses */}
                    <path
                      d="M60 70 Q70 60 85 68 T95 90 T80 110 T65 100 Z M115 55 Q130 50 145 62 T150 85 T130 95 T118 75 Z M75 115 Q88 120 92 135 T85 155 T72 145 Z"
                      fill="rgba(147,197,253,0.22)"
                    />

                    {/* Parallels & Meridians */}
                    <circle cx="100" cy="100" r="85" stroke="rgba(59,130,246,0.18)" strokeWidth="0.9" strokeDasharray="3 3" />
                    <ellipse cx="100" cy="100" rx="85" ry="32" stroke="rgba(59,130,246,0.22)" strokeWidth="1" />
                    <ellipse cx="100" cy="100" rx="32" ry="85" stroke="rgba(59,130,246,0.22)" strokeWidth="1" />
                    <path d="M15 100 Q100 45 185 100" stroke="rgba(59,130,246,0.2)" strokeWidth="1" />
                    <path d="M15 100 Q100 155 185 100" stroke="rgba(59,130,246,0.2)" strokeWidth="1" />

                    {/* Network Connection Arcs */}
                    <path d="M65 80 Q100 45 138 68" stroke="#3b82f6" strokeWidth="1.2" strokeDasharray="3 2" opacity="0.65" />
                    <path d="M65 80 Q85 108 112 128" stroke="#3b82f6" strokeWidth="1.2" strokeDasharray="3 2" opacity="0.65" />
                    <path d="M138 68 Q125 102 112 128" stroke="#3b82f6" strokeWidth="1.2" strokeDasharray="3 2" opacity="0.65" />
                    <path d="M52 118 Q82 124 112 128" stroke="#60a5fa" strokeWidth="1" strokeDasharray="2 2" opacity="0.55" />
                    <path d="M112 128 Q136 124 156 114" stroke="#60a5fa" strokeWidth="1" strokeDasharray="2 2" opacity="0.55" />

                    {/* Network Nodes */}
                    <circle cx="65" cy="80" r="4" fill="#2563eb" opacity="0.85" />
                    <circle cx="65" cy="80" r="7" fill="#60a5fa" opacity="0.25" />
                    <circle cx="138" cy="68" r="4" fill="#2563eb" opacity="0.85" />
                    <circle cx="138" cy="68" r="7" fill="#60a5fa" opacity="0.25" />
                    <circle cx="112" cy="128" r="4" fill="#2563eb" opacity="0.85" />
                    <circle cx="112" cy="128" r="7" fill="#60a5fa" opacity="0.25" />
                    <circle cx="52" cy="118" r="3" fill="#3b82f6" opacity="0.75" />
                    <circle cx="156" cy="114" r="3" fill="#3b82f6" opacity="0.75" />
                  </svg>
                </div>
              </div>

              <div className="relative z-10">
                {/* Eyebrow */}
                <div className="inline-flex items-center gap-3">
                  <span className="font-mono text-xs font-bold uppercase tracking-[0.25em] text-blue-600">
                    WHY GTS
                  </span>
                  <span className="h-[2px] w-10 rounded-full bg-blue-500/80" />
                </div>

                {/* Heading */}
                <h2 className="mt-5 font-display text-3xl sm:text-4xl lg:text-[42px] font-extrabold leading-[1.12] tracking-tight text-slate-900">
                  Why Leading <br />
                  Industrial Companies <br />
                  <span className="text-blue-600">Partner with GTS</span>
                </h2>

                {/* Description */}
                <p className="mt-5 text-xs sm:text-sm leading-relaxed text-slate-600 font-normal max-w-md">
                  GTS combines multidisciplinlary engineering expertise, AI-enabled digital workflows, global delivery capability, and project execution discipline to help clients reduce engineering schedules, improve quality, and successfully deliver complex industrial projects.
                </p>
              </div>

              {/* Vertical Indicator Taglines */}
              <div className="relative z-10 mt-8 lg:mt-12 flex items-stretch gap-3.5">
                <div className="w-[3px] rounded-full bg-blue-600 shrink-0" />
                <div className="flex flex-col space-y-1 font-mono text-[11px] font-bold tracking-[0.25em] text-slate-500 uppercase">
                  <span>PEOPLE</span>
                  <span>TECHNOLOGY</span>
                  <span>SOLUTIONS</span>
                  <span>GLOBAL IMPACT</span>
                </div>
              </div>
            </div>

            {/* Right Column: 3x3 Cards Grid (lg:col-span-8) */}
            <div className="lg:col-span-8">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3.5 sm:gap-4">
                {whyGtsFeatures.map((card) => {
                  const FeatureIcon = card.icon;
                  return (
                    <div
                      key={card.title}
                      className="group relative flex items-start gap-3.5 rounded-2xl border border-slate-200/80 bg-white p-4 sm:p-5 shadow-[0_2px_8px_rgba(15,23,42,0.03)] transition-all duration-300 hover:-translate-y-0.5 hover:border-blue-300 hover:shadow-[0_8px_24px_rgba(37,99,235,0.08)]"
                    >
                      <div className="flex h-10 w-10 sm:h-11 sm:w-11 shrink-0 items-center justify-center rounded-full bg-blue-50 text-blue-600 border border-blue-100/80 transition-colors group-hover:bg-blue-600 group-hover:text-white">
                        <FeatureIcon className="h-5 w-5 transition-transform duration-300 group-hover:scale-110" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <h3 className="font-bold text-slate-900 text-[13px] sm:text-sm leading-snug">
                          {card.title}
                        </h3>
                        <p className="mt-1.5 text-[11px] sm:text-xs text-slate-500 leading-relaxed">
                          {card.description}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Bottom Stats Strip with subtle vertical dividers */}
          <div className="mt-12 pt-8 sm:mt-14 sm:pt-8 border-t border-slate-200/80">
            <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-4 lg:gap-0 lg:divide-x lg:divide-slate-200/80">
              {whyGtsStats.map((stat) => {
                const StatIcon = stat.icon;
                return (
                  <div key={stat.label} className="flex items-center gap-3 px-0 lg:px-4 first:lg:pl-0 last:lg:pr-0">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center text-blue-600">
                      <StatIcon className="h-6 w-6 stroke-[1.8]" />
                    </div>
                    <div className="min-w-0">
                      <span className="block font-display text-lg sm:text-xl font-extrabold text-slate-900 leading-none">
                        {stat.value}
                      </span>
                      <span className="mt-1 block text-[11px] sm:text-xs text-slate-500 font-medium leading-tight">
                        {stat.label}
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-gradient-to-b from-[#f8fafc] via-white to-white py-16 sm:py-24 border-y border-slate-200/60">
        {/* Left Globe & Network Graphic from bg image */}
        <div
          className="pointer-events-none absolute left-0 top-0 bottom-0 w-[28%] md:w-[32%] lg:w-[30%] xl:w-[28%] overflow-hidden select-none z-0"
          style={{
            maskImage: 'linear-gradient(to right, black 55%, rgba(0,0,0,0.6) 80%, transparent 100%)',
            WebkitMaskImage: 'linear-gradient(to right, black 55%, rgba(0,0,0,0.6) 80%, transparent 100%)'
          }}
        >
          <div className="relative h-full w-full">
            <Image
              src="/image/client and certificate/client-certification-bg.jpeg"
              alt="Global Engineering Local Impact"
              fill
              style={{ objectPosition: 'left center' }}
              className="object-cover"
              quality={95}
              priority
            />
            {/* Soft vertical blend into section top/bottom borders */}
            <div className="absolute inset-x-0 top-0 h-12 bg-gradient-to-b from-[#f8fafc] via-[#f8fafc]/60 to-transparent" />
            <div className="absolute inset-x-0 bottom-0 h-14 bg-gradient-to-t from-white via-white/60 to-transparent" />
          </div>
        </div>

        {/* Watermark text on top-left over the globe */}
        <div className="pointer-events-none absolute left-6 sm:left-10 lg:left-12 top-20 sm:top-24 hidden flex-col font-mono text-[10px] sm:text-[11px] font-black uppercase tracking-widest text-[#0052b4] select-none lg:flex z-10">
          <div className="flex items-center gap-1.5">
            <span className="h-2 w-2 rounded-full bg-[#0070f3] animate-pulse" />
            <span>GLOBAL</span>
          </div>
          <span className="pl-3.5">ENGINEERING</span>
          <div className="my-1 ml-3.5 h-0.5 w-7 bg-[#0070f3]" />
          <span className="pl-3.5 text-[#0070f3]">LOCAL IMPACT</span>
        </div>

        {/* Right Industrial Image Overlay */}
        <div
          className="pointer-events-none absolute right-0 top-0 bottom-0 w-[36%] md:w-[40%] lg:w-[42%] xl:w-[40%] overflow-hidden select-none z-0"
          style={{
            maskImage: 'linear-gradient(to right, transparent 0%, rgba(0,0,0,0.18) 12%, rgba(0,0,0,0.7) 28%, black 50%, black 100%)',
            WebkitMaskImage: 'linear-gradient(to right, transparent 0%, rgba(0,0,0,0.18) 12%, rgba(0,0,0,0.7) 28%, black 50%, black 100%)'
          }}
        >
          <div className="relative h-full w-full">
            <Image
              src="/image/client and certificate/client-certification-bg.jpeg"
              alt="Industrial Engineering Plant"
              fill
              style={{ objectPosition: '30% center' }}
              className="object-cover"
              quality={95}
              priority
            />
            {/* Soft vertical blend into section top/bottom borders */}
            <div className="absolute inset-x-0 top-0 h-12 bg-gradient-to-b from-[#f8fafc] via-[#f8fafc]/60 to-transparent" />
            <div className="absolute inset-x-0 bottom-0 h-14 bg-gradient-to-t from-white via-white/60 to-transparent" />
          </div>
        </div>

        {/* Watermark text on top-right */}
        <div className="pointer-events-none absolute right-8 top-8 hidden lg:flex items-start gap-2.5 select-none z-10">
          <div className="h-12 w-[1.5px] bg-slate-300" />
          <div className="flex flex-col text-[10.5px] font-semibold uppercase tracking-wider text-slate-500 leading-snug">
            <span>PEOPLE</span>
            <span>TECHNOLOGY</span>
            <span>SOLUTIONS</span>
            <span>GLOBAL IMPACT</span>
          </div>
        </div>

        <AnimatedSection as="div" className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Header Area */}
          <div className="text-center">
            <div className="inline-flex items-center justify-center gap-3">
              <span className="h-px w-8 bg-blue-300" />
              <span className="text-xs font-bold uppercase tracking-widest text-[#0070f3]">
                CLIENTS & CERTIFICATIONS
              </span>
              <span className="h-px w-8 bg-blue-300" />
            </div>

            <h2 className="mt-3 text-3xl font-black tracking-tight text-slate-900 sm:text-4xl lg:text-5xl font-display">
              Engineering Excellence Built on{' '}
              <span className="text-[#0070f3]">
                Quality, Compliance, and Global Delivery
              </span>
            </h2>

            <div className="mx-auto mt-4 max-w-4xl space-y-2 text-center text-sm sm:text-[15px] leading-relaxed text-slate-600">
              <p>
                GTS Engineering delivers multidisciplinary engineering services through standardized quality systems, experienced engineering teams, AI-enabled workflows, and internationally recognized engineering practices.
              </p>
              <p className="text-xs sm:text-sm text-slate-500">
                Engineering teams experienced with internationally recognized industrial standards including API, ASME, AISC, AWS, ASTM, IEC, IEEE, NFPA, ISO, and client-specific engineering specifications.
              </p>
            </div>
          </div>

          {/* 4 Pillar Cards Grid */}
          <div className="mt-10 sm:mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {excellencePillars.map((pillar) => {
              const Icon = pillar.icon;
              return (
                <div
                  key={pillar.title}
                  className="group relative flex flex-col justify-between rounded-2xl border border-slate-200/90 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-blue-300 hover:shadow-lg hover:shadow-blue-500/10"
                >
                  <div>
                    {/* Card Header: Icon + Title & Description */}
                    <div className="flex items-start gap-3.5">
                      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-blue-200/80 bg-blue-50 text-[#0070f3] transition-colors duration-300 group-hover:bg-[#0070f3] group-hover:text-white">
                        <Icon className="h-5 w-5" />
                      </div>
                      <div>
                        <h3 className="text-base font-bold text-slate-900 transition-colors duration-200 group-hover:text-[#0070f3]">
                          {pillar.title}
                        </h3>
                        <p className="mt-1 text-xs text-slate-500 leading-snug">
                          {pillar.description}
                        </p>
                      </div>
                    </div>

                    {/* Checkmark Checklist */}
                    <ul className="mt-5 space-y-2.5">
                      {pillar.items.map((item) => (
                        <li key={item} className="flex items-start gap-2.5 text-xs sm:text-[13px] font-medium text-slate-700">
                          <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-[#0070f3]" />
                          <span className="leading-tight">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Industry Standards & Certifications Ribbon */}
          <div className="relative mt-8 sm:mt-10 rounded-2xl border border-slate-200/90 bg-white p-4 sm:p-5 shadow-sm">
            <div className="flex flex-col lg:flex-row items-center justify-between gap-4 lg:gap-6">
              {/* Left Ribbon Title */}
              <div className="flex items-center shrink-0 border-b pb-3 lg:border-b-0 lg:pb-0 lg:border-r lg:pr-6 border-slate-200 w-full lg:w-auto justify-center lg:justify-start">
                <div className="flex flex-col text-left">
                  <span className="text-[11px] sm:text-xs font-black uppercase tracking-wider text-[#0070f3]">
                    INDUSTRY STANDARDS
                  </span>
                  <span className="text-[11px] sm:text-xs font-black uppercase tracking-wider text-[#0070f3]">
                    & CERTIFICATIONS
                  </span>
                  <div className="mt-1 h-0.5 w-10 bg-[#0070f3]" />
                </div>
              </div>

              {/* Real Standards & Certification Images from public/image/client and certificate */}
              <div className="flex flex-wrap items-center justify-center lg:justify-between gap-x-5 sm:gap-x-6 lg:gap-x-7 gap-y-3.5 flex-1 w-full px-2">
                {certificationLogos.map((item) => (
                  <div
                    key={item.name}
                    className="flex items-center gap-2 group cursor-default transition-transform duration-200 hover:scale-105 shrink-0"
                    title={item.title}
                  >
                    {item.name === 'Client Specifications' ? (
                      <>
                        <FileText className="h-6 w-6 text-[#0070f3] stroke-[1.8]" />
                        <div className="text-[10px] sm:text-[11px] font-bold leading-tight text-slate-800 tracking-tight">
                          <span>Client</span>
                          <br />
                          <span>Specifications</span>
                        </div>
                      </>
                    ) : (
                      <Image
                        src={item.src}
                        alt={item.name}
                        width={item.width}
                        height={item.height}
                        className={item.className}
                      />
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Bottom Trust Metrics & Vision Statement */}
          <div className="mt-6 sm:mt-8 rounded-2xl border border-slate-200/90 bg-white p-4 sm:p-5 shadow-sm">
            <div className="flex flex-col xl:flex-row items-center justify-between gap-4 xl:gap-0">
              <div className="grid grid-cols-2 sm:grid-cols-3 xl:grid-cols-6 gap-4 xl:gap-0 flex-1 w-full xl:pr-6">
                {excellenceStats.map((stat, idx) => {
                  const Icon = stat.icon;
                  return (
                    <div
                      key={stat.label}
                      className={`flex items-center gap-3 ${idx < 5 ? 'xl:border-r xl:border-slate-200 xl:pr-4 xl:mr-4' : ''}`}
                    >
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-blue-50 text-[#0070f3]">
                        <Icon className="h-5 w-5" />
                      </div>
                      <div className="min-w-0">
                        <div className="text-base font-extrabold text-slate-900 tracking-tight leading-none">
                          {stat.value}
                        </div>
                        <div className="mt-1 text-[11px] font-medium text-slate-500 leading-tight">
                          {stat.label}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>

              <div className="pt-3 xl:pt-0 xl:pl-6 border-t xl:border-t-0 xl:border-l border-slate-200 shrink-0 w-full xl:w-auto text-center xl:text-left">
                <div className="flex flex-col text-[10px] sm:text-[11px] font-bold uppercase tracking-widest text-[#5c8dbf] leading-snug">
                  <span>SAFER INDUSTRIES</span>
                  <span>STRONGER COMMUNITIES</span>
                  <span>A SMARTER TOMORROW</span>
                </div>
              </div>
            </div>
          </div>
        </AnimatedSection>
      </section>

      <ConsultationSection />
    </div>
  );
}
