export interface SubService {
  title: string;
  description: string;
}

export interface Service {
  slug: string;
  title: string;
  tagline: string;
  description: string;
  iconName: string;
  bulletPoints: string[];
  subServices: SubService[];
  seoTitle: string;
  seoDescription: string;
  seoKeywords: string[];
}

export const services: Service[] = [
  {
    slug: "product-engineering",
    title: "Product Engineering",
    tagline: "Accelerating innovation from conceptualization to validation and production-ready designs.",
    description: "GTS operates as a virtual extension of your team, providing complete end-to-end design, analysis, and validation services. We manage product development cycles from the initial napkin sketch to physical prototyping and manufacturing release across diverse heavy engineering, automotive, and consumer segments.",
    iconName: "Cpu",
    bulletPoints: [
      "Ideation & Inception",
      "Preliminary Design",
      "Design (CAD)",
      "Validation (CAE)",
      "Tooling & Fixture Design",
      "Testing & Prototype Coordination"
    ],
    subServices: [
      {
        title: "Ideation & Inception",
        description: "Translating conceptual ideas and market requirements into robust functional specifications and architectural designs."
      },
      {
        title: "Preliminary Design",
        description: "Feasibility studies, hand calculations, design space sizing, material selection, and initial layout configurations."
      },
      {
        title: "Design (CAD)",
        description: "State-of-the-art 3D solid and surface modeling, detailed engineering drafting, GD&T application, and large assembly management."
      },
      {
        title: "Validation (CAE)",
        description: "Rigorous finite element analysis (FEA), computational fluid dynamics (CFD), structural, thermal, modal, and fatigue simulations to optimize weight and performance."
      },
      {
        title: "Tooling & Fixtures",
        description: "Design of specialized injection molds, sheet metal progressive dies, casting patterns, and assembly/welding jigs."
      },
      {
        title: "Testing & Prototype",
        description: "Supporting physical mockups, functional performance testing, compliance validation, and test report generation."
      }
    ],
    seoTitle: "Product Engineering Services | GTS Engineering",
    seoDescription: "Explore GTS Product Engineering services from conceptual CAD design to advanced CAE FEA validation and tooling solutions.",
    seoKeywords: ["product engineering", "CAD modeling", "CAE FEA analysis", "reverse engineering", "tooling design", "3D CAD modeling"]
  },
  {
    slug: "plant-process-design",
    title: "Plant & Process Design",
    tagline: "Comprehensive industrial plant engineering, basic design, FEED, and lifecycle optimization.",
    description: "We deliver world-class engineering solutions for complex processing facilities, refineries, onshore/offshore piping, and thermal power structures. Our rigorous engineering practices ensure regulatory compliance, safety, and operational efficiency.",
    iconName: "Settings",
    bulletPoints: [
      "Process Design & Basic Engineering",
      "FEED (Front-End Engineering Design)",
      "Detail Design & Structural Engineering",
      "Specialized Piping Design & Stress Analysis"
    ],
    subServices: [
      {
        title: "Process Design & Basic Engineering",
        description: "Process flow diagrams (PFD), heat & mass balances, utility distribution modeling, and equipment sizing specifications."
      },
      {
        title: "FEED (Front-End Engineering Design)",
        description: "Comprehensive technical definitions, Piping & Instrumentation Diagrams (P&ID), initial layout design, hazard studies (HAZOP), and cost estimations."
      },
      {
        title: "Detail Design",
        description: "Fully-developed civil structural models, equipment support structures, concrete layouts, electrical cable trays, and isometric drawing extraction."
      },
      {
        title: "Specialized Services",
        description: "Pipe stress analysis using CAESAR II, surge analysis, dynamic structure analysis, and high-temperature layout optimization."
      }
    ],
    seoTitle: "Plant & Process Design Services | GTS Engineering",
    seoDescription: "Industrial plant engineering, FEED, process flow modeling, P&ID developments, and piping design by GTS Engineering.",
    seoKeywords: ["plant engineering", "process design", "FEED engineering", "piping stress analysis", "CAESAR II", "P&ID design"]
  },
  {
    slug: "document-engineering",
    title: "Document Engineering",
    tagline: "Precision technical documentation, electrical wiring schematics, and translation enablers.",
    description: "High-quality, standards-compliant technical publications are critical for engineered assets. GTS produces accurate, comprehensive documentation, interactive manuals, and multi-lingual technical publications for global audiences.",
    iconName: "FileText",
    bulletPoints: [
      "Electrical Wiring Diagrams",
      "Structured Web Publishing & XML",
      "Maintenance Planning Documents",
      "Professional Technical Translation Services"
    ],
    subServices: [
      {
        title: "Wiring Diagrams",
        description: "Creation of complex electrical wiring schematics, harness routing layouts, and terminal block details for marine, aerospace, and rail systems."
      },
      {
        title: "Web Publishing & XML",
        description: "Authoring XML/SGML documents matching international specifications (S1000D, ATA iSpec 2200) for clean interactive digital distribution."
      },
      {
        title: "Maintenance Planning",
        description: "Developing detailed operational manuals, preventative maintenance checklists, scheduling guidelines, and cataloguing spare parts."
      },
      {
        title: "Translation Services",
        description: "Accurate translation of technical data sheets, operating procedures, and safety compliance manuals by native-speaking engineers."
      }
    ],
    seoTitle: "Document Engineering & Tech Pubs | GTS Engineering",
    seoDescription: "Professional document engineering, wiring diagrams, S1000D/ATA publishing, and multi-language technical translation.",
    seoKeywords: ["document engineering", "wiring diagrams", "technical publishing", "S1000D", "ATA iSpec 2200", "technical translation"]
  },
  {
    slug: "geoinformatics-engineering",
    title: "Geoinformatics Engineering",
    tagline: "Advanced GIS systems development, spatial analytics, and utility asset intelligence.",
    description: "Harnessing the power of location intelligence. GTS provides custom geospatial consulting, asset mapping, and advanced web-GIS systems to help organizations manage massive infrastructure, utilities, and logistics networks.",
    iconName: "Map",
    bulletPoints: [
      "Geospatial Consulting & Architecture",
      "Custom GIS Application Development",
      "Geospatial Data Services & Digitization",
      "Utility & Network Asset Management"
    ],
    subServices: [
      {
        title: "Consulting",
        description: "Formulating geographic data strategies, system architecture, database optimization, and cloud GIS implementation roadmaps."
      },
      {
        title: "Application Development",
        description: "Developing customized web-based and mobile GIS apps using Esri ArcGIS, OpenLayers, Leaflet, and geodatabase backends."
      },
      {
        title: "Data Services",
        description: "Massive scale spatial data conversion, remote sensing, satellite image processing, map digitization, and metadata styling."
      },
      {
        title: "Network Asset Management",
        description: "Modeling gas pipelines, water distribution lines, telecom fibers, and electric smart grids for real-time asset tracking and pathfinding."
      }
    ],
    seoTitle: "Geoinformatics & GIS Engineering Services | GTS Engineering",
    seoDescription: "Location intelligence, spatial database development, web GIS apps, and utility network management from GTS Geoinformatics.",
    seoKeywords: ["geoinformatics", "GIS services", "spatial analytics", "ArcGIS development", "utility asset mapping", "network inventory"]
  },
  {
    slug: "plm-software-engineering",
    title: "PLM & Software Engineering",
    tagline: "Seamless product lifecycle management integrations, migrations, and customized software enablers.",
    description: "Accelerate your digital transformation. We bridge the gap between design engineering and enterprise software, integrating state-of-the-art PLM systems, automating custom workflows, and providing application management support.",
    iconName: "Code",
    bulletPoints: [
      "PLM Migration, Maintenance & Support",
      "Custom Application Management",
      "Manufacturing Information Solutions (MIS)",
      "Design Automation & Macro Development"
    ],
    subServices: [
      {
        title: "Migration & Support",
        description: "Upgrading core PLM instances (Windchill, Teamcenter, Enovia), migrating heterogeneous CAD databases, and offering 24/7 helpdesk support."
      },
      {
        title: "Application Management",
        description: "Maintaining core enterprise applications, custom API connections, security patch deployments, and user administration."
      },
      {
        title: "Manufacturing Information",
        description: "Integrating Shop Floor and MES systems with ERP, enabling real-time engineering Bill of Materials (BOM) transitions to manufacturing BOMs."
      },
      {
        title: "Design Automation",
        description: "Developing custom API plugins, macros, and configuration wizards within CATIA, NX, and SOLIDWORKS to automate repetitive tasks."
      }
    ],
    seoTitle: "PLM & Software Engineering Services | GTS Engineering",
    seoDescription: "Maximize ROI on PLM platforms (Teamcenter, Windchill) with migrations, integrations, custom macros, and manufacturing software.",
    seoKeywords: ["PLM engineering", "Teamcenter integration", "Windchill migration", "design automation", "MES ERP integration"]
  },
  {
    slug: "project-management-controls",
    title: "Project Management & Controls",
    tagline: "Mitigating risks and maintaining schedules through robust procurement, tracking, and commissioning support.",
    description: "GTS ensures engineering projects finish on time, within budget, and to the highest quality. We serve as owners' representatives and consultants, organizing schedules, verifying quality, and facilitating successful equipment commissioning.",
    iconName: "BarChart",
    bulletPoints: [
      "Project Management Consultancy (PMC)",
      "Detailed Project Planning & Scheduling",
      "Procurement & Construction Management (EPCM)",
      "Comprehensive Commissioning Services"
    ],
    subServices: [
      {
        title: "PMC Services",
        description: "Representing project owners, managing design coordination, and conducting strict quality inspections at vendor manufacturing sites."
      },
      {
        title: "Planning & Scheduling",
        description: "Developing complex critical path method (CPM) networks, resource loading, earned value tracking, and progress dashboard generation."
      },
      {
        title: "Procurement Support",
        description: "Global vendor sourcing, evaluating technical bids, drafting contract agreements, expediting transport, and on-site receipt inspections."
      },
      {
        title: "Commissioning Support",
        description: "Overseeing equipment mechanical completion, executing dry/wet test run checklists, troubleshooting systems, and compiling final hand-over documents."
      }
    ],
    seoTitle: "Project Management & Controls Services | GTS Engineering",
    seoDescription: "Ensure project delivery on-time and within budget. PMC services, scheduling, procurement management, and field commissioning support.",
    seoKeywords: ["project management consultancy", "PMC", "EPCM", "critical path scheduling", "commissioning services", "project scheduling"]
  }
];
