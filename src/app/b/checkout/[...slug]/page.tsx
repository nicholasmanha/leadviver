"use client"
import React, { useCallback, useEffect, useState } from "react";
import { loadStripe, Stripe } from '@stripe/stripe-js';
import {
  EmbeddedCheckoutProvider,
  EmbeddedCheckout
} from '@stripe/react-stripe-js';
import { useParams } from 'next/navigation';
import axios from 'axios';

const stripePublicKey = process.env.NEXT_PUBLIC_STRIPE_PUBLIC_KEY as string;
if (!stripePublicKey) {
  throw new Error("Stripe public key is not defined");
}

const stripePromise: Promise<Stripe | null> = loadStripe(stripePublicKey);

const CheckoutForm = () => {
  const params = useParams();
  const { slug } = params;


  // Create a Checkout Session
  const [clientSecret, setClientSecret] = useState('');

  useEffect(() => {
    if (slug) {
      console.log(slug);
      const fetchPaymentIntent = async () => {
        try {
          const response = await axios.post('https://j4y10kfape.execute-api.us-west-1.amazonaws.com/Prod/create-checkout-session', {
            product_id: slug,
          });

          const { clientSecret } = response.data;

          if (clientSecret) {
            setClientSecret(clientSecret);
          }
        } catch (error) {
          console.error('Error creating payment intent:', error);
        }
      };

      fetchPaymentIntent();
    }
  }, [slug]);

  return (
    <div id="checkout">
      <EmbeddedCheckoutProvider
        stripe={stripePromise}
        options={{clientSecret}}
      >
        <EmbeddedCheckout />
      </EmbeddedCheckoutProvider>
    </div>
  )

};

function Page() {
  return (
    <CheckoutForm />
  )
}

export default Page