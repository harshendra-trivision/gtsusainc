import { solutionsMegaMenu } from '@/constants/solutionsMenu';
import { industriesMegaMenu } from '@/constants/industriesMenu';
import { projectsMegaMenu } from '@/constants/projectsMenu';
import type { MegaMenuCategory } from '@/constants/megaMenu';

export interface NavigationLink {
  label: string;
  href: string;
}

export interface PrimaryNavigationItem extends NavigationLink {
  submenu?: NavigationLink[];
  megaMenu?: MegaMenuCategory[];
  /** When set, mega menu category headers and items link to `${megaMenuLinkTo}#${category.slug}` instead of being plain display text. */
  megaMenuLinkTo?: string;
}

export { solutionsMegaMenu, industriesMegaMenu, projectsMegaMenu };

export const utilityNavigation: NavigationLink[] = [
  { label: 'Home', href: '/' },
  { label: 'Careers', href: '/menu/about-us/careers' },
  { label: 'Downloads', href: '/downloads' },
  { label: 'Contact', href: '/contact' }
];

export const primaryNavigation: PrimaryNavigationItem[] = [
  { label: 'Home', href: '/' },
  { label: 'Solutions', href: '/#solutions', megaMenu: solutionsMegaMenu },
  { label: 'Industries', href: '/industries', megaMenu: industriesMegaMenu },
  { label: 'Projects', href: '/case-studies', megaMenu: projectsMegaMenu, megaMenuLinkTo: '/case-studies' },
  { label: 'Technology', href: '/technology' },
  { label: 'AI & Digital', href: '/#ai-digital' },
  { label: 'Innovation', href: '/innovation' },
  { label: 'Insights', href: '/insights' },
  { label: 'Delivery Excellence', href: '/delivery-excellence' },
  { label: 'Careers', href: '/careers' },
  { label: 'About', href: '/about' },
  { label: 'Contact', href: '/contact' }
];
