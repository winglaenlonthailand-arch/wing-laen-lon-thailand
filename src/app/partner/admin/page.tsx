"use client";

const partnerApplications = [
  {
    id: 1,
    company: "Runner Pro Shoes",
    category: "Sports",
    contact: "เธเธฃเธดเธฉเธฑเธ—เธ•เธฑเธงเธญเธขเนเธฒเธ",
    status: "Pending",
  },
  {
    id: 2,
    company: "Healthy Drink Thailand",
    category: "Health",
    contact: "เธ—เธตเธกเธเธฒเธฃเธ•เธฅเธฒเธ”",
    status: "Approved",
  },
  {
    id: 3,
    company: "Local Running Community",
    category: "Community",
    contact: "เธเธนเนเธเธฃเธฐเธชเธฒเธเธเธฒเธ",
    status: "Review",
  },
];

export default function PartnerAdminPage() {
  return (
    <main className="w-full min-h-screen bg-gray-50">

      <section className="max-w-7xl mx-auto px-6 py-16">

        <div className="mb-10">

          <h1 className="text-4xl font-bold text-gray-900">
            Partner Review Dashboard
          </h1>

          <p className="mt-3 text-gray-600">
            เธฃเธฐเธเธเธ•เธฃเธงเธเธชเธญเธเนเธฅเธฐเธเธฑเธ”เธเธฒเธฃเธเธนเนเธชเธกเธฑเธเธฃ Partner
            เธเธญเธ WING LAEN LON THAILAND
          </p>

        </div>


        <div className="bg-white rounded-2xl border border-gray-200 overflow-hidden shadow-sm">

          <div className="grid grid-cols-5 gap-4 px-6 py-4 bg-gray-100 font-semibold text-gray-700">

            <div>ID</div>
            <div>เธเธฃเธดเธฉเธฑเธ—</div>
            <div>เธเธฃเธฐเน€เธ เธ—</div>
            <div>เธเธนเนเธ•เธดเธ”เธ•เนเธญ</div>
            <div>เธชเธ–เธฒเธเธฐ</div>

          </div>


          {partnerApplications.map((partner) => (

            <div
              key={partner.id}
              className="grid grid-cols-5 gap-4 px-6 py-5 border-t border-gray-100"
            >

              <div>
                {partner.id}
              </div>

              <div className="font-medium text-gray-900">
                {partner.company}
              </div>

              <div>
                {partner.category}
              </div>

              <div>
                {partner.contact}
              </div>

              <div>
                <span className="rounded-full bg-blue-100 px-3 py-1 text-sm text-blue-700">
                  {partner.status}
                </span>
              </div>

            </div>

          ))}

        </div>


      </section>

    </main>
  );
}
