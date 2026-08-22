const passportData = [
  {
    icon: "🪪",
    title: "Runner ID",
    description: "ตัวตนนักวิ่งระดับประเทศ",
  },
  {
    icon: "🏃",
    title: "Running History",
    description: "บันทึกประสบการณ์และระยะทางการวิ่ง",
  },
  {
    icon: "🏆",
    title: "Achievement",
    description: "ผลงานและความสำเร็จของนักวิ่ง",
  },
  {
    icon: "🌐",
    title: "Community Level",
    description: "การเชื่อมโยงกับชุมชนนักวิ่ง",
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
          มาตรฐานตัวตนนักวิ่ง เพื่อเชื่อมโยงข้อมูล สุขภาพ กิจกรรม
          และประสบการณ์การวิ่งในประเทศไทย
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