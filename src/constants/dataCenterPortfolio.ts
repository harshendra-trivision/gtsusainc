export interface CapabilityScope {
  title: string;
  scope: string[];
}

export const dataCenterCapabilities: CapabilityScope[] = [
  {
    title: "Hyperscale Data Center Engineering",
    scope: ["Multidisciplinary engineering", "Electrical power distribution", "Mechanical cooling systems", "Structural engineering", "BIM coordination", "Construction support"]
  },
  {
    title: "AI Compute Facility Infrastructure",
    scope: ["High-density power systems", "Liquid cooling infrastructure", "Utility distribution", "Digital engineering", "Commissioning support"]
  },
  {
    title: "Colocation Data Center Expansion",
    scope: ["Capacity expansion engineering", "Electrical upgrades", "Mechanical system integration", "BIM modeling", "Phased construction support"]
  },
  {
    title: "Edge Data Center Deployment",
    scope: ["Modular facility engineering", "Packaged utility systems", "Site adaptation", "Power infrastructure", "Fast-track delivery support"]
  },
  {
    title: "Mission Critical Electrical Infrastructure",
    scope: ["Medium-voltage distribution", "Switchgear systems", "UPS integration", "Generator systems", "Grounding and protection studies", "Arc flash analysis"]
  },
  {
    title: "Electrical E-House Engineering",
    scope: ["Modular E-House design", "Structural engineering", "HVAC systems", "Electrical integration", "Fire protection", "FAT support"]
  },
  {
    title: "Modular Substation Solutions",
    scope: ["Prefabricated substations", "Power distribution", "Protection and control", "SCADA integration", "Site installation support"]
  },
  {
    title: "Mission Critical Control Centers",
    scope: ["Control room engineering", "Operator workstations", "Building services", "Communication infrastructure", "Security integration"]
  },
  {
    title: "Critical Utility Infrastructure",
    scope: ["Chilled water systems", "Process cooling", "Pump stations", "Utility corridors", "Energy optimization"]
  },
  {
    title: "Digital Twin Implementation",
    scope: ["BIM", "Digital Twins", "Asset information management", "Predictive maintenance", "Operational analytics"]
  },
  {
    title: "Industrial Automation for Mission Critical Facilities",
    scope: ["PLC", "SCADA", "Building Management Systems", "Monitoring", "Alarm Management", "Data Analytics"]
  },
  {
    title: "Facility Modernization & Capacity Expansion",
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
