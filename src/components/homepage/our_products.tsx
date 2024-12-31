import React from "react";
import { ShoppingCart } from "lucide-react";
import Image from "next/image";
import { Button } from "../ui/button";
import { urlFor } from "@/sanity/lib/image";
import { fetchProducts } from "@/sanity/lib/quries";
import Link from "next/link";

interface ProductsType {
  image: string;
  name: string;
  slug: {
    current: string;
  };
  price: string;
}

const OurProducts = async () => {
  const ournewproducts = await fetchProducts();

  return (
    <div className="lg:pl-24 xl:pl-36 md:pl-10 pl-5 py-14 max-w-[1500px] mx-auto px-5">
      {/* Header Section */}
      <div className="relative flex justify-between items-end gap-28">
        <h1 className="text-3xl text-center font-semibold w-full">
          Our Products
        </h1>
      </div>

      <div className="w-full justify-center items-center grid md:grid-cols-3 grid-cols-1 lg:grid-cols-3 xl:grid-cols-4 gap-6 mt-7 h-auto  justify-items-center md:justify-items-stretch">
        {ournewproducts
          .slice(1, 9)
          .map((product: ProductsType, index: number) => (
            <Link
            href={`/products/${product.slug.current}`}
              key={product.slug.current}
              className="flex flex-col  justify-center items-center text-center max-w-[250px]"
            >
              {/* Product Image Section */}
              <div className="hover:scale-105 duration-300 ease-in-out cursor-pointer relative flex justify-center  items-center w-64 h-64 object-center rounded-lg ">
                <Image
                  src={urlFor(product.image).url()}
                  alt={product.name}
                  width={160}
                  height={160}
                  className="w-full h-auto"
                />
                {/* New or Sales Tag */}
                <div
                  className={`${
                    index === 0 || index === 1 || index === 4 || index === 5
                      ? "block"
                      : "hidden"
                  } py-2 px-3 absolute top-2 left-0`}
                >
                  <p
                    className={`${
                      index === 0 || index === 4 ? "bg-new" : "bg-sales"
                    }  rounded-md px-3 py-1 text-center text-white`}
                  >
                    {index === 0 || index === 4 ? "New" : "Sales"}
                  </p>
                </div>
              </div>

              {/* Product Info Section */}
              <div className="flex justify-between items-center w-full mt-3">
                <div className="flex flex-col text-left">
                  <h2 className="hover:text-second text-black text-base font-medium mt-1">
                    {product.name}
                  </h2>
                  <p className="text-base text-button2 font-medium mt-1">
                    ${product.price}
                  </p>
                </div>
                <div className="ml-auto">
                  <Button className="w-full text-black hover:text-white hover:bg-second bg-third font-medium">
                    <ShoppingCart className="scale-125" strokeWidth={1.25} />
                  </Button>
                </div>
              </div>
            </Link>
          ))}
      </div>
    </div>
  );
};

export default OurProducts;
