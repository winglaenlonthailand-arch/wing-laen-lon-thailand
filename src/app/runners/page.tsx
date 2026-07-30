// FILE: src/app/runners/page.tsx

import RunnerCard from "@/components/RunnerCard";
import { runnerProfiles } from "@/data/runnerProfiles";

export default function RunnersPage() {
  const runners = runnerProfiles;

  return (
    <main className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-7xl mx-auto">

        <h1 className="text-3xl font-bold mb-2 text-gray-900">
          National Runner Database
        </h1>

        <p className="mb-6 text-gray-600">
          ระบบฐานข้อมูลนักวิ่ง WING LAEN LON THAILAND
        </p>

        <div className="grid gap-4">

          {runners.map((runner) => (
            <RunnerCard
              key={runner.id}
              id={String(runner.id)}
              name={runner.runnerName}
              province={runner.province}
              level={runner.level}
              distance={`${runner.totalDistance} km`}
            />
          ))}

        </div>

      </div>
    </main>
  );
}