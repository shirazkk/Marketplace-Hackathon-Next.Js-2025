"use client";
import React, { useState } from "react";
import { ProductsType } from "../../../types";
import { searchProducts } from "@/sanity/lib/quries";

import { ShoppingCart } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const ProductSearch = () => {
  const [query, setQuery] = useState<string>(""); // User's search term
  const [products, setProducts] = useState<ProductsType[]>([]); // Search results
  const [error, setError] = useState<string>("");

  const handleSearch = async () => {
    try {
      // GROQ Query for searching products
      const term = query.trim(); // Remove extra spaces
      if (!term) {
        setError("Please enter a search term");
        setProducts([]);
        return;
      }
      const results = await searchProducts(term);
      setProducts(results);

      if (results.length === 0) {
        setError("No products found.");
      } else {
        setError(""); // Clear error if results are found
      }
    } catch (err) {
      console.error(err);
      setError("Something went wrong while searching.");
    }
  };

  return (
    <div className="p-4">
      <h1 className="text-xl font-bold mb-4">Search Products</h1>
      <div className="flex flex-wrap items-center gap-2">
        <input
          type="text"
          placeholder="Search for a product..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="border rounded-md p-2 flex-1"
        />
        <button
          onClick={handleSearch}
          className="bg-blue-500 text-white px-4 py-2 rounded-md"
        >
          Search
        </button>
      </div>

      {error && <p className="text-red-500 mt-2">{error}</p>}

      <div className="mt-4">
        {products.length > 0 ? (
          <div className="w-full justify-center items-center grid md:grid-cols-3 grid-cols-1 lg:grid-cols-3 xl:grid-cols-4 gap-6 mt-7 h-auto  justify-items-center md:justify-items-stretch">
            {products.map((product: ProductsType) => (
              <Link
                key={product.slug.current}
                href={`/products/${product.slug.current}`}
              >
                <div className="flex flex-col  justify-center items-center text-center max-w-[250px]">
                  <div className="hover:scale-105 duration-300 ease-in-out cursor-pointer relative flex justify-center items-center w-64 h-64 object-center rounded-lg">
                    <Image
                      src={product.imageUrl}
                      alt={product.title}
                      width="160"
                      height="160"
                      quality={100}
                      loading="lazy"
                      className="w-full h-full"
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
                  <div className="w-full flex justify-between items-center">
                    <div>
                      <h2 className="text-left hover:text-second text-black text-base font-medium mt-4">
                        {product.title}
                      </h2>
                      <div className="flex gap-1 items-center mt-2">
                        <p className="text-lg text-button2 font-medium ">
                          ${product.price}
                        </p>
                        <p className="text-fourth line-through">
                          {product.priceWithoutDiscount}
                        </p>
                      </div>
                    </div>
                    <div className="ml-auto">
                      <Button className="w-full text-black hover:text-white hover:bg-second bg-third font-medium">
                        <ShoppingCart
                          className="scale-125"
                          strokeWidth={1.25}
                        />
                      </Button>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        ) : (
          !error && <p>No products to display.</p>
        )}
      </div>
    </div>
  );
};

export default ProductSearch;
