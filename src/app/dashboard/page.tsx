import DashboardCard from "@/components/DashboardCard";
import IntelligenceCard from "@/components/IntelligenceCard";

async function getDashboard() {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_APP_URL || "http://localhost:3000"}/api/dashboard`,
    {
      cache: "no-store",
    }
  );

  if (!res.ok) {
    throw new Error("Failed to load dashboard data");
  }

  return res.json();
}

async function getIntelligence() {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_APP_URL || "http://localhost:3000"}/api/intelligence`,
    {
      cache: "no-store",
    }
  );

  if (!res.ok) {
    throw new Error("Failed to load intelligence data");
  }

  return res.json();
}

export default async function DashboardPage() {
  const data = await getDashboard();
  const ai = await getIntelligence();

  const stats = [
    {
      title: "Total Runners",
      value: data.totalRunners,
    },
    {
      title: "Active Provinces",
      value: data.activeProvinces,
    },
    {
      title: "Total Events",
      value: data.totalEvents,
    },
    {
      title: "Running Distance",
      value: data.totalDistance,
    },
  ];

  return (
    <main className="min-h-screen p-8">
      <h1 className="text-3xl font-bold mb-6">
        National Runner Dashboard
      </h1>

      <div className="grid gap-4">
        {stats.map((stat) => (
          <DashboardCard
            key={stat.title}
            title={stat.title}
            value={String(stat.value)}
          />
        ))}
      </div>

      <h2 className="text-2xl font-bold mt-8 mb-4">
        AI Running Intelligence
      </h2>

      <div className="grid gap-4">
        <IntelligenceCard
          title="Top Province"
          value={ai.topProvince}
        />

        <IntelligenceCard
          title="Fastest Growing Province"
          value={ai.fastestGrowingProvince}
        />

        <IntelligenceCard
          title="Active Challenge"
          value={ai.activeChallenge}
        />

        <IntelligenceCard
          title="AI Recommendation"
          value={ai.aiRecommendation}
        />
      </div>

      <p className="mt-6 font-semibold">
        {data.status}
      </p>
    </main>
  );
}