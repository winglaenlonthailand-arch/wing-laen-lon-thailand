"use client";

export default function PartnerPage() {
  return (
    <main className="w-full min-h-screen bg-gray-50">

      <section className="max-w-7xl mx-auto px-6 py-16">

        <div className="text-center mb-12">

          <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
            WING LAEN LON THAILAND Partner Portal
          </h1>

          <p className="mt-4 text-gray-600 text-lg">
            เธเธทเนเธเธ—เธตเนเธชเธณเธซเธฃเธฑเธเธเธฑเธเธเธกเธดเธ•เธฃเธ—เธตเนเธ•เนเธญเธเธเธฒเธฃเธฃเนเธงเธกเธชเธฃเนเธฒเธเธฃเธฐเธเธเธเธดเน€เธงเธจเธเธฑเธเธงเธดเนเธเธเธฃเธฐเน€เธ—เธจเนเธ—เธข
          </p>

        </div>


        <div className="grid md:grid-cols-3 gap-6">

          <div className="bg-white rounded-2xl border border-gray-200 p-8 shadow-sm">

            <h2 className="text-2xl font-bold text-gray-900">
              Sports Partner
            </h2>

            <p className="mt-4 text-gray-600">
              เธฃเธญเธเน€เธ—เนเธฒ เน€เธชเธทเนเธญเธเนเธฒเธเธฑเธเธเธตเธฌเธฒ เธญเธธเธเธเธฃเธ“เนเธเธตเธฌเธฒ
              เนเธฅเธฐเธเธฅเธดเธ•เธ เธฑเธ“เธ‘เนเธชเธณเธซเธฃเธฑเธเธเธฑเธเธงเธดเนเธ
            </p>

          </div>


          <div className="bg-white rounded-2xl border border-gray-200 p-8 shadow-sm">

            <h2 className="text-2xl font-bold text-gray-900">
              Health Partner
            </h2>

            <p className="mt-4 text-gray-600">
              เน€เธเธฃเธทเนเธญเธเธ”เธทเนเธกเธชเธธเธเธ เธฒเธ เนเธ เธเธเธฒเธเธฒเธฃ
              เนเธฅเธฐเธเธฅเธดเธ•เธ เธฑเธ“เธ‘เนเน€เธเธทเนเธญเธชเธธเธเธ เธฒเธเธเธฑเธเธเธตเธฌเธฒ
            </p>

          </div>


          <div className="bg-white rounded-2xl border border-gray-200 p-8 shadow-sm">

            <h2 className="text-2xl font-bold text-gray-900">
              Community Partner
            </h2>

            <p className="mt-4 text-gray-600">
              เธเธธเธฃเธเธดเธเธ—เนเธญเธเธ–เธดเนเธ เธเธฒเธฃเธ—เนเธญเธเน€เธ—เธตเนเธขเธงเน€เธเธดเธเธเธตเธฌเธฒ
              เนเธฅเธฐเธเธดเธเธเธฃเธฃเธกเธเธธเธกเธเธ
            </p>

          </div>

        </div>


        <div className="mt-12 bg-white rounded-2xl border border-gray-200 p-8">

          <h2 className="text-2xl font-bold text-gray-900">
            Partner Campaign System
          </h2>

          <div className="mt-6 grid md:grid-cols-3 gap-6">

            <div>
              <h3 className="font-semibold text-gray-900">
                Homepage Sponsor
              </h3>

              <p className="mt-2 text-gray-600">
                เธเธทเนเธเธ—เธตเนเธเธฃเธฐเธเธฒเธชเธฑเธกเธเธฑเธเธเนเธเธเธซเธเนเธฒเน€เธงเนเธเนเธเธ•เนเธซเธฅเธฑเธ
              </p>
            </div>


            <div>
              <h3 className="font-semibold text-gray-900">
                Event Sponsor
              </h3>

              <p className="mt-2 text-gray-600">
                เธชเธเธฑเธเธชเธเธธเธเธเธดเธเธเธฃเธฃเธกเนเธฅเธฐเธเธฒเธฃเนเธเนเธเธเธฑเธเธงเธดเนเธ
              </p>
            </div>


            <div>
              <h3 className="font-semibold text-gray-900">
                Runner Community
              </h3>

              <p className="mt-2 text-gray-600">
                เน€เธเธทเนเธญเธกเธ•เนเธญเนเธเธฃเธเธ”เนเธเธฑเธเธเธฑเธเธงเธดเนเธเธ—เธฑเนเธงเธเธฃเธฐเน€เธ—เธจ
              </p>
            </div>

          </div>

        </div>


        <div className="mt-12 text-center">

          <a
            href="/partner/register"
            className="inline-block rounded-full bg-blue-600 px-10 py-4 text-white font-semibold hover:bg-blue-700 transition"
          >
            เธชเธกเธฑเธเธฃเน€เธเนเธ Partner
          </a>

        </div>

      </section>

    </main>
  );
}
