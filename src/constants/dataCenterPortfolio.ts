export interface CapabilityScope {
  title: string;
  scope: string[];
  imageUrl?: string;
  industry?: string;
}

export const dataCenterCapabilities: CapabilityScope[] = [
  {
    title: "Hyperscale Data Center Engineering",
    industry: "Hyperscale Cloud",
    imageUrl: "/image/projects/Hyperscale Data Center Engineering .jpg",
    scope: ["Multidisciplinary engineering", "Primary power distribution", "Mechanical cooling systems", "Site civil and grading", "Construction support"]
  },
  {
    title: "AI Compute Facility Infrastructure",
    industry: "AI & High Density",
    imageUrl: "/image/projects/AI Compute Facility Infrastructure.jpg",
    scope: ["High density power systems", "Liquid cooling infrastructure", "Utility interconnection", "Digital engineering", "Commissioning support"]
  },
  {
    title: "Colocation Data Center Expansion",
    industry: "Colocation",
    imageUrl: "/image/projects/image7.jpg",
    scope: ["Capacity expansion engineering", "Prioritization analysis", "Mechanical system integration", "BIM modeling", "Phased construction support"]
  },
  {
    title: "Edge Data Center Deployment",
    industry: "Edge Computing",
    imageUrl: "/image/projects/Edge Data Center Deployment.jpg",
    scope: ["Modular facility engineering", "Packaged utility systems", "Site adaptation", "Power resilience base", "Fast track delivery support"]
  },
  {
    title: "Mission Critical Electrical Infrastructure",
    industry: "Power & Substations",
    imageUrl: "/image/projects/Mission Critical Electrical Infrastructure.jpg",
    scope: ["Medium voltage distribution", "Switchgear systems", "UPS integration", "Generator systems", "Grounding and protection studies", "Arc flash analysis"]
  },
  {
    title: "Electrical E-House Engineering",
    industry: "Modular E-House",
    imageUrl: "/image/projects/Electrical E-House Engineering.jpg",
    scope: ["Modular E-House design", "Structural engineering", "HVAC systems", "Electrical integration", "Factory testing", "Site support"]
  },
  {
    title: "Modular Substation Solutions",
    industry: "Power Infrastructure",
    imageUrl: "/image/projects/Modular Substation Solutions.jpg",
    scope: ["Prefabricated substations", "Power distribution", "Protection and control", "SCADA integration", "Site installation support"]
  },
  {
    title: "Mission Critical Control Centers",
    industry: "Control & Operations",
    imageUrl: "/image/projects/Mission Critical Control Centers.jpg",
    scope: ["Control room engineering", "Operator workstations", "Building systems", "Communication infrastructure", "Security integration"]
  },
  {
    title: "Critical Utility Infrastructure",
    industry: "Utility & Cooling",
    imageUrl: "/image/projects/Critical Utility Infrastructure.jpg",
    scope: ["Chilled water systems", "Power resiliency", "Pump stations", "Utility expansion", "Piping optimization"]
  },
  {
    title: "Digital Twin Implementation",
    industry: "Digital Engineering",
    imageUrl: "/image/projects/Digital Twin Implementation.jpg",
    scope: ["BIM", "Digital twins", "Asset information management", "Predictive maintenance", "Operational analytics"]
  },
  {
    title: "Industrial Automation for Mission Critical Facilities",
    industry: "Automation & SCADA",
    imageUrl: "/image/projects/Industrial Automation for Mission Critical Facilities.jpg",
    scope: ["PLC", "SCADA", "Building Management Systems", "Monitoring", "Alarm Management", "Data Analytics"]
  },
  {
    title: "Facility Modernization & Capacity Expansion",
    industry: "Brownfield Modernization",
    imageUrl: "/image/projects/Facility Modernization & Capacity Expansion.jpg",
    scope: ["Brownfield engineering", "Facility upgrades", "Utility expansion", "Equipment replacement", "Operational continuity"]
  }
];

export interface EngagementRow {
  projectType: string;
  typicalServices: string;
}

export const representativeEngagements: EngagementRow[] = [
  { projectType: "Hyperscale Data Centers", typicalServices: "Multidisciplinary Engineering, BIM, Construction Support" },
  { projectType: "AI Compute Facilities", typicalServices: "Electrical, Mechanical, Cooling, Power Systems" },
  { projectType: "Colocation Data Centers", typicalServices: "Facility Expansion, Power Distribution, Commissioning" },
  { projectType: "Edge Data Centers", typicalServices: "Modular Engineering, Utility Infrastructure" },
  { projectType: "Mission Critical Power Systems", typicalServices: "Substations, UPS, Generators, Switchgear" },
  { projectType: "Electrical E-Houses", typicalServices: "Design, Integration, FAT, Installation Support" },
  { projectType: "Modular Substations", typicalServices: "Protection & Control, Electrical Design" },
  { projectType: "Critical Utility Plants", typicalServices: "Cooling, Water Systems, Mechanical Infrastructure" },
  { projectType: "Digital Twin Projects", typicalServices: "BIM, Asset Information, Analytics" },
  { projectType: "Industrial Automation", typicalServices: "PLC, SCADA, Digital Operations" }
];

export const targetMarkets: string[] = [
  "Hyperscale Cloud Data Centers",
  "AI Compute Facilities",
  "Colocation Data Centers",
  "Enterprise Data Centers",
  "Edge Computing Facilities",
  "Semiconductor Manufacturing Plants",
  "Battery Gigafactories",
  "Pharmaceutical Manufacturing",
  "Critical Utility Infrastructure",
  "Smart Manufacturing Facilities"
];
