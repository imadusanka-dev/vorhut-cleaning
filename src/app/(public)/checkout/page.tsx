"use client";

import { useStore } from "@/store";
import { StripeContainer } from "@/components";
import { useSearchParams } from "next/navigation";
import { store } from "next/dist/build/output/store";

const Checkout = () => {
  const searchParams = useSearchParams();
  const clientSecret = searchParams.get("clientSecret");

  const prices = useStore((state) => state.priceSummary);

  return (
    <div className="flex flex-wrap h-screen overflow-hidden">
      <div className="flex justify-center mt-5 lg:w-2/5 lg:shadow-lg md:w-full">
        <div>
          <div className="text-sm text-gray-600">Total Price</div>
          <div className="text-2xl">AUD {prices.total}</div>
        </div>
      </div>
      <div className="lg:w-3/5 lg:mt-5 lg:px-6 md:w-full">
        {clientSecret && <StripeContainer clientSecret={clientSecret} />}
      </div>
    </div>
  );
};

export default Checkout;
