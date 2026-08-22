// FILE: src/app/provinces/page.tsx

import ProvinceCard from "@/components/ProvinceCard";

import {
  getAllProvinces,
  getProvinceRunnerCount,
  getProvinceTotalDistance,
} from "@/services/provinceService";

export default function ProvinceRankingPage() {

  const provinces = getAllProvinces();

  return (

    <main className="min-h-screen bg-gray-50 p-8">

      <div className="mx-auto max-w-7xl">

        <h1 className="mb-2 text-4xl font-bold text-gray-900">
          National Province Ranking
        </h1>

        <p className="mb-8 text-gray-600">
          จังหวัดทั้งหมดในระบบ WING LAEN LON THAILAND
        </p>

        <div className="grid gap-4">

          {provinces.map((province, index) => (

            <ProvinceCard
              key={province.id}

              rank={index + 1}

              code={province.id.toUpperCase()}

              name={province.name}

              runners={getProvinceRunnerCount(province.slug)}

              distance={`${getProvinceTotalDistance(province.slug)} km`}

              level="Connected"

            />

          ))}

        </div>

      </div>

    </main>

  );

}
