import React from "react";
import Image from "next/image";
import { fetchTopProducts } from "@/sanity/lib/quries";
import { urlFor } from "@/sanity/lib/image";

interface TopProductType {
  image: string;
  productname: string;
  slug: {
    current: string;
  };
  quantityofproduct: number;
}

const TopCategories = async () => {
  const topProducts = await fetchTopProducts();

  return (
    <div className="pl-10 xl:pl-36 py-20 max-w-[1500px] mx-auto">
      <div className="w-full mx-auto relative flex justify-center xl:justify-between items-end gap-28">
        <h1 className="text-3xl font-semibold">Top Categories</h1>
      </div>

      <div className="h-auto flex-wrap xl:flex-nowrap mt-8 flex xl:justify-between items-center gap-5 justify-center">
        {topProducts.map((product: TopProductType) => (
          <div key={product.slug.current}>
            <div className="flex flex-col">
              <div className="hover:scale-105 duration-300 ease-in-out cursor-pointer pr-10 relative flex justify-center items-center w-full h-full object-center rounded-lg bg-second1 group">
                <Image
                  src={urlFor(product.image).url()}
                  alt={product.productname}
                  width="400"
                  height="400"
                />

                <div className="absolute bottom-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 w-[90%] bg-black bg-opacity-70 text-white py-5 px-4 rounded-b-md">
                  <h1>{product.productname}</h1>
                  <p>{product.quantityofproduct} Products</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TopCategories;
