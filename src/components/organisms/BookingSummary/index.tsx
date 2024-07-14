import { Button } from "antd";
import { useStore } from "@/store";
import { useCallback } from "react";

export const BookingSummary = ({ submitButtonRef }) => {
  const handleClick = useCallback(() => submitButtonRef?.current?.click(), []);

  const priceSummary = useStore((state) => state.priceSummary);

  return (
    <div className="w-full">
      <div className="border border-solid border-gray-300 w-full h-fit p-5">
        <div className="flex justify-between mb-2">
          <span className="text-sm">Service</span>
          <span className="text-sm">AUD {priceSummary.servicePrice}</span>
        </div>
        <div className="flex justify-between mb-2">
          <span className="text-sm">Extras</span>
          <span className="text-sm">AUD {priceSummary.extraPrice}</span>
        </div>
        <div className="flex justify-between mb-2">
          <span className="text-sm">Discount</span>
          <span className="text-sm">AUD {priceSummary.discount}</span>
        </div>
        <div className="flex justify-between mb-2">
          <span className="text-sm">Amount (before taxes)</span>
          <span className="text-sm">AUD {priceSummary.amountBeforeTax}</span>
        </div>
        <div className="flex justify-between mb-2">
          <span className="text-sm">Tax (10%)</span>
          <span className="text-sm">AUD {priceSummary.tax}</span>
        </div>
        <div className="flex justify-between mb-2">
          <span className="text-sm">Final Amount</span>
          <span className="text-sm">AUD {priceSummary.finalAmount}</span>
        </div>
        <div className="flex justify-between">
          <span className="text-sm">Tip</span>
          <span className="text-sm">AUD {priceSummary.tip}</span>
        </div>
      </div>
      <div className="flex justify-between p-5">
        <span className="text-sm font-semibold">Total</span>
        <span className="text-sm font-semibold">AUD {priceSummary.total}</span>
      </div>
      <div className="flex justify-center">
        <Button type="primary" size="large" shape="round" onClick={handleClick}>
          Book Now
        </Button>
      </div>
    </div>
  );
};
