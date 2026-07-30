// FILE: src/components/home/ChallengeSection.tsx

"use client";

import Link from "next/link";

const challenges = [
  {
    title: "Personal Challenge",
    description:
      "ตั้งเป้าหมายการวิ่งส่วนตัว ติดตามพัฒนาการ และสร้างวินัยในการออกกำลังกาย",
    slug: "personal-challenge",
  },
  {
    title: "Province Challenge",
    description:
      "แข่งขันเชิงสร้างสรรค์ระหว่างจังหวัด เพื่อสร้างชุมชนนักวิ่งทั่วประเทศ",
    slug: "province-challenge",
  },
  {
    title: "Thailand Challenge",
    description:
      "รวมพลังนักวิ่งไทย สร้างสถิติการวิ่งระดับประเทศผ่านระบบ AI",
    slug: "thailand-challenge",
  },
];

export default function ChallengeSection() {
  return (
    <section className="w-full py-16 bg-gray-50">

      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-10">

          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Running Challenge
          </h2>

          <p className="mt-3 text-gray-600">
            ระบบภารกิจการวิ่งเพื่อสร้างแรงบันดาลใจและการมีส่วนร่วม
          </p>

        </div>

        <div className="grid md:grid-cols-3 gap-6">

          {challenges.map((challenge) => (

            <Link
              key={challenge.slug}
              href={`/challenge/${challenge.slug}`}
              className="block rounded-2xl bg-white border border-gray-200 p-6 shadow-sm hover:border-blue-500 hover:shadow-lg transition-all duration-300"
            >

              <h3 className="text-xl font-semibold text-gray-900">
                {challenge.title}
              </h3>

              <p className="mt-3 text-gray-600 leading-relaxed">
                {challenge.description}
              </p>

              <div className="mt-6">

                <span className="block rounded-full bg-blue-600 px-6 py-3 text-center text-white font-semibold hover:bg-blue-700 transition">
                  เข้าร่วม Challenge
                </span>

              </div>

            </Link>

          ))}

        </div>

      </div>

    </section>
  );
}