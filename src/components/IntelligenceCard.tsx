type IntelligenceCardProps = {
  title: string;
  value: string;
};

export default function IntelligenceCard({
  title,
  value,
}: IntelligenceCardProps) {
  return (
    <div className="border rounded-xl p-5">
      <h2 className="text-lg font-semibold">
        {title}
      </h2>

      <p className="mt-2">
        {value}
      </p>
    </div>
  );
}