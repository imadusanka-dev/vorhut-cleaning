import { StateCreator } from "zustand";
import type { PriceSlice } from "@/types";

export const createPriceSlice: StateCreator<PriceSlice> = (set) => ({
  priceSummary: {
    servicePrice: 0,
    extraPrice: 0,
    discount: 0,
    amountBeforeTax: 0,
    tax: 0,
    finalAmount: 0,
    parkingFee: 0,
    tip: 0,
    total: 0,
  },
  extraServices: [],
  promoCode: null,
  setPriceSummary: (priceSummary) => set({ priceSummary }),
  setExtraServices: (newItem) =>
    set(({ extraServices }) => {
      const index = extraServices.findIndex((item) => item.id === newItem.id);
      const updatedItems = [...extraServices];
      if (index !== -1) {
        updatedItems[index].quantity = newItem.quantity;
      } else {
        updatedItems.push(newItem);
      }
      return { extraServices: updatedItems };
    }),
  removeExtraService: (id) =>
    set(({ extraServices }) => ({
      extraServices: extraServices.filter(
        (extraService) => extraService.id !== id,
      ),
    })),
  resetExtraServices: () => set({ extraServices: [] }),
  setPromoCode: (promoCode) => set({ promoCode }),
});
