import type { MegaMenuCategory } from './megaMenu';

export const industriesMegaMenu: MegaMenuCategory[] = [
  {
    slug: 'energy-process-industries',
    label: 'Energy & Process Industries',
    icon: 'Flame',
    groups: [
      {
        items: ['Oil & Gas', 'LNG', 'Refineries', 'Petrochemicals', 'Chemicals', 'Fertilizers', 'Industrial Gases', 'Hydrogen', 'Biofuels']
      }
    ]
  },
  {
    slug: 'power-utilities-energy-transition',
    label: 'Power, Utilities & Energy Transition',
    icon: 'Zap',
    groups: [
      {
        items: [
          'Conventional Power',
          'Renewable Energy',
          'Nuclear',
          'Battery Energy Storage (BESS)',
          'Transmission & Distribution',
          'Grid Modernization',
          'Smart Grid',
          'Utilities'
        ]
      }
    ]
  },
  {
    slug: 'data-centers-digital-infrastructure',
    label: 'Data Centers & Digital Infrastructure',
    icon: 'Database',
    groups: [
      {
        items: ['Hyperscale Data Centers', 'AI Compute Facilities', 'Colocation', 'Edge Computing', 'Telecommunications', 'Digital Infrastructure']
      }
    ]
  },
  {
    slug: 'semiconductor-advanced-manufacturing',
    label: 'Semiconductor & Advanced Manufacturing',
    icon: 'Cpu',
    groups: [
      {
        items: ['Semiconductor Fabs', 'Electronics Manufacturing', 'Cleanrooms', 'Advanced Manufacturing', 'Precision Manufacturing']
      }
    ]
  },
  {
    slug: 'manufacturing-industrial-systems',
    label: 'Manufacturing & Industrial Systems',
    icon: 'Factory',
    groups: [
      {
        items: ['Heavy Equipment', 'Industrial Machinery', 'Automotive', 'Consumer Products', 'Industrial Automation']
      }
    ]
  },
  {
    slug: 'infrastructure-transportation',
    label: 'Infrastructure & Transportation',
    icon: 'Route',
    groups: [
      {
        items: ['Highways', 'Bridges', 'Rail', 'Airports', 'Ports', 'Tunnels', 'Urban Infrastructure']
      }
    ]
  },
  {
    slug: 'mining-metals',
    label: 'Mining & Metals',
    icon: 'Mountain',
    groups: [
      {
        items: ['Mining', 'Mineral Processing', 'Smelters', 'Steel Plants', 'Aluminum', 'Copper']
      }
    ]
  },
  {
    slug: 'life-sciences-healthcare',
    label: 'Life Sciences & Healthcare',
    icon: 'HeartPulse',
    groups: [
      {
        items: ['Pharmaceuticals', 'Biotechnology', 'Medical Devices', 'Hospitals', 'Research Facilities', 'Laboratories']
      }
    ]
  },
  {
    slug: 'food-beverage-consumer-products',
    label: 'Food, Beverage & Consumer Products',
    icon: 'UtensilsCrossed',
    groups: [
      {
        items: ['Food Processing', 'Beverage Plants', 'Packaging', 'Consumer Goods']
      }
    ]
  },
  {
    slug: 'marine-offshore',
    label: 'Marine & Offshore',
    icon: 'Ship',
    groups: [
      {
        items: ['Offshore Platforms', 'FPSOs', 'Shipyards', 'Ports', 'Marine Infrastructure']
      }
    ]
  },
  {
    slug: 'government-defense-critical-infrastructure',
    label: 'Government, Defense & Critical Infrastructure',
    icon: 'Landmark',
    groups: [
      {
        items: ['Defense', 'Federal Agencies', 'Critical Infrastructure', 'Secure Facilities', 'Public Sector']
      }
    ]
  }
];
