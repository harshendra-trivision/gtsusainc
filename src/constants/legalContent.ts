export interface LegalSection {
  slug: string;
  heading: string;
  /** Paragraphs shown before the list. */
  intro?: string[];
  list?: string[];
  /** Paragraphs shown after the list. */
  outro?: string[];
  /** Renders the section as a postal/contact block instead of paragraphs. */
  address?: string[];
}

export interface LegalDocument {
  eyebrow: string;
  title: string;
  description: string;
  backgroundImage: string;
  effectiveDate?: string;
  sections: LegalSection[];
}

export const companyAddress = [
  'GTS Engineering® USA Incorporated',
  '10500 Valley Forge Drive',
  'Suite 202 B',
  'Houston, Texas 77042-1839',
  'USA'
];

export const privacyPolicy: LegalDocument = {
  eyebrow: 'Legal',
  title: 'Privacy Policy',
  description:
    'GTS Engineering® USA Incorporated ("GTS Engineering," "GTS," "we," "our," or "us") respects your privacy and is committed to protecting the information you provide while using our website and engineering consulting services.',
  backgroundImage: '/image/footer/privacy-policy-bg.jpg',
  effectiveDate: 'January 1, 2026',
  sections: [
    {
      slug: 'overview',
      heading: 'Overview',
      intro: ['This Privacy Policy explains how we collect, use, store, and protect your information.']
    },
    {
      slug: 'information-you-provide',
      heading: 'Information You Provide',
      intro: [
        'When you contact GTS, request a consultation, submit an RFQ, upload engineering drawings, or communicate with us, we may collect:'
      ],
      list: [
        'Name',
        'Company Name',
        'Job Title',
        'Business Email',
        'Phone Number',
        'Country',
        'Company Address',
        'Industry',
        'Project Information',
        'Uploaded Files',
        'Engineering Documents',
        'Drawings',
        'Specifications',
        'RFQs',
        'Scope of Work'
      ]
    },
    {
      slug: 'automatically-collected-information',
      heading: 'Automatically Collected Information',
      intro: ['Our website may automatically collect:'],
      list: [
        'IP Address',
        'Browser Type',
        'Operating System',
        'Device Type',
        'Pages Visited',
        'Time Spent on Site',
        'Referral Source',
        'Cookies',
        'Analytics Data'
      ]
    },
    {
      slug: 'how-we-use-your-information',
      heading: 'How We Use Your Information',
      intro: ['Your information may be used to:'],
      list: [
        'Respond to inquiries',
        'Prepare engineering proposals',
        'Review RFQs',
        'Develop project estimates',
        'Schedule consultations',
        'Improve customer service',
        'Improve our website',
        'Maintain security',
        'Meet contractual obligations',
        'Comply with applicable laws'
      ]
    },
    {
      slug: 'confidential-engineering-information',
      heading: 'Confidential Engineering Information',
      intro: ['We understand many engineering projects contain confidential information.', 'Documents such as:'],
      list: ['RFQs', 'Specifications', 'P&IDs', 'Drawings', 'CAD Files', 'Models', 'Design Packages'],
      outro: ['are treated as confidential and are only used for evaluating requested services unless otherwise agreed.']
    },
    {
      slug: 'cookies',
      heading: 'Cookies',
      intro: ['Our website uses cookies to:'],
      list: ['Improve website performance', 'Remember preferences', 'Analyze website traffic', 'Enhance user experience'],
      outro: ['Users may disable cookies through their browser settings.']
    },
    {
      slug: 'third-party-services',
      heading: 'Third-Party Services',
      intro: ['Our website may use trusted third-party providers including:'],
      list: ['Google Analytics', 'Microsoft Services', 'LinkedIn', 'Cloud Hosting Providers', 'Email Marketing Services'],
      outro: ['These providers maintain their own privacy policies.']
    },
    {
      slug: 'data-security',
      heading: 'Data Security',
      intro: ['GTS employs commercially reasonable administrative, technical, and organizational safeguards including:'],
      list: [
        'Secure servers',
        'Firewalls',
        'Access controls',
        'Encrypted communications where appropriate',
        'Controlled document access',
        'Role-based permissions'
      ],
      outro: ['No Internet transmission can be guaranteed 100% secure.']
    },
    {
      slug: 'data-retention',
      heading: 'Data Retention',
      intro: ['Information is retained only as long as reasonably necessary for:'],
      list: ['Project execution', 'Business operations', 'Legal obligations', 'Contractual requirements']
    },
    {
      slug: 'international-users',
      heading: 'International Users',
      intro: [
        'Our services support clients worldwide.',
        'Information may be processed in the United States or other countries where GTS Engineering operates or provides engineering support.'
      ]
    },
    {
      slug: 'your-rights',
      heading: 'Your Rights',
      intro: ['Depending on your jurisdiction, you may request:'],
      list: [
        'Access to your data',
        'Correction',
        'Deletion',
        'Restriction of processing',
        'Withdrawal of consent',
        'Data portability (where applicable)'
      ]
    },
    {
      slug: 'changes',
      heading: 'Changes',
      intro: ['This Privacy Policy may be updated periodically.', 'The latest version will always appear on this website.']
    },
    {
      slug: 'contact',
      heading: 'Contact',
      address: companyAddress
    }
  ]
};

export const termsOfUse: LegalDocument = {
  eyebrow: 'Legal',
  title: 'Terms of Use',
  description: 'The terms that govern your access to and use of the GTS Engineering® USA Incorporated website.',
  backgroundImage: '/image/footer/terms-of-use-bg.jpg',
  sections: [
    {
      slug: 'acceptance',
      heading: 'Acceptance',
      intro: ['By accessing this website, you agree to these Terms of Use.']
    },
    {
      slug: 'website-purpose',
      heading: 'Website Purpose',
      intro: ['The website provides information regarding:'],
      list: [
        'Engineering Services',
        'Consulting',
        'Digital Engineering',
        'Project Delivery',
        'Case Studies',
        'Industry Experience',
        'Technical Capabilities'
      ]
    },
    {
      slug: 'intellectual-property',
      heading: 'Intellectual Property',
      intro: ['Unless otherwise noted, all website content including:'],
      list: ['Graphics', 'Icons', 'Layout', 'Text', 'Images', 'Engineering Content', 'Diagrams', 'Downloads', 'Logos'],
      outro: [
        'are owned by GTS Engineering® USA Incorporated.',
        'No reproduction is permitted without written permission.'
      ]
    },
    {
      slug: 'engineering-information',
      heading: 'Engineering Information',
      intro: ['Website content is provided for general informational purposes.', 'It should not be interpreted as:'],
      list: ['Engineering certification', 'Professional advice', 'Design approval', 'Construction instruction'],
      outro: ['Formal engineering services begin only after execution of an appropriate agreement.']
    },
    {
      slug: 'client-documents',
      heading: 'Client Documents',
      intro: ['Users uploading:'],
      list: ['RFQs', 'Drawings', 'Models', 'Specifications', 'Tender Documents'],
      outro: ['confirm they have authority to provide such information.']
    },
    {
      slug: 'confidentiality',
      heading: 'Confidentiality',
      intro: ['Submission of information does not automatically establish:'],
      list: ['Non-Disclosure Agreement (NDA)', 'Professional Services Agreement', 'Client Relationship'],
      outro: ['Where required, separate confidentiality agreements may be executed.']
    },
    {
      slug: 'third-party-links',
      heading: 'Third-Party Links',
      intro: [
        'This website may contain links to third-party websites.',
        'GTS is not responsible for their content or policies.'
      ]
    },
    {
      slug: 'limitation-of-liability',
      heading: 'Limitation of Liability',
      intro: [
        'To the maximum extent permitted by law, GTS Engineering shall not be liable for indirect, incidental, consequential, or special damages arising from use of this website.'
      ]
    },
    {
      slug: 'governing-law',
      heading: 'Governing Law',
      intro: ['These Terms shall be governed by the laws of the State of Texas, United States.']
    },
    {
      slug: 'changes',
      heading: 'Changes',
      intro: ['GTS may revise these Terms without notice.']
    }
  ]
};

export const LINKEDIN_URL = 'https://www.linkedin.com/company/gts-usa/?viewAsMember=true';

export interface SitemapLink {
  label: string;
  href: string;
  external?: boolean;
}

export interface SitemapGroup {
  heading: string;
  links: SitemapLink[];
}

// Each label points at the closest existing page or section; several share a page where no dedicated one exists.
export const sitemapGroups: SitemapGroup[] = [
  {
    heading: 'Main Navigation',
    links: [
      { label: 'Home', href: '/' },
      { label: 'About GTS', href: '/about' },
      { label: 'Why GTS', href: '/delivery-excellence#why-gts' },
      { label: 'Engineering Solutions', href: '/solutions' },
      { label: 'Industries', href: '/industries' },
      { label: 'Digital Engineering', href: '/ai-digital' },
      { label: 'Featured Projects', href: '/#featured-projects' },
      { label: 'Software Platforms', href: '/technology' },
      { label: 'Certifications', href: '/about#quality' },
      { label: 'Contact', href: '/contact' }
    ]
  },
  {
    heading: 'Solutions',
    links: [
      { label: 'Plant & Process Engineering', href: '/solutions/plant-process-engineering' },
      { label: 'Product Engineering', href: '/solutions/product-engineering' },
      { label: 'Mechanical Engineering', href: '/solutions/product-engineering' },
      { label: 'Structural Engineering', href: '/solutions/steel-detailing-structural-engineering' },
      { label: 'Steel Detailing', href: '/solutions/steel-detailing-structural-engineering' },
      { label: 'Piping Engineering', href: '/solutions/plant-process-engineering' },
      { label: 'Pipeline Engineering', href: '/solutions/plant-process-engineering' },
      { label: 'Electrical Engineering', href: '/solutions/plant-process-engineering' },
      { label: 'Instrumentation & Controls', href: '/solutions/automation-ai-industry-4' },
      { label: 'Simulation & Digital Validation', href: '/solutions/simulation-digital-validation' },
      { label: 'Automation, AI & Industry 4.0', href: '/solutions/automation-ai-industry-4' },
      { label: 'Technical Documentation', href: '/solutions/technical-documentation-asset-intelligence' },
      { label: 'Digital Engineering', href: '/solutions/digital-engineering-asset-lifecycle' },
      { label: 'Asset Lifecycle Support', href: '/solutions/digital-engineering-asset-lifecycle' },
      { label: 'Project Engineering', href: '/solutions/project-engineering-advisory' },
      { label: "Owner's Engineering", href: '/solutions/project-engineering-advisory' },
      { label: 'EPC Support', href: '/solutions/plant-process-engineering' },
      { label: 'BIM & Infrastructure', href: '/solutions/digital-engineering-asset-lifecycle' }
    ]
  },
  {
    heading: 'Industries',
    links: [
      { label: 'Oil & Gas', href: '/industries/energy-process-industries' },
      { label: 'LNG', href: '/industries/energy-process-industries' },
      { label: 'Refineries', href: '/industries/energy-process-industries' },
      { label: 'Petrochemicals', href: '/industries/energy-process-industries' },
      { label: 'Power & Utilities', href: '/industries/power-utilities-energy-transition' },
      { label: 'Renewable Energy', href: '/industries/power-utilities-energy-transition' },
      { label: 'Water & Wastewater', href: '/industries/infrastructure-transportation' },
      { label: 'Data Centers', href: '/industries/data-centers-digital-infrastructure' },
      { label: 'Semiconductor Manufacturing', href: '/industries/semiconductor-advanced-manufacturing' },
      { label: 'Manufacturing', href: '/industries/manufacturing-industrial-systems' },
      { label: 'Heavy Equipment', href: '/industries/manufacturing-industrial-systems' },
      { label: 'Mining & Metals', href: '/industries/mining-metals' },
      { label: 'Marine & Offshore', href: '/industries/marine-offshore' },
      { label: 'Rail & Transportation', href: '/industries/infrastructure-transportation' },
      { label: 'Aerospace', href: '/solutions/aero-structures' },
      { label: 'Medical Devices', href: '/industries/life-sciences-healthcare' },
      { label: 'Pharmaceuticals & Life Sciences', href: '/industries/life-sciences-healthcare' },
      { label: 'Consumer Products', href: '/industries/food-beverage-consumer-products' },
      { label: 'Telecommunications', href: '/industries/data-centers-digital-infrastructure' },
      { label: 'Smart Infrastructure', href: '/industries/government-defense-critical-infrastructure' }
    ]
  },
  {
    heading: 'Projects',
    links: [
      { label: 'Case Studies', href: '/case-studies' },
      { label: 'Featured Projects', href: '/#featured-projects' },
      { label: 'Project Gallery', href: '/case-studies' },
      { label: 'Engineering Success Stories', href: '/insights#case-studies' }
    ]
  },
  {
    heading: 'Technology',
    links: [
      { label: 'CAD', href: '/technology#technology-ecosystem' },
      { label: 'CAE', href: '/technology#technology-ecosystem' },
      { label: 'CFD', href: '/technology#technology-ecosystem' },
      { label: 'Digital Twin', href: '/ai-digital#digital-twins' },
      { label: 'BIM', href: '/solutions/digital-engineering-asset-lifecycle' },
      { label: 'AI Engineering', href: '/ai-digital#ai-engineering' },
      { label: 'Industrial Analytics', href: '/ai-digital#industrial-analytics' },
      { label: 'Automation', href: '/ai-digital#engineering-automation' },
      { label: 'PLM', href: '/ai-digital#plm-software-engineering' },
      { label: 'Engineering Platforms', href: '/technology' }
    ]
  },
  {
    heading: 'Downloads',
    links: [
      { label: 'Capability Statement', href: '/downloads' },
      { label: 'Corporate Brochure', href: '/downloads' },
      { label: 'Industry Brochures', href: '/downloads' },
      { label: 'Case Studies', href: '/case-studies' },
      { label: 'White Papers', href: '/insights#white-papers' }
    ]
  },
  {
    heading: 'Company',
    links: [
      { label: 'About Us', href: '/about' },
      { label: 'Leadership', href: '/about#leadership' },
      { label: 'Global Delivery Model', href: '/delivery-excellence#global-delivery-model' },
      { label: 'Quality & Compliance', href: '/delivery-excellence#quality-management' },
      { label: 'Sustainability', href: '/careers#csr' },
      { label: 'Careers', href: '/careers' },
      { label: 'News & Insights', href: '/insights' },
      { label: 'Contact Us', href: '/contact' }
    ]
  },
  {
    heading: 'Contact',
    links: [
      { label: 'Request Consultation', href: '/contact#request-consultation' },
      { label: 'Upload RFQ', href: '/contact#request-proposal' },
      { label: 'Request Proposal', href: '/contact#request-proposal' },
      { label: 'Schedule Meeting', href: '/contact#request-consultation' },
      { label: 'Global Offices', href: '/contact#office-locations' }
    ]
  },
  {
    heading: 'Legal',
    links: [
      { label: 'Privacy Policy', href: '/privacy-policy' },
      { label: 'Terms of Use', href: '/terms-of-use' },
      { label: 'Sitemap', href: '/sitemap' }
    ]
  },
  {
    heading: 'Quick Links',
    links: [
      { label: 'Request Consultation', href: '/contact#request-consultation' },
      { label: 'Capability Statement', href: '/downloads' },
      { label: 'LinkedIn', href: LINKEDIN_URL, external: true },
      { label: 'Careers', href: '/careers' },
      { label: 'Contact Us', href: '/contact' }
    ]
  }
];
