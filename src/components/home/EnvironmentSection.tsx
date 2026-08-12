// FILE: src/components/home/EnvironmentSection.tsx

"use client";

import Link from "next/link";

const environmentFeatures = [
  {
    title: "Green Running",
    description:
      "สร้างกิจกรรมการวิ่งที่เชื่อมโยงสุขภาพ ชุมชน และสิ่งแวดล้อม",
    slug: "green-running",
  },
  {
    title: "Carbon Awareness",
    description:
      "ส่งเสริมการเรียนรู้เรื่องคาร์บอน ฟื้นฟูธรรมชาติ และความยั่งยืน",
    slug: "carbon-awareness",
  },
  {
    title: "Community Impact",
    description:
      "ใช้พลังของนักวิ่งในการสร้างประโยชน์ให้พื้นที่และสังคม",
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
            วิ่งเพื่อสุขภาพ พร้อมสร้างผลกระทบเชิงบวกต่อโลก
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
                เชื่อมโยงนักวิ่ง เทคโนโลยี AI ชุมชน และสิ่งแวดล้อม
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
            เพื่อสร้างระบบนิเวศการวิ่งที่ยั่งยืน
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
