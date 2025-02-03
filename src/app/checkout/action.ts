// checkout/action.ts
"use server";

import Stripe from "stripe";

export async function createPaymentIntent(amount: number) {
  const stripe = new Stripe(process.env.STRIPE_SECRET_KEY as string, {
    apiVersion: "2025-01-27.acacia", // or the latest stable version
  });

  try {
    const paymentIntent = await stripe.paymentIntents.create({
      amount, 
      currency: "usd",
      automatic_payment_methods: {
        enabled: true,
      },
    });

    return {
      clientSecret: paymentIntent.client_secret,
    };
  } catch (error) {
    console.error(error);
    throw error;
  }
}
