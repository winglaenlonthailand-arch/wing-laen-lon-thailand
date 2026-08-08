import { notFound } from "next/navigation";
import { PrismaClient } from "@/generated/prisma/client";
import { PrismaPg } from "@prisma/adapter-pg";

const adapter = new PrismaPg({
  connectionString: process.env.DATABASE_URL!,
});

const prisma = new PrismaClient({ adapter });

interface RunnerDetailPageProps {
  params: Promise<{
    id: string;
  }>;
}

export default async function RunnerDetailPage({
  params,
}: RunnerDetailPageProps) {
  const { id } = await params;

  const athlete = await prisma.athlete.findUnique({
    where: {
      athleteId: id,
    },
  });

  if (!athlete) {
    notFound();
  }

  const sports = Array.isArray(athlete.sports)
    ? athlete.sports
    : [];

  return (
    <main className="min-h-screen bg-gray-50">
      <section className="mx-auto max-w-5xl px-6 py-16">
        <div className="rounded-2xl border border-gray-200 bg-white p-10 shadow">

          <h1 className="text-4xl font-bold text-gray-900">
            {athlete.firstName} {athlete.lastName}
          </h1>

          <p className="mt-3 text-gray-500">
            Runner Passport
          </p>

          <div className="mt-10 grid gap-8 md:grid-cols-2">

            <div>
              <h2 className="text-lg font-semibold">
                Athlete ID
              </h2>
              <p className="mt-2 text-gray-700">
                {athlete.athleteId}
              </p>
            </div>

            <div>
              <h2 className="text-lg font-semibold">
                Nickname
              </h2>
              <p className="mt-2 text-gray-700">
                {athlete.nickname || "-"}
              </p>
            </div>

            <div>
              <h2 className="text-lg font-semibold">
                Email
              </h2>
              <p className="mt-2 text-gray-700">
                {athlete.email}
              </p>
            </div>

            <div>
              <h2 className="text-lg font-semibold">
                Level
              </h2>
              <p className="mt-2 text-gray-700">
                {athlete.level}
              </p>
            </div>

            <div>
              <h2 className="text-lg font-semibold">
                XP
              </h2>
              <p className="mt-2 text-gray-700">
                {athlete.xp}
              </p>
            </div>

            <div>
              <h2 className="text-lg font-semibold">
                Status
              </h2>
              <p className="mt-2 text-gray-700">
                {athlete.status}
              </p>
            </div>

          </div>

          <div className="mt-10">
            <h2 className="text-xl font-bold">
              Sports
            </h2>

            <div className="mt-4 flex flex-wrap gap-3">
              {sports.length > 0 ? (
                sports.map((sport) => (
                  <span
                    key={String(sport)}
                    className="rounded-full bg-blue-100 px-4 py-2 text-blue-700"
                  >
                    {String(sport)}
                  </span>
                ))
              ) : (
                <span className="text-gray-500">
                  No sports selected
                </span>
              )}
            </div>
          </div>

        </div>
      </section>
    </main>
  );
}