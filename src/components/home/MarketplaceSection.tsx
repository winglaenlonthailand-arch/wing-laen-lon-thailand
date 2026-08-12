import Link from "next/link";

import { marketplaceProducts } from "@/data/marketplaceProducts";

export default function MarketplaceSection() {

  const activeProducts = marketplaceProducts.filter(
    (product) => product.status === "Active"
  );

  return (
    <section className="w-full bg-white py-16">

      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-10">

          <h2 className="text-4xl font-bold text-gray-900">
            Runner Marketplace
          </h2>

          <p className="mt-4 text-gray-600">
            สินค้าและบริการสำหรับนักวิ่ง จาก Partner ทั่วประเทศไทย
          </p>

        </div>

        <div className="grid md:grid-cols-3 gap-6">

          {activeProducts.map((product) => (

            <Link
              key={product.id}
              href={`/marketplace/${product.id}`}
              className="block rounded-2xl border border-gray-200 p-6 shadow-sm hover:shadow-xl hover:-translate-y-1 hover:border-blue-500 transition duration-300"
            >

              <div className="h-40 bg-gray-100 rounded-xl flex items-center justify-center">

                <span className="text-gray-400">
                  Product Image
                </span>

              </div>

              <h3 className="mt-6 text-xl font-bold text-gray-900">
                {product.productName}
              </h3>

              <p className="mt-2 text-sm text-gray-500">
                {product.partnerName}
              </p>

              <p className="mt-3 text-gray-600">
                {product.description}
              </p>

              <div className="mt-5 flex items-center justify-between">

                <span className="rounded-full bg-blue-100 px-3 py-1 text-sm text-blue-700">
                  {product.category}
                </span>

                <span className="text-blue-600 font-semibold">
                  ดูรายละเอียด →
                </span>

              </div>

              <div className="mt-6 grid grid-cols-2 gap-3">

                <span className="rounded-full bg-blue-600 px-4 py-3 text-center text-white font-semibold">
                  สั่งซื้อสินค้า
                </span>

                <span className="rounded-full border border-blue-600 px-4 py-3 text-center text-blue-600 font-semibold">
                  Partner
                </span>

              </div>

            </Link>

          ))}

        </div>

      </div>

    </section>
  );
}
