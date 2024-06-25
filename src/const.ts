import type { IOptions } from "@/types";

export const serviceTypes = {
  APARTMENT: "Apartment",
  TOWNHOUSE: "Townhouse",
  HOUSE: "House",
};

export const serviceCategories: IOptions[] = [
  { value: "General House Clean", label: "General House Clean" },
  { value: "End of Lease Clean", label: "End of Lease Clean" },
  { value: "Carpet Steam Clean", label: "Carpet Steam Clean" },
];

export const typesOfServices: IOptions[] = [
  { value: serviceTypes.APARTMENT, label: "Apartment" },
  { value: serviceTypes.TOWNHOUSE, label: "Townhouse" },
  { value: serviceTypes.HOUSE, label: "House" },
];

export const hearOptions: IOptions[] = [
  { value: "Google", label: "Google" },
  { value: "Word of Mouth", label: "Word of Mouth" },
  { value: "Property Manager", label: "Property Manager" },
  { value: "Service Seeking", label: "Service Seeking" },
  { value: "Other", label: "Other" },
];

export const storeysOptions: IOptions[] = [
  { value: 1, label: "Single Storey House" },
  { value: 2, label: "Double Storey House" },
];

export const flexibilityOptions: IOptions[] = [
  { value: "date only", label: "Date Only" },
  { value: "time only", label: "Time Only" },
  { value: "date and time", label: "Date and Time" },
  { value: "not flexible", label: "Not flexible" },
];

export const getInsideOptions: IOptions[] = [
  { value: "Someone will be home", label: "Someone will be home" },
  {
    value: "Leave a key",
    label: "I will leave a key (Please provide details below)",
  },
  { value: "Intercom", label: "Intercom (Please provide details below)" },
  { value: "Other", label: "Other" },
];
