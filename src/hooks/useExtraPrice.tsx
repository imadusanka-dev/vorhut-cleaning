import { useStore } from "@/store";
import { useState, useEffect } from "react";

export const useExtraPrice = () => {
  const [extraPrice, setExtraPrice] = useState<number>(0);
  const extraServices = useStore((state) => state.extraServices);

  useEffect(() => {
    const total = extraServices.reduce(
      (acc, cur) => acc + cur.price * (cur.quantity ?? 1),
      0,
    );
    setExtraPrice(total);
  }, [extraServices]);

  return { extraPrice };
};
