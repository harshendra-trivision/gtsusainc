import type { MegaMenuIconName } from './megaMenu';

export interface AboutGroup {
  heading?: string;
  items: string[];
}

export interface AboutValue {
  title: string;
  description: string;
}

export interface AboutMilestone {
  year: string;
  title: string;
}

export interface AboutSection {
  slug: string;
  label: string;
  icon: MegaMenuIconName;
  tagline?: string;
  intro?: string[];
  groups?: AboutGroup[];
  values?: AboutValue[];
  milestones?: AboutMilestone[];
  flow?: string[];
  cta?: { label: string; href: string };
}

export const aboutSections: AboutSection[] = [
  {
    slug: 'who-we-are',
    label: 'Who We Are',
    icon: 'Users',
    intro: [
      'For more than a decade, GTS Engineering has partnered with industrial clients, EPC contractors, OEMs, and technology providers to deliver engineering, digital, and technology solutions across the complete asset lifecycle.',
      'From concept development and detailed engineering to construction support, digital transformation, AI-enabled engineering, and technology commercialization, we help organizations design smarter, build faster, operate more efficiently, and prepare for the future.',
      'Today, GTS combines multidisciplinary engineering expertise with digital innovation, artificial intelligence, and global delivery capabilities to support clients across energy, manufacturing, infrastructure, mission-critical facilities, and emerging industries.'
    ],
    groups: [
      {
        heading: 'Our Core Principles',
        items: ['Engineering Excellence', 'Safety & Quality', 'Innovation', 'Client Partnership', 'Integrity', 'Continuous Improvement']
      }
    ]
  },
  {
    slug: 'mission',
    label: 'Mission',
    icon: 'Target',
    tagline: 'Delivering Engineering Excellence Through Innovation',
    intro: [
      'To deliver world-class engineering, technology, construction, process safety, digital transformation, and AI-enabled solutions that help our clients solve complex industrial challenges, accelerate project delivery, enhance operational performance, reduce risk, and create sustainable long-term value through technical excellence, innovation, global collaboration, and an unwavering commitment to quality and safety.'
    ]
  },
  {
    slug: 'vision',
    label: 'Vision',
    icon: 'Eye',
    tagline: 'Engineering the Future. Empowering Industry.',
    intro: [
      "To be the world's most trusted engineering and technology solutions partner, empowering industries to design, build, operate, and optimize safer, smarter, and more sustainable assets through engineering excellence, digital innovation, artificial intelligence, and strategic technology partnerships."
    ]
  },
  {
    slug: 'purpose',
    label: 'Purpose',
    icon: 'Compass',
    intro: [
      'To advance industry through engineering excellence, innovation, and technology that improve the way the world designs, builds, and operates critical infrastructure for future generations.'
    ]
  },
  {
    slug: 'values',
    label: 'Values',
    icon: 'Heart',
    values: [
      { title: 'Engineering Excellence', description: 'We pursue the highest standards of technical quality, precision, and professional integrity in every project.' },
      { title: 'Safety & Responsibility', description: 'We prioritize the safety of people, assets, communities, and the environment in everything we do.' },
      { title: 'Innovation', description: 'We embrace emerging technologies, creative thinking, and continuous improvement to solve complex engineering challenges.' },
      { title: 'Client Partnership', description: "We build trusted, long-term relationships by understanding our clients' objectives and delivering measurable value." },
      { title: 'Collaboration', description: 'We believe the best solutions are achieved through teamwork, diversity of expertise, and global collaboration.' },
      { title: 'Integrity', description: 'We conduct business with honesty, transparency, accountability, and respect.' }
    ]
  },
  {
    slug: 'our-story',
    label: 'Our Story',
    icon: 'History',
    tagline: 'Engineering Beyond Design',
    intro: [
      'Founded with a vision of delivering world-class engineering solutions, GTS Engineering has evolved from a traditional engineering services company into a global Engineering, Technology, and AI-enabled solutions partner.',
      'Over the years, we have expanded our capabilities beyond conventional engineering by integrating digital engineering, process safety, construction engineering, AI, industrial automation, technology partnerships, and innovation into our service portfolio.',
      'Today, GTS supports clients throughout the complete industrial asset lifecycle — from concept to operations — while maintaining the flexibility, responsiveness, and client focus of an independent engineering company.'
    ],
    milestones: [
      { year: '2012', title: 'Company Established' },
      { year: '2014', title: 'Expansion into Global Engineering Delivery' },
      { year: '2016', title: 'Technology Representation & Commercialization' },
      { year: '2018', title: 'Digital Engineering Practice' },
      { year: '2020', title: 'AI & Digital Solutions' },
      { year: '2022', title: 'Innovation & Research Programs' },
      { year: '2024', title: 'Mission Critical Infrastructure Practice' }
    ]
  },
  {
    slug: 'leadership',
    label: 'Leadership',
    icon: 'Globe',
    tagline: 'Global Delivery Model — Engineering Without Boundaries',
    intro: [
      'GTS combines local client engagement with global engineering resources to deliver high-quality engineering solutions across multiple regions and time zones.',
      'Our collaborative delivery model enables us to provide scalable engineering support while maintaining technical consistency, quality, and responsiveness throughout every project.'
    ],
    flow: ['Client', 'Consulting', 'Engineering', 'Digital Engineering', 'Procurement Support', 'Construction Support', 'Commissioning', 'Operations', 'Optimization']
  },
  {
    slug: 'technology-partners',
    label: 'Technology Partners',
    icon: 'Handshake',
    tagline: 'Partnering with Industry Leaders',
    intro: [
      'GTS collaborates with global technology providers, engineering software companies, OEMs, automation vendors, cloud platforms, and AI innovators to deliver integrated engineering solutions.'
    ],
    groups: [
      {
        heading: 'Categories',
        items: [
          'Engineering Software',
          'Industrial Automation',
          'Cloud',
          'Artificial Intelligence',
          'Simulation',
          'Digital Twins',
          'Cybersecurity',
          'Industrial IoT',
          'Technology Licensing',
          'Technology Commercialization'
        ]
      }
    ]
  },
  {
    slug: 'locations',
    label: 'Locations',
    icon: 'MapPin',
    intro: [
      'With strategic operations across the United States and India, GTS combines global engineering standards, regional expertise, and AI-enabled delivery capabilities to provide cost-effective, high-quality engineering solutions worldwide.'
    ],
    groups: [
      {
        items: ['United States — Houston Project Management', 'India — Global Engineering Centers']
      }
    ]
  },
  {
    slug: 'our-advantage',
    label: 'Our Advantage',
    icon: 'Award',
    groups: [
      {
        items: ['Engineering Excellence', 'Global Delivery', 'AI', 'Technology Partnerships', 'Innovation', 'Quality', 'Design-Build', 'Flexible Delivery']
      }
    ]
  }
];

export interface QualityCommitment {
  title: string;
  description: string;
}

export interface QualityApproachGroup {
  heading: string;
  items: string[];
}

export interface QualityCertification {
  code: string;
  title: string;
}

export const qualityContent = {
  slug: 'quality',
  label: 'Quality',
  icon: 'BadgeCheck' as MegaMenuIconName,
  tagline: 'Quality Is Designed Into Every Project',
  intro: [
    'Quality is not an inspection performed at the end of a project — it is embedded throughout every stage of our engineering process.',
    'Our integrated quality management approach combines engineering standards, technical reviews, digital workflows, and continuous improvement to deliver reliable, consistent, and high-quality solutions.',
    'At GTS Engineering, quality is more than compliance — it is our commitment to engineering excellence, innovation, safety, and delivering solutions our clients can trust throughout the entire asset lifecycle.'
  ],
  policy:
    'At GTS Engineering, quality is the foundation of everything we do. We are committed to delivering safe, innovative, and high-quality engineering, technology, and digital solutions that consistently exceed client expectations through technical excellence, robust quality management systems, continuous improvement, and a culture of integrity, collaboration, and innovation. By integrating engineering expertise, digital technologies, artificial intelligence, and disciplined project execution, we create reliable, sustainable, and value-driven solutions that support our clients throughout the entire asset lifecycle.',
  philosophy:
    'Quality is not something we inspect at the end of a project — it is engineered into every decision, every process, and every deliverable from concept to completion.',
  principles: ['Engineering Standards', 'Independent Design Reviews', 'Digital QA/QC', 'Lessons Learned', 'Continuous Improvement', 'Risk Management', 'Information Security', 'Client Satisfaction'],
  commitments: [
    { title: 'Engineering Excellence', description: 'Deliver technically sound, innovative, and value-driven engineering solutions.' },
    { title: 'Client Success', description: "Understand our clients' objectives and consistently deliver solutions that create measurable business value." },
    { title: 'Safety & Risk Management', description: 'Integrate safety, process safety, regulatory compliance, and risk management into every phase of the project lifecycle.' },
    { title: 'Innovation & Digital Excellence', description: 'Leverage artificial intelligence, digital engineering, automation, and advanced technologies to improve quality, efficiency, and project outcomes.' },
    { title: 'Continuous Improvement', description: 'Continuously improve our people, processes, technologies, and management systems through lessons learned, innovation, and performance measurement.' },
    { title: 'Integrity & Accountability', description: 'Maintain the highest standards of ethics, transparency, professionalism, and accountability in every engagement.' }
  ] satisfies QualityCommitment[],
  objectives: [
    'Deliver projects safely, on time, and within budget.',
    'Achieve the highest levels of engineering accuracy and technical excellence.',
    'Maintain robust engineering review and quality assurance processes.',
    'Enhance customer satisfaction through responsive service and collaborative partnerships.',
    'Drive continuous improvement through innovation and digital transformation.',
    'Protect client information through secure digital practices and effective data governance.',
    'Invest in employee development and technical competency.',
    'Support sustainable engineering solutions that create long-term value for clients and society.'
  ],
  approach: [
    { heading: 'Engineering Quality', items: ['Independent Design Reviews', 'Multidisciplinary Coordination', 'Design Verification & Validation', 'Engineering Standards Compliance'] },
    { heading: 'Digital Quality', items: ['Digital Engineering Workflows', 'Model Validation', 'Automated Quality Checks', 'Engineering Data Integrity'] },
    { heading: 'Project Quality', items: ['Risk-Based Planning', 'Stage-Gate Reviews', 'Change Management', 'Lessons Learned'] },
    { heading: 'Operational Quality', items: ['Continuous Improvement', 'Client Feedback', 'Performance Metrics', 'Knowledge Management'] }
  ] satisfies QualityApproachGroup[],
  certifications: [
    { code: 'ISO 9001', title: 'Quality Management' },
    { code: 'ISO 14001', title: 'Environmental Management' },
    { code: 'ISO 45001', title: 'Occupational Health & Safety' },
    { code: 'ISO 27001', title: 'Information Security' }
  ] satisfies QualityCertification[]
};
