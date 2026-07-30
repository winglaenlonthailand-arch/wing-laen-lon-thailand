// FILE: src/app/provinces/[slug]/page.tsx

import Link from "next/link";
import { notFound } from "next/navigation";

import {
  getProvinceStatistics,
} from "@/services/provinceService";

type PageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export default async function ProvinceDetailPage({
  params,
}: PageProps) {

  const { slug } = await params;

  const data = getProvinceStatistics(slug);

  if (!data.province) {
    notFound();
  }

  return (

    <main className="min-h-screen bg-gray-50">

      <section className="border-b bg-white">

        <div className="mx-auto max-w-7xl px-6 py-10">

          <Link
            href="/provinces"
            className="text-blue-600 hover:underline"
          >
            ← กลับหน้าจังหวัด
          </Link>

          <h1 className="mt-5 text-5xl font-bold text-gray-900">
            {data.province.name}
          </h1>

          <p className="mt-3 text-gray-600">
            {data.province.region}
          </p>

        </div>

      </section>

      <section className="mx-auto max-w-7xl px-6 py-10">

        <div className="grid gap-6 md:grid-cols-3">

          <div className="rounded-2xl bg-white p-6 shadow-sm">

            <h3 className="text-lg font-semibold">
              Runner
            </h3>

            <p className="mt-3 text-4xl font-bold text-blue-600">
              {data.runnerCount}
            </p>

          </div>

          <div className="rounded-2xl bg-white p-6 shadow-sm">

            <h3 className="text-lg font-semibold">
              Total Distance
            </h3>

            <p className="mt-3 text-4xl font-bold text-green-600">
              {data.totalDistance} km
            </p>

          </div>

          <div className="rounded-2xl bg-white p-6 shadow-sm">

            <h3 className="text-lg font-semibold">
              Province Status
            </h3>

            <p className="mt-3 text-xl font-bold text-purple-600">
              ACTIVE
            </p>

          </div>

        </div>

        <div className="mt-10 rounded-2xl bg-white p-8 shadow-sm">

          <h2 className="text-2xl font-bold">
            Runner Passport
          </h2>

          <p className="mt-2 text-gray-600">
            สมาชิกที่อยู่ในจังหวัดนี้
          </p>

          <div className="mt-8 space-y-4">

            {data.runners.length === 0 && (

              <div className="rounded-xl border border-dashed p-8 text-center text-gray-500">

                ยังไม่มีสมาชิกในจังหวัดนี้

              </div>

            )}

            {data.runners.map((runner) => (

              <Link
                key={runner.id}
                href={`/runner/${runner.id}`}
                className="block rounded-xl border border-gray-200 p-5 hover:bg-blue-50 transition"
              >

                <h3 className="text-xl font-bold text-blue-700">
                  {runner.runnerName}
                </h3>

                <p className="mt-2 text-gray-600">
                  Passport ID : {runner.id}
                </p>

                <p className="text-gray-600">
                  Distance : {runner.totalDistance} KM
                </p>

                <p className="text-gray-600">
                  Level : {runner.level}
                </p>

              </Link>

            ))}

          </div>

        </div>

      </section>

    </main>

  );

}