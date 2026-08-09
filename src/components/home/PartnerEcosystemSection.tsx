"use client";

import Link from "next/link";

const partnerGroups = [
  {
    title: "Sports Partner",
    description:
      "เธฃเธญเธเน€เธ—เนเธฒเธเธฑเธเธเธตเธฌเธฒ เน€เธชเธทเนเธญเธเนเธฒ เธญเธธเธเธเธฃเธ“เนเธงเธดเนเธ เนเธฅเธฐเธเธฅเธดเธ•เธ เธฑเธ“เธ‘เนเธชเธณเธซเธฃเธฑเธเธเธฑเธเธเธตเธฌเธฒ",
    category: "เธเธตเธฌเธฒ",
  },
  {
    title: "Health Partner",
    description:
      "เน€เธเธฃเธทเนเธญเธเธ”เธทเนเธกเธชเธธเธเธ เธฒเธ เนเธ เธเธเธฒเธเธฒเธฃ เธญเธฒเธซเธฒเธฃเธชเธณเธซเธฃเธฑเธเธเธฑเธเธงเธดเนเธ เนเธฅเธฐเธเธฃเธดเธเธฒเธฃเธชเธธเธเธ เธฒเธ",
    category: "เธชเธธเธเธ เธฒเธ",
  },
  {
    title: "Community Partner",
    description:
      "เธเธธเธฃเธเธดเธเธ—เนเธญเธเธ–เธดเนเธ เธเธฒเธฃเธ—เนเธญเธเน€เธ—เธตเนเธขเธงเน€เธเธดเธเธเธตเธฌเธฒ เนเธฅเธฐเธเธดเธเธเธฃเธฃเธกเธเธธเธกเธเธ",
    category: "เธเธธเธกเธเธ",
  },
];

export default function PartnerEcosystemSection() {
  return (
    <section className="w-full py-16 bg-gray-50">

      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-12">

          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Partner Ecosystem
          </h2>

          <p className="mt-4 text-gray-600">
            เธเธทเนเธเธ—เธตเนเธชเธณเธซเธฃเธฑเธเธเธฑเธเธเธกเธดเธ•เธฃเธ—เธตเนเธ•เนเธญเธเธเธฒเธฃเธฃเนเธงเธกเน€เธ•เธดเธเนเธ•เนเธเธเธฑเธ
            WING LAEN LON THAILAND
          </p>

        </div>


        <div className="grid md:grid-cols-3 gap-6">

          {partnerGroups.map((partner) => (

            <div
              key={partner.title}
              className="bg-white rounded-2xl border border-gray-200 p-6 shadow-sm"
            >

              <div className="text-sm text-blue-600 font-semibold">
                {partner.category}
              </div>

              <h3 className="mt-3 text-xl font-bold text-gray-900">
                {partner.title}
              </h3>

              <p className="mt-3 text-gray-600">
                {partner.description}
              </p>

            </div>

          ))}

        </div>


        <div className="mt-12 rounded-2xl bg-white border border-gray-200 p-8 text-center">

          <h3 className="text-2xl font-bold text-gray-900">
            Become Our Partner
          </h3>

          <p className="mt-3 text-gray-600">
            เธชเธกเธฑเธเธฃเน€เธเนเธฒเธฃเนเธงเธกเธฃเธฐเธเธ Partner
            เน€เธเธทเนเธญเธเธฃเธฐเธเธฒเธชเธฑเธกเธเธฑเธเธเนเธชเธดเธเธเนเธฒเนเธฅเธฐเธเธฃเธดเธเธฒเธฃเธเธฑเธเธเธฅเธธเนเธกเธเธฑเธเธงเธดเนเธเนเธ—เธข
          </p>


          <Link
            href="/partner/register"
            className="inline-block mt-6 rounded-full bg-blue-600 px-8 py-3 text-white font-semibold hover:bg-blue-700 transition"
          >
            เธชเธกเธฑเธเธฃเน€เธเนเธ Partner
          </Link>


        </div>


      </div>

    </section>
  );
}
