export interface SolutionPoint {
  slug: string;
  title: string;
  parentHeading: string;
  description: string;
  deliverables: string[];
}

export const solutionPoints: SolutionPoint[] = [
  // Utilities Points
  {
    slug: "smart-grid",
    title: "Smart Grid",
    parentHeading: "Utilities",
    description: "GTS designs layouts and smart communication systems for municipal power grids, integrating advanced monitoring grids for automated load management and distribution efficiency.",
    deliverables: ["Advanced Metering Infrastructure (AMI) designs", "Grid communication schematics", "Distribution automation layouts"]
  },
  {
    slug: "it-systems",
    title: "IT Systems",
    parentHeading: "Utilities",
    description: "Integrating industrial grid controls with enterprise database systems (ERP/GIS) to enable real-time information processing and maintenance dispatch controls.",
    deliverables: ["Database sync APIs", "Enterprise software wrappers", "Secure data warehousing schemas"]
  },
  {
    slug: "operational-systems",
    title: "Operational Systems",
    parentHeading: "Utilities",
    description: "SCADA systems implementation and dashboard configurations to monitor real-time distribution loads, flow diagnostics, and device health parameters.",
    deliverables: ["SCADA dashboard configurations", "Alarm management matrices", "Operational telemetry integrations"]
  },
  {
    slug: "power-engineering",
    title: "Power Engineering",
    parentHeading: "Utilities",
    description: "Electrical engineering layouts for utility substations, cabling ducts, safety grounding configurations, and overhead transmission line structural supports.",
    deliverables: ["Substation physical layouts", "Grounding grid designs", "Cabling routing diagrams"]
  },

  // Aerospace Points
  {
    slug: "aero-interiors",
    title: "Aero Interiors",
    parentHeading: "Aerospace",
    description: "Weight-optimized structural designs for passenger cabin interiors, including galleys, luggage compartments, passenger seating structures, and crew rest modules.",
    deliverables: ["Galley structural models", "Composite compartment designs", "FST (Fire, Smoke, Toxicity) compliant material configurations"]
  },
  {
    slug: "aero-structures",
    title: "Aero Structures",
    parentHeading: "Aerospace",
    description: "High-fatigue structural analysis and detailing for fuselage brackets, wing rib assemblies, and cargo support beams using advanced aluminum and composite elements.",
    deliverables: ["Wing bracket FEA stress analyses", "Fuselage frame detailing", "Fatigue and crack propagation simulations"]
  },
  {
    slug: "aero-systems",
    title: "Aero Systems",
    parentHeading: "Aerospace",
    description: "Detailed schematics, line routing, and brackets design for cabin environmental control systems (ECS), fuel distribution pipes, and hydraulic actuator conduits.",
    deliverables: ["ECS duct routing layouts", "Hydraulic piping schematics", "System installation brackets design"]
  },
  {
    slug: "aero-engines",
    title: "Aero Engines",
    parentHeading: "Aerospace",
    description: "CAD modeling and thermal analyses for auxiliary powerplant structures, exhaust conduits, bypass ducts, and nacelle cowlings.",
    deliverables: ["Nacelle structural detailing", "Thermal boundary FEA models", "Exhaust conduit assemblies"]
  },

  // Automotive Points
  {
    slug: "biw",
    title: "BIW (Body-in-White)",
    parentHeading: "Automotive",
    description: "Body structure design including floor assemblies, side frames, roof arches, and engine compartments optimized for stamping and spot-welding fabrication.",
    deliverables: ["Floor panel stamping designs", "Pillar reinforcement assemblies", "Welding fixture parameters"]
  },
  {
    slug: "closures",
    title: "Closures",
    parentHeading: "Automotive",
    description: "Kinematic calculations and detailing of moving automotive panels such as side doors, engine hoods, and trunk tailgates.",
    deliverables: ["Door hinge kinematic calculations", "Hood latch structural reinforcements", "Weatherstrip sealing line routing"]
  },
  {
    slug: "interior",
    title: "Interior",
    parentHeading: "Automotive",
    description: "Aesthetic Class-A surface conversion, injection-molded detailing, and mounting configurations for dashboards, door trims, and center consoles.",
    deliverables: ["Dashboard mounting brackets design", "Door trim plastic injection models", "Airbag deployment chute detailing"]
  },
  {
    slug: "exterior",
    title: "Exterior",
    parentHeading: "Automotive",
    description: "Aerodynamic exterior paneling, front bumpers, radiator grilles, side skirts, and spoiler mounting configurations designed for high volume manufacturing.",
    deliverables: ["Bumper impact structural detailing", "Aero grille active shutters modeling", "Wheel arch cladding designs"]
  },
  {
    slug: "underbody",
    title: "Underbody",
    parentHeading: "Automotive",
    description: "Structural design of chassis frames, suspension links, shock towers, and exhaust hangers designed for corrosion resistance and crash load absorption.",
    deliverables: ["Shock tower structural castings", "Subframe welding assemblies", "Crash rail crumple zone optimizations"]
  },
  {
    slug: "powertrain",
    title: "Powertrain",
    parentHeading: "Automotive",
    description: "Acoustic and thermal casings, battery box envelopes, oil pans, and engine block structural casting accessory brackets.",
    deliverables: ["Battery packaging thermal casings", "Transmission mount brackets", "Oil pan casting configurations"]
  },
  {
    slug: "electrical-electronics",
    title: "Electrical & Electronics",
    parentHeading: "Automotive",
    description: "Intricate electrical harness routing, 2D wiring schematic charts, fusebox allocations, and ECU mounting structural designs.",
    deliverables: ["3D wire harness routing layouts", "2D harness schematic drawings", "Fusebox mounting brackets"]
  },

  // Railways Points
  {
    slug: "positive-train-control",
    title: "Positive Train Control",
    parentHeading: "Railways",
    description: "Safety-critical PTC signaling infrastructure design, route data maps, interface allocations, and transponder field cabling diagrams.",
    deliverables: ["PTC signal layouts", "Track transponder wiring diagrams", "Interface block schematics"]
  },
  {
    slug: "signalling-interlocking",
    title: "Signalling & Interlocking",
    parentHeading: "Railways",
    description: "Developing fail-safe interlocking logic charts, level-crossing signals layouts, and cabling charts for dispatch control rooms.",
    deliverables: ["Interlocking logic matrix sheets", "Signal cable routing charts", "Level crossing sensor layouts"]
  },
  {
    slug: "rail-electrical-electronics",
    title: "Electrical & Electronics Design",
    parentHeading: "Railways",
    description: "Locomotive control panel wiring diagrams, lighting controls, battery compartments, and roof-mounted HVAC power routing.",
    deliverables: ["Cabin control panel schematic layouts", "HVAC electrical power routing", "Under-car battery tray details"]
  },
  {
    slug: "rail-mechanical-design",
    title: "Mechanical Design & Analysis",
    parentHeading: "Railways",
    description: "Bogie frames structural FEM stress checks, suspension setups, couplers, and under-car equipment enclosures design.",
    deliverables: ["Bogie frame structural FEA profiles", "Enclosure weldment details", "Coupler mounting calculations"]
  },
  {
    slug: "rail-technical-publication",
    title: "Technical Publication",
    parentHeading: "Railways",
    description: "Maintenance manuals, spare parts catalogs, and operator instructions matched to international rolling stock standards.",
    deliverables: ["Operator locomotive manual books", "Illustrated parts catalogs", "Maintenance scheduling checklogs"]
  },
  {
    slug: "rail-design-automation",
    title: "Design Automation",
    parentHeading: "Railways",
    description: "Creating custom macro plugins and design APIs to accelerate repetitive bogie calculations and cabling routing inside CAD.",
    deliverables: ["CAD cabling routing macros", "Bogie parametric modeling sheets", "BOM automatic extraction tools"]
  },
  {
    slug: "rail-interiors-seating",
    title: "Interiors & Seating",
    parentHeading: "Railways",
    description: "Passenger car seating structural frames, handrail layouts, luggage racks, toilet cabins, and floor trim panels design.",
    deliverables: ["Passenger seat mechanical frame structural models", "Luggage rack composite structures", "Toilet cabin interior assemblies"]
  },

  // Specialist Points
  {
    slug: "our-benefits",
    title: "Our Benefits",
    parentHeading: "An Engineering Solution Specialist",
    description: "GTS offers scalable technical skills, shorter development cycles, and significant overhead savings through dedicated engineering assets.",
    deliverables: ["High scalability controls", "Domain software coverage", "Maximized engineering output"]
  },
  {
    slug: "virtual-extension",
    title: "Virtual Extension",
    parentHeading: "An Engineering Solution Specialist",
    description: "Seamlessly integrate GTS designers into your corporate directories, meeting protocols, and project workflows as a virtual desk extension.",
    deliverables: ["Integrated email & chat pipelines", "Synchronous timezone overlaps", "Direct project board participations"]
  },
  {
    slug: "extended-arm",
    title: "Extended Arm",
    parentHeading: "An Engineering Solution Specialist",
    description: "Utilize our technical expertise as an extension of your own engineering force to scale up during peak cycles and absorb load spikes.",
    deliverables: ["Instant resource scalability", "Domain specialized engineers", "Overhead headcount mitigation"]
  },
  {
    slug: "increasing-efficiency",
    title: "Increasing Efficiency",
    parentHeading: "An Engineering Solution Specialist",
    description: "Decrease product release cycles by leveraging timezone-shifted 24-hour engineering pipelines across domestic and global centers.",
    deliverables: ["24-hour design cycle runs", "Accelerated prototyping paths", "Reduced release lag offsets"]
  },
  {
    slug: "optimization",
    title: "Optimization",
    parentHeading: "An Engineering Solution Specialist",
    description: "Continuous mechanical weight reduction, structural stress redistribution, fluid pressure drops tuning, and cost optimization.",
    deliverables: ["Structural weight reduction profiles", "Piping pressure drops optimizations", "Raw material cost metrics trimming"]
  },
  {
    slug: "3f-strategy",
    title: "3F Strategy - Customer delight",
    parentHeading: "An Engineering Solution Specialist",
    description: "Our customer satisfaction blueprint centered on operational speed (Fast), workflow adaptability (Flexible), and specialized attention (Focused).",
    deliverables: ["Fast turnaround checklists", "Flexible delivery models", "Focused project core teams"]
  },
  {
    slug: "fast",
    title: "Fast",
    parentHeading: "An Engineering Solution Specialist",
    description: "Swift timezone-shifted execution pipelines and rapid response workflows to match demanding manufacturing deadlines.",
    deliverables: ["Expedited response matrices", "Timezone overlap coordination", "Rapid layout adjustments"]
  },
  {
    slug: "flexible",
    title: "Flexible",
    parentHeading: "An Engineering Solution Specialist",
    description: "Workflow configurations tailored to match specific customer methodologies, software setups, and communication schedules.",
    deliverables: ["Onshore/offshore blended ratios", "Software compliance adaptations", "Scalable resource assignments"]
  },
  {
    slug: "focused",
    title: "Focused",
    parentHeading: "An Engineering Solution Specialist",
    description: "Dedicated designer cells assigned exclusively to your account, ensuring detailed standard alignment and data protection.",
    deliverables: ["Isolated project cells", "100% dedicated designers", "Confidentiality boundary compliance"]
  },

  // Energy Points
  {
    slug: "oil-gas",
    title: "Oil & Gas",
    parentHeading: "Energy",
    description: "Process piping, P&ID developments, refinery vessel calculations, and material selections for high pressure petrochemical operations.",
    deliverables: ["Process flow sheets (PFDs)", "Refinery column modeling", "Equipment data sheets"]
  },
  {
    slug: "onshore-offshore",
    title: "Onshore & Offshore Oil & Gas",
    parentHeading: "Energy",
    description: "Deepwater structural platform designs, subsea manifold piping, and onshore processing plant civil layouts.",
    deliverables: ["Subsea pipe stress analyses", "Platform steel structures detailing", "Civil concrete footing designs"]
  },
  {
    slug: "pipeline",
    title: "Pipeline",
    parentHeading: "Energy",
    description: "Cross-country pipeline routing, stress compliance checks, compressor station piping, and georeferenced route maps.",
    deliverables: ["Pipeline alignment sheets", "Compressor station piping isometric drawings", "CAESAR II pipeline stress audits"]
  },
  {
    slug: "petrochemical-refinery",
    title: "Petrochemical & Refinery",
    parentHeading: "Energy",
    description: "Detail design of cracking columns, heat exchanger mountings, storage tanks, and utility distribution line loops.",
    deliverables: ["Storage tank fabrication details", "Heat exchanger nozzle stress checks", "Utility pipe rack assemblies"]
  },
  {
    slug: "power",
    title: "Power",
    parentHeading: "Energy",
    description: "Comprehensive structural and fluid design support for industrial thermal, hydro, and wind energy plants.",
    deliverables: ["Boiler structural frames", "Penstock pipe designs", "Turbine casing details"]
  },
  {
    slug: "thermal",
    title: "Thermal",
    parentHeading: "Energy",
    description: "Boiler auxiliary structural framing, turbine room layout plans, condenser piping assemblies, and coal handling duct routings.",
    deliverables: ["Boiler house structural detail drawings", "Steam line piping isometric sheets", "Condenser interface schematics"]
  },
  {
    slug: "hydro",
    title: "Hydro",
    parentHeading: "Energy",
    description: "Penstock structural pressure thickness checks, intake gate mechanical layouts, and turbine frame casting details.",
    deliverables: ["Penstock pressure wall thickness models", "Intake gate mechanical detail sets", "Generator mounting bases design"]
  },
  {
    slug: "wind",
    title: "Wind",
    parentHeading: "Energy",
    description: "Rotor blade geometric designs, nacelle interior layout plans, and tower base anchor structural calculations.",
    deliverables: ["Blade aerodynamic CAD profiles", "Nacelle equipment layout drawings", "Anchor bolt concrete footing audits"]
  },
  {
    slug: "nuclear",
    title: "Nuclear",
    parentHeading: "Energy",
    description: "Auxiliary containment concrete wall detailing, water cooling pipes, and electrical backup generator trays designs.",
    deliverables: ["Containment structure detail drawings", "Cooling loop pipes stress analyses", "Emergency generator cabling maps"]
  },

  // Heavy Engineering Points
  {
    slug: "oil-gas-equipment",
    title: "Oil & Gas Equipment",
    parentHeading: "Heavy Engineering & Machinery",
    description: "Pressure vessels designs, skid modules, manifold castings, and hydraulic fracturing pump manifolds.",
    deliverables: ["Pressure vessel code sheets (ASME Sec VIII)", "Integrated skid structural details", "Manifold casting solid models"]
  },
  {
    slug: "steel-cement-plant",
    title: "Steel, Cement & Power Plant Equipment",
    parentHeading: "Heavy Engineering & Machinery",
    description: "Blast furnace steel casings, rotary kiln components, cement bag silos, and high load hopper systems.",
    deliverables: ["Kiln roller shell casting details", "Silo structural calculations", "Discharge hopper wear plates design"]
  },
  {
    slug: "transportation",
    title: "Transportation",
    parentHeading: "Heavy Engineering & Machinery",
    description: "Heavy-duty truck frames, flatbed trailers structural models, and dumper bed reinforcements calculations.",
    deliverables: ["Chassis frame weldment layouts", "Flatbed trailer fatigue analysis profiles", "Dumper body steel box designs"]
  },
  {
    slug: "mining-exploration",
    title: "Mining & Exploration",
    parentHeading: "Heavy Engineering & Machinery",
    description: "Rotary rock drills structural parts, underground draglines linkages, conveyor trusses, and screening screens.",
    deliverables: ["Drill rig auxiliary arm models", "Dragline link FEM fatigue audits", "Conveyor truss fabrication details"]
  },
  {
    slug: "agricultural-machinery",
    title: "Agricultural Machinery & Equipment",
    parentHeading: "Heavy Engineering & Machinery",
    description: "Tractor assembly mounts, seed drill hopper systems, grain combine cutting blades, and soil tilling linkages.",
    deliverables: ["Tractor front loader frame details", "Combine harvester blade linkages", "Seeder box sheet metal designs"]
  },
  {
    slug: "material-handling",
    title: "Material Handling Equipment",
    parentHeading: "Heavy Engineering & Machinery",
    description: "Gantry crane box girders designs, overhead crane carriages, scissor lift kinematics, and belt conveyor layouts.",
    deliverables: ["Gantry crane structural buckling checks", "Scissor lift hydraulic link kinematics", "Belt conveyor idler frame details"]
  },
  {
    slug: "packaging-machinery",
    title: "Packaging Machinery",
    parentHeading: "Heavy Engineering & Machinery",
    description: "Automated sorting conveyor structures, wrapping machine link arms, and bottle filling indexing plate layouts.",
    deliverables: ["Sorting conveyor structural layouts", "Filling indexing plates designs", "Pneumatic actuator routing charts"]
  },
  {
    slug: "machine-tools",
    title: "Machine Tools",
    parentHeading: "Heavy Engineering & Machinery",
    description: "CNC lathe beds, milling machine column structures, clamping tool holders, and sheet metal bending presses frames.",
    deliverables: ["CNC lathe bed vibration damping casting sheets", "Press brake side plate details", "Clamping tool solid models"]
  },

  // Marine Points
  {
    slug: "naval-architecture",
    title: "Naval architecture",
    parentHeading: "Marine",
    description: "Vessel stability calculations, hydrostatics charts, weight distribution tracking, and resistance calculations.",
    deliverables: ["Vessel hydrostatic curve sheets", "Intact and damage stability reports", "Resistance and powering estimates"]
  },
  {
    slug: "hull-structure",
    title: "Hull Structure",
    parentHeading: "Marine",
    description: "Double bottom hull frame designs, deck plating plans, bulkheads layouts, and structural Finite Element validations.",
    deliverables: ["Double bottom structural models", "Transverse bulkhead detail drawings", "Global hull girder FEM stress checks"]
  },
  {
    slug: "machinery",
    title: "Machinery",
    parentHeading: "Marine",
    description: "Main diesel engine mounting details, propeller shaft bearings, exhaust ducts, and auxiliary generator bases.",
    deliverables: ["Main engine foundation structures", "Propeller shaft layout details", "Exhaust duct expansion joints"]
  },
  {
    slug: "marine-utility-systems",
    title: "Marine & utility systems",
    parentHeading: "Marine",
    description: "Bilge and ballast piping networks, fuel oil treatment lines, fresh water plumbing, and sea chest manifolds.",
    deliverables: ["Bilge and ballast flow diagrams", "Fuel oil line piping details", "Sea chest intake manifold castings"]
  },
  {
    slug: "piping-design-analysis",
    title: "Piping design & analysis",
    parentHeading: "Marine",
    description: "Engine room 3D piping routing, stress checking under ship vibration, and structural pipe supports details.",
    deliverables: ["Engine room 3D pipe models", "Piping thermal stress checking audits", "Flexible support bracket details"]
  },
  {
    slug: "hvac",
    title: "HVAC",
    parentHeading: "Marine",
    description: "Accommodation deck ventilation layouts, refrigeration cooling coils, dampers, and galley extraction exhaust ducts.",
    deliverables: ["Deck HVAC duct routing diagrams", "Refrigeration loop pipe schematics", "Galley smoke exhaust outlines"]
  },
  {
    slug: "outfitting",
    title: "Outfitting",
    parentHeading: "Marine",
    description: "Deck mooring bitts, anchor chain lockers, stairs, hatches, railings, and accommodation panel profiles.",
    deliverables: ["Mooring bitt mounting details", "Chain locker structural outlines", "Deck stairs and safety handrails"]
  },

  // Consumer Points
  {
    slug: "office-automation",
    title: "Office Automation",
    parentHeading: "Consumer",
    description: "Office printer structural housings, cartridge feed mechanisms, scanning roller links, and paper trays design.",
    deliverables: ["Printer top cover injection molded sets", "Roller feed kinematic assemblies", "Paper tray sheet metal models"]
  },
  {
    slug: "electronics-durables",
    title: "Electronics & Durables",
    parentHeading: "Consumer",
    description: "Household durables plastic casings, display screens brackets, and internal cooling fan mounting grids.",
    deliverables: ["Appliance rear casing molds", "Display screen pivot hinges", "Thermal heat dissipation models"]
  },
  {
    slug: "security-gaming",
    title: "Security & Gaming Equipment",
    parentHeading: "Consumer",
    description: "Aesthetic gaming cabinet consoles, access control turnstiles frames, and outdoor security camera enclosures.",
    deliverables: ["Gaming console sheet metal structures", "Turnstile internal linkages", "IP67 camera enclosure detailing"]
  },

  // Medical Devices Points
  {
    slug: "diagnostic-imaging",
    title: "Diagnostic Imaging",
    parentHeading: "Medical Devices",
    description: "Structural design of CT scanner rotating frames, MRI table slide channels, and diagnostic console cases.",
    deliverables: ["CT gantry rotation base frames", "MRI patient bed slide rails", "Diagnostic housing plastic designs"]
  },
  {
    slug: "patient-monitoring",
    title: "Patient Monitoring Systems",
    parentHeading: "Medical Devices",
    description: "Patient monitor bezel housings, rolling stand mounts, and clean medical wire harness layout diagrams.",
    deliverables: ["Monitor console faceplate molds", "Mobile trolley pivot arms", "Medical wire harness charts"]
  },
  {
    slug: "therapeutic-equipment",
    title: "Therapeutic Equipment",
    parentHeading: "Medical Devices",
    description: "Dialysis system fluid pump mountings, ventilator internal valve brackets, and physical therapy table frames.",
    deliverables: ["Dialysis pump base brackets", "Ventilator valve manifold interfaces", "Therapy table steel linkages"]
  },

  // Telecom Points
  {
    slug: "consulting-implementation",
    title: "Consulting and implementation services",
    parentHeading: "Telecom",
    description: "Formulating geographic data strategies, system architecture, database optimization, and cloud GIS implementation roadmaps.",
    deliverables: ["Data migration plans", "System requirement charts", "Cloud GIS deployment pathways"]
  },
  {
    slug: "network-inventory",
    title: "Network inventory management",
    parentHeading: "Telecom",
    description: "Developing GIS based cataloguing models to manage massive telecommunication fiber networks, cell tower maps, and multiplexer equipment hubs.",
    deliverables: ["GIS fiber route databases", "Equipment hub asset charts", "Fiber splice path diagrams"]
  },
  {
    slug: "network-operations",
    title: "Network operations support",
    parentHeading: "Telecom",
    description: "Developing technical guides and field manuals for tower hardware upgrades, base transceiver systems maintenance, and backup battery banks swapping.",
    deliverables: ["Locational field maintenance guides", "BTS mounting instructions", "Battery backup upgrade manuals"]
  },
  {
    slug: "network-operational-systems",
    title: "Network operational support systems",
    parentHeading: "Telecom",
    description: "SCADA systems implementation and dashboard configurations to monitor real-time telecom fiber grid health, antenna tilt sensors, and data transmission packet drops.",
    deliverables: ["Antenna sensor interface diagrams", "Real-time fault tracking panels", "Remote telemetry wiring outlines"]
  }
];
