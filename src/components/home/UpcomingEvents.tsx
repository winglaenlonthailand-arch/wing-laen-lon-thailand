// FILE: src/components/home/UpcomingEvents.tsx

"use client";

import Link from "next/link";

const events = [
  {
    title: "Nan Mountain Run",
    location: "เธเธฑเธเธซเธงเธฑเธ”เธเนเธฒเธ",
    date: "2026",
    distance: "10 KM",
    slug: "nan-mountain-run",
  },
  {
    title: "Chiang Mai Trail Challenge",
    location: "เธเธฑเธเธซเธงเธฑเธ”เน€เธเธตเธขเธเนเธซเธกเน",
    date: "2026",
    distance: "21 KM",
    slug: "chiang-mai-trail-challenge",
  },
  {
    title: "Thailand AI Running Event",
    location: "เธเธฃเธฐเน€เธ—เธจเนเธ—เธข",
    date: "2026",
    distance: "Virtual Run",
    slug: "thailand-ai-running-event",
  },
];

export default function UpcomingEvents() {
  return (
    <section className="w-full py-16 bg-white">

      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-10">

          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Upcoming Events
          </h2>

          <p className="mt-3 text-gray-600">
            เธฃเธงเธกเธเธดเธเธเธฃเธฃเธกเธงเธดเนเธเธ—เธตเนเน€เธเธทเนเธญเธกเธ•เนเธญเธเธฑเธ WING LAEN LON THAILAND
          </p>

        </div>

        <div className="grid md:grid-cols-3 gap-6">

          {events.map((event) => (

            <Link
              key={event.slug}
              href={`/events/${event.slug}`}
              className="block rounded-2xl border border-gray-200 p-6 shadow-sm bg-white hover:border-blue-500 hover:shadow-lg transition-all duration-300"
            >

              <h3 className="text-xl font-semibold text-gray-900">
                {event.title}
              </h3>

              <div className="mt-4 space-y-2 text-gray-600">

                <p>
                  ๐“ {event.location}
                </p>

                <p>
                  ๐“… {event.date}
                </p>

                <p>
                  ๐ {event.distance}
                </p>

              </div>

              <div className="mt-6 flex gap-3">

                <span className="flex-1 rounded-full bg-blue-600 px-6 py-3 text-center text-white font-semibold">
                  เธ”เธนเธฃเธฒเธขเธฅเธฐเน€เธญเธตเธขเธ”
                </span>

                <span className="flex-1 rounded-full border border-blue-600 px-6 py-3 text-center text-blue-600 font-semibold">
                  เธชเธกเธฑเธเธฃเธเธดเธเธเธฃเธฃเธก
                </span>

              </div>

            </Link>

          ))}

        </div>

      </div>

    </section>
  );
}
