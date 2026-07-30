import { marketplaceProducts } from "@/data/marketplaceProducts";

interface MarketplaceDetailPageProps {
  params: Promise<{
    id: string;
  }>;
}

export default async function MarketplaceDetailPage({
  params,
}: MarketplaceDetailPageProps) {

  const { id } = await params;

  const product = marketplaceProducts.find(
    (item) => item.id === Number(id)
  );

  if (!product) {
    return (
      <main className="min-h-screen flex items-center justify-center">
        <h1 className="text-3xl font-bold">
          Product Not Found
        </h1>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-gray-50">

      <section className="max-w-6xl mx-auto px-6 py-16">

        <div className="bg-white rounded-2xl border border-gray-200 shadow p-10">

          <div className="grid md:grid-cols-2 gap-10">

            <div className="h-80 rounded-2xl bg-gray-100 flex items-center justify-center">

              <span className="text-gray-400 text-xl">
                Product Image
              </span>

            </div>

            <div>

              <h1 className="text-4xl font-bold text-gray-900">
                {product.productName}
              </h1>

              <p className="mt-3 text-gray-500">
                {product.partnerName}
              </p>

              <div className="mt-6">

                <span className="rounded-full bg-blue-100 px-4 py-2 text-blue-700">

                  {product.category}

                </span>

              </div>

              <p className="mt-8 text-gray-700 leading-8">

                {product.description}

              </p>

              <a
                href={product.productUrl}
                className="inline-block mt-10 rounded-full bg-blue-600 px-8 py-4 text-white font-semibold hover:bg-blue-700 transition"
              >
                Visit Partner
              </a>

            </div>

          </div>

        </div>

      </section>

    </main>
  );

}