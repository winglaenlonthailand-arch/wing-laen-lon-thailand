type ProvinceCardProps = {
  rank: number;
  code: string;
  name: string;
  runners: number;
  distance: string;
  level: string;
};

export default function ProvinceCard({
  rank,
  code,
  name,
  runners,
  distance,
  level,
}: ProvinceCardProps) {
  return (
    <div className="border rounded-xl p-5">
      <h2 className="text-xl font-semibold">
        #{rank} {name}
      </h2>

      <p>Code: {code}</p>
      <p>Runners: {runners}</p>
      <p>Distance: {distance}</p>
      <p>Level: {level}</p>
    </div>
  );
}
