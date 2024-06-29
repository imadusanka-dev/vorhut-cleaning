import { create } from "zustand";
import { createPriceSlice } from "./priceSlice";

export const useStore = create((...a) => ({
  ...createPriceSlice(...a),
}));
