import { useEffect, useState } from "react";
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

export const useServicePrice = ({
  serviceCategory,
  serviceType,
  noOfBedrooms,
  noOfBathrooms,
  noOfPowderRooms,
  noOfStoreys,
  prices,
}: Props) => {
  const [servicePrice, setServicePrice] = useState<number>(0);

  useEffect(() => {
    if (prices && serviceType) {
      let totalPrice = prices.bedRoomPrices[noOfBedrooms];

      if (noOfBathrooms > 1) {
        const noOfExtraBathrooms = noOfBathrooms - 1;
        const extraBathroomCost =
          noOfExtraBathrooms * prices.extraBathroomPrice;

        totalPrice += extraBathroomCost;
      }

      if (noOfPowderRooms > 0) {
        const powderRoomsCost = noOfPowderRooms * prices.powderRoomPrice;

        totalPrice += powderRoomsCost;
      }

      if (prices.doubleStoryPrice && noOfStoreys > 1) {
        const extraStoreys = noOfStoreys - 1;
        const extraStoreyCost = extraStoreys * prices.doubleStoryPrice;

        totalPrice += extraStoreyCost;
      }
      setServicePrice(totalPrice);
    }
  }, [
    serviceCategory,
    serviceType,
    noOfStoreys,
    noOfBedrooms,
    noOfBathrooms,
    noOfPowderRooms,
    prices,
  ]);

  return {
    servicePrice,
  };
};
