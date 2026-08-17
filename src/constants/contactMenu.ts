import type { MegaMenuCategory } from './megaMenu';

// Contact nav dropdown intentionally shows heading-level categories only —
// each links straight to its section on /contact (full detail lives there).
export const contactMegaMenu: MegaMenuCategory[] = [
  { slug: 'request-consultation', label: 'Request Consultation', icon: 'MessageSquare', tagline: 'Engineering expertise starts with a conversation.', groups: [] },
  { slug: 'request-proposal', label: 'Request Proposal', icon: 'FileText', tagline: 'Tell us about your project.', groups: [] },
  { slug: 'partner-with-us', label: 'Partner With Us', icon: 'Handshake', tagline: 'Strategic partnerships with OEMs, EPCs, and technology providers.', groups: [] },
  { slug: 'join-our-team', label: 'Join Our Team', icon: 'Briefcase', tagline: 'Build your career with GTS Engineering.', groups: [] },
  { slug: 'general-inquiry', label: 'General Inquiry', icon: 'HelpCircle', tagline: "We're here to help.", groups: [] },
  { slug: 'office-locations', label: 'Office Locations', icon: 'MapPin', tagline: 'Global presence. Local support.', groups: [] }
];
