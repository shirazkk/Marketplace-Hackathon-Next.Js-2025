import React from "react";
import { ShoppingCart } from "lucide-react";
import Image from "next/image";
import { Button } from "../ui/button";
import { fetchProducts } from "@/sanity/lib/quries";
import { urlFor } from "@/sanity/lib/image";
import Link from "next/link";

interface ProductsType {
  image: string;
  name: string;
  slug: {
    current: string;
  };
  price: string;
}

const FeatureProducts = async () => {
  const fetchProductdata = await fetchProducts();

  return (
    <div className="px-4 py-14 max-w-[1500px] mx-auto">
      <div className="w-[85%] relative flex justify-between items-end gap-6 mx-auto">
        <h1 className="text-3xl font-semibold">Featured Products</h1>
      </div>

      {/* Products Grid */}
      <div className="w-[85%] mx-auto  grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-7">
        {fetchProductdata
          .slice(1, 5)
          .map((product: ProductsType, index: number) => (
            <Link
              href={`/products/${product.slug.current}`}
              key={product.slug.current}
              className="flex flex-col"
            >
              <div className="hover:scale-105 duration-300 ease-in-out cursor-pointer relative flex justify-center items-center w-full h-64 object-center rounded-lg">
                <Image
                  src={urlFor(product.image).url()}
                  alt={product.name}
                  width={160}
                  height={160}
                  quality={100}
                  className="w-full h-full"
                />
                {index === 0 && (
                  <div className="py-2 px-3 absolute top-2 left-0">
                    <p className="bg-new rounded-md px-3 py-1 text-center text-white">
                      New
                    </p>
                  </div>
                )}
                {index === 1 && (
                  <div className="py-2 px-3 absolute top-2 left-0">
                    <p className="bg-sales rounded-md px-3 py-1 text-center text-white">
                      Sales
                    </p>
                  </div>
                )}
              </div>
              <div className="flex justify-between items-center mt-4">
                <div>
                  <h2 className="text-left hover:text-second text-black text-base font-medium">
                    {product.name}
                  </h2>
                  <p className="text-base text-button2 font-medium mt-2">
                    ${product.price}
                  </p>
                </div>
                <div>
                  <Button className=" w-full text-black hover:text-white hover:bg-second bg-third font-medium">
                    <ShoppingCart className="scale-125 " strokeWidth={1.25} />
                  </Button>
                </div>
              </div>
            </Link>
          ))}
      </div>
    </div>
  );
};

export default FeatureProducts;
