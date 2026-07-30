"use client";

import { useEffect, useState } from "react";

export default function DashboardSection() {
  const [runnerCount, setRunnerCount] = useState(0);
  const [eventCount, setEventCount] = useState(0);
  const [provinceCount, setProvinceCount] = useState(0);

  useEffect(() => {
    async function loadData() {
      const runners = await fetch("/api/runners").then((res) => res.json());
      const events = await fetch("/api/events").then((res) => res.json());
      const provinces = await fetch("/api/provinces").then((res) => res.json());

      setRunnerCount(runners.length);
      setEventCount(events.length);
      setProvinceCount(provinces.length);
    }

    loadData();
  }, []);

  const dashboardData = [
    {
      icon: "🏃",
      value: runnerCount,
      title: "Total Runners",
      description: "จำนวนนักวิ่งในระบบ",
    },
    {
      icon: "🏅",
      value: eventCount,
      title: "Running Activities",
      description: "กิจกรรมวิ่งทั่วประเทศ",
    },
    {
      icon: "🗺️",
      value: provinceCount,
      title: "Active Provinces",
      description: "จังหวัดตัวอย่างในระบบ",
    },
    {
      icon: "🤖",
      value: "READY",
      title: "AI Engine",
      description: "พร้อมเชื่อม AI Platform",
    },
  ];

  return (
    <section className="bg-gray-100 py-16">
      <div className="mx-auto max-w-7xl px-6">
        <h2 className="mb-8 text-3xl font-bold">
          National Dashboard
        </h2>

        <div className="grid gap-6 md:grid-cols-4">
          {dashboardData.map((item) => (
            <div
              key={item.title}
              className="rounded-2xl bg-white p-6 shadow-sm"
            >
              <div className="text-4xl">{item.icon}</div>

              <div className="mt-4 text-4xl font-bold text-blue-600">
                {item.value}
              </div>

              <h3 className="mt-2 text-xl font-bold">
                {item.title}
              </h3>

              <p className="mt-2 text-gray-600">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}