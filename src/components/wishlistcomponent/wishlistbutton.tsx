"use client";
import { Button } from "@/components/ui/button";
import { useWishlist } from "./wishlistcontext";
import { FaHeart } from "react-icons/fa";
import { useState } from "react";

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

      {/* Notification Popup at the top of the page */}
      {notification && (
        <div
          role="alert"
          className="py-4 px-8 fixed top-5 left-1/2 transform -translate-x-1/2 bg-green-100 dark:bg-green-900 border-l-4 border-green-500 dark:border-green-700 text-green-900 dark:text-green-100 p-2 rounded-lg flex items-center transition-all duration-500 ease-in-out"
        >
          <p>Item added to wishlist!</p>
        </div>
      )}
    </div>
  );
}
