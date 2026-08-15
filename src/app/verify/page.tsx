"use client";

import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { FormEvent, useEffect, useState } from "react";

export default function VerifyPage() {
  const searchParams = useSearchParams();

  const [email, setEmail] = useState("");
  const [code, setCode] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const urlEmail = searchParams.get("email");
    const urlCode = searchParams.get("code");

    if (!urlEmail || !urlCode) {
      return;
    }

    const normalizedEmail = urlEmail.trim().toLowerCase();
    const normalizedCode = urlCode.trim();

    setEmail(normalizedEmail);
    setCode(normalizedCode);

    if (!/^\d{6}$/.test(normalizedCode)) {
      setError("ลิงก์ยืนยันไม่ถูกต้อง");
      return;
    }

    const verifyFromLink = async () => {
      setLoading(true);
      setMessage("");
      setError("");

      try {
        const response = await fetch("/api/auth/verify", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email: normalizedEmail,
            verificationCode: normalizedCode,
          }),
        });

        const data = await response.json();

        if (!response.ok || !data.success) {
          throw new Error(
            data.message || "ไม่สามารถยืนยันอีเมลได้"
          );
        }

        setMessage(
          "ยืนยันอีเมลสำเร็จ บัญชี Athlete Passport ของคุณพร้อมเข้าสู่ระบบแล้ว"
        );

        setCode("");
      } catch (err) {
        setError(
          err instanceof Error
            ? err.message
            : "เกิดข้อผิดพลาดในการยืนยันอีเมล"
        );
      } finally {
        setLoading(false);
      }
    };

    verifyFromLink();
  }, [searchParams]);

  const handleVerify = async (
    event: FormEvent<HTMLFormElement>
  ) => {
    event.preventDefault();

    setMessage("");
    setError("");

    const normalizedEmail = email.trim().toLowerCase();
    const normalizedCode = code.trim();

    if (!normalizedEmail) {
      setError("กรุณากรอกอีเมล");
      return;
    }

    if (!/^\d{6}$/.test(normalizedCode)) {
      setError("กรุณากรอกรหัสยืนยัน 6 หลัก");
      return;
    }

    setLoading(true);

    try {
      const response = await fetch("/api/auth/verify", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: normalizedEmail,
          verificationCode: normalizedCode,
        }),
      });

      const data = await response.json();

      if (!response.ok || !data.success) {
        throw new Error(
          data.message || "ไม่สามารถยืนยันอีเมลได้"
        );
      }

      setMessage(
        "ยืนยันอีเมลสำเร็จ บัญชี Athlete Passport ของคุณพร้อมเข้าสู่ระบบแล้ว"
      );

      setCode("");
    } catch (err) {
      setError(
        err instanceof Error
          ? err.message
          : "เกิดข้อผิดพลาดในการยืนยันอีเมล"
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="min-h-screen bg-gray-50 flex items-center justify-center p-6">
      <section className="w-full max-w-lg rounded-2xl bg-white border border-gray-200 p-8 shadow-sm">
        <div className="text-center">
          <p className="text-sm font-semibold text-blue-600">
            WING LAEN LON THAILAND
          </p>

          <h1 className="mt-2 text-3xl font-bold text-gray-900">
            Verify Email
          </h1>

          <p className="mt-3 text-gray-600">
            ยืนยันอีเมลสำหรับ Athlete Passport
          </p>
        </div>

        <div className="mt-8 rounded-xl bg-blue-50 border border-blue-100 p-5">
          <h2 className="font-bold text-gray-900">
            ยืนยันตัวตนของคุณ
          </h2>

          <p className="mt-2 text-sm leading-6 text-gray-600">
            ระบบได้ส่งรหัสยืนยัน 6 หลักไปยังอีเมลที่ใช้สมัคร
            Athlete Passport
          </p>

          <p className="mt-2 text-sm leading-6 text-gray-600">
            หากคุณกดลิงก์ยืนยันจากอีเมล ระบบจะยืนยันให้อัตโนมัติ
          </p>

          <p className="mt-2 text-sm leading-6 text-gray-600">
            หากไม่มีลิงก์ คุณสามารถกรอกอีเมลและรหัสยืนยันด้วยตนเองได้
          </p>
        </div>

        <form
          onSubmit={handleVerify}
          className="mt-6 space-y-5"
        >
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
              onChange={(event) =>
                setEmail(event.target.value)
              }
              placeholder="you@example.com"
              autoComplete="email"
              required
              className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
            />
          </div>

          <div>
            <label
              htmlFor="code"
              className="block text-sm font-semibold text-gray-700 mb-2"
            >
              Verification Code
            </label>

            <input
              id="code"
              type="text"
              inputMode="numeric"
              autoComplete="one-time-code"
              maxLength={6}
              value={code}
              onChange={(event) =>
                setCode(
                  event.target.value.replace(/\D/g, "")
                )
              }
              placeholder="กรอกรหัส 6 หลัก"
              required
              className="w-full rounded-xl border border-gray-300 px-4 py-3 text-center text-2xl tracking-[0.5em] outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
            />

            <p className="mt-2 text-xs text-gray-500">
              รหัสยืนยันมีอายุ 10 นาทีหลังจากระบบส่งอีเมล
            </p>
          </div>

          {error && (
            <div className="rounded-xl bg-red-50 border border-red-200 p-4">
              <p className="font-semibold text-red-700">
                {error}
              </p>

              <p className="mt-1 text-sm text-red-600">
                หากรหัสหมดอายุ กรุณาขอรหัสใหม่จากระบบ
              </p>
            </div>
          )}

          {message && (
            <div className="rounded-xl bg-green-50 border border-green-200 p-4">
              <p className="font-semibold text-green-700">
                {message}
              </p>

              <Link
                href="/login"
                className="mt-4 inline-block rounded-full bg-green-600 px-6 py-2 text-white font-semibold hover:bg-green-700 transition"
              >
                ไปหน้า Login
              </Link>
            </div>
          )}

          {!message && (
            <button
              type="submit"
              disabled={loading}
              className="w-full rounded-full bg-blue-600 px-6 py-3 text-white font-semibold hover:bg-blue-700 transition disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {loading
                ? "กำลังยืนยันอีเมล..."
                : "Verify Email"}
            </button>
          )}
        </form>

        <div className="mt-8 border-t border-gray-200 pt-6 text-center">
          <p className="text-sm text-gray-500">
            ยืนยันอีเมลแล้ว?
          </p>

          <Link
            href="/login"
            className="mt-2 inline-block text-sm font-semibold text-blue-600 hover:text-blue-700"
          >
            กลับไปหน้า Login
          </Link>
        </div>

        <div className="mt-6 rounded-xl bg-gray-50 p-4">
          <p className="text-xs leading-5 text-gray-500">
            Athlete Passport ใช้อีเมลที่ยืนยันแล้วสำหรับการเข้าสู่ระบบ
            และการเชื่อมโยงข้อมูลสมาชิกกับระบบ Runner Passport
          </p>
        </div>
      </section>
    </main>
  );
}