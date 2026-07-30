type EventCardProps = {
  name: string;
  province: string;
  date: string;
  runners: number;
  level: string;
};

export default function EventCard({
  name,
  province,
  date,
  runners,
  level,
}: EventCardProps) {
  return (
    <div className="border rounded-xl p-5">
      <h2 className="text-xl font-semibold">
        {name}
      </h2>

      <p>Province: {province}</p>
      <p>Date: {date}</p>
      <p>Runners: {runners}</p>
      <p>Level: {level}</p>
    </div>
  );
}