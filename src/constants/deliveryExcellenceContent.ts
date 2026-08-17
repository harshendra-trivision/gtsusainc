import type { MegaMenuIconName } from './megaMenu';

export interface DeliveryFlow {
  title?: string;
  steps: string[];
}

export interface DeliveryGroup {
  heading?: string;
  items: string[];
}

export interface DeliverySection {
  slug: string;
  label: string;
  icon: MegaMenuIconName;
  tagline?: string;
  intro?: string;
  flows?: DeliveryFlow[];
  groups?: DeliveryGroup[];
  cta?: { label: string; href: string };
}

export const deliveryExcellenceContent: DeliverySection[] = [
  {
    slug: 'delivery-philosophy',
    label: 'Our Delivery Philosophy',
    icon: 'Compass',
    tagline: 'Engineering Without Compromise',
    intro:
      'We believe successful projects are built on technical excellence, proactive collaboration, disciplined execution, and continuous improvement. Every engagement is guided by five principles:',
    groups: [
      {
        items: ['Safety First', 'Engineering Excellence', 'Client Partnership', 'Digital Innovation', 'Continuous Improvement']
      }
    ]
  },
  {
    slug: 'global-delivery-model',
    label: 'Global Delivery Model',
    icon: 'Globe',
    intro:
      'By combining local project leadership with global engineering execution, GTS delivers complex industrial projects across every phase of the asset lifecycle.',
    flows: [
      {
        title: 'Project Lifecycle',
        steps: ['Understand', 'Consult', 'Plan', 'Engineer', 'Integrate', 'Procure', 'Construct', 'Commission', 'Operate', 'Optimize']
      },
      {
        title: 'Delivery Structure',
        steps: [
          'Client',
          'Houston Project Management',
          'Lead Engineering Team',
          'Global Engineering Centers',
          'Subject Matter Experts',
          'Technology Partners',
          'Construction Partners',
          'Project Delivery'
        ]
      }
    ],
    groups: [
      {
        items: [
          'Local project leadership',
          'Global engineering execution',
          'Multidisciplinary collaboration',
          'Time-zone advantage',
          'Scalable resources',
          'Consistent engineering standards'
        ]
      }
    ]
  },
  {
    slug: 'project-execution-framework',
    label: 'Project Execution Framework',
    icon: 'ListChecks',
    intro: 'Every engagement moves through six coordinated phases, each with defined engineering deliverables and controls.',
    groups: [
      { heading: 'Strategy & Planning', items: ['Project definition', 'Feasibility', 'Scope development', 'Risk identification'] },
      { heading: 'Engineering', items: ['FEED', 'Detailed Engineering', 'Design Reviews', 'Multidiscipline Coordination'] },
      { heading: 'Procurement Support', items: ['Vendor Evaluation', 'Technical Bid Evaluation', 'Material Management', 'Supplier Coordination'] },
      { heading: 'Construction Support', items: ['Site Engineering', 'Construction Packages', 'Technical Queries', 'Field Engineering'] },
      { heading: 'Commissioning', items: ['Startup Support', 'FAT/SAT', 'System Validation', 'Performance Testing'] },
      { heading: 'Operations Support', items: ['Asset Management', 'Digital Twins', 'Predictive Maintenance', 'Optimization'] }
    ]
  },
  {
    slug: 'project-controls',
    label: 'Integrated Project Controls',
    icon: 'Gauge',
    intro: 'Integrated project controls keep engineering, cost, and schedule aligned from kickoff to closeout.',
    groups: [
      {
        items: [
          'Schedule Management',
          'Cost Control',
          'Engineering Progress Tracking',
          'Risk Management',
          'Change Management',
          'Document Control',
          'Digital Dashboards',
          'KPI Reporting'
        ]
      }
    ]
  },
  {
    slug: 'quality-management',
    label: 'Quality Management',
    icon: 'ClipboardCheck',
    intro: 'Every deliverable passes through a structured review chain before it reaches the client.',
    flows: [
      {
        steps: ['Independent Design Reviews', 'QA/QC', 'Model Validation', 'Technical Approval', 'Client Review', 'Final Deliverable']
      }
    ],
    cta: { label: 'Explore Our Quality Management System', href: '/menu/delivery-enablers/quality-management-system' }
  },
  {
    slug: 'digital-delivery',
    label: 'Digital Delivery',
    icon: 'Layers',
    intro: 'Digital delivery is core to how GTS executes engineering — not an add-on.',
    groups: [
      {
        items: [
          'BIM',
          'Digital Engineering',
          'Engineering Data Management',
          'Digital Twins',
          'Cloud Collaboration',
          'AI-assisted Engineering',
          'Document Control',
          'Common Data Environment (CDE)'
        ]
      }
    ]
  },
  {
    slug: 'collaboration-model',
    label: 'Collaboration Model',
    icon: 'Users',
    tagline: 'One integrated team.',
    flows: [
      {
        steps: ['Owner', 'GTS', 'EPC', 'OEM', 'Technology Partner', 'Suppliers', 'Construction', 'Operations']
      }
    ]
  },
  {
    slug: 'delivery-metrics',
    label: 'Delivery Metrics',
    icon: 'Activity',
    intro: 'A snapshot of how GTS delivers, today.',
    groups: [
      {
        items: [
          'Multi-disciplinary Engineering',
          'Global Delivery Model',
          '24/7 Engineering Collaboration',
          'ISO Quality Management',
          'Digital Engineering Workflows',
          'Zero Compromise on Safety',
          'Responsive Project Support',
          'Scalable Engineering Teams'
        ]
      }
    ]
  },
  {
    slug: 'delivery-models',
    label: 'Delivery Models',
    icon: 'Boxes',
    intro: 'Flexible engagement models built around how you want to work with us.',
    groups: [
      {
        items: ['Engineering Services', 'EPCM Support', "Owner's Engineer", 'Staff Augmentation', 'Dedicated Engineering Teams', 'Technology Representation', 'Design-Build Delivery']
      }
    ]
  },
  {
    slug: 'why-gts',
    label: 'Why Clients Choose GTS',
    icon: 'Award',
    groups: [
      {
        items: [
          'Engineering Excellence',
          'Global Delivery',
          'Flexible Engagement Models',
          'Technology Partnerships',
          'AI-enabled Engineering',
          'Process Safety',
          'Integrated Design-Build',
          'Long-term Client Relationships'
        ]
      }
    ]
  }
];
