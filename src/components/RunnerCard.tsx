import Link from "next/link";

type RunnerCardProps = {
  id: string;
  name: string;
  province: string;
  level: string;
  distance: string;
};

export default function RunnerCard({
  id,
  name,
  province,
  level,
  distance,
}: RunnerCardProps) {
  return (
    <Link
      href={`/runner/${id}`}
      className="block border rounded-xl p-5 hover:shadow-lg transition"
    >
      <h2 className="text-xl font-semibold">
        {name}
      </h2>

      <p>
        ID: {id}
      </p>

      <p>
        Province: {province}
      </p>

      <p>
        Level: {level}
      </p>

      <p>
        Distance: {distance}
      </p>
    </Link>
  );
}
