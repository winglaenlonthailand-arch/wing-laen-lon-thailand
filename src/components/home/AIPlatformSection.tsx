// FILE: src/components/home/AIPlatformSection.tsx

"use client";

import Link from "next/link";

const aiFeatures = [
  {
    title: "AI Running Assistant",
    description:
      "เธเธนเนเธเนเธงเธข AI เธงเธดเน€เธเธฃเธฒเธฐเธซเนเธเนเธญเธกเธนเธฅเธเธฒเธฃเธงเธดเนเธ เนเธเธฐเธเธณเธเธฒเธฃเธเธถเธเธเนเธญเธก เนเธฅเธฐเธเนเธงเธขเธงเธฒเธเนเธเธเธเธฑเธ’เธเธฒเธเธฑเธเธงเธดเนเธ",
    slug: "assistant",
  },
  {
    title: "Running Intelligence",
    description:
      "เธฃเธฐเธเธเธเธฃเธฐเธกเธงเธฅเธเธฅเธเนเธญเธกเธนเธฅเธเธฑเธเธงเธดเนเธ เธเธดเธเธเธฃเธฃเธก เธฃเธฐเธขเธฐเธ—เธฒเธ เนเธฅเธฐเธชเธ–เธดเธ•เธด เน€เธเธทเนเธญเธชเธฃเนเธฒเธเธเนเธญเธกเธนเธฅเน€เธเธดเธเธฅเธถเธ",
    slug: "intelligence",
  },
  {
    title: "National Running Database",
    description:
      "เธเธฒเธเธเนเธญเธกเธนเธฅเธเธฑเธเธงเธดเนเธเธฃเธฐเธ”เธฑเธเธเธฃเธฐเน€เธ—เธจ เน€เธเธทเนเธญเน€เธเธทเนเธญเธกเนเธขเธเธเธธเธกเธเธ เธเธฑเธเธซเธงเธฑเธ” เนเธฅเธฐเธเธดเธเธเธฃเธฃเธกเธ•เนเธฒเธ เน",
    slug: "database",
  },
];

export default function AIPlatformSection() {
  return (
    <section className="w-full py-16 bg-gray-900">

      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-10">

          <h2 className="text-3xl md:text-4xl font-bold text-white">
            Thailand AI Running Platform
          </h2>

          <p className="mt-3 text-gray-300">
            เธฃเธฐเธเธ AI เธชเธณเธซเธฃเธฑเธเธชเธฃเนเธฒเธเธญเธเธฒเธเธ•เธเธฒเธฃเธงเธดเนเธเธเธญเธเธเธฃเธฐเน€เธ—เธจเนเธ—เธข
          </p>

        </div>

        <div className="grid md:grid-cols-3 gap-6">

          {aiFeatures.map((item) => (

            <Link
              key={item.slug}
              href={`/ai/${item.slug}`}
              className="block rounded-2xl bg-white/10 border border-white/20 p-6 hover:border-blue-400 hover:bg-white/15 hover:shadow-lg transition-all duration-300"
            >

              <h3 className="text-xl font-semibold text-white">
                {item.title}
              </h3>

              <p className="mt-3 text-gray-300 leading-relaxed">
                {item.description}
              </p>

              <div className="mt-6 text-blue-300 font-semibold">
                เน€เธเธดเธ”เธฃเธฐเธเธ โ’
              </div>

            </Link>

          ))}

        </div>

        <Link
          href="/ai"
          className="block mt-10 rounded-2xl bg-white/10 border border-white/20 p-8 hover:border-green-400 hover:bg-white/15 hover:shadow-lg transition-all duration-300"
        >

          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">

            <div>

              <h3 className="text-2xl font-bold text-white">
                AI Engine Status
              </h3>

              <p className="mt-3 text-gray-300">
                Ready for Runner Passport,
                National Ranking เนเธฅเธฐ Digital Running Ecosystem
              </p>

            </div>

            <div className="px-8 py-3 rounded-full bg-green-500 text-white font-bold text-center">
              SYSTEM READY
            </div>

          </div>

          <div className="mt-8 flex flex-wrap gap-3">

            <span className="rounded-full bg-blue-600 px-5 py-2 text-white text-sm font-semibold">
              AI Assistant
            </span>

            <span className="rounded-full bg-purple-600 px-5 py-2 text-white text-sm font-semibold">
              Analytics
            </span>

            <span className="rounded-full bg-emerald-600 px-5 py-2 text-white text-sm font-semibold">
              National Database
            </span>

            <span className="rounded-full border border-white/40 px-5 py-2 text-white text-sm font-semibold">
              Open Platform
            </span>

          </div>

        </Link>

      </div>

    </section>
  );
}
