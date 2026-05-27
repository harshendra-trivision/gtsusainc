export default function ContactPage() {
  const captcha = Array.from({ length: 4 }, () =>
    'ABCDEFGHJKLMNPQRSTUVWXYZ23456789'[Math.floor(Math.random() * 32)]
  ).join('');

  return (
    <main className="min-h-screen bg-[linear-gradient(180deg,#edf3fb_0%,#f8fafc_38%,#ffffff_100%)] py-10 sm:py-14">
      <section className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-2xl border border-slate-200 bg-white/95 p-4 shadow-xl shadow-slate-200/60 sm:p-8 lg:p-10">
          <h1 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">Contact us</h1>

          <div className="mt-6 grid gap-6 lg:grid-cols-2">
            <div className="space-y-6 text-[15px] leading-7 text-slate-700">
              <div className="rounded-xl border border-slate-200 bg-slate-50 p-4">
                <h2 className="text-xl font-semibold text-[#0056a4]">GTS Engineering USA Incorporated</h2>
                <p className="mt-3 font-semibold">Physical Address:</p>
                <p>888 W Sam Houston Pkwy S, Suite 225 B,</p>
                <p>Houston, TX 77042-1909</p>
                <p className="mt-3">832-295-0545</p>
                <p>832-295-0587</p>
                <p className="mt-2">info@gtsusainc.com</p>
                <p>skype – gaurav_blue</p>
              </div>

              <div className="rounded-xl border border-slate-200 bg-slate-50 p-4">
                <h3 className="text-lg font-semibold text-slate-900">GTS – Singapore Sales Office</h3>
                <p className="mt-2">26 Bayshore Road, 21-01,</p>
                <p>Singapore 469972</p>
              </div>

              <div className="rounded-xl border border-slate-200 bg-slate-50 p-4">
                <h3 className="text-lg font-semibold text-slate-900">GTS – Middle East Sales Office</h3>
                <p className="mt-2">3/4, 1st Floor, Sercon Building,</p>
                <p>Musa Bin Nussair Street,</p>
                <p>Riyadh, Saudi Arabia</p>
              </div>
            </div>

            <div className="space-y-4 rounded-xl border border-slate-200 bg-slate-50 p-4">
              <h2 className="text-xl font-semibold text-[#0056a4]">Write to Us!</h2>
              <p className="text-sm text-red-600">
                Failed to send your message. Please try later or contact the administrator by another method.
              </p>

              <div className="grid gap-3 text-sm text-slate-700">
                <label className="font-medium">Name:</label>
                <input className="rounded border border-slate-300 bg-white px-3 py-2" defaultValue="Sanjay Saini" />

                <label className="font-medium">Address:</label>
                <input className="rounded border border-slate-300 bg-white px-3 py-2" defaultValue="B 76 Raman Marg Tilak Nagar" />

                <label className="font-medium">Phone no:</label>
                <input className="rounded border border-slate-300 bg-white px-3 py-2" defaultValue="9876543212" />

                <label className="font-medium">Email</label>
                <input className="rounded border border-slate-300 bg-white px-3 py-2" defaultValue="sanjay@trivision.ai" />

                <label className="font-medium">Enquiry</label>
                <textarea
                  className="min-h-[130px] rounded border border-slate-300 bg-white px-3 py-2"
                  defaultValue="enquiry"
                />
              </div>

              <div className="pt-1">
                <p className="font-semibold text-slate-800">Prove that you are human using the captcha below:</p>
                <div className="mt-2 inline-block rounded border border-slate-300 bg-white px-4 py-2 text-3xl tracking-[0.35em] text-slate-900">
                  {captcha}
                </div>
                <div className="mt-3">
                  <button className="rounded bg-slate-800 px-6 py-2 text-sm font-semibold text-white hover:bg-slate-700">Send</button>
                </div>
              </div>

              <p className="rounded border border-blue-300 bg-blue-50 p-3 text-sm text-slate-700">
                Failed to send your message. Please try later or contact the administrator by another method.
              </p>
            </div>
          </div>

          <div className="mt-8 grid gap-6 text-[15px] leading-7 text-slate-700 md:grid-cols-2">
            <div className="space-y-5">
              <div className="rounded-xl border border-slate-200 bg-slate-50 p-4">
                <h3 className="text-lg font-semibold text-[#0056a4]">Global Delivery Center:</h3>
                <p className="mt-2 font-semibold">GTS Techno Projects (India) P Limited</p>
                <p>An ISO 9001:2015 certified company</p>
                <p className="font-semibold">(A subsidiary of GTS Engineering USA Incorporated)</p>
                <p className="mt-2">G – 41, Sector – 63,</p>
                <p>Noida, U.P. – 201301</p>
                <p>INDIA</p>
              </div>

              <div className="rounded-xl border border-slate-200 bg-slate-50 p-4">
                <p className="font-semibold">GTS Manufacturing – Adomac Technicals</p>
                <p className="mt-2">G – 230, Sector – 63,</p>
                <p>Noida, U.P., India – 201309</p>
              </div>
            </div>

            <div className="space-y-5">
              <div className="rounded-xl border border-slate-200 bg-slate-50 p-4">
                <p className="font-semibold">GTS India – Gurgaon</p>
                <p className="mt-2">Unit 405, Sector – 21,</p>
                <p>Suncity Trade Tower</p>
                <p>Gurgaon, Haryana, India – 122016</p>
              </div>

              <div className="rounded-xl border border-slate-200 bg-slate-50 p-4">
                <p className="font-semibold">GTS India – Haridwar</p>
                <p className="mt-2">Kankhal, Haridwar,</p>
                <p>Uttarakhand, India – 249408</p>
              </div>

              <div className="rounded-xl border border-slate-200 bg-slate-50 p-4">
                <p className="font-semibold">GTS India – GOA</p>
                <p className="mt-2">A5, RR Towers,</p>
                <p>Near Vodafone Gallery,</p>
                <p>Mapusa, Goa, India- 403507</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
