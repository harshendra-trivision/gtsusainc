import Image from 'next/image';

export default function GlobalEngagementModelsContent() {
  return (
    <div className="mt-5 space-y-6 text-[15px] leading-7 text-slate-700">
      <h2 className="text-3xl font-semibold text-[#0056a4]">Global Engagement Models</h2>

      <p>
        In order to maximize the overall throughput in any engagement, we have established global engagement models to attain a perfect
        combination of the technical excellence and delivery efficiency. Our engagement models have been designed to deliver the maximum
        value in all kinds of business environments and staffing arrangements. This helps our clients reap the benefit of our sound
        technical skills and industry experience in the most suitable modes of engagement.
      </p>

      <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white p-3 sm:p-5">
        <Image
          src="/image/global-engagement-model.png"
          alt="Global Engagement Models"
          width={1100}
          height={700}
          className="h-auto w-full object-contain"
        />
      </div>

      <p>
        Our global engagement models ensure quality deliveries coupled with cost-effectiveness with the minimum turnaround and delivery
        timeframes. Following are the global engagement models at GTS:
      </p>

      <section className="space-y-4">
        <div>
          <h3 className="text-2xl font-semibold text-[#0056a4]">Onsite Engagement</h3>
          <p>
            Projects involving interdependencies on the local systems or people are mostly benefited from this kind of engagement. The
            engagement facilitates clients to get the work executed completely at location of their choice. An onsite team of managers,
            consultants and programmers coordinate and execute the project. Our GTS resources are short-listed and selected based on the
            exact requirements of our clients and then, they are deployed at their respective work locations. Onsite engagement delivers
            highly effective and customized solutions to suit the business-specific environment.
          </p>
        </div>

        <div>
          <h3 className="text-2xl font-semibold text-[#0056a4]">Offshore Engagement</h3>
          <p>
            Offshore engagements are most suitable for the assignments where physical proximity of the team and the client doesn&apos;t become
            a barrier. At GTS, we strive to ensure quality deliveries from our state-of-the-art offshore delivery centers in India. Our
            staff includes seasoned project managers, quality analysts, expert engineers, support analysts, team leaders and technical
            specialists. With the help of our matured project management processes, standards compliance, and tools, we are able to deliver
            well-managed, low-risk and cost-effective deliveries while offering you the cost advantage of our offshore engagement.
          </p>
        </div>

        <div>
          <h3 className="text-2xl font-semibold text-[#0056a4]">Hybrid Engagement</h3>
          <p>
            In a hybrid engagement, we designate one single point of contact (SPOC) to coordinate the project from the customer&apos;s
            premises. The designated GTS consultant works in close coordination with the customers and handles the project team working from
            our offshore delivery center. In this engagement, we help save our customers&apos; precious bandwidth while ensuring that their work
            is being carried out with due diligence all along the length of the project. As a result, the customer needs to interact with
            only one person while enjoying the business value delivered by our offshore team.
          </p>
        </div>
      </section>
    </div>
  );
}
