"use client";

import { useState } from "react";

export default function PartnerRegisterPage() {
  const [formData, setFormData] = useState({
    companyName: "",
    category: "",
    contactName: "",
    phone: "",
    email: "",
    website: "",
    description: "",
  });

  function handleChange(
    event: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  }

  function handleSubmit(
    event: React.FormEvent<HTMLFormElement>
  ) {
    event.preventDefault();

    console.log("Partner Application:", formData);
  }

  return (
    <main className="w-full min-h-screen bg-gray-50">

      <section className="max-w-4xl mx-auto px-6 py-16">

        <div className="text-center mb-10">

          <h1 className="text-4xl font-bold text-gray-900">
            Partner Registration
          </h1>

          <p className="mt-4 text-gray-600">
            สมัครเข้าร่วมระบบ Partner ของ WING LAEN LON THAILAND
          </p>

        </div>


        <form
          onSubmit={handleSubmit}
          className="bg-white rounded-2xl border border-gray-200 p-8 shadow-sm space-y-6"
        >

          <div>
            <label className="block mb-2 font-semibold text-gray-900">
              ชื่อบริษัท / แบรนด์
            </label>

            <input
              name="companyName"
              value={formData.companyName}
              onChange={handleChange}
              className="w-full rounded-xl border border-gray-300 px-4 py-3"
            />
          </div>


          <div>
            <label className="block mb-2 font-semibold text-gray-900">
              ประเภท Partner
            </label>

            <select
              name="category"
              value={formData.category}
              onChange={handleChange}
              className="w-full rounded-xl border border-gray-300 px-4 py-3"
            >

              <option value="">
                เลือกประเภท
              </option>

              <option value="Sports">
                รองเท้า / เสื้อผ้า / อุปกรณ์กีฬา
              </option>

              <option value="Health">
                เครื่องดื่ม / สุขภาพ / Nutrition
              </option>

              <option value="Community">
                ชุมชน / ท่องเที่ยว / ธุรกิจท้องถิ่น
              </option>

            </select>

          </div>


          <div>
            <label className="block mb-2 font-semibold text-gray-900">
              ชื่อผู้ติดต่อ
            </label>

            <input
              name="contactName"
              value={formData.contactName}
              onChange={handleChange}
              className="w-full rounded-xl border border-gray-300 px-4 py-3"
            />
          </div>


          <div>
            <label className="block mb-2 font-semibold text-gray-900">
              เบอร์โทรศัพท์
            </label>

            <input
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="w-full rounded-xl border border-gray-300 px-4 py-3"
            />
          </div>


          <div>
            <label className="block mb-2 font-semibold text-gray-900">
              Email
            </label>

            <input
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full rounded-xl border border-gray-300 px-4 py-3"
            />
          </div>


          <div>
            <label className="block mb-2 font-semibold text-gray-900">
              Website / Social Media
            </label>

            <input
              name="website"
              value={formData.website}
              onChange={handleChange}
              className="w-full rounded-xl border border-gray-300 px-4 py-3"
            />
          </div>


          <div>
            <label className="block mb-2 font-semibold text-gray-900">
              รายละเอียดสินค้าและบริการ
            </label>

            <textarea
              name="description"
              value={formData.description}
              onChange={handleChange}
              rows={5}
              className="w-full rounded-xl border border-gray-300 px-4 py-3"
            />
          </div>


          <button
            type="submit"
            className="w-full rounded-full bg-blue-600 px-8 py-4 text-white font-semibold hover:bg-blue-700 transition"
          >
            ส่งใบสมัคร Partner
          </button>


        </form>

      </section>

    </main>
  );
}
