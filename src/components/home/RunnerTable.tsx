"use client";

import { useEffect, useState } from "react";

type Runner = {
  id: string;
  name: string;
  province: string;
  level: string;
  totalDistance: number;
  eventsJoined: number;
};

export default function RunnerTable() {
  const [runners, setRunners] = useState<Runner[]>([]);

  useEffect(() => {
    async function load() {
      const response = await fetch("/api/runners");
      const data = await response.json();
      setRunners(data);
    }

    load();
  }, []);

  return (
    <section className="mx-auto max-w-7xl px-6 py-16">
      <h2 className="mb-2 text-3xl font-bold">
        National Runner Database
      </h2>

      <p className="mb-8 text-gray-600">
        ข้อมูลนักวิ่งตัวอย่างจาก API
      </p>

      <div className="overflow-hidden rounded-2xl border shadow">
        <table className="w-full">
          <thead className="bg-blue-600 text-white">
            <tr>
              <th className="p-4 text-left">Runner</th>
              <th className="p-4 text-left">Province</th>
              <th className="p-4 text-left">Level</th>
              <th className="p-4 text-left">Distance</th>
              <th className="p-4 text-left">Events</th>
            </tr>
          </thead>

          <tbody>
            {runners.map((runner) => (
              <tr
                key={runner.id}
                className="border-b transition hover:bg-gray-50"
              >
                <td className="p-4 font-semibold">
                  <a
                    href={`/runner/${runner.id}`}
                    className="text-blue-600 hover:underline"
                  >
                    {runner.name}
                  </a>
                </td>

                <td className="p-4">{runner.province}</td>

                <td className="p-4">{runner.level}</td>

                <td className="p-4">{runner.totalDistance} km</td>

                <td className="p-4">{runner.eventsJoined}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}