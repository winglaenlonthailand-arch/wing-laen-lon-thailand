import { partnerAnalytics } from "@/data/partnerAnalytics";


export default function PartnerAnalyticsPage() {

  return (

    <main className="w-full min-h-screen bg-gray-50">

      <section className="max-w-7xl mx-auto px-6 py-16">


        <h1 className="text-4xl font-bold text-gray-900">

          Partner Analytics Dashboard

        </h1>


        <p className="mt-4 text-gray-600">

          ระบบวิเคราะห์ประสิทธิภาพ Partner Campaign

        </p>



        <div className="grid md:grid-cols-2 gap-6 mt-10">


          {partnerAnalytics.map(
            (item) => (

              <div
                key={item.id}
                className="bg-white rounded-2xl border border-gray-200 p-6"
              >

                <h2 className="text-2xl font-bold">

                  {item.partnerName}

                </h2>


                <div className="mt-4 space-y-2 text-gray-700">

                  <p>
                    Impressions:
                    {" "}
                    {item.impressions}
                  </p>

                  <p>
                    Clicks:
                    {" "}
                    {item.clicks}
                  </p>

                  <p>
                    Registrations:
                    {" "}
                    {item.registrations}
                  </p>

                </div>


              </div>

            )
          )}

        </div>


      </section>

    </main>

  );

}