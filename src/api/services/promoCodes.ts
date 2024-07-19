import { instance } from "@/api";
import { PromoCode } from "@/schemas";

export const getPromoCodeByCode = (code: string): Promise<PromoCode> => {
  return instance
    .get(`/promo-codes/code/${code}`)
    .then((response) => response.data);
};
