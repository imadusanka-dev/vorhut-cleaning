export interface IOptions {
  value: string | number;
  label: string;
}

export interface Category {
  id: number;
  name: string;
}

export interface ServiceType {
  id: number;
  name: string;
  categoryId: number;
}

export interface ExtraService {
  id: number;
  price: number;
  quantity?: number;
}

export interface PriceSummary {
  servicePrice: number;
  extraPrice: number;
  discount: number;
  amountBeforeTax: number;
  tax: number;
  finalAmount: number;
  tip: number;
  total: number;
}

export interface PriceSlice {
  priceSummary: PriceSummary;
  extraServices: ExtraService[];
  setPriceSummary: (priceSummary: PriceSummary) => void;
  setExtraServices: (extraService: ExtraService) => void;
  removeExtraService: (id: number) => void;
  resetExtraServices: () => void;
}
