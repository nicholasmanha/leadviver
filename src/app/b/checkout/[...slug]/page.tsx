"use client"
import React, { useCallback} from "react";
import { loadStripe, Stripe } from '@stripe/stripe-js';
import {
  EmbeddedCheckoutProvider,
  EmbeddedCheckout
} from '@stripe/react-stripe-js';

const stripePublicKey = process.env.NEXT_PUBLIC_STRIPE_PUBLIC_KEY as string;
if (!stripePublicKey) {
  throw new Error("Stripe public key is not defined");
}

const stripePromise: Promise<Stripe | null> = loadStripe(stripePublicKey);

const CheckoutForm = () => {
  const fetchClientSecret = useCallback(() => {
    
    // Create a Checkout Session
    return fetch("https://j4y10kfape.execute-api.us-west-1.amazonaws.com/Prod/create-checkout-session", {
      method: "POST",
    })
      .then((res) => res.json())
      .then((data) => data.clientSecret)
      
  },
    []);


  const options = { fetchClientSecret };

  return (
    <div id="checkout">
      <EmbeddedCheckoutProvider
        stripe={stripePromise}
        options={options}
      >
        <EmbeddedCheckout />
      </EmbeddedCheckoutProvider>
    </div>
  )
};

function Page() {
  return (
    <CheckoutForm/>
  )
}

export default Page