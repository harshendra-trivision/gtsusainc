import type { MegaMenuCategory } from './megaMenu';

export const aiDigitalContent: MegaMenuCategory[] = [
  {
    slug: 'ai-engineering',
    label: 'AI Engineering',
    icon: 'Brain',
    description:
      'Leverage artificial intelligence to enhance engineering workflows, accelerate design decisions, automate repetitive tasks, and improve engineering quality across the entire project lifecycle.',
    groups: [
      {
        heading: 'Capabilities',
        items: [
          'AI-assisted engineering design',
          'Intelligent engineering workflows',
          'Engineering optimization',
          'AI-enabled decision support',
          'Design validation',
          'Engineering knowledge assistants'
        ]
      }
    ]
  },
  {
    slug: 'engineering-automation',
    label: 'Engineering Automation',
    icon: 'Cog',
    description:
      'Automate repetitive engineering tasks, documentation, calculations, and workflows to improve efficiency, reduce errors, and accelerate project delivery.',
    groups: [
      {
        heading: 'Capabilities',
        items: ['Automated design generation', 'Engineering workflow automation', 'Document automation', 'Calculation automation', 'Design rule validation', 'CAD automation']
      }
    ]
  },
  {
    slug: 'engineering-copilots',
    label: 'Engineering Copilots',
    icon: 'Bot',
    description:
      'Deploy AI-powered engineering assistants that support engineers by providing technical knowledge, standards guidance, document search, design recommendations, and project-specific insights.',
    groups: [
      {
        heading: 'Capabilities',
        items: ['Engineering chat assistants', 'Standards lookup', 'Technical Q&A', 'Intelligent engineering search', 'Engineering knowledge retrieval', 'Project assistants']
      }
    ]
  },
  {
    slug: 'document-intelligence',
    label: 'Document Intelligence',
    icon: 'FileSearch',
    description: 'Use AI to understand, classify, extract, validate, and manage engineering documentation throughout the project lifecycle.',
    groups: [
      {
        heading: 'Capabilities',
        items: [
          'Intelligent document processing',
          'Drawing interpretation',
          'Specification analysis',
          'Data extraction',
          'Engineering document classification',
          'Contract and compliance review'
        ]
      }
    ]
  },
  {
    slug: 'knowledge-management',
    label: 'Knowledge Management',
    icon: 'BookOpen',
    description: 'Capture, organize, and deliver engineering knowledge through intelligent platforms that preserve organizational expertise and improve collaboration.',
    groups: [
      {
        heading: 'Capabilities',
        items: ['Knowledge repositories', 'AI-powered search', 'Lessons learned databases', 'Engineering standards management', 'Best practice libraries', 'Expert knowledge capture']
      }
    ]
  },
  {
    slug: 'digital-twins',
    label: 'Digital Twins',
    icon: 'Layers',
    description:
      'Create intelligent digital representations of physical assets that enable real-time monitoring, predictive analysis, operational optimization, and lifecycle management.',
    groups: [
      {
        heading: 'Capabilities',
        items: ['Asset Digital Twins', 'Facility Digital Twins', 'Process Digital Twins', 'Operations Digital Twins', 'Real-time asset monitoring', 'Predictive asset performance']
      }
    ]
  },
  {
    slug: 'industrial-analytics',
    label: 'Industrial Analytics',
    icon: 'BarChart3',
    description: 'Transform engineering and operational data into actionable insights through advanced analytics, visualization, and AI-driven decision support.',
    groups: [
      {
        heading: 'Capabilities',
        items: ['Operational dashboards', 'KPI monitoring', 'Predictive analytics', 'Root cause analysis', 'Performance benchmarking', 'Asset analytics']
      }
    ]
  },
  {
    slug: 'computer-vision',
    label: 'Computer Vision',
    icon: 'Eye',
    description: 'Apply AI-powered image and video analysis to improve safety, quality, inspections, and industrial operations.',
    groups: [
      {
        heading: 'Capabilities',
        items: ['Automated inspections', 'Defect detection', 'PPE compliance monitoring', 'Equipment condition assessment', 'Construction progress tracking', 'Safety monitoring']
      }
    ]
  },
  {
    slug: 'generative-ai',
    label: 'Generative AI',
    icon: 'Wand2',
    description: 'Harness next-generation AI to accelerate engineering documentation, design development, reporting, proposal creation, and technical communication.',
    groups: [
      {
        heading: 'Capabilities',
        items: ['Technical content generation', 'Proposal development', 'Engineering report generation', 'Design documentation', 'Code generation', 'Workflow acceleration']
      }
    ]
  },
  {
    slug: 'digital-transformation',
    label: 'Digital Transformation',
    icon: 'Rocket',
    description: 'Help organizations modernize engineering, operations, and business processes through digital technologies, automation, AI, and intelligent data management.',
    groups: [
      {
        heading: 'Capabilities',
        items: ['Digital strategy', 'Engineering modernization', 'Smart operations', 'Digital engineering platforms', 'Process transformation', 'Enterprise digital roadmaps']
      }
    ]
  }
];
