import { instance } from "@/api";
import type { ServicesPrices } from "@/schemas/servicesPrice";

export const getServicesPrices = (): Promise<ServicesPrices> => {
  return instance
    .get("/configs/service-prices")
    .then((response) => response.data);
};
