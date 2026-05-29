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
  problemStatement: string;
  approach: string;
  technologies: string[];
  businessValue: string[];
  seoTitle: string;
  seoDescription: string;
  seoKeywords: string[];
}

export const services: Service[] = [
  {
    slug: 'industrial-automation-control-systems',
    title: 'Industrial Automation & Control Systems',
    tagline: 'Integrated control architecture for safer, faster, and more predictable operations.',
    description: 'We design and deploy end-to-end industrial automation ecosystems across process and discrete plants, from PLC logic and DCS architecture to SCADA visibility and OT/IT integration.',
    iconName: 'Settings',
    bulletPoints: [
      'PLC Programming',
      'DCS Engineering',
      'SCADA Development',
      'HMI Design',
      'Industrial Communication Protocols',
      'Control Panel Engineering',
      'OT/IT Integration',
      'Remote Monitoring Systems'
    ],
    subServices: [
      { title: 'PLC, DCS, and SCADA Engineering', description: 'Control narratives, sequence logic, alarms, historian structures, and plant-wide supervisory visibility.' },
      { title: 'HMI and Dashboard Design', description: 'Operator-focused interfaces, high-performance graphics, role-based screens, and shift insights.' },
      { title: 'Control Panels and Protocol Integration', description: 'Panel design with IEC/ISA standards and protocol integration including Modbus, OPC UA, and Profinet.' },
      { title: 'Remote Operations', description: 'Secure remote telemetry, alerting, and command workflows for multi-site operations.' }
    ],
    problemStatement: 'Plants struggle with fragmented controls, manual interventions, downtime events, and delayed visibility across critical assets.',
    approach: 'We audit control maturity, modernize architecture, and implement standardized control layers with staged commissioning and cybersecurity-by-design.',
    technologies: ['Siemens TIA Portal', 'Rockwell Studio 5000', 'ABB 800xA', 'AVEVA', 'Ignition', 'OPC UA', 'Modbus TCP'],
    businessValue: ['Reduced downtime and incidents', 'Faster root-cause diagnosis', 'Higher operator productivity', 'Improved energy and throughput performance'],
    seoTitle: 'Industrial Automation & Control Systems | GTS',
    seoDescription: 'PLC, DCS, SCADA, HMI, and OT/IT integration solutions for digital industrial operations.',
    seoKeywords: ['industrial automation', 'PLC programming', 'DCS engineering', 'SCADA development', 'OT IT integration']
  },
  {
    slug: 'ai-digital-transformation',
    title: 'AI & Digital Transformation',
    tagline: 'AI-first industrial transformation for engineering speed, reliability, and optimization.',
    description: 'This is our flagship transformation practice combining AI/ML models, digital twins, and industrial analytics to automate decisions and optimize plant performance.',
    iconName: 'Cpu',
    bulletPoints: [
      'AI/ML Solutions for Industry',
      'Predictive Maintenance',
      'Engineering Workflow Automation',
      'Intelligent Document Processing',
      'Digital Twin Solutions',
      'Industrial Data Analytics',
      'AI Dashboards',
      'Smart Plant Optimization',
      'Industrial Copilots',
      'Generative AI for Engineering'
    ],
    subServices: [
      { title: 'Predictive and Prescriptive Intelligence', description: 'Failure forecasting, anomaly detection, and prescriptive actions for rotating and static equipment.' },
      { title: 'Digital Twin and Simulation Intelligence', description: 'Data-linked asset twins for design validation, operations optimization, and scenario planning.' },
      { title: 'AI Copilots and GenAI Workflows', description: 'Engineering copilots for SOP retrieval, drawing interpretation, and workflow automation.' },
      { title: 'Industrial Analytics Platforms', description: 'Unified data models and executive dashboards for multi-plant performance management.' }
    ],
    problemStatement: 'Industrial teams face data silos, reactive maintenance, and slow engineering cycles with limited predictive insight.',
    approach: 'We connect OT and enterprise data, build domain-tuned AI models, and operationalize them via dashboards, copilots, and governed workflows.',
    technologies: ['Python', 'PyTorch', 'Azure AI', 'AWS', 'Databricks', 'Power BI', 'Grafana', 'Vector Databases'],
    businessValue: ['Lower maintenance costs', 'Reduced unplanned shutdowns', 'Faster engineering turnaround', 'Higher production efficiency'],
    seoTitle: 'AI & Digital Transformation for Industry | GTS',
    seoDescription: 'Industrial AI, predictive maintenance, digital twins, copilots, and smart optimization solutions.',
    seoKeywords: ['industrial AI', 'predictive maintenance', 'digital twin', 'industrial copilots', 'generative AI engineering']
  },
  {
    slug: 'iiot-smart-manufacturing',
    title: 'IIoT & Smart Manufacturing',
    tagline: 'Connected plants with real-time analytics from sensors to cloud and edge.',
    description: 'We build IIoT-enabled smart manufacturing environments that connect machines, sensors, and business systems for real-time operational intelligence.',
    iconName: 'Grid',
    bulletPoints: [
      'Industrial IoT Platforms',
      'Sensor Integration',
      'Cloud Monitoring',
      'Real-Time Equipment Analytics',
      'Smart Factory Solutions',
      'Edge Computing',
      'Connected Industrial Systems',
      'Asset Tracking'
    ],
    subServices: [
      { title: 'IIoT Platform Architecture', description: 'Scalable ingestion and device lifecycle design for brownfield and greenfield assets.' },
      { title: 'Sensor and Edge Integration', description: 'Retrofit and native sensor programs with edge gateways and local inference.' },
      { title: 'Real-Time Monitoring Systems', description: 'Streaming KPIs, OEE analytics, alarms, and role-based plant command centers.' },
      { title: 'Connected Factory Workflows', description: 'Machine-to-system workflows linking production, quality, and maintenance teams.' }
    ],
    problemStatement: 'Factories often run disconnected equipment with delayed data, limiting visibility and decision speed.',
    approach: 'We instrument assets, build edge-cloud data pipelines, and roll out real-time monitoring and optimization workflows.',
    technologies: ['MQTT', 'Kafka', 'AWS IoT', 'Azure IoT', 'Timeseries Databases', 'Edge AI Runtime'],
    businessValue: ['Higher OEE', 'Better asset utilization', 'Faster response to process drift', 'Stronger production predictability'],
    seoTitle: 'IIoT & Smart Manufacturing Solutions | GTS',
    seoDescription: 'Industrial IoT platform design, sensor integration, cloud monitoring, and smart factory systems.',
    seoKeywords: ['IIoT', 'smart manufacturing', 'edge computing', 'sensor integration', 'real-time equipment analytics']
  },
  {
    slug: 'digital-engineering-services',
    title: 'Engineering Services',
    tagline: 'Modern digital engineering from concept through intelligent 3D and BIM execution.',
    description: 'Our engineering teams modernize design and plant execution with intelligent 3D workflows, automation-driven modeling, and multi-disciplinary delivery.',
    iconName: 'Code',
    bulletPoints: [
      'Digital Engineering',
      'Intelligent 3D Design',
      'Engineering Design Automation',
      'Plant Engineering Solutions',
      'Multi-disciplinary Engineering Support',
      'BIM & Smart Modeling'
    ],
    subServices: [
      { title: 'Intelligent 3D Design', description: 'Model-driven design for mechanical, piping, structural, and utility systems.' },
      { title: 'Engineering Design Automation', description: 'Rule-based automation to reduce repetitive drafting and improve consistency.' },
      { title: 'Plant Engineering Solutions', description: 'Process and plant engineering with constructability, safety, and lifecycle focus.' },
      { title: 'BIM and Smart Modeling', description: 'Coordinated BIM environments for design, review, and field collaboration.' }
    ],
    problemStatement: 'Traditional engineering workflows are slow, fragmented, and highly manual across teams and software environments.',
    approach: 'We standardize digital engineering workflows, automate repetitive tasks, and enforce model governance across disciplines.',
    technologies: ['AutoCAD', 'AVEVA E3D', 'SolidWorks', 'Navisworks', 'BIM 360', 'MATLAB'],
    businessValue: ['Shorter design cycles', 'Lower rework and clash rates', 'Improved design quality', 'More predictable project delivery'],
    seoTitle: 'Digital Engineering Services | GTS',
    seoDescription: 'Intelligent 3D design, plant engineering, BIM, and design automation for industrial projects.',
    seoKeywords: ['digital engineering', 'intelligent 3D design', 'BIM smart modeling', 'plant engineering']
  },
  {
    slug: 'industrial-software-solutions',
    title: 'Industrial Software Solutions',
    tagline: 'Purpose-built industrial software connecting engineering, operations, and enterprise systems.',
    description: 'We develop and integrate industrial software platforms that unify plant data, execution systems, and reporting for scalable operational intelligence.',
    iconName: 'BarChart',
    bulletPoints: [
      'Custom Industrial Applications',
      'MES Integration',
      'ERP Integration',
      'Industrial Dashboards',
      'Reporting Platforms',
      'Engineering Data Management',
      'Cloud-Based Engineering Systems'
    ],
    subServices: [
      { title: 'Custom Industrial Applications', description: 'Domain-specific applications for operations, maintenance, quality, and engineering.' },
      { title: 'MES/ERP Integration', description: 'Workflow and data integration between shop-floor execution and enterprise platforms.' },
      { title: 'Industrial Dashboards and Reporting', description: 'KPI command centers with role-based analytics and cross-functional reporting.' },
      { title: 'Engineering Data Platforms', description: 'Centralized engineering data governance, metadata, and lifecycle management.' }
    ],
    problemStatement: 'Industrial data and workflows are fragmented across standalone tools, reducing traceability and execution speed.',
    approach: 'We design integration-first software architectures with secure APIs and cloud-ready data foundations.',
    technologies: ['React', 'Next.js', 'Node.js', 'Python', 'PostgreSQL', 'AWS', 'Azure', 'REST APIs'],
    businessValue: ['Unified operations visibility', 'Faster decision-making', 'Reduced manual reporting effort', 'Improved compliance and audit readiness'],
    seoTitle: 'Industrial Software Solutions | GTS',
    seoDescription: 'Custom industrial applications, MES/ERP integration, dashboards, and cloud engineering systems.',
    seoKeywords: ['industrial software', 'MES integration', 'ERP integration', 'industrial dashboards', 'engineering data management']
  }
];
