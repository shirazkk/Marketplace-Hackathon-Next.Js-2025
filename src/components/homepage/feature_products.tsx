import React from "react";
import {ShoppingCart} from "lucide-react";
import Image from "next/image";
import { Button } from "../ui/button";

const FeatureProducts = () => {
  const products = [
    {
      id: 1,
      name: "Library Stool Chair",
      price: "$20",
      image: "/homepage/image-6.png",
    },
    {
      id: 2,
      name: "Library Stool Chair",
      price: "$20",
      image: "/homepage/image-7.png",
    },
    {
      id: 3,
      name: "Library Stool Chair",
      price: "$20",
      image: "/homepage/image-8.png",
    },
    {
      id: 4,
      name: "Library Stool Chair",
      price: "$20",
      image: "/homepage/image-9.png",
    },
  ];

  return (
    <div className="px-4 py-14 max-w-[1500px] mx-auto">
      <div className="w-[85%] relative flex justify-between items-end gap-6 mx-auto">
        <h1 className="text-3xl font-semibold">Featured Products</h1>
      </div>

      {/* Products Grid */}
      <div className="w-[85%] mx-auto  grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-7">
        {products.map((product) => (
          <div key={product.id} className="flex flex-col">
            <div className="relative flex justify-center items-center w-full h-64 object-center rounded-lg">
              <Image
                src={product.image}
                alt={product.name}
                width={160}
                height={160}
                quality={100}
                className="w-full h-full"
              />
              <div
                className={`${
                  product.id === 1 || product.id === 2 ? "block" : "hidden"
                } py-2 px-3 absolute top-2 left-0`}
              >
                <p
                  className={`${
                    product.id === 1 ? "bg-new" : "bg-sales"
                  }  rounded-md px-3 py-1 text-center text-white`}
                >
                  {product.id === 1 ? "New" : "Sales"}
                </p>
              </div>
            </div>
            <div className="flex justify-between items-center mt-4">
              <div>
                <h2 className="text-left hover:text-second text-black text-base font-medium">
                  {product.name}
                </h2>
                <p className="text-base text-button2 font-medium mt-2">
                  {product.price}
                </p>
              </div>
              <div>
                <Button className="w-full text-black hover:text-white hover:bg-second bg-third font-medium">
                  <ShoppingCart className="scale-125" strokeWidth={1.25} />
                </Button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeatureProducts;
