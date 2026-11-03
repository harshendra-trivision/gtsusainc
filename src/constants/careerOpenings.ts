// Generated from GTS_Engineering_Job_Descriptions_Compensation_Updated.docx (26 proposed job profiles).
// `locations` drives the All / USA / India filter; "USA or India" roles appear under both.

export type JobLocation = 'USA' | 'India';

export interface CareerOpening {
  ref: string;
  title: string;
  department: string;
  /** Primary delivery center as written in the job description. */
  deliveryCenter: string;
  locations: JobLocation[];
  experience: string;
  employmentType: string;
  workModel: string;
  overview: string;
  responsibilities: string[];
  required: string[];
  preferred: string[];
}

export const careerOpenings: CareerOpening[] = [
  {
    ref: "01",
    title: "Mechanical Design Engineer",
    department: "Product Engineering",
    deliveryCenter: "India Engineering Delivery Center",
    locations: ["India"],
    experience: "3–7 years",
    employmentType: "Full-time (subject to approval)",
    workModel: "India Engineering Delivery Center | India-based detailed mechanical design and CAD execution; coordination with USA technical leads. Onsite or hybrid per approved assignment.",
    overview: "Develop detailed mechanical product designs and production-ready engineering deliverables.",
    responsibilities: ["3D part and assembly modeling", "Detailed drawings, GD&T and tolerance studies", "BOM preparation and engineering change documentation", "Design reviews with manufacturing and quality teams"],
    required: ["Mechanical engineering degree or equivalent relevant experience", "Proficiency in NX, Creo, CATIA, SolidWorks or comparable CAD", "Knowledge of manufacturing processes and engineering drawings"],
    preferred: ["DFM/DFA", "PLM/PDM", "Industrial machinery or transportation projects"]
  },
  {
    ref: "02",
    title: "Senior Mechanical Design Engineer",
    department: "Product Engineering",
    deliveryCenter: "USA or India, based on approved assignment",
    locations: ["USA", "India"],
    experience: "7–12 years",
    employmentType: "Full-time (subject to approval)",
    workModel: "USA Engineering Delivery Center for core design leadership and client reviews; India Delivery Center or dedicated CoE for senior detailed-design execution. Onsite/hybrid as approved for the specific assignment.",
    overview: "Lead technically complex mechanical design packages and mentor engineering teams.",
    responsibilities: ["Own design concepts, calculations and technical deliverables", "Lead design reviews and resolve cross-disciplinary issues", "Review CAD models, drawings, tolerances and design changes", "Mentor designers and coordinate client technical feedback"],
    required: ["Mechanical engineering degree or equivalent experience", "Advanced 3D CAD and GD&T expertise", "Demonstrated design ownership and engineering judgment"],
    preferred: ["FEA", "Supplier engagement", "PLM", "Client-facing project experience"]
  },
  {
    ref: "03",
    title: "CAD Design Engineer – NX / Creo / CATIA / SolidWorks",
    department: "Product Engineering",
    deliveryCenter: "India Engineering Delivery Center",
    locations: ["India"],
    experience: "2–6 years",
    employmentType: "Full-time (subject to approval)",
    workModel: "India Engineering Delivery Center | India-based CAD modeling, detailing and drawing production; interfaces with USA core engineering team. Onsite/hybrid as approved.",
    overview: "Produce accurate CAD models and drawings from engineering specifications and markups.",
    responsibilities: ["Create and revise parametric parts and assemblies", "Prepare 2D drawings and BOMs", "Apply drawing standards and revision controls", "Resolve model interferences and document corrections"],
    required: ["Relevant engineering or technical qualification", "Working proficiency in at least one specified CAD platform", "Ability to interpret technical drawings"],
    preferred: ["CAD automation", "Sheet metal", "Weldments", "PLM workflows"]
  },
  {
    ref: "04",
    title: "CAE / FEA Engineer",
    department: "Product Engineering",
    deliveryCenter: "India Delivery Center or Client CoE",
    locations: ["India"],
    experience: "3–8 years",
    employmentType: "Full-time (subject to approval)",
    workModel: "India Engineering Delivery Center or dedicated India Client CoE | Simulation, analysis and verification support; USA leads retain client-facing design authority where applicable. Onsite/hybrid as approved.",
    overview: "Conduct simulation and engineering analysis to support design verification and optimization.",
    responsibilities: ["Develop finite-element models and boundary conditions", "Run structural, thermal or vibration studies as applicable", "Validate assumptions and interpret results", "Prepare analysis reports and design recommendations"],
    required: ["Mechanical or related engineering degree", "Experience with ANSYS, Abaqus, Nastran or equivalent", "Understanding of mechanics, materials and mesh quality"],
    preferred: ["Test correlation", "Fatigue", "Nonlinear analysis", "Scripting"]
  },
  {
    ref: "05",
    title: "Product Development Lead Engineer",
    department: "Product Engineering",
    deliveryCenter: "USA Engineering Delivery Center",
    locations: ["USA"],
    experience: "8–15 years",
    employmentType: "Full-time (subject to approval)",
    workModel: "USA Engineering Delivery Center | USA-based core product engineering, technical decision-making and client coordination; works with India design teams. Onsite/hybrid or client-site as approved.",
    overview: "Direct core product engineering activities from requirements through design validation.",
    responsibilities: ["Translate client needs into engineering requirements", "Lead concept selection and critical design decisions", "Coordinate design verification, risk and change reviews", "Oversee distributed engineering deliverables and client milestones"],
    required: ["Engineering degree or equivalent experience", "Proven product development leadership", "Strong technical review and client communication skills"],
    preferred: ["Systems engineering", "Regulated products", "DFM", "Program delivery"]
  },
  {
    ref: "06",
    title: "Process Design Engineer",
    department: "Plant & Process Engineering",
    deliveryCenter: "USA Engineering Delivery Center",
    locations: ["USA"],
    experience: "4–10 years",
    employmentType: "Full-time (subject to approval)",
    workModel: "USA Engineering Delivery Center | USA-based core process design, technical reviews and client interface; detailed deliverables may be supported from India. Onsite/hybrid or client-site as approved.",
    overview: "Develop and review process engineering solutions for industrial facilities and systems.",
    responsibilities: ["Prepare or review process calculations and equipment sizing", "Develop and validate PFDs, P&IDs and design bases", "Coordinate process safety and interdisciplinary reviews", "Support technical specifications and client discussions"],
    required: ["Chemical/process engineering degree or equivalent", "Process design and PFD/P&ID experience", "Familiarity with applicable industry codes and safety practices"],
    preferred: ["Aspen HYSYS", "Aspen Plus", "Relief systems", "HAZOP participation"]
  },
  {
    ref: "07",
    title: "Piping Design Engineer",
    department: "Plant & Process Engineering",
    deliveryCenter: "India Engineering Delivery Center",
    locations: ["India"],
    experience: "3–8 years",
    employmentType: "Full-time (subject to approval)",
    workModel: "India Engineering Delivery Center | India-based piping layout, modeling and drawing production; coordination with USA process/project leads. Onsite/hybrid as approved.",
    overview: "Produce coordinated piping layouts and detailed plant engineering deliverables.",
    responsibilities: ["Create piping models, layouts and isometrics", "Review P&IDs and equipment arrangements", "Prepare material take-offs and support clash resolution", "Coordinate interfaces with civil, mechanical and instrumentation teams"],
    required: ["Mechanical/piping qualification or equivalent experience", "Plant 3D, E3D, SP3D or equivalent", "Knowledge of piping components and relevant standards"],
    preferred: ["ASME B31 series familiarity", "Brownfield projects", "Laser scans"]
  },
  {
    ref: "08",
    title: "Piping Stress Analysis Engineer",
    department: "Plant & Process Engineering",
    deliveryCenter: "India Delivery Center or Client CoE",
    locations: ["India"],
    experience: "4–10 years",
    employmentType: "Full-time (subject to approval)",
    workModel: "India Engineering Delivery Center or dedicated India Client CoE | Detailed piping stress analysis and technical deliverables under project engineering governance. Onsite/hybrid as approved.",
    overview: "Assess piping flexibility, loads and stress compliance for industrial systems.",
    responsibilities: ["Build and review pipe stress models", "Evaluate sustained, thermal and occasional loads", "Review support and restraint requirements", "Prepare calculation reports and coordinate design changes"],
    required: ["Mechanical engineering degree or equivalent", "CAESAR II or comparable piping analysis experience", "Knowledge of applicable piping codes and load cases"],
    preferred: ["Dynamic analysis", "Equipment nozzle loads", "Support design"]
  },
  {
    ref: "09",
    title: "Plant 3D / E3D Designer",
    department: "Plant & Process Engineering",
    deliveryCenter: "India Engineering Delivery Center",
    locations: ["India"],
    experience: "3–8 years",
    employmentType: "Full-time (subject to approval)",
    workModel: "India Engineering Delivery Center | India-based plant 3D modeling, isometrics and drawing deliverables; remote collaboration with USA engineering team. Onsite/hybrid as approved.",
    overview: "Develop coordinated 3D plant models and production drawings.",
    responsibilities: ["Model piping, equipment and supporting structures", "Generate isometrics, orthographic drawings and reports", "Maintain model quality and resolve clashes", "Implement approved revisions and project modeling standards"],
    required: ["Engineering design qualification or equivalent", "AutoCAD Plant 3D, AVEVA E3D or comparable platform", "Ability to interpret P&IDs and layouts"],
    preferred: ["Point-cloud workflows", "Model administration", "Multidisciplinary coordination"]
  },
  {
    ref: "10",
    title: "Electrical & Instrumentation Design Engineer",
    department: "Plant & Process Engineering",
    deliveryCenter: "India Engineering Delivery Center",
    locations: ["India"],
    experience: "3–8 years",
    employmentType: "Full-time (subject to approval)",
    workModel: "India Engineering Delivery Center | India-based electrical/instrumentation detailed design and engineering documentation; collaboration with USA leads. Onsite/hybrid as approved.",
    overview: "Deliver electrical and instrumentation design packages for industrial projects.",
    responsibilities: ["Prepare cable schedules, wiring and loop diagrams", "Develop instrument lists and installation details", "Support equipment specifications and drawing checks", "Coordinate design interfaces and revisions"],
    required: ["Electrical/instrumentation engineering degree or equivalent", "Industrial E&I design experience", "Knowledge of applicable electrical and instrumentation standards"],
    preferred: ["AutoCAD Electrical", "Smart Instrumentation", "PLC/DCS interfaces"]
  },
  {
    ref: "11",
    title: "PLM Functional Consultant – Teamcenter / Windchill",
    department: "PLM & Software Engineering",
    deliveryCenter: "USA or India, based on client engagement",
    locations: ["USA", "India"],
    experience: "5–10 years",
    employmentType: "Full-time (subject to approval)",
    workModel: "USA Engineering Delivery Center for client-facing PLM strategy, solution architecture and workshops; India Delivery Center or dedicated CoE for configuration, rollout and support. Work model tied to approved role.",
    overview: "Translate engineering business processes into PLM configuration and implementation requirements.",
    responsibilities: ["Conduct requirements workshops and map workflows", "Configure or specify BOM, document and change processes", "Support testing, migration and user acceptance", "Coordinate stakeholders and produce functional documentation"],
    required: ["Engineering/IT qualification or equivalent experience", "Teamcenter, Windchill or comparable PLM implementation experience", "Knowledge of engineering change and product data processes"],
    preferred: ["CAD–PLM integration", "Manufacturing BOM", "Training", "Solution architecture"]
  },
  {
    ref: "12",
    title: "PLM Developer / Integration Engineer",
    department: "PLM & Software Engineering",
    deliveryCenter: "India Engineering Delivery Center",
    locations: ["India"],
    experience: "3–8 years",
    employmentType: "Full-time (subject to approval)",
    workModel: "India Engineering Delivery Center | India-based PLM development, integrations, testing and technical support; collaborates with USA solution leads. Onsite/hybrid as approved.",
    overview: "Develop, customize and integrate enterprise PLM solutions.",
    responsibilities: ["Implement approved PLM configurations and extensions", "Build interfaces, APIs and data transformations", "Troubleshoot defects and support releases", "Document code, tests and integration dependencies"],
    required: ["Software/engineering qualification or equivalent", "Experience with relevant PLM SDKs, APIs and development tools", "Database and integration fundamentals"],
    preferred: ["Teamcenter ITK/SOA", "Windchill customization", "Cloud integrations"]
  },
  {
    ref: "13",
    title: "CAD Automation / Software Engineer",
    department: "PLM & Software Engineering",
    deliveryCenter: "India Delivery Center or Client CoE",
    locations: ["India"],
    experience: "3–8 years",
    employmentType: "Full-time (subject to approval)",
    workModel: "India Engineering Delivery Center or dedicated India Client CoE | CAD automation, software engineering and specialized client integrations. Onsite/hybrid as approved.",
    overview: "Automate engineering design workflows and improve CAD productivity.",
    responsibilities: ["Develop scripts, plugins and CAD APIs", "Automate repetitive modeling and drawing tasks", "Build validation utilities and integrate engineering data", "Test, document and maintain automation solutions"],
    required: ["Software or engineering qualification or equivalent", "Python, C#, C++ or comparable programming", "Experience with CAD APIs or engineering automation"],
    preferred: ["NX Open", "Creo Toolkit", "SolidWorks API", "PLM connectivity"]
  },
  {
    ref: "14",
    title: "Engineering Project Manager",
    department: "Project Engineering & Controls",
    deliveryCenter: "USA Engineering Delivery Center",
    locations: ["USA"],
    experience: "8–15 years",
    employmentType: "Full-time (subject to approval)",
    workModel: "USA Engineering Delivery Center | USA-based client-facing project leadership, core technical governance and delivery oversight; coordinates with India execution teams. Onsite/hybrid or client-site as approved.",
    overview: "Manage engineering delivery, technical interfaces and project performance for client engagements.",
    responsibilities: ["Define scope, deliverables, schedules and risk controls", "Lead client meetings and cross-functional coordination", "Review progress, quality and change requests", "Oversee USA–India engineering work allocation and escalation"],
    required: ["Engineering degree or equivalent experience", "Demonstrated engineering project leadership", "Strong commercial awareness, reporting and communication"],
    preferred: ["PMP", "EPC/industrial projects", "Primavera P6 or MS Project"]
  },
  {
    ref: "15",
    title: "Project Controls / Planning Engineer",
    department: "Project Engineering & Controls",
    deliveryCenter: "USA or India, based on project",
    locations: ["USA", "India"],
    experience: "4–10 years",
    employmentType: "Full-time (subject to approval)",
    workModel: "USA Engineering Delivery Center for client-facing planning and project controls leadership; India Delivery Center for schedule updates, reporting and analytics support. Assignment-specific onsite/hybrid model.",
    overview: "Support integrated project schedules, progress measurement and performance reporting.",
    responsibilities: ["Build and maintain schedules and milestones", "Track progress, resources and forecast variances", "Prepare dashboards and look-ahead reports", "Support change impact and risk assessments"],
    required: ["Engineering/project controls qualification or equivalent", "Primavera P6, MS Project or comparable scheduling experience", "Strong Excel and reporting skills"],
    preferred: ["Earned value management", "Power BI", "EPC projects"]
  },
  {
    ref: "16",
    title: "Project Engineer / Coordinator",
    department: "Project Engineering & Controls",
    deliveryCenter: "India Engineering Delivery Center",
    locations: ["India"],
    experience: "3–8 years",
    employmentType: "Full-time (subject to approval)",
    workModel: "India Engineering Delivery Center | India-based engineering coordination, deliverable tracking and project reporting; supports USA project leadership. Onsite/hybrid as approved.",
    overview: "Coordinate engineering deliverables, technical actions and multidisciplinary project interfaces.",
    responsibilities: ["Maintain deliverable registers and action logs", "Coordinate drawing and document reviews", "Track milestones, changes and technical queries", "Prepare status reports and facilitate team communication"],
    required: ["Engineering degree or equivalent experience", "Experience with project documentation and coordination", "Organizational and communication skills"],
    preferred: ["EDMS", "Scheduling tools", "Multidisciplinary engineering"]
  },
  {
    ref: "17",
    title: "Technical Writer / Technical Author",
    department: "Document Engineering",
    deliveryCenter: "India Engineering Delivery Center",
    locations: ["India"],
    experience: "3–8 years",
    employmentType: "Full-time (subject to approval)",
    workModel: "India Engineering Delivery Center | India-based technical authoring, manuals and engineering content production; coordinates with USA/client subject-matter experts. Onsite/hybrid as approved.",
    overview: "Create clear and accurate technical content for equipment, systems and industrial operations.",
    responsibilities: ["Author operating, service and maintenance manuals", "Interview SMEs and validate technical information", "Structure content using approved templates and terminology", "Manage review cycles, revisions and publication readiness"],
    required: ["Technical communication/engineering qualification or equivalent", "Experience authoring technical manuals", "Excellent written English and document control discipline"],
    preferred: ["DITA/XML", "S1000D where applicable", "Adobe FrameMaker", "MadCap Flare"]
  },
  {
    ref: "18",
    title: "Technical Illustrator – 2D / 3D",
    department: "Document Engineering",
    deliveryCenter: "India Engineering Delivery Center",
    locations: ["India"],
    experience: "2–7 years",
    employmentType: "Full-time (subject to approval)",
    workModel: "India Engineering Delivery Center | India-based 2D/3D technical illustrations, animations and visualization production; client review coordinated through project leads. Onsite/hybrid as approved.",
    overview: "Create engineering illustrations and visual instructions from technical source data.",
    responsibilities: ["Develop exploded views, assembly graphics and schematics", "Convert CAD data into publication-ready illustrations", "Support interactive manuals and 2D/3D animations", "Maintain visual consistency and technical accuracy"],
    required: ["Design/engineering qualification or equivalent", "Technical illustration and CAD interpretation experience", "Adobe Illustrator or comparable graphics tools"],
    preferred: ["Creo Illustrate", "IsoDraw", "Blender", "Animation workflows"]
  },
  {
    ref: "19",
    title: "Engineering Documentation Specialist",
    department: "Document Engineering",
    deliveryCenter: "India Engineering Delivery Center",
    locations: ["India"],
    experience: "2–6 years",
    employmentType: "Full-time (subject to approval)",
    workModel: "India Engineering Delivery Center | India-based document control, digitization and technical documentation production; supports USA and client teams. Onsite/hybrid as approved.",
    overview: "Control, digitize and deliver engineering documents with accurate revision and metadata practices.",
    responsibilities: ["Maintain document registers and transmittals", "Check completeness, formatting and revision status", "Support digitization, metadata tagging and migration", "Coordinate approvals and document issue packages"],
    required: ["Technical/engineering qualification or equivalent", "Experience with EDMS and document control", "Attention to detail and spreadsheet proficiency"],
    preferred: ["SharePoint", "Aconex", "OpenText", "Engineering data migration"]
  },
  {
    ref: "20",
    title: "GIS Engineer / Analyst",
    department: "Geoinformatics Engineering",
    deliveryCenter: "India Engineering Delivery Center",
    locations: ["India"],
    experience: "2–7 years",
    employmentType: "Full-time (subject to approval)",
    workModel: "India Engineering Delivery Center | India-based GIS analysis, mapping and geospatial deliverables; interfaces with USA/client technical leads as needed. Onsite/hybrid as approved.",
    overview: "Develop and maintain geospatial datasets, analyses and mapping deliverables.",
    responsibilities: ["Edit, validate and analyze spatial datasets", "Create maps, layers and geodatabases", "Perform spatial queries and quality checks", "Document workflows and support client deliverables"],
    required: ["Geoinformatics/geography/engineering qualification or equivalent", "ArcGIS or QGIS experience", "Coordinate systems and geospatial data fundamentals"],
    preferred: ["Python/ArcPy", "PostGIS", "Remote sensing", "Web GIS"]
  },
  {
    ref: "21",
    title: "Geospatial Data Specialist",
    department: "Geoinformatics Engineering",
    deliveryCenter: "India Engineering Delivery Center",
    locations: ["India"],
    experience: "2–6 years",
    employmentType: "Full-time (subject to approval)",
    workModel: "India Engineering Delivery Center | India-based geospatial data processing, QA and dataset maintenance; coordinates with USA/client stakeholders. Onsite/hybrid as approved.",
    overview: "Prepare, validate and maintain geospatial information for engineering and infrastructure applications.",
    responsibilities: ["Clean and standardize spatial attributes", "Georeference and digitize source data", "Conduct topology and data quality checks", "Maintain metadata and delivery logs"],
    required: ["Relevant geospatial/technical qualification", "GIS data editing and QA experience", "Careful documentation and data management"],
    preferred: ["ETL tools", "FME", "SQL", "Utility mapping"]
  },
  {
    ref: "22",
    title: "Dedicated Engineering Team Lead",
    department: "Dedicated Client Centers / CoEs",
    deliveryCenter: "India Client Engineering Center / CoE",
    locations: ["India"],
    experience: "7–12 years",
    employmentType: "Full-time (subject to approval)",
    workModel: "Dedicated India Client Engineering Center / CoE | India-based leadership of a ring-fenced client-aligned engineering team, with regular coordination with USA/client leads. Onsite or hybrid per client agreement.",
    overview: "Lead a dedicated client-aligned engineering team and maintain technical delivery quality.",
    responsibilities: ["Plan team assignments and review outputs", "Apply client standards, workflows and confidentiality controls", "Manage technical escalations and knowledge transfer", "Report performance and support continuous improvement"],
    required: ["Engineering degree or equivalent experience", "Technical leadership in relevant discipline", "Strong coordination and client communication"],
    preferred: ["Dedicated offshore center experience", "PLM", "Metrics and process improvement"]
  },
  {
    ref: "23",
    title: "Engineering Delivery Manager",
    department: "Dedicated Client Centers / CoEs",
    deliveryCenter: "India Client Engineering Center / CoE",
    locations: ["India"],
    experience: "10–18 years",
    employmentType: "Full-time (subject to approval)",
    workModel: "Dedicated India Client Engineering Center / CoE | India-based center operations, resource management, engineering delivery and client governance. Onsite/hybrid and travel per client agreement.",
    overview: "Oversee delivery performance, staffing and operational governance for client engineering programs.",
    responsibilities: ["Manage capacity, schedules, service levels and delivery risks", "Lead engineering managers and cross-functional teams", "Coordinate with USA client-facing leadership", "Drive quality, productivity and capability development"],
    required: ["Engineering/technology qualification or equivalent", "Experience managing multi-project engineering delivery", "People leadership and operational reporting skills"],
    preferred: ["CoE setup", "Commercial governance", "Resource planning", "ISO quality systems"]
  },
  {
    ref: "24",
    title: "Client-Specific Engineering Specialist",
    department: "Dedicated Client Centers / CoEs",
    deliveryCenter: "India Client Engineering Center / CoE",
    locations: ["India"],
    experience: "Defined by client program",
    employmentType: "Full-time (subject to approval)",
    workModel: "Dedicated India Client Engineering Center / CoE | India-based specialized engineering work using client-approved tools, processes and standards. Onsite/hybrid per client agreement.",
    overview: "Provide specialized technical capabilities aligned with a designated client’s tools and engineering standards.",
    responsibilities: ["Execute discipline-specific engineering assignments", "Follow client design standards and approval workflows", "Resolve technical queries with designated leads", "Maintain traceability and continuous skills development"],
    required: ["Relevant discipline expertise as specified in the approved requisition", "Demonstrated proficiency in client-required tools", "Ability to follow confidentiality and quality procedures"],
    preferred: ["Domain certifications", "Client platforms and industry standards"]
  },
  {
    ref: "25",
    title: "Graduate Engineer Trainee",
    department: "Early Careers",
    deliveryCenter: "India Engineering Delivery Center",
    locations: ["India"],
    experience: "0–2 years",
    employmentType: "Full-time (subject to approval)",
    workModel: "India Engineering Delivery Center | India-based structured training and supervised detailed-engineering assignments; onsite or hybrid per trainee program.",
    overview: "Develop foundational engineering skills while supporting supervised engineering assignments.",
    responsibilities: ["Complete technical and process training", "Assist with CAD, documentation or data preparation", "Apply feedback and quality checklists", "Maintain accurate task records and meet agreed deadlines"],
    required: ["Recent engineering degree or diploma appropriate to the assignment", "Fundamental engineering knowledge", "Willingness to learn software and standards"],
    preferred: ["Academic CAD projects", "Internships", "Basic scripting"]
  },
  {
    ref: "26",
    title: "Engineering Intern",
    department: "Early Careers",
    deliveryCenter: "USA or India, subject to approved program",
    locations: ["USA", "India"],
    experience: "Currently enrolled student or recent graduate",
    employmentType: "Full-time (subject to approval)",
    workModel: "USA Engineering Delivery Center for approved core-engineering internships, or India Engineering Delivery Center / client CoE for approved engineering-production internships. Location and onsite/hybrid requirements depend on the internship program.",
    overview: "Gain supervised exposure to engineering projects, tools and professional workflows.",
    responsibilities: ["Support scoped design, research or documentation tasks", "Attend reviews and prepare progress updates", "Follow safety, confidentiality and quality requirements", "Present findings and learn from assigned mentors"],
    required: ["Enrollment in relevant degree program or appropriate graduate status", "Basic technical and communication skills", "Eligibility for the specific internship location"],
    preferred: ["CAD", "GIS", "Coding", "Technical writing or project coursework"]
  }
];

// Identical in every job description, so shown once below the list rather than in each card.
export const workingRelationships =
  'Collaborate with GTS engineering leads, project teams, quality personnel and relevant client stakeholders. Cross-border collaboration and dedicated client-center assignments depend on the approved role.';

export const howToApply =
  'Apply through the GTS Engineering Careers portal with an updated resume and a brief summary of relevant projects, software proficiency and experience. Include the job reference number when available.';

export const fairHiringNote =
  'GTS Engineering supports fair, job-related hiring practices consistent with applicable laws. Hiring decisions and employment terms are subject to the approved requisition and local requirements.';
