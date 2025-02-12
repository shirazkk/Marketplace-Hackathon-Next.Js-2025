import React from "react";
import { ShoppingCart } from "lucide-react";
import Image from "next/image";
import { Button } from "../ui/button";
import Link from "next/link";
import client from "@/sanity/lib/client";
import { ProductsType } from "../../../types";

const OurProducts = async () => {
  const query = `
*[_type == "products"] | order(price desc)[0...8] {
  _id,
  title,
  slug,
  price,
  priceWithoutDiscount,
  badge,
  "imageUrl": image.asset->url,
  category->{
    _id,
    title
  },
  description,
  inventory,
  tags
}
`;
  const fetchOurProducts = await client.fetch(query);

  return (
    <div className="lg:pl-24 xl:pl-36 md:pl-10 pl-5 py-14 max-w-[1500px] mx-auto px-5">
      {/* Header Section */}
      <div className="relative flex justify-between items-end gap-28">
        <h1 className="text-3xl text-center font-semibold w-full">
          Our Products
        </h1>
      </div>

      <div className="w-full justify-center items-center grid md:grid-cols-3 grid-cols-1 lg:grid-cols-3 xl:grid-cols-4 gap-6 mt-16 h-auto  justify-items-center md:justify-items-stretch">
        {fetchOurProducts.length === 0 ? (
          <p>No products available. Please check back later.</p>
        ) : (
          fetchOurProducts.map((product: ProductsType) => (
            <Link
              href={`/products/${product.slug.current}`}
              key={product.slug.current}
              className="flex flex-col  justify-center items-center text-center max-w-[250px]"
            >
              {/* Product Image Section */}
              <div className="hover:scale-105 duration-300 ease-in-out cursor-pointer relative flex justify-center overflow-hidden  items-center w-64 h-64 object-center rounded-lg ">
                <Image
                  src={product.imageUrl}
                  alt={product.title}
                  width={160}
                  height={160}
                  quality={100}
                  loading="lazy"
                  className="w-full h-auto "
                />
                {product.badge && (
                  <div className="py-2 px-3 absolute top-2 left-0">
                    <p
                      className={`${
                        product.badge === "New"
                          ? "bg-new"
                          : product.badge === "Sales"
                            ? "bg-orange-500"
                            : ""
                      }  rounded-md px-3 py-1 text-center text-white`}
                    >
                      {product.badge}
                    </p>
                  </div>
                )}
              </div>

              {/* Product Info Section */}
              <div className="flex justify-between items-center w-full mt-3">
                <div className="flex flex-col text-left">
                  <h2 className="hover:text-second text-black text-base font-medium mt-1">
                    {product.title}
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
          ))
        )}
      </div>
    </div>
  );
};

export default OurProducts;
