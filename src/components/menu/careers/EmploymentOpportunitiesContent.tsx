'use client';

import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

type JobItem = {
  title: string;
  details: string[];
};

const openings: JobItem[] = [
  {
    title: 'Process Engineers: Plant and Process Engineering (Ref. no. 1301)',
    details: [
      'Job Description : PFD and P&ID development. Process equipment and Instrument sizing and associate data sheet preparation. Relief system contingency (Pressure safety valves) analysis and system depressuring analysis, Flare header sizing and selection calculations. Proficient in the usage of process engineering simulation software such as ASPEN, HYSYS. Development of process engineering spreadsheet applications for hydraulics, and vessel, depressuring valve and PSV sizing for project use. Knowledge on ASME B 31.3, Section I and Section VIII Relief Valves, API and TEMA. Line sizing and pressure drop calculations in accordance with API 520 standards.',
      'Key Skills : 1-4 years of experience',
      'Qualification : Graduation in Chemical Engineering'
    ]
  },
  {
    title: 'Mechanical Engineer: Product Engineering (Ref. no. 1302)',
    details: [
      'Job Description : Good hands on experience of 2-7 years in Designing and Detailing of Product/ Machine/ Equipment using one or more of the 3D or 2D CAD Software like SolidWorks, Inventor, AutoCAD etc. Good understanding of Engineering drawings and International Codes/ Standards/ Practices is important for the role.',
      'Key Skills : 5-10 years of experience in Design, Industrial, Mechanical, Oil & Gas, Plant',
      'Desirable : US visa and communication and coordination skills are desirable',
      'Qualification : Diploma/B.E. in Mechanical'
    ]
  },
  {
    title: 'Piping Material Engineer: Plant Engineering (Ref. no. 1303)',
    details: [
      'Job Description : Senior Piping Material Engineer will support the Lead Piping Engineers, Check and review ITB documents, Make clarification/deviation lists of ITB documents, Prepare piping material specifications, Prepare piping material requisitions, Prepare piping material technical evaluation reports, Check and review vendor documents for piping materials, Instruct and coordinate subordinates, such as junior piping material engineers, Coordinate and/or negotiate with clients, vendors and other discipline engineers.',
      'Key Skills : Minimum 5 years of piping material engineering experience, Experience with material control systems, Experience with FEED/Basic projects as well as detailed design project (EPC) execution. Knowledge of ASME B31.3 and other technical standard such as ASME, API, MSS, NACE, BS',
      'Qualification : Diploma/B.E. in Mechanical/Civil'
    ]
  },
  {
    title: 'Sr. Pipe Stress Engineer: Plant Engineering (Ref. no. 1304)',
    details: [
      'Job Description : Analyze piping stresses for critical lines using CAESAR II etc, to realize stable piping systems, Instruct and/or review piping loading data to other disciplines, Prepare specifications for piping mechanical supports, spring & snubber, Prepare supports package including special supports design, Prepare piping stress analysis reports, Check and review vendor documents for piping mechanical supports, Instruct and coordinate subordinates, such as junior piping stress analysis engineers, Coordinate with clients, vendors and other discipline engineers.',
      'Key Skills : More than 5 years of experience as Piping Stress Analysis Engineer for oil refinery projects and gas processing projects.',
      'Qualification : Diploma/B.E. in Mechanical/Civil'
    ]
  },
  {
    title: 'Pipe Stress Engineer: Plant Engineering (Ref. no. 1305)',
    details: [
      'Job Description : Preparation of proposals for ITB, Tendering, Estimation, Procurement, Vendor Selection, Plant and Piping Layout, Basic Piping Design, Detailed Fabrication Piping Design, Detailed Pipe Support Design, Piping Material Specification, Piping Material Selection, Bill of Materials, Isometrics, Support Sketch Drawings, General Arrangement Drawings for Plant Layout and Piping, Stress Analysis of Critical and non-critical Piping and Quality Checks',
      'Key Skills : Exposure to the state of the art piping design software like PDS, Auto Pipe Plus, Caesar II etc. Candidates must be conversant with Indian and American Standards, 3D design Concept.',
      'Qualification : Diploma/B.E. in Mechanical/Civil'
    ]
  },
  {
    title: 'Piping Designer: Plant Engineering (Ref. no. 1306)',
    details: [
      'Job Description : Being part of a team of Piping Designers candidate must have experience with Microstation and PDS in the Petrochemical / Chemical / Oil and Gas industry on detailed design of pipe work. Work will include front end layout and design of piping and preliminary structures and checking isometrics. Familiar with ASME 31.3, Familiar with equipment used in refineries. Answers questions from client and construction on assigned design scope responsibilities',
      'Key Skills : P&ID drafter with SmartPlant experience, supporting a petrochemical, refinery environment, Must have 3-5years piping lead/supervisory experience & 3 consecutive years of PDS experience, Need computer skills with Microsoft Word and Excel.',
      'Qualification : Diploma/B.E. in Mechanical/Civil'
    ]
  },
  {
    title: 'Design Engineer : Product Engineering (Ref. no. 1307)',
    details: [
      'Job Description & Skills : Good hands on experience of 2-7 years in Designing and Detailing of Product/ Machine/ Equipment using one or more of the 3D or 2D CAD Software like SolidWorks, Inventor, AutoCAD etc. Good understanding of Engineering drawings and International Codes/ Standards/ Practices is important for the role.',
      'Desirable : US visa and communication and coordination skills are desirable',
      'Qualification : Diploma/B.E. in Mechanical'
    ]
  },
  {
    title: 'Senior Design Engineer : Product Engineering (Ref. no. 1308)',
    details: [
      'Job Description and Skills : Good hands on experience of 5-15 years in Designing and Detailing of Product/ Machine/ Equipment using one or more of the 3D or 2D CAD Software like SolidWorks, Inventor, AutoCAD etc. Good understanding of Engineering drawings and International Codes/ Standards/ Practices is important for the role. Good knowledge of Industry. Exposure to check details and assemblies.',
      'Desirable : US visa and communication and coordination skills are desirable.',
      'Qualification : Diploma/B.E. in Mechanical'
    ]
  }
];

export default function EmploymentOpportunitiesContent() {
  const [openIndex, setOpenIndex] = useState<number>(0);

  return (
    <div className="mt-5 space-y-6 text-[15px] leading-7 text-slate-700">
      <h2 className="text-3xl font-semibold text-[#0056a4]">Employment Opportunities</h2>

      <p>
        GTS, with its experience, professional expertise and established network is committed to represent, market, promote, and provide
        after sales service to North American, European, & Asian industrial manufacturers in the Indian subcontinent.
      </p>
      <p>
        GTS, Also a technology enabler & a &quot;new age&quot; technology company offers the wide range of Engineering Solutions to a number of
        clients all over the world in Energy, Heavy Engineering and Machinery, Railways, Aerospace, Marine, Automotive, Medical, Consumer
        Products, Telecom and Utilities.
      </p>
      <p>
        We are in need of young, energetic, Motivated and experienced Engineers/Designers/Technologists for our clients based in USA and
        EU.
      </p>
      <p>
        Applicants need to be in the age group of 25-45 years having 5-20 years of relevant experience (for Graduate Engineers) and 2-30
        years for Diploma Engineers in reputed engineering organizations. Knowledge of applicable Indian and international Codes and
        Standards is essential.
      </p>

      <section className="space-y-3">
        <h3 className="text-2xl font-semibold text-[#0056a4]">Current Openings</h3>

        <div className="space-y-3">
          {openings.map((job, index) => {
            const isOpen = openIndex === index;
            return (
              <article key={job.title} className="overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm">
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? -1 : index)}
                  className="flex w-full items-center justify-between gap-3 bg-gradient-to-r from-slate-50 to-white px-4 py-3 text-left"
                >
                  <span className="font-semibold text-slate-900">{job.title}</span>
                  <ChevronDown
                    className={`h-4 w-4 shrink-0 text-slate-500 transition-transform ${isOpen ? 'rotate-180' : ''}`}
                  />
                </button>
                {isOpen && (
                  <div className="border-t border-slate-200 px-4 py-4">
                    <ul className="space-y-2">
                      {job.details.map((line) => (
                        <li key={line} className="text-slate-700">
                          {line}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </article>
            );
          })}
        </div>
      </section>

      <p className="rounded-xl border border-blue-100 bg-blue-50 px-4 py-3 text-slate-800">
        For all positions: Send in your detailed resume stating age, passport details, details of qualifications and experience, salary
        drawn and expected, quoting the relevant Ref. No. of the position applied for in the application, to the following email address:{' '}
        <a href="mailto:hr@gtsusainc.com" className="font-semibold text-[#0056a4] hover:underline">
          hr@gtsusainc.com
        </a>
      </p>
    </div>
  );
}
