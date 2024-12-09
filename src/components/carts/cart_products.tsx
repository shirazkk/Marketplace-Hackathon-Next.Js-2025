import React from "react";
import Image from "next/image";
import { Heart } from "lucide-react";
import { MdOutlineDelete } from "react-icons/md";
import { Button } from "../ui/button";

const CartProducts = () => {
  const cartItems = [
    {
      id: 1,
      name: "Library Stool Chair",
      price: "$99",
      image: "/homepage/image_8.png",
      details: "Ashen Slate/Cobalt Bliss",
      size: "L",
      quantity: 1,
    },
    {
      id: 2,
      name: "Library Stool Chair",
      price: "$99",
      image: "/homepage/image_8.png",
      details: "Ashen Slate/Cobalt Bliss",
      size: "L",
      quantity: 1,
    },
  ];

  return (
    <div className="mx-auto w-[90%] py-8 max-w-[1500px]">
      <div className="flex flex-col lg:flex-row lg:gap-10 gap-4">
        <div className="w-full lg:w-[70%] h-auto px-4 p-4 lg:p-15 xl:p-20">
          <h1 className="font-semibold text-2xl mb-4">Bag</h1>
          <div className="flex flex-col gap-4">
            {cartItems.map((item) => (
              <div
                key={item.id}
                className="flex md:flex-row flex-col gap-5 mt-5 w-full border-b-2 py-5"
              >
                <div>
                  <Image
                    src={item.image}
                    alt={item.name}
                    width={200}
                    height={200}
                    quality={100}
                    className="mx-auto md:mx-0 "
                  />
                </div>

                <div className="w-full">
                  <div className="flex justify-between w-full">
                    <p>{item.name}</p>
                    <p>MRP: {item.price}</p>
                  </div>
                  <p className="text-fourth mt-4">{item.details}</p>
                  <div className="space-x-16 text-fourth mt-1">
                    <span>Size {item.size}</span>
                    <span>Quantity {item.quantity}</span>
                  </div>
                  <div className="flex gap-2 items-center mt-8">
                    <Heart />
                    <MdOutlineDelete size={25} />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="w-full lg:w-[50%]  p-4 lg:p-15 xl:p-20 ">
          <div className="flex justify-center flex-col gap-4">
            <h1 className="font-semibold text-2xl mb-3">Summary</h1>
            <div className="flex justify-between w-full mb-2">
              <p>Subtotal</p>
              <p>$198.00</p>
            </div>
            <div className="flex justify-between w-full border-b-[1px] pb-2 mb-2">
              <p>Estimated Delivery & Handling</p>
              <p>Free</p>
            </div>
            <div className="flex justify-between w-full border-b-[1px] pb-4 mb-2">
              <p>Total</p>
              <p>$198.00</p>
            </div>
            <div className="w-full mt-2">
              <Button className="w-full py-7 rounded-3xl cursor-pointer text-white bg-second hover:bg-hover">
                Member Checkout
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartProducts;
