export interface Industry {
  slug: string;
  title: string;
  tagline: string;
  description: string;
  iconName: string;
  subSectors: string[];
  features: string[];
  seoTitle: string;
  seoDescription: string;
  seoKeywords: string[];
}

export const industries: Industry[] = [
  {
    slug: 'oil-gas',
    title: 'Oil & Gas',
    tagline: 'Digital and automation-led performance for upstream, midstream, and downstream operations.',
    description: 'We modernize oil and gas operations with AI-enabled monitoring, digital plant systems, and control reliability programs.',
    iconName: 'Flame',
    subSectors: ['Upstream', 'Midstream Pipelines', 'Refining', 'Petrochemical'],
    features: ['Pain points: downtime risk, safety exposure, process instability', 'AI opportunities: predictive maintenance, anomaly detection, process optimization', 'Automation opportunities: SCADA upgrades, remote operations, OT/IT convergence', 'Engineering capabilities: digital twin, plant design, industrial software integration'],
    seoTitle: 'Oil & Gas Digital Transformation Solutions | GTS',
    seoDescription: 'AI, automation, and engineering solutions for oil and gas operations.',
    seoKeywords: ['oil and gas', 'predictive maintenance', 'smart refinery', 'industrial automation']
  },
  {
    slug: 'chemicals',
    title: 'Chemicals',
    tagline: 'Data-driven process control and optimization for safe, compliant chemical production.',
    description: 'We help chemical plants improve process consistency and operational intelligence through advanced controls and analytics.',
    iconName: 'Cpu',
    subSectors: ['Specialty Chemicals', 'Bulk Chemicals', 'Polymers'],
    features: ['Pain points: quality variation, batch inefficiencies, compliance complexity', 'AI opportunities: yield optimization, quality prediction, demand forecasting', 'Automation opportunities: recipe automation, control loop tuning, automated reporting', 'Engineering capabilities: process design, industrial analytics, integration platforms'],
    seoTitle: 'Chemical Industry Automation and AI Solutions | GTS',
    seoDescription: 'Industrial AI and automation for safe, efficient chemical operations.',
    seoKeywords: ['chemical industry', 'process optimization', 'industrial AI', 'automation']
  },
  {
    slug: 'power-utilities',
    title: 'Power & Utilities',
    tagline: 'Grid and generation intelligence with resilient control and monitoring systems.',
    description: 'From generation assets to utility networks, we provide digital systems for reliability, efficiency, and faster response.',
    iconName: 'Grid',
    subSectors: ['Thermal', 'Renewables', 'Transmission', 'Distribution'],
    features: ['Pain points: outage management, aging infrastructure, maintenance overhead', 'AI opportunities: fault prediction, load forecasting, asset health scoring', 'Automation opportunities: remote substations, smart alarms, control modernization', 'Engineering capabilities: smart grid architecture, asset modeling, command dashboards'],
    seoTitle: 'Power and Utilities Digital Solutions | GTS',
    seoDescription: 'AI-powered automation and engineering solutions for power and utility sectors.',
    seoKeywords: ['power utilities', 'smart grid', 'asset monitoring', 'predictive analytics']
  },
  {
    slug: 'manufacturing',
    title: 'Manufacturing',
    tagline: 'Smart factory execution with IIoT visibility and AI-assisted production optimization.',
    description: 'We transform factories into connected, insight-driven production environments with measurable throughput gains.',
    iconName: 'Truck',
    subSectors: ['Discrete Manufacturing', 'Process Manufacturing', 'Assembly Plants'],
    features: ['Pain points: low OEE, high scrap, production bottlenecks', 'AI opportunities: quality analytics, cycle-time optimization, demand-response planning', 'Automation opportunities: connected lines, edge analytics, robotic workflow integration', 'Engineering capabilities: smart manufacturing architecture, software integration, digital engineering'],
    seoTitle: 'Smart Manufacturing and IIoT Solutions | GTS',
    seoDescription: 'IIoT, AI analytics, and automation solutions for modern manufacturing.',
    seoKeywords: ['smart manufacturing', 'IIoT', 'OEE', 'industrial analytics']
  },
  {
    slug: 'water-wastewater',
    title: 'Water & Wastewater',
    tagline: 'Reliable utility operations with intelligent monitoring and process automation.',
    description: 'We improve plant reliability and regulatory readiness for water and wastewater facilities with digital operations frameworks.',
    iconName: 'Ship',
    subSectors: ['Water Treatment', 'Wastewater Treatment', 'Distribution Networks'],
    features: ['Pain points: compliance pressure, leak losses, manual monitoring', 'AI opportunities: demand forecasting, process anomaly detection, energy optimization', 'Automation opportunities: remote telemetry, alarm automation, smart pumping controls', 'Engineering capabilities: process engineering, SCADA implementation, utility analytics'],
    seoTitle: 'Water and Wastewater Automation Solutions | GTS',
    seoDescription: 'Industrial automation and AI analytics for water and wastewater operations.',
    seoKeywords: ['water wastewater', 'SCADA', 'utility analytics', 'automation']
  },
  {
    slug: 'pipelines',
    title: 'Pipelines',
    tagline: 'Connected pipeline operations with integrity, monitoring, and digital control capabilities.',
    description: 'We deliver pipeline intelligence systems for monitoring, integrity assurance, and operating efficiency.',
    iconName: 'Radio',
    subSectors: ['Gas Pipelines', 'Liquid Pipelines', 'Compressor/Booster Stations'],
    features: ['Pain points: leak risks, low visibility, maintenance inefficiency', 'AI opportunities: integrity risk scoring, anomaly trend detection, predictive interventions', 'Automation opportunities: remote pumping/compression control, live line monitoring, incident response orchestration', 'Engineering capabilities: pipeline digital twins, monitoring dashboards, OT/IT integration'],
    seoTitle: 'Pipeline Monitoring and Digital Operations | GTS',
    seoDescription: 'AI-enabled and automation-first solutions for pipeline operations.',
    seoKeywords: ['pipelines', 'asset monitoring', 'integrity analytics', 'remote operations']
  },
  {
    slug: 'pharmaceuticals',
    title: 'Pharmaceuticals',
    tagline: 'Validated digital operations for quality-focused and compliant pharma manufacturing.',
    description: 'We support pharma companies with intelligent automation and data-led operations while preserving validation and compliance requirements.',
    iconName: 'Smartphone',
    subSectors: ['API Manufacturing', 'Formulations', 'Packaging'],
    features: ['Pain points: strict compliance, documentation load, batch variability', 'AI opportunities: deviation analytics, quality prediction, document intelligence', 'Automation opportunities: batch workflow automation, digital logbooks, plant monitoring', 'Engineering capabilities: process and facility engineering, software integration, analytics systems'],
    seoTitle: 'Pharma Digital and Automation Solutions | GTS',
    seoDescription: 'Industrial AI, automation, and engineering systems for pharmaceutical operations.',
    seoKeywords: ['pharmaceuticals', 'batch automation', 'quality analytics', 'digital operations']
  },
  {
    slug: 'mining-metals',
    title: 'Mining & Metals',
    tagline: 'Operational resilience and throughput optimization for heavy asset environments.',
    description: 'We help mining and metals operators improve equipment uptime, production planning, and process safety.',
    iconName: 'Car',
    subSectors: ['Mining Operations', 'Mineral Processing', 'Metals Plants'],
    features: ['Pain points: harsh conditions, unplanned failures, high energy intensity', 'AI opportunities: predictive maintenance, process yield analytics, fleet optimization', 'Automation opportunities: remote monitoring, autonomous control loops, shift performance dashboards', 'Engineering capabilities: heavy engineering, plant analytics, digital operations solutions'],
    seoTitle: 'Mining and Metals Industry Solutions | GTS',
    seoDescription: 'AI, automation, and engineering for mining and metals operations.',
    seoKeywords: ['mining metals', 'predictive maintenance', 'industrial analytics', 'automation']
  },
  {
    slug: 'food-beverage',
    title: 'Food & Beverage',
    tagline: 'Connected production systems for quality, traceability, and process efficiency.',
    description: 'We implement digital and automation solutions that improve consistency, compliance, and throughput in F&B operations.',
    iconName: 'Plane',
    subSectors: ['Food Processing', 'Beverage Plants', 'Packaging and Distribution'],
    features: ['Pain points: quality deviations, traceability gaps, downtime during peak demand', 'AI opportunities: quality anomaly detection, demand-linked planning, process optimization', 'Automation opportunities: line control integration, smart batch reporting, real-time plant KPIs', 'Engineering capabilities: digital manufacturing workflows, software integration, analytics platforms'],
    seoTitle: 'Food and Beverage Industrial Technology Solutions | GTS',
    seoDescription: 'Automation and AI solutions for food and beverage manufacturing.',
    seoKeywords: ['food beverage', 'smart manufacturing', 'quality analytics', 'automation']
  }
];
