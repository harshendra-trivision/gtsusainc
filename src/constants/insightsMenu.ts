import type { MegaMenuCategory } from './megaMenu';

// Insights nav dropdown intentionally shows heading-level categories only —
// each links straight to its section on /insights (full detail lives there).
// Order follows the site's "Suggested Insights Flow": Featured -> Topics -> Articles -> White Papers ->
// Case Studies -> Guides -> Knowledge Centers -> Technology Updates -> Standards -> Resources.
export const insightsMegaMenu: MegaMenuCategory[] = [
  { slug: 'featured-insights', label: 'Featured Insights', icon: 'Star', tagline: 'Highlighted articles on AI, LNG, and digital twins.', groups: [] },
  { slug: 'browse-by-topic', label: 'Browse by Topic', icon: 'Tag', tagline: 'Engineering, digital, energy, and sustainability topics.', groups: [] },
  { slug: 'white-papers', label: 'White Papers', icon: 'FileText', tagline: 'In-depth technical papers on AI, twins, and modular design.', groups: [] },
  { slug: 'industry-news', label: 'Industry News', icon: 'Newspaper', tagline: 'Market developments, regulations, and technology announcements.', groups: [] },
  { slug: 'engineering-blogs', label: 'Engineering Blogs', icon: 'PenTool', tagline: 'Lessons learned and engineering best practices.', groups: [] },
  { slug: 'case-studies', label: 'Case Studies', icon: 'Briefcase', tagline: 'Real engineering challenges, solutions, and results.', groups: [] },
  { slug: 'engineering-guides', label: 'Engineering Guides', icon: 'BookMarked', tagline: 'Plain-language explainers on FEED, HAZOP, EPC, and more.', groups: [] },
  { slug: 'industry-knowledge-centers', label: 'Industry Knowledge Centers', icon: 'Library', tagline: 'Deep dives for Oil & Gas, Data Centers, Hydrogen, and Semiconductors.', groups: [] },
  { slug: 'technology-updates', label: 'Technology Updates', icon: 'RefreshCw', tagline: 'What’s new in BIM, AI, digital twins, and automation.', groups: [] },
  { slug: 'standards-compliance', label: 'Standards & Compliance', icon: 'BadgeCheck', tagline: 'API, ASME, IEC, IEEE, NFPA, OSHA, and ISO reference.', groups: [] },
  { slug: 'resources', label: 'Resources', icon: 'FolderOpen', tagline: 'Brochures, technical papers, and capability statements.', groups: [] }
];
