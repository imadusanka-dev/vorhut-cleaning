"use client";

import { useStore } from "@/store";
import { Button, Input, message } from "antd";
import { useCallback, useState } from "react";
import { getPromoCodeByCode } from "@/api/services";

export const BookingSummary = ({ submitButtonRef }) => {
  const [code, setCode] = useState("");
  const [hasError, setError] = useState(false);
  const [isInputDisabled, setInputDisable] = useState(false);
  const handleClick = useCallback(() => submitButtonRef?.current?.click(), []);

  const priceSummary = useStore((state) => state.priceSummary);
  const setPromoCode = useStore((state) => state.setPromoCode);

  const handleCouponCode = async () => {
    try {
      const response = await getPromoCodeByCode(code);
      setError(false);
      setPromoCode(response);
      setInputDisable(true);
    } catch (error) {
      if (error.response.status === 404) {
        setError(true);
        return message.error(error?.response?.data?.message);
      }
      message.error("Something went wrong");
    }
  };

  const handleCouponCodeChange = (value: string) => {
    setCode(value);
    if (!value && hasError) {
      setError(false);
    }
  };

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
      <div className="flex justify-between gap-4 mt-4">
        <Input
          placeholder="Coupon Code"
          status={hasError && code ? "error" : ""}
          onChange={(e) => handleCouponCodeChange(e.target.value)}
          disabled={isInputDisabled}
        />
        <Button disabled={!code || isInputDisabled} onClick={handleCouponCode}>
          Apply
        </Button>
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
