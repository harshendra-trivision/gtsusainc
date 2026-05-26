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
    slug: "energy-oil-gas-power",
    title: "Energy – Oil & Gas and Power",
    tagline: "Engineering resilient systems for onshore/offshore facilities, pipeline assets, and sustainable generation plants.",
    description: "GTS delivers comprehensive engineering and documentation solutions across the energy value chain. From complex hydrocarbon refineries to massive wind and nuclear power generators, we support asset lifecycle engineering and safety-critical operations.",
    iconName: "Flame",
    subSectors: [
      "Onshore & Offshore Oil & Gas facilities",
      "Pipeline & Distribution Networks",
      "Petrochemical & Refinery Operations",
      "Thermal Power Engineering",
      "Hydroelectric Dams & Turbine systems",
      "Wind Farm Layout & Mechanical design",
      "Nuclear Plant Auxiliary structures"
    ],
    features: [
      "FEED (Front-End Engineering Design) for refinery pipelines",
      "Stress and vibration analysis of high-pressure piping assemblies",
      "Civil/structural structural design for plant auxiliary towers",
      "Creation of detailed P&IDs and standard operating manuals"
    ],
    seoTitle: "Energy, Oil & Gas, and Power Engineering | GTS Engineering",
    seoDescription: "Engineering excellence for the energy sector. Detailed piping layouts, offshore design, FEED, P&ID developments, and power generation solutions.",
    seoKeywords: ["energy engineering", "oil and gas piping", "power plant design", "pipeline analysis", "onshore offshore engineering"]
  },
  {
    slug: "heavy-engineering-machinery",
    title: "Heavy Engineering & Machinery",
    tagline: "Optimizing material throughput and machine durability through advanced structures and automation.",
    description: "We optimize heavy-duty systems, structures, and automated equipment. Our design and structural verification services ensure machinery operating in high-fatigue mining, agriculture, or steelworks works reliably and safely.",
    iconName: "Truck",
    subSectors: [
      "Oil & Gas Drilling Equipment",
      "Steel, Cement & Power Plant Structures",
      "Heavy Mining & Exploration Machinery",
      "Agricultural Machinery & Implements",
      "Material Handling Cranes & Conveyors",
      "Packaging Machinery & Robotics",
      "Advanced Machine Tools & Dies"
    ],
    features: [
      "Weight optimization using advanced FEA simulation",
      "Kinematic and dynamic modeling of complex linkages",
      "Tooling and fixture designs for progressive assembly",
      "Reliability engineering and technical asset documentation"
    ],
    seoTitle: "Heavy Engineering & Machinery Design | GTS Engineering",
    seoDescription: "Industrial machinery design, FEA structural optimization, material handling systems, and advanced manufacturing automation.",
    seoKeywords: ["heavy engineering", "machinery design", "finite element analysis", "material handling systems", "machine tooling design"]
  },
  {
    slug: "marine",
    title: "Marine",
    tagline: "Naval architecture, structural integrity, and outfitting designs for modern commercial and military vessels.",
    description: "GTS brings deep naval architecture expertise. We assist shipyards and designers in developing hull structures, routing intricate mechanical/utility piping, and designing HVAC and outfitting assemblies compliant with international classification societies.",
    iconName: "Ship",
    subSectors: [
      "Naval Architecture & Hydrostatics",
      "Hull Structure Design & Finite Element Analysis",
      "Propulsion & Machinery Integration",
      "Marine & Utility Fluid Systems",
      "Vessel Piping Design & Stress Analysis",
      "Shipboard HVAC & Environmental Systems",
      "Deck Outfitting & Accommodations"
    ],
    features: [
      "3D hull modeling and structural frame detailing",
      "Pipe routing, stress checks, and isometric drafting",
      "HVAC duct routing and fluid pressure drops optimization",
      "Technical manuals and wiring diagrams for ship control boards"
    ],
    seoTitle: "Naval Architecture & Marine Engineering | GTS Engineering",
    seoDescription: "Comprehensive marine engineering, hull modeling, outfitting designs, vessel piping layout, and CAD/CAE solutions.",
    seoKeywords: ["marine engineering", "naval architecture", "hull design", "ship piping layout", "vessel outfitting"]
  },
  {
    slug: "consumer",
    title: "Consumer & Medical Devices",
    tagline: "Accelerating consumer product conceptualization and engineering precision diagnostic medical platforms.",
    description: "We combine high-volume consumer aesthetics with safety-critical medical standards. Our multidisciplinary engineers speed up development, ensuring durable casings, compliant diagnostic structures, and robust electrical wiring.",
    iconName: "Smartphone",
    subSectors: [
      "Office Automation & Printers",
      "Consumer Electronics & Household Durables",
      "Security Systems & Access Control",
      "Gaming Equipment & Interactive Hardware",
      "Diagnostic Imaging Systems (MRI, CT)",
      "Patient Monitoring Systems",
      "Therapeutic Equipment & Devices"
    ],
    features: [
      "Plastic injection molded enclosures design",
      "Thermal simulation and dynamic drop testing validation",
      "Regulatory document packages (FDA/CE) and publishing",
      "PCB sizing, electrical schematics, and wiring layouts"
    ],
    seoTitle: "Consumer Electronics & Medical Device Engineering | GTS Engineering",
    seoDescription: "Enclosure styling, thermal simulation, component detailing, and regulatory manuals for consumer products and medical systems.",
    seoKeywords: ["consumer electronics", "medical device design", "injection molding design", "thermal simulation", "drop testing"]
  },
  {
    slug: "telecom",
    title: "Telecom",
    tagline: "Scaling telecommunication infrastructure, geospatial network models, and operations support systems.",
    description: "Deploying high-speed networks requires rigorous documentation and real-time asset data. GTS designs network routing, compiles installation guides, and leverages web-GIS tools to monitor fibers, towers, and auxiliary utilities.",
    iconName: "Radio",
    subSectors: [
      "Network Infrastructure Consulting",
      "Network Inventory & GIS Management",
      "Operations Support Systems (OSS) integration",
      "Inside/Outside Plant (ISP/OSP) designs",
      "Tower structural and wind-load validation",
      "Technical installation manuals and documentation"
    ],
    features: [
      "GIS asset mapping and route layout optimization",
      "Tower structural calculations under high wind conditions",
      "Fiber optic network topology and cabinet diagrams",
      "Operating procedures manuals and quick guides creation"
    ],
    seoTitle: "Telecom Infrastructure & Network GIS Services | GTS Engineering",
    seoDescription: "OSP/ISP layout, tower load checks, network database mapping, and complete operations support documentation for telecom networks.",
    seoKeywords: ["telecom engineering", "GIS mapping", "network inventory", "OSP ISP design", "tower structural analysis"]
  },
  {
    slug: "utilities",
    title: "Utilities",
    tagline: "Asset tracking, Smart Grid implementations, and spatial analytics for water, gas, and power systems.",
    description: "GTS helps municipal utilities and power grids maintain vast distribution networks. We specialize in mapping pipeline networks in GIS databases, designing layouts, and documenting grid control interfaces.",
    iconName: "Grid",
    subSectors: [
      "Smart Grid system integration",
      "Utility Operational & IT systems",
      "Water & Gas distribution network design",
      "Substation and Power Transmission structures",
      "GIS Asset mapping and database migration",
      "Standard Operating Procedures & Safety Manuals"
    ],
    features: [
      "Converting legacy blueprints to georeferenced GIS databases",
      "Smart meter grid data structures and software connections",
      "Substation support structure stress analyses",
      "Asset lifecycle logs and maintenance planning guides"
    ],
    seoTitle: "Smart Grid & Utility Asset Engineering | GTS Engineering",
    seoDescription: "GIS database conversion, substations structural analysis, smart grid layouts, and operations manuals for municipal utilities.",
    seoKeywords: ["utility engineering", "smart grid design", "GIS utility mapping", "substation structural design", "asset database conversion"]
  },
  {
    slug: "aerospace",
    title: "Aerospace",
    tagline: "Weight optimization, cabin interior designs, and rigorous technical publications for aircraft systems.",
    description: "Aerospace projects demand perfect accuracy and strict compliance. GTS assists tier-1 aerospace suppliers with weight reduction simulations, cabin interior component designs, electrical wiring, and ATA-compliant manuals.",
    iconName: "Plane",
    subSectors: [
      "Aircraft Cabin Interiors & Seating systems",
      "Aero Structures & Bracket designs",
      "Auxiliary Environmental Control systems",
      "Aircraft Engine component modeling",
      "Aerospace Electrical Harness routing",
      "ATA iSpec 2200 Technical Publications"
    ],
    features: [
      "Weight-reduction studies via finite element analysis (FEA)",
      "Design of cabin brackets, galleys, and seating trim panels",
      "Routing electrical harness routing and schematic generation",
      "ATA iSpec 2200 and S1000D structured documentation manuals"
    ],
    seoTitle: "Aerospace Cabin Design & Tech Pubs | GTS Engineering",
    seoDescription: "Expert aerospace services: FEA weight reduction, cabin interior styling, harness routing, and ATA iSpec 2200 flight manuals.",
    seoKeywords: ["aerospace engineering", "cabin design", "aircraft structures", "ATA iSpec 2200", "S1000D documentation"]
  },
  {
    slug: "automotive",
    title: "Automotive",
    tagline: "Body-in-White (BIW) design, interior trim, closures, and complex vehicle electronics systems.",
    description: "GTS is a strategic partner to automotive suppliers, helping accelerate the design of structural components, bumpers, closures, vehicle interior trims, and electric vehicle battery packaging.",
    iconName: "Car",
    subSectors: [
      "Body-in-White (BIW) structures",
      "Closures (Doors, Hoods, Tailgates)",
      "Dashboard & Interior Trim assemblies",
      "Bumpers & Exterior cladding panels",
      "Chassis, Underbody & Suspension frames",
      "Powertrain & Battery enclosure packagings",
      "Automotive Electrical wiring & Harnesses"
    ],
    features: [
      "Stamping dies and mold tooling design for steel/plastics",
      "Crashworthiness, modal, and fatigue simulations (CAE)",
      "Class-A surface modeling and trim clip routing",
      "Quality control inspection logs and component documentation"
    ],
    seoTitle: "Automotive BIW, Interiors, & CAE Engineering | GTS Engineering",
    seoDescription: "Automotive engineering partner: BIW structures, plastic interior trims, crash safety simulation, and mold tooling design.",
    seoKeywords: ["automotive engineering", "BIW design", "closures design", "interior trim design", "crash simulation"]
  },
  {
    slug: "railways",
    title: "Railways",
    tagline: "Positive Train Control (PTC), safety-critical signaling, train interior design, and publications.",
    description: "Modern mass transit requires safe signaling and robust rolling stock design. GTS supports railway signaling design (including PTC), layout design for passenger cars, and extensive safety documentation.",
    iconName: "Train",
    subSectors: [
      "Positive Train Control (PTC) implementation",
      "Signaling & Interlocking system logic",
      "Electrical & Electronics schematics",
      "Rolling Stock mechanical structure designs",
      "Interior seating & Cab layout optimization",
      "Railway Operations Technical publications",
      "Design automation custom scripts"
    ],
    features: [
      "Interlocking safety logic matrices and schematic wiring",
      "Passenger seat mechanical frame structural FEM validations",
      "Operating instructions and maintenance manuals for locomotives",
      "Automating harness routing via specialized scripting"
    ],
    seoTitle: "Railway Signaling, PTC, & Rolling Stock Design | GTS Engineering",
    seoDescription: "Complete rail engineering solutions: signaling design, interlocking configurations, PTC, structures analysis, and maintenance manuals.",
    seoKeywords: ["railway engineering", "positive train control", "PTC signaling", "interlocking logic", "rolling stock design"]
  }
];
