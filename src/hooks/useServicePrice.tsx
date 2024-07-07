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
    if (serviceCategory === 1 && serviceType && prices) {
      const serviceTypePrices = prices[serviceCategory][serviceType];

      if (serviceTypePrices) {
        let totalPrice = serviceTypePrices.BASE_PRICE;

        if (noOfBedrooms > 1) {
          const noOfExtraBedrooms = noOfBedrooms - 1;
          const extraBedroomCost =
            noOfExtraBedrooms * serviceTypePrices.EXTRA_BEDROOM_PRICE;

          totalPrice += extraBedroomCost;
        }

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

        if ((serviceType === 2 || serviceType === 3) && noOfStoreys > 1) {
          const extraStoreys = noOfStoreys - 1;
          const extraStoreyCost =
            extraStoreys * serviceTypePrices.DOUBLE_STOREY_PRICE;

          totalPrice += extraStoreyCost;
        }

        setServicePrice(totalPrice);
      }
    } else if (serviceCategory === 2 && serviceType && prices) {
      const serviceTypePrices = prices[serviceCategory][serviceType];

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

        if (serviceType === 5 && noOfStoreys > 1) {
          const extraStoreys = noOfStoreys - 1;
          const extraStoreyCost =
            extraStoreys * serviceTypePrices.DOUBLE_STOREY_PRICE;

          totalPrice += extraStoreyCost;
        }
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
    prices,
  ]);

  return {
    servicePrice,
  };
};
