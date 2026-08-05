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

interface HeroVisual {
  label: string;
  dashboardTitle: string;
  metrics: HeroMetric[];
  title: string;
  tags: string[];
  video: string;
}

const heroVisuals: HeroVisual[] = [
  {
    label: 'Oil & Gas',
    dashboardTitle: 'PLANT ENGINEERING VIEW',
    metrics: [
      { label: 'Asset Health', value: '98%' },
      { label: 'Safety Compliance', value: '100%' },
      { label: 'Project Status', value: 'LIVE' }
    ],
    title: 'Integrated engineering solutions for upstream, midstream, and downstream facilities.',
    tags: ['Process Engineering', 'P&ID Design', 'HAZOP', 'Stress Analysis', '3D Plant Design', 'Digital Twin', 'Asset Integrity', 'EPC Support'],
    video: '/vedios-gts/energy.mp4'
  },
  {
    label: 'LNG',
    dashboardTitle: 'LNG FACILITY VIEW',
    metrics: [
      { label: 'Cryogenic Systems', value: 'Active' },
      { label: 'BOG Performance', value: 'Optimal' },
      { label: 'Terminal Status', value: 'LIVE' }
    ],
    title: 'Engineering LNG liquefaction, storage, regasification, and export terminal infrastructure.',
    tags: ['Liquefaction', 'Cryogenic Design', 'LNG Storage', 'Loading Systems', 'Process Safety', 'Piping Design', 'Digital Twin', 'Commissioning'],
    video: '/vedios-gts/lng-facility.mp4'
  },
  {
    label: 'Process Engineering',
    dashboardTitle: 'PROCESS ENGINEERING VIEW',
    metrics: [
      { label: 'Process Efficiency', value: '96%' },
      { label: 'Simulation Status', value: 'Running' },
      { label: 'Design Review', value: 'Complete' }
    ],
    title: 'Optimizing industrial processes through advanced engineering, simulation, and design.',
    tags: ['Process Simulation', 'Heat & Mass Balance', 'Equipment Design', 'Utility Systems', 'Process Optimization', 'FEED', 'Aspen HYSYS', 'Plant Design'],
    video: '/vedios-gts/process-enginerring.mp4'
  },
  {
    label: 'Process Safety',
    dashboardTitle: 'PROCESS SAFETY VIEW',
    metrics: [
      { label: 'Risk Level', value: 'Low' },
      { label: 'Compliance', value: '100%' },
      { label: 'Safety Review', value: 'Complete' }
    ],
    title: 'Protecting people, facilities, and operations through risk-based engineering.',
    tags: ['HAZOP', 'HAZID', 'LOPA', 'SIL Studies', 'Relief Systems', 'Fire Protection', 'PSM', 'Risk Assessment'],
    video: '/vedios-gts/process-safety.mp4'
  },
  {
    label: 'Data Centers',
    dashboardTitle: 'MISSION CRITICAL VIEW',
    metrics: [
      { label: 'Power Availability', value: '99.999%' },
      { label: 'Cooling Status', value: 'Optimal' },
      { label: 'Operations', value: '24/7' }
    ],
    title: 'Mission-critical engineering for hyperscale and AI infrastructure.',
    tags: ['Electrical Engineering', 'CFD Cooling', 'BIM', 'Commissioning', 'UPS Systems', 'Digital Twin', 'Power Distribution', 'Energy Modeling'],
    video: '/vedios-gts/data-center.mp4'
  },
  {
    label: 'Semiconductors',
    dashboardTitle: 'SEMICONDUCTOR FACILITY VIEW',
    metrics: [
      { label: 'Cleanroom Status', value: 'ISO 3' },
      { label: 'Facility Yield', value: '98%' },
      { label: 'Equipment Status', value: 'Online' }
    ],
    title: 'Engineering advanced semiconductor manufacturing facilities and cleanroom environments.',
    tags: ['Cleanroom Design', 'Ultra Pure Water', 'Chemical Systems', 'HVAC', 'Process Utilities', 'Equipment Layout', 'BIM', 'Digital Twin'],
    video: '/vedios-gts/semiconductors.mp4'
  },
  {
    label: 'Power & Utilities',
    dashboardTitle: 'POWER SYSTEMS VIEW',
    metrics: [
      { label: 'Grid Stability', value: 'Stable' },
      { label: 'Substation Health', value: '99%' },
      { label: 'SCADA Status', value: 'Online' }
    ],
    title: 'Engineering reliable electrical infrastructure for modern energy systems.',
    tags: ['Substations', 'Relay Protection', 'SCADA', 'Load Flow', 'Arc Flash', 'Grid Studies', 'Power Quality', 'Switchgear'],
    video: '/vedios-gts/power-utilities.mp4'
  },
  {
    label: 'Water & Wastewater',
    dashboardTitle: 'UTILITY ENGINEERING VIEW',
    metrics: [
      { label: 'Plant Performance', value: '98%' },
      { label: 'Water Quality', value: 'Within Spec' },
      { label: 'Operations', value: 'Continuous' }
    ],
    title: 'Delivering sustainable engineering solutions for water treatment and utility infrastructure.',
    tags: ['Water Treatment', 'Wastewater', 'Pump Stations', 'Hydraulic Modeling', 'SCADA', 'Instrumentation', 'Process Control', 'Digital Twin'],
    video: '/vedios-gts/water-wastewater.mp4'
  },
  {
    label: 'Industrial Automation',
    dashboardTitle: 'AUTOMATION CONTROL VIEW',
    metrics: [
      { label: 'Automation Level', value: 'High' },
      { label: 'System Availability', value: '99.9%' },
      { label: 'Production Status', value: 'Running' }
    ],
    title: 'Connecting industrial operations through intelligent automation and Industry 4.0 technologies.',
    tags: ['PLC', 'SCADA', 'Industrial IoT', 'MES', 'Robotics', 'Analytics', 'Control Systems', 'OT Cybersecurity'],
    video: '/vedios-gts/industrial-automation.mp4'
  },
  {
    label: 'AI & Digital Engineering',
    dashboardTitle: 'AI ENGINEERING VIEW',
    metrics: [
      { label: 'AI Models', value: 'Active' },
      { label: 'Connected Assets', value: 'Live' },
      { label: 'Analytics', value: 'Real-Time' }
    ],
    title: 'Transforming engineering with AI, digital twins, and intelligent industrial solutions.',
    tags: ['Digital Twin', 'Predictive Analytics', 'Computer Vision', 'AI Copilot', 'Cloud Engineering', 'Data Integration', 'Machine Learning', 'Industrial AI'],
    video: '/vedios-gts/AI.mp4'
  },
  {
    label: 'Product Engineering',
    dashboardTitle: 'PRODUCT ENGINEERING VIEW',
    metrics: [
      { label: 'Design Status', value: 'Active' },
      { label: 'Validation', value: 'Passed' },
      { label: 'Revision', value: 'R12' }
    ],
    title: 'Accelerating product development through advanced design and engineering validation.',
    tags: ['CAD Design', 'FEA', 'CFD', 'Tolerance Analysis', 'DFM', 'Rapid Prototyping', 'PLM', 'Manufacturing Support'],
    video: '/vedios-gts/automobile.mp4'
  },
  {
    label: 'Mechanical Engineering',
    dashboardTitle: 'MECHANICAL ENGINEERING VIEW',
    metrics: [
      { label: 'Model Status', value: 'Approved' },
      { label: 'Analysis', value: 'Complete' },
      { label: 'Documentation', value: 'Released' }
    ],
    title: 'Delivering precision mechanical engineering for industrial equipment and machinery.',
    tags: ['Mechanical Design', 'Equipment Design', 'FEA', 'GD&T', 'Assemblies', 'Rotating Equipment', 'Reverse Engineering', 'Drawings'],
    video: '/vedios-gts/mechanical-engineering.mp4'
  },
  {
    label: 'Structural Engineering',
    dashboardTitle: 'STRUCTURAL ENGINEERING VIEW',
    metrics: [
      { label: 'Structural Integrity', value: 'Verified' },
      { label: 'BIM Coordination', value: '98%' },
      { label: 'Fabrication Status', value: 'Ready' }
    ],
    title: 'Engineering safe, efficient structural systems for industrial facilities.',
    tags: ['Steel Structures', 'Pipe Racks', 'Foundations', 'Structural Analysis', 'Tekla', 'BIM', 'Fabrication Drawings', 'Connection Design'],
    video: '/vedios-gts/heavy-enginerring.mp4'
  },
  {
    label: 'Electrical Engineering',
    dashboardTitle: 'ELECTRICAL ENGINEERING VIEW',
    metrics: [
      { label: 'Load Capacity', value: 'Optimal' },
      { label: 'Protection Status', value: 'Verified' },
      { label: 'Distribution', value: 'Online' }
    ],
    title: 'Engineering dependable electrical systems for industrial and mission-critical facilities.',
    tags: ['MV/LV Systems', 'Switchgear', 'Lighting', 'Grounding', 'ETAP', 'Cable Routing', 'Arc Flash', 'Power Studies'],
    video: '/vedios-gts/electrical-engineering.mp4'
  },
  {
    label: 'Instrumentation & Controls',
    dashboardTitle: 'I&C ENGINEERING VIEW',
    metrics: [
      { label: 'Instrument Health', value: '99%' },
      { label: 'Loop Status', value: 'Verified' },
      { label: 'Control Logic', value: 'Running' }
    ],
    title: 'Integrating intelligent instrumentation and control systems for industrial facilities.',
    tags: ['Instrumentation', 'PLC', 'DCS', 'Control Panels', 'Loop Diagrams', 'SCADA', 'Functional Safety', 'Calibration'],
    video: '/vedios-gts/instrumentation-controls.mp4'
  },
  {
    label: 'Manufacturing Engineering',
    dashboardTitle: 'SMART MANUFACTURING VIEW',
    metrics: [
      { label: 'Production Efficiency', value: '97%' },
      { label: 'Line Availability', value: '99%' },
      { label: 'Quality Status', value: 'Passed' }
    ],
    title: 'Improving manufacturing performance through engineering optimization and automation.',
    tags: ['Production Lines', 'Lean Manufacturing', 'Automation', 'Robotics', 'Quality Engineering', 'Simulation', 'Digital Factory', 'MES'],
    video: '/vedios-gts/marine.mp4'
  },
  {
    label: 'Telecommunications',
    dashboardTitle: 'NETWORK INFRASTRUCTURE VIEW',
    metrics: [
      { label: 'Network Availability', value: '99.99%' },
      { label: 'Tower Health', value: 'Verified' },
      { label: 'Connectivity', value: 'Live' }
    ],
    title: 'Engineering connected infrastructure for next-generation communication networks.',
    tags: ['Tower Design', 'Fiber Networks', 'Equipment Layout', 'Structural Analysis', 'GIS', 'RF Coordination', 'BIM', 'Site Engineering'],
    video: '/vedios-gts/telecom.mp4'
  },
  {
    label: 'Rail & Transportation',
    dashboardTitle: 'TRANSPORT SYSTEMS VIEW',
    metrics: [
      { label: 'System Reliability', value: '99%' },
      { label: 'Infrastructure Status', value: 'Operational' },
      { label: 'Design Review', value: 'Approved' }
    ],
    title: 'Engineering modern transportation infrastructure and integrated mobility systems.',
    tags: ['Rail Infrastructure', 'Stations', 'Track Engineering', 'Bridges', 'Structural Design', 'BIM', 'Systems Integration', 'Asset Management'],
    video: '/vedios-gts/railway.mp4'
  },
  {
    label: 'Marine & Offshore',
    dashboardTitle: 'MARINE ENGINEERING VIEW',
    metrics: [
      { label: 'Structural Health', value: '98%' },
      { label: 'Offshore Status', value: 'Operational' },
      { label: 'Asset Integrity', value: 'Verified' }
    ],
    title: 'Engineering offshore platforms, marine structures, and port infrastructure.',
    tags: ['Offshore Structures', 'Hull Design', 'Mooring Systems', 'Corrosion Protection', 'Marine Piping', 'Asset Integrity', 'Digital Twin', 'Structural Analysis'],
    video: '/vedios-gts/marine.mp4'
  },
  {
    label: 'Mining & Metals',
    dashboardTitle: 'MINING OPERATIONS VIEW',
    metrics: [
      { label: 'Plant Availability', value: '97%' },
      { label: 'Equipment Status', value: 'Running' },
      { label: 'Safety Index', value: '100%' }
    ],
    title: 'Engineering processing facilities and infrastructure for mining and metals operations.',
    tags: ['Material Handling', 'Crushers', 'Conveyors', 'Process Plants', 'Structural Engineering', 'Dust Control', 'Utilities', 'Asset Management'],
    video: '/vedios-gts/heavy-enginerring.mp4'
  },
  {
    label: 'Renewable Energy',
    dashboardTitle: 'RENEWABLE ENERGY VIEW',
    metrics: [
      { label: 'Energy Output', value: '98%' },
      { label: 'Grid Connection', value: 'Stable' },
      { label: 'Availability', value: '99%' }
    ],
    title: 'Advancing sustainable energy through engineering for wind, solar, hydrogen, and emerging technologies.',
    tags: ['Solar Plants', 'Wind Farms', 'Battery Storage', 'Hydrogen', 'Grid Integration', 'Electrical Design', 'SCADA', 'Digital Twin'],
    video: '/vedios-gts/marine.mp4'
  },
  {
    label: 'Medical Devices',
    dashboardTitle: 'MEDICAL ENGINEERING VIEW',
    metrics: [
      { label: 'Compliance', value: 'FDA Ready' },
      { label: 'Verification', value: 'Passed' },
      { label: 'Traceability', value: '100%' }
    ],
    title: 'Supporting compliant engineering for precision medical technologies.',
    tags: ['Medical Devices', 'Design Controls', 'DFMEA', 'Verification', 'Validation', 'Risk Management', 'CAD', 'Regulatory Support'],
    video: '/vedios-gts/medical-machine.mp4'
  },
  {
    label: 'Life Sciences',
    dashboardTitle: 'LIFE SCIENCES VIEW',
    metrics: [
      { label: 'GMP Compliance', value: '100%' },
      { label: 'Facility Status', value: 'Operational' },
      { label: 'Quality Systems', value: 'Verified' }
    ],
    title: 'Engineering GMP-compliant facilities for pharmaceutical and biotechnology industries.',
    tags: ['GMP Facilities', 'Clean Utilities', 'Validation', 'HVAC', 'Cleanrooms', 'Process Equipment', 'Automation', 'Digital Twin'],
    video: '/vedios-gts/biology.mp4'
  },
  {
    label: 'Consumer Products',
    dashboardTitle: 'CONSUMER PRODUCT VIEW',
    metrics: [
      { label: 'Product Status', value: 'Released' },
      { label: 'Quality', value: 'Approved' },
      { label: 'Production', value: 'Live' }
    ],
    title: 'Helping manufacturers bring innovative consumer products from concept to production.',
    tags: ['Product Design', 'Plastic Components', 'Tooling', 'FEA', 'DFM', 'Packaging', 'Validation', 'Manufacturing'],
    video: '/vedios-gts/consumer.mp4'
  },
  {
    label: 'Aerospace Engineering',
    dashboardTitle: 'AEROSPACE ENGINEERING VIEW',
    metrics: [
      { label: 'Structural Analysis', value: 'Verified' },
      { label: 'Thermal Performance', value: 'Optimal' },
      { label: 'Certification', value: 'In Progress' }
    ],
    title: 'Delivering advanced engineering and simulation solutions for aerospace systems.',
    tags: ['Composite Design', 'CFD', 'FEA', 'Thermal Analysis', 'Certification', 'Weight Optimization', 'Structural Design', 'Digital Engineering'],
    video: '/vedios-gts/aerospace.mp4'
  },
  {
    label: 'Smart Infrastructure & Cities',
    dashboardTitle: 'SMART INFRASTRUCTURE VIEW',
    metrics: [
      { label: 'Connected Assets', value: 'Live' },
      { label: 'City Operations', value: 'Integrated' },
      { label: 'Infrastructure Health', value: '98%' }
    ],
    title: 'Engineering connected infrastructure that powers smarter, more resilient communities.',
    tags: ['Smart Cities', 'IoT', 'Digital Twin', 'Utilities', 'Mobility', 'GIS', 'Asset Management', 'AI Analytics'],
    video: '/vedios-gts/smart-infrastructure-cities.mp4'
  }
];

const trustStats = [
  {
    title: 'Established 2012',
    image: '/image/Established.jpg',
    description:
      'Since 2012, we have combined engineering expertise with digital innovation, leveraging AI-assisted workflows and data-driven methodologies to deliver reliable, scalable, and future-ready industrial solutions across global markets.'
  },
  {
    title: '100+ Projects Delivered',
    image: '/image/project-delivery.png',
    description:
      'Successfully delivering 100+ engineering projects across diverse industries, we utilize AI-powered insights, automation, and advanced analytics to improve efficiency, accelerate execution, and maximize project outcomes.'
  },
  {
    title: 'Global Delivery Model',
    image: '/image/Global-Delivery-Model.jpg',
    description:
      'Our global delivery framework combines distributed engineering talent, digital collaboration platforms, and AI-enhanced project management to ensure seamless execution, quality assurance, and timely delivery worldwide.'
  },
  {
    title: 'Multidisciplinary Engineering Teams',
    image: '/image/Multidisciplinary-Engineering-Teams.jpg',
    description:
      'Our multidisciplinary teams integrate mechanical, electrical, process, civil, and digital engineering expertise, supported by AI-driven tools that enhance collaboration, innovation, design accuracy, and operational performance.'
  },
  {
    title: 'AI & Digital Engineering Capability',
    image: '/image/AI-Digital-Engineering-Capability.jpg',
    description:
      'We harness artificial intelligence, digital engineering, simulation technologies, and predictive analytics to optimize design processes, improve decision-making, reduce project risks, and accelerate industrial transformation.'
  },
  {
    title: 'US + India Operations',
    image: '/image/US-India-Operations.png',
    description:
      'With strategic operations across the United States and India, we combine global engineering standards, regional expertise, and AI-enabled delivery capabilities to provide cost-effective, high-quality engineering solutions.'
  }
];

const whoWeAreHighlights = [
  {
    title: 'Plant',
    text: 'Process, piping, and EPC support across industrial assets',
    icon: '/icons/plant.png'
  },
  {
    title: 'Product',
    text: 'CAD, CAE, reverse engineering, and design automation',
    icon: '/icons/product.png'
  },
  {
    title: 'Digital',
    text: 'AI workflows, digital twins, analytics, and data intelligence',
    icon: '/icons/digitalization.png'
  },
  {
    title: 'Delivery',
    text: 'US + India engineering teams with scalable execution',
    icon: '/icons/dilivery.png'
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
  }
];

const digitalCapabilities = [
  'AI-Powered Engineering',
  'Predictive Maintenance',
  'Digital Twin Solutions',
  'Intelligent Asset Management',
  'Industrial Analytics',
  'Smart Manufacturing',
  'Engineering Automation',
  'Data-Driven Operations'
];

const industriesServed = [
  { title: 'Oil & Gas', icon: '/icons/oil-gas.png', bgImage: '/image/industry-image/oilandgas.jpg' },
  { title: 'Refineries', icon: '/icons/refinery.png', bgImage: '/image/industry-image/refineries.jpg' },
  { title: 'Petrochemicals', icon: '/icons/petrochemical.png', bgImage: '/image/industry-image/Petrochemicals.jpg' },
  { title: 'Energy & Utilities', icon: '/icons/solar-utilities.png', bgImage: '/image/industry-image/Energy.jpg' },
  { title: 'Manufacturing', icon: '/icons/manufacturing.png', bgImage: '/image/industry-image/equipment-heavy.jpg' },
  { title: 'Mining', icon: '/icons/mining.png', bgImage: '/image/industry-image/mining.jpg' },
  { title: 'Infrastructure', icon: '/icons/infrastructure.png', bgImage: '/image/industry-image/Infrastructure.jpg' },
  { title: 'Heavy Equipment', icon: '/icons/heavy-equepment.png', bgImage: '/image/industry-image/Heavy Equipment.jpg' },
  { title: 'Marine & Offshore', icon: '/icons/marine.png', bgImage: '/image/industry-image/marine-1.jpg' },
  { title: 'Water & Wastewater', icon: '/icons/water-filter.png', bgImage: '/image/industry-image/water.jpg' },
  { title: 'Automotive', icon: '/icons/automotive.png', bgImage: '/image/industry-image/automotive-1.jpg' },
  { title: 'Rail', icon: '/icons/train.png', bgImage: '/image/industry-image/rail.jpg' }
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

const processSafetyItems = [
  'Process Safety Management (PSM)',
  'HAZOP',
  'SIL',
  'Risk Assessments',
  'QRA',
  'Asset Integrity',
  'EPC',
  'EPCM',
  'PMC'
];

const featuredProjects = [
  'Distillery Plant Engineering',
  'Storage Terminal Design',
  'Offshore Structural Analysis',
  'Pipeline Engineering',
  'Steel Detailing Projects',
  'Heavy Equipment Design',
  'FEA Optimization Projects',
  'Industrial Automation Projects'
];

const softwareExpertise = [
  { category: 'Plant Design', tools: 'PDMS | SP3D | Plant 3D | CAESAR II' },
  { category: 'Product Engineering', tools: 'SolidWorks | CATIA | NX | Inventor' },
  { category: 'Simulation', tools: 'ANSYS | Abaqus | HyperMesh | LS-Dyna' },
  { category: 'Structural', tools: 'Tekla | STAAD | SDS2' },
  { category: 'Digital', tools: 'Python | MATLAB | AWS | Azure' }
];

const whyGts = [
  'Established Since 2012',
  'Engineering Excellence',
  'US + India Delivery',
  'Fast Turnaround',
  'AI-Enabled Engineering',
  'Dedicated Project Teams',
  'Cost Optimization',
  'Scalable Resources',
  'Strong Quality Systems'
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
  const [activeDiscipline, setActiveDiscipline] = useState(engineeringCapabilities[0].name);
  const [hoveredIndustryIndex, setHoveredIndustryIndex] = useState<number | null>(null);
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
      <section className="relative min-h-[760px] lg:min-h-screen overflow-hidden bg-slate-950 text-white">
        <video
          ref={videoRef}
          key={`hero-video-${activeSlide}`}
          autoPlay
          muted
          playsInline
          preload="metadata"
          onEnded={handleVideoEnd}
          className="absolute inset-0 h-full w-full object-cover "
        >
          <source src={heroVisuals[activeSlide].video} type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/30 to-slate-950/40" />
        <FloatingParticles />


        <div className="relative z-10 grid min-h-[760px] lg:min-h-screen grid-cols-1 items-center lg:items-stretch gap-12 px-4 pt-28 pb-20 sm:pt-36 sm:pb-24 lg:pt-40 lg:pb-24 sm:px-6 lg:grid-cols-12 lg:px-8">
          <AnimatedSection as="div" className="lg:col-span-7 flex flex-col justify-between gap-8 lg:gap-12">
            <div className="space-y-8">
              <div className="space-y-5">
                <p className="text-base font-semibold text-cyan-200 sm:text-lg">
                  Engineering Excellence Powered by AI & Innovation
                </p>
                <h1 className="font-display text-3xl font-extrabold leading-[1.15] tracking-[-0.03em] sm:text-4xl lg:text-[2.4rem] xl:text-[2.6rem]">
                  <span className="block">AI-Powered</span>
                  <span className="block bg-gradient-to-r from-cyan-200 via-sky-300 to-blue-400 bg-clip-text text-transparent drop-shadow-[0_0_24px_rgba(34,211,238,0.18)] lg:whitespace-nowrap">
                    Intelligent Engineering Solutions
                  </span>
                  <span className="block">
                    for{' '}
                    <span className="bg-gradient-to-r from-cyan-200 via-sky-300 to-blue-400 bg-clip-text text-transparent drop-shadow-[0_0_24px_rgba(34,211,238,0.18)] lg:whitespace-nowrap">
                      Industrial Transformation
                    </span>
                  </span>
                </h1>
              </div>
            </div>

            <div className="space-y-6">
              <p className="max-w-3xl text-sm leading-7 text-slate-200 sm:text-base">
                Delivering end-to-end Plant, Process, Product, Automation, Digital Engineering, and EPC solutions for global industrial, energy, infrastructure, and manufacturing sectors.
              </p>
              <div className="flex flex-wrap gap-4">
                <GradientButton href="/#solutions">
                  Explore Solutions
                </GradientButton>
                <GradientButton href="/contact" variant="ghost">
                  Schedule Consultation
                </GradientButton>
              </div>
              {/* <p className="max-w-2xl text-xs font-medium uppercase tracking-[0.22em] text-slate-400">
                More than drafting: integrated engineering, automation, AI, digital, and industrial technology delivery.
              </p> */}
            </div>
          </AnimatedSection>

          <AnimatedSection as="div" delay={0.12} className="lg:col-span-5 lg:self-end w-full">
            <div className="mx-auto lg:ml-auto max-w-[480px] w-full">
              <GlassCard tone="dark" className="rounded-[2rem] p-3 shadow-2xl shadow-slate-950/60">
                <div className="relative min-h-[520px] overflow-hidden rounded-[1.5rem] border border-white/10 bg-slate-950">
                  <video
                    key={`panel-${activeSlide}`}
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
                      <span className="font-mono uppercase tracking-[0.22em]">{heroVisuals[activeSlide].dashboardTitle}</span>
                      <span className="rounded-full bg-emerald-400/15 px-2 py-1 text-emerald-200">Live</span>
                    </div>
                    <div className="mt-4 grid grid-cols-3 gap-3">
                      {heroVisuals[activeSlide].metrics.map((metric) => (
                        <div key={metric.label} className="rounded-xl bg-white/10 p-3">
                          <div className="text-[10px] uppercase tracking-wider text-slate-300">{metric.label}</div>
                          <div className="mt-2 text-lg font-bold text-white">{metric.value}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="absolute bottom-5 left-5 right-5 space-y-4">
                    <div>
                      <div className="text-xs font-semibold uppercase tracking-[0.24em] text-cyan-200">
                        {heroVisuals[activeSlide].label}
                      </div>
                      <h3 className="mt-2 line-clamp-2 text-xl font-bold leading-tight text-white">
                        {heroVisuals[activeSlide].title}
                      </h3>
                    </div>
                    <div className="grid grid-cols-2 gap-2">
                      {heroVisuals[activeSlide].tags.map((tag) => (
                        <div key={tag} className="rounded-xl border border-white/10 bg-white/10 px-3 py-2 text-[11px] font-medium text-slate-100 backdrop-blur">
                          {tag}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </GlassCard>

              <div className="mt-5 flex flex-wrap justify-center gap-2">
                {heroVisuals.map((visual, index) => (
                  <button
                    key={visual.label}
                    onClick={() => setActiveSlide(index)}
                    className={`h-2 rounded-full transition-all ${activeSlide === index ? 'w-10 bg-cyan-300' : 'w-2 bg-white/40 hover:bg-white/70'}`}
                    aria-label={`Show ${visual.label}`}
                  />
                ))}
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      <section className="relative overflow-hidden border-y border-cyan-200/10 bg-slate-950 py-20 text-white sm:py-28">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_0%,rgba(20,184,166,0.26),transparent_30%),radial-gradient(circle_at_84%_20%,rgba(37,99,235,0.24),transparent_30%),linear-gradient(135deg,rgba(2,6,23,0.96),rgba(15,118,110,0.78),rgba(2,6,23,0.96))]" />

        {/* Map Background with Minimum Visibility */}
        <div
          className="absolute inset-0 bg-[url('/image/map.png')] bg-cover bg-center bg-no-repeat opacity-[0.06] pointer-events-none mix-blend-screen"
        />

        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <AnimatedSection as="div" className="mx-auto mb-16 max-w-3xl text-center">
            <p className="text-xs font-bold uppercase tracking-[0.28em] text-cyan-200">
              Trusted Engineering Delivery
            </p>
            <h2 className="mt-4 font-display text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
              Proven scale, digital capability, and global execution strength
            </h2>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Column 1 */}
            <div className="flex flex-col gap-8">
              {/* Card 1 - Established 2012 */}
              <div
                className="group relative w-full overflow-hidden transition-all duration-500 hover:-translate-y-1 hover:shadow-2xl hover:shadow-cyan-500/20 cursor-pointer animate-fade-in"
                style={{
                  clipPath: 'polygon(0 0, calc(100% - 24px) 0, 100% 24px, 100% 100%, 24px 100%, 0 calc(100% - 24px))',
                  height: '420px'
                }}
              >
                <Image
                  src={trustStats[0].image}
                  alt={trustStats[0].title}
                  fill
                  sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/45 to-transparent" />
                <div
                  className="absolute inset-0 border border-white/10 pointer-events-none"
                  style={{
                    clipPath: 'polygon(0 0, calc(100% - 24px) 0, 100% 24px, 100% 100%, 24px 100%, 0 calc(100% - 24px))'
                  }}
                />
                <div
                  className="absolute bottom-0 left-0 w-6 h-6 bg-cyan-500 transition-colors duration-300 group-hover:bg-cyan-400"
                  style={{
                    clipPath: 'polygon(0 100%, 100% 100%, 0 0)'
                  }}
                />
                <div
                  className="absolute top-0 right-0 w-6 h-6 bg-cyan-500 transition-colors duration-300 group-hover:bg-cyan-400"
                  style={{
                    clipPath: 'polygon(100% 0, 100% 100%, 0 0)'
                  }}
                />
                <div className="absolute bottom-6 left-6 right-6 z-10 flex flex-col justify-end">
                  <h3 className="font-display text-xl font-extrabold tracking-tight text-white sm:text-2xl drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">
                    {trustStats[0].title}
                  </h3>
                  <p className="mt-2 text-xs leading-relaxed text-slate-200 opacity-90 sm:text-sm drop-shadow-[0_1px_2px_rgba(0,0,0,0.8)]">
                    {trustStats[0].description}
                  </p>
                </div>
              </div>

              {/* Card 2 - 100+ Projects Delivered */}
              <div
                className="group relative w-full overflow-hidden transition-all duration-500 hover:-translate-y-1 hover:shadow-2xl hover:shadow-cyan-500/20 cursor-pointer"
                style={{
                  clipPath: 'polygon(0 0, calc(100% - 24px) 0, 100% 24px, 100% 100%, 24px 100%, 0 calc(100% - 24px))',
                  height: '280px'
                }}
              >
                <Image
                  src={trustStats[1].image}
                  alt={trustStats[1].title}
                  fill
                  sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/45 to-transparent" />
                <div
                  className="absolute inset-0 border border-white/10 pointer-events-none"
                  style={{
                    clipPath: 'polygon(0 0, calc(100% - 24px) 0, 100% 24px, 100% 100%, 24px 100%, 0 calc(100% - 24px))'
                  }}
                />
                <div
                  className="absolute bottom-0 left-0 w-6 h-6 bg-cyan-500 transition-colors duration-300 group-hover:bg-cyan-400"
                  style={{
                    clipPath: 'polygon(0 100%, 100% 100%, 0 0)'
                  }}
                />
                <div
                  className="absolute top-0 right-0 w-6 h-6 bg-cyan-500 transition-colors duration-300 group-hover:bg-cyan-400"
                  style={{
                    clipPath: 'polygon(100% 0, 100% 100%, 0 0)'
                  }}
                />
                <div className="absolute bottom-6 left-6 right-6 z-10 flex flex-col justify-end">
                  <h3 className="font-display text-xl font-extrabold tracking-tight text-white sm:text-2xl drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">
                    {trustStats[1].title}
                  </h3>
                  <p className="mt-2 text-xs leading-relaxed text-slate-200 opacity-90 sm:text-sm drop-shadow-[0_1px_2px_rgba(0,0,0,0.8)]">
                    {trustStats[1].description}
                  </p>
                </div>
              </div>
            </div>

            {/* Column 2 */}
            <div className="flex flex-col gap-8">
              {/* Card 3 - Global Delivery Model */}
              <div
                className="group relative w-full overflow-hidden transition-all duration-500 hover:-translate-y-1 hover:shadow-2xl hover:shadow-cyan-500/20 cursor-pointer"
                style={{
                  clipPath: 'polygon(0 0, calc(100% - 24px) 0, 100% 24px, 100% 100%, 24px 100%, 0 calc(100% - 24px))',
                  height: '280px'
                }}
              >
                <Image
                  src={trustStats[2].image}
                  alt={trustStats[2].title}
                  fill
                  sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/45 to-transparent" />
                <div
                  className="absolute inset-0 border border-white/10 pointer-events-none"
                  style={{
                    clipPath: 'polygon(0 0, calc(100% - 24px) 0, 100% 24px, 100% 100%, 24px 100%, 0 calc(100% - 24px))'
                  }}
                />
                <div
                  className="absolute bottom-0 left-0 w-6 h-6 bg-cyan-500 transition-colors duration-300 group-hover:bg-cyan-400"
                  style={{
                    clipPath: 'polygon(0 100%, 100% 100%, 0 0)'
                  }}
                />
                <div
                  className="absolute top-0 right-0 w-6 h-6 bg-cyan-500 transition-colors duration-300 group-hover:bg-cyan-400"
                  style={{
                    clipPath: 'polygon(100% 0, 100% 100%, 0 0)'
                  }}
                />
                <div className="absolute bottom-6 left-6 right-6 z-10 flex flex-col justify-end">
                  <h3 className="font-display text-xl font-extrabold tracking-tight text-white sm:text-2xl drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">
                    {trustStats[2].title}
                  </h3>
                  <p className="mt-2 text-xs leading-relaxed text-slate-200 opacity-90 sm:text-sm drop-shadow-[0_1px_2px_rgba(0,0,0,0.8)]">
                    {trustStats[2].description}
                  </p>
                </div>
              </div>

              {/* Card 4 - Multidisciplinary Engineering Teams */}
              <div
                className="group relative w-full overflow-hidden transition-all duration-500 hover:-translate-y-1 hover:shadow-2xl hover:shadow-cyan-500/20 cursor-pointer"
                style={{
                  clipPath: 'polygon(0 0, calc(100% - 24px) 0, 100% 24px, 100% 100%, 24px 100%, 0 calc(100% - 24px))',
                  height: '420px'
                }}
              >
                <Image
                  src={trustStats[3].image}
                  alt={trustStats[3].title}
                  fill
                  sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/45 to-transparent" />
                <div
                  className="absolute inset-0 border border-white/10 pointer-events-none"
                  style={{
                    clipPath: 'polygon(0 0, calc(100% - 24px) 0, 100% 24px, 100% 100%, 24px 100%, 0 calc(100% - 24px))'
                  }}
                />
                <div
                  className="absolute bottom-0 left-0 w-6 h-6 bg-cyan-500 transition-colors duration-300 group-hover:bg-cyan-400"
                  style={{
                    clipPath: 'polygon(0 100%, 100% 100%, 0 0)'
                  }}
                />
                <div
                  className="absolute top-0 right-0 w-6 h-6 bg-cyan-500 transition-colors duration-300 group-hover:bg-cyan-400"
                  style={{
                    clipPath: 'polygon(100% 0, 100% 100%, 0 0)'
                  }}
                />
                <div className="absolute bottom-6 left-6 right-6 z-10 flex flex-col justify-end">
                  <h3 className="font-display text-xl font-extrabold tracking-tight text-white sm:text-2xl drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">
                    {trustStats[3].title}
                  </h3>
                  <p className="mt-2 text-xs leading-relaxed text-slate-200 opacity-90 sm:text-sm drop-shadow-[0_1px_2px_rgba(0,0,0,0.8)]">
                    {trustStats[3].description}
                  </p>
                </div>
              </div>
            </div>

            {/* Column 3 */}
            <div className="flex flex-col gap-8">
              {/* Card 5 - AI & Digital Engineering Capability */}
              <div
                className="group relative w-full overflow-hidden transition-all duration-500 hover:-translate-y-1 hover:shadow-2xl hover:shadow-cyan-500/20 cursor-pointer"
                style={{
                  clipPath: 'polygon(0 0, calc(100% - 24px) 0, 100% 24px, 100% 100%, 24px 100%, 0 calc(100% - 24px))',
                  height: '420px'
                }}
              >
                <Image
                  src={trustStats[4].image}
                  alt={trustStats[4].title}
                  fill
                  sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/45 to-transparent" />
                <div
                  className="absolute inset-0 border border-white/10 pointer-events-none"
                  style={{
                    clipPath: 'polygon(0 0, calc(100% - 24px) 0, 100% 24px, 100% 100%, 24px 100%, 0 calc(100% - 24px))'
                  }}
                />
                <div
                  className="absolute bottom-0 left-0 w-6 h-6 bg-cyan-500 transition-colors duration-300 group-hover:bg-cyan-400"
                  style={{
                    clipPath: 'polygon(0 100%, 100% 100%, 0 0)'
                  }}
                />
                <div
                  className="absolute top-0 right-0 w-6 h-6 bg-cyan-500 transition-colors duration-300 group-hover:bg-cyan-400"
                  style={{
                    clipPath: 'polygon(100% 0, 100% 100%, 0 0)'
                  }}
                />
                <div className="absolute bottom-6 left-6 right-6 z-10 flex flex-col justify-end">
                  <h3 className="font-display text-xl font-extrabold tracking-tight text-white sm:text-2xl drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">
                    {trustStats[4].title}
                  </h3>
                  <p className="mt-2 text-xs leading-relaxed text-slate-200 opacity-90 sm:text-sm drop-shadow-[0_1px_2px_rgba(0,0,0,0.8)]">
                    {trustStats[4].description}
                  </p>
                </div>
              </div>

              {/* Card 6 - US + India Operations */}
              <div
                className="group relative w-full overflow-hidden transition-all duration-500 hover:-translate-y-1 hover:shadow-2xl hover:shadow-cyan-500/20 cursor-pointer"
                style={{
                  clipPath: 'polygon(0 0, calc(100% - 24px) 0, 100% 24px, 100% 100%, 24px 100%, 0 calc(100% - 24px))',
                  height: '280px'
                }}
              >
                <Image
                  src={trustStats[5].image}
                  alt={trustStats[5].title}
                  fill
                  sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/45 to-transparent" />
                <div
                  className="absolute inset-0 border border-white/10 pointer-events-none"
                  style={{
                    clipPath: 'polygon(0 0, calc(100% - 24px) 0, 100% 24px, 100% 100%, 24px 100%, 0 calc(100% - 24px))'
                  }}
                />
                <div
                  className="absolute bottom-0 left-0 w-6 h-6 bg-cyan-500 transition-colors duration-300 group-hover:bg-cyan-400"
                  style={{
                    clipPath: 'polygon(0 100%, 100% 100%, 0 0)'
                  }}
                />
                <div
                  className="absolute top-0 right-0 w-6 h-6 bg-cyan-500 transition-colors duration-300 group-hover:bg-cyan-400"
                  style={{
                    clipPath: 'polygon(100% 0, 100% 100%, 0 0)'
                  }}
                />
                <div className="absolute bottom-6 left-6 right-6 z-10 flex flex-col justify-end">
                  <h3 className="font-display text-xl font-extrabold tracking-tight text-white sm:text-2xl drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">
                    {trustStats[5].title}
                  </h3>
                  <p className="mt-2 text-xs leading-relaxed text-slate-200 opacity-90 sm:text-sm drop-shadow-[0_1px_2px_rgba(0,0,0,0.8)]">
                    {trustStats[5].description}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden border-b border-cyan-200/10 bg-slate-950 py-20 text-white sm:py-24">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_0%,rgba(20,184,166,0.26),transparent_30%),radial-gradient(circle_at_84%_20%,rgba(37,99,235,0.24),transparent_30%),linear-gradient(135deg,rgba(2,6,23,0.96),rgba(15,118,110,0.78),rgba(2,6,23,0.96))]" />

        {/* Map Background with Minimum Visibility */}
        <div
          className="absolute inset-0 bg-[url('/image/map.png')] bg-cover bg-center bg-no-repeat opacity-[0.06] pointer-events-none mix-blend-screen"
        />

        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-4">
            {/* Stat 1 */}
            <div className="flex flex-col justify-between">
              <div>
                <div className="font-display text-5xl font-extrabold tracking-tight text-cyan-300 sm:text-6xl">
                  <AnimatedCounter end={21700} suffix="+" />
                </div>
                <p className="mt-4 text-sm font-medium leading-relaxed text-slate-300 max-w-[250px]">
                  MW Renewable energy capacity across global markets
                </p>
              </div>
              <div className="mt-6 h-px w-full bg-cyan-200/10" />
            </div>

            {/* Stat 2 */}
            <div className="flex flex-col justify-between">
              <div>
                <div className="font-display text-5xl font-extrabold tracking-tight text-cyan-300 sm:text-6xl">
                  <AnimatedCounter end={10000} suffix="+" />
                </div>
                <p className="mt-4 text-sm font-medium leading-relaxed text-slate-300 max-w-[250px]">
                  Assets operating worldwide
                </p>
              </div>
              <div className="mt-6 h-px w-full bg-cyan-200/10" />
            </div>

            {/* Stat 3 */}
            <div className="flex flex-col justify-between">
              <div>
                <div className="font-display text-5xl font-extrabold tracking-tight text-cyan-300 sm:text-6xl">
                  <AnimatedCounter end={1900} suffix="+" />
                </div>
                <p className="mt-4 text-sm font-medium leading-relaxed text-slate-300 max-w-[250px]">
                  Clients across industries and markets
                </p>
              </div>
              <div className="mt-6 h-px w-full bg-cyan-200/10" />
            </div>

            {/* Stat 4 */}
            <div className="flex flex-col justify-between">
              <div>
                <div className="font-display text-5xl font-extrabold tracking-tight text-cyan-300 sm:text-6xl">
                  <AnimatedCounter end={17} />
                </div>
                <p className="mt-4 text-sm font-medium leading-relaxed text-slate-300 max-w-[250px]">
                  Countries connected through renewable energy ecosystems
                </p>
              </div>
              <div className="mt-6 h-px w-full bg-cyan-200/10" />
            </div>
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-slate-100 py-20 sm:py-28">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_12%_15%,rgba(14,165,233,0.16),transparent_32%),radial-gradient(circle_at_90%_28%,rgba(37,99,235,0.12),transparent_34%),linear-gradient(180deg,#f8fafc_0%,#eef4f8_100%)]" />
        <div className="absolute right-0 top-0 h-full w-1/2 blueprint-grid-fine opacity-50" />
        <div className="absolute left-8 top-16 hidden h-28 w-28 rounded-full border border-cyan-300/30 bg-cyan-200/10 blur-sm lg:block" />

        <AnimatedSection as="div" className="relative z-10 mx-auto grid max-w-7xl grid-cols-1 items-center gap-10 px-4 sm:px-6 lg:grid-cols-12 lg:px-8">
          <div className="lg:col-span-7">
            <div className="relative overflow-hidden rounded-[2.5rem] border border-white/80 bg-white/72 p-8 shadow-[0_30px_90px_rgba(15,23,42,0.10)] backdrop-blur-xl sm:p-10">
              <div className="pointer-events-none absolute -right-20 -top-20 h-52 w-52 rounded-full bg-cyan-300/20 blur-3xl" />
              <div className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-cyan-400/40 to-transparent" />

              <SectionHeading
                eyebrow="Who We Are"
                title="Engineering Expertise. Digital Intelligence. Global Delivery."
                description="GTS Engineering delivers multidisciplinary engineering, automation, digital transformation, and project execution services across the industrial asset lifecycle—from concept and FEED to commissioning and optimization."
                align="left"
              />

              <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center">
                <GradientButton href="/about">
                  About GTS
                </GradientButton>
                <div className="rounded-full border border-slate-200 bg-slate-100 px-4 py-2 text-xs font-bold uppercase tracking-[0.2em] text-slate-600">
                  Concept → Commissioning → Optimization
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="relative">
              <div className="absolute -inset-4 rounded-[2.75rem] bg-gradient-to-br from-cyan-300/24 via-blue-500/14 to-slate-950/10 blur-2xl" />
              <div className="relative rounded-[2.5rem] border border-slate-900/10 bg-slate-950 p-4 shadow-[0_36px_100px_rgba(15,23,42,0.28)]">
                <div className="rounded-[2rem] border border-white/10 bg-[linear-gradient(145deg,rgba(15,23,42,0.98),rgba(30,41,59,0.88))] p-4">
                  <div className="mb-4 flex items-center justify-between rounded-2xl border border-white/10 bg-white/[0.06] px-4 py-3">
                    <div>
                      <p className="text-[10px] font-mono uppercase tracking-[0.24em] text-cyan-200">
                        Capability Map
                      </p>
                      <p className="mt-1 text-sm font-semibold text-white">
                        Integrated engineering delivery
                      </p>
                    </div>
                    <span className="h-2.5 w-2.5 rounded-full bg-cyan-300 shadow-[0_0_18px_rgba(34,211,238,0.85)]" />
                  </div>

                  <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-2">
                    {whoWeAreHighlights.map(({ title, text, icon }) => (
                      <MagneticCard
                        key={title}
                        intensity={444}
                        className="group rounded-2xl border-white/10 bg-white/[0.07] p-5 shadow-none"
                      >
                        <div
                          style={{
                            WebkitMaskImage: `url('${icon}')`,
                            maskImage: `url('${icon}')`,
                            WebkitMaskRepeat: 'no-repeat',
                            maskRepeat: 'no-repeat',
                            WebkitMaskPosition: 'center',
                            maskPosition: 'center',
                            WebkitMaskSize: 'contain',
                            maskSize: 'contain',
                          }}
                          className="w-12 h-12 bg-gradient-to-br from-[#2563eb] to-[#22d3ee] transition-all duration-300 group-hover:scale-110 drop-shadow-[0_2px_8px_rgba(34,211,238,0.3)]"
                        />
                        <div className="mt-5 text-2xl font-extrabold text-white">{title}</div>
                        <p className="mt-2 text-xs leading-relaxed text-slate-300">{text}</p>
                      </MagneticCard>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </AnimatedSection>
      </section>

      <section id="solutions" className="relative scroll-mt-32 overflow-hidden bg-white py-20 sm:py-28">
        <div className="absolute inset-0 bg-[url('/image/background.jpg')] bg-cover bg-center bg-no-repeat opacity-100" />
        <div className="absolute inset-0 bg-white/72" />
        <AnimatedSection as="div" className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Our Solution Areas"
            title="Multidisciplinary engineering capabilities for industrial transformation"
            description="Six integrated solution areas position GTS as a complete engineering, automation, AI, and industrial technology partner."
          />

          <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
            {solutionAreas.map((area) => {
              const iconUrl = area.icon;

              return (
                <MagneticCard
                  id={area.id}
                  key={area.id}
                  className="group scroll-mt-36 rounded-[1.75rem] border border-slate-200 bg-white p-7 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-accent/40 hover:shadow-xl hover:shadow-blue-100/70"
                >
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex items-center justify-center h-14 w-14">
                      <div
                        style={{
                          WebkitMaskImage: `url('${iconUrl}')`,
                          maskImage: `url('${iconUrl}')`,
                          WebkitMaskRepeat: 'no-repeat',
                          maskRepeat: 'no-repeat',
                          WebkitMaskPosition: 'center',
                          maskPosition: 'center',
                          WebkitMaskSize: 'contain',
                          maskSize: 'contain',
                        }}
                        className="w-15 h-15 bg-gradient-to-br from-[#2563eb] to-[#22d3ee] transition-all duration-300 group-hover:scale-110 drop-shadow-[0_3px_12px_rgba(34,211,238,0.4)]"
                      />
                    </div>
                    <span className="text-xs font-mono uppercase tracking-[0.2em] text-slate-300">Solution</span>
                  </div>
                  <h3 className="mt-6 text-xl font-extrabold text-primary">{area.title}</h3>
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

      <section id="ai-digital" className="scroll-mt-32 overflow-hidden bg-slate-950 py-20 text-white sm:py-28">
        <AnimatedSection as="div" className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 px-4 sm:px-6 lg:grid-cols-12 lg:px-8">
          <div className="lg:col-span-6">
            <SectionHeading
              eyebrow="AI & Digital Transformation"
              title="Engineering Intelligence for Industry 4.0"
              description="Premium digital engineering programs that combine AI analytics, asset intelligence, automation, and operational data to improve reliability and decision speed."
              align="left"
              theme="dark"
            />
            <div className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-2">
              {digitalCapabilities.map((capability) => (
                <div key={capability} className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 p-4">
                  <CheckCircle2 className="h-5 w-5 shrink-0 text-green-500" />
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
                    ['OEE', '91%'],
                    ['Risk', 'Low'],
                    ['MTBF', '+18%']
                  ].map(([label, value]) => (
                    <div key={label} className="rounded-2xl border border-white/10 bg-slate-950/55 p-4 backdrop-blur">
                      <div className="text-[10px] uppercase tracking-[0.2em] text-slate-400">{label}</div>
                      <div className="mt-2 text-2xl font-extrabold text-cyan-200">{value}</div>
                    </div>
                  ))}
                </div>
                <div className="absolute bottom-5 left-5 right-5 rounded-2xl border border-cyan-200/20 bg-slate-950/65 p-5 backdrop-blur">
                  <div className="mb-4 flex items-center justify-between">
                    <span className="text-xs font-mono uppercase tracking-[0.24em] text-cyan-200">Industrial AI Dashboard</span>
                    <span className="rounded-full bg-cyan-300/15 px-3 py-1 text-xs text-cyan-100">Digital Twin Online</span>
                  </div>
                  <div className="space-y-3">
                    {['Predict compressor anomaly', 'Optimize energy load', 'Prioritize maintenance window'].map((item, index) => (
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
      <section id="industries-served" className="scroll-mt-32 bg-slate-50 py-20 sm:py-28 relative overflow-hidden transition-colors duration-500">
        {/* Dynamic Vertical Accordion Background */}
        <div className="absolute inset-0 w-full h-full flex overflow-hidden pointer-events-none z-0">
          {industriesServed.map((industry, index) => {
            const isHovered = hoveredIndustryIndex === index;
            const isAnyHovered = hoveredIndustryIndex !== null;

            let flexStyle = '1 1 0%';
            let opacityStyle = 0.8;

            if (isAnyHovered) {
              if (isHovered) {
                flexStyle = '100 1 0%';
                opacityStyle = 1;
              } else {
                flexStyle = '0 0 0%';
                opacityStyle = 0;
              }
            }

            return (
              <div
                key={industry.title}
                style={{
                  backgroundImage: `url('${industry.bgImage}')`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  flex: flexStyle,
                  opacity: opacityStyle,
                }}
                className="h-full transition-all duration-700 ease-in-out border-r border-slate-200/50 last:border-r-0"
              />
            );
          })}
        </div>

        {/* Backdrop overlay for text contrast */}
        <div className="absolute inset-0 bg-white/10 pointer-events-none z-0" />

        <AnimatedSection as="div" className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Industries Served"
            title="Industrial sectors supported by GTS delivery teams"
          />
          <div className="mx-auto mt-4 max-w-2xl rounded-2xl bg-white/85 backdrop-blur-md px-6 py-3 shadow-sm border border-slate-200/50 text-center mb-10">
            <p className="text-sm leading-7 text-slate-600 sm:text-base">
              GTS supports asset owners, OEMs, EPC teams, and technology programs across energy, infrastructure, manufacturing, transportation, and heavy industry.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {industriesServed.map((industry, index) => {
              const iconUrl = industry.icon;

              return (
                <MagneticCard
                  key={industry.title}
                  intensity={5}
                  className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md cursor-pointer"
                  onMouseEnter={() => setHoveredIndustryIndex(index)}
                  onMouseLeave={() => setHoveredIndustryIndex(null)}
                >
                  <div className="flex items-center gap-4">
                    <div className="flex items-center justify-center h-10 w-10 shrink-0">
                      <div
                        style={{
                          WebkitMaskImage: `url('${iconUrl}')`,
                          maskImage: `url('${iconUrl}')`,
                          WebkitMaskRepeat: 'no-repeat',
                          maskRepeat: 'no-repeat',
                          WebkitMaskPosition: 'center',
                          maskPosition: 'center',
                          WebkitMaskSize: 'contain',
                          maskSize: 'contain',
                        }}
                        className="w-7 h-7 bg-gradient-to-br from-[#2563eb] to-[#22d3ee] transition-all duration-300 group-hover:scale-110 drop-shadow-[0_2px_8px_rgba(34,211,238,0.3)]"
                      />
                    </div>
                    <div className="text-sm font-extrabold text-primary leading-tight">{industry.title}</div>
                  </div>
                </MagneticCard>
              );
            })}
          </div>
        </AnimatedSection>
      </section>
      <section className="bg-white py-20 sm:py-28">
        <AnimatedSection as="div" className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Engineering Capabilities"
            title="Interactive capability map across core disciplines"
            description="Select a discipline to see how GTS maps engineering teams, deliverables, and digital workflows around industrial project needs."
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
                    className={`flex items-center gap-3 rounded-2xl border p-4 text-left transition-all ${isActive
                      ? 'border-accent bg-accent text-white shadow-lg shadow-blue-100'
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
              <div className="h-full rounded-[2rem] border border-slate-200 bg-slate-950 p-8 text-white shadow-xl shadow-slate-200">
                <div className="flex items-center gap-4">
                  <div className="rounded-2xl bg-cyan-300/15 p-4 text-cyan-200">
                    <ActiveCapabilityIcon className="h-8 w-8" />
                  </div>
                  <div>
                    <div className="text-xs font-mono uppercase tracking-[0.24em] text-cyan-200">Selected Discipline</div>
                    <h3 className="mt-1 text-3xl font-extrabold">{selectedCapability.name}</h3>
                  </div>
                </div>
                <p className="mt-6 text-sm leading-7 text-slate-300">{selectedCapability.summary}</p>
                <div className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-2">
                  {selectedCapability.deliverables.map((deliverable) => (
                    <div key={deliverable} className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 p-4">
                      <CheckCircle2 className="h-5 w-5 shrink-0 text-green-500" />
                      <span className="text-sm font-semibold text-slate-100">{deliverable}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </AnimatedSection>
      </section>

      <section className="bg-slate-50 py-20 sm:py-28">
        <AnimatedSection as="div" className="mx-auto grid max-w-7xl grid-cols-1 gap-12 px-4 sm:px-6 lg:grid-cols-12 lg:px-8">
          <div className="lg:col-span-5">
            <SectionHeading
              eyebrow="Process Safety & EPC"
              title="Process Safety & Project Execution"
              description="GTS combines process safety, asset integrity, and project delivery controls so industrial programs can move from engineering definition to execution with stronger risk visibility."
              align="left"
            />
          </div>
          <div className="lg:col-span-7">
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
              {processSafetyItems.map((item) => (
                <MagneticCard key={item} intensity={4} className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
                  <ShieldCheck className="h-5 w-5 text-accent text-red-500" />
                  <div className="mt-4 text-sm font-extrabold text-primary">{item}</div>
                </MagneticCard>
              ))}
            </div>
          </div>
        </AnimatedSection>
      </section>

      <section id="featured-projects" className="scroll-mt-32 bg-white py-20 sm:py-28">
        <AnimatedSection as="div" className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Featured Projects"
            title="Representative project types delivered by GTS teams"
            description="Project cards focus on the type of engineering outcomes industrial buyers recognize: plants, terminals, offshore systems, pipelines, steel packages, products, simulation, and automation."
          />
          <div className="mt-14 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-4">
            {featuredProjects.map((project, index) => (
              <MagneticCard key={project} className="group rounded-[1.5rem] border border-slate-200 bg-slate-50 p-6 transition-all hover:-translate-y-1 hover:bg-primary hover:text-white hover:shadow-xl hover:shadow-slate-200">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-sm font-extrabold text-accent ring-1 ring-slate-200 group-hover:bg-white/10 group-hover:text-cyan-200 group-hover:ring-white/15">
                  {index + 1}
                </div>
                <h3 className="mt-6 text-lg font-extrabold text-primary group-hover:text-white">{project}</h3>
                <p className="mt-3 text-xs leading-relaxed text-slate-500 group-hover:text-slate-300">
                  Scope-driven engineering delivery with discipline coordination, documentation, validation, and project controls.
                </p>
              </MagneticCard>
            ))}
          </div>
        </AnimatedSection>
      </section>

      <section className="bg-slate-950 py-20 text-white sm:py-28">
        <AnimatedSection as="div" className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Software & Technology Expertise"
            title="Engineering platforms used across plant, product, simulation, structural, and digital programs"
            description="Tool familiarity helps GTS integrate quickly with client engineering stacks while supporting robust delivery workflows."
            theme="dark"
          />
          <div className="mt-14 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-5">
            {softwareExpertise.map((stack) => (
              <GlassCard key={stack.category} tone="dark" className="rounded-[1.5rem] p-6">
                <div className="text-xs font-mono uppercase tracking-[0.22em] text-cyan-200">{stack.category}</div>
                <p className="mt-5 text-sm font-semibold leading-7 text-white">{stack.tools}</p>
              </GlassCard>
            ))}
          </div>
        </AnimatedSection>
      </section>

      <section className="bg-white py-20 sm:py-28">
        <AnimatedSection as="div" className="mx-auto grid max-w-7xl grid-cols-1 gap-12 px-4 sm:px-6 lg:grid-cols-12 lg:px-8">
          <div className="lg:col-span-5">
            <SectionHeading
              eyebrow="Why GTS"
              title="Why Global Industries Choose GTS"
              description="GTS brings engineering depth, delivery agility, digital capability, and project execution discipline into one scalable partner model."
              align="left"
            />
          </div>
          <div className="lg:col-span-7">
            <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
              {whyGts.map((reason) => (
                <MagneticCard
                  key={reason}
                  intensity={3}
                  className="flex items-start gap-3 rounded-2xl border border-slate-200 bg-slate-50 p-4"
                >
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-green-500" />
                  <span className="text-sm font-bold text-slate-800">{reason}</span>
                </MagneticCard>
              ))}
            </div>
          </div>
        </AnimatedSection>
      </section>

      <section className="bg-slate-50 py-20 sm:py-28">
        <AnimatedSection as="div" className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Clients & Certifications"
            title="Trusted delivery systems for industrial engineering programs"
            description="Client logos, certifications, quality systems, and technology partnerships can be placed here as approved assets become available."
          />
          <div className="mt-14 grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-6">
            {clientSignals.map((signal) => (
              <MagneticCard key={signal} intensity={3} className="flex min-h-28 items-center justify-center rounded-2xl border border-dashed border-slate-300 bg-white p-4 text-center text-xs font-bold uppercase tracking-wide text-slate-500">
                {signal}
              </MagneticCard>
            ))}
          </div>
          <div className="mt-6 grid grid-cols-1 gap-4 md:grid-cols-4">
            {qualitySignals.map((signal) => (
              <MagneticCard key={signal} intensity={3} className="rounded-2xl border border-slate-200 bg-white p-5 text-center shadow-sm">
                <ShieldCheck className="mx-auto h-6 w-6 text-accent text-red-500" />
                <div className="mt-3 text-sm font-extrabold text-primary">{signal}</div>
              </MagneticCard>
            ))}
          </div>
        </AnimatedSection>
      </section>

      <section className="bg-primary py-20 text-white sm:py-28">
        <AnimatedSection as="div" className="mx-auto grid max-w-7xl grid-cols-1 gap-12 px-4 sm:px-6 lg:grid-cols-12 lg:px-8">
          <div className="lg:col-span-5">
            <SectionHeading
              eyebrow="Contact / Consultation"
              title="Let's Engineer the Future Together"
              description="Share your industry, service area, project type, and budget range so the right engineering team can respond with focused next steps."
              align="left"
              theme="dark"
            />
          </div>

          <div className="lg:col-span-7">
            <form action="/contact" method="get" className="rounded-[2rem] border border-white/10 bg-white p-6 text-slate-900 shadow-2xl shadow-slate-950/30 sm:p-8">
              <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                <label className="space-y-2 text-sm font-bold text-slate-800">
                  <span>Industry</span>
                  <select name="industry" defaultValue="" className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm font-medium outline-none transition focus:border-accent focus:bg-white">
                    <option value="" disabled>Choose industry</option>
                    {industriesServed.map((industry) => (
                      <option key={industry.title} value={industry.title}>{industry.title}</option>
                    ))}
                  </select>
                </label>

                <label className="space-y-2 text-sm font-bold text-slate-800">
                  <span>Service Area</span>
                  <select name="service_area" defaultValue="" className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm font-medium outline-none transition focus:border-accent focus:bg-white">
                    <option value="" disabled>Choose service area</option>
                    {solutionAreas.map((area) => (
                      <option key={area.id} value={area.title}>{area.title}</option>
                    ))}
                  </select>
                </label>

                <label className="space-y-2 text-sm font-bold text-slate-800">
                  <span>Project Type</span>
                  <select name="project_type" defaultValue="" className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm font-medium outline-none transition focus:border-accent focus:bg-white">
                    <option value="" disabled>Choose project type</option>
                    {featuredProjects.map((project) => (
                      <option key={project} value={project}>{project}</option>
                    ))}
                  </select>
                </label>

                <label className="space-y-2 text-sm font-bold text-slate-800">
                  <span>Budget Range</span>
                  <select name="budget_range" defaultValue="" className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm font-medium outline-none transition focus:border-accent focus:bg-white">
                    <option value="" disabled>Choose budget range</option>
                    <option value="under-25k">Under $25k</option>
                    <option value="25k-100k">$25k - $100k</option>
                    <option value="100k-500k">$100k - $500k</option>
                    <option value="500k-plus">$500k+</option>
                    <option value="to-be-defined">To be defined</option>
                  </select>
                </label>
              </div>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <GradientButton type="submit" className="flex-1">
                  Request Consultation
                </GradientButton>
                <Link href="/downloads" className="inline-flex flex-1 items-center justify-center rounded-xl border border-slate-200 bg-slate-50 px-6 py-3 text-sm font-bold text-slate-800 transition hover:border-accent/40 hover:text-accent">
                  Download Capability Statement
                </Link>
              </div>
            </form>
          </div>
        </AnimatedSection>
      </section>
    </div>
  );
}
