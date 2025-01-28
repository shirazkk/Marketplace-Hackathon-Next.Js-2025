import React from "react";
import { ShoppingCart } from "lucide-react";
import Image from "next/image";
import { Button } from "../ui/button";
import Link from "next/link";
import client from "@/sanity/lib/client";
import { ProductsType } from "../../../types";

const FeatureProducts = async () => {
  const query = `*[_type == "products" && "featured" in tags] {
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
  const fetchFeatureProducts = await client.fetch(query);

  return (
    <div className="px-4 py-14 max-w-[1500px] mx-auto">
      <div className="w-[85%] relative flex justify-between items-end gap-6 mx-auto">
        <h1 className="text-3xl font-semibold">Featured Products</h1>
      </div>

      {/* Products Grid */}
      <div className="w-[85%] mx-auto  grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4  gap-6 mt-7">
        {fetchFeatureProducts.map((product: ProductsType) => (
          <Link
            href={`/products/${product.slug.current}`}
            key={product.slug.current}
            className="flex flex-col"
          >
            <div className="hover:scale-105 duration-300 ease-in-out cursor-pointer relative flex justify-center items-center w-auto h-auto rounded-lg">
              <Image
                src={product.imageUrl}
                alt={product.title}
                width={160}
                loading="lazy"
                height={160}
                quality={100}
                className="w-full h-full object-center rounded-lg"
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
            <div className="flex justify-between items-center mt-4">
              <div>
                <h2 className="text-left hover:text-second text-black text-base font-medium">
                  {product.title}
                </h2>
                <div className="flex text-center gap-3  items-center ">
                  <p className="text-base text-button2 font-medium mt-2">
                    ${product.price}
                  </p>
                  <p className="text-fourth line-through mt-2">
                    {product.priceWithoutDiscount ? (
                      <span>${product.priceWithoutDiscount}</span>
                    ) : (
                      ""
                    )}
                  </p>
                </div>
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
