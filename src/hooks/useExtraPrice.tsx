import { useState, useEffect } from "react";

export const useExtraPrice = () => {
  const [extraPrice, setExtraPrice] = useState<number>(0);

  return { extraPrice };
};
