import { runnerProfiles } from "@/data/runnerProfiles";

interface RunnerDetailPageProps {
  params: Promise<{
    id: string;
  }>;
}

export default async function RunnerDetailPage({
  params,
}: RunnerDetailPageProps) {
  const { id } = await params;

  const runner = runnerProfiles.find(
    (item) => item.id === Number(id)
  );

  if (!runner) {
    return (
      <main className="min-h-screen flex items-center justify-center">
        <h1 className="text-3xl font-bold">
          Runner Not Found
        </h1>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-gray-50">

      <section className="max-w-5xl mx-auto px-6 py-16">

        <div className="bg-white rounded-2xl shadow border border-gray-200 p-10">

          <h1 className="text-4xl font-bold text-gray-900">
            {runner.runnerName}
          </h1>

          <p className="mt-3 text-gray-500">
            Runner Profile
          </p>

          <div className="grid md:grid-cols-2 gap-8 mt-10">

            <div>

              <h2 className="text-lg font-semibold">
                จังหวัด
              </h2>

              <p className="mt-2 text-gray-700">
                {runner.province}
              </p>

            </div>

            <div>

              <h2 className="text-lg font-semibold">
                Level
              </h2>

              <p className="mt-2 text-gray-700">
                {runner.level}
              </p>

            </div>

            <div>

              <h2 className="text-lg font-semibold">
                ระยะทางสะสม
              </h2>

              <p className="mt-2 text-gray-700">
                {runner.totalDistance} KM
              </p>

            </div>

            <div>

              <h2 className="text-lg font-semibold">
                กิจกรรมทั้งหมด
              </h2>

              <p className="mt-2 text-gray-700">
                {runner.totalEvents} Events
              </p>

            </div>

          </div>

          <div className="mt-10">

            <h2 className="text-xl font-bold">
              Runner Interests
            </h2>

            <div className="flex flex-wrap gap-3 mt-4">

              {runner.favoriteCategory.map((item) => (

                <span
                  key={item}
                  className="bg-blue-100 text-blue-700 rounded-full px-4 py-2"
                >
                  {item}
                </span>

              ))}

            </div>

          </div>

        </div>

      </section>

    </main>
  );
}