import React from "react";
import Image from "next/image";
import Link from "next/link";
import client from "@/sanity/lib/client";
import { CategoryType } from "../../../types";

const Categories = async () => {
  const query = `
    *[_type == "categories"] {
      _id,
      title,
      "imageUrl": image.asset->url,
      products
    }
  `;
  const fetchCategories: CategoryType[] = await client.fetch(query);

  return (
    <div className="pl-10 xl:pl-36 py-20 max-w-[1500px] mx-auto">
      <div className="w-full mx-auto relative flex justify-center xl:justify-between items-end gap-28">
        <h1 className="text-3xl font-semibold">Top Categories</h1>
      </div>

      <div className="h-auto flex-wrap xl:flex-nowrap mt-8 flex xl:justify-between items-center gap-5 justify-center">
        {fetchCategories.map((category) => (
          <Link href={`/categories/${category.title.toLowerCase().replace(/ /g, "-")}`} key={category._id}>
            <div>
              <div className="flex flex-col">
                <div className="hover:scale-105 duration-300 ease-in-out cursor-pointer pr-10 relative flex justify-center items-center w-full h-full object-center rounded-lg bg-second1 group">
                  <Image
                    src={category.imageUrl}
                    alt={category.title}
                    loading="lazy"
                    width={400}
                    height={400}
                    quality={100}
                    className="rounded-lg"
                  />
                  <div className="absolute bottom-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 w-[90%] bg-black bg-opacity-70 text-white py-5 px-4 rounded-b-md">
                    <h1 className="text-lg font-semibold">{category.title}</h1>
                    <p className="text-sm">{category.products} Products</p>
                  </div>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Categories;
