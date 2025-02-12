"use client";
import { FaTrash, FaHeart, FaShoppingBag } from "react-icons/fa";
import { useWishlist } from "./wishlistcontext";
import Image from "next/image";
import { Button } from "../ui/button";
import AddToCart from "../cartcomponents/addtocart";

const Wishlist = () => {
  const { wishlist, removeFromWishlist } = useWishlist();

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-3xl font-bold flex items-center gap-3">
            <FaHeart className="text-[#007580]" />
            <span className="bg-gradient-to-r from-[#007580] to-teal-600 bg-clip-text text-transparent">
              Your Wishlist
            </span>
          </h1>
          <span className="text-sm text-gray-500">
            {wishlist.length} {wishlist.length === 1 ? "item" : "items"}
          </span>
        </div>

        {wishlist.length === 0 ? (
          <div className="flex flex-col items-center justify-center h-96 bg-white rounded-2xl shadow-sm p-8">
            <div className="relative w-40 h-40 mb-6">
              <Image
                src="/wishlist-empty.svg"
                alt="Empty Wishlist"
                fill
                className="object-contain"
                priority
              />
            </div>
            <h2 className="text-2xl font-semibold text-gray-800 mb-3">
              Your Wishlist is Empty
            </h2>
            <p className="text-gray-600 text-center mb-8 max-w-md">
              Start adding items you love to your wishlist and keep track of
              them all in one place.
            </p>
            <Button
              className="bg-[#007580] hover:bg-[#006570] text-white py-3 px-8 rounded-full transition-all duration-300 flex items-center gap-2"
              onClick={() => {
                window.location.href = "/";
              }}
            >
              <FaShoppingBag className="w-4 h-4" />
              Browse Products
            </Button>
          </div>
        ) : (
          <div className="grid gap-6">
            {wishlist.map((item) => (
              <div
                key={item.id}
                className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100"
              >
                <div className="flex flex-col sm:flex-row items-center gap-6">
                  <div className="relative w-24 h-24 sm:w-32 sm:h-32">
                    <Image
                      src={item.image}
                      alt={item.name}
                      fill
                      className="object-cover rounded-lg"
                      sizes="(max-width: 768px) 96px, 128px"
                    />
                  </div>

                  <div className="flex-grow text-center sm:text-left">
                    <h3 className="text-lg font-semibold text-gray-800 mb-2">
                      {item.name}
                    </h3>
                    <p className="text-2xl font-bold text-[#007580] mb-4">
                      ${item.price}
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 items-center">
                      <AddToCart
                        id={item.id}
                        name={item.name}
                        price={item.price}
                        currency="USD"
                        image={item.image || ""}
                      />
                      <Button
                        variant="outline"
                        onClick={() => removeFromWishlist(item.id)}
                        className="text-red-600 hover:bg-red-50 hover:text-red-700 border-red-200 flex items-center gap-2"
                      >
                        <FaTrash className="w-4 h-4" />
                        Remove
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Wishlist;
