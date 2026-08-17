import type { MegaMenuCategory } from './megaMenu';

// Order follows the site's "Suggested Insights Flow": Featured -> Topics -> Articles -> White Papers ->
// Case Studies -> Guides -> Knowledge Centers -> Technology Updates -> Standards -> Resources.
export const insightsContent: MegaMenuCategory[] = [
  {
    slug: 'featured-insights',
    label: 'Featured Insights',
    icon: 'Star',
    groups: [
      {
        items: ['AI Transforming Engineering Design', 'Future of LNG Infrastructure', 'Digital Twins in Industrial Facilities']
      }
    ]
  },
  {
    slug: 'browse-by-topic',
    label: 'Browse by Topic',
    icon: 'Tag',
    groups: [
      {
        items: [
          'Engineering',
          'Digital Engineering',
          'Artificial Intelligence',
          'Process Safety',
          'Data Centers',
          'Semiconductors',
          'Hydrogen',
          'Energy Transition',
          'Water',
          'Construction',
          'Project Delivery',
          'Technology',
          'Innovation',
          'Sustainability'
        ]
      }
    ]
  },
  {
    slug: 'white-papers',
    label: 'White Papers',
    icon: 'FileText',
    groups: [
      {
        items: ['AI in Industrial Engineering', 'Digital Twin Implementation', 'Carbon Capture Engineering', 'Modular Plant Design']
      }
    ]
  },
  {
    slug: 'industry-news',
    label: 'Industry News',
    icon: 'Newspaper',
    groups: [
      {
        items: ['Market developments', 'Regulations', 'Technology announcements', 'Infrastructure investments']
      }
    ]
  },
  {
    slug: 'engineering-blogs',
    label: 'Engineering Blogs',
    icon: 'PenTool',
    groups: [
      {
        items: ['Lessons learned', 'Design approaches', 'Engineering best practices', 'Project experiences']
      }
    ]
  },
  {
    slug: 'case-studies',
    label: 'Case Studies',
    icon: 'Briefcase',
    description: 'Real-world engineering challenges, the GTS solution, and the measurable results delivered. See our full portfolio of representative projects.',
    groups: [
      {
        heading: 'Every Case Study Includes',
        items: ['Challenge', 'Solution', 'Results']
      }
    ]
  },
  {
    slug: 'engineering-guides',
    label: 'Engineering Guides',
    icon: 'BookMarked',
    groups: [
      {
        items: [
          'What is FEED?',
          'HAZOP vs HAZID',
          'EPC vs EPCM',
          'Digital Twins Explained',
          "Owner's Engineer Guide",
          'Modular Plant Design',
          'Process Safety Basics',
          'Data Center Engineering Fundamentals'
        ]
      }
    ]
  },
  {
    slug: 'industry-knowledge-centers',
    label: 'Industry Knowledge Centers',
    icon: 'Library',
    groups: [
      {
        heading: 'Oil & Gas',
        items: ['Articles', 'White Papers', 'Projects', 'Technology', 'Regulations']
      },
      {
        heading: 'Data Centers',
        items: ['Cooling Systems', 'Mission Critical Power', 'Digital Twins', 'AI Infrastructure', 'Sustainability']
      },
      {
        heading: 'Hydrogen',
        items: ['Production', 'Storage', 'Transportation', 'Safety', 'Decarbonization']
      },
      {
        heading: 'Semiconductors',
        items: ['Cleanrooms', 'High-Purity Systems', 'Utilities', 'Automation', 'Facility Engineering']
      }
    ]
  },
  {
    slug: 'technology-updates',
    label: 'Technology Updates',
    icon: 'RefreshCw',
    description: 'New developments in:',
    groups: [
      {
        items: ['BIM', 'AI', 'Digital Twins', 'Automation', 'Cloud Engineering', 'Industrial Software']
      }
    ]
  },
  {
    slug: 'standards-compliance',
    label: 'Standards & Compliance',
    icon: 'BadgeCheck',
    groups: [
      {
        items: ['API', 'ASME', 'IEC', 'IEEE', 'NFPA', 'OSHA', 'ISO']
      }
    ]
  },
  {
    slug: 'resources',
    label: 'Resources',
    icon: 'FolderOpen',
    groups: [
      {
        items: [
          'Company Profile',
          'Capability Statements',
          'Service Brochures',
          'Technical Papers',
          'Engineering Checklists',
          'Project Summaries',
          'Industry Reports',
          'Webinar Recordings'
        ]
      }
    ]
  }
];
