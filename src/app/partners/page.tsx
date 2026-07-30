export default function PartnersPage() {
  const partners = [
    {
      name: "Na Pupiang Coffee",
      type: "Community Cafe",
      location: "Nan",
      benefit: "Runner Check-in Point",
    },
    {
      name: "Chiang Mai Running Hotel",
      type: "Hotel Partner",
      location: "Chiang Mai",
      benefit: "Runner Support",
    },
    {
      name: "Thailand Sport Sponsor",
      type: "National Sponsor",
      location: "Bangkok",
      benefit: "Challenge Prize",
    },
  ];

  return (
    <main className="min-h-screen p-8">
      <h1 className="text-3xl font-bold mb-6">
        Partner Ecosystem
      </h1>

      <div className="grid gap-4">
        {partners.map((partner) => (
          <div
            key={partner.name}
            className="border rounded-xl p-5"
          >
            <h2 className="text-xl font-bold">
              {partner.name}
            </h2>

            <p>Type : {partner.type}</p>
            <p>Location : {partner.location}</p>
            <p>Benefit : {partner.benefit}</p>
          </div>
        ))}
      </div>
    </main>
  );
}