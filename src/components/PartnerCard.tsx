type PartnerCardProps = {
  name: string;
  type: string;
  location: string;
  benefit: string;
};

export default function PartnerCard({
  name,
  type,
  location,
  benefit,
}: PartnerCardProps) {
  return (
    <div className="border rounded-xl p-5">
      <h2 className="text-xl font-bold">{name}</h2>

      <p>Type: {type}</p>
      <p>Location: {location}</p>
      <p>Benefit: {benefit}</p>
    </div>
  );
}