"use client";

import { partnerCampaigns } from "@/data/partnerCampaigns";

export default function PartnerCampaignPage() {
  return (
    <main className="w-full min-h-screen bg-gray-50">

      <section className="max-w-7xl mx-auto px-6 py-16">

        <div className="mb-10">

          <h1 className="text-4xl font-bold text-gray-900">
            Partner Campaign Dashboard
          </h1>

          <p className="mt-3 text-gray-600">
            ระบบจัดการพื้นที่ประชาสัมพันธ์สำหรับ Partner
            ของ WING LAEN LON THAILAND
          </p>

        </div>


        <div className="grid gap-6">

          {partnerCampaigns.map((campaign) => (

            <div
              key={campaign.id}
              className="bg-white rounded-2xl border border-gray-200 p-6 shadow-sm"
            >

              <div className="flex flex-col md:flex-row md:justify-between gap-4">

                <div>

                  <h2 className="text-2xl font-bold text-gray-900">
                    {campaign.partnerName}
                  </h2>

                  <p className="mt-2 text-gray-600">
                    Category: {campaign.category}
                  </p>

                  <p className="mt-2 text-gray-600">
                    Position: {campaign.position}
                  </p>

                </div>


                <div>

                  <span className="inline-block rounded-full bg-blue-100 px-4 py-2 text-blue-700 font-semibold">
                    {campaign.status}
                  </span>

                </div>

              </div>



              <div className="mt-6 grid md:grid-cols-3 gap-4">

                <div>
                  <p className="text-sm text-gray-500">
                    Duration
                  </p>

                  <p className="font-semibold text-gray-900">
                    {campaign.durationDays} Days
                  </p>
                </div>


                <div>
                  <p className="text-sm text-gray-500">
                    Start Date
                  </p>

                  <p className="font-semibold text-gray-900">
                    {campaign.startDate}
                  </p>
                </div>


                <div>
                  <p className="text-sm text-gray-500">
                    End Date
                  </p>

                  <p className="font-semibold text-gray-900">
                    {campaign.endDate}
                  </p>
                </div>

              </div>



              <p className="mt-6 text-gray-600">
                {campaign.description}
              </p>


            </div>

          ))}

        </div>


      </section>

    </main>
  );
}