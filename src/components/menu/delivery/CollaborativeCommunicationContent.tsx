import Image from 'next/image';

export default function CollaborativeCommunicationContent() {
  return (
    <div className="mt-5 space-y-6 text-[15px] leading-7 text-slate-700">
      <h2 className="text-3xl font-semibold text-[#0056a4]">Collaborative Communication</h2>

      <p>
        Communication is one of the key contributing factors that determine success of a project today. Well-connected participants of a
        project often give rise to a better cohesion among the project teams, quicker responses to situations, better visibility of
        progress to the management and the customers. Also, in a geographically distributed work arrangement, ease of communication plays a
        vital role.
      </p>

      <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white p-3 sm:p-5">
        <Image
          src="/image/communication-managment.png"
          alt="Collaborative Communication Management"
          width={1100}
          height={700}
          className="h-auto w-full object-contain"
        />
      </div>

      <p>
        At GTS, we ensure that communication becomes your project strengths, thanks to our state-of-the-art communication infrastructure and
        well-established communication management processes. Collaborative communication becomes our major strength that equips us with
        excellent delivery capabilities. The cornerstones of our collaborative communication are:
      </p>

      <section className="space-y-4">
        <div>
          <h3 className="text-2xl font-semibold text-[#0056a4]">Teleconferencing with NetMeeting/Webex</h3>
          <p>
            Utilizing the teleconferencing tools, such as Microsoft NetMeeting and Webex, we enable our customers to conduct online design
            reviews at every stage regardless of physical distance from the design team. Also, it enables the project team to work
            collaboratively from across the locations.
          </p>
        </div>

        <div>
          <h3 className="text-2xl font-semibold text-[#0056a4]">Video Conferencing</h3>
          <p>
            Video conferencing facilities at our delivery centers facilitate a real-time collaboration environment to ensure location
            transparency. Using video conferencing project teams can interact with each other with the utmost effectiveness and zero loss of
            information. It also allows quicker and easier management reviews so that the quality of the deliverables meets expectations all
            the while.
          </p>
        </div>

        <div>
          <h3 className="text-2xl font-semibold text-[#0056a4]">Single Point of Contact</h3>
          <p>
            In order to maximize the productivity and minimize the efforts and time wastage in non-productive communications, we designate
            one of our consultants as a single point of contact (SPOC) for every client. The SPOC ensures the frequency, timeliness, and
            quality of deliveries and also, works as an interface between the project team and the customer. Similarly, we have our SPOCs
            who take care of the customers located at specific geographic regions. Our SPOCs hold the responsibilities of ensuring the
            quality deliveries, review the project team&apos;s performance, and help us meet our customer&apos;s expectations to the best extent
            possible.
          </p>
        </div>
      </section>
    </div>
  );
}
