import { useQuery } from "@tanstack/react-query";
import { getServiceTypes } from "@/api/services";

export const useServiceTypes = (serviceCategory: number) => {
  return useQuery({
    queryKey: ["serviceTypes", serviceCategory],
    queryFn: () => getServiceTypes(serviceCategory),
    enabled: !!serviceCategory,
  });
};
