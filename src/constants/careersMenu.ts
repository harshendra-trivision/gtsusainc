import type { MegaMenuCategory } from './megaMenu';

// Careers nav dropdown intentionally shows heading-level categories only —
// each links straight to its section on /careers (full detail lives there).
export const careersMegaMenu: MegaMenuCategory[] = [
  { slug: 'why-join-gts', label: 'Why Join GTS', icon: 'Users', tagline: 'Professional development, global projects, and innovation.', groups: [] },
  { slug: 'career-areas', label: 'Career Areas', icon: 'Briefcase', tagline: 'Engineering, digital, AI, construction, and corporate roles.', groups: [] },
  { slug: 'csr', label: 'CSR', icon: 'HeartHandshake', tagline: 'Engineering with purpose — STEM, community, and sustainability.', groups: [] }
];
