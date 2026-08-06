export interface MegaMenuGroup {
  heading?: string;
  items: string[];
}

export type MegaMenuIconName =
  | 'Wrench'
  | 'ShieldCheck'
  | 'HardHat'
  | 'Boxes'
  | 'Flame'
  | 'Zap'
  | 'Database'
  | 'Cpu'
  | 'Factory'
  | 'Route'
  | 'Mountain'
  | 'HeartPulse'
  | 'UtensilsCrossed'
  | 'Ship'
  | 'Landmark'
  | 'Truck';

export interface MegaMenuCategory {
  slug: string;
  label: string;
  icon: MegaMenuIconName;
  tagline?: string;
  description?: string;
  groups: MegaMenuGroup[];
}
