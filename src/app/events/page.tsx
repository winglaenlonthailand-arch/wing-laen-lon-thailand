// FILE: src/app/events/page.tsx

import EventCard from "@/components/EventCard";

import { runningEvents } from "@/data/runningEvents";


export default function EventsPage() {


  const events = runningEvents;


  return (

    <main className="min-h-screen bg-gray-50 p-8">


      <div className="max-w-7xl mx-auto">


        <h1 className="text-3xl font-bold mb-2 text-gray-900">
          National Event Network
        </h1>


        <p className="mb-6 text-gray-600">
          ระบบกิจกรรมวิ่ง WING LAEN LON THAILAND
        </p>



        <div className="grid gap-4">


          {events.map((event) => (


            <EventCard

              key={event.id}

              name={event.name}

              province={event.province}

              date={event.date}

              runners={event.runners}

              level={event.level}

            />


          ))}


        </div>


      </div>


    </main>

  );

}