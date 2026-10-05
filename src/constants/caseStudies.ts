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
    imageUrl: "/image/projects/Delayed Coker Technology Center.jpg"
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
    imageUrl: "/image/projects/Containerized Water Treatment.jpg"
  },
  {
    id: "process-safety-center-of-excellence",
    title: "Process Safety Center of Excellence",
    industry: "Oil & Gas",
    client: "Confidential Global Energy Company",
    challenge: "Establish a dedicated engineering center focused on Process Safety Management (PSM).",
    solution: ["Relief Valve Sizing", "Curtiss-Wright iPRSM", "Process Safety Studies", "Global Engineering Delivery"],
    outcomes: ["Established dedicated Process Safety Design Center", "Long-term engineering support capability", "Standardized safety engineering workflows"],
    category: "energy-process-industries",
    pdfUrl: "#",
    imageUrl: "/image/projects/Process Safety Center of Excellence.jpg"
  },
  {
    id: "modular-fish-protein-biodiesel-facilities",
    title: "Modular Fish Protein & Biodiesel Facilities",
    industry: "Renewable Energy & Food Processing",
    client: "Confidential Food & Renewable Energy Company",
    challenge: "Design innovative processing facilities for emerging sustainable industries.",
    solution: ["Process Engineering", "Mechanical Design", "Plant Layout", "Equipment Engineering"],
    outcomes: ["Delivered complete engineering for specialized industrial plants"],
    category: "energy-process-industries",
    pdfUrl: "#",
    imageUrl: "/image/projects/Modular Fish Protein & Biodiesel facilities.jpg"
  },
  {
    id: "custom-oil-gas-drilling-equipment",
    title: "Custom Oil & Gas Drilling Equipment",
    industry: "Oil & Gas",
    client: "Confidential Middle Eastern Energy Company",
    challenge: "Develop specialized drilling equipment for demanding field conditions.",
    solution: ["Enhanced operational efficiency through custom-engineered equipment"],
    outcomes: ["Enhanced operational efficiency through custom-engineered equipment"],
    category: "energy-process-industries",
    pdfUrl: "#",
    imageUrl: "/image/projects/Customer Oil & gas drilling equipment.jpg"
  },
  {
    id: "industrial-boiler-emissions-technology",
    title: "Industrial Boiler Emissions Technology",
    industry: "Energy",
    client: "Confidential Industrial Company",
    challenge: "Develop patented emissions-control technology.",
    solution: ["Patent development", "Commercial deployment"],
    outcomes: ["Patent development", "Commercial deployment", "Multiple industry contracts"],
    category: "energy-process-industries",
    pdfUrl: "#",
    imageUrl: "/image/projects/Industrial boiler emissions technology.jpg"
  },
  {
    id: "industrial-facility-modularization",
    title: "Industrial Facility Modularization",
    industry: "Mission Critical Facilities",
    client: "Confidential Mission Critical Facility",
    challenge: "Reduce timeline and construction risk for complex industrial facility programs.",
    solution: ["Modular Architecture", "BIM Coordination", "Prefabricated Modules"],
    outcomes: ["50% faster construction", "15% lower project cost"],
    category: "data-centers-mission-critical",
    pdfUrl: "#",
    imageUrl: "/image/projects/Industrial Automation for Mission Critical Facilities.jpg"
  },
  {
    id: "smart-manufacturing-automation",
    title: "Smart Manufacturing Automation",
    industry: "Manufacturing",
    client: "Global Industrial Manufacturer",
    challenge: "Increase production efficiency through integrated robotics and smart automation.",
    solution: ["Robotics", "Automation", "Production Engineering"],
    outcomes: ["30% increase in production output"],
    category: "manufacturing",
    pdfUrl: "#",
    imageUrl: "/image/projects/Smart manufacturing automation.jpg"
  },
  {
    id: "digital-transformation-roadmap",
    title: "Digital Transformation Roadmap",
    industry: "Industrial Manufacturing",
    client: "Enterprise Manufacturing Client",
    challenge: "Modernize production through digital technologies.",
    solution: ["IoT", "Predictive Analytics", "Digital Strategy", "AI"],
    outcomes: ["Improved production efficiency while reducing downtime"],
    category: "manufacturing",
    pdfUrl: "#",
    imageUrl: "/image/projects/Digital transformation roadmap.jpg"
  },
  {
    id: "ai-predictive-maintenance",
    title: "AI Predictive Maintenance",
    industry: "Industrial AI & Digital Engineering",
    client: "Critical Asset Operator",
    challenge: "Reduce unplanned downtime through predictive, data-driven maintenance strategies.",
    solution: ["Machine Learning", "Sensor Integration", "Predictive Algorithms"],
    outcomes: ["25% reduction in equipment downtime"],
    category: "manufacturing",
    pdfUrl: "#",
    imageUrl: "/image/projects/AI predictive maintenance.jpg"
  },
  {
    id: "heavy-rail-bogie-engineering",
    title: "Heavy Rail Bogie Engineering",
    industry: "Rail Transportation",
    client: "Rolling Stock Manufacturer",
    challenge: "Develop a new bogie arrangement for standard-gauge rolling stock.",
    solution: ["Mechanical Design", "FEA", "Structural Validation", "Design Optimization"],
    outcomes: ["Successfully validated through finite element analysis"],
    category: "heavy-engineering",
    pdfUrl: "#",
    imageUrl: "/image/projects/Heavy Rail Bogie Engineering.jpg"
  },
  {
    id: "heavy-equipment-value-engineering",
    title: "Heavy Equipment Value Engineering",
    industry: "Heavy Equipment & Mining",
    client: "Heavy Equipment OEM",
    challenge: "Improve structural performance and reduce manufacturing cost across a diverse portfolio of heavy equipment programs — mining trucks, boom cranes, freight cars, drilling rigs, and maintenance equipment.",
    solution: ["Value Engineering", "Structural Optimization", "Design for Manufacturing"],
    outcomes: ["Improved structural performance", "Reduced manufacturing cost", "Enhanced reliability"],
    category: "heavy-engineering",
    pdfUrl: "#",
    imageUrl: "/image/projects/heavy equepment and heavy enginerring.jpg"
  }
];

export const allCaseStudies = caseStudies;
export default caseStudies;
