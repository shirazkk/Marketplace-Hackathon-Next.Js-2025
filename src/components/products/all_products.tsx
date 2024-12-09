import React from "react";
import { ShoppingCart } from "lucide-react";
import Image from "next/image";
import { Button } from "../ui/button";

const AllProducts = () => {
  const products = [
    {
      id: 1,
      name: "Library Stool Chair",
      price: {
        price1: "$20",
        price2: "$30",
      },
      image: "/homepage/image-6.png",
    },
    {
      id: 2,
      name: "Library Stool Chair",
      price: {
        price1: "$20",
        price2: "$30",
      },
      image: "/homepage/image-7.png",
    },
    {
      id: 3,
      name: "Library Stool Chair",
      price: {
        price1: "$20",
        price2: "$30",
      },
      image: "/homepage/image-8.png",
    },
    {
      id: 4,
      name: "Library Stool Chair",
      price: {
        price1: "$20",
        price2: "$30",
      },
      image: "/homepage/image-9.png",
    },
    {
      id: 5,
      name: "Library Stool Chair",
      price: {
        price1: "$20",
        price2: "$30",
      },
      image: "/homepage/image-4.png",
    },
    {
      id: 6,
      name: "Library Stool Chair",
      price: {
        price1: "$20",
        price2: "$30",
      },
      image: "/homepage/image-1.png",
    },
    {
      id: 7,
      name: "Library Stool Chair",
      price: {
        price1: "$20",
        price2: "$30",
      },
      image: "/homepage/image-2.png",
    },
    {
      id: 8,
      name: "Library Stool Chair",
      price: {
        price1: "$20",
        price2: "$30",
      },
      image: "/homepage/image-6.png",
    },
    {
      id: 9,
      name: "Library Stool Chair",
      price: {
        price1: "$20",
        price2: "$30",
      },
      image: "/homepage/image.png",
    },
    {
      id: 10,
      name: "Library Stool Chair",
      price: {
        price1: "$20",
        price2: "$30",
      },
      image: "/homepage/image-7.png",
    },
    {
      id: 11,
      name: "Library Stool Chair",
      price: {
        price1: "$20",
        price2: "$30",
      },
      image: "/homepage/image-8.png",
    },
    {
      id: 12,
      name: "Library Stool Chair",
      price: {
        price1: "$20",
        price2: "$30",
      },
      image: "/homepage/image-5.png",
    },
  ];

  return (
    <div className=" lg:pl-24 xl:pl-36 md:pl-10 pl-5 py-14 max-w-[1500px] mx-auto px-5">
      <div className="relative flex justify-between items-end gap-28">
        <h1 className="text-3xl text-center md:text-left font-semibold w-full">
          All Products
        </h1>
      </div>

      <div className="w-full justify-center items-center grid md:grid-cols-3 grid-cols-1 lg:grid-cols-3 xl:grid-cols-4 gap-6 mt-7 h-auto  justify-items-center md:justify-items-stretch">
        {products.map((product) => (
          <div
            key={product.id}
            className="flex flex-col  justify-center items-center text-center max-w-[250px]"
          >
            <div className="relative flex justify-center items-center w-64 h-64 object-center rounded-lg">
              <Image
                src={product.image}
                alt={product.name}
                width="160"
                height="160"
                className="w-full h-full"
              />
              <div
                className={`${
                  product.id === 1 ||
                  product.id === 2 ||
                  product.id === 5 ||
                  product.id === 6 ||
                  product.id === 9 ||
                  product.id === 10
                    ? "block"
                    : "hidden"
                } py-2 px-3 absolute top-2 left-0`}
              >
                <p
                  className={`${
                    product.id === 1 || product.id === 5 || product.id === 9
                      ? "bg-new"
                      : "bg-sales"
                  }  rounded-md px-3 py-1 text-center text-white`}
                >
                  {product.id === 1 || product.id === 5 || product.id === 9
                    ? "New"
                    : "Sales"}
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
                    {product.price.price1}
                  </p>
                  <p
                    className={`${
                      product.id === 2 || product.id === 6 || product.id === 10
                        ? "block"
                        : "hidden"
                    }   text-fourth line-through`}
                  >
                    {product.price.price2}
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
        ))}
      </div>
    </div>
  );
};

export default AllProducts;
