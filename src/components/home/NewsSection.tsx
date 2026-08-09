// FILE: src/components/home/NewsSection.tsx

"use client";

import Link from "next/link";

const newsItems = [
  {
    title: "WING LAEN LON THAILAND เน€เธเธดเธ”เธฃเธฐเธเธ AI Running Platform",
    date: "2026",
    slug: "ai-running-platform-launch",
    description:
      "เนเธเธฅเธ•เธเธญเธฃเนเธกเธเธฒเธฃเธงเธดเนเธเนเธซเนเธเธเธฃเธฐเน€เธ—เธจเนเธ—เธข เน€เธเธทเนเธญเธกเธ•เนเธญเธเธฑเธเธงเธดเนเธ เธเนเธญเธกเธนเธฅ เนเธฅเธฐเน€เธ—เธเนเธเนเธฅเธขเธต AI",
  },
  {
    title: "Runner Passport เธฃเธฐเธเธเธ•เธฑเธงเธ•เธเธเธฑเธเธงเธดเนเธเธ”เธดเธเธดเธ—เธฑเธฅ",
    date: "2026",
    slug: "runner-passport",
    description:
      "เธเธฑเธเธ—เธถเธเธเธฃเธฐเธงเธฑเธ•เธดเธเธฒเธฃเธงเธดเนเธ เธชเธ–เธดเธ•เธด เนเธฅเธฐเธเธงเธฒเธกเธชเธณเน€เธฃเนเธเธเธญเธเธเธฑเธเธงเธดเนเธเนเธ•เนเธฅเธฐเธเธ",
  },
  {
    title: "เธชเธฃเนเธฒเธเน€เธเธฃเธทเธญเธเนเธฒเธขเธเธฑเธเธงเธดเนเธเธ—เธฑเนเธงเธเธฃเธฐเน€เธ—เธจ",
    date: "2026",
    slug: "national-running-network",
    description:
      "เน€เธเธทเนเธญเธกเนเธขเธเธเธฑเธเธซเธงเธฑเธ” เธเธธเธกเธเธ เธเธนเนเธชเธเธฑเธเธชเธเธธเธ เนเธฅเธฐเธเธดเธเธเธฃเธฃเธกเธเธฒเธฃเธงเธดเนเธเนเธเธเธฃเธฐเน€เธ—เธจเนเธ—เธข",
  },
];

export default function NewsSection() {
  return (
    <section className="w-full py-16 bg-gray-50">

      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-10">

          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            News & Updates
          </h2>

          <p className="mt-3 text-gray-600">
            เธเนเธฒเธงเธชเธฒเธฃเนเธฅเธฐเธเธงเธฒเธกเน€เธเธฅเธทเนเธญเธเนเธซเธงเธเธฒเธ WING LAEN LON THAILAND
          </p>

        </div>

        <div className="grid md:grid-cols-3 gap-6">

          {newsItems.map((news) => (

            <Link
              key={news.slug}
              href={`/news/${news.slug}`}
              className="block rounded-2xl bg-white border border-gray-200 p-6 shadow-sm hover:border-blue-500 hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
            >

              <div className="text-sm text-blue-600 font-semibold">
                {news.date}
              </div>

              <h3 className="mt-3 text-xl font-bold text-gray-900">
                {news.title}
              </h3>

              <p className="mt-3 text-gray-600 leading-relaxed">
                {news.description}
              </p>

              <div className="mt-6 flex items-center justify-between">

                <span className="rounded-full bg-blue-100 px-3 py-1 text-sm text-blue-700">
                  News
                </span>

                <span className="text-blue-600 font-semibold">
                  เธญเนเธฒเธเน€เธเธดเนเธกเน€เธ•เธดเธก โ’
                </span>

              </div>

            </Link>

          ))}

        </div>

        <div className="mt-10 text-center">

          <Link
            href="/news"
            className="inline-flex rounded-full bg-blue-600 px-8 py-3 text-white font-semibold hover:bg-blue-700 transition"
          >
            เธ”เธนเธเนเธฒเธงเธ—เธฑเนเธเธซเธกเธ”
          </Link>

        </div>

      </div>

    </section>
  );
}
