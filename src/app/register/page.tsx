"use client";

import { useState } from "react";

export default function RegisterPage() {
  const sports = [
    "Running",
    "Trail Running",
    "Marathon",
    "Ultra Marathon",
    "Cycling",
    "Mountain Bike",
    "Swimming",
    "Triathlon",
    "Football",
    "Basketball",
    "Badminton",
    "Fitness",
    "Other",
  ];

  const [message, setMessage] = useState("");
  const [success, setSuccess] = useState(false);
  const [loading, setLoading] = useState(false);

  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    nickname: "",
    email: "",
    sports: [] as string[],
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const { name, value } = e.target;

    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSportChange = (sport: string) => {
    setForm((prev) => ({
      ...prev,
      sports: prev.sports.includes(sport)
        ? prev.sports.filter((item) => item !== sport)
        : [...prev.sports, sport],
    }));
  };

  const handleSubmit = async (
    e: React.FormEvent<HTMLFormElement>
  ) => {
    e.preventDefault();

    setLoading(true);
    setMessage("");
    setSuccess(false);

    try {
      const response = await fetch("/api/auth/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          firstName: form.firstName,
          lastName: form.lastName,
          nickname: form.nickname,
          email: form.email,
          sports: form.sports,
        }),
      });

      const data = await response.json();

      if (response.ok && data.success) {
        setSuccess(true);
        setMessage(
          "สมัคร Athlete Passport สำเร็จแล้ว"
        );
      } else {
        setSuccess(false);
        setMessage(
          data.message || "การสมัครไม่สำเร็จ"
        );
      }
    } catch (error) {
      console.error("REGISTER FORM ERROR:", error);

      setSuccess(false);
      setMessage(
        "ไม่สามารถเชื่อมต่อระบบลงทะเบียนได้"
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="min-h-screen p-6">
      <div className="mx-auto max-w-4xl">

        <h1 className="text-4xl font-bold">
          Athlete Passport Registration
        </h1>

        <p className="mt-2 text-gray-600">
          Thailand National Athlete Passport Platform
        </p>

        <form
          onSubmit={handleSubmit}
          className="mt-8 space-y-6"
        >

          <section className="rounded-xl border p-6">
            <h2 className="text-2xl font-bold">
              1. Personal Information
            </h2>

            <input
              name="firstName"
              className="mt-3 w-full rounded border p-3"
              placeholder="First Name"
              value={form.firstName}
              onChange={handleChange}
              required
            />

            <input
              name="lastName"
              className="mt-3 w-full rounded border p-3"
              placeholder="Last Name"
              value={form.lastName}
              onChange={handleChange}
              required
            />

            <input
              name="nickname"
              className="mt-3 w-full rounded border p-3"
              placeholder="Nickname"
              value={form.nickname}
              onChange={handleChange}
            />

            <input
              className="mt-3 w-full rounded border p-3"
              placeholder="Date of Birth"
            />

            <select className="mt-3 w-full rounded border p-3">
              <option>Gender</option>
              <option>Male</option>
              <option>Female</option>
              <option>Other</option>
            </select>
          </section>

          <section className="rounded-xl border p-6">
            <h2 className="text-2xl font-bold">
              2. Contact Information
            </h2>

            <input
              name="email"
              type="email"
              className="mt-3 w-full rounded border p-3"
              placeholder="Email"
              value={form.email}
              onChange={handleChange}
              required
            />

            <input
              className="mt-3 w-full rounded border p-3"
              placeholder="Phone Number"
            />

            <input
              className="mt-3 w-full rounded border p-3"
              placeholder="Address"
            />
          </section>

          <section className="rounded-xl border p-6">
            <h2 className="text-2xl font-bold">
              3. Health Information
            </h2>

            <select className="mt-3 w-full rounded border p-3">
              <option>Blood Group</option>
              <option>A</option>
              <option>B</option>
              <option>AB</option>
              <option>O</option>
            </select>

            <textarea
              className="mt-3 w-full rounded border p-3"
              placeholder="Medical Condition / Allergy"
            />
          </section>

          <section className="rounded-xl border p-6">
            <h2 className="text-2xl font-bold">
              4. Sports Profile
            </h2>

            <p className="mt-3">
              Select Your Sports
            </p>

            <div className="mt-3 grid grid-cols-2 gap-3">
              {sports.map((sport) => (
                <label
                  key={sport}
                  className="flex gap-2"
                >
                  <input
                    type="checkbox"
                    checked={form.sports.includes(sport)}
                    onChange={() =>
                      handleSportChange(sport)
                    }
                  />
                  {sport}
                </label>
              ))}
            </div>
          </section>

          <section className="rounded-xl border p-6">
            <h2 className="text-2xl font-bold">
              5. Athlete Experience
            </h2>

            <select className="mt-3 w-full rounded border p-3">
              <option>Level</option>
              <option>Beginner</option>
              <option>Intermediate</option>
              <option>Advanced</option>
              <option>Professional</option>
            </select>

            <input
              className="mt-3 w-full rounded border p-3"
              placeholder="Club / Team"
            />
          </section>

          <section className="rounded-xl border p-6">
            <h2 className="text-2xl font-bold">
              6. GPS & Connected Device
            </h2>

            <input
              className="mt-3 w-full rounded border p-3"
              placeholder="Garmin / Strava / Coros / Apple Watch"
            />
          </section>

          <section className="rounded-xl border p-6">
            <h2 className="text-2xl font-bold">
              7. Smart Athlete Card
            </h2>

            <label className="mt-3 flex gap-2">
              <input type="checkbox" />
              Request Physical Smart Card
            </label>
          </section>

          <section className="rounded-xl border p-6">
            <h2 className="text-2xl font-bold">
              8. Consent
            </h2>

            <label className="mt-3 flex gap-2">
              <input type="checkbox" />
              Accept Athlete Passport Terms
            </label>

            <label className="mt-3 flex gap-2">
              <input type="checkbox" />
              Allow Ranking Display
            </label>
          </section>

          <section className="rounded-xl bg-gray-100 p-6">
            <h2 className="text-xl font-bold">
              System Generate
            </h2>

            <p>National Athlete ID</p>
            <p>Athlete Passport Number</p>
            <p>QR Code</p>
            <p>XP Level</p>
            <p>Smart Card ID</p>
          </section>

          <button
            type="submit"
            disabled={loading}
            className="rounded-xl bg-blue-600 px-8 py-3 text-white disabled:opacity-50"
          >
            {loading
              ? "Saving..."
              : "Create Athlete Passport"}
          </button>

          {message && (
            <div
              className={`rounded-xl border p-4 text-center font-semibold ${
                success
                  ? "bg-green-100 text-green-800"
                  : "bg-red-100 text-red-800"
              }`}
            >
              {message}
            </div>
          )}

        </form>
      </div>
    </main>
  );
}