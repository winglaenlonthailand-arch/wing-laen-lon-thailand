// FILE: src/components/home/CoffeeSection.tsx

"use client";

import Link from "next/link";

const coffeeFeatures = [
  {
    title: "Runner Energy",
    description:
      "กาแฟคุณภาพสำหรับนักวิ่ง ช่วยเติมพลังระหว่างการฝึกซ้อมและกิจกรรม",
    slug: "runner-energy",
  },
  {
    title: "Local Community Coffee",
    description:
      "เชื่อมโยงกาแฟชุมชน เกษตรกร และผู้ประกอบการท้องถิ่นเข้าสู่ระบบ",
    slug: "local-community-coffee",
  },
  {
    title: "Coffee Ecosystem",
    description:
      "สร้างพื้นที่เชื่อมต่อระหว่างนักวิ่ง ร้านกาแฟ และพันธมิตรทั่วประเทศ",
    slug: "coffee-ecosystem",
  },
];

export default function CoffeeSection() {
  return (
    <section className="w-full py-16 bg-gray-50">

      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-10">

          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Running Coffee Ecosystem
          </h2>

          <p className="mt-3 text-gray-600">
            กาแฟ ชุมชน และนักวิ่ง เชื่อมต่อเป็นระบบเดียวกัน
          </p>

        </div>

        <div className="grid md:grid-cols-3 gap-6">

          {coffeeFeatures.map((item) => (

            <Link
              key={item.slug}
              href={`/coffee/${item.slug}`}
              className="block rounded-2xl bg-white border border-gray-200 p-6 shadow-sm hover:border-blue-500 hover:shadow-lg transition-all duration-300"
            >

              <h3 className="text-xl font-semibold text-gray-900">
                {item.title}
              </h3>

              <p className="mt-3 text-gray-600 leading-relaxed">
                {item.description}
              </p>

              <div className="mt-6 text-blue-600 font-semibold">
                ดูรายละเอียด →
              </div>

            </Link>

          ))}

        </div>

        <Link
          href="/coffee/na-pupiang-americano-honey-craft-soda"
          className="block mt-10 rounded-2xl bg-white border border-gray-200 p-8 text-center hover:border-blue-500 hover:shadow-lg transition-all duration-300"
        >

          <h3 className="text-2xl font-bold text-gray-900">
            NA PUPIANG Americano Honey Craft Soda
          </h3>

          <p className="mt-3 text-gray-600">
            Product Partner สำหรับกิจกรรมนักวิ่งและ Community Platform
          </p>

          <div className="mt-6 flex justify-center gap-4">

            <span className="rounded-full bg-blue-600 px-8 py-3 text-white font-semibold">
              Discover Coffee Partner
            </span>

            <span className="rounded-full border border-blue-600 px-8 py-3 text-blue-600 font-semibold">
              ดูสินค้า
            </span>

          </div>

        </Link>

      </div>

    </section>
  );
}