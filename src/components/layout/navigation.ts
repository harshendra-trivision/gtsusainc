import { solutionsMegaMenu } from '@/constants/solutionsMenu';
import { industriesMegaMenu } from '@/constants/industriesMenu';
import { projectsMegaMenu } from '@/constants/projectsMenu';
import { technologyMegaMenu } from '@/constants/technologyMenu';
import { aiDigitalMegaMenu } from '@/constants/aiDigitalMenu';
import { innovationMegaMenu } from '@/constants/innovationMenu';
import { insightsMegaMenu } from '@/constants/insightsMenu';
import { deliveryExcellenceMegaMenu } from '@/constants/deliveryExcellenceMenu';
import { careersMegaMenu } from '@/constants/careersMenu';
import { aboutMegaMenu } from '@/constants/aboutMenu';
import { contactMegaMenu } from '@/constants/contactMenu';
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

export {
  solutionsMegaMenu,
  industriesMegaMenu,
  projectsMegaMenu,
  technologyMegaMenu,
  aiDigitalMegaMenu,
  innovationMegaMenu,
  insightsMegaMenu,
  deliveryExcellenceMegaMenu,
  careersMegaMenu,
  aboutMegaMenu,
  contactMegaMenu
};

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
  { label: 'Technology', href: '/technology', megaMenu: technologyMegaMenu, megaMenuLinkTo: '/technology' },
  { label: 'AI & Digital', href: '/ai-digital', megaMenu: aiDigitalMegaMenu, megaMenuLinkTo: '/ai-digital' },
  { label: 'Innovation', href: '/innovation', megaMenu: innovationMegaMenu, megaMenuLinkTo: '/innovation' },
  { label: 'Insights', href: '/insights', megaMenu: insightsMegaMenu, megaMenuLinkTo: '/insights' },
  { label: 'Delivery Excellence', href: '/delivery-excellence', megaMenu: deliveryExcellenceMegaMenu, megaMenuLinkTo: '/delivery-excellence' },
  { label: 'Careers', href: '/careers', megaMenu: careersMegaMenu, megaMenuLinkTo: '/careers' },
  { label: 'About', href: '/about', megaMenu: aboutMegaMenu, megaMenuLinkTo: '/about' },
  { label: 'Contact', href: '/contact', megaMenu: contactMegaMenu, megaMenuLinkTo: '/contact' }
];
