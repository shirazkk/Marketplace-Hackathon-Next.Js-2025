"use client";
import React, { useState, useEffect } from "react";
import { loadStripe } from "@stripe/stripe-js";
import {
  Elements,
  PaymentElement,
  useStripe,
  useElements,
} from "@stripe/react-stripe-js";
import { createPaymentIntent } from "./action";
import { useShoppingCart } from "use-shopping-cart";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { AlertCircle, ShoppingCart, CreditCard } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";

// Initialize Stripe with your public API key
const stripePromise = loadStripe(
  process.env.NEXT_PUBLIC_STRIPE_API_KEY as string
);

export default function CheckoutPage() {
  const [clientSecret, setClientSecret] = useState<string | null>(null);
  const { totalPrice, cartCount, cartDetails } = useShoppingCart();

  useEffect(() => {
    if ((cartCount ?? 0) > 0 && totalPrice) {
      const amountInCents = Math.round(totalPrice * 100);

      createPaymentIntent(amountInCents)
        .then((res) => {
          setClientSecret(res.clientSecret);
        })
        .catch((error) => {
          console.error("Error creating PaymentIntent:", error);
        });
    }
  }, [cartCount, totalPrice]);

  if (!clientSecret) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <div className="text-center">
          <ShoppingCart className="mx-auto mb-4 w-16 h-16 text-blue-500" />
          <p className="text-xl text-gray-600">Loading checkout...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      <div className="w-full max-w-4xl grid grid-cols-1 md:grid-cols-2 gap-6 bg-white shadow-lg rounded-xl overflow-hidden">
        {/* Order Summary Column */}
        <div className="bg-gray-50 p-6">
          <h2 className="text-2xl font-bold mb-6 text-gray-800">
            Order Summary
          </h2>
          <div className="space-y-4">
            {Object.values(cartDetails || {}).map((item) => (
              <div
                key={item.id}
                className="flex items-center space-x-4 border-b pb-4 last:border-b-0"
              >
                {/* Product Image */}
                <div className="w-20 h-20 relative">
                  <Image
                    src={item.image || "/placeholder-product.png"}
                    alt={item.name}
                    fill
                    className="object-cover rounded-md"
                  />
                </div>

                {/* Product Details */}
                <div className="flex-grow">
                  <h3 className="font-semibold text-gray-800">{item.name}</h3>
                  <div className="flex justify-between items-center">
                    <p className="text-gray-600">Quantity: {item.quantity}</p>
                    <p className="font-bold text-gray-900">
                      ${(item.price * item.quantity).toFixed(2)}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Total */}
          <div className="mt-6 pt-4 border-t">
            <div className="flex justify-between text-xl font-bold">
              <span>Total</span>
              <span>${totalPrice?.toFixed(2)}</span>
            </div>
          </div>
        </div>

        {/* Payment Form Column */}
        <div className="p-6">
          <Card className="w-full border-none shadow-none">
            <CardHeader className="text-center">
              <CardTitle className="flex items-center justify-center">
                <CreditCard className="mr-2 w-6 h-6" />
                Payment Details
              </CardTitle>
            </CardHeader>
            <CardContent>
              <Elements stripe={stripePromise} options={{ clientSecret }}>
                <PaymentForm />
              </Elements>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}

function PaymentForm() {
  const stripe = useStripe();
  const elements = useElements();
  const [isProcessing, setIsProcessing] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const { clearCart } = useShoppingCart();
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!stripe || !elements) return;

    setIsProcessing(true);

    const { error } = await stripe.confirmPayment({
      elements,
      redirect: "if_required",
    });

    if (error) {
      setErrorMessage(error.message || "An unknown error occurred");
      setIsProcessing(false);
    } else {
      setErrorMessage(null);
      clearCart();
      router.push("/success");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="payment-element">
        <PaymentElement />
      </div>
      {errorMessage && (
        <Alert variant="destructive">
          <AlertCircle className="h-4 w-4" />
          <AlertDescription>{errorMessage}</AlertDescription>
        </Alert>
      )}
      <Button
        type="submit"
        className="w-full"
        disabled={!stripe || isProcessing}
      >
        {isProcessing ? "Processing Payment..." : "Complete Order"}
      </Button>
    </form>
  );
}
