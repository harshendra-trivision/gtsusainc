export interface CaseStudy {
  id: string;
  title: string;
  clientIndustry: string;
  challenge: string;
  solution: string;
  results: string[];
  pdfUrl: string;
  imageUrl: string;
}

export const caseStudies: CaseStudy[] = [
  {
    id: "connecting-rod-value-engineering",
    title: "Connecting Rod Value Engineering – Weight reduction using FEA",
    clientIndustry: "Heavy Engineering & Machinery",
    challenge: "A heavy machinery manufacturer needed to reduce the weight of an engine connecting rod to improve fuel efficiency and mechanical performance without compromising structural load capacity, fatigue life, or buckling safety factor.",
    solution: "GTS engineers developed a parameterized 3D model and performed iterative Finite Element Analysis (FEA). We optimized the web thickness and rib geometry under extreme tensile and compressive loads (representing peak gas ignition pressure).",
    results: [
      "Successfully reduced the total component weight by 14% while retaining structural integrity.",
      "Maintained a safety factor of 1.8 against fatigue failure and buckling load limits.",
      "Optimized production tooling compatibility, leading to a 7% reduction in material costs."
    ],
    pdfUrl: "/documents/Compressor Housing.pdf",
    imageUrl: "/image/IMAGE.png"
  },
  {
    id: "pump-lower-bearing-integration",
    title: "Integration of Pump & Lower Bearing Support Systems",
    clientIndustry: "Marine & Energy",
    challenge: "Integrating high-speed pump assemblies with lower oil bearing shells typically causes alignment errors, bearing thermal expansion, and dangerous high-frequency vibration during continuous deep-sea operations.",
    solution: "We re-engineered the fluid dynamic bearing casing using integrated structural bracing, modeled temperature fields in multi-physics software, and developed a customized self-aligning bearing support matrix.",
    results: [
      "Reduced system assembly complexity and aligned structural components by 25%.",
      "Lowered operational bearing vibration levels by 18dB, complying with strict offshore standards.",
      "Doubled expected service intervals between major component overhauls."
    ],
    pdfUrl: "#",
    imageUrl: "/image/IMAGE.png"
  },
  {
    id: "reciprocating-compressor-conversion",
    title: "2D to 3D Conversion of Reciprocating Compressor Assembly",
    clientIndustry: "Energy - Oil & Gas",
    challenge: "Converting massive archives of legacy 2D drawings into highly accurate 3D solid models with correct parametric references, tolerances, Bill of Materials (BOM), and interferences checks.",
    solution: "GTS used a dedicated engineering conversion framework. We built clean 3D solid models of all 450+ unique compressor components in CAD, verified complex clearances, and linked them directly to dynamic ERP bill of materials tables.",
    results: [
      "Converted 100% of legacy paper records to parametric CAD models with zero errors.",
      "Discovered and resolved 12 structural interference issues prior to manufacture.",
      "Accelerated downstream design customization cycles by 40%."
    ],
    pdfUrl: "#",
    imageUrl: "/image/IMAGE.png"
  }
];
export const allCaseStudies = caseStudies;
export default caseStudies;
