import type { MegaMenuIconName } from './megaMenu';

export interface CareersGroup {
  heading?: string;
  items: string[];
}

export interface CareersSection {
  slug: string;
  label: string;
  icon: MegaMenuIconName;
  tagline?: string;
  intro?: string;
  groups?: CareersGroup[];
  cta?: { label: string; href: string };
}

export const careersContent: CareersSection[] = [
  {
    slug: 'why-join-gts',
    label: 'Why Join GTS',
    icon: 'Users',
    groups: [
      {
        items: [
          'Professional Development',
          'Global Projects',
          'Innovation',
          'Flexible Delivery',
          'Training',
          'Leadership Development',
          'Competitive Benefits',
          'Collaborative Culture'
        ]
      }
    ]
  },
  {
    slug: 'career-areas',
    label: 'Career Areas',
    icon: 'Briefcase',
    groups: [
      {
        items: ['Engineering', 'Digital Engineering', 'AI', 'Construction', 'Project Management', 'Business Development', 'Technology Partnerships', 'Corporate Services']
      }
    ]
  },
  {
    slug: 'csr',
    label: 'CSR',
    icon: 'HeartHandshake',
    tagline: 'Engineering With Purpose',
    intro:
      'We believe engineering creates lasting value not only through projects, but through positive contributions to society, education, sustainability, and our communities.',
    groups: [
      {
        heading: 'Focus Areas',
        items: [
          'STEM Education',
          'Community Development',
          'Environmental Stewardship',
          'Workforce Development',
          'Diversity & Inclusion',
          'Disaster Relief',
          'Employee Volunteering',
          'University Partnerships'
        ]
      }
    ],
    cta: { label: 'View Open Positions', href: '/menu/careers/employment-opportunities' }
  }
];
