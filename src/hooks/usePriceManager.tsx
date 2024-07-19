"use client";

import { useEffect } from "react";
import { useStore } from "@/store";
import { PROMO_CODE_TYPES } from "@/const";
import { useServicePrice, useExtraPrice } from "@/hooks";
import type { ServicesPrices } from "@/schemas/servicesPrice";

interface Props {
  serviceCategory: number | undefined;
  serviceType: number | undefined;
  noOfBedrooms: number | undefined;
  noOfBathrooms: number | undefined;
  noOfPowderRooms: number | undefined;
  noOfStoreys: string | undefined;
  prices: ServicesPrices | undefined;
  tip: number | undefined;
}

export const usePriceManager = ({
  serviceCategory,
  serviceType,
  noOfBedrooms,
  noOfBathrooms,
  noOfPowderRooms,
  noOfStoreys,
  prices,
  tip = 0,
}: Props) => {
  const setPriceSummary = useStore((state) => state.setPriceSummary);
  const promoCode = useStore((state) => state.promoCode);

  const { servicePrice } = useServicePrice({
    serviceCategory,
    serviceType,
    noOfBedrooms,
    noOfBathrooms,
    noOfPowderRooms,
    noOfStoreys,
    prices,
  });

  const { extraPrice } = useExtraPrice();

  useEffect(() => {
    let discount = 0;
    if (promoCode) {
      if (promoCode.type === PROMO_CODE_TYPES.FIXED) {
        discount = promoCode.discount;
      }

      if (promoCode.type === PROMO_CODE_TYPES.PERCENTAGE) {
        discount = (servicePrice + extraPrice) * promoCode.discount * 0.01;
      }
    }
    const amountBeforeTax = servicePrice + extraPrice - discount;
    const tax = Number((amountBeforeTax * 0.1).toFixed(1));
    const finalAmount = amountBeforeTax + tax;
    const total = finalAmount + tip;

    setPriceSummary({
      servicePrice,
      extraPrice,
      discount,
      amountBeforeTax,
      tax,
      finalAmount,
      tip: tip ?? 0,
      total,
    });
  }, [servicePrice, extraPrice, tip, promoCode]);
};
