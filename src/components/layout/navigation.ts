import { solutionsMegaMenu, type SolutionMenuCategory } from '@/constants/solutionsMenu';

export interface NavigationLink {
  label: string;
  href: string;
}

export interface PrimaryNavigationItem extends NavigationLink {
  submenu?: NavigationLink[];
  megaMenu?: SolutionMenuCategory[];
}

export { solutionsMegaMenu };

export const utilityNavigation: NavigationLink[] = [
  { label: 'Home', href: '/' },
  { label: 'Careers', href: '/menu/about-us/careers' },
  { label: 'Downloads', href: '/downloads' },
  { label: 'Contact', href: '/contact' }
];

export const primaryNavigation: PrimaryNavigationItem[] = [
  { label: 'Home', href: '/' },
  { label: 'Solutions', href: '/#solutions', megaMenu: solutionsMegaMenu },
  { label: 'Industries', href: '/industries' },
  { label: 'Projects', href: '/case-studies' },
  { label: 'Technology', href: '/technology' },
  { label: 'AI & Digital', href: '/#ai-digital' },
  { label: 'Innovation', href: '/innovation' },
  { label: 'Insights', href: '/insights' },
  { label: 'Delivery Excellence', href: '/delivery-excellence' },
  { label: 'Careers', href: '/careers' },
  { label: 'About', href: '/about' },
  { label: 'Contact', href: '/contact' }
];
