const provinces = [
  "เน€เธเธตเธขเธเนเธซเธกเน",
  "เน€เธเธตเธขเธเธฃเธฒเธข",
  "เธเนเธฒเธ",
  "เธเธฃเธธเธเน€เธ—เธเธกเธซเธฒเธเธเธฃ",
  "เธ เธนเน€เธเนเธ•",
  "เธเธญเธเนเธเนเธ",
];

export default function ProvinceSection() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-16">

      <h2 className="mb-8 text-3xl font-bold">
        Thailand Province Intelligence
      </h2>

      <div className="grid gap-6 md:grid-cols-3">

        {provinces.map((province) => (
          <div
            key={province}
            className="rounded-xl border bg-white p-6 shadow-sm hover:shadow-lg"
          >
            <h3 className="text-xl font-semibold">
              {province}
            </h3>

            <p className="mt-3 text-gray-600">
              Province Master Database
            </p>
          </div>
        ))}

      </div>

    </section>
  );
}
