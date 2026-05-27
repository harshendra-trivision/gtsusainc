import Image from 'next/image';

export default function HrValuesContent() {
  return (
    <div className="mt-5 space-y-6 text-[15px] leading-7 text-slate-700">
      <h2 className="text-3xl font-semibold text-[#0056a4]">HR Values</h2>

      <p>
        AT GTS Engineering USA Incorporated (GTS), we truly believe that our employees play the role of the backbone of our delivery
        strength. This is why our HR (Human Resources) guidelines have been established to support our HR vision. Based on the
        understanding that our people are the foremost delivery enablers for us, we strive to achieve success following the lines of our
        vision statement.
      </p>

      <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white p-3 sm:p-5">
        <Image
          src="/image/hr-values.png"
          alt="HR Values"
          width={1100}
          height={700}
          className="h-auto w-full object-contain"
        />
      </div>

      <section className="space-y-3">
        <h3 className="text-2xl font-semibold text-[#0056a4]">Our HR Vision</h3>
        <p>
          We shall achieve it by creating a culture of self striving with focus on total employee involvement towards customer
          satisfaction.
        </p>
        <p>
          Our approach shall be value-based as a responsible member of the society, contributing to its growth and development.
        </p>
      </section>

      <section className="space-y-3">
        <h3 className="text-2xl font-semibold text-[#0056a4]">HR Role:</h3>
        <p>
          At GTS, HR is much more than a typical administration department. Our HR department is empowered and is motivated to act as:
        </p>
        <ul className="ml-5 space-y-2">
          <li className="list-disc">An employee champion</li>
          <li className="list-disc">A change agent</li>
          <li className="list-disc">Strategic partner in business.</li>
          <li className="list-disc">An administrative expert</li>
        </ul>
      </section>

      <section className="space-y-3">
        <h3 className="text-2xl font-semibold text-[#0056a4]">HR Values:</h3>
        <p>
          Our HR guidelines have been drafted keeping in mind the unique individuality of every employee. On the basis of our employees&apos;
          unique specialities, cultural backgrounds, diversified expertise, abilities, aspirations, and needs, we have derived the
          following HR values:
        </p>
        <ul className="ml-5 space-y-2">
          <li className="list-disc">Employees are prime movers and they drive resources for effective use</li>
          <li className="list-disc">
            Individuals have capacity to excel and the synergetic effect of such individual efforts ultimately lead&apos;s to excellence
          </li>
          <li className="list-disc">
            Desire to excel depends primarily on individual initiatives and the environment should facilitate such initiatives
          </li>
          <li className="list-disc">
            Autonomy to employees leads to motivation to use their creative abilities to improve their own as well as organizational
            efficiency
          </li>
          <li className="list-disc">
            Quality, Productivity, Efficiency, and Innovation are keys to excellence and efforts should be made by all to continuously
            improve this through involvement of people
          </li>
        </ul>
        <p>
          We believe that alignment of employees&apos; individual goals with the organizational goals is one of the HR responsibilities. As
          a result, our HR value system has proved to be a driving force for the success of GTS as a corporate.
        </p>
      </section>
    </div>
  );
}
