export interface CaseStudy {
  id: string;
  title: string;
  industry: string;
  client?: string;
  challenge: string;
  solution: string[];
  disciplines?: string[];
  outcomes: string[];
  category: 'energy-process-industries' | 'data-centers-mission-critical' | 'manufacturing' | 'heavy-engineering';
  pdfUrl: string;
  imageUrl: string;
}

export const caseStudies: CaseStudy[] = [
  {
    id: "delayed-coker-technology-transfer",
    title: "Delayed Coker Technology Transfer",
    industry: "Refining & Petrochemicals",
    client: "Confidential Global Energy Company",
    challenge: "Support the transfer and localization of advanced delayed coker technology for one of the world's largest refinery expansion projects.",
    solution: ["Technology transfer coordination", "Build-Operate-Transfer (BOT) strategy", "Engineering management", "Multidisciplinary coordination", "Global delivery management"],
    disciplines: ["Process Engineering", "Mechanical Engineering", "Project Management", "Technology Commercialization"],
    outcomes: ["Supported technology transfer exceeding $300 million", "Managed a team of over 200 engineers", "Successfully executed a large-scale international engineering collaboration"],
    category: "energy-process-industries",
    pdfUrl: "#",
    imageUrl: "/image/IMAGE.png"
  },
  {
    id: "containerized-water-treatment-plant",
    title: "Containerized Water Treatment Plant",
    industry: "Petrochemical",
    client: "Confidential Petrochemical Facility – Texas",
    challenge: "Develop a modular water treatment solution to reduce field construction and accelerate deployment.",
    solution: ["Process Design", "Mechanical Engineering", "Structural Engineering", "Electrical & Instrumentation", "Modular Integration"],
    outcomes: ["Reduced site construction", "Improved quality through modular fabrication", "Accelerated project delivery"],
    category: "energy-process-industries",
    pdfUrl: "#",
    imageUrl: "/image/IMAGE.png"
  },
  {
    id: "process-safety-center-of-excellence",
    title: "Process Safety Center of Excellence",
    industry: "Oil & Gas",
    challenge: "Establish a dedicated engineering center focused on Process Safety Management (PSM).",
    solution: ["Relief Valve Sizing", "Curtiss-Wright iPRSM", "Process Safety Studies", "Global Engineering Delivery"],
    outcomes: ["Established dedicated Process Safety Design Center", "Long-term engineering support capability", "Standardized safety engineering workflows"],
    category: "energy-process-industries",
    pdfUrl: "#",
    imageUrl: "/image/IMAGE.png"
  },
  {
    id: "modular-fish-protein-biodiesel-facilities",
    title: "Modular Fish Protein & Biodiesel Facilities",
    industry: "Renewable Energy & Food Processing",
    challenge: "Design innovative processing facilities for emerging sustainable industries.",
    solution: ["Process Engineering", "Mechanical Design", "Plant Layout", "Equipment Engineering"],
    outcomes: ["Delivered complete engineering for specialized industrial plants"],
    category: "energy-process-industries",
    pdfUrl: "#",
    imageUrl: "/image/IMAGE.png"
  },
  {
    id: "custom-oil-gas-drilling-equipment",
    title: "Custom Oil & Gas Drilling Equipment",
    industry: "Oil & Gas",
    client: "Confidential Middle Eastern Energy Company",
    challenge: "Develop specialized drilling equipment for demanding field conditions.",
    solution: [],
    outcomes: ["Enhanced operational efficiency through custom-engineered equipment"],
    category: "energy-process-industries",
    pdfUrl: "#",
    imageUrl: "/image/IMAGE.png"
  },
  {
    id: "industrial-boiler-emissions-technology",
    title: "Industrial Boiler Emissions Technology",
    industry: "Energy",
    challenge: "Develop patented emissions-control technology.",
    solution: [],
    outcomes: ["Patent development", "Commercial deployment", "Multiple industry contracts"],
    category: "energy-process-industries",
    pdfUrl: "#",
    imageUrl: "/image/IMAGE.png"
  },
  {
    id: "industrial-facility-modularization",
    title: "Industrial Facility Modularization",
    industry: "Industrial Facilities & Design-Build",
    challenge: "Reduce construction schedule for a complex industrial facility program.",
    solution: [],
    outcomes: ["30% faster construction", "15% lower project cost"],
    category: "data-centers-mission-critical",
    pdfUrl: "#",
    imageUrl: "/image/IMAGE.png"
  },
  {
    id: "smart-manufacturing-automation",
    title: "Smart Manufacturing Automation",
    industry: "Manufacturing",
    challenge: "Increase production efficiency.",
    solution: ["Robotics", "Automation", "Production Engineering"],
    outcomes: ["30% increase in production output"],
    category: "manufacturing",
    pdfUrl: "#",
    imageUrl: "/image/IMAGE.png"
  },
  {
    id: "digital-transformation-roadmap",
    title: "Digital Transformation Roadmap",
    industry: "Industrial Manufacturing",
    challenge: "Modernize production through digital technologies.",
    solution: ["IoT", "Predictive Analytics", "Digital Strategy", "AI"],
    outcomes: ["Improved production efficiency while reducing downtime"],
    category: "manufacturing",
    pdfUrl: "#",
    imageUrl: "/image/IMAGE.png"
  },
  {
    id: "ai-predictive-maintenance",
    title: "AI Predictive Maintenance",
    industry: "Industrial AI & Digital Engineering",
    challenge: "Reduce unplanned downtime through predictive, data-driven maintenance strategies.",
    solution: [],
    outcomes: ["25% reduction in equipment downtime"],
    category: "manufacturing",
    pdfUrl: "#",
    imageUrl: "/image/IMAGE.png"
  },
  {
    id: "heavy-rail-bogie-engineering",
    title: "Heavy Rail Bogie Engineering",
    industry: "Rail Transportation",
    challenge: "Develop a new bogie arrangement for standard-gauge rolling stock.",
    solution: ["Mechanical Design", "FEA", "Structural Validation", "Design Optimization"],
    outcomes: ["Successfully validated through finite element analysis"],
    category: "heavy-engineering",
    pdfUrl: "#",
    imageUrl: "/image/IMAGE.png"
  },
  {
    id: "heavy-equipment-value-engineering",
    title: "Heavy Equipment Value Engineering",
    industry: "Heavy Equipment & Mining",
    challenge: "Improve structural performance and reduce manufacturing cost across a diverse portfolio of heavy equipment programs — mining trucks, boom cranes, freight cars, drilling rigs, and maintenance equipment.",
    solution: ["Value Engineering", "Structural Optimization", "Design for Manufacturing"],
    outcomes: ["Improved structural performance", "Reduced manufacturing cost", "Enhanced reliability"],
    category: "heavy-engineering",
    pdfUrl: "#",
    imageUrl: "/image/IMAGE.png"
  }
];

export const allCaseStudies = caseStudies;
export default caseStudies;
