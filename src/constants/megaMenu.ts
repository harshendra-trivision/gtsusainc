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
  | 'Truck'
  | 'Handshake'
  | 'Brain'
  | 'Cog'
  | 'Bot'
  | 'FileSearch'
  | 'BookOpen'
  | 'Layers'
  | 'BarChart3'
  | 'Eye'
  | 'Wand2'
  | 'Rocket'
  | 'FlaskConical'
  | 'Sparkles'
  | 'TestTube'
  | 'Megaphone'
  | 'Building2'
  | 'BrainCircuit'
  | 'Map'
  | 'Workflow'
  | 'GraduationCap'
  | 'Lightbulb'
  | 'PlayCircle'
  | 'TrendingUp'
  | 'Star'
  | 'Tag'
  | 'FileText'
  | 'Briefcase'
  | 'Newspaper'
  | 'PenTool'
  | 'RefreshCw'
  | 'BookMarked'
  | 'BadgeCheck'
  | 'Library'
  | 'FolderOpen'
  | 'Compass'
  | 'Globe'
  | 'ListChecks'
  | 'Gauge'
  | 'ClipboardCheck'
  | 'Users'
  | 'Activity'
  | 'Award'
  | 'Target'
  | 'Heart'
  | 'History'
  | 'MapPin'
  | 'HeartHandshake'
  | 'MessageSquare'
  | 'HelpCircle';

export interface MegaMenuCategory {
  slug: string;
  label: string;
  icon: MegaMenuIconName;
  tagline?: string;
  description?: string;
  /** Marks a flagship offering — rendered as a highlighted card in the nav mega menu. */
  flagship?: boolean;
  groups: MegaMenuGroup[];
}
