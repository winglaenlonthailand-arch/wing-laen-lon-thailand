"use client";

import { useState } from "react";

export default function SignupPage() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
  });

  const [message, setMessage] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    setMessage("กำลังสมัครสมาชิก...");

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
        setMessage("สมัครสมาชิกสำเร็จ");
      } else {
        setMessage(data.message || "สมัครสมาชิกไม่สำเร็จ");
      }
    } catch (error) {
      setMessage("เกิดข้อผิดพลาดในการเชื่อมต่อระบบ");
    }
  };

  return (
    <main className="min-h-screen flex items-center justify-center p-6 bg-gray-50">
      <div className="w-full max-w-md bg-white rounded-xl shadow p-6">
        <h1 className="text-2xl font-bold mb-6 text-center">
          สมัครสมาชิก
        </h1>

        <form onSubmit={handleSubmit} className="space-y-4">

          <input
            name="name"
            type="text"
            placeholder="ชื่อ"
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

          <input
            name="password"
            type="password"
            placeholder="Password"
            value={form.password}
            onChange={handleChange}
            className="w-full border rounded p-3"
            required
          />

          <button
            type="submit"
            className="w-full bg-blue-600 text-white rounded p-3"
          >
            สมัครสมาชิก
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