type FeatureCardProps = {
  icon: string;
  title: string;
  description: string;
};

export default function FeatureCard({
  icon,
  title,
  description,
}: FeatureCardProps) {
  return (
    <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-2 hover:shadow-xl cursor-pointer">
      <div className="mb-4 text-4xl">{icon}</div>

      <h3 className="text-xl font-bold">{title}</h3>

      <p className="mt-3 text-gray-600">
        {description}
      </p>
    </div>
  );
}
