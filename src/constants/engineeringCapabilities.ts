export interface EngineeringCapability {
  id: string;
  slug: string;
  title: string;
  tagline: string;
  hero: string;
  introduction: string;
  cardDescription: string;
  cardPills: string[];
  image: string;
  iconName: 'Factory' | 'Cog' | 'Cpu' | 'BrainCircuit' | 'Building2' | 'FileText' | 'Briefcase' | 'BarChart';
  sections: string[];
  deliverables?: string[];
  software?: string[];
  industries?: string[];
}

export const engineeringCapabilities: EngineeringCapability[] = [
  {
    id: 'plant-process-engineering',
    slug: 'plant-process-engineering',
    title: 'Plant & Process Engineering',
    tagline: 'PROCESSING A CLEANER TOMORROW',
    hero: 'Engineering Complete Process Facilities from Concept to Commissioning',
    introduction:
      'GTS delivers multidisciplinary plant and process engineering for oil & gas, LNG, petrochemical, chemical, hydrogen, renewable fuels, pharmaceuticals, food processing, and industrial manufacturing facilities.',
    cardDescription:
      'End-to-end engineering for process plants, refineries, LNG, chemicals, and industrial facilities.',
    cardPills: ['FEED', 'Process Design', 'Piping', 'Pipeline', 'Offshore', 'EPC Support'],
    image: '/image/OUR ENGINEERING SOLUTION.jpg',
    iconName: 'Factory',
    sections: [
      'Process Design',
      'FEED Engineering',
      'Detailed Engineering',
      'Plant Layout',
      'Piping Engineering',
      'Equipment Engineering',
      'Utility Systems',
      'Process Simulation',
      'EPC Support',
      'Commissioning Support',
    ],
    deliverables: [
      'PFDs',
      'P&IDs',
      'Heat & Mass Balance',
      'Equipment Datasheets',
      'Line Lists',
      'Hydraulic Calculations',
      'Utility Design',
      'Material Requisitions',
    ],
    industries: [
      'Oil & Gas',
      'LNG',
      'Chemical',
      'Distillery',
      'Power',
      'Hydrogen',
      'Water',
    ],
  },
  {
    id: 'product-engineering',
    slug: 'product-engineering',
    title: 'Product Engineering',
    tagline: 'IDEAS TO IMPACT',
    hero: 'Engineering Better Products from Concept to Production',
    introduction:
      'GTS provides comprehensive mechanical product development, from concept generation and CAD modeling through reverse engineering, design optimization, and prototype validation.',
    cardDescription:
      'Mechanical product development from concept to manufacturing through CAD, reverse engineering and prototyping.',
    cardPills: ['Mechanical Design', 'CAD', 'CAE', 'Reverse Engineering', 'DFM', 'Prototyping'],
    image: '/image/Global-Delivery-Model.jpg',
    iconName: 'Cog',
    sections: [
      'Mechanical Design',
      'Product Development',
      'Reverse Engineering',
      'CAD Modeling',
      'Design Optimization',
      'DFM',
      'GD&T',
      'Prototype Development',
    ],
    deliverables: [
      '3D CAD Models',
      'Manufacturing Drawings',
      'BOM',
      'Assembly Drawings',
      'Design Validation',
      'Prototype Support',
    ],
  },
  {
    id: 'simulation-digital-validation',
    slug: 'simulation-digital-validation',
    title: 'Simulation & Digital Validation',
    tagline: 'VIRTUAL ENGINEERING REAL RESULTS',
    hero: 'Virtual Engineering Before Physical Manufacturing',
    introduction:
      'High-fidelity engineering simulation, multi-physics analysis, and digital validation to optimize design performance, enhance reliability, and accelerate physical testing cycles.',
    cardDescription:
      'Advanced CAE, CFD, FEA and digital validation to optimize performance, reliability, and safety.',
    cardPills: ['FEA', 'CFD', 'Thermal Analysis', 'Structural Analysis', 'Optimization', 'Fatigue'],
    image: '/image/Global-Delivery-Model.jpg',
    iconName: 'Cpu',
    sections: [
      'FEA',
      'CFD',
      'Thermal Analysis',
      'Fatigue Analysis',
      'Dynamic Analysis',
      'Vibration Studies',
      'Design Optimization',
      'Digital Validation',
    ],
    software: ['ANSYS', 'Abaqus', 'LS-DYNA', 'HyperMesh'],
  },
  {
    id: 'automation-ai-industry-4',
    slug: 'automation-ai-industry-4',
    title: 'Automation, AI & Industry 4.0',
    tagline: 'AUTOMATION INTELLIGENCE HIGHER PERFORMANCE',
    hero: 'Connecting Intelligent Factories with Smart Automation',
    introduction:
      'End-to-end industrial automation, DCS/SCADA programming, AI-driven operations, and IIoT architectures to build smart, connected, and autonomous industrial facilities.',
    cardDescription:
      'Industrial automation, control systems and AI-driven solutions for intelligent operations.',
    cardPills: ['SCADA', 'PLC', 'Digital Twins', 'Industrial IoT', 'AI Analytics', 'Predictive Maintenance'],
    image: '/image/Global-Delivery-Model.jpg',
    iconName: 'BrainCircuit',
    sections: [
      'PLC Programming',
      'SCADA',
      'DCS',
      'HMI',
      'Industrial IoT',
      'AI Analytics',
      'Predictive Maintenance',
      'Digital Twins',
    ],
    deliverables: [
      'Control Philosophy',
      'PLC Programs',
      'SCADA Screens',
      'FAT/SAT',
      'Instrument Index',
    ],
  },
  {
    id: 'steel-detailing-structural-engineering',
    slug: 'steel-detailing-structural-engineering',
    title: 'Steel Detailing & Structural Engineering',
    tagline: 'STRONGER INFRASTRUCTURE FOR A BRIGHTER TOMORROW',
    hero: 'Structural Engineering for Industrial Infrastructure',
    introduction:
      'Precision structural steel detailing, Tekla 3D modeling, connection design, and fabrication drawings for heavy industrial facilities, pipe racks, platforms, and infrastructure assets.',
    cardDescription:
      'High-accuracy structural design, steel detailing and fabrication support for industrial and infrastructure projects.',
    cardPills: ['Structural Design', 'Tekla Modeling', 'Shop Drawings', 'Pipe Racks', 'Platforms'],
    image: '/image/steal detailing .jpg',
    iconName: 'Building2',
    sections: [
      'Structural Design',
      'Steel Detailing',
      'Tekla Modeling',
      'Pipe Rack Design',
      'Platforms',
      'Pipe Supports',
      'Shop Drawings',
      'Fabrication Drawings',
    ],
    deliverables: [
      'Tekla 3D Models',
      'Fabrication Drawings',
      'Shop Detail Drawings',
      'Erection Diagrams',
      'Anchor Bolt Plans',
      'Advanced Bill of Materials (ABM)',
    ],
  },
  {
    id: 'technical-documentation-asset-intelligence',
    slug: 'technical-documentation-asset-intelligence',
    title: 'Technical Documentation & Asset Intelligence',
    tagline: 'ENGINEERING INFORMATION FOR LONGER ASSET LIFE',
    hero: 'Engineering Information that Supports the Entire Asset Lifecycle',
    introduction:
      'Comprehensive engineering data management, PLM administration, interactive O&M manuals, and intelligent asset documentation to support compliance, maintenance, and lifecycle operations.',
    cardDescription:
      'Structured engineering content, PLM support and asset documentation for the complete asset lifecycle.',
    cardPills: ['PLM', 'Engineering Data Management', 'Asset Documentation', 'Intelligent Documentation'],
    image: '/image/Global-Delivery-Model.jpg',
    iconName: 'FileText',
    sections: [
      'PLM',
      'Engineering Data Management',
      'Technical Manuals',
      'O&M Manuals',
      'Asset Documentation',
      'Intelligent Documentation',
      'Document Control',
      'Digital Records',
    ],
    deliverables: [
      'Interactive O&M Manuals',
      'PLM Data Schemas',
      'As-Built Documentation',
      'Compliance Records',
      'Digital Parts Catalogs',
      'Asset Information Models',
    ],
  },
  {
    id: 'project-engineering-advisory',
    slug: 'project-engineering-advisory',
    title: 'Project Engineering & Advisory',
    tagline: 'EXPERTISE THAT DELIVERS',
    hero: 'Managing Engineering Projects from Planning through Delivery',
    introduction:
      'Integrated project management, schedule controls, cost engineering, owner’s engineering advisory, and commissioning oversight to deliver complex capital projects on time and within budget.',
    cardDescription:
      'Engineering advisory, project controls, commissioning support and lifecycle consulting.',
    cardPills: ['Project Controls', 'Cost Engineering', 'Commissioning Support', "Owner's Engineer"],
    image: '/image/project and program support.jpg',
    iconName: 'Briefcase',
    sections: [
      'Project Management',
      'Project Controls',
      'Cost Engineering',
      'Schedule Management',
      'Risk Management',
      "Owner's Engineer",
      'Commissioning',
      'Construction Support',
    ],
    deliverables: [
      'Project Execution Plans (PEP)',
      'Cost Estimates & WBS',
      'Integrated Master Schedules (Primavera/MS Project)',
      'Risk Registers',
      'Commissioning Checklists',
      'Construction Handover Packages',
    ],
  },
  {
    id: 'digital-engineering-asset-lifecycle',
    slug: 'digital-engineering-asset-lifecycle',
    title: 'Digital Engineering & Asset Lifecycle',
    tagline: 'DIGITAL TODAY SUSTAINABLE TOMORROW',
    hero: 'Digital Transformation Across the Complete Asset Lifecycle',
    introduction:
      'Digital twin integration, asset performance management, spatial GIS analytics, predictive AI, and sustainability metrics to optimize industrial assets throughout their complete lifecycle.',
    cardDescription:
      'Digital twins, engineering analytics and lifecycle solutions to maximize asset performance and sustainability.',
    cardPills: ['Digital Twin', 'Data Analytics', 'GIS', 'AI Enabled Engineering', 'Sustainability'],
    image: '/image/digital enginerring.jpg',
    iconName: 'BarChart',
    sections: [
      'Digital Twin',
      'Asset Performance',
      'GIS',
      'Data Analytics',
      'AI Engineering',
      'Predictive Analytics',
      'Sustainability',
      'Lifecycle Optimization',
    ],
    deliverables: [
      'Digital Twin Architectures',
      'Asset Health Dashboards',
      'GIS Spatial Models',
      'Predictive Failure Models',
      'Carbon & Energy Footprint Reports',
      'Lifecycle Cost Models',
    ],
  },
];

export { engineeringCapabilities as solutionCapabilities };
