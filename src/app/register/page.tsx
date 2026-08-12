"use client";

import { useMemo, useState } from "react";

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

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    nickname: "",
    dateOfBirth: "",
    gender: "",
    email: "",
    password: "",
    confirmPassword: "",
    phone: "",
    address: "",
    bloodGroup: "",
    medicalCondition: "",
    sports: [] as string[],
    level: "",
    club: "",
    device: "",
    requestCard: false,
    allowRanking: false,
    acceptTerms: false,
  });

  const passwordStrength = useMemo(() => {
    const password = form.password;
    let score = 0;

    if (password.length >= 8) score++;
    if (/[A-Z]/.test(password)) score++;
    if (/[a-z]/.test(password)) score++;
    if (/\d/.test(password)) score++;
    if (/[^A-Za-z0-9]/.test(password)) score++;

    if (score <= 2) {
      return {
        label: "Weak",
        width: "33%",
      };
    }

    if (score <= 4) {
      return {
        label: "Medium",
        width: "66%",
      };
    }

    return {
      label: "Strong",
      width: "100%",
    };
  }, [form.password]);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    const target = e.target;
    const { name, value } = target;

    if (target instanceof HTMLInputElement && target.type === "checkbox") {
      setForm((prev) => ({
        ...prev,
        [name]: target.checked,
      }));

      return;
    }

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

  return (
    <main className="min-h-screen bg-gray-50 py-10">
      <div className="mx-auto max-w-5xl px-4">
        <div className="rounded-2xl bg-white p-6 shadow-sm md:p-8">
          <header>
            <h1 className="text-3xl font-bold">
              Athlete Passport Registration
            </h1>

            <p className="mt-2 text-gray-600">
              Thailand National Athlete Passport Platform
            </p>
          </header>

          <div
            className="mt-6 h-2 overflow-hidden rounded-full bg-gray-200"
            aria-label="Registration progress"
          >
            <div className="h-full w-1/3 bg-blue-600" />
          </div>

          <div className="mt-8 space-y-6">
            {/* 1. Personal Information */}
            <section className="rounded-xl border bg-white p-6">
              <h2 className="text-2xl font-bold">
                1. Personal Information
              </h2>

              <input
                name="firstName"
                value={form.firstName}
                onChange={handleChange}
                className="mt-4 w-full rounded border p-3"
                placeholder="First Name"
                autoComplete="given-name"
              />

              <input
                name="lastName"
                value={form.lastName}
                onChange={handleChange}
                className="mt-3 w-full rounded border p-3"
                placeholder="Last Name"
                autoComplete="family-name"
              />

              <input
                name="nickname"
                value={form.nickname}
                onChange={handleChange}
                className="mt-3 w-full rounded border p-3"
                placeholder="Nickname"
              />

              <input
                type="date"
                name="dateOfBirth"
                value={form.dateOfBirth}
                onChange={handleChange}
                className="mt-3 w-full rounded border p-3"
                autoComplete="bday"
              />

              <select
                name="gender"
                value={form.gender}
                onChange={handleChange}
                className="mt-3 w-full rounded border p-3"
              >
                <option value="">Gender</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Other">Other</option>
              </select>
            </section>

            {/* 2. Contact Information */}
            <section className="rounded-xl border bg-white p-6">
              <h2 className="text-2xl font-bold">
                2. Contact Information
              </h2>

              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                className="mt-4 w-full rounded border p-3"
                placeholder="Email"
                autoComplete="email"
              />

              <div className="relative mt-3">
                <input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  value={form.password}
                  onChange={handleChange}
                  className="w-full rounded border p-3 pr-14"
                  placeholder="Password (minimum 8 characters)"
                  autoComplete="new-password"
                  minLength={8}
                />

                <button
                  type="button"
                  onClick={() => setShowPassword((value) => !value)}
                  className="absolute right-3 top-1/2 -translate-y-1/2"
                  aria-label={
                    showPassword
                      ? "Hide password"
                      : "Show password"
                  }
                >
                  {showPassword ? "🙈" : "👁️"}
                </button>
              </div>

              <div className="mt-3">
                <div className="h-2 overflow-hidden rounded-full bg-gray-200">
                  <div
                    className="h-full bg-green-500 transition-all"
                    style={{
                      width: passwordStrength.width,
                    }}
                  />
                </div>

                <p className="mt-1 text-sm text-gray-600">
                  Password strength: {passwordStrength.label}
                </p>
              </div>

              <div className="relative mt-3">
                <input
                  type={showConfirmPassword ? "text" : "password"}
                  name="confirmPassword"
                  value={form.confirmPassword}
                  onChange={handleChange}
                  className="w-full rounded border p-3 pr-14"
                  placeholder="Confirm Password"
                  autoComplete="new-password"
                />

                <button
                  type="button"
                  onClick={() =>
                    setShowConfirmPassword((value) => !value)
                  }
                  className="absolute right-3 top-1/2 -translate-y-1/2"
                  aria-label={
                    showConfirmPassword
                      ? "Hide confirm password"
                      : "Show confirm password"
                  }
                >
                  {showConfirmPassword ? "🙈" : "👁️"}
                </button>
              </div>

              <input
                type="tel"
                name="phone"
                value={form.phone}
                onChange={handleChange}
                className="mt-3 w-full rounded border p-3"
                placeholder="Phone Number"
                autoComplete="tel"
              />

              <textarea
                name="address"
                value={form.address}
                onChange={handleChange}
                className="mt-3 w-full rounded border p-3"
                placeholder="Address"
                rows={3}
                autoComplete="street-address"
              />
            </section>

            {/* 3. Health Information */}
            <section className="rounded-xl border bg-white p-6">
              <h2 className="text-2xl font-bold">
                3. Health Information
              </h2>

              <select
                name="bloodGroup"
                value={form.bloodGroup}
                onChange={handleChange}
                className="mt-4 w-full rounded border p-3"
              >
                <option value="">Blood Group</option>
                <option value="A">A</option>
                <option value="B">B</option>
                <option value="AB">AB</option>
                <option value="O">O</option>
              </select>

              <textarea
                name="medicalCondition"
                value={form.medicalCondition}
                onChange={handleChange}
                className="mt-3 w-full rounded border p-3"
                placeholder="Medical Condition / Allergy"
                rows={4}
              />
            </section>

            {/* 4. Sports Profile */}
            <section className="rounded-xl border bg-white p-6">
              <h2 className="text-2xl font-bold">
                4. Sports Profile
              </h2>

              <p className="mt-3">Select Your Sports</p>

              <div className="mt-4 grid grid-cols-2 gap-3 md:grid-cols-3">
                {sports.map((sport) => (
                  <label
                    key={sport}
                    className="flex cursor-pointer items-center gap-2"
                  >
                    <input
                      type="checkbox"
                      checked={form.sports.includes(sport)}
                      onChange={() => handleSportChange(sport)}
                    />

                    <span>{sport}</span>
                  </label>
                ))}
              </div>
            </section>

            {/* 5. Athlete Experience */}
            <section className="rounded-xl border bg-white p-6">
              <h2 className="text-2xl font-bold">
                5. Athlete Experience
              </h2>

              <select
                name="level"
                value={form.level}
                onChange={handleChange}
                className="mt-4 w-full rounded border p-3"
              >
                <option value="">Level</option>
                <option value="Beginner">Beginner</option>
                <option value="Intermediate">
                  Intermediate
                </option>
                <option value="Advanced">Advanced</option>
                <option value="Professional">
                  Professional
                </option>
              </select>

              <input
                name="club"
                value={form.club}
                onChange={handleChange}
                className="mt-3 w-full rounded border p-3"
                placeholder="Club / Team"
              />
            </section>

            {/* 6. GPS & Connected Device */}
            <section className="rounded-xl border bg-white p-6">
              <h2 className="text-2xl font-bold">
                6. GPS & Connected Device
              </h2>

              <input
                name="device"
                value={form.device}
                onChange={handleChange}
                className="mt-4 w-full rounded border p-3"
                placeholder="Garmin / Strava / Coros / Apple Watch"
              />
            </section>

            {/* 7. Smart Athlete Card */}
            <section className="rounded-xl border bg-white p-6">
              <h2 className="text-2xl font-bold">
                7. Smart Athlete Card
              </h2>

              <label className="mt-4 flex cursor-pointer items-center gap-2">
                <input
                  type="checkbox"
                  name="requestCard"
                  checked={form.requestCard}
                  onChange={handleChange}
                />

                <span>Request Physical Smart Card</span>
              </label>
            </section>

            {/* 8. Consent */}
            <section className="rounded-xl border bg-white p-6">
              <h2 className="text-2xl font-bold">
                8. Consent
              </h2>

              <label className="mt-4 flex cursor-pointer items-center gap-2">
                <input
                  type="checkbox"
                  name="acceptTerms"
                  checked={form.acceptTerms}
                  onChange={handleChange}
                />

                <span>Accept Athlete Passport Terms</span>
              </label>

              <label className="mt-3 flex cursor-pointer items-center gap-2">
                <input
                  type="checkbox"
                  name="allowRanking"
                  checked={form.allowRanking}
                  onChange={handleChange}
                />

                <span>Allow Ranking Display</span>
              </label>
            </section>

            {/* System Generate */}
            <section className="rounded-xl bg-gray-100 p-6">
              <h2 className="text-xl font-bold">
                System Generate
              </h2>

              <div className="mt-4 grid gap-3 md:grid-cols-2">
                <div className="rounded border bg-white p-4">
                  <p className="text-sm text-gray-500">
                    National Athlete ID
                  </p>

                  <p className="mt-1 font-semibold">
                    THA-2026-000001
                  </p>
                </div>

                <div className="rounded border bg-white p-4">
                  <p className="text-sm text-gray-500">
                    Athlete Passport Number
                  </p>

                  <p className="mt-1 font-semibold">
                    AP-TH-260809-000001
                  </p>
                </div>

                <div className="rounded border bg-white p-4">
                  <p className="text-sm text-gray-500">
                    QR Code
                  </p>

                  <div
                    className="mt-2 h-24 w-24 rounded border bg-white"
                    aria-label="QR Code placeholder"
                  />
                </div>

                <div className="rounded border bg-white p-4">
                  <p className="text-sm text-gray-500">
                    XP Level
                  </p>

                  <p className="mt-1 font-semibold">
                    Level 1
                  </p>
                </div>

                <div className="rounded border bg-white p-4 md:col-span-2">
                  <p className="text-sm text-gray-500">
                    Smart Card ID
                  </p>

                  <p className="mt-1 font-semibold">
                    SC-100001
                  </p>
                </div>
              </div>
            </section>

            <button
              type="button"
              onClick={() => console.log(form)}
              className="w-full rounded-xl bg-blue-600 px-8 py-4 text-lg font-semibold text-white transition hover:bg-blue-700"
            >
              Create Athlete Passport
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}



