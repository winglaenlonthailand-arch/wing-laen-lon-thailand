// FILE: src/components/home/ProvinceRanking.tsx

"use client";

import Link from "next/link";

const provinces = [
  {
    rank: 1,
    name: "เชียงใหม่",
    runners: "1,250",
    distance: "12,500 km",
    slug: "chiang-mai",
  },
  {
    rank: 2,
    name: "น่าน",
    runners: "980",
    distance: "9,800 km",
    slug: "nan",
  },
  {
    rank: 3,
    name: "กรุงเทพมหานคร",
    runners: "850",
    distance: "8,500 km",
    slug: "bangkok",
  },
];

export default function ProvinceRanking() {
  return (
    <section className="w-full py-16 bg-gray-50">

      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-10">

          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Province Ranking
          </h2>

          <p className="mt-3 text-gray-600">
            อันดับจังหวัดจากกิจกรรมการวิ่งทั่วประเทศไทย
          </p>

        </div>


        <div className="overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm">


          <div className="grid grid-cols-4 gap-4 px-6 py-4 bg-gray-100 font-semibold text-gray-700">

            <div>
              อันดับ
            </div>

            <div>
              จังหวัด
            </div>

            <div>
              นักวิ่ง
            </div>

            <div>
              ระยะทาง
            </div>

          </div>



          {provinces.map((province) => (

            <Link
              key={province.rank}
              href={`/province/${province.slug}`}
              className="grid grid-cols-4 gap-4 px-6 py-5 border-t border-gray-100 hover:bg-blue-50 transition"
            >

              <div className="font-bold text-blue-600">

                #{province.rank}

              </div>



              <div className="text-gray-900 font-medium">

                {province.name}

              </div>



              <div className="text-gray-700">

                {province.runners}

              </div>



              <div className="text-gray-700">

                {province.distance}

              </div>


            </Link>

          ))}


        </div>


      </div>


    </section>
  );
}