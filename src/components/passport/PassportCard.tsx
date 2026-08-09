type Runner = {
  id: string;
  name: string;
  province: string;
  provinceCode?: string;
  postcode?: string;
  level: string;
  totalDistance: number;
  eventsJoined: number;
};

type PassportCardProps = {
  runner: Runner;
};

export default function PassportCard({
  runner,
}: PassportCardProps) {
  return (
    <section className="mx-auto max-w-5xl px-6 py-16">

      <div className="overflow-hidden rounded-3xl border bg-white shadow-xl">

        <div className="bg-blue-700 px-8 py-6 text-white">

          <h1 className="text-3xl font-bold">
            WING LAEN LON THAILAND
          </h1>

          <p className="mt-2 text-blue-100">
            National Runner Passport
          </p>

        </div>

        <div className="grid gap-10 p-10 md:grid-cols-3">

          <div className="flex flex-col items-center">

            <div className="flex h-40 w-40 items-center justify-center rounded-full bg-gray-200 text-6xl">
              ๐
            </div>

            <p className="mt-4 text-gray-500">
              Profile Photo
            </p>

            <div className="mt-6 rounded-full bg-green-100 px-4 py-2 text-green-700 font-semibold">
              ACTIVE MEMBER
            </div>

          </div>

          <div className="md:col-span-2">

            <h2 className="text-4xl font-bold">
              {runner.name}
            </h2>

            <p className="mt-3 text-sm text-gray-500">
              National Runner ID
            </p>

            <p className="font-mono text-2xl font-bold text-blue-700">
              {runner.id}
            </p>

            <div className="mt-8 grid gap-5 md:grid-cols-2">

              <div className="rounded-xl border p-5">
                <p className="text-gray-500">Province</p>

                <h3 className="text-xl font-bold">
                  {runner.province}
                </h3>

                <p className="text-sm text-gray-400">
                  {runner.provinceCode}
                </p>
              </div>

              <div className="rounded-xl border p-5">
                <p className="text-gray-500">Level</p>

                <h3 className="text-xl font-bold">
                  {runner.level}
                </h3>
              </div>

              <div className="rounded-xl border p-5">
                <p className="text-gray-500">
                  Total Distance
                </p>

                <h3 className="text-xl font-bold">
                  {runner.totalDistance} km
                </h3>
              </div>

              <div className="rounded-xl border p-5">
                <p className="text-gray-500">
                  Events Joined
                </p>

                <h3 className="text-xl font-bold">
                  {runner.eventsJoined}
                </h3>
              </div>

              <div className="rounded-xl border p-5">
                <p className="text-gray-500">
                  Member Since
                </p>

                <h3 className="text-xl font-bold">
                  2026
                </h3>
              </div>

              <div className="rounded-xl border p-5">
                <p className="text-gray-500">
                  Passport Status
                </p>

                <h3 className="text-xl font-bold text-green-600">
                  ACTIVE
                </h3>
              </div>

            </div>

            <div className="mt-10 rounded-2xl border-2 border-dashed p-8 text-center">

              <div className="text-6xl">
                โ–ฃ
              </div>

              <p className="mt-4 font-semibold">
                QR CODE
              </p>

              <p className="mt-2 font-mono text-blue-700">
                {runner.id}
              </p>

              <p className="mt-3 text-sm text-gray-500">
                QR Code Coming Soon
              </p>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}
