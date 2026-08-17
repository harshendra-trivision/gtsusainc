import type { MegaMenuIconName } from './megaMenu';

export interface ContactSection {
  slug: string;
  label: string;
  icon: MegaMenuIconName;
  tagline: string;
  intro: string;
  listHeading: string;
  items: string[];
  ctaLabel: string;
  ctaHref: string;
}

export const contactSections: ContactSection[] = [
  {
    slug: 'request-consultation',
    label: 'Request Consultation',
    icon: 'MessageSquare',
    tagline: 'Engineering Expertise Starts with a Conversation',
    intro:
      'Our engineering and technical specialists are available to discuss your project requirements, operational challenges, and long-term objectives. We work collaboratively with clients to identify practical solutions that deliver measurable value.',
    listHeading: 'Ideal for',
    items: ['Engineering Consulting', 'Front-End Engineering & Design (FEED)', 'Process Safety', 'Digital Transformation', 'AI & Digital Solutions', 'Mission Critical Infrastructure', 'Technology Evaluation'],
    ctaLabel: 'Schedule a Consultation',
    ctaHref: '#contact-form'
  },
  {
    slug: 'request-proposal',
    label: 'Request Proposal',
    icon: 'FileText',
    tagline: 'Tell Us About Your Project',
    intro:
      "Whether you're planning a greenfield facility, brownfield expansion, modernization project, or digital transformation initiative, we'll prepare a tailored proposal aligned with your technical, commercial, and schedule requirements.",
    listHeading: 'Proposal Types',
    items: ['Engineering Services', 'EPCM Support', 'Construction Engineering', 'Digital Engineering', 'Process Safety Studies', 'AI & Automation Solutions', 'Technology Representation', 'Strategic Business Development'],
    ctaLabel: 'Request a Proposal',
    ctaHref: '#contact-form'
  },
  {
    slug: 'partner-with-us',
    label: 'Partner With Us',
    icon: 'Handshake',
    tagline: 'Strategic Partnerships',
    intro:
      'We welcome opportunities to collaborate with technology providers, OEMs, EPC contractors, engineering firms, research institutions, universities, and innovative startups to deliver integrated engineering and technology solutions.',
    listHeading: 'Partnership Opportunities',
    items: ['Technology Representation', 'OEM Partnerships', 'Joint Ventures', 'Engineering Collaboration', 'Research & Innovation', 'University Partnerships', 'Channel Partnerships', 'Global Delivery Alliances'],
    ctaLabel: 'Become a Partner',
    ctaHref: '#contact-form'
  },
  {
    slug: 'join-our-team',
    label: 'Join Our Team',
    icon: 'Briefcase',
    tagline: 'Build Your Career with GTS Engineering',
    intro:
      'Join a team of engineers, project professionals, and technology innovators working on projects that shape the future of energy, manufacturing, infrastructure, and digital engineering. We are always looking for talented professionals who are passionate about solving complex engineering challenges and driving innovation.',
    listHeading: 'Career Opportunities',
    items: ['Engineering', 'Project Management', 'Construction', 'Digital Engineering', 'AI & Data Analytics', 'Business Development', 'Technology Partnerships', 'Corporate Functions'],
    ctaLabel: 'Explore Careers',
    ctaHref: '/careers'
  },
  {
    slug: 'general-inquiry',
    label: 'General Inquiry',
    icon: 'HelpCircle',
    tagline: "We're Here to Help",
    intro:
      "Have a question about our services, partnerships, projects, or company? Contact our team and we'll connect you with the right specialist. Whether you're an existing client, a potential partner, a supplier, or simply looking to learn more about GTS Engineering, we'd be pleased to hear from you.",
    listHeading: '',
    items: [],
    ctaLabel: 'Send an Inquiry',
    ctaHref: '#contact-form'
  }
];
