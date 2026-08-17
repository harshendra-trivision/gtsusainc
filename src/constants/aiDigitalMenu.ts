import type { MegaMenuCategory } from './megaMenu';

// AI & Digital nav dropdown intentionally shows heading-level categories only —
// each links straight to its section on /ai-digital (full detail lives there).
export const aiDigitalMegaMenu: MegaMenuCategory[] = [
  { slug: 'ai-engineering', label: 'AI Engineering', icon: 'Brain', tagline: 'AI-assisted design, workflows, and decision support.', groups: [] },
  { slug: 'engineering-automation', label: 'Engineering Automation', icon: 'Cog', tagline: 'Automating design, documentation, and calculations.', groups: [] },
  { slug: 'engineering-copilots', label: 'Engineering Copilots', icon: 'Bot', tagline: 'AI assistants for standards, search, and design guidance.', groups: [] },
  { slug: 'document-intelligence', label: 'Document Intelligence', icon: 'FileSearch', tagline: 'AI-driven document classification, extraction, and review.', groups: [] },
  { slug: 'knowledge-management', label: 'Knowledge Management', icon: 'BookOpen', tagline: 'Capturing and delivering engineering knowledge at scale.', groups: [] },
  { slug: 'digital-twins', label: 'Digital Twins', icon: 'Layers', tagline: 'Intelligent digital representations of physical assets.', groups: [] },
  { slug: 'industrial-analytics', label: 'Industrial Analytics', icon: 'BarChart3', tagline: 'Turning engineering and operational data into insight.', groups: [] },
  { slug: 'computer-vision', label: 'Computer Vision', icon: 'Eye', tagline: 'AI-powered image and video analysis for safety and quality.', groups: [] },
  { slug: 'generative-ai', label: 'Generative AI', icon: 'Wand2', tagline: 'Accelerating documentation, reporting, and proposals.', groups: [] },
  { slug: 'digital-transformation', label: 'Digital Transformation', icon: 'Rocket', tagline: 'Modernizing engineering and operations with digital technology.', groups: [] }
];
