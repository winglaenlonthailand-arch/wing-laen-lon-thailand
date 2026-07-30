type Props = {
  title: string;
  subtitle?: string;
};

export default function SectionTitle({
  title,
  subtitle,
}: Props) {
  return (
    <>
      <h2 className="text-3xl font-bold">{title}</h2>

      {subtitle && (
        <p className="mt-3 max-w-3xl text-gray-600">
          {subtitle}
        </p>
      )}
    </>
  );
}