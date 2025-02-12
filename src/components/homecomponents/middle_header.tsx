"use client";
import { Heart, ShoppingCart } from "lucide-react";
import { Button } from "../ui/button";
import Image from "next/image";
import Link from "next/link";
import { useShoppingCart } from "use-shopping-cart";
import { useWishlist } from "../wishlistcomponent/wishlistcontext";
import SearchBar from "../searchproducts";

const MiddleHeader = () => {
  const { cartCount } = useShoppingCart();
  const { wishlist } = useWishlist();
  return (
    <div className="bg-third py-4 px-4 ">
      <div className=" w-full md:w-[90%] lg:w-[70%] mx-auto flex md:justify-between justify-center items-center max-w-[1500px]">
        {/* Left Side */}
        <Link
          href="/"
          className="flex items-center space-x-2 hover:scale-105 duration-300 ease-in-out cursor-pointer"
        >
          <Image
            src="/sofa_logo.png"
            alt="sofa-logo"
            width={30}
            height={30}
            quality={100}
          />
          <h1 className="text-2xl font-semibold">Comforty</h1>
        </Link>
       
        {/* Right Side */}
        <div className="md:flex hidden items-center space-x-4 ">
        <SearchBar />
          <div className=" space-x-4 hover:scale-105 duration-300 ease-in-out cursor-pointer">
            <Link href="/wishlist">
              <Button className="bg-white px-9 text-black hover:bg-hover relative">
                Wishlist
                <Heart
                  className="absolute left-2"
                  color="black"
                  strokeWidth={1.25}
                />
                <p className="bg-second w-5 h-5 rounded-full text-center absolute right-2 flex items-center justify-center">
                  {wishlist.length}
                </p>
              </Button>
            </Link>
          </div>
          <div className=" space-x-4 hover:scale-105 duration-300 ease-in-out cursor-pointer">
            <Link href="/cart">
              <Button className="bg-white px-9 text-black hover:bg-hover relative">
                Cart
                <ShoppingCart
                  className="absolute left-2"
                  color="black"
                  strokeWidth={1.25}
                />
                <p className="bg-second w-5 h-5 rounded-full text-center absolute right-2 flex items-center justify-center">
                  {cartCount || 0}
                </p>
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MiddleHeader;
