import RunnerCard from "@/components/RunnerCard";
import { PrismaClient } from "@/generated/prisma/client";
import { PrismaPg } from "@prisma/adapter-pg";

export const dynamic = "force-dynamic";
export const runtime = "nodejs";

const connectionString = process.env.DATABASE_URL;

if (!connectionString) {
  throw new Error("DATABASE_URL is not configured");
}

const adapter = new PrismaPg({
  connectionString,
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
    <main className="min-h-screen bg-gray-50">
      <div className="mx-auto max-w-6xl px-4 py-10">
        <h1 className="mb-2 text-3xl font-bold text-gray-900">
          National Runner Database
        </h1>

        <p className="mb-6 text-gray-600">
          ฐานข้อมูลนักวิ่ง WING LAEN LON THAILAND
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