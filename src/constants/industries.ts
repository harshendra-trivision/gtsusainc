export interface Industry {
  slug: string;
  title: string;
  tagline: string;
  cardDescription?: string;
  description: string;
  iconName: string;
  image?: string;
  heroImage?: string;
  supportingImage?: string;
  cardTags?: string[];
  subSectors: string[];
  features: string[];
  seoTitle: string;
  seoDescription: string;
  seoKeywords: string[];
}

export const industries: Industry[] = [
  {
    slug: "energy-process-industries",
    title: "Energy & Process Industries",
    tagline: "Engineering resilient systems across the hydrocarbon and process value chain, from wellhead to finished product.",
    cardDescription: "Engineering solutions across power, oil & gas, petrochemicals, and process industries with focus on safety, efficiency, and compliance.",
    description: "GTS delivers process, piping, and mechanical engineering across oil & gas, LNG, refining, and chemical processing. We support FEED through detailed design for hydrocarbon, petrochemical, fertilizer, and industrial gas facilities, along with emerging hydrogen and biofuels infrastructure.",
    iconName: "Factory",
    image: "/image/industries/Energy & Process Industry.jpg",
    heroImage: "/image/industries/energy and process industries.jpg",
    supportingImage: "/image/industries/energy and process industries supporting image.jpg",
    cardTags: ["Oil & Gas", "LNG", "Refining", "Petrochemicals", "Chemicals", "Utilities"],
    subSectors: ["Oil & Gas", "LNG", "Refineries", "Petrochemicals", "Chemicals", "Fertilizers", "Industrial Gases", "Hydrogen", "Biofuels"],
    features: [
      "FEED and detailed engineering for upstream, midstream, and downstream assets",
      "Process simulation, P&ID development, and HAZOP-driven design",
      "Piping stress analysis and 3D plant modeling for process units",
      "Cryogenic and LNG liquefaction/regasification engineering support"
    ],
    seoTitle: "Energy & Process Industries Engineering | GTS Engineering",
    seoDescription: "Process, piping, and plant engineering for oil & gas, LNG, refineries, petrochemicals, chemicals, fertilizers, and hydrogen infrastructure.",
    seoKeywords: ["oil and gas engineering", "LNG engineering", "refinery design", "petrochemical engineering", "process plant design"]
  },
  {
    slug: "power-utilities-energy-transition",
    title: "Power, Utilities & Energy Transition",
    tagline: "Engineering dependable power delivery and next-generation grid and storage infrastructure.",
    cardDescription: "Supporting generation, transmission, distribution and grid modernization for a cleaner and more resilient energy future.",
    description: "From conventional generation to renewables, nuclear, and battery storage, GTS engineers the electrical infrastructure that keeps power flowing. We support transmission and distribution, grid modernization, and smart grid programs for utilities navigating the energy transition.",
    iconName: "Zap",
    image: "/image/industries/Power, Utilities & Energy Transition.jpg",
    heroImage: "/image/industries/power utility and transition.jpg",
    supportingImage: "/image/industries/power utility and transition supporting.jpg",
    cardTags: ["Conventional Power", "Renewable Energy", "Nuclear", "Battery Storage", "Grid Systems", "Sustainable Infrastructure"],
    subSectors: ["Conventional Power", "Renewable Energy", "Nuclear", "Battery Energy Storage (BESS)", "Transmission & Distribution", "Grid Modernization", "Smart Grid", "Utilities"],
    features: [
      "Substation, switchgear, and protection system design",
      "Renewable interconnection and grid integration studies",
      "BESS system layout, electrical design, and SCADA integration",
      "Load flow, arc flash, and power quality studies"
    ],
    seoTitle: "Power, Utilities & Energy Transition Engineering | GTS Engineering",
    seoDescription: "Substation, grid, renewable interconnection, and battery storage engineering for power generators and utilities.",
    seoKeywords: ["power engineering", "utility engineering", "grid modernization", "battery energy storage design", "renewable energy engineering"]
  },
  {
    slug: "data-centers-digital-infrastructure",
    title: "Data Centers & Digital Infrastructure",
    tagline: "Mission-critical engineering for the facilities powering AI, cloud, and connected infrastructure.",
    cardDescription: "Delivering mission-critical engineering for data centers, cloud, and connected infrastructure.",
    description: "GTS supports hyperscale and colocation data center developers with electrical, cooling, and commissioning engineering. We extend that expertise to AI compute facilities, edge computing sites, and the telecom and digital infrastructure that connects them.",
    iconName: "Server",
    image: "/image/industries/Data Centers & Digital Infrastructure.jpg",
    heroImage: "/image/industries/data center.jpg",
    supportingImage: "/image/industries/data center supporting.jpg",
    cardTags: ["Hyperscale Data Centers", "Colocation", "Edge Computing", "Mission Critical Systems", "Telecommunications", "IT Infrastructure"],
    subSectors: ["Hyperscale Data Centers", "AI Compute Facilities", "Colocation", "Edge Computing", "Telecommunications", "Digital Infrastructure"],
    features: [
      "Electrical distribution and UPS system design for critical loads",
      "CFD-based cooling analysis and thermal management",
      "Commissioning and startup support for mission-critical facilities",
      "Power availability and redundancy (N+1 / 2N) engineering"
    ],
    seoTitle: "Data Center & Digital Infrastructure Engineering | GTS Engineering",
    seoDescription: "Electrical, cooling, and commissioning engineering for hyperscale data centers, AI compute facilities, colocation, and edge sites.",
    seoKeywords: ["data center engineering", "hyperscale data center design", "AI compute facility engineering", "colocation engineering", "edge computing infrastructure"]
  },
  {
    slug: "semiconductor-advanced-manufacturing",
    title: "Semiconductor & Advanced Manufacturing",
    tagline: "Precision facility engineering for cleanroom, fab, and advanced manufacturing environments.",
    cardDescription: "Precision engineering for cleanrooms, fab facilities, and advanced manufacturing.",
    description: "Semiconductor fabrication and advanced electronics manufacturing demand exacting tolerances and ultra-clean environments. GTS engineers cleanrooms, process utilities, and precision manufacturing facilities to the strict standards these industries require.",
    iconName: "Cpu",
    image: "/image/industries/Semiconductor & Advance Manufacturing.jpg",
    heroImage: "/image/industries/semiconductor.jpg",
    supportingImage: "/image/industries/semiconductor supporting.jpg",
    cardTags: ["Semiconductor Fab", "Electronics Manufacturing", "Cleanrooms", "Advanced Manufacturing", "Precision Manufacturing"],
    subSectors: ["Semiconductor Fabs", "Electronics Manufacturing", "Cleanrooms", "Advanced Manufacturing", "Precision Manufacturing"],
    features: [
      "Cleanroom classification, layout, and HVAC design",
      "Ultra-pure water and process chemical distribution systems",
      "Equipment layout and utility routing for fab environments",
      "Vibration-sensitive structural design for precision tooling"
    ],
    seoTitle: "Semiconductor & Advanced Manufacturing Engineering | GTS Engineering",
    seoDescription: "Cleanroom, process utility, and precision facility engineering for semiconductor fabs and advanced electronics manufacturing.",
    seoKeywords: ["semiconductor fab engineering", "cleanroom design", "advanced manufacturing engineering", "electronics manufacturing", "precision manufacturing"]
  },
  {
    slug: "manufacturing-industrial-systems",
    title: "Manufacturing & Industrial Systems",
    tagline: "Optimizing production systems across heavy equipment, automotive, and industrial automation.",
    cardDescription: "Optimizing production systems across heavy industries, automation, and industrial infrastructure.",
    description: "GTS supports manufacturers across heavy equipment, automotive, consumer products, and industrial automation with mechanical design, automation integration, and production system optimization that improves throughput and reliability.",
    iconName: "Cog",
    image: "/image/industries/Manufacturing & Industrial Systems.jpg",
    heroImage: "/image/industries/manufacturing.jpg",
    supportingImage: "/image/industries/manufacturing supporting.jpg",
    cardTags: ["Heavy Equipment", "Industrial Machinery", "Automation", "Conveyor Systems", "Industrial Construction"],
    subSectors: ["Heavy Equipment", "Industrial Machinery", "Automotive", "Consumer Products", "Industrial Automation"],
    features: [
      "Mechanical design and FEA for industrial machinery",
      "Automation, controls, robotics, and system integration",
      "AI/SCADA integration and industrial automation engineering",
      "Production line layout and manufacturing optimization"
    ],
    seoTitle: "Manufacturing & Industrial Systems Engineering | GTS Engineering",
    seoDescription: "Mechanical design, automation integration, and production optimization for heavy equipment, automotive, and industrial manufacturers.",
    seoKeywords: ["manufacturing engineering", "industrial automation engineering", "automotive engineering", "heavy equipment design", "production line optimization"]
  },
  {
    slug: "infrastructure-transportation",
    title: "Infrastructure & Transportation",
    tagline: "Engineering the highways, rail, airports, ports, and urban infrastructure that keep people and goods moving.",
    cardDescription: "Engineering for highways, rail, ports, airports, and urban infrastructure for stronger, more connected communities.",
    description: "GTS provides civil, structural, and systems engineering for transportation infrastructure spanning highways, bridges, rail, airports, ports, tunnels, and urban transit systems. Our multidisciplinary expertise helps plan, design, analyze, and optimize infrastructure projects from concept to delivery with safety, efficiency, and sustainability.",
    iconName: "Route",
    image: "/image/industries/Infrastructure and Transportation.jpg",
    heroImage: "/image/industries/infrastructure and trans.jpg",
    supportingImage: "/image/industries/infrastructure and trans supporting.jpg",
    cardTags: ["Highways", "Bridges", "Airports", "Ports", "Tunnels", "Rail & Transit Systems"],
    subSectors: ["Highways", "Bridges", "Airports", "Ports", "Tunnels", "Rail & Transit Systems"],
    features: [
      "Structural analysis and design for bridges, highways, and tunnels",
      "Rail and metro systems design and station infrastructure",
      "Airport and port infrastructure planning and optimization",
      "Advanced modeling, BIM, and construction support services"
    ],
    seoTitle: "Infrastructure & Transportation Engineering | GTS Engineering",
    seoDescription: "Civil and structural engineering for highways, bridges, rail, airports, ports, tunnels, and urban infrastructure programs.",
    seoKeywords: ["infrastructure engineering", "transportation engineering", "bridge design", "rail infrastructure engineering", "urban infrastructure design"]
  },
  {
    slug: "mining-metals",
    title: "Mining & Metals",
    tagline: "Engineering processing facilities and infrastructure for mining and metals production.",
    cardDescription: "Engineering and processing solutions for mining operations and metals production.",
    description: "From mineral processing plants to smelters and steel mills, GTS engineers the structures, material handling systems, and process infrastructure that keep mining and metals operations running safely and efficiently.",
    iconName: "Mountain",
    image: "/image/industries/Mining & Metals.jpg",
    heroImage: "/image/industries/mining and metal.jpg",
    supportingImage: "/image/industries/mining and metal supporting.jpg",
    cardTags: ["Mining", "Mineral Processing", "Smelters", "Steel Plants", "Aluminum", "Copper"],
    subSectors: ["Mining", "Mineral Processing", "Smelters", "Steel Plants", "Aluminum", "Copper"],
    features: [
      "Material handling, crushing, and conveyor structural design",
      "Process plant engineering for mineral processing",
      "Smelter and refinery infrastructure design",
      "Structural and utility design for steel plants and aluminum smelters",
      "Dust control and environmental systems engineering"
    ],
    seoTitle: "Mining & Metals Engineering | GTS Engineering",
    seoDescription: "Process plant, material handling, and structural engineering for mining, mineral processing, smelters, and steel plants.",
    seoKeywords: ["mining engineering", "mineral processing design", "smelter engineering", "steel plant engineering", "material handling design"]
  },
  {
    slug: "life-sciences-healthcare",
    title: "Life Sciences & Healthcare",
    tagline: "GMP-compliant engineering for pharmaceutical, biotech, and healthcare facilities.",
    cardDescription: "GMP-compliant engineering for pharmaceutical, biotech, and healthcare facilities.",
    description: "GTS engineers cleanrooms, HVAC, and process utility systems for GMP-compliant pharmaceutical and biotechnology facilities, along with hospitals, research facilities, and laboratories that demand precision and regulatory rigor.",
    iconName: "FlaskConical",
    image: "/image/industries/Lifesciences & Healthcare.jpg",
    heroImage: "/image/industries/life care and healthcare.jpg",
    supportingImage: "/image/industries/life care and healthcare supporting.jpg",
    cardTags: ["Pharmaceuticals", "Biotechnology", "Medical Devices", "Hospitals", "Research Facilities", "Laboratories"],
    subSectors: ["Pharmaceuticals", "Biotechnology", "Medical Devices", "Hospitals", "Research Facilities", "Laboratories"],
    features: [
      "GMP facility design and clean utilities engineering",
      "Cleanroom HVAC and process equipment layout",
      "Medical device design controls and validation support",
      "Laboratory and research facility MEP engineering"
    ],
    seoTitle: "Life Sciences & Healthcare Facility Engineering | GTS Engineering",
    seoDescription: "GMP facility, cleanroom, and MEP engineering for pharmaceutical, biotech, medical device, and healthcare facilities.",
    seoKeywords: ["life sciences engineering", "GMP facility design", "pharmaceutical engineering", "medical device engineering", "healthcare facility design"]
  },
  {
    slug: "food-beverage-consumer-products",
    title: "Food, Beverage & Consumer Products",
    tagline: "Engineering hygienic, efficient production lines for food, beverage, and consumer goods.",
    cardDescription: "Engineering hygienic, efficient production facilities for the food, beverage, and consumer goods industry.",
    description: "GTS designs processing lines, packaging systems, and sanitary utilities for food and beverage manufacturers, along with the production engineering that brings consumer goods from concept to shelf.",
    iconName: "UtensilsCrossed",
    image: "/image/industries/Food, Beverages & Consumer Products .jpg",
    heroImage: "/image/industries/food and bavereges.jpg",
    supportingImage: "/image/industries/food and bavereges supporting.jpg",
    cardTags: ["Food Processing", "Beverage Plants", "Packaging", "Consumer Goods"],
    subSectors: ["Food Processing", "Beverage Plants", "Packaging", "Consumer Goods"],
    features: [
      "Sanitary process and utility design for food grade",
      "Beverage plant process and packaging line engineering",
      "Packaging machinery and automation design",
      "Consumer product design for manufacturability"
    ],
    seoTitle: "Food, Beverage & Consumer Products Engineering | GTS Engineering",
    seoDescription: "Sanitary process, packaging, and production line engineering for food processing, beverage plants, and consumer goods manufacturers.",
    seoKeywords: ["food processing engineering", "beverage plant design", "packaging engineering", "consumer goods manufacturing design"]
  },
  {
    slug: "marine-offshore",
    title: "Marine & Offshore",
    tagline: "Naval architecture, structural integrity, and outfitting for vessels and offshore assets.",
    cardDescription: "Naval and offshore structural engineering solutions for complex marine environments.",
    description: "GTS supports shipyards and offshore operators with hull structure design, FPSO and platform engineering, and marine outfitting, backed by rigorous structural analysis for classification society compliance.",
    iconName: "Ship",
    image: "/image/industries/Marine & offshore.jpg",
    heroImage: "/image/industries/marine and offshore.jpg",
    supportingImage: "/image/industries/marine and offshore supporting.jpg",
    cardTags: ["Offshore Platforms", "FPSO", "Shipyards", "Ports", "Marine Infrastructure"],
    subSectors: ["Offshore Platforms", "FPSOs", "Shipyards", "Ports", "Marine Infrastructure"],
    features: [
      "Offshore platform and topside structural engineering",
      "FPSO design, structural and process integration support",
      "Hull structure design and finite element analysis",
      "Marine and port infrastructure engineering"
    ],
    seoTitle: "Marine & Offshore Engineering | GTS Engineering",
    seoDescription: "Hull structure, offshore platform, and FPSO engineering for shipyards, offshore operators, and marine infrastructure projects.",
    seoKeywords: ["marine engineering", "offshore platform design", "FPSO engineering", "shipyard engineering", "naval architecture"]
  },
  {
    slug: "government-defense-critical-infrastructure",
    title: "Government, Defense & Critical Infrastructure",
    tagline: "Secure, resilient engineering for defense, federal, and critical infrastructure programs.",
    cardDescription: "Secure, resilient engineering for defense, federal, and critical infrastructure programs.",
    description: "GTS supports government and defense clients with engineering for secure facilities and critical infrastructure, delivering the documentation rigor and security discipline these programs require.",
    iconName: "Landmark",
    image: "/image/industries/Government, Defense & Critical Infrastructure.jpg",
    heroImage: "/image/industries/goverment and defece.jpg",
    supportingImage: "/image/industries/goverment and defece supporting.jpg",
    cardTags: ["Defense", "Federal Agencies", "Critical Infrastructure", "Secure Facilities", "Public Sector"],
    subSectors: ["Defense", "Federal Agencies", "Critical Infrastructure", "Secure Facilities", "Public Sector"],
    features: [
      "Secure facility design and engineering documentation",
      "Critical infrastructure resilience and protective design",
      "Federal compliance and standards-based engineering",
      "Public sector infrastructure engineering support"
    ],
    seoTitle: "Government, Defense & Critical Infrastructure Engineering | GTS Engineering",
    seoDescription: "Secure facility and critical infrastructure engineering for government, defense, and federal agency programs.",
    seoKeywords: ["defense engineering", "critical infrastructure engineering", "government facility design", "secure facility engineering"]
  }
];
