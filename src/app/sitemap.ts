import { MetadataRoute } from 'next';
import { services } from '@/constants/services';
import { industries } from '@/constants/industries';
import { solutionPoints } from '@/constants/solutions';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://gtsusainc.com';

  // Core static pages
  const staticPages = [
    '',
    '/about',
    '/services',
    '/industries',
    '/case-studies',
    '/infrastructure',
    '/contact',
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: route === '' ? 1.0 : 0.8,
  }));

  // Dynamic services pages
  const servicePages = services.map((svc) => ({
    url: `${baseUrl}/services/${svc.slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }));

  // Dynamic industries pages
  const industryPages = industries.map((ind) => ({
    url: `${baseUrl}/industries/${ind.slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }));

  // Dynamic solutions sub-points pages
  const solutionPages = solutionPoints.map((pt) => ({
    url: `${baseUrl}/solutions/${pt.slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.6,
  }));

  return [...staticPages, ...servicePages, ...industryPages, ...solutionPages];
}
