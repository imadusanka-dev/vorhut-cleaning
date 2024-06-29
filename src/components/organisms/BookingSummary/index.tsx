import { Button } from "antd";
import { useStore } from "@/store";
import { useCallback } from "react";

export const BookingSummary = ({ submitButtonRef }) => {
  const handleClick = useCallback(() => submitButtonRef?.current?.click(), []);

  const {
    servicePrice,
    extraPrice,
    discount,
    amountBeforeTax,
    tax,
    finalAmount,
    tip,
    total,
  } = useStore((state) => state);

  return (
    <div className="w-full">
      <div className="border border-solid border-gray-300 w-full h-fit p-5">
        <div className="flex justify-between mb-2">
          <span className="text-sm">Service</span>
          <span className="text-sm">AUD {servicePrice}</span>
        </div>
        <div className="flex justify-between mb-2">
          <span className="text-sm">Extras</span>
          <span className="text-sm">AUD {extraPrice}</span>
        </div>
        <div className="flex justify-between mb-2">
          <span className="text-sm">Discount</span>
          <span className="text-sm">AUD {discount}</span>
        </div>
        <div className="flex justify-between mb-2">
          <span className="text-sm">Amount (before taxes)</span>
          <span className="text-sm">AUD {amountBeforeTax}</span>
        </div>
        <div className="flex justify-between mb-2">
          <span className="text-sm">Tax (10%)</span>
          <span className="text-sm">AUD {tax}</span>
        </div>
        <div className="flex justify-between mb-2">
          <span className="text-sm">Final Amount</span>
          <span className="text-sm">AUD {finalAmount}</span>
        </div>
        <div className="flex justify-between">
          <span className="text-sm">Tip</span>
          <span className="text-sm">AUD {tip}</span>
        </div>
      </div>
      <div className="flex justify-between p-5">
        <span className="text-sm font-semibold">Total</span>
        <span className="text-sm font-semibold">AUD {total}</span>
      </div>
      <div className="flex justify-center">
        <Button type="primary" size="large" shape="round" onClick={handleClick}>
          Book Now
        </Button>
      </div>
    </div>
  );
};
