import { useEffect } from "react";
import { useStore } from "@/store";
import { useServicePrice, useExtraPrice } from "@/hooks";
import {
  SERVICE_CATEGORIES,
  END_OF_LEASE_CLEAN_PRICES,
  GENERAL_HOUSE_CLEAN_PRICES,
  END_OF_LEASE_SERVICE_TYPES,
  GENERAL_HOUSE_CLEAN_SERVICE_TYPES,
} from "@/const";

interface Props {
  serviceCategory: string | undefined;
  serviceType: string | undefined;
  noOfBedrooms: number | undefined;
  noOfBathrooms: number | undefined;
  noOfPowderRooms: number | undefined;
  noOfStoreys: string | undefined;
}

export const usePriceManager = ({
  serviceCategory,
  serviceType,
  noOfBedrooms,
  noOfBathrooms,
  noOfPowderRooms,
  noOfStoreys,
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
  });

  const { extraPrice } = useExtraPrice();

  useEffect(() => {
    setServicePrice(servicePrice);
    setExtraPrice(extraPrice);
  }, [servicePrice, extraPrice]);
};
