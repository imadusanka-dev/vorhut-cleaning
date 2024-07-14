import { instance } from "@/api";
import type { ServicesPrices, ExtraService } from "@/schemas";

export const getServicesPrices = (
  serviceType: number,
): Promise<ServicesPrices> => {
  return instance
    .get(`/service-types/${serviceType}/price-configs`)
    .then((response) => response.data);
};

export const getExtraServices = (
  serviceType: number,
): Promise<ExtraService[]> => {
  return instance
    .get(`/service-types/${serviceType}/extra-services`)
    .then((response) => response.data);
};
