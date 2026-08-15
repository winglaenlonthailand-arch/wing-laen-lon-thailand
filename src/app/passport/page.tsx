import PassportCard from "@/components/passport/PassportCard";
import { PrismaClient } from "@/generated/prisma/client";
import { PrismaPg } from "@prisma/adapter-pg";

export const dynamic = "force-dynamic";

const databaseUrl = process.env.DATABASE_URL;

if (!databaseUrl) {
  throw new Error("DATABASE_URL is not configured");
}

const adapter = new PrismaPg({
  connectionString: databaseUrl,
});

const prisma = new PrismaClient({
  adapter,
});

export default async function PassportPage() {
  const athlete = await prisma.athlete.findFirst({
    where: {
      emailVerified: true,
      status: "active",
    },
    orderBy: {
      createdAt: "desc",
    },
  });

  if (!athlete) {
    return (
      <main className="bg-gray-100 min-h-screen py-10">
        <div className="mx-auto max-w-3xl rounded-2xl bg-white p-8 text-center shadow">
          <h1 className="text-2xl font-bold">
            Athlete Passport
          </h1>

          <p className="mt-3 text-gray-600">
            ยังไม่มีสมาชิกที่ยืนยันอีเมลแล้ว
          </p>
        </div>
      </main>
    );
  }

  const runner = {
    id: athlete.athleteId,
    name: `${athlete.firstName} ${athlete.lastName}`,
    province: "ยังไม่ได้ระบุ",
    provinceCode: "",
    postcode: "",
    level: athlete.level,
    totalDistance: 0,
    eventsJoined: 0,
  };

  return (
    <main className="bg-gray-100 min-h-screen py-10">
      <PassportCard runner={runner} />
    </main>
  );
}