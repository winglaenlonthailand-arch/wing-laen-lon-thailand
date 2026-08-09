// FILE: src/app/runners/page.tsx

import RunnerCard from "@/components/RunnerCard";
import { PrismaClient } from "@/generated/prisma/client";
import { PrismaPg } from "@prisma/adapter-pg";

const adapter = new PrismaPg({
  connectionString: process.env.DATABASE_URL!,
});

const prisma = new PrismaClient({
  adapter,
});

export default async function RunnersPage() {
  const athletes = await prisma.athlete.findMany({
    orderBy: {
      createdAt: "desc",
    },
  });

  return (
    <main className="min-h-screen bg-white">
      <div className="mx-auto max-w-5xl px-4 py-10">

        <h1 className="mb-2 text-3xl font-bold text-gray-900">
          National Runner Database
        </h1>

        <p className="mb-6 text-gray-600">
          เธฃเธฐเธเธเธเธฒเธเธเนเธญเธกเธนเธฅเธเธฑเธเธงเธดเนเธ WING LAEN LON THAILAND
        </p>

        <div className="grid gap-4">
          {athletes.map((athlete) => (
            <RunnerCard
              key={athlete.id}
              id={athlete.athleteId}
              name={`${athlete.firstName} ${athlete.lastName}`}
              province="-"
              level={athlete.level}
              distance="0 km"
            />
          ))}
        </div>

      </div>
    </main>
  );
}
