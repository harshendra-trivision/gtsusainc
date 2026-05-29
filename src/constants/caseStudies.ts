export interface CaseStudy {
  id: string;
  title: string;
  clientIndustry: string;
  challenge: string;
  solution: string;
  technologies: string[];
  engineeringScope: string;
  results: string[];
  pdfUrl: string;
  imageUrl: string;
}

export const caseStudies: CaseStudy[] = [
  {
    id: 'smart-refinery-ops',
    title: 'Smart Refinery Operations Modernization',
    clientIndustry: 'Oil & Gas',
    challenge: 'The client faced recurring unplanned shutdowns, delayed incident diagnostics, and fragmented process visibility across units.',
    solution: 'GTS implemented an integrated AI + automation stack with predictive alerts, process dashboards, and remote operational visibility.',
    technologies: ['SCADA', 'Historian', 'Python ML Models', 'Power BI'],
    engineeringScope: 'Control systems modernization, data integration, and operations analytics deployment.',
    results: ['18% reduction in unplanned downtime', '22% faster incident response', '9% reduction in maintenance costs'],
    pdfUrl: '#',
    imageUrl: '/image/IMAGE.png'
  },
  {
    id: 'digital-plant-operations',
    title: 'Digital Plant Operations for Multi-Site Manufacturing',
    clientIndustry: 'Manufacturing',
    challenge: 'Production teams lacked live performance visibility and spent significant time in manual reporting cycles.',
    solution: 'GTS deployed IIoT ingestion, centralized KPI dashboards, and workflow automations for operations and maintenance teams.',
    technologies: ['IIoT Platform', 'Kafka', 'Grafana', 'Cloud Data Lake'],
    engineeringScope: 'Sensor integration, cloud monitoring architecture, and real-time operations dashboards.',
    results: ['11% OEE improvement', '35% reduction in manual reporting effort', '14% improvement in production planning accuracy'],
    pdfUrl: '#',
    imageUrl: '/image/IMAGE.png'
  },
  {
    id: 'predictive-maintenance-energy',
    title: 'Predictive Maintenance Platform for Rotating Assets',
    clientIndustry: 'Power & Utilities',
    challenge: 'Asset failures caused expensive outages and preventive maintenance schedules were not risk-prioritized.',
    solution: 'We delivered a predictive maintenance platform with anomaly detection models and risk scoring for critical equipment.',
    technologies: ['Azure AI', 'Timeseries Analytics', 'Edge Gateway', 'Alerting Engine'],
    engineeringScope: 'Asset health modeling, edge-cloud integration, and maintenance intelligence workflows.',
    results: ['27% reduction in failure incidents', '19% lower maintenance spend', 'Improved reliability compliance across critical assets'],
    pdfUrl: '#',
    imageUrl: '/image/IMAGE.png'
  }
];

export const allCaseStudies = caseStudies;
export default caseStudies;
