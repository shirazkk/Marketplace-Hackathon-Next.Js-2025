import React from "react";
import { ShoppingCart } from "lucide-react";
import Image from "next/image";
import { Button } from "../ui/button";

const OurProducts = () => {
  const products = [
    {
      id: 1,
      name: "Library Stool Chair",
      price: "$20",
      image: "/homepage/chair7.png",
    },
    {
      id: 2,
      name: "Library Stool Chair",
      price: "$20",
      image: "/homepage/chair8.png",
    },
    {
      id: 3,
      name: "Library Stool Chair",
      price: "$20",
      image: "/homepage/chair9.png",
    },
    {
      id: 4,
      name: "Library Stool Chair",
      price: "$20",
      image: "/homepage/chair10.png",
    },
    {
      id: 5,
      name: "Library Stool Chair",
      price: "$20",
      image: "/homepage/chair1.png",
    },
    {
      id: 6,
      name: "Library Stool Chair",
      price: "$20",
      image: "/homepage/chair2.png",
    },
    {
      id: 7,
      name: "Library Stool Chair",
      price: "$20",
      image: "/homepage/chair3.png",
    },
    {
      id: 8,
      name: "Library Stool Chair",
      price: "$20",
      image: "/homepage/chair7.png",
    },
  ];

  return (
    <div className="lg:pl-24 xl:pl-36 md:pl-10 pl-5 py-14 max-w-[1500px] mx-auto px-5">
      {/* Header Section */}
      <div className="relative flex justify-between items-end gap-28">
        <h1 className="text-3xl text-center font-semibold w-full">Our Products</h1>
      </div>

      {/* Products Grid - Centered Responsively */}
      <div className="w-full justify-center items-center grid md:grid-cols-3 grid-cols-1 lg:grid-cols-3 xl:grid-cols-4 gap-6 mt-7 h-auto  justify-items-center md:justify-items-stretch">
        {products.map((product) => (
          <div
            key={product.id}
            className="flex flex-col  justify-center items-center text-center max-w-[250px]"
          >
            {/* Product Image Section */}
            <div className="hover:scale-105 duration-300 ease-in-out cursor-pointer relative flex justify-center  items-center w-64 h-64 object-center rounded-lg ">
              <Image
                src={product.image}
                alt={product.name}
                width={160}
                height={160}
                className="w-full h-auto"
              />
              {/* New or Sales Tag */}
              <div
                className={`${
                  product.id === 1 || product.id === 2 || product.id === 5 || product.id === 6
                    ? "block"
                    : "hidden"
                } py-2 px-3 absolute top-2 left-0`}
              >
                <p
                  className={`${
                    product.id === 1 || product.id === 5 ? "bg-new" : "bg-sales"
                  }  rounded-md px-3 py-1 text-center text-white`}
                >
                  {product.id === 1 || product.id === 5 ? "New" : "Sales"}
                </p>
              </div>
            </div>

            {/* Product Info Section */}
            <div className="flex justify-between items-center w-full mt-3">
              <div className="flex flex-col text-left">
                <h2 className="hover:text-second text-black text-base font-medium mt-1">
                  {product.name}
                </h2>
                <p className="text-base text-button2 font-medium mt-1">{product.price}</p>
              </div>
              <div className="ml-auto">
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

export default OurProducts;
