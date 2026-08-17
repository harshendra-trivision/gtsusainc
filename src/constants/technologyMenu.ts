import type { MegaMenuCategory } from './megaMenu';

// Technology nav dropdown intentionally shows heading-level categories only —
// each links straight to its section on /technology (full detail lives there).
export const technologyMegaMenu: MegaMenuCategory[] = [
  {
    slug: 'technology-partnerships-representation',
    label: 'Technology Partnerships & Representation',
    icon: 'Handshake',
    tagline: 'Market representation and commercial support for global technology developers, OEMs, and licensors.',
    groups: []
  },
  {
    slug: 'technology-ecosystem',
    label: 'Technologies We Support and Integrate',
    icon: 'Cpu',
    tagline: 'The engineering, simulation, automation, cloud, and AI platforms behind our delivery.',
    groups: []
  }
];
