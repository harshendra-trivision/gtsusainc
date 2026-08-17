import type { MegaMenuCategory } from './megaMenu';

// About nav dropdown intentionally shows heading-level categories only —
// each links straight to its section on /about (full detail lives there).
export const aboutMegaMenu: MegaMenuCategory[] = [
  { slug: 'who-we-are', label: 'Who We Are', icon: 'Users', tagline: 'Engineering excellence through innovation and global collaboration.', groups: [] },
  { slug: 'mission', label: 'Mission', icon: 'Target', tagline: 'Delivering engineering excellence through innovation.', groups: [] },
  { slug: 'vision', label: 'Vision', icon: 'Eye', tagline: 'Engineering the future. Empowering industry.', groups: [] },
  { slug: 'purpose', label: 'Purpose', icon: 'Compass', tagline: 'Advancing industry through engineering excellence.', groups: [] },
  { slug: 'values', label: 'Values', icon: 'Heart', tagline: 'The principles behind every engagement.', groups: [] },
  { slug: 'our-story', label: 'Our Story', icon: 'History', tagline: 'Engineering beyond design, since 2012.', groups: [] },
  { slug: 'leadership', label: 'Leadership', icon: 'Globe', tagline: 'Global delivery model — engineering without boundaries.', groups: [] },
  { slug: 'quality', label: 'Quality', icon: 'BadgeCheck', tagline: 'Quality is designed into every project.', groups: [] },
  { slug: 'technology-partners', label: 'Technology Partners', icon: 'Handshake', tagline: 'Partnering with industry leaders.', groups: [] },
  { slug: 'locations', label: 'Locations', icon: 'MapPin', tagline: 'US + India operations.', groups: [] },
  { slug: 'our-advantage', label: 'Our Advantage', icon: 'Award', tagline: 'Why clients choose GTS Engineering.', groups: [] }
];
