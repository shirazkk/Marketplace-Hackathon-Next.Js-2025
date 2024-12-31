import React from "react";
import { ShoppingCart } from "lucide-react";
import Image from "next/image";
import { Button } from "../ui/button";
import Link from "next/link";
import { fetchProducts } from "@/sanity/lib/quries";
import { urlFor } from "@/sanity/lib/image";

interface ProductsType {
  image: string;
  name: string;
  slug: {
    current: string;
  };
  price: string;
}

const AllProducts = async () => {
  const allproducts = await fetchProducts();

  return (
    <div className=" lg:pl-24 xl:pl-36 md:pl-10 pl-5 py-14 max-w-[1500px] mx-auto px-5">
      <div className="relative flex justify-between items-end gap-28">
        <h1 className="text-3xl text-center md:text-left font-semibold w-full">
          All Products
        </h1>
      </div>
      <div className="w-full justify-center items-center grid md:grid-cols-3 grid-cols-1 lg:grid-cols-3 xl:grid-cols-4 gap-6 mt-7 h-auto  justify-items-center md:justify-items-stretch">
        {allproducts.map((product: ProductsType, index: number) => (
          <Link
            key={product.slug.current}
            href={`/products/${product.slug.current}`}
          >
            <div className="flex flex-col  justify-center items-center text-center max-w-[250px]">
              <div className="hover:scale-105 duration-300 ease-in-out cursor-pointer relative flex justify-center items-center w-64 h-64 object-center rounded-lg">
                <Image
                  src={urlFor(product.image).url()}
                  alt={product.name}
                  width="160"
                  height="160"
                  className="w-full h-full"
                />
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
              <div className="w-full flex justify-between items-center">
                <div>
                  <h2 className="text-left hover:text-second text-black text-base font-medium mt-4">
                    {product.name}
                  </h2>
                  <div className="flex gap-1 items-center mt-2">
                    <p className="text-lg text-button2 font-medium ">
                      ${product.price}
                    </p>
                    <p
                      className={`${
                        index === 1 || index === 5 || index === 9
                          ? "block"
                          : "hidden"
                      }   text-fourth line-through`}
                    >
                      $30
                    </p>
                  </div>
                </div>
                <div className="ml-auto">
                  <Button className="w-full text-black hover:text-white hover:bg-second bg-third font-medium">
                    <ShoppingCart className="scale-125" strokeWidth={1.25} />
                  </Button>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default AllProducts;
