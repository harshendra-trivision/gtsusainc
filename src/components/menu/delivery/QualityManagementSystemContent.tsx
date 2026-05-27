import Image from 'next/image';

export default function QualityManagementSystemContent() {
  return (
    <div className="mt-5 space-y-6 text-[15px] leading-7 text-slate-700">
      <h2 className="text-3xl font-semibold text-[#0056a4]">Quality Management System</h2>

      <p>
        In all of our endeavours as an organization, quality remains at the heart of our efforts and commitment. Our constant focus on
        being a quality-centric organization helps us earn reputation of a market leader. On the other hand, it strengthens our
        capabilities to deliver substantial business value in each of our engagements.
      </p>
      <p>
        We at GTS strive to invest in our quality management processes and have matured to make ourselves compliant with the principles
        defined by various industry standards. We keep our quality procedures and practices under a keen watch by conducting regular
        quality audits across all of our functional departments and project groups. As a result, we have enforced stringent quality
        policies and guidelines that work in our favour when it comes to our delivery efficiency.
      </p>

      <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white p-3 sm:p-5">
        <Image
          src="/image/quality-management-system.png"
          alt="Quality Management System"
          width={1100}
          height={700}
          className="h-auto w-full object-contain"
        />
      </div>

      <p>
        We are compliant with quality standards defined by renowned ISO and CMMi and are soon going to get accredited with ISO 9001, ISO
        27001, and CMMi certifications going forward. We rigorously follow the internationally accepted quality standards and make
        conscious efforts to ensure that our quality parameters are always at par with the customers&apos; desired quality gates. In our
        project management processes, quality of the delivery and the processes holds a vital importance.
      </p>

      <section className="space-y-4">
        <h3 className="text-2xl font-semibold text-[#0056a4]">Information Security Management</h3>
        <p>
          Information Security is of utmost importance at GTS. Given our decades of experience in handling customers&apos; intellectual
          property, GTS has in place a mature Information Security Management (ISM) system that helps in effective management of threats
          and risks to your organization&apos;s confidential information. We meet all the criteria and standards recommended by ISO 27001 and
          strictly adhere the pertinent quality and ISM processes. Our ISM System addresses two modes of security critical for any
          organization – Physical Security and Network Security.
        </p>

        <p className="text-xl font-semibold text-[#0056a4]">INFOSEC</p>

        <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white p-3 sm:p-5">
          <Image
            src="/image/exception-managment.png"
            alt="Exception Management and Infosec"
            width={1100}
            height={700}
            className="h-auto w-full object-contain"
          />
        </div>

        <p>
          <strong>Physical Security</strong> – It includes implementation of facilities like access card, keyboard based control,
          restricted entry, and manual monitoring to ensure no unwanted trespassers scan through your intellectual and physical property.
        </p>

        <p>
          <strong>Network Security</strong> – It covers various levels of Network Isolation and Security. With restricted internet access,
          firewall based control, and multi layers of security, GTS ensures that customer design is safe and secure. In addition this,
          different level (L1, L2 and L3) of security can be provided based on project and customer requirement. GTS employs advanced
          processes in network management and control as well as usage of several network security tools, such as Fortigate 200 A Firewall,
          IDS (Intrusion Detection System), Sniffer, Gateway Anti-virus, Desktop Anti-virus, and many more.
        </p>

        <p>
          We have been consistently following the ISMS standards and quality policies recommended by ISO 27001 and will be going for the
          certification in very near future.
        </p>

        <p>
          Our strong focus on better and consistent quality can be illustrated by the several success stories we have led during our
          customer engagements. Indeed, a constantly growing list of our clients and a great customer retention rate, both provide a clear
          testimony to our strictness towards adherence with the quality procedures and practices.
        </p>
      </section>
    </div>
  );
}
