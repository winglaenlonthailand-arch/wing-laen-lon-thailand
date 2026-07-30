import { marketplaceProducts } from "@/data/marketplaceProducts";
import { runnerRecommendations } from "@/data/runnerRecommendations";


export default function RecommendationSection() {

  const recommendation =
    runnerRecommendations[0];


  const products =
    marketplaceProducts.filter(
      (product) =>
        recommendation.recommendedProducts.includes(
          product.id
        )
    );


  return (

    <section className="w-full bg-gray-50 py-16">

      <div className="max-w-7xl mx-auto px-6">


        <h2 className="text-3xl font-bold text-gray-900 text-center">

          Recommended For Runner

        </h2>


        <div className="grid md:grid-cols-2 gap-6 mt-10">


          {products.map(
            (product) => (

              <div
                key={product.id}
                className="bg-white rounded-2xl p-6 border border-gray-200"
              >

                <h3 className="text-xl font-bold">

                  {product.productName}

                </h3>


                <p className="mt-2 text-gray-600">

                  {product.description}

                </p>


              </div>

            )
          )}

        </div>


      </div>

    </section>

  );

}