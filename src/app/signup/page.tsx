"use client";

import { useState } from "react";

export default function SignupPage() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
  });

  const [showPassword, setShowPassword] = useState(false);
  const [message, setMessage] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    setMessage("เธเธณเธฅเธฑเธเธชเธกเธฑเธเธฃเธชเธกเธฒเธเธดเธ...");

    try {
      const res = await fetch("/api/auth/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });

      const data = await res.json();

      if (res.ok) {
        setMessage("เธชเธกเธฑเธเธฃเธชเธกเธฒเธเธดเธเธชเธณเน€เธฃเนเธ");
      } else {
        setMessage(data.message || "เธชเธกเธฑเธเธฃเธชเธกเธฒเธเธดเธเนเธกเนเธชเธณเน€เธฃเนเธ");
      }
    } catch (error) {
      setMessage("เน€เธเธดเธ”เธเนเธญเธเธดเธ”เธเธฅเธฒเธ”เนเธเธเธฒเธฃเน€เธเธทเนเธญเธกเธ•เนเธญเธฃเธฐเธเธ");
    }
  };

  return (
    <main>
      <div>
        <h1>เธชเธกเธฑเธเธฃเธชเธกเธฒเธเธดเธ</h1>

        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            name="name"
            type="text"
            placeholder="เธเธทเนเธญ"
            value={form.name}
            onChange={handleChange}
            className="w-full border rounded p-3"
            required
          />

          <input
            name="email"
            type="email"
            placeholder="Email"
            value={form.email}
            onChange={handleChange}
            className="w-full border rounded p-3"
            required
          />

          <div className="relative">
            <input
              name="password"
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              value={form.password}
              onChange={handleChange}
              className="w-full border rounded p-3 pr-12"
              required
            />

            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-600"
              aria-label={showPassword ? "เธเนเธญเธ Password" : "เนเธชเธ”เธ Password"}
            >
              {showPassword ? "๐" : "๐‘๏ธ"}
            </button>
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white rounded p-3"
          >
            เธชเธกเธฑเธเธฃเธชเธกเธฒเธเธดเธ
          </button>
        </form>

        {message && (
          <p className="mt-4 text-center">
            {message}
          </p>
        )}
      </div>
    </main>
  );
}

