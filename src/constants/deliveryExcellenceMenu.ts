import type { MegaMenuCategory } from './megaMenu';

// Delivery Excellence nav dropdown intentionally shows heading-level categories only —
// each links straight to its section on /delivery-excellence (full detail lives there).
export const deliveryExcellenceMegaMenu: MegaMenuCategory[] = [
  { slug: 'delivery-philosophy', label: 'Our Delivery Philosophy', icon: 'Compass', tagline: 'Engineering without compromise.', groups: [] },
  { slug: 'global-delivery-model', label: 'Global Delivery Model', icon: 'Globe', tagline: 'Local leadership, global engineering execution.', groups: [] },
  { slug: 'project-execution-framework', label: 'Project Execution Framework', icon: 'ListChecks', tagline: 'Six coordinated phases from strategy to operations.', groups: [] },
  { slug: 'project-controls', label: 'Integrated Project Controls', icon: 'Gauge', tagline: 'Keeping schedule, cost, and engineering aligned.', groups: [] },
  { slug: 'quality-management', label: 'Quality Management', icon: 'ClipboardCheck', tagline: 'Independent design reviews through final deliverable.', groups: [] },
  { slug: 'digital-delivery', label: 'Digital Delivery', icon: 'Layers', tagline: 'BIM, digital twins, and cloud collaboration built in.', groups: [] },
  { slug: 'collaboration-model', label: 'Collaboration Model', icon: 'Users', tagline: 'One integrated team from owner to operations.', groups: [] },
  { slug: 'delivery-metrics', label: 'Delivery Metrics', icon: 'Activity', tagline: 'How GTS delivers, by the numbers.', groups: [] },
  { slug: 'delivery-models', label: 'Delivery Models', icon: 'Boxes', tagline: 'Flexible engagement models built around how you work.', groups: [] },
  { slug: 'why-gts', label: 'Why Clients Choose GTS', icon: 'Award', tagline: 'Eight reasons clients partner with GTS long-term.', groups: [] }
];
