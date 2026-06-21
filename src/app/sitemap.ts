import type { MetadataRoute } from 'next';
import { services } from '@/constants/services';
import { industries } from '@/constants/industries';
import { solutionPoints } from '@/constants/solutions';

export const dynamic = 'force-static';

const baseUrl = 'https://gtsusainc.com';
const lastModified = new Date();

const toSlug = (value: string) =>
  value
    .toLowerCase()
    .replace(/&/g, 'and')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');

const buildEntry = (
  route: string,
  priority: number,
  changeFrequency: MetadataRoute.Sitemap[number]['changeFrequency'] = 'monthly'
) => ({
  url: `${baseUrl}${route}`,
  lastModified,
  changeFrequency,
  priority,
});

const menuSections: Record<string, string[]> = {
  'about-us': [
    'Who We Are',
    'Our Team',
    'Vision & Mission',
    'Quality',
    'The GTS Engineering Advantage',
  ],
  'service-offerings': [
    'Product Engineering',
    'Plant & Process Engineering',
    'PLM & Software Engineering',
    'Geoinformatics Engineering',
    'Project Management & Controls',
    'Project Engineering',
    'Document Engineering',
  ],
  industries: [
    'Energy - Oil & Gas and Power',
    'Heavy Engineering & Machinery',
    'Railways',
    'Marine',
    'Consumer',
    'Medical Devices',
    'Telecom',
    'Utilities',
    'Aerospace',
    'Automotive',
  ],
  'technology-sourcing': [
    'Technology Representation',
    'Sourcing solutions',
    'Procurement Services',
  ],
  'delivery-enablers': [
    'Technology & Competencies',
    'Global Engagement Models',
    'Collaborative Communication',
    'Quality Management System',
    'HR Values',
    'Infrastructure',
  ],
  careers: [
    'HR Values',
    'Life @ GTS Engineering',
    'Why Join Us',
    'Employment Opportunities',
  ],
};

const uniqueRoutes = (routes: string[]) => Array.from(new Set(routes));

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = [
    '',
    '/about',
    '/services',
    '/industries',
    '/case-studies',
    '/infrastructure',
    '/careers',
    '/downloads',
    '/contact',
  ];

  const menuRoutes = Object.entries(menuSections).flatMap(([section, items]) =>
    items.map((item) => `/menu/${section}/${toSlug(item)}`)
  );

  const serviceRoutes = services.flatMap((svc) => [
    `/services/${svc.slug}`,
    ...(svc.href ? [svc.href] : []),
  ]);

  const industryRoutes = industries.map((ind) => `/industries/${ind.slug}`);
  const solutionRoutes = solutionPoints.map((pt) => `/solutions/${pt.slug}`);

  const staticPages = staticRoutes.map((route) =>
    buildEntry(route, route === '' ? 1.0 : 0.8)
  );
  const servicePages = uniqueRoutes(serviceRoutes).map((route) => buildEntry(route, 0.75));
  const industryPages = industryRoutes.map((route) => buildEntry(route, 0.7));
  const solutionPages = solutionRoutes.map((route) => buildEntry(route, 0.65));
  const menuPages = uniqueRoutes(menuRoutes).map((route) => buildEntry(route, 0.55));

  return [
    ...staticPages,
    ...servicePages,
    ...industryPages,
    ...solutionPages,
    ...menuPages,
  ];
}
