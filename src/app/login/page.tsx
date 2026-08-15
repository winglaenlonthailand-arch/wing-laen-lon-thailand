"use client";

import { FormEvent, useState } from "react";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleEmailLogin = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    setMessage("");
    setError("");
    setLoading(true);

    try {
      const response = await fetch("/api/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          password,
        }),
      });

      const data = await response.json();

      if (!response.ok || !data.success) {
        throw new Error(data.message || "เข้าสู่ระบบไม่สำเร็จ");
      }

      setMessage("เข้าสู่ระบบสำเร็จ กำลังเข้าสู่ Athlete Dashboard...");

      window.location.href = "/dashboard";
    } catch (err) {
      setError(
        err instanceof Error
          ? err.message
          : "เกิดข้อผิดพลาดในการเข้าสู่ระบบ"
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="min-h-screen bg-gray-50 flex items-center justify-center p-8">
      <section className="w-full max-w-md rounded-2xl bg-white border border-gray-200 p-8 shadow-sm">
        <h1 className="text-3xl font-bold text-gray-900 text-center">
          Login
        </h1>

        <p className="mt-4 text-center text-gray-600">
          Thailand AI Running Platform
        </p>

        <form onSubmit={handleEmailLogin} className="mt-8 space-y-5">
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-semibold text-gray-700 mb-2"
            >
              Email
            </label>

            <input
              id="email"
              type="email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              placeholder="you@example.com"
              required
              autoComplete="email"
              className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
            />
          </div>

          <div>
            <label
              htmlFor="password"
              className="block text-sm font-semibold text-gray-700 mb-2"
            >
              Password
            </label>

            <div className="relative">
              <input
                id="password"
                type={showPassword ? "text" : "password"}
                value={password}
                onChange={(event) => setPassword(event.target.value)}
                placeholder="Enter your password"
                required
                autoComplete="current-password"
                className="w-full rounded-xl border border-gray-300 px-4 py-3 pr-12 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
              />

              <button
                type="button"
                onClick={() => setShowPassword((current) => !current)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-xl"
                aria-label={
                  showPassword ? "ซ่อนรหัสผ่าน" : "แสดงรหัสผ่าน"
                }
              >
                {showPassword ? "🙈" : "👁️"}
              </button>
            </div>
          </div>

          {error && (
            <div className="rounded-xl bg-red-50 border border-red-200 p-4 text-center">
              <p className="font-semibold text-red-700">{error}</p>
            </div>
          )}

          {message && (
            <div className="rounded-xl bg-green-50 border border-green-200 p-4 text-center">
              <p className="font-semibold text-green-700">{message}</p>
            </div>
          )}

          <button
            type="submit"
            disabled={loading}
            className="w-full rounded-full bg-blue-600 px-6 py-3 text-white font-semibold hover:bg-blue-700 transition disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {loading ? "กำลังเข้าสู่ระบบ..." : "Login with Email"}
          </button>
        </form>

        <div className="mt-6 space-y-3">
          <button
            type="button"
            onClick={() => setMessage("Google Login จะเชื่อมต่อในขั้นตอนถัดไป")}
            className="w-full rounded-full border border-gray-300 px-6 py-3 font-semibold text-gray-700 hover:bg-gray-100 transition"
          >
            Login with Google
          </button>

          <button
            type="button"
            onClick={() => setMessage("LINE Login จะเชื่อมต่อในขั้นตอนถัดไป")}
            className="w-full rounded-full border border-gray-300 px-6 py-3 font-semibold text-gray-700 hover:bg-gray-100 transition"
          >
            Login with LINE
          </button>
        </div>

        <div className="mt-8 rounded-xl bg-gray-50 p-5 text-center">
          <h2 className="font-bold text-gray-900">
            Athlete Passport Authentication
          </h2>

          <p className="mt-2 text-sm text-gray-600">
            ระบบสมาชิก Runner Passport และการยืนยันตัวตน
            พร้อมใช้งานสำหรับสมาชิกที่ลงทะเบียนแล้ว
          </p>
        </div>
      </section>
    </main>
  );
}