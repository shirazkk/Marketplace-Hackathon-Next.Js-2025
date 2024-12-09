import React from "react";
import Image from "next/image";

const PopularProducts = () => {
  const products = [
    {
      id: 1,
      name: "The Poplar suede sofa",
      price: "$99.00",
      image: "/about/green_sofa.jpg",
    },
    {
      id: 2,
      name: "The Dandy chair",
      price: "$99.00",
      image: "/about/green_chair.jpg",
    },
    {
      id: 3,
      name: "The Dandy chair",
      price: "$99.00",
      image: "/homepage/chair9.png",
    },
  ];

  return (
    <div className="flex items-center  justify-center  w-[95%] xl:w-[90%] 2xl:w-[80%]  mx-auto mt-20">
      <div className="py-14 w-full max-w-[1500px] text-left">
        <h1 className="text-3xl font-semibold mb-6">Our Popular Products</h1>

        <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
          {products.map((product, index) => (
            <div
              key={product.id}
              className={`flex flex-col items-center ${
                index === 0 ? " lg:col-span-2" : "lg:col-span-1"
              }`}
              style={{
                height: "550px",
              }}
            >
              <div className="relative w-full h-3/4  overflow-hidden flex items-center justify-center">
                <Image
                  src={product.image}
                  alt={product.name}
                  layout="fill"
                  objectFit="cover"
                  quality={100}
                />
              </div>

              <div className="w-full text-center md:text-left mt-4 px-2">
                <h2 className="text-base font-medium hover:text-second mb-1">
                  {product.name}
                </h2>
                <p className="text-base text-button2 font-medium">
                  {product.price}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PopularProducts;
