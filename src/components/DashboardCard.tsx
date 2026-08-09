type DashboardCardProps = {
  title: string;
  value: string;
};

export default function DashboardCard({
  title,
  value,
}: DashboardCardProps) {
  return (
    <div className="border rounded-xl p-5">
      <h2 className="text-lg">
        {title}
      </h2>

      <p className="text-3xl font-bold">
        {value}
      </p>
    </div>
  );
}
