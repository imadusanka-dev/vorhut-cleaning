import { useQuery } from "@tanstack/react-query";
import { getServicesPrices } from "@/api/services";

export const useServicePrices = (serviceType: number) => {
  return useQuery({
    queryKey: ["servicePrices", serviceType],
    queryFn: () => getServicesPrices(serviceType),
    enabled: !!serviceType,
  });
};
