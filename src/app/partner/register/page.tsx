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
            เธชเธกเธฑเธเธฃเน€เธเนเธฒเธฃเนเธงเธกเธฃเธฐเธเธ Partner เธเธญเธ WING LAEN LON THAILAND
          </p>

        </div>


        <form
          onSubmit={handleSubmit}
          className="bg-white rounded-2xl border border-gray-200 p-8 shadow-sm space-y-6"
        >

          <div>
            <label className="block mb-2 font-semibold text-gray-900">
              เธเธทเนเธญเธเธฃเธดเธฉเธฑเธ— / เนเธเธฃเธเธ”เน
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
              เธเธฃเธฐเน€เธ เธ— Partner
            </label>

            <select
              name="category"
              value={formData.category}
              onChange={handleChange}
              className="w-full rounded-xl border border-gray-300 px-4 py-3"
            >

              <option value="">
                เน€เธฅเธทเธญเธเธเธฃเธฐเน€เธ เธ—
              </option>

              <option value="Sports">
                เธฃเธญเธเน€เธ—เนเธฒ / เน€เธชเธทเนเธญเธเนเธฒ / เธญเธธเธเธเธฃเธ“เนเธเธตเธฌเธฒ
              </option>

              <option value="Health">
                เน€เธเธฃเธทเนเธญเธเธ”เธทเนเธก / เธชเธธเธเธ เธฒเธ / Nutrition
              </option>

              <option value="Community">
                เธเธธเธกเธเธ / เธ—เนเธญเธเน€เธ—เธตเนเธขเธง / เธเธธเธฃเธเธดเธเธ—เนเธญเธเธ–เธดเนเธ
              </option>

            </select>

          </div>


          <div>
            <label className="block mb-2 font-semibold text-gray-900">
              เธเธทเนเธญเธเธนเนเธ•เธดเธ”เธ•เนเธญ
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
              เน€เธเธญเธฃเนเนเธ—เธฃเธจเธฑเธเธ—เน
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
              เธฃเธฒเธขเธฅเธฐเน€เธญเธตเธขเธ”เธชเธดเธเธเนเธฒเนเธฅเธฐเธเธฃเธดเธเธฒเธฃ
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
            เธชเนเธเนเธเธชเธกเธฑเธเธฃ Partner
          </button>


        </form>

      </section>

    </main>
  );
}
