import type { IOptions } from "@/types";

interface OptionsArray {
  id: string | number;
  name: string;
}

export const formatSelectOptionArray = (
  array: OptionsArray[] | undefined,
): IOptions[] => {
  if (!array) return [];
  return array.map((item) => ({
    label: item.name,
    value: item.id,
  }));
};
