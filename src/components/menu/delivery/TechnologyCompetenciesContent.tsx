import Image from 'next/image';

export default function TechnologyCompetenciesContent() {
  return (
    <div className="mt-5 space-y-6 text-[15px] leading-7 text-slate-700">
      <h2 className="text-3xl font-semibold text-[#0056a4]">Technology & Competencies</h2>

      <p>
        GTS has earned a reputation of an excellent engineering and manufacturing service provider, thanks to our solid technological
        backbone and technical competence. Our engineers, design specialists, project managers, and IT experts keep themselves abreast with
        the latest trends, tools, and technologies.
      </p>
      <p>
        Whereas this enables us to deliver our customers the optimum value for their money, it allows us to keep expanding and
        strengthening our service delivery capabilities. Our constant focus on research and development has resulted in a streamlined usage
        of useful tools and techniques while responding to specific customer requirements. It not only enables us to meet our customers&apos;
        expectations precisely, but also it saves us time re-inventing the wheel each time.
      </p>

      <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white p-3 sm:p-5">
        <Image
          src="/image/delivery-enablers.png"
          alt="Delivery Enablers Technology and Competencies"
          width={1100}
          height={700}
          className="h-auto w-full object-contain"
        />
      </div>

      <p>Our technology competencies include, but are not limited to:</p>

      <section className="space-y-4">
        <div>
          <h3 className="text-xl font-semibold text-[#0056a4]">Industrial Design:</h3>
          <p>
            Our design team uses applications, such as Rhino3D, Alias, Imageware to create impressive industrial designs.
          </p>
        </div>

        <div>
          <h3 className="text-xl font-semibold text-[#0056a4]">CAD:</h3>
          <p>
            We possess expertise in the utilization of various computer-aided design tools, including AutoCAD, Inventor, SolidWorks, Solid
            Edge, Pro/E, Creo, UG NX, Ideas NX, Catia V4, and Catia V5. An appropriate usage of these applications allows us to provide an
            accurate early view of the machines, equipments, and buildings and increase the chances of success of any engineering project.
          </p>
        </div>

        <div>
          <h3 className="text-xl font-semibold text-[#0056a4]">PLM:</h3>
          <p>
            Our PLM consultants are well-versed in utilizing the industry standard tools, such as TeamCentre, Enovia, and PDMLink.
          </p>
        </div>

        <div>
          <h3 className="text-xl font-semibold text-[#0056a4]">Plant Design:</h3>
          <p>
            Given the specific design needs of a plant and manufacturing process, we are apt at using Autodesk Plant3D, PDS, PDMS,
            SmartPlant3D, CAESER II, PVELite, GasWorks, Pipenet, XSteel, and STAAD. This range of tools equips us with the capability to
            respond to your requirements in the most specific and precise way using the right tools.
          </p>
        </div>

        <div>
          <h3 className="text-xl font-semibold text-[#0056a4]">CAE:</h3>
          <p>
            Our diversified range of technological expertise in CAE includes many tools, including HyperMesh, Patran, ANSA, Femap, Ansys,
            Abaqus, Nastran, LS-Dyna, Pamcrash, HyperWorks, and Moldflow.
          </p>
        </div>

        <div>
          <h3 className="text-xl font-semibold text-[#0056a4]">GIS:</h3>
          <p>
            We are able to successfully deliver one of our flagship service offerings, Geoinformatics, with the help of many modern desktop
            and Web-based tools, such as ESRI, AutodesK, MapInfo, GE-Smallworld, Intergraph, Google Maps/ Google Earth/ Bing Maps.
          </p>
        </div>
      </section>
    </div>
  );
}
