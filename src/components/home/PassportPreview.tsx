"use client";

import Link from "next/link";

const passportFeatures = [
  {
    title: "Runner Identity",
    description: "ระบบสร้างตัวตนนักวิ่งดิจิทัลประจำตัว",
  },
  {
    title: "Running History",
    description: "บันทึกประวัติการวิ่งและกิจกรรมที่ผ่านมา",
  },
  {
    title: "Achievement",
    description: "สะสมความสำเร็จและเป้าหมายการวิ่ง",
  },
];

export default function PassportPreview() {
  return (
    <section className="w-full py-16 bg-gray-50">

      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-10">

          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Runner Passport
          </h2>

          <p className="mt-3 text-gray-600">
            Digital Identity สำหรับนักวิ่งประเทศไทย
          </p>

        </div>

        <div className="grid md:grid-cols-3 gap-6">

          {passportFeatures.map((item) => (

            <Link
              key={item.title}
              href="/passport"
              className="block rounded-2xl bg-white border border-gray-200 p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-blue-500 hover:shadow-lg"
            >

              <h3 className="text-xl font-semibold text-gray-900">
                {item.title}
              </h3>

              <p className="mt-3 text-gray-600">
                {item.description}
              </p>

            </Link>

          ))}

        </div>

        <div className="mt-10 text-center">

          <Link
            href="/signup"
            className="inline-block px-8 py-3 rounded-full bg-blue-600 text-white font-semibold hover:bg-blue-700 transition"
          >
            สร้าง Runner Passport
          </Link>

        </div>

      </div>

    </section>
  );
}