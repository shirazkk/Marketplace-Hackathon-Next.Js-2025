import React from "react";
import Image from "next/image";

const TopCategories = () => {
  const products = [
    {
      id: 1,
      name: "Wing Chair",
      qunatity: "3,584 Products",
      image: "/homepage/image.png",
    },
    {
      id: 2,
      name: "Wooden Chair",
      qunatity: "157 Products",
      image: "/homepage/image_4.png",
    },
    {
      id: 3,
      name: "Desk Chair",
      qunatity: "154 Products",
      image: "/homepage/image_5.png",
    },
  ];

  return (
    <div className="pl-10 xl:pl-36 py-20 max-w-[1500px] mx-auto">
      <div className="w-full mx-auto relative flex justify-center xl:justify-between items-end gap-28">
        <h1 className="text-3xl font-semibold">Top Categories</h1>
      </div>

      <div className="h-auto flex-wrap xl:flex-nowrap mt-8 flex xl:justify-between items-center gap-5 justify-center">
        {products.map((product) => (
          <div key={product.id}>
            <div className="flex flex-col">
              <div className="pr-10 relative flex justify-center items-center w-full h-full object-center rounded-lg bg-second1 group">
                <Image
                  src={product.image}
                  alt={product.name}
                  width="400"
                  height="400"
                />

                <div className="absolute bottom-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 w-[90%] bg-black bg-opacity-70 text-white py-5 px-4 rounded-b-md">
                  <h1>{product.name}</h1>
                  <p>{product.qunatity}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TopCategories;
