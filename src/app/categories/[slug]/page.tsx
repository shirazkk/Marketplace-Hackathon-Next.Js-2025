"use client";
import { use } from "react";
import React, { useEffect, useState } from "react";
import client from "@/sanity/lib/client";
import Image from "next/image";
import Link from "next/link";
import { ProductsType } from "../../../../types";
import { Button } from "@/components/ui/button";

const CategoryProductsPage = ({
  params,
}: {
  params: Promise<{ slug: string }>;
}) => {
  const { slug } = use(params); // Unwrap the `params` promise.

  const [products, setProducts] = useState<ProductsType[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchProducts = async () => {
      setLoading(true);
      const query = `
        *[_type == "products" && category->title match $slug] {
          _id,
          title,
          slug,
          price,
          "imageUrl": image.asset->url,
          category->{
            title
          },
        }
      `;
      try {
        const fetchedProducts: ProductsType[] = await client.fetch(query, {
          slug,
        });
        setProducts(fetchedProducts);
      } catch (error) {
        console.error("Error fetching products:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, [slug]);

  if (loading) {
    return (
      <div className="py-20 max-w-[1500px] mx-auto px-4">
        <h1 className="text-3xl font-semibold mb-8 text-center">
          Loading Products...
        </h1>
        <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-8">
          {Array.from({ length: 8 }).map((_, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center animate-pulse"
            >
              <div className="w-64 h-64 bg-gray-300 rounded-lg"></div>
              <div className="mt-4 h-6 w-3/4 bg-gray-300 rounded"></div>
              <div className="mt-2 h-4 w-1/2 bg-gray-300 rounded"></div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  if (products.length === 0) {
    return (
      <div className="py-20 text-center">
        <h1 className="text-2xl font-semibold">No Products Found</h1>
        <p>There are no products available for this category.</p>
        <Link href="/">
          <Button className="mt-4 bg-gray-800 text-white px-4 py-2 rounded">
            Back to Categories
          </Button>
        </Link>
      </div>
    );
  }

  return (
    <div className="py-20 max-w-[1500px] mx-auto px-4">
      <h1 className="text-3xl font-semibold mb-8 text-center">
        {products[0]?.category?.title}
      </h1>
      <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-8">
        {products.map((product) => (
          <Link href={`/products/${product.slug.current}`} key={product._id}>
            <div className="hover:scale-105 duration-300 ease-in-out cursor-pointer flex flex-col items-center">
              <div className="relative w-64 h-64">
                {product.imageUrl && (
                  <Image
                    src={product.imageUrl}
                    alt={product.title}
                    layout="fill"
                    className="object-cover rounded-lg"
                  />
                )}
              </div>
              <h2 className="mt-4 text-lg font-medium">{product.title}</h2>
              <p className="text-base font-semibold">${product.price}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default CategoryProductsPage;
