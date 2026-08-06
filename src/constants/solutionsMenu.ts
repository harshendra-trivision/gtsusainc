export interface SolutionMenuGroup {
  heading?: string;
  items: string[];
}

export interface SolutionMenuCategory {
  slug: string;
  label: string;
  icon: 'Wrench' | 'ShieldCheck' | 'HardHat' | 'Boxes';
  tagline?: string;
  description?: string;
  groups: SolutionMenuGroup[];
}

export const solutionsMegaMenu: SolutionMenuCategory[] = [
  {
    slug: 'engineering-excellence',
    label: 'Engineering Excellence',
    icon: 'Wrench',
    groups: [
      {
        items: [
          'Plant Engineering',
          'Process Engineering',
          'Mechanical Engineering',
          'Piping Engineering',
          'Civil Engineering',
          'Structural Engineering',
          'Electrical Engineering',
          'Instrumentation & Controls',
          'Product Engineering',
          'Steel Detailing',
          'Engineering Design',
          'FEED',
          'Detailed Engineering',
          "Owner's Engineering",
          'EPCM Support'
        ]
      }
    ]
  },
  {
    slug: 'process-safety-risk-engineering',
    label: 'Process Safety & Risk Engineering',
    icon: 'ShieldCheck',
    groups: [
      {
        heading: 'Process Safety Management (PSM)',
        items: [
          'OSHA PSM Compliance',
          'CCPS Risk-Based Process Safety',
          'PSM Program Development',
          'PSM Audits',
          'Mechanical Integrity',
          'Management of Change (MOC)',
          'Process Hazard Information (PHI)',
          'Operating Procedures',
          'Safe Work Practices',
          'Incident Investigation'
        ]
      },
      {
        heading: 'Risk Engineering',
        items: ['HAZOP', 'HAZID', 'SIL / LOPA', 'QRA', 'FERA', 'Fire & Explosion Analysis', 'Consequence Modeling', 'Dispersion Modeling', 'Bow-Tie Analysis']
      },
      {
        heading: 'Functional Safety',
        items: ['IEC 61511', 'Safety Instrumented Systems (SIS)', 'SIL Verification', 'Safety Lifecycle Management']
      },
      {
        heading: 'Asset Integrity',
        items: ['RBI', 'Corrosion Studies', 'Mechanical Integrity', 'Pressure Systems', 'Reliability Engineering']
      }
    ]
  },
  {
    slug: 'construction-project-delivery',
    label: 'Construction & Project Delivery',
    icon: 'HardHat',
    groups: [
      {
        heading: 'Construction Engineering',
        items: [
          'Constructability Reviews',
          'Construction Planning',
          'Temporary Works Engineering',
          'Construction Sequencing',
          'Site Engineering',
          'Field Engineering',
          'Construction Work Packages'
        ]
      },
      {
        heading: 'Project Management',
        items: ['Project Controls', 'Cost Engineering', 'Schedule Engineering', 'Risk Management', 'Earned Value Management']
      },
      {
        heading: 'Construction Management',
        items: ['Site Supervision', 'Contractor Coordination', 'Quality Surveillance', 'Commissioning Support', 'Startup Support']
      },
      {
        heading: 'Procurement Engineering',
        items: ['Vendor Data Review', 'Material Take-Offs', 'Technical Procurement', 'Supplier Evaluation', 'Procurement Packages']
      }
    ]
  },
  {
    slug: 'integrated-design-build-solutions',
    label: 'Integrated Design-Build Solutions',
    icon: 'Boxes',
    tagline: 'Design. Engineer. Integrate. Deliver.',
    description:
      'GTS provides turnkey engineering and design-build solutions for modular, packaged, and mission-critical industrial facilities. By combining engineering, procurement support, technology partnerships, manufacturing coordination, and construction expertise, we deliver integrated solutions that reduce project schedules, improve quality, and simplify execution.',
    groups: [
      {
        heading: 'Capabilities',
        items: [
          'Containerized Water Treatment Plants',
          'Industrial Water & Wastewater Systems',
          'Packaged Process Plants',
          'Modular Process Skids',
          'Electrical E-Houses',
          'Modular Substations',
          'Motor Control Centers (MCC Buildings)',
          'Analyzer Shelters',
          'Instrument Buildings',
          'Control Rooms',
          'Operator Shelters',
          'Pump Stations',
          'Utility Modules',
          'Prefabricated Equipment Packages',
          'Balance of Plant Packages'
        ]
      }
    ]
  }
];
