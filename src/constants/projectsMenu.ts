import type { MegaMenuCategory } from './megaMenu';

// Projects nav dropdown intentionally shows heading-level categories only —
// each links straight to its section on /case-studies (full detail lives there).
export const projectsMegaMenu: MegaMenuCategory[] = [
  {
    slug: 'energy-process-industries',
    label: 'Energy & Process Industries',
    icon: 'Flame',
    tagline: 'Refinery turnarounds, technology transfer, and process safety programs.',
    groups: []
  },
  {
    slug: 'data-centers-mission-critical',
    label: 'Data Centers & Mission Critical',
    icon: 'Database',
    tagline: 'Hyperscale, AI compute, colocation, and mission-critical electrical infrastructure.',
    groups: []
  },
  {
    slug: 'manufacturing',
    label: 'Manufacturing',
    icon: 'Factory',
    tagline: 'Robotics, automation, and digital transformation programs.',
    groups: []
  },
  {
    slug: 'heavy-engineering',
    label: 'Heavy Engineering',
    icon: 'Truck',
    tagline: 'Mining trucks, freight cars, bogies, cranes, and drilling rigs.',
    groups: []
  }
];
