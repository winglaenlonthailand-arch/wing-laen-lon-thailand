import { runningActivities } from "@/data/runningActivities";


export default function RunningActivitySection() {

  return (

    <section className="w-full bg-white py-16">

      <div className="max-w-7xl mx-auto px-6">


        <h2 className="text-4xl font-bold text-gray-900 text-center">

          Running Activity History

        </h2>


        <p className="mt-4 text-center text-gray-600">

          ประวัติการวิ่งและกิจกรรมของ Runner

        </p>



        <div className="grid md:grid-cols-3 gap-6 mt-10">


          {runningActivities.map(
            (activity) => (

              <div
                key={activity.id}
                className="rounded-2xl border border-gray-200 p-6 shadow-sm"
              >

                <h3 className="text-xl font-bold text-gray-900">

                  {activity.eventName}

                </h3>


                <p className="mt-3 text-gray-600">

                  Type:
                  {" "}
                  {activity.activityType}

                </p>


                <p className="mt-2 text-gray-600">

                  Distance:
                  {" "}
                  {activity.distance}
                  {" "}
                  KM

                </p>


                <p className="mt-2 text-gray-600">

                  Time:
                  {" "}
                  {activity.duration}

                </p>


                <p className="mt-2 text-gray-600">

                  Province:
                  {" "}
                  {activity.province}

                </p>


              </div>

            )
          )}


        </div>


      </div>

    </section>

  );

}