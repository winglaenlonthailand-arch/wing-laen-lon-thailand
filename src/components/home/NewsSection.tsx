// FILE: src/components/home/NewsSection.tsx

"use client";

import Link from "next/link";

const newsItems = [
  {
    title: "WING LAEN LON THAILAND เปิดระบบ AI Running Platform",
    date: "2026",
    slug: "ai-running-platform-launch",
    description:
      "แพลตฟอร์มการวิ่งแห่งประเทศไทย เชื่อมต่อนักวิ่ง ข้อมูล และเทคโนโลยี AI",
  },
  {
    title: "Runner Passport ระบบตัวตนนักวิ่งดิจิทัล",
    date: "2026",
    slug: "runner-passport",
    description:
      "บันทึกประวัติการวิ่ง สถิติ และความสำเร็จของนักวิ่งแต่ละคน",
  },
  {
    title: "สร้างเครือข่ายนักวิ่งทั่วประเทศ",
    date: "2026",
    slug: "national-running-network",
    description:
      "เชื่อมโยงจังหวัด ชุมชน ผู้สนับสนุน และกิจกรรมการวิ่งในประเทศไทย",
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
            ข่าวสารและความเคลื่อนไหวจาก WING LAEN LON THAILAND
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
                  อ่านเพิ่มเติม →
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
            ดูข่าวทั้งหมด
          </Link>

        </div>

      </div>

    </section>
  );
}
