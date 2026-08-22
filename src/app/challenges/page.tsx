import ChallengeCard from "@/components/ChallengeCard";

const challenges = [
  {
    name: "Thailand Running Challenge 2027",
    province: "ทั่วประเทศ",
    level: "National",
    reward: "500,000 THB",
    status: "Open",
  },
  {
    name: "Nan Community Run",
    province: "น่าน",
    level: "Province",
    reward: "50,000 THB",
    status: "Active",
  },
  {
    name: "Chiang Mai Mountain Challenge",
    province: "เชียงใหม่",
    level: "Advanced",
    reward: "100,000 THB",
    status: "Upcoming",
  },
];

export default function ChallengesPage() {
  return (
    <main className="min-h-screen p-8">
      <h1 className="text-3xl font-bold mb-6">
        National Challenge Network
      </h1>

      <div className="grid gap-4">
        {challenges.map((challenge) => (
          <ChallengeCard
            key={challenge.name}
            name={challenge.name}
            province={challenge.province}
            level={challenge.level}
            reward={challenge.reward}
            status={challenge.status}
          />
        ))}
      </div>
    </main>
  );
}
