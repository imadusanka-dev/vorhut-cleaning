import { useQuery } from "@tanstack/react-query";
import { getExtraServices } from "@/api/services";

export const useExtraServices = (serviceType: number) => {
  return useQuery({
    queryKey: ["extraServices", serviceType],
    queryFn: () => getExtraServices(serviceType),
    enabled: !!serviceType,
  });
};
