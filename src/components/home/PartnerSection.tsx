// FILE: src/components/home/PartnerSection.tsx

"use client";

import Link from "next/link";

const partners = [
  {
    name: "Running Community",
    description:
      "เชื่อมต่อกลุ่มนักวิ่ง ชมรม และเครือข่ายสุขภาพทั่วประเทศไทย",
    slug: "running-community",
  },
  {
    name: "Local Business",
    description:
      "เปิดพื้นที่ให้ร้านค้าและธุรกิจท้องถิ่นเข้าร่วมระบบ Ecosystem",
    slug: "local-business",
  },
  {
    name: "Sponsor Network",
    description:
      "สร้างพื้นที่สำหรับผู้สนับสนุนที่ต้องการเติบโตไปพร้อมนักวิ่งไทย",
    slug: "sponsor-network",
  },
];

export default function PartnerSection() {
  return (
    <section className="w-full py-16 bg-white">

      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-10">

          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Partner Network
          </h2>

          <p className="mt-3 text-gray-600">
            เชื่อมโยงพันธมิตรเพื่อสร้างระบบนิเวศนักวิ่งประเทศไทย
          </p>

        </div>

        <div className="grid md:grid-cols-3 gap-6">

          {partners.map((partner) => (

            <Link
              key={partner.slug}
              href={`/partner/${partner.slug}`}
              className="block rounded-2xl border border-gray-200 p-6 shadow-sm hover:border-blue-500 hover:shadow-lg transition-all duration-300"
            >

              <h3 className="text-xl font-semibold text-gray-900">
                {partner.name}
              </h3>

              <p className="mt-3 text-gray-600 leading-relaxed">
                {partner.description}
              </p>

              <div className="mt-6 flex gap-3">

                <span className="flex-1 rounded-full border border-blue-600 px-6 py-3 text-center text-blue-600 font-semibold hover:bg-blue-600 hover:text-white transition">
                  เข้าร่วมพันธมิตร
                </span>

                <span className="flex-1 rounded-full bg-gray-100 px-6 py-3 text-center text-gray-700 font-semibold hover:bg-gray-200 transition">
                  ดูรายละเอียด
                </span>

              </div>

            </Link>

          ))}

        </div>

      </div>

    </section>
  );
}
