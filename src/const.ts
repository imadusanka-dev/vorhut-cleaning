import type { IOptions } from "@/types";

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

export const bedRoomOptions: IOptions[] = [
  { value: 1, label: "1 Bedroom" },
  { value: 2, label: "2 Bedrooms" },
  {
    value: 3,
    label: "3 Bedrooms",
  },
  { value: 4, label: "4 Bedrooms" },
  { value: 5, label: "5 Bedrooms" },
  { value: 6, label: "6 Bedrooms" },
];

export const bathRoomOptions: IOptions[] = [
  { value: 1, label: "1 Bathroom" },
  { value: 2, label: "2 Bathrooms" },
  {
    value: 3,
    label: "3 Bathrooms",
  },
  { value: 4, label: "4 Bathrooms" },
  { value: 5, label: "5 Bathrooms" },
  { value: 6, label: "6 Bathrooms" },
];

export const powderRoomOptions: IOptions[] = [
  { value: 0, label: "No Powder Rooms" },
  { value: 1, label: "1 Powder Room" },
  { value: 2, label: "2 Powder Rooms" },
  {
    value: 3,
    label: "3 Powder Rooms",
  },
  { value: 4, label: "4 Powder Rooms" },
  { value: 5, label: "5 Powder Rooms" },
  { value: 6, label: "6 Powder Rooms" },
];

export const storeysEnabledServiceTypes = [2, 3, 5];

export const extraServicesFields = [
  "insideCupboards",
  "insideEmptyFridge",
  "insideFullFridge",
  "ovenClean",
  "insideWindows",
  "petHairRemoval",
  "balconyClean",
  "changeBedSheets",
  "ecoFriendlyClean",
  "garageClean",
  "verandahClean",
  "dishwasherClean",
  "blindsClean",
  "microwaveClean",
  "steamCleanBedrooms",
  "steamCleanLivingrooms",
  "steamCleanHallways",
  "steamCleanStairs",
  "wallScrubAndClean",
  "exteriorWindows",
  "furnitureClean",
  "deepClean",
  "changeBedSheetsQuantity",
  "blindsCleanQuantity",
  "steamCleanBedroomsQuantity",
  "steamCleanLivingroomsQuantity",
  "steamCleanHallwaysQuantity",
  "steamCleanStairsQuantity",
  "wallScrubAndCleanQuantity",
];

export const PROMO_CODE_TYPES = {
  FIXED: "FIXED",
  PERCENTAGE: "PERCENTAGE",
};
