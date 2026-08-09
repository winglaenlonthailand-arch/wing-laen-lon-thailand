const passportData = [
  {
    icon: "๐”",
    title: "Runner ID",
    description: "เธ•เธฑเธงเธ•เธเธเธฑเธเธงเธดเนเธเธฃเธฐเธ”เธฑเธเธเธฃเธฐเน€เธ—เธจ",
  },
  {
    icon: "๐",
    title: "Running History",
    description: "เธเธฑเธเธ—เธถเธเธเธฃเธฐเธชเธเธเธฒเธฃเธ“เนเนเธฅเธฐเธฃเธฐเธขเธฐเธ—เธฒเธเธเธฒเธฃเธงเธดเนเธ",
  },
  {
    icon: "๐…",
    title: "Achievement",
    description: "เธเธฅเธเธฒเธเนเธฅเธฐเธเธงเธฒเธกเธชเธณเน€เธฃเนเธเธเธญเธเธเธฑเธเธงเธดเนเธ",
  },
  {
    icon: "๐",
    title: "Community Level",
    description: "เธเธฒเธฃเน€เธเธทเนเธญเธกเนเธขเธเธเธฑเธเธเธธเธกเธเธเธเธฑเธเธงเธดเนเธ",
  },
];

export default function RunnerPassportSection() {
  return (
    <section className="bg-white py-16">

      <div className="mx-auto max-w-7xl px-6">

        <h2 className="mb-8 text-3xl font-bold">
          Runner Passport
        </h2>

        <p className="mb-10 max-w-3xl text-gray-600">
          เธกเธฒเธ•เธฃเธเธฒเธเธ•เธฑเธงเธ•เธเธเธฑเธเธงเธดเนเธ
          เน€เธเธทเนเธญเน€เธเธทเนเธญเธกเนเธขเธเธเนเธญเธกเธนเธฅ เธชเธธเธเธ เธฒเธ เธเธดเธเธเธฃเธฃเธก
          เนเธฅเธฐเธเธฃเธฐเธชเธเธเธฒเธฃเธ“เนเธเธฒเธฃเธงเธดเนเธเนเธเธเธฃเธฐเน€เธ—เธจเนเธ—เธข
        </p>

        <div className="grid gap-6 md:grid-cols-4">

          {passportData.map((item) => (
            <div
              key={item.title}
              className="rounded-2xl border bg-gray-50 p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
            >

              <div className="text-4xl">
                {item.icon}
              </div>

              <h3 className="mt-4 text-xl font-bold">
                {item.title}
              </h3>

              <p className="mt-3 text-gray-600">
                {item.description}
              </p>

            </div>
          ))}

        </div>

      </div>

    </section>
  );
}
