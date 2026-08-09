import Link from "next/link";

import { runnerProfiles } from "@/data/runnerProfiles";

export default function DashboardPreview() {

  const runner = runnerProfiles[0];

  return (

    <section className="w-full bg-gray-50 py-16">

      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-10">

          <h2 className="text-4xl font-bold text-gray-900">
            Runner Dashboard
          </h2>

          <p className="mt-4 text-gray-600">
            เธฃเธฐเธเธเธเนเธญเธกเธนเธฅเธเธฑเธเธงเธดเนเธเธชเนเธงเธเธเธธเธเธเธฅ เธเธญเธ WING LAEN LON THAILAND
          </p>

        </div>


        <div className="bg-white rounded-2xl border border-gray-200 p-8 shadow-sm">


          <div className="grid md:grid-cols-4 gap-6">


            <Link
              href={`/runner/${runner.id}`}
              className="hover:text-blue-600 transition"
            >

              <p className="text-sm text-gray-500">
                Runner
              </p>

              <h3 className="text-xl font-bold text-gray-900">
                {runner.runnerName}
              </h3>

            </Link>



            <Link
              href="/province"
              className="hover:text-blue-600 transition"
            >

              <p className="text-sm text-gray-500">
                Province
              </p>

              <h3 className="text-xl font-bold text-gray-900">
                {runner.province}
              </h3>

            </Link>



            <Link
              href={`/runner/${runner.id}`}
              className="hover:text-blue-600 transition"
            >

              <p className="text-sm text-gray-500">
                Level
              </p>

              <h3 className="text-xl font-bold text-gray-900">
                {runner.level}
              </h3>

            </Link>



            <Link
              href={`/runner/${runner.id}`}
              className="hover:text-blue-600 transition"
            >

              <p className="text-sm text-gray-500">
                Distance
              </p>

              <h3 className="text-xl font-bold text-gray-900">
                {runner.totalDistance} KM
              </h3>

            </Link>


          </div>



          <div className="mt-8 grid md:grid-cols-2 gap-6">



            <Link
              href="/activities"
              className="rounded-xl bg-gray-50 p-5 hover:shadow-md transition"
            >

              <h4 className="font-semibold text-gray-900">
                Running Activities
              </h4>

              <p className="mt-2 text-gray-600">
                เน€เธเนเธฒเธฃเนเธงเธกเธเธดเธเธเธฃเธฃเธกเนเธฅเนเธง {runner.totalEvents} เธฃเธฒเธขเธเธฒเธฃ
              </p>

            </Link>




            <Link
              href={`/runner/${runner.id}`}
              className="rounded-xl bg-gray-50 p-5 hover:shadow-md transition"
            >

              <h4 className="font-semibold text-gray-900">
                Runner Interest
              </h4>


              <div className="mt-3 flex flex-wrap gap-2">


                {runner.favoriteCategory.map((item) => (

                  <span
                    key={item}
                    className="rounded-full bg-blue-100 px-3 py-1 text-sm text-blue-700"
                  >

                    {item}

                  </span>

                ))}


              </div>


            </Link>


          </div>



          <div className="mt-8 text-center">


            <Link
              href={`/runner/${runner.id}`}
              className="inline-flex rounded-full bg-blue-600 px-8 py-3 text-white font-semibold hover:bg-blue-700 transition"
            >

              เน€เธเธดเธ” Runner Profile

            </Link>


          </div>



        </div>


      </div>


    </section>

  );

}
