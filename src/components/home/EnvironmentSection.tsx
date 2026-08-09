// FILE: src/components/home/EnvironmentSection.tsx

"use client";

import Link from "next/link";

const environmentFeatures = [
  {
    title: "Green Running",
    description:
      "เธชเธฃเนเธฒเธเธเธดเธเธเธฃเธฃเธกเธเธฒเธฃเธงเธดเนเธเธ—เธตเนเน€เธเธทเนเธญเธกเนเธขเธเธชเธธเธเธ เธฒเธ เธเธธเธกเธเธ เนเธฅเธฐเธชเธดเนเธเนเธงเธ”เธฅเนเธญเธก",
    slug: "green-running",
  },
  {
    title: "Carbon Awareness",
    description:
      "เธชเนเธเน€เธชเธฃเธดเธกเธเธฒเธฃเน€เธฃเธตเธขเธเธฃเธนเนเน€เธฃเธทเนเธญเธเธเธฒเธฃเนเธเธญเธ เธเธทเนเธเธเธนเธเธฃเธฃเธกเธเธฒเธ•เธด เนเธฅเธฐเธเธงเธฒเธกเธขเธฑเนเธเธขเธทเธ",
    slug: "carbon-awareness",
  },
  {
    title: "Community Impact",
    description:
      "เนเธเนเธเธฅเธฑเธเธเธญเธเธเธฑเธเธงเธดเนเธเนเธเธเธฒเธฃเธชเธฃเนเธฒเธเธเธฃเธฐเนเธขเธเธเนเนเธซเนเธเธทเนเธเธ—เธตเนเนเธฅเธฐเธชเธฑเธเธเธก",
    slug: "community-impact",
  },
];

export default function EnvironmentSection() {
  return (
    <section className="w-full py-16 bg-white">

      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-10">

          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Environment & Sustainability
          </h2>

          <p className="mt-3 text-gray-600">
            เธงเธดเนเธเน€เธเธทเนเธญเธชเธธเธเธ เธฒเธ เธเธฃเนเธญเธกเธชเธฃเนเธฒเธเธเธฅเธเธฃเธฐเธ—เธเน€เธเธดเธเธเธงเธเธ•เนเธญเนเธฅเธ
          </p>

        </div>

        <div className="grid md:grid-cols-3 gap-6">

          {environmentFeatures.map((item) => (

            <Link
              key={item.slug}
              href={`/environment/${item.slug}`}
              className="block rounded-2xl border border-gray-200 p-6 shadow-sm bg-gray-50 hover:border-green-500 hover:shadow-lg transition-all duration-300"
            >

              <h3 className="text-xl font-semibold text-gray-900">
                {item.title}
              </h3>

              <p className="mt-3 text-gray-600 leading-relaxed">
                {item.description}
              </p>

              <div className="mt-6 text-green-700 font-semibold">
                เธ”เธนเธฃเธฒเธขเธฅเธฐเน€เธญเธตเธขเธ” โ’
              </div>

            </Link>

          ))}

        </div>

        <Link
          href="/environment"
          className="block mt-10 rounded-2xl bg-green-50 border border-green-100 p-8 hover:border-green-500 hover:shadow-lg transition-all duration-300"
        >

          <h3 className="text-2xl font-bold text-gray-900">
            Running For Better Future
          </h3>

          <p className="mt-3 text-gray-700 leading-relaxed">
            WING LAEN LON THAILAND
            เน€เธเธทเนเธญเธกเนเธขเธเธเธฑเธเธงเธดเนเธ เน€เธ—เธเนเธเนเธฅเธขเธต AI เธเธธเธกเธเธ เนเธฅเธฐเธชเธดเนเธเนเธงเธ”เธฅเนเธญเธก
            เน€เธเธทเนเธญเธชเธฃเนเธฒเธเธฃเธฐเธเธเธเธดเน€เธงเธจเธเธฒเธฃเธงเธดเนเธเธ—เธตเนเธขเธฑเนเธเธขเธทเธ
          </p>

          <div className="mt-6 flex flex-wrap gap-3">

            <span className="rounded-full bg-green-600 px-6 py-3 text-white font-semibold">
              Carbon Credit
            </span>

            <span className="rounded-full bg-blue-600 px-6 py-3 text-white font-semibold">
              Biochar
            </span>

            <span className="rounded-full border border-green-600 px-6 py-3 text-green-700 font-semibold">
              Learn More
            </span>

          </div>

        </Link>

      </div>

    </section>
  );
}
