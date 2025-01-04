"use client";
import React, { ReactNode } from "react";
import { CartProvider } from "use-shopping-cart";

const CartProviderWrapper = ({ children }: { children: ReactNode }) => {
  return (
    <CartProvider
      mode="payment"
      cartMode="client-only"
      successUrl="https://comfortyecommerce.vercel.app/stripe/success"
      cancelUrl="https://comfortyecommerce.vercel.app/stripe/failure"
      stripe={process.env.NEXT_PUBLIC_STRIPE_API_KEY as string}
      currency="USD"
      billingAddressCollection={true}
      shouldPersist={true}
      language="en-US"
    >
      {children}
    </CartProvider>
  );
};

export default CartProviderWrapper;
