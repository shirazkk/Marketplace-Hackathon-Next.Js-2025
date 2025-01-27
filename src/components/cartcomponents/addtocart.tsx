"use client";
import { Button } from "@/components/ui/button";
import { urlFor } from "@/sanity/lib/image";
import { ShoppingCart } from "lucide-react";
import { useState } from "react";
import { useShoppingCart } from "use-shopping-cart";

export interface ProductCart {
  name: string;
  description?: string;
  price: number;
  currency: string;
  image: string;
  price_id: string;
}

export default function AddToCart({
  currency,
  description,
  image,
  name,
  price,
  price_id,
}: ProductCart) {
  const { addItem } = useShoppingCart();
  const [notification, setNotification] = useState(false);

  const product = {
    name: name,
    description: description,
    price: price,
    currency: currency,
    image: urlFor(image).url(),
    price_id: price_id,
  };

  const handleAddToCart = () => {
    addItem(product);
    setNotification(true);

    // Reset the notification state after 3 seconds
    setTimeout(() => {
      setNotification(false);
    }, 2000);
  };

  return (
    <div className="relative">
      <Button
        onClick={handleAddToCart}
        className="bg-second py-4 mx-auto md:mx-0 md:py-6 px-4 md:px-6 hover:bg-hover text-white flex items-center w-fit"
      >
        <ShoppingCart className="mr-1" />
        Add to Cart
      </Button>

      {/* Notification Popup */}
      {notification && (
        <div className="py-4 px-8 fixed top-5 left-1/2 transform -translate-x-1/2 bg-green-100 dark:bg-green-900 border-l-4 border-green-500 dark:border-green-700 text-green-900 dark:text-green-100 p-2 rounded-lg flex items-center transition-all duration-500 ease-in-out">
          <p>Item added to cart!</p>
        </div>
      )}
    </div>
  );
}
