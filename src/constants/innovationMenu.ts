import type { MegaMenuCategory } from './megaMenu';

// Innovation nav dropdown intentionally shows heading-level categories only —
// each links straight to its section on /innovation (full detail lives there).
export const innovationMegaMenu: MegaMenuCategory[] = [
  { slug: 'research-development', label: 'Research & Development', icon: 'FlaskConical', tagline: 'Applied engineering research and innovation.', groups: [] },
  { slug: 'emerging-technologies', label: 'Emerging Technologies', icon: 'Sparkles', tagline: 'Evaluating and integrating next-generation technology.', groups: [] },
  { slug: 'innovation-lab', label: 'Innovation Lab', icon: 'TestTube', tagline: 'Developing and validating next-generation solutions.', groups: [] },
  { slug: 'technology-partnerships', label: 'Technology Partnerships', icon: 'Handshake', tagline: 'Collaborating with providers, OEMs, and startups.', groups: [] },
  { slug: 'engineering-thought-leadership', label: 'Engineering Thought Leadership', icon: 'Megaphone', tagline: 'Sharing insight and best practice across the industry.', groups: [] },
  { slug: 'future-infrastructure', label: 'Future Infrastructure', icon: 'Building2', tagline: 'Engineering for intelligent, connected, sustainable facilities.', groups: [] },
  { slug: 'industrial-ai-research', label: 'Industrial AI Research', icon: 'BrainCircuit', tagline: 'Practical AI across engineering, operations, and maintenance.', groups: [] },
  { slug: 'knowledge-center', label: 'Knowledge Center', icon: 'BookOpen', tagline: 'Capturing expertise and lessons learned.', groups: [] },
  { slug: 'technology-roadmap', label: 'Technology Roadmap', icon: 'Map', tagline: 'Aligning digital initiatives with business objectives.', groups: [] },
  { slug: 'digital-transformation', label: 'Digital Transformation', icon: 'Workflow', tagline: 'Modernizing processes and enabling data-driven decisions.', groups: [] },
  { slug: 'university-collaborations', label: 'University Collaborations', icon: 'GraduationCap', tagline: 'Partnering with academia on research and talent.', groups: [] },
  { slug: 'startup-partnerships', label: 'Startup Partnerships', icon: 'Lightbulb', tagline: 'Collaborating with breakthrough technology startups.', groups: [] },
  { slug: 'pilot-programs', label: 'Pilot Programs', icon: 'PlayCircle', tagline: 'Validating concepts before scaled deployment.', groups: [] },
  { slug: 'future-engineering-trends', label: 'Future Engineering Trends', icon: 'TrendingUp', tagline: 'Monitoring the trends shaping tomorrow’s engineering.', groups: [] }
];
