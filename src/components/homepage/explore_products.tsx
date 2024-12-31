import { urlFor } from "@/sanity/lib/image";
import { fetchExploreProducts } from "@/sanity/lib/quries";
import Image from "next/image";

interface ExploreProductsType {
  productimg: string;
  title: string;
  slug: {
    current: string;
  };
}

export default async function ExploreProducts() {
  const exploreNewProducts = await fetchExploreProducts();

  return (
    <div className="h-auto max-w-[1500px] mx-auto relative">
      <p className="absolute 2xl:block hidden -rotate-90 uppercase left-0 top-56">
        Explore new and popular styles
      </p>
      <div className="mx-auto w-[85%] h-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 p-4 h-full">
          {exploreNewProducts.map(
            (product: ExploreProductsType, index: number) => (
              <div
                key={product.slug.current}
                className={`${index === 0 ? "md:col-span-2 lg:row-span-2 lg:col-span-2" : "md:col-span-1"}`}
              >
                <Image
                  src={urlFor(product.productimg).url()}
                  alt={product.title}
                  width={300}
                  height={300}
                  className="w-full h-full object-cover"
                />
              </div>
            )
          )}
        </div>
      </div>
    </div>
  );
}
