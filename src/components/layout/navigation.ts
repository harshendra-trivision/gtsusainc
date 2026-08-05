export interface NavigationLink {
  label: string;
  href: string;
}

export interface PrimaryNavigationItem extends NavigationLink {
  submenu?: NavigationLink[];
}

export const solutionNavigation: NavigationLink[] = [
  { label: 'Plant & Process Engineering', href: '/#plant-process-engineering' },
  { label: 'Product Engineering', href: '/#product-engineering' },
  { label: 'Simulation & FEA', href: '/#simulation-digital-validation' },
  { label: 'Automation & AI', href: '/#automation-ai-industry-4-0' },
  { label: 'Steel Detailing & Structural Engineering', href: '/#steel-detailing-structural-engineering' },
  { label: 'Technical Documentation', href: '/#technical-documentation-asset-intelligence' }
];

export const utilityNavigation: NavigationLink[] = [
  { label: 'Home', href: '/' },
  { label: 'Careers', href: '/menu/about-us/careers' },
  { label: 'Downloads', href: '/downloads' },
  { label: 'Contact', href: '/contact' }
];

export const primaryNavigation: PrimaryNavigationItem[] = [
  { label: 'Home', href: '/' },
  { label: 'Solutions', href: '/#solutions', submenu: solutionNavigation },
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
