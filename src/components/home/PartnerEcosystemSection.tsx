"use client";

import Link from "next/link";

const partnerGroups = [
  {
    title: "Sports Partner",
    description:
      "รองเท้านักกีฬา เสื้อผ้า อุปกรณ์วิ่ง และผลิตภัณฑ์สำหรับนักกีฬา",
    category: "กีฬา",
  },
  {
    title: "Health Partner",
    description:
      "เครื่องดื่มสุขภาพ โภชนาการ อาหารสำหรับนักวิ่ง และบริการสุขภาพ",
    category: "สุขภาพ",
  },
  {
    title: "Community Partner",
    description:
      "ธุรกิจท้องถิ่น การท่องเที่ยวเชิงกีฬา และกิจกรรมชุมชน",
    category: "ชุมชน",
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
            พื้นที่สำหรับพันธมิตรที่ต้องการร่วมเติบโตไปกับ
            {" "}WING LAEN LON THAILAND
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
            สมัครเข้าร่วมระบบ Partner
            เพื่อประชาสัมพันธ์สินค้าและบริการกับกลุ่มนักวิ่งไทย
          </p>

          <Link
            href="/partner/register"
            className="inline-block mt-6 rounded-full bg-blue-600 px-8 py-3 text-white font-semibold hover:bg-blue-700 transition"
          >
            สมัครเป็น Partner
          </Link>
        </div>

      </div>
    </section>
  );
}