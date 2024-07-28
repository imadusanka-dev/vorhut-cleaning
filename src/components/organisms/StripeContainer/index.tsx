"use client";

import { StripeCheckoutForm } from "@/components";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe, StripeElementsOptions } from "@stripe/stripe-js";

interface Props {
  clientSecret: string;
}

export const StripeContainer = ({ clientSecret }: Props) => {
  const stripePromise = loadStripe(
    process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY as string,
  );

  const appearance = {
    theme: "stripe",
    variables: {
      colorPrimary: "#0570de",
    },
  };

  const options = {
    clientSecret,
    appearance,
  };

  return (
    <div>
      <Elements
        stripe={stripePromise}
        options={options as StripeElementsOptions}
      >
        <StripeCheckoutForm />
      </Elements>
    </div>
  );
};
