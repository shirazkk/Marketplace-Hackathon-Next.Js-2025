import React from "react";
import { ShoppingCart } from "lucide-react";
import Image from "next/image";
import { Button } from "../ui/button";
import Link from "next/link";
import client from "@/sanity/lib/client";
import { ProductsType } from "../../../types";

interface ReletedProductsProps {
  categoryId: string; // Current product's category ID
  currentProductId: string; // Current product's ID
}

const ReletedProducts = async ({
  categoryId,
  currentProductId,
}: ReletedProductsProps) => {
  // Query to fetch related products by category
  const query = `
    *[_type == "products" && category._ref == $categoryId && _id != $currentProductId][0...4] {
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

  const ReletedProducts: ProductsType[] = await client.fetch(query, {
    categoryId,
    currentProductId,
  });

  if (ReletedProducts.length === 0) {
    return null; // No related products, return nothing
  }

  return (
    <div className="px-4 py-14 max-w-[1500px] mx-auto">
      <div className="flex w-[95%] justify-between items-center mb-3">
        <h1 className="text-3xl font-bold">Releted Products</h1>
        <Link href="/products">
          <Button
            variant="link"
            className="text-black hover:text-hover font-bold underline"
          >
            View all
          </Button>
        </Link>
      </div>

      <div className="mt-12">
        <div className="grid md:grid-cols-3 grid-cols-1 lg:grid-cols-3 xl:grid-cols-4 gap-6 h-auto justify-items-center md:justify-items-stretch">
          {ReletedProducts.map((product) => (
            <Link
              href={`/products/${product.slug.current}`}
              key={product._id}
              className="flex flex-col justify-center items-center text-center max-w-[250px]"
            >
              {/* Product Image Section */}
              <div className="hover:scale-105 duration-300 ease-in-out cursor-pointer relative flex justify-center overflow-hidden items-center w-64 h-64 object-center rounded-lg">
                <Image
                  src={product.imageUrl}
                  alt={product.title}
                  width={160}
                  height={160}
                  quality={100}
                  loading="lazy"
                  className="w-full h-auto"
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
                      } rounded-md px-3 py-1 text-center text-white`}
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
          ))}
        </div>
      </div>
    </div>
  );
};

export default ReletedProducts;
