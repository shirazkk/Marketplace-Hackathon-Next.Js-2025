"use client";
import { Button } from "@/components/ui/button";
import { urlFor } from "@/sanity/lib/image";
import { ShoppingCart } from "lucide-react";
import { useShoppingCart } from "use-shopping-cart";

export interface ProductCart {
  name: string;
  description: string;
  price: number;
  currency: string;
  image: string;
  price_id: string;
}

export default function AddToCart({
  currency: currency,
  description: description,
  image: image,
  name: name,
  price: price,
  price_id: price_id,
}: ProductCart) {
  const { addItem } = useShoppingCart();

  const product = {
    name: name,
    description: description,
    price: price,
    currency: currency,
    image: urlFor(image).url(),
    price_id: price_id,
  };
  return (
    <div>
      <Button
        onClick={() => {
          addItem(product);
        }}
        className="bg-second py-4 mx-auto  md:mx-0 md:py-6 px-4 md:px-6 hover:bg-hover text-white flex items-center w-fit"
      >
        <ShoppingCart className="mr-1" />
        Add to Cart
      </Button>
    </div>
  );
}
