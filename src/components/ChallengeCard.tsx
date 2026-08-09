type ChallengeCardProps = {
  name: string;
  province: string;
  level: string;
  reward: string;
  status: string;
};

export default function ChallengeCard({
  name,
  province,
  level,
  reward,
  status,
}: ChallengeCardProps) {
  return (
    <div className="border rounded-xl p-5">
      <h2 className="text-xl font-semibold">
        {name}
      </h2>

      <p>Province: {province}</p>
      <p>Level: {level}</p>
      <p>Reward: {reward}</p>
      <p>Status: {status}</p>
    </div>
  );
}
