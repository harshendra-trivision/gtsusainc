import type { MegaMenuCategory } from './megaMenu';

export const technologyContent: MegaMenuCategory[] = [
  {
    slug: 'technology-partnerships-representation',
    label: 'Technology Partnerships & Representation',
    icon: 'Handshake',
    description:
      "GTS partners with leading global technology developers, OEMs, and process licensors to help commercialize innovative industrial technologies. We provide market representation, strategic business development, technical engagement, and commercial support to accelerate technology adoption across North America and international markets.",
    groups: [
      {
        heading: 'Process Technologies',
        items: ['Delayed Coking', 'Gasification', 'Hydrogen Production', 'Carbon Capture', 'LNG Technologies', 'Sulfur Recovery', 'Refining Technologies', 'Petrochemical Technologies']
      },
      {
        heading: 'Proprietary Industrial Technologies',
        items: ['Process Licensors', 'OEM Technologies', 'Industrial Equipment', 'Modular Solutions', 'Packaged Systems', 'Skid Systems']
      },
      {
        heading: 'Market Representation',
        items: [
          'North American Representation',
          'International Business Development',
          'Market Entry Strategy',
          'EPC Engagement',
          'Owner Engagement',
          'Strategic Partnerships',
          'Opportunity Identification',
          'Proposal Development'
        ]
      },
      {
        heading: 'Technology Licensing Support',
        items: ['Technology Evaluation', 'Licensing Strategy', 'Commercial Negotiations', 'Technical Due Diligence', 'Licensing Agreements', 'EPC Coordination']
      },
      {
        heading: 'OEM & Strategic Partnerships',
        items: ['Equipment Manufacturers', 'Technology Providers', 'Digital Technology Companies', 'Industrial Automation Partners', 'Engineering Software Partners']
      },
      {
        heading: 'Commercial Advisory',
        items: ['Business Development', 'Opportunity Screening', 'Go-to-Market Strategy', 'Competitive Positioning', 'Commercial Strategy', 'Client Relationship Management']
      }
    ]
  },
  {
    slug: 'technology-ecosystem',
    label: 'Technologies We Support and Integrate',
    icon: 'Cpu',
    tagline: 'Our Technology Ecosystem',
    groups: [
      {
        heading: 'Engineering Platforms',
        items: ['AVEVA', 'Hexagon', 'Bentley', 'Autodesk', 'Dassault', 'Siemens']
      },
      {
        heading: 'Simulation & Analysis',
        items: ['ANSYS', 'Abaqus', 'STAR-CCM+', 'OpenFOAM', 'Aspen HYSYS', 'Aspen Plus', 'COMSOL Multiphysics', 'ETAP', 'DIgSILENT PowerFactory']
      },
      {
        heading: 'Industrial Automation',
        items: [
          'Siemens (TIA Portal, PCS 7)',
          'Rockwell Automation (FactoryTalk, Studio 5000)',
          'Schneider Electric (EcoStruxure)',
          'Emerson (DeltaV)',
          'Honeywell (Experion PKS)',
          'ABB (800xA)',
          'Yokogawa (CENTUM VP)'
        ]
      },
      {
        heading: 'Cloud & AI',
        items: ['Microsoft Azure', 'Amazon Web Services (AWS)', 'Google Cloud Platform (GCP)', 'NVIDIA AI', 'OpenAI', 'Snowflake', 'Databricks', 'Microsoft Fabric']
      },
      {
        heading: 'Digital Twin Technologies',
        items: [
          'AVEVA PI System / CONNECT',
          'Siemens Xcelerator',
          'Bentley iTwin',
          'Hexagon Digital Twin',
          'Azure Digital Twins',
          'NVIDIA Omniverse',
          'Dassault 3DEXPERIENCE',
          'Autodesk Tandem'
        ]
      },
      {
        heading: 'Cybersecurity for OT',
        items: [
          'Nozomi Networks',
          'Claroty',
          'Dragos',
          'Microsoft Defender for IoT',
          'Palo Alto Networks (Industrial OT)',
          'Fortinet OT Security',
          'Cisco Cyber Vision',
          'Tenable OT'
        ]
      },
      {
        heading: 'Future Technologies',
        items: [
          'NVIDIA Omniverse',
          'Microsoft Copilot',
          'OpenAI',
          'Google Gemini',
          'Anthropic Claude',
          'Boston Dynamics',
          'Figure AI',
          'Unity Industry',
          'Unreal Engine',
          'NVIDIA Isaac Robotics'
        ]
      }
    ]
  }
];
