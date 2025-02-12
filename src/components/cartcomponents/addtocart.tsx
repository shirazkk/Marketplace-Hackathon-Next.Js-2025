"use client";
import { ShoppingCart } from "lucide-react";
import { Button } from "../ui/button";
import { useShoppingCart } from "use-shopping-cart";
import { useState } from "react";
import { urlFor } from "@/sanity/lib/image";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

export interface ProductCart {
  id: string; // Sanity product ID
  name: string;
  description?: string;
  price: number;
  currency: string;
  image: string;
}

export default function AddToCart({
  id, // Sanity product ID
  currency,
  description,
  image,
  name,
  price,
}: ProductCart) {
  const { addItem } = useShoppingCart();
  const [notification, setNotification] = useState(false);

  const product = {
    id,
    name,
    description,
    price,
    currency,
    image: urlFor(image).url(),
  };

  const handleAddToCart = () => {
    addItem(product);
    setNotification(true);

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
                    src={product.image}
                    alt={product.name}
                    width="100"
                    height="100"
                    className="h-8 w-8 object-cover rounded"
                  />
                </div>
              </div>
              <div>
                <h3 className="font-medium text-gray-900">Added to Cart!</h3>
                <p className="text-sm text-gray-600">{product.name}</p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
