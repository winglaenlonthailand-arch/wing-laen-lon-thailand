import Link from "next/link";

const products = [
  {
    id: "1",
    name: "Professional Running Shoes",
    brand: "Runner Pro Shoes",
    category: "Shoes",
    description:
      "รองเท้าวิ่งสำหรับนักวิ่งทุกระดับ พร้อมเทคโนโลยีรองรับแรงกระแทก",
  },
  {
    id: "2",
    name: "Runner Energy Drink",
    brand: "Healthy Energy Drink",
    category: "Nutrition",
    description:
      "เครื่องดื่มพลังงานสำหรับนักวิ่งและผู้รักสุขภาพ",
  },
  {
    id: "3",
    name: "Running Smart Watch",
    brand: "Runner Smart Watch",
    category: "Technology",
    description:
      "นาฬิกาอัจฉริยะสำหรับติดตามระยะทาง เวลา และกิจกรรมการวิ่ง",
  },
];

export default function MarketplacePage() {
  return (
    <main className="min-h-screen bg-gray-50">
      <section className="w-full py-16">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-10 text-center">
            <h1 className="text-4xl font-bold text-gray-900">
              Runner Marketplace
            </h1>

            <p className="mt-3 text-gray-600">
              สินค้าและบริการสำหรับนักวิ่ง จาก Partner ทั่วประเทศไทย
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {products.map((product) => (
              <Link
                key={product.id}
                href={`/marketplace/${product.id}`}
                className="block overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm transition hover:-translate-y-1 hover:border-blue-500 hover:shadow-lg"
              >
                <div className="flex h-48 items-center justify-center bg-gray-100">
                  <span className="text-gray-400">Product Image</span>
                </div>

                <div className="p-6">
                  <div className="text-sm font-semibold text-blue-600">
                    {product.category}
                  </div>

                  <h2 className="mt-2 text-xl font-bold text-gray-900">
                    {product.name}
                  </h2>

                  <p className="mt-2 font-medium text-gray-700">
                    {product.brand}
                  </p>

                  <p className="mt-3 leading-relaxed text-gray-600">
                    {product.description}
                  </p>

                  <div className="mt-6 flex items-center justify-between">
                    <span className="text-blue-600 font-semibold">
                      ดูรายละเอียด →
                    </span>

                    <span className="rounded-full bg-blue-100 px-3 py-1 text-sm text-blue-700">
                      Partner
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}