'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {
  Activity,
  Anchor,
  ArrowRight,
  BarChart,
  Bot,
  Box,
  Building2,
  Check,
  CheckCircle2,
  ChevronLeft,
  ChevronRight,
  Clock,
  Cog,
  Cpu,
  Factory,
  FileCheck,
  FileText,
  FlaskConical,
  Gauge,
  GitBranch,
  Globe,
  Layers,
  Leaf,
  ShieldCheck,
  Ship,
  Sliders,
  Sparkles,
  Users,
  Zap
} from 'lucide-react';
import { AnimatedSection, MagneticCard } from '@/components/ui';

export interface DisciplineData {
  id: string;
  name: string;
  shortName: string;
  sidebarSubtitle: string;
  icon: React.ComponentType<{ className?: string }>;
  tagline: string;
  subTagline: string;
  summary: string;
  bannerText: string;
  image: string;
  hotspots: Array<{ label: string; position: { top: string; left: string } }>;
  keyServices: string[];
  deliverables: string[];
  software: Array<{ brand: string; name: string; color?: string }>;
  workflow: string[];
  stats: {
    projects: string;
    experience: string;
  };
  industries: string[];
  projects: Array<{ title: string; location: string; highlight: string }>;
}

export const disciplinesData: DisciplineData[] = [
  {
    id: 'process',
    name: 'Process Engineering',
    shortName: 'Process',
    sidebarSubtitle: 'Process design & FEED',
    icon: FlaskConical,
    tagline: 'FROM CONCEPT TO REALITY',
    subTagline: 'Safe. Efficient. Sustainable.',
    summary:
      'End-to-end process engineering solutions for process plants, refineries, LNG, power, chemicals, and industrial facilities, delivered with accuracy, efficiency, and industry expertise.',
    bannerText: 'From Concept to Reality',
    image: '/image/OUR ENGINEERING SOLUTION.jpg',
    hotspots: [
      { label: 'Process Design', position: { top: '15%', left: '15%' } },
      { label: 'Simulation', position: { top: '22%', left: '68%' } },
      { label: 'P&ID Development', position: { top: '48%', left: '12%' } },
      { label: 'Equipment Sizing', position: { top: '42%', left: '70%' } },
      { label: 'Safety Studies', position: { top: '72%', left: '18%' } },
      { label: 'Utility Systems', position: { top: '65%', left: '72%' } }
    ],
    keyServices: [
      'Process Design (FEED & Detailed)',
      'PFD, P&ID and Process Simulation',
      'Process Safety (HAZOP, SIL, LOPA)',
      'Heat & Mass Balance',
      'Equipment Sizing & Specification',
      'Utility Systems Design',
      'Process Optimization & Debottlenecking',
      'EPC Support & Commissioning Assistance'
    ],
    deliverables: [
      'Process Basis of Design (BOD)',
      'PFD / P&ID / UFD',
      'Process Simulation Reports',
      'Equipment Datasheets',
      'Line Lists & Plot Plans',
      'HAZOP / SIL / Safety Studies',
      'Process Design Calculations',
      'Design Philosophy & Specifications'
    ],
    software: [
      { brand: 'AVEVA', name: 'AVEVA PDMS / E3D', color: '#004b87' },
      { brand: 'aspentech', name: 'Aspen HYSYS', color: '#0070f3' },
      { brand: 'Honeywell', name: 'UniSim / HTRI', color: '#d9232a' },
      { brand: 'AutoCAD', name: 'AutoCAD Plant 3D', color: '#c41230' },
      { brand: 'CAESAR II', name: 'CAESAR II', color: '#334155' },
      { brand: 'Hexagon', name: 'Hexagon SmartPlant', color: '#0284c7' }
    ],
    workflow: [
      'Concept & Feasibility',
      'Process Design (FEED)',
      'Detailed Engineering',
      'Simulation & Optimization',
      'Integration with Other Disciplines',
      'Construction & Commissioning'
    ],
    stats: {
      projects: '100+ Process Projects',
      experience: '25+ Years'
    },
    industries: ['Refining & Petrochemicals', 'LNG & Gas Processing', 'Chemicals', 'Hydrogen & Clean Fuels', 'Pharmaceuticals'],
    projects: [
      { title: 'Grassroots LNG Liquefaction Facility', location: 'Gulf Coast, USA', highlight: 'Complete FEED & Detailed Process Package' },
      { title: 'Petrochemical Revamp & Debottlenecking', location: 'Texas, USA', highlight: '25% Capacity Increase & Energy Optimization' },
      { title: 'Green Hydrogen Synthesis Plant', location: 'North Sea Region', highlight: 'Electrolyzer Integration & Gas Separation' }
    ]
  },
  {
    id: 'mechanical',
    name: 'Mechanical Engineering',
    shortName: 'Mechanical',
    sidebarSubtitle: 'Equipment & product design',
    icon: Cog,
    tagline: 'ENGINEERED FOR PERFORMANCE',
    subTagline: 'Reliability. Durability. Precision.',
    summary:
      'Mechanical engineering for static and rotating equipment, packages, skids, and plant assets, delivering ASME/API compliance and optimized lifecycle performance.',
    bannerText: 'Engineered for Performance',
    image: '/image/OUR ENGINEERING SOLUTION.jpg',
    hotspots: [
      { label: 'ASME Pressure Vessels', position: { top: '18%', left: '16%' } },
      { label: 'Rotating Equipment', position: { top: '26%', left: '65%' } },
      { label: 'Modular Skid Design', position: { top: '48%', left: '20%' } },
      { label: 'FEA Stress Analysis', position: { top: '45%', left: '68%' } },
      { label: 'Heat Exchangers', position: { top: '70%', left: '16%' } },
      { label: 'Vendor Data Review', position: { top: '68%', left: '70%' } }
    ],
    keyServices: [
      'Mechanical Design & 3D Modeling',
      'Equipment & Machinery Design',
      'Pressure Vessel Design (ASME Section VIII)',
      'Heat Exchanger Design (TEMA / API)',
      'Rotating Equipment Support & Selection',
      'Skid & Modular Package Engineering',
      'Stress Analysis & Finite Element Analysis (FEA)',
      'Detailed Drawings & Fabrication Packages'
    ],
    deliverables: [
      'Equipment Datasheets',
      'GA & Assembly Drawings',
      'Fabrication & Shop Drawings',
      'Stress Analysis & FEA Reports',
      'Equipment Layouts & Installation Plans',
      'Bill of Materials (BOM) & MTO',
      'Vendor Data Review & Technical Bid Evaluation',
      'Inspection & Test Plans (ITP)'
    ],
    software: [
      { brand: 'SolidWorks', name: 'SolidWorks Premium', color: '#d9232a' },
      { brand: 'CATIA', name: 'CATIA V5 / 3DEXPERIENCE', color: '#00539b' },
      { brand: 'Inventor', name: 'Autodesk Inventor', color: '#d35400' },
      { brand: 'Creo', name: 'PTC Creo Parametric', color: '#27ae60' },
      { brand: 'AutoCAD', name: 'AutoCAD Mechanical', color: '#c41230' },
      { brand: 'ANSYS', name: 'ANSYS Mechanical / FEA', color: '#ffb900' }
    ],
    workflow: [
      'Requirements & Specs',
      'Concept Decisions',
      'Detailed Engineering',
      'Analysis & Validation',
      'Fabrication Support',
      'Installation & Commissioning'
    ],
    stats: {
      projects: '150+ Equipment Packages',
      experience: '22+ Years'
    },
    industries: ['Heavy Manufacturing', 'Power Generation', 'Oil & Gas', 'Chemical Processing', 'Marine & Mining'],
    projects: [
      { title: 'Modular Gas Compression Skid', location: 'Permian Basin, USA', highlight: 'Turnkey Mechanical & Vibration Analysis' },
      { title: 'High-Pressure Reactor Vessel', location: 'Louisiana, USA', highlight: 'ASME Sec VIII Div 2 Finite Element Optimization' },
      { title: 'Cryogenic Heat Exchanger Package', location: 'Western Canada', highlight: 'Thermal & Structural Cyclic Load Fatigue Study' }
    ]
  },
  {
    id: 'piping',
    name: 'Piping Engineering',
    shortName: 'Piping',
    sidebarSubtitle: 'Piping systems & flow assurance',
    icon: Sliders,
    tagline: 'PIPING SYSTEMS FOR A STRONGER TOMORROW',
    subTagline: 'Safe Routing. Flawless Stress Analysis.',
    summary:
      'Piping systems design and layout for process, utility, and offshore facilities, delivering zero-clash 3D models, rigorous stress analysis, and error-free isometrics.',
    bannerText: 'Piping Systems for a Stronger Tomorrow',
    image: '/image/OUR ENGINEERING SOLUTION.jpg',
    hotspots: [
      { label: 'Plant Routing & Spools', position: { top: '16%', left: '18%' } },
      { label: 'CAESAR II Stress', position: { top: '24%', left: '68%' } },
      { label: 'Isometric Generation', position: { top: '50%', left: '15%' } },
      { label: 'Pipe Support Design', position: { top: '46%', left: '72%' } },
      { label: 'Pipe Rack Integration', position: { top: '72%', left: '20%' } },
      { label: 'Material Takeoff (MTO)', position: { top: '68%', left: '68%' } }
    ],
    keyServices: [
      'Piping Layout & 3D Plant Design',
      'Pipe Stress Analysis (CAESAR II / ASME B31.3)',
      'Pipe Support Design & Standard Details',
      'Isometrics & Spool Drawings Generation',
      '3D Modeling & Multi-Discipline Coordination',
      'Piping Material Specification (PMS)',
      'Pipe Rack & Modular Routing Design',
      'Field Support, Laser Scan & As-Builts'
    ],
    deliverables: [
      'Piping GA & Arrangement Drawings',
      'Piping Isometric Drawings with BOM',
      'Pipe Spool & Fabrication Drawings',
      'Custom & Standard Support Drawings',
      'Line Lists, Tie-in Lists & MTOs',
      'Comprehensive Stress Analysis Reports',
      'Piping Material Specifications (PMS)',
      'Clash Detection & Constructability Reviews'
    ],
    software: [
      { brand: 'CAESAR II', name: 'Hexagon CAESAR II', color: '#0070f3' },
      { brand: 'AutoCAD', name: 'AutoCAD Plant 3D', color: '#c41230' },
      { brand: 'Hexagon', name: 'SmartPlant 3D (SP3D)', color: '#0284c7' },
      { brand: 'AVEVA', name: 'AVEVA E3D / PDMS', color: '#004b87' },
      { brand: 'Navisworks', name: 'Autodesk Navisworks', color: '#2980b9' },
      { brand: 'Tekla', name: 'Tekla Structures Interface', color: '#16a085' }
    ],
    workflow: [
      'Route Development',
      '3D Model Analysis',
      'Isometrics & MTO',
      'Stress Analysis & Support',
      'Multi-discipline Coordination',
      'Construction Support'
    ],
    stats: {
      projects: '200+ Piping Programs',
      experience: '24+ Years'
    },
    industries: ['Refineries', 'LNG Terminals', 'Offshore Platforms', 'Pharmaceuticals', 'Water Infrastructure'],
    projects: [
      { title: 'Major Refinery Hydrotreater Piping', location: 'Houston Ship Channel, USA', highlight: 'Over 12,000 Isometrics with Zero Field Clashes' },
      { title: 'Cryogenic LNG Transfer Lines', location: 'Corpus Christi, USA', highlight: 'Dynamic Surge & Thermal Contraction Stress Studies' },
      { title: 'Offshore FPSO Topsides Piping', location: 'Gulf of Mexico', highlight: 'High-alloy Duplex & Super Duplex Piping Packages' }
    ]
  },
  {
    id: 'electrical',
    name: 'Electrical Engineering',
    shortName: 'Electrical',
    sidebarSubtitle: 'Power systems & distribution',
    icon: Zap,
    tagline: 'POWERING INDUSTRIAL GROWTH',
    subTagline: 'Resilient. Code-Compliant. Scalable.',
    summary:
      'Electrical engineering solutions for power generation, medium & low voltage distribution, substations, lighting, earthing, and industrial electrical infrastructure.',
    bannerText: 'Powering Industrial Growth',
    image: '/image/OUR ENGINEERING SOLUTION.jpg',
    hotspots: [
      { label: 'Substation Design', position: { top: '16%', left: '16%' } },
      { label: 'Power Distribution', position: { top: '24%', left: '68%' } },
      { label: 'Load Flow Studies', position: { top: '48%', left: '14%' } },
      { label: 'Grounding & Lightning', position: { top: '44%', left: '70%' } },
      { label: 'Cable Tray Layouts', position: { top: '70%', left: '18%' } },
      { label: 'Single Line (SLD)', position: { top: '66%', left: '68%' } }
    ],
    keyServices: [
      'Power System Architecture & Design',
      'Load Flow, Short Circuit & Arc Flash Analysis',
      'Equipment Selection & Sizing (Transformers, Switchgears, UPS)',
      'Lighting & Lightning Protection Design',
      'Cable Routing, Tray Sizing & Raceway Design',
      'Single Line Diagrams (SLD) & Panel Schedules',
      'Electrical Datasheets & Equipment Specs',
      'Coordination with Utilities, OEMs & Contractors'
    ],
    deliverables: [
      'Key Single Line Diagrams (SLD)',
      'Panel Schedules & Load Schedules',
      'Cable Sizing & Voltage Drop Calculations',
      'Lighting, Grounding & Earthing Layouts',
      'Electrical Equipment Datasheets & Specs',
      'Cable Schedules & Routing Layouts',
      'Electrical Substation General Arrangement',
      'As-Built Drawings & Commissioning Procedures'
    ],
    software: [
      { brand: 'ETAP', name: 'ETAP Power System Simulator', color: '#0070f3' },
      { brand: 'SKM', name: 'SKM Power*Tools', color: '#e67e22' },
      { brand: 'AutoCAD', name: 'AutoCAD Electrical', color: '#c41230' },
      { brand: 'DIALux', name: 'DIALux evo (Lighting)', color: '#27ae60' },
      { brand: 'Revit', name: 'Autodesk Revit MEP', color: '#2980b9' },
      { brand: 'CYME', name: 'Eaton CYME Power Engineering', color: '#8e44ad' }
    ],
    workflow: [
      'System Architecture',
      'Analysis & Optimization',
      'Detailed Engineering',
      'Procurement Support',
      'Construction & Testing',
      'Commissioning & Handover'
    ],
    stats: {
      projects: '120+ Substation & Power Projects',
      experience: '20+ Years'
    },
    industries: ['Renewable Energy & Solar', 'Utilities & Substations', 'Data Centers', 'Chemical Plants', 'Offshore Platforms'],
    projects: [
      { title: '138kV Industrial Substation Expansion', location: 'Midwest, USA', highlight: 'Full Arc Flash Mitigation & Protection Coordination' },
      { title: '250MW Data Center Power Distribution', location: 'Virginia, USA', highlight: 'Redundant 2N UPS & Emergency Generation System' },
      { title: 'Petrochemical Facility Motor Control Center', location: 'Louisiana, USA', highlight: 'VFD Integration & Harmonic Filter Study' }
    ]
  },
  {
    id: 'instrumentation',
    name: 'Instrumentation Engineering',
    shortName: 'Instrumentation',
    sidebarSubtitle: 'I&C and control systems',
    icon: Gauge,
    tagline: 'MEASURE. CONTROL. OPTIMIZE.',
    subTagline: 'Precision Control. Safety Instrumented Integrity.',
    summary:
      'Instrumentation and control systems for safe, reliable, and automated operations, spanning smart field instrumentation, SIL/SIS safety systems, and DCS/SCADA integration.',
    bannerText: 'Measure. Control. Optimize.',
    image: '/image/OUR ENGINEERING SOLUTION.jpg',
    hotspots: [
      { label: 'Smart Field Sensors', position: { top: '18%', left: '16%' } },
      { label: 'DCS / PLC Architecture', position: { top: '26%', left: '68%' } },
      { label: 'Instrument Loop Diagrams', position: { top: '48%', left: '14%' } },
      { label: 'Control Valves & Sizing', position: { top: '45%', left: '72%' } },
      { label: 'Safety Instrumented (SIL)', position: { top: '72%', left: '18%' } },
      { label: 'Cause & Effect Matrix', position: { top: '68%', left: '68%' } }
    ],
    keyServices: [
      'Instrument Index & Datasheets Development',
      'P&ID Review & Instrumentation Tagging',
      'Loop Diagrams, Wiring & Hookup Drawings',
      'Control Narratives & Cause and Effect Matrices',
      'Safety Instrumented Systems (SIS / SIL Verification)',
      'Field Instrument & Control Valve Sizing',
      'Calibration, FAT/SAT & Commissioning Support',
      'Integration with DCS, SCADA & Industrial Networks'
    ],
    deliverables: [
      'Comprehensive Instrument Index',
      'Instrument Datasheets (ISA format)',
      'Loop Diagrams & Wiring Schedules',
      'Cable Schedules & Junction Box Details',
      'I/O Lists & Hardware Assignment',
      'Control Philosophy & Detailed Narratives',
      'Cause & Effect Diagrams (C&ED)',
      'SIL Verification & Safety Requirement Specs (SRS)'
    ],
    software: [
      { brand: 'AVEVA', name: 'AVEVA Instrumentation', color: '#004b87' },
      { brand: 'Hexagon', name: 'SmartPlant Instrumentation (SPI / INtools)', color: '#0284c7' },
      { brand: 'AutoCAD', name: 'AutoCAD Plant 3D I&C', color: '#c41230' },
      { brand: 'Yokogawa', name: 'Yokogawa CENTUM VP Integration', color: '#e74c3c' },
      { brand: 'Siemens', name: 'Siemens PCS 7 / TIA', color: '#16a085' },
      { brand: 'Emerson', name: 'DeltaV Engineering Suite', color: '#2980b9' }
    ],
    workflow: [
      'Instrument Selection',
      'Detailed Engineering',
      'I/O & Control Logic',
      'System Integration',
      'Testing & Commissioning',
      'Operations Support'
    ],
    stats: {
      projects: '140+ Automation & I&C Projects',
      experience: '21+ Years'
    },
    industries: ['Refineries & Gas Plants', 'Water & Wastewater', 'Food & Pharma', 'Chemical Facilities', 'Power Utilities'],
    projects: [
      { title: 'Refinery Sulfur Recovery I&C Modernization', location: 'Texas, USA', highlight: 'Migration to Modern Smart Transmitters & SIS Logic' },
      { title: 'Offshore Production Facility Automation', location: 'Gulf of Mexico', highlight: 'Triple Modular Redundant (TMR) ESD System' },
      { title: 'Biopharma Batch Control Architecture', location: 'New Jersey, USA', highlight: '21 CFR Part 11 Compliant Electronic Records & Audit' }
    ]
  },
  {
    id: 'structural',
    name: 'Structural Engineering',
    shortName: 'Structural',
    sidebarSubtitle: 'Steel, civil & offshore structures',
    icon: Building2,
    tagline: 'STRUCTURES THAT SUPPORT PROGRESS',
    subTagline: 'Uncompromising Strength. Smart BIM Detailing.',
    summary:
      'Structural engineering and detailing for industrial, commercial, and offshore structures, providing rigorous finite element analysis, connection engineering, and Tekla BIM detailing.',
    bannerText: 'Structures that Support Progress',
    image: '/image/OUR ENGINEERING SOLUTION.jpg',
    hotspots: [
      { label: 'Steel Framing & BIM', position: { top: '16%', left: '18%' } },
      { label: 'Pipe Rack Structures', position: { top: '24%', left: '68%' } },
      { label: 'Equipment Foundations', position: { top: '48%', left: '15%' } },
      { label: 'Heavy Industrial Framing', position: { top: '45%', left: '70%' } },
      { label: 'Connection Design', position: { top: '72%', left: '18%' } },
      { label: 'Tekla Shop Drawings', position: { top: '68%', left: '68%' } }
    ],
    keyServices: [
      'Structural Analysis & Design (STAAD.Pro / SAP2000)',
      'Steel Detailing & Shop Fabrication Drawings (Tekla)',
      'Concrete & Heavy Equipment Foundation Design',
      'Industrial Steel Structures & High-Bay Facilities',
      'Pipe Racks, Access Platforms, Stairs & Walkways',
      'Connection Design (AISC / Eurocode Standards)',
      '3D BIM Modeling, Clash Resolution & Laser Scan Integration',
      'Blast-Resistant Design & Seismic Analysis'
    ],
    deliverables: [
      'General Arrangement & Framing Drawings',
      'Fabrication & Shop Drawings with CNC Data',
      'Connection Calculations & Detail Drawings',
      'Foundation Layouts & Reinforcement Schedules',
      'Advance Bill of Materials (ABOM) & MTO',
      'Structural Design Calculation Packages',
      '3D Tekla BIM Models & NC Files',
      'Erection Diagrams & Sequencing Plans'
    ],
    software: [
      { brand: 'Tekla', name: 'Tekla Structures', color: '#005a9c' },
      { brand: 'Bentley', name: 'STAAD.Pro Advanced', color: '#27ae60' },
      { brand: 'CSI', name: 'SAP2000 / ETABS', color: '#c0392b' },
      { brand: 'AutoCAD', name: 'AutoCAD Civil / Structural', color: '#c41230' },
      { brand: 'Revit', name: 'Autodesk Revit Structure', color: '#2980b9' },
      { brand: 'RISA', name: 'RISA-3D / Connection', color: '#d35400' }
    ],
    workflow: [
      'Analysis & Modeling',
      'Detailed Design',
      'Fabrication Drawings',
      'Erection Support',
      'As-Built & Handover',
      'Final Signoff'
    ],
    stats: {
      projects: '180+ Steel & Civil Programs',
      experience: '26+ Years'
    },
    industries: ['Heavy Industry', 'Petrochemical Plants', 'Mining & Metals', 'Infrastructure & Bridges', 'Marine Terminals'],
    projects: [
      { title: '400ft Heavy Industrial Pipe Rack Network', location: 'Baton Rouge, USA', highlight: 'AISC 360 Seismic & Wind Load Tekla BIM Detailing' },
      { title: 'Compressor Dynamic Foundation System', location: 'Alberta, Canada', highlight: 'Soil-Structure Dynamic Harmonic Vibration Analysis' },
      { title: 'Blast-Resistant Control Room Facility', location: 'Middle East', highlight: 'High-Impact Overpressure Structural Hardening Design' }
    ]
  },
  {
    id: 'pipeline',
    name: 'Pipeline Engineering',
    shortName: 'Pipeline',
    sidebarSubtitle: 'Transmission & distribution',
    icon: GitBranch,
    tagline: 'CONNECTING ENERGY TO THE WORLD',
    subTagline: 'Safe Onshore & Offshore Transportation.',
    summary:
      'Pipeline engineering for onshore and offshore transmission and distribution systems, including route engineering, surge hydraulics, HDD crossings, and asset integrity.',
    bannerText: 'Connecting Energy to the World',
    image: '/image/OUR ENGINEERING SOLUTION.jpg',
    hotspots: [
      { label: 'Route Optimization', position: { top: '16%', left: '16%' } },
      { label: 'Surge & Hydraulics', position: { top: '24%', left: '68%' } },
      { label: 'HDD River Crossings', position: { top: '48%', left: '15%' } },
      { label: 'Pipeline Stress (B31.4/8)', position: { top: '45%', left: '70%' } },
      { label: 'Pigging & Launchers', position: { top: '70%', left: '18%' } },
      { label: 'Asset Integrity & Cathodic', position: { top: '66%', left: '68%' } }
    ],
    keyServices: [
      'Pipeline Route Selection & Alignment Studies',
      'Steady-State & Transient Hydraulic Analysis',
      'Pipeline Stress Analysis & Buoyancy Calculations',
      'Horizontal Directional Drilling (HDD) Engineering',
      'Road, Rail & Water Crossing Engineering',
      'Cathodic Protection & Coating Specifications',
      'Pipeline Stations: Metering, Pigging & Block Valves',
      'Regulatory Permitting, Risk Assessment & DOT Compliance'
    ],
    deliverables: [
      'Route Alignment Sheets & Profile Drawings',
      'Hydraulic & Surge Analysis Reports',
      'Pipeline Stress & Soil Interaction Reports',
      'HDD Design Packages & Bore Path Calculations',
      'Station Piping & Mechanical Layouts',
      'Material Requisitions & Line Pipe Specifications',
      'Tie-in & Hot Tap Detail Packages',
      'As-Built Records & GIS Database Deliverables'
    ],
    software: [
      { brand: 'CAESAR II', name: 'CAESAR II Pipeline', color: '#0070f3' },
      { brand: 'AutoPIPE', name: 'Bentley AutoPIPE', color: '#27ae60' },
      { brand: 'OpenRoads', name: 'Bentley OpenRoads / Civil', color: '#2980b9' },
      { brand: 'AutoCAD', name: 'AutoCAD Civil 3D', color: '#c41230' },
      { brand: 'GIS', name: 'ESRI ArcGIS Pipeline Solutions', color: '#16a085' },
      { brand: 'Simulation', name: 'PipelineStudio / SPS', color: '#8e44ad' }
    ],
    workflow: [
      'Route Definition',
      'Detailed Design',
      'Analysis & Validation',
      'Drawings & Specs',
      'Construction Support',
      'Integrity Management'
    ],
    stats: {
      projects: '2,500+ Miles Designed',
      experience: '23+ Years'
    },
    industries: ['Natural Gas Transmission', 'Crude Oil & Products', 'CO2 & Carbon Capture', 'Hydrogen Pipelines', 'Municipal Water Mains'],
    projects: [
      { title: '36" Natural Gas Interstate Pipeline', location: 'Texas & Louisiana, USA', highlight: 'Over 140 Miles with 8 Major River HDD Crossings' },
      { title: 'Supercritical CO2 Pipeline Network', location: 'US Midwest', highlight: 'Dense-Phase Transient Flow & Fracture Mechanics' },
      { title: 'Refined Products Terminal Interconnect', location: 'Mid-Atlantic, USA', highlight: 'Bi-directional Metering Skid & Automated Valve Station' }
    ]
  },
  {
    id: 'offshore',
    name: 'Offshore Engineering',
    shortName: 'Offshore',
    sidebarSubtitle: 'Marine & offshore engineering',
    icon: Ship,
    tagline: 'ENGINEERING FOR A SUSTAINABLE OCEAN FUTURE',
    subTagline: 'Deepwater Topsides. Resilient Marine Structures.',
    summary:
      'Offshore engineering support for topsides, floating systems, subsea equipment, and marine structures, engineered to withstand extreme maritime environments.',
    bannerText: 'Engineering for a Sustainable Ocean Future',
    image: '/image/OUR ENGINEERING SOLUTION.jpg',
    hotspots: [
      { label: 'Platform Topsides', position: { top: '16%', left: '18%' } },
      { label: 'Subsea Manifolds', position: { top: '25%', left: '68%' } },
      { label: 'Jacket Structures', position: { top: '48%', left: '15%' } },
      { label: 'Marine Risers', position: { top: '44%', left: '70%' } },
      { label: 'Mooring Systems', position: { top: '72%', left: '18%' } },
      { label: 'Offshore Safety (SOLAS)', position: { top: '68%', left: '68%' } }
    ],
    keyServices: [
      'Topside Structural & Mechanical Layout',
      'Subsea Manifolds, Templates & Riser Engineering',
      'Offshore Piping & Cryogenic LNG Transfer',
      'Marine Jacket & Floating Platform Structures',
      'Mooring, Station-Keeping & Naval Architecture',
      'Transportation & Heavy Lift Marine Installation',
      'Offshore Safety, Escape Routes & Fire Protection',
      'Life Extension, Brownfield De-bottlenecking & Decommissioning'
    ],
    deliverables: [
      'Topside General Arrangement & Weight Control Reports',
      'Structural SACS / SESAM In-Service & Pre-Service Reports',
      'Subsea Piping & Manifold Detail Drawings',
      'Riser Dynamic Analysis & Fatigue Reports',
      'Mooring Line Patterns & Anchor Tension Calculations',
      'Heavy Lift Rigging & Sea-Fastening Procedures',
      'Fabrication Packages with DNV/ABS Class Approval',
      'Offshore As-Built Records & Integrity Dossiers'
    ],
    software: [
      { brand: 'SACS', name: 'Bentley SACS Offshore', color: '#0070f3' },
      { brand: 'SESAM', name: 'DNV SESAM Suite', color: '#27ae60' },
      { brand: 'AVEVA', name: 'AVEVA Marine', color: '#004b87' },
      { brand: 'MOSES', name: 'Bentley MOSES Hydrodynamics', color: '#2980b9' },
      { brand: 'AutoCAD', name: 'AutoCAD Plant 3D Offshore', color: '#c41230' },
      { brand: 'Tekla', name: 'Tekla Marine Structures', color: '#005a9c' }
    ],
    workflow: [
      'Concept & FEED',
      'Detailed Engineering',
      'Installation Planning',
      'Fabrication Support',
      'Offshore Execution',
      'Operations & Maintenance'
    ],
    stats: {
      projects: '85+ Offshore Assets',
      experience: '20+ Years'
    },
    industries: ['Offshore Oil & Gas', 'FLNG & FPSO Facilities', 'Offshore Wind Substations', 'Marine Terminals', 'Subsea Infrastructure'],
    projects: [
      { title: 'Deepwater Spar Topside Modular Revamp', location: 'Gulf of Mexico', highlight: 'Weight-Critical Modular Equipment Addition with SACS Validation' },
      { title: 'Offshore Wind HVDC Converter Substation', location: 'Atlantic Coast, USA', highlight: 'Wave Fatigue Analysis & Topsides Modular Construction' },
      { title: 'FPSO Gas Dehydration & Compression Skid', location: 'Brazil Offshore', highlight: 'Marine Pitch & Roll Dynamic Stress Mitigation Package' }
    ]
  },
  {
    id: 'automation',
    name: 'Automation & IIoT',
    shortName: 'Automation',
    sidebarSubtitle: 'Industrial automation & IIoT',
    icon: Cpu,
    tagline: 'SMART, AUTONOMOUS OPERATIONS',
    subTagline: 'Connected. Intelligent. Secure.',
    summary:
      'Industrial automation, DCS/PLC programming, SCADA development, robotic workcells, and IIoT digital transformation for next-generation smart factories and plants.',
    bannerText: 'Smart, Autonomous Operations',
    image: '/image/OUR ENGINEERING SOLUTION.jpg',
    hotspots: [
      { label: 'DCS Architecture', position: { top: '16%', left: '16%' } },
      { label: 'Cloud IIoT Edge', position: { top: '24%', left: '68%' } },
      { label: 'SCADA Dashboards', position: { top: '48%', left: '15%' } },
      { label: 'Safety PLCs (SIL 3)', position: { top: '45%', left: '70%' } },
      { label: 'Robotic Workcells', position: { top: '70%', left: '18%' } },
      { label: 'OT Cyber Security', position: { top: '66%', left: '68%' } }
    ],
    keyServices: [
      'DCS & Distributed PLC Control Architecture',
      'SCADA, HMI & Real-Time Operational Dashboards',
      'Safety Instrumented Systems (SIS / ESD Programming)',
      'Industrial IoT Gateways & Edge Telemetry',
      'Control Panel Engineering, UL 508A & Wiring Schematics',
      'Alarm Rationalization & ISA-18.2 Compliance',
      'Virtual Commissioning & Hardware-in-the-Loop (HIL)',
      'OT Network Architecture & Cybersecurity Hardening'
    ],
    deliverables: [
      'Automation System Architecture Diagrams',
      'Control Philosophy & Functional Design Specs (FDS)',
      'PLC Logic / DCS Program Code & Database Backups',
      'HMI Screen Layouts & User Interface Style Guides',
      'Factory Acceptance Test (FAT) & SAT Protocol Scripts',
      'I/O Assignment Lists & Network Topology Maps',
      'Industrial Cybersecurity Assessment Reports',
      'Operator Training Manuals & Maintenance Guides'
    ],
    software: [
      { brand: 'Siemens', name: 'Siemens TIA Portal / PCS 7', color: '#16a085' },
      { brand: 'Rockwell', name: 'Studio 5000 / FactoryTalk', color: '#c0392b' },
      { brand: 'Ignition', name: 'Inductive Automation Ignition', color: '#e67e22' },
      { brand: 'AVEVA', name: 'System Platform / Wonderware', color: '#004b87' },
      { brand: 'Emerson', name: 'DeltaV Distributed Control', color: '#2980b9' },
      { brand: 'Schneider', name: 'EcoStruxure Automation Expert', color: '#27ae60' }
    ],
    workflow: [
      'Control Strategy',
      'Hardware Architecture',
      'PLC/SCADA Programming',
      'FAT Simulation',
      'Field Commissioning',
      'Lifecycle Optimization'
    ],
    stats: {
      projects: '110+ Smart Automation Deployments',
      experience: '18+ Years'
    },
    industries: ['Advanced Manufacturing', 'Continuous Process Plants', 'Automotive & EV Plants', 'Water Filtration Utilities', 'Energy Storage'],
    projects: [
      { title: 'Automotive EV Battery Cell Manufacturing', location: 'Tennessee, USA', highlight: 'Integrated PLC & Ignition SCADA High-Speed Tracking' },
      { title: 'Refinery Tank Farm Automation & Overfill SIS', location: 'California, USA', highlight: 'API 2350 Overfill Prevention Safety System' },
      { title: 'Global Water Treatment IIoT Telemetry', location: 'Southwest, USA', highlight: 'Cloud-Connected Edge Monitoring with Predictive Maintenance' }
    ]
  },
  {
    id: 'product-design',
    name: 'Product Design',
    shortName: 'Product Design',
    sidebarSubtitle: 'Industrial products & skids',
    icon: Box,
    tagline: 'INNOVATIVE DESIGNS FOR A BETTER TOMORROW',
    subTagline: 'From Concept Prototype to Volume Production.',
    summary:
      'Product design and engineering support across mechanical systems, tools, industrial equipment, and modular skids, engineered for manufacturability and market success.',
    bannerText: 'Innovative Designs for a Better Tomorrow',
    image: '/image/OUR ENGINEERING SOLUTION.jpg',
    hotspots: [
      { label: '3D CAD Assemblies', position: { top: '16%', left: '18%' } },
      { label: 'FEA Validation', position: { top: '24%', left: '68%' } },
      { label: 'DFM Optimization', position: { top: '48%', left: '15%' } },
      { label: 'GD&T Tolerancing', position: { top: '45%', left: '70%' } },
      { label: 'Rapid Prototyping', position: { top: '70%', left: '18%' } },
      { label: 'Production Drawings', position: { top: '66%', left: '68%' } }
    ],
    keyServices: [
      'Product Concept Development & Industrial Styling',
      'Parametric 3D CAD Modeling & Complex Assemblies',
      'Design for Manufacturing & Assembly (DFM / DFA)',
      'Tolerance Stack-Up Analysis & ASME Y14.5 GD&T',
      'FEA Structural, Thermal & Fatigue Simulation',
      'Reverse Engineering & 3D Laser Scan Processing',
      'Rapid Prototyping & Functional Testing Support',
      'Complete Production-Ready Manufacturing Documentation'
    ],
    deliverables: [
      'Concept 3D Models & Photorealistic Renderings',
      'Detailed Native CAD Assembly Packages',
      'Fully Dimensioned Manufacturing Part Drawings',
      'Hierarchical Bill of Materials (BOM) & Sourcing Lists',
      'FEA Structural & Thermal Simulation Reports',
      'Tolerance Stack-up Calculation Sheets',
      'DFM Feedback & Tooling Optimization Guidelines',
      'Engineering Change Orders (ECO) & Release Packages'
    ],
    software: [
      { brand: 'SolidWorks', name: 'Dassault SolidWorks Professional', color: '#d9232a' },
      { brand: 'CATIA', name: 'CATIA Mechanical Design', color: '#00539b' },
      { brand: 'Siemens', name: 'Siemens NX Advanced CAD', color: '#16a085' },
      { brand: 'Inventor', name: 'Autodesk Product Design Suite', color: '#d35400' },
      { brand: 'ANSYS', name: 'ANSYS Discovery & Mechanical', color: '#ffb900' },
      { brand: 'KeyShot', name: 'KeyShot 3D Pro Rendering', color: '#2c3e50' }
    ],
    workflow: [
      'Concept & Ideation',
      'Overall Modeling',
      'Analysis & Validation',
      'Detailed Design',
      'Prototype Support',
      'Manufacturing Release'
    ],
    stats: {
      projects: '250+ Commercial Products & Tools',
      experience: '22+ Years'
    },
    industries: ['Industrial Tools & Machinery', 'Energy & Subsea Hardware', 'Consumer Electronics', 'Medical Devices', 'Aerospace Hardware'],
    projects: [
      { title: 'Subsea Wellhead Intervention Tooling', location: 'Houston, USA', highlight: 'Ultra-High Pressure 15,000 PSI Certified Tooling Package' },
      { title: 'Commercial Robotic Packaging Machine', location: 'Ohio, USA', highlight: 'High-Speed Kinematic DFM Redesign with 30% Part Reduction' },
      { title: 'Modular Solar Inverter Enclosure', location: 'California, USA', highlight: 'NEMA 4X / IP66 Thermal & Vibration Validated Enclosure' }
    ]
  }
];

export default function CapabilitiesInteractiveMap() {
  const [selectedIndex, setSelectedIndex] = useState<number>(0);
  const [activeTab, setActiveTab] = useState<
    'Overview' | 'Key Services' | 'Deliverables' | 'Software & Tools' | 'Related Industries' | 'Featured Projects'
  >('Overview');

  const current = disciplinesData[selectedIndex];
  const CurrentIcon = current.icon;

  const handlePrev = () => {
    setSelectedIndex((prev) => (prev > 0 ? prev - 1 : disciplinesData.length - 1));
  };

  const handleNext = () => {
    setSelectedIndex((prev) => (prev < disciplinesData.length - 1 ? prev + 1 : 0));
  };

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-[#f8fafc] via-[#f1f6fd]/30 to-white py-20 sm:py-28 border-b border-slate-200/60">
      <AnimatedSection as="div" className="relative mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-8">
        {/* Top Eyebrow & Main Section Heading */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 pb-12">
          <div>
            <div className="inline-flex items-center gap-2.5">
              <span className="text-xs font-mono font-bold uppercase tracking-[0.22em] text-[#0070f3]">
                ENGINEERING CAPABILITIES
              </span>
              <span className="h-0.5 w-10 bg-[#0070f3]/60 rounded-full" />
            </div>

            <h2 className="mt-3 text-3xl font-black tracking-tight text-slate-900 sm:text-4xl lg:text-5xl font-display leading-[1.15]">
              Interactive capability map across{' '}
              <span className="text-[#0070f3]">core disciplines</span>
            </h2>

            <p className="mt-3 max-w-3xl text-sm sm:text-base leading-relaxed text-slate-600">
              Select a discipline to see how GTS maps engineering teams, deliverables, software, and
              digital workflows around industrial project needs.
            </p>
          </div>

          {/* Right Watermark */}
          <div className="hidden border-l border-slate-300 pl-4 lg:block shrink-0">
            <div className="flex flex-col font-mono text-[10px] font-bold uppercase tracking-wider text-slate-400 space-y-0.5">
              <span>PEOPLE</span>
              <span>TECHNOLOGY</span>
              <span>SOLUTIONS</span>
              <span className="text-[#0070f3]">GLOBAL IMPACT</span>
            </div>
          </div>
        </div>

        {/* Main Interactive Grid */}
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-12 items-start">
          {/* ================= LEFT SIDEBAR (10 DISCIPLINES) ================= */}
          <div className="lg:col-span-3 flex flex-col space-y-2">
            {disciplinesData.map((d, index) => {
              const Icon = d.icon;
              const isSelected = selectedIndex === index;

              return (
                <button
                  key={d.id}
                  type="button"
                  onClick={() => {
                    setSelectedIndex(index);
                  }}
                  className={`group relative flex items-center justify-between rounded-2xl p-3.5 sm:p-4 text-left transition-all duration-200 ${
                    isSelected
                      ? 'bg-[#0070f3] text-white shadow-lg shadow-blue-500/25 translate-x-1'
                      : 'bg-white border border-slate-200/80 text-slate-800 hover:border-blue-300 hover:bg-blue-50/40 hover:shadow-sm'
                  }`}
                >
                  <div className="flex items-center gap-3.5 min-w-0">
                    <div
                      className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl transition-colors ${
                        isSelected
                          ? 'bg-white/15 text-white'
                          : 'bg-blue-50 text-[#0070f3] group-hover:bg-[#0070f3] group-hover:text-white'
                      }`}
                    >
                      <Icon className="h-5 w-5" />
                    </div>

                    <div className="min-w-0">
                      <div
                        className={`text-sm font-bold tracking-tight truncate ${
                          isSelected ? 'text-white' : 'text-slate-900 group-hover:text-[#0070f3]'
                        }`}
                      >
                        {d.shortName}
                      </div>
                      <div
                        className={`text-[11px] truncate leading-tight mt-0.5 ${
                          isSelected ? 'text-blue-100' : 'text-slate-500'
                        }`}
                      >
                        {d.sidebarSubtitle}
                      </div>
                    </div>
                  </div>

                  <ChevronRight
                    className={`h-4 w-4 shrink-0 transition-transform ${
                      isSelected ? 'text-white translate-x-0.5' : 'text-slate-400 group-hover:text-[#0070f3]'
                    }`}
                  />
                </button>
              );
            })}
          </div>

          {/* ================= RIGHT MAIN DISCIPLINE CANVAS ================= */}
          <div className="lg:col-span-9">
            <div className="rounded-[2rem] border border-slate-200/90 bg-white p-6 sm:p-8 lg:p-10 shadow-xl shadow-slate-200/40 text-slate-900">
              {/* Top Header of Selected Discipline */}
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 pb-6 border-b border-slate-100">
                <div className="flex items-center gap-4">
                  <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-blue-50 border border-blue-200/80 text-[#0070f3] shadow-xs">
                    <CurrentIcon className="h-8 w-8" />
                  </div>
                  <div>
                    <div className="text-xs font-mono font-bold uppercase tracking-[0.2em] text-[#0070f3]">
                      DISCIPLINE
                    </div>
                    <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight font-display mt-0.5">
                      {current.name}
                    </h3>
                  </div>
                </div>

                {/* Tagline, Counter & Arrow Navigation */}
                <div className="flex items-center justify-between sm:justify-end gap-5">
                  <div className="hidden xl:block text-right">
                    <div className="text-[11px] font-mono font-bold uppercase tracking-wider text-slate-400">
                      — {current.tagline}
                    </div>
                    <div className="text-xs text-slate-500 font-medium">{current.subTagline}</div>
                  </div>

                  <div className="flex items-center gap-2">
                    <span className="text-xs font-mono font-bold text-slate-500 pr-1">
                      {String(selectedIndex + 1).padStart(2, '0')} / {String(disciplinesData.length).padStart(2, '0')}
                    </span>
                    <button
                      type="button"
                      onClick={handlePrev}
                      className="flex h-8 w-8 items-center justify-center rounded-full border border-slate-200 bg-slate-50 text-slate-600 hover:bg-white hover:border-[#0070f3] hover:text-[#0070f3] transition-colors shadow-xs"
                      title="Previous Discipline"
                    >
                      <ChevronLeft className="h-4 w-4" />
                    </button>
                    <button
                      type="button"
                      onClick={handleNext}
                      className="flex h-8 w-8 items-center justify-center rounded-full border border-slate-200 bg-slate-50 text-slate-600 hover:bg-white hover:border-[#0070f3] hover:text-[#0070f3] transition-colors shadow-xs"
                      title="Next Discipline"
                    >
                      <ChevronRight className="h-4 w-4" />
                    </button>
                  </div>
                </div>
              </div>

              {/* Summary Paragraph */}
              <p className="mt-5 text-sm sm:text-[15px] leading-relaxed text-slate-600">
                {current.summary}
              </p>

              {/* Interactive Tabs */}
              <div className="mt-6 flex flex-wrap items-center gap-2 border-b border-slate-100 pb-4">
                {(
                  [
                    'Overview',
                    'Key Services',
                    'Deliverables',
                    'Software & Tools',
                    'Related Industries',
                    'Featured Projects'
                  ] as const
                ).map((tab) => {
                  const isActive = activeTab === tab;
                  return (
                    <button
                      key={tab}
                      type="button"
                      onClick={() => setActiveTab(tab)}
                      className={`rounded-xl px-4 py-2 text-xs font-bold transition-all ${
                        isActive
                          ? 'bg-[#0070f3] text-white shadow-sm'
                          : 'bg-slate-100/80 text-slate-600 hover:bg-slate-200/70 hover:text-slate-900'
                      }`}
                    >
                      {tab}
                    </button>
                  );
                })}
              </div>

              {/* Tab Content Display */}
              <div className="mt-6">
                {/* 1. OVERVIEW TAB: 3 Columns + Right Showcase Image with Hotspots */}
                {activeTab === 'Overview' && (
                  <div className="grid grid-cols-1 gap-6 lg:grid-cols-12 items-stretch">
                    {/* Key Services Column */}
                    <div className="lg:col-span-3 rounded-2xl border border-slate-200/80 bg-slate-50/50 p-4">
                      <div className="flex items-center gap-2 pb-3 border-b border-slate-200 mb-3 text-xs font-black uppercase tracking-wider text-[#0070f3]">
                        <FileText className="h-4 w-4 text-[#0070f3]" />
                        <span>Key Services</span>
                      </div>
                      <ul className="space-y-2.5">
                        {current.keyServices.slice(0, 7).map((srv) => (
                          <li key={srv} className="flex items-start gap-2 text-xs text-slate-700 font-medium">
                            <Check className="mt-0.5 h-3.5 w-3.5 shrink-0 text-[#0070f3] stroke-[3]" />
                            <span className="leading-snug">{srv}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Typical Deliverables Column */}
                    <div className="lg:col-span-3 rounded-2xl border border-slate-200/80 bg-slate-50/50 p-4">
                      <div className="flex items-center gap-2 pb-3 border-b border-slate-200 mb-3 text-xs font-black uppercase tracking-wider text-[#0070f3]">
                        <FileCheck className="h-4 w-4 text-[#0070f3]" />
                        <span>Typical Deliverables</span>
                      </div>
                      <ul className="space-y-2.5">
                        {current.deliverables.slice(0, 7).map((del) => (
                          <li key={del} className="flex items-start gap-2 text-xs text-slate-700 font-medium">
                            <Check className="mt-0.5 h-3.5 w-3.5 shrink-0 text-[#0070f3] stroke-[3]" />
                            <span className="leading-snug">{del}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Software & Tools Column */}
                    <div className="lg:col-span-2 rounded-2xl border border-slate-200/80 bg-slate-50/50 p-4 flex flex-col justify-between">
                      <div>
                        <div className="flex items-center gap-2 pb-3 border-b border-slate-200 mb-3 text-xs font-black uppercase tracking-wider text-[#0070f3]">
                          <Cog className="h-4 w-4 text-[#0070f3]" />
                          <span>Software & Tools</span>
                        </div>
                        <div className="space-y-2.5">
                          {current.software.map((sw) => (
                            <div key={sw.name} className="flex flex-col">
                              <span className="text-[10px] font-black uppercase tracking-wider text-slate-400">
                                {sw.brand}
                              </span>
                              <span className="text-xs font-bold text-slate-800 leading-tight">
                                {sw.name}
                              </span>
                            </div>
                          ))}
                        </div>
                      </div>

                      <div className="pt-3 border-t border-slate-200 mt-4">
                        <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-[#0070f3]">
                          <span>Certified software licenses</span>
                        </span>
                      </div>
                    </div>

                    {/* Right Showcase Image with Interactive Hotspot Badges */}
                    <div className="lg:col-span-4 relative rounded-2xl overflow-hidden shadow-md min-h-[320px] lg:min-h-[360px] group">
                      <Image
                        src={current.image}
                        alt={`${current.name} visual`}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                      {/* Vignette Gradients */}
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-950/20 to-slate-950/40" />

                      {/* Floating Hotspot Badges with Pulse Dots */}
                      {/* {current.hotspots.map((hs, hIdx) => (
                        <div
                          key={hIdx}
                          className="absolute pointer-events-none transition-all duration-300"
                          style={{ top: hs.position.top, left: hs.position.left }}
                        >
                          <div className="flex items-center gap-1.5 rounded-full bg-slate-900/85 border border-cyan-400/40 px-2.5 py-1 text-[11px] font-bold text-white backdrop-blur-md shadow-lg">
                            <span className="relative flex h-2 w-2">
                              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-cyan-400 opacity-75" />
                              <span className="relative inline-flex h-2 w-2 rounded-full bg-cyan-400" />
                            </span>
                            <span>{hs.label}</span>
                          </div>
                        </div>
                      ))} */}

                      {/* Bottom Image Overlay Tagline Banner */}
                      <div className="absolute bottom-0 inset-x-0 p-4 bg-gradient-to-t from-slate-950 via-slate-950/80 to-transparent">
                        <div className="text-[11px] font-mono uppercase tracking-widest text-cyan-400">
                          {current.shortName.toUpperCase()} SHOWCASE
                        </div>
                        <div className="text-base font-extrabold text-white font-display mt-0.5">
                          {current.bannerText}
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {/* 2. KEY SERVICES EXPANDED TAB */}
                {activeTab === 'Key Services' && (
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {current.keyServices.map((srv, idx) => (
                      <div
                        key={srv}
                        className="rounded-2xl border border-slate-200 bg-slate-50/60 p-4 hover:border-blue-300 hover:bg-white transition-all shadow-xs"
                      >
                        <div className="flex items-center gap-2 mb-2 text-[#0070f3] font-bold text-xs">
                          <CheckCircle2 className="h-4 w-4" />
                          <span>Service {String(idx + 1).padStart(2, '0')}</span>
                        </div>
                        <h4 className="text-sm font-bold text-slate-900 leading-snug">{srv}</h4>
                        <p className="mt-2 text-xs text-slate-500 leading-relaxed">
                          Delivered by senior discipline engineers experienced in ASME, API, ISO and
                          client-specific technical specifications.
                        </p>
                      </div>
                    ))}
                  </div>
                )}

                {/* 3. DELIVERABLES EXPANDED TAB */}
                {activeTab === 'Deliverables' && (
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {current.deliverables.map((del, idx) => (
                      <div
                        key={del}
                        className="rounded-2xl border border-slate-200 bg-slate-50/60 p-4 hover:border-blue-300 hover:bg-white transition-all shadow-xs"
                      >
                        <div className="flex items-center gap-2 mb-2 text-emerald-600 font-bold text-xs">
                          <FileCheck className="h-4 w-4" />
                          <span>Deliverable {String(idx + 1).padStart(2, '0')}</span>
                        </div>
                        <h4 className="text-sm font-bold text-slate-900 leading-snug">{del}</h4>
                        <p className="mt-2 text-xs text-slate-500 leading-relaxed">
                          Standardized quality assurance, multi-check sign-offs, and compliance with industry
                          standards and client guidelines.
                        </p>
                      </div>
                    ))}
                  </div>
                )}

                {/* 4. SOFTWARE & TOOLS TAB */}
                {activeTab === 'Software & Tools' && (
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    {current.software.map((sw) => (
                      <div
                        key={sw.name}
                        className="flex items-center gap-3.5 rounded-2xl border border-slate-200 bg-white p-4 shadow-sm"
                      >
                        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-[#0070f3] font-black text-xs">
                          {sw.brand.slice(0, 3).toUpperCase()}
                        </div>
                        <div>
                          <div className="text-[11px] font-mono font-bold uppercase tracking-wider text-slate-400">
                            {sw.brand}
                          </div>
                          <div className="text-sm font-extrabold text-slate-900">{sw.name}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                )}

                {/* 5. RELATED INDUSTRIES TAB */}
                {activeTab === 'Related Industries' && (
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    {current.industries.map((ind) => (
                      <div
                        key={ind}
                        className="flex items-center gap-3 rounded-2xl border border-slate-200 bg-slate-50/70 p-4 hover:border-blue-300 hover:bg-white transition-all"
                      >
                        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-[#0070f3]">
                          <Factory className="h-5 w-5" />
                        </div>
                        <div>
                          <div className="text-sm font-bold text-slate-900">{ind}</div>
                          <div className="text-xs text-slate-500">Multidisciplinary Delivery</div>
                        </div>
                      </div>
                    ))}
                  </div>
                )}

                {/* 6. FEATURED PROJECTS TAB */}
                {activeTab === 'Featured Projects' && (
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {current.projects.map((proj) => (
                      <div
                        key={proj.title}
                        className="rounded-2xl border border-slate-200 bg-slate-50/70 p-5 hover:border-blue-300 hover:bg-white transition-all shadow-xs flex flex-col justify-between"
                      >
                        <div>
                          <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-[#0070f3]">
                            {proj.location}
                          </span>
                          <h4 className="mt-1 text-sm font-extrabold text-slate-900 leading-snug">
                            {proj.title}
                          </h4>
                          <p className="mt-2 text-xs text-slate-600 leading-relaxed">
                            {proj.highlight}
                          </p>
                        </div>
                        <div className="mt-4 pt-3 border-t border-slate-200 text-xs font-bold text-[#0070f3] flex items-center gap-1">
                          <span>Case study available</span>
                          <ArrowRight className="h-3 w-3" />
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* ================= BOTTOM WORKFLOW CHEVRON RIBBON ================= */}
              <div className="mt-8 rounded-2xl border border-slate-200/80 bg-slate-50/80 p-4 sm:p-5">
                <div className="flex flex-col xl:flex-row xl:items-center gap-4">
                  {/* Left Label */}
                  <div className="shrink-0 flex items-center gap-2 border-b xl:border-b-0 xl:border-r border-slate-200 pb-2 xl:pb-0 xl:pr-5">
                    <div className="text-[11px] font-black uppercase tracking-wider text-[#0070f3] leading-tight">
                      TYPICAL {current.shortName.toUpperCase()} <br />
                      WORKFLOW
                    </div>
                  </div>

                  {/* 6 Process Steps with Chevron Connections */}
                  <div className="grid grid-cols-2 gap-2 sm:grid-cols-3 lg:grid-cols-6 flex-1">
                    {current.workflow.map((stepName, stepIdx) => (
                      <div
                        key={stepName}
                        className="relative flex items-center gap-2 rounded-xl bg-white border border-slate-200/80 px-3 py-2 shadow-2xs"
                      >
                        <div className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#0070f3] text-white text-[10px] font-bold">
                          {stepIdx + 1}
                        </div>
                        <span className="text-[11px] font-bold text-slate-700 leading-tight">
                          {stepName}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* ================= BOTTOM IMPACT IN NUMBERS BAR ================= */}
              <div className="mt-6 rounded-2xl border border-slate-200/80 bg-white p-4 sm:p-5 shadow-xs">
                <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
                  {/* Left Title */}
                  <div className="shrink-0 border-b lg:border-b-0 lg:border-r border-slate-200 pb-3 lg:pb-0 lg:pr-6">
                    <div className="text-xs font-black uppercase tracking-wider text-slate-400">
                      IMPACT <br />
                      IN NUMBERS
                    </div>
                  </div>

                  {/* 5 Stats / Trust Signals */}
                  <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5 flex-1">
                    {/* Stat 1 */}
                    <div className="flex items-center gap-2.5">
                      <FileText className="h-5 w-5 text-[#0070f3] shrink-0" />
                      <div>
                        <div className="text-sm font-black text-slate-900">{current.stats.projects}</div>
                        <div className="text-[11px] text-slate-500">Delivered</div>
                      </div>
                    </div>

                    {/* Stat 2 */}
                    <div className="flex items-center gap-2.5">
                      <Users className="h-5 w-5 text-[#0070f3] shrink-0" />
                      <div>
                        <div className="text-sm font-black text-slate-900">{current.stats.experience}</div>
                        <div className="text-[11px] text-slate-500">Years Experience</div>
                      </div>
                    </div>

                    {/* Stat 3 */}
                    <div className="flex items-center gap-2.5">
                      <Globe className="h-5 w-5 text-[#0070f3] shrink-0" />
                      <div>
                        <div className="text-sm font-black text-slate-900">Global</div>
                        <div className="text-[11px] text-slate-500">Execution Capability</div>
                      </div>
                    </div>

                    {/* Stat 4 */}
                    <div className="flex items-center gap-2.5">
                      <ShieldCheck className="h-5 w-5 text-emerald-600 shrink-0" />
                      <div>
                        <div className="text-sm font-black text-slate-900">Safer</div>
                        <div className="text-[11px] text-slate-500">Efficient Operations</div>
                      </div>
                    </div>

                    {/* Stat 5 */}
                    <div className="flex items-center gap-2.5">
                      <Leaf className="h-5 w-5 text-emerald-500 shrink-0" />
                      <div>
                        <div className="text-sm font-black text-slate-900">Sustainable</div>
                        <div className="text-[11px] text-slate-500">Engineering Solutions</div>
                      </div>
                    </div>
                  </div>

                  {/* Right Tagline */}
                  <div className="hidden xl:block border-l border-slate-200 pl-6 shrink-0 text-right">
                    <div className="text-[10px] font-mono font-bold uppercase tracking-wider text-slate-400">
                      ENGINEERING <br />
                      <span className="text-[#0070f3]">A SMARTER TOMORROW</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </AnimatedSection>
    </section>
  );
}

