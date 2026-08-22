const activities = [
  {
    icon: "🏃",
    title: "Running Events",
    description: "รวมกิจกรรมวิ่งทั่วประเทศไทย",
  },
  {
    icon: "🏆",
    title: "Marathon Network",
    description: "เชื่อมโยงสนามวิ่งและนักวิ่ง",
  },
  {
    icon: "👥",
    title: "Runner Community",
    description: "สร้างเครือข่ายนักวิ่งทั่วประเทศ",
  },
];

export default function RunningSection() {
  return (
    <section className="bg-gray-50 py-16">
      <div className="mx-auto max-w-7xl px-6">
        <h2 className="mb-8 text-3xl font-bold">
          Running Activity Network
        </h2>

        <div className="grid gap-6 md:grid-cols-3">
          {activities.map((activity) => (
            <div
              key={activity.title}
              className="rounded-2xl border bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
            >
              <div className="text-4xl">
                {activity.icon}
              </div>

              <h3 className="mt-4 text-xl font-bold">
                {activity.title}
              </h3>

              <p className="mt-3 text-gray-600">
                {activity.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}