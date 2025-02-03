"use client";
import { FaTrash, FaHeart } from "react-icons/fa"; // Icons for removing items and empty state
import { useWishlist } from "./wishlistcontext";
import Image from "next/image";
import { Button } from "../ui/button";
import AddToCart from "../cartcomponents/addtocart";

const Wishlist = () => {
  const { wishlist, removeFromWishlist } = useWishlist();

  return (
    <div className="min-h-screen bg-gray-50 py-10">
      <div className="max-w-7xl  mx-auto px-4">
        <h1 className="text-3xl font-semibold mb-8 flex items-center gap-2">
          <FaHeart className="text-[#007580]" /> Your Wishlist
        </h1>

        {wishlist.length === 0 ? (
          <div className="flex flex-col items-center justify-center h-96">
            <Image
              src="/wishlist-empty.svg"
              alt="Empty Wishlist"
              width={150}
              height={150}
              quality={100}
              loading="lazy"
              className="mb-6"
            />
            <h1 className="text-2xl font-semibold text-gray-800 mb-2">
              Your Wishlist is empty
            </h1>
            <p className="text-gray-600 mb-6">
              Looks like you haven’t added anything to your wishlist yet.
            </p>
            <Button
              className="bg-black text-white py-3 px-6 rounded-lg hover:bg-gray-800"
              onClick={() => {
                window.location.href = "/";
              }}
            >
              Continue Shopping
            </Button>
          </div>
        ) : (
          <div className="space-y-6">
            {wishlist.map((item) => (
              <div
                key={item.id}
                className="flex flex-col gap-7 sm:gap-0 sm:flex-row items-center justify-between bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
              >
                {/* Left side: Product image and details */}
                <div className="flex items-center gap-4">
                  <Image
                    src={item.image}
                    alt={item.name}
                    width={80}
                    height={80}
                    quality={100}
                    className="h-20 w-20 object-cover rounded-lg"
                  />
                  <div>
                    <p className="text-lg font-medium">{item.name}</p>
                    <p className="text-sm text-gray-600">${item.price}</p>
                  </div>
                </div>

                {/* Right side: Remove button */}
                <Button
                  variant="ghost"
                  onClick={() => removeFromWishlist(item.id)}
                  className="text-red-600 hover:text-red-800"
                >
                  <FaTrash className="w-5 h-5" />
                </Button>
                <AddToCart
                  id={item.id}
                  key={item.id}
                  name={item.name}
                  price={item.price}
                  currency="USD"
                  image={item.image || ""}
                />
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Wishlist;
