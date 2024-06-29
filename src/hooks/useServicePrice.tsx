import { useEffect, useState } from "react";
import {
  END_OF_LEASE_CLEAN_PRICES,
  END_OF_LEASE_SERVICE_TYPES,
  GENERAL_HOUSE_CLEAN_PRICES,
  GENERAL_HOUSE_CLEAN_SERVICE_TYPES,
  SERVICE_CATEGORIES,
} from "@/const";

interface Props {
  serviceCategory: string | undefined;
  serviceType: string | undefined;
  noOfBedrooms: number | undefined;
  noOfBathrooms: number | undefined;
  noOfPowderRooms: number | undefined;
  noOfStoreys: string | undefined;
}

export const useServicePrice = ({
  serviceCategory,
  serviceType,
  noOfBedrooms,
  noOfBathrooms,
  noOfPowderRooms,
  noOfStoreys,
}: Props) => {
  const [servicePrice, setServicePrice] = useState<number>(0);

  useEffect(() => {
    if (
      serviceCategory === SERVICE_CATEGORIES.GENERAL_HOUSE_CLEAN &&
      serviceType
    ) {
      const serviceTypePrices = GENERAL_HOUSE_CLEAN_PRICES[serviceType];

      if (serviceTypePrices) {
        let totalPrice = serviceTypePrices.BASE_PRICE;

        if (noOfBathrooms > 1) {
          const noOfExtraBathrooms = noOfBathrooms - 1;
          const extraBathroomCost =
            noOfExtraBathrooms * serviceTypePrices.EXTRA_BATHROOM_PRICE;

          totalPrice += extraBathroomCost;
        }

        if (noOfPowderRooms > 0) {
          const powderRoomsCost =
            noOfPowderRooms * serviceTypePrices.POWDER_ROOM_PRICE;

          totalPrice += powderRoomsCost;
        }

        if (
          serviceType === END_OF_LEASE_SERVICE_TYPES.HOUSE_OR_TOWNHOUSE &&
          noOfStoreys > 1
        ) {
          const extraStoreys = noOfStoreys - 1;
          const extraStoreyCost =
            extraStoreys * serviceTypePrices.DOUBLE_STOREY_PRICE;

          totalPrice += extraStoreyCost;
        }
        console.log("-------total price", totalPrice);
        setServicePrice(totalPrice);
      }
    } else if (
      serviceCategory === SERVICE_CATEGORIES.END_OF_LEASE_CLEAN &&
      serviceType
    ) {
      const serviceTypePrices = END_OF_LEASE_CLEAN_PRICES[serviceType];

      if (serviceTypePrices && noOfBathrooms && noOfBedrooms) {
        //bedroom price with 1 bathroom
        let totalPrice = serviceTypePrices.BEDROOMS?.[noOfBedrooms];

        if (noOfBathrooms > 1) {
          const noOfExtraBathrooms = noOfBathrooms - 1;
          const extraBathroomCost =
            noOfExtraBathrooms * serviceTypePrices.EXTRA_BATHROOM_PRICE;

          totalPrice += extraBathroomCost;
        }

        if (noOfPowderRooms > 0) {
          const powderRoomsCost =
            noOfPowderRooms * serviceTypePrices.POWDER_ROOM_PRICE;

          totalPrice += powderRoomsCost;
        }

        if (
          serviceType === END_OF_LEASE_SERVICE_TYPES.HOUSE_OR_TOWNHOUSE &&
          noOfStoreys > 1
        ) {
          const extraStoreys = noOfStoreys - 1;
          const extraStoreyCost =
            extraStoreys * serviceTypePrices.DOUBLE_STOREY_PRICE;

          totalPrice += extraStoreyCost;
        }
        console.log("-------service price end", totalPrice);
        setServicePrice(totalPrice);
      }
    }
  }, [
    serviceCategory,
    serviceType,
    noOfStoreys,
    noOfBedrooms,
    noOfBathrooms,
    noOfPowderRooms,
  ]);

  return {
    servicePrice,
  };
};
