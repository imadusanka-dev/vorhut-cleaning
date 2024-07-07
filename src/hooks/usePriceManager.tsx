import { useEffect } from "react";
import { useStore } from "@/store";
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
}

export const usePriceManager = ({
  serviceCategory,
  serviceType,
  noOfBedrooms,
  noOfBathrooms,
  noOfPowderRooms,
  noOfStoreys,
  prices,
}: Props) => {
  const setServicePrice = useStore((state) => state.setServicePrice);
  const setExtraPrice = useStore((state) => state.setExtraPrice);

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
    setServicePrice(servicePrice);
    setExtraPrice(extraPrice);
  }, [servicePrice, extraPrice]);
};
