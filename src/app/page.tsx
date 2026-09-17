'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import type { LucideIcon } from 'lucide-react';
import {
  ArrowRight,
  BarChart,
  Box,
  BrainCircuit,
  Building2,
  Calendar,
  Check,
  CheckCircle2,
  Clock,
  Code,
  Cog,
  Cpu,
  Database,
  Factory,
  FileText,
  Globe,
  Grid,
  Handshake,
  Layers,
  Map,
  MapPin,
  Monitor,
  Radio,
  RotateCw,
  Settings,
  ShieldCheck,
  Ship,
  Sliders,
  Smartphone,
  TrendingUp,
  Users,
  X,
  Zap
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
    image: '/image/engineering-excellence-2012.png',
    description:
      'More than a decade of delivering multidisciplinary engineering solutions for industrial clients through innovation, digital engineering, and execution excellence.'
  },
  {
    title: '100+ Projects Delivered',
    image: '/image/100project-delivered.png',
    description:
      'Successfully supporting FEED, detailed engineering, EPC, brownfield expansions, and digital transformation projects across multiple industries.'
  },
  {
    title: 'Global Delivery Model',
    image: '/image/globalenginerringdelivery.png',
    description:
      'Integrated project leadership from the United States with scalable engineering execution through global delivery centers and digital collaboration. This is a much stronger trust signal than a generic map. Global delivery and visible trust signals should be prominent where buyers evaluate capabilities.'
  },
  {
    title: 'Multidisciplinary Engineering Teams',
    image: '/image/multidisciplinary-engineering-teams.png',
    description:
      'Integrated engineering teams collaborate across all major disciplines to deliver coordinated, constructible, and digitally enabled engineering solutions.'
  },
  {
    title: 'AI & Digital Engineering Capability',
    image: '/image/AI-Enabled-digital-engineering.png',
    description:
      'AI-assisted engineering workflows, digital twins, engineering analytics, and simulation technologies improve quality, accelerate schedules, and reduce project risk.'
  },
  {
    title: 'US + India Operations',
    image: '/image/USA-India Engineering Operations.png',
    description:
      'Combining USA project leadership with global engineering execution to provide responsive, scalable, and cost-effective engineering support.'
  }
];

const whoWeAreTrustStats = [
  { value: '100+', label: 'Engineering Professionals', icon: Users },
  { value: '100+', label: 'Projects Delivered', icon: FileText },
  { value: '15+', label: 'Industries Supported', icon: Cog },
  { value: 'USA + India', label: 'Delivery Centers', icon: Globe },
  { value: '24/7', label: 'Engineering Collaboration', icon: Clock },
  { value: 'Trusted', label: 'Quality, Safety & Compliance', icon: ShieldCheck }
];

const engineeringPillars = [
  { title: 'Multi-Discipline', subtitle: 'Expertise', icon: Users },
  { title: 'Faster', subtitle: 'Project Delivery', icon: Zap },
  { title: 'Cost', subtitle: 'Optimization', icon: TrendingUp },
  { title: 'Reduced', subtitle: 'Project Risk', icon: ShieldCheck },
  { title: 'Sustainable', subtitle: 'Industrial Growth', icon: Globe }
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
    id: 'plant-engineering',
    title: 'Plant Engineering',
    shortDesc: 'Process, piping, mechanical, electrical, instrumentation and EPC support.',
    fullDesc:
      'End-to-end engineering solutions for process plants, refineries, LNG, power, chemicals, and industrial facilities, delivered with accuracy, efficiency, and industry expertise.',
    image: '/image/Global-Delivery-Model.jpg',
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
      { label: '100+', sublabel: 'Projects Delivered' },
      { label: '20+', sublabel: 'Years Experience' },
      { label: 'Global', sublabel: 'Project Support' }
    ]
  },
  {
    id: 'product-engineering',
    title: 'Product Engineering',
    shortDesc: 'CAD, CAE, reverse engineering, equipment design, and manufacturing support.',
    fullDesc:
      'Mechanical design, product development, reverse engineering, and manufacturing support for industrial equipment and systems.',
    image: '/image/Global-Delivery-Model.jpg',
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
    image: '/image/Global-Delivery-Model.jpg',
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
    shortDesc: 'AI workflows, digital twins, BIM, engineering analytics, and automation.',
    fullDesc:
      'AI-enabled engineering workflows, digital twins, BIM, engineering analytics, and data intelligence for smarter, faster, and more efficient project delivery.',
    image: '/image/Global-Delivery-Model.jpg',
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
    shortDesc: 'FEA, CFD, thermal analysis, vibration, and multi-physics simulation.',
    fullDesc:
      'Advanced engineering simulation including structural, thermal, CFD, fatigue, vibration, and multi-physics analysis to improve performance, safety, and reliability.',
    image: '/image/Global-Delivery-Model.jpg',
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
    image: '/image/Global-Delivery-Model.jpg',
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
    shortDesc: 'Civil, infrastructure, 3D modeling, construction coordination, and digital project delivery.',
    fullDesc:
      'Civil, infrastructure, and BIM solutions including 3D modeling, construction coordination, and digital project delivery for industrial and infrastructure projects.',
    image: '/image/Global-Delivery-Model.jpg',
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
    image: '/image/Global-Delivery-Model.jpg',
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
    shortDesc: 'Brownfield engineering, debottlenecking, operations support, and sustainability solutions.',
    fullDesc:
      'Lifecycle engineering solutions to maximize asset performance, reliability, and sustainability from operations through decommissioning.',
    image: '/image/Global-Delivery-Model.jpg',
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
                    AI & Digital Engineering
                  </h3>
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
                    Multidisciplinary Teams
                  </h3>
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

      {/* =========================================================
          ENGINEERING SOLUTIONS & INTRO SECTION (Matching Mockup)
      ========================================================= */}
      <section className="relative overflow-hidden border-y border-slate-200/80 bg-white py-16 sm:py-20 lg:py-24 text-slate-900">
        {/* Background Image: Clear on left, smooth gradient fade to white on right */}
        <div className="absolute inset-0 pointer-events-none select-none z-0">
          <Image
            src="/image/OUR ENGINEERING SOLUTION.jpg"
            alt="Engineering Solutions Background"
            fill
            sizes="100vw"
            className="object-cover object-left-bottom"
            priority={false}
          />
          {/* Subtle top/bottom edge fade to seamlessly blend into adjacent sections */}
          <div className="absolute inset-0 bg-gradient-to-b from-white/30 via-transparent to-white/40 pointer-events-none" />

          {/* Smooth Horizontal Gradient: Clear on left, fading smoothly into solid white on the right */}
          {/* On Desktop (lg): Left 0-20% is clear, 20-50% fades smoothly into white, 56%+ is pure solid white */}
          <div className="absolute inset-0 hidden lg:block bg-[linear-gradient(to_right,transparent_0%,transparent_18%,rgba(255,255,255,0.35)_30%,rgba(255,255,255,0.85)_44%,#ffffff_56%,#ffffff_100%)] pointer-events-none" />
          {/* On Tablet (sm to lg): Horizontal fade adjusted for narrower width */}
          <div className="absolute inset-0 hidden sm:block lg:hidden bg-[linear-gradient(to_right,transparent_0%,transparent_12%,rgba(255,255,255,0.45)_26%,rgba(255,255,255,0.92)_42%,#ffffff_56%,#ffffff_100%)] pointer-events-none" />
          {/* On Mobile (<sm): Vertical fade so intro has plant background and cards below have clean white */}
          <div className="absolute inset-0 sm:hidden bg-[linear-gradient(to_bottom,transparent_0%,transparent_15%,rgba(255,255,255,0.45)_28%,rgba(255,255,255,0.95)_45%,#ffffff_58%,#ffffff_100%)] pointer-events-none" />
        </div>

        <div className="relative z-10 mx-auto max-w-[1520px] px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-8 items-start">
            
            {/* Left Column: Intro & Trust Signals (lg:col-span-4) */}
            <div className="relative flex flex-col justify-between pr-0 lg:pr-6 lg:col-span-4">
              <div>
                {/* Eyebrow */}
                <div className="inline-flex items-center gap-2.5">
                  <span className="font-mono text-xs font-bold uppercase tracking-[0.24em] text-blue-600">
                    WHO WE ARE
                  </span>
                  <span className="h-[2px] w-8 rounded-full bg-blue-500/80" />
                </div>

                {/* Heading */}
                <h2 className="mt-4 font-display text-3xl sm:text-4xl lg:text-[40px] font-extrabold leading-[1.12] tracking-tight text-slate-900">
                  Engineering <br />
                  Expertise. <br />
                  Digital Innovation. <br />
                  <span className="text-blue-600">Global Impact.</span>
                </h2>

                {/* Description */}
                <p className="mt-5 text-xs sm:text-sm leading-relaxed text-slate-700 font-normal">
                  GTS Engineering delivers multidisciplinary engineering, AI-enabled digital solutions, and project execution services across the industrial asset lifecycle — from concept and FEED to commissioning, operations, and optimization.
                </p>

                {/* 6 Trust Signals list */}
                <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-3.5">
                  {whoWeAreTrustStats.map((item) => {
                    const ItemIcon = item.icon;
                    return (
                      <div key={item.label} className="flex items-center gap-3.5 rounded-xl border border-slate-200/80 bg-white/90 p-2.5 shadow-xs transition-all hover:border-blue-200 hover:shadow backdrop-blur-xs">
                        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-blue-600 border border-blue-100/80 shadow-xs">
                          <ItemIcon className="h-5 w-5" />
                        </div>
                        <div className="min-w-0">
                          <div className="text-sm font-extrabold text-slate-900 leading-none">{item.value}</div>
                          <div className="text-xs text-slate-500 font-medium mt-1 leading-tight">{item.label}</div>
                        </div>
                      </div>
                    );
                  })}
                </div>

                {/* Vertical Taglines */}
                <div className="mt-8 flex items-stretch gap-3.5">
                  <div className="w-[3px] rounded-full bg-blue-600 shrink-0" />
                  <div className="flex flex-col space-y-1 font-mono text-[11px] font-bold tracking-[0.24em] text-slate-600 uppercase">
                    <span>PEOPLE</span>
                    <span>TECHNOLOGY</span>
                    <span>SOLUTIONS</span>
                    <span>GLOBAL IMPACT</span>
                  </div>
                </div>
              </div>

              {/* Bottom Industrial Brand Line */}
              <div className="mt-10 pt-6 border-t border-slate-300/60">
                <span className="font-mono text-[10px] font-bold uppercase tracking-[0.28em] text-slate-600">
                  ENGINEERING A SMARTER TOMORROW
                </span>
              </div>
            </div>

            {/* Right Column: 3x3 Engineering Solutions Grid (lg:col-span-8) */}
            <div className="lg:col-span-8 rounded-3xl border border-slate-200/80 bg-white/95 p-5 sm:p-7 shadow-[0_4px_24px_rgba(15,23,42,0.03)] backdrop-blur-sm">
              {/* Header Bar */}
              <div className="flex items-center justify-between pb-4 border-b border-slate-200/80">
                <div className="inline-flex items-center gap-2.5">
                  <span className="font-mono text-xs font-bold uppercase tracking-[0.22em] text-blue-600">
                    OUR ENGINEERING SOLUTIONS
                  </span>
                  <span className="h-[2px] w-8 rounded-full bg-blue-500/80" />
                </div>
                <Link
                  href="/solutions"
                  className="group inline-flex items-center gap-1.5 text-xs font-bold font-mono uppercase tracking-wider text-blue-600 hover:text-blue-700 transition-colors"
                >
                  <span>EXPLORE ALL SOLUTIONS</span>
                  <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                </Link>
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
                      className={`group relative flex flex-col justify-between rounded-2xl border bg-white p-3.5 sm:p-4 text-left shadow-[0_2px_10px_rgba(15,23,42,0.03)] transition-all duration-300 hover:-translate-y-1 hover:shadow-lg cursor-pointer ${
                        isSelected
                          ? 'border-blue-600 ring-4 ring-blue-500/10 shadow-blue-100'
                          : 'border-slate-200/80 hover:border-blue-300'
                      }`}
                    >
                      {/* Card Thumbnail Image with Floating Icon Badge */}
                      <div className="relative h-32 sm:h-36 w-full rounded-xl overflow-hidden mb-3.5 bg-slate-100">
                        <Image
                          src={sol.image}
                          alt={sol.title}
                          fill
                          sizes="(min-width: 1024px) 25vw, 50vw"
                          className="object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/40 via-transparent to-transparent" />
                        {/* Floating Icon Badge */}
                        <div className="absolute bottom-2.5 left-2.5 flex h-9 w-9 items-center justify-center rounded-xl bg-white shadow-md border border-slate-100 text-blue-600 transition-transform group-hover:scale-110">
                          <SolIcon className="h-5 w-5" />
                        </div>
                      </div>

                      {/* Title and Short Description */}
                      <div className="flex-1 flex flex-col justify-between">
                        <div className="flex items-start justify-between gap-2">
                          <h3 className="font-bold text-slate-900 text-[14px] sm:text-[15px] leading-snug group-hover:text-blue-600 transition-colors">
                            {sol.title}
                          </h3>
                          <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-blue-50 text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                            <ArrowRight className="h-3.5 w-3.5" />
                          </span>
                        </div>
                        <p className="mt-2 text-[11px] sm:text-xs text-slate-500 leading-relaxed line-clamp-2">
                          {sol.shortDesc}
                        </p>
                      </div>
                    </button>
                  );
                })}
              </div>

              {/* Bottom 5-Pillar Highlights Bar */}
              <div className="mt-8 pt-5 border-t border-slate-200/80 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3.5">
                {engineeringPillars.map((hl) => {
                  const HlIcon = hl.icon;
                  return (
                    <div key={hl.title} className="flex items-center gap-2.5">
                      <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-blue-600 border border-blue-100/70">
                        <HlIcon className="h-4 w-4" />
                      </div>
                      <div className="min-w-0">
                        <span className="block text-xs font-bold text-slate-900 leading-tight">{hl.title}</span>
                        <span className="block text-[10px] text-slate-500 font-medium leading-tight">{hl.subtitle}</span>
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
                <div className="relative h-full w-full rounded-full overflow-hidden [mask-image:radial-gradient(circle_at_center,black_45%,transparent_75%)]">
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
