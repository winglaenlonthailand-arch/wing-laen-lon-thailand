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
            พื้นที่สำหรับพันธมิตรที่ต้องการร่วมสร้างระบบนิเวศนักวิ่งประเทศไทย
          </p>

        </div>


        <div className="grid md:grid-cols-3 gap-6">

          <div className="bg-white rounded-2xl border border-gray-200 p-8 shadow-sm">

            <h2 className="text-2xl font-bold text-gray-900">
              Sports Partner
            </h2>

            <p className="mt-4 text-gray-600">
              รองเท้า เสื้อผ้านักกีฬา อุปกรณ์กีฬา
              และผลิตภัณฑ์สำหรับนักวิ่ง
            </p>

          </div>


          <div className="bg-white rounded-2xl border border-gray-200 p-8 shadow-sm">

            <h2 className="text-2xl font-bold text-gray-900">
              Health Partner
            </h2>

            <p className="mt-4 text-gray-600">
              เครื่องดื่มสุขภาพ โภชนาการ
              และผลิตภัณฑ์เพื่อสุขภาพนักกีฬา
            </p>

          </div>


          <div className="bg-white rounded-2xl border border-gray-200 p-8 shadow-sm">

            <h2 className="text-2xl font-bold text-gray-900">
              Community Partner
            </h2>

            <p className="mt-4 text-gray-600">
              ธุรกิจท้องถิ่น การท่องเที่ยวเชิงกีฬา
              และกิจกรรมชุมชน
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
                พื้นที่ประชาสัมพันธ์บนหน้าเว็บไซต์หลัก
              </p>
            </div>


            <div>
              <h3 className="font-semibold text-gray-900">
                Event Sponsor
              </h3>

              <p className="mt-2 text-gray-600">
                สนับสนุนกิจกรรมและการแข่งขันวิ่ง
              </p>
            </div>


            <div>
              <h3 className="font-semibold text-gray-900">
                Runner Community
              </h3>

              <p className="mt-2 text-gray-600">
                เชื่อมต่อแบรนด์กับนักวิ่งทั่วประเทศ
              </p>
            </div>

          </div>

        </div>


        <div className="mt-12 text-center">

          <a
            href="/partner/register"
            className="inline-block rounded-full bg-blue-600 px-10 py-4 text-white font-semibold hover:bg-blue-700 transition"
          >
            สมัครเป็น Partner
          </a>

        </div>

      </section>

    </main>
  );
}