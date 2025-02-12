"use client";
import { Button } from "@/components/ui/button";
import { useWishlist } from "./wishlistcontext";
import { FaHeart } from "react-icons/fa";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

interface AddToWishlistProps {
  productId: string;
  productName: string;
  productImage: string;
  productPrice: number;
}

export default function AddToWishlist({
  productId,
  productName,
  productImage,
  productPrice,
}: AddToWishlistProps) {
  const { addToWishlist } = useWishlist(); // Wishlist context or provider
  const [notification, setNotification] = useState(false);

  const handleAddToWishlist = () => {
    addToWishlist({
      id: productId,
      name: productName,
      image: productImage,
      price: productPrice,
    });

    // Show the notification and start the loading effect
    setNotification(true);

    // After 2 seconds, hide the notification and stop the loading effect
    setTimeout(() => {
      setTimeout(() => {
        setNotification(false);
      }, 300); // Delay before hiding notification for smooth animation
    }, 2000); // Loading effect lasts for 2 seconds
  };

  return (
    <div className="relative">
      <Button
        onClick={handleAddToWishlist}
        className="bg-second py-4 mx-auto md:mx-0 md:py-6 px-4 md:px-6 hover:bg-hover text-white flex items-center w-fit"
      >
        <FaHeart className="mr-1" />
        Add to Wishlist
      </Button>

      <AnimatePresence>
        {notification && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed top-4 left-1/2 -translate-x-1/2 z-50 w-full max-w-md"
          >
            <div className="bg-white rounded-lg shadow-xl p-4 flex items-center gap-3 border border-gray-100">
              <div className="flex-shrink-0">
                <div className="h-12 w-12 rounded-lg bg-indigo-100 flex items-center justify-center">
                  <Image
                    src={productImage}
                    alt={productName}
                    width="100"
                    height="100"
                    className="h-8 w-8 object-cover rounded"
                  />
                </div>
              </div>
              <div>
                <h3 className="font-medium text-gray-900">
                  Added to Wishlist!
                </h3>
                <p className="text-sm text-gray-600">{productName}</p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
