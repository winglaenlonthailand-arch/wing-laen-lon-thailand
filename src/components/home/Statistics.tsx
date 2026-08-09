"use client";

import Link from "next/link";

const statistics = [
  {
    value: "77",
    label: "เธเธฑเธเธซเธงเธฑเธ”เน€เธเนเธฒเธฃเนเธงเธก",
    href: "/province",
  },
  {
    value: "1,000+",
    label: "เธเธฑเธเธงเธดเนเธเนเธเธฃเธฐเธเธ",
    href: "/runner",
  },
  {
    value: "100+",
    label: "เธเธดเธเธเธฃเธฃเธกเธงเธดเนเธ",
    href: "/events",
  },
  {
    value: "24/7",
    label: "AI Running Platform",
    href: "/ai",
  },
];

export default function Statistics() {
  return (
    <section className="w-full py-16 bg-white">

      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-10">

          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            WING LAEN LON THAILAND
          </h2>

          <p className="mt-3 text-gray-600">
            Thailand AI Running Platform
          </p>

        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">

          {statistics.map((item) => (

            <Link
              key={item.label}
              href={item.href}
              className="rounded-2xl border border-gray-200 p-6 text-center shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-blue-500 hover:shadow-lg"
            >

              <div className="text-3xl md:text-4xl font-bold text-blue-600">
                {item.value}
              </div>

              <div className="mt-2 text-sm md:text-base text-gray-700">
                {item.label}
              </div>

            </Link>

          ))}

        </div>

      </div>

    </section>
  );
}
