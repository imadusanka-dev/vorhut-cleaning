import type { IOptions } from "@/types";

export const GENERAL_HOUSE_CLEAN_SERVICE_TYPES = {
  APARTMENT: "APARTMENT",
  TOWNHOUSE: "TOWNHOUSE",
  HOUSE: "HOUSE",
};

export const END_OF_LEASE_SERVICE_TYPES = {
  APARTMENT: "APARTMENT",
  HOUSE_OR_TOWNHOUSE: "HOUSE_OR_TOWNHOUSE",
};

export const SERVICE_CATEGORIES = {
  GENERAL_HOUSE_CLEAN: "GENERAL_HOUSE_CLEAN",
  END_OF_LEASE_CLEAN: "END_OF_LEASE_CLEAN",
  CARPET_STEAM_CLEAN: "CARPET_STEAM_CLEAN",
};

export const serviceCategoryOptions: IOptions[] = [
  {
    value: SERVICE_CATEGORIES.GENERAL_HOUSE_CLEAN,
    label: "General House Clean",
  },
  { value: SERVICE_CATEGORIES.END_OF_LEASE_CLEAN, label: "End of Lease Clean" },
];

export const houseCleanServiceTypesOptions: IOptions[] = [
  { value: GENERAL_HOUSE_CLEAN_SERVICE_TYPES.APARTMENT, label: "Apartment" },
  { value: GENERAL_HOUSE_CLEAN_SERVICE_TYPES.TOWNHOUSE, label: "Townhouse" },
  { value: GENERAL_HOUSE_CLEAN_SERVICE_TYPES.HOUSE, label: "House" },
];

export const endOfLeaseCleanServiceTypesOptions: IOptions[] = [
  { value: END_OF_LEASE_SERVICE_TYPES.APARTMENT, label: "Apartment" },
  {
    value: END_OF_LEASE_SERVICE_TYPES.HOUSE_OR_TOWNHOUSE,
    label: "House / Townhouse",
  },
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

export const GENERAL_HOUSE_CLEAN_PRICES = {
  APARTMENT: {
    BASE_PRICE: 139,
    EXTRA_BEDROOM_PRICE: 20,
    EXTRA_BATHROOM_PRICE: 20,
    POWDER_ROOM_PRICE: 5,
  },
  TOWNHOUSE: {
    BASE_PRICE: 149,
    EXTRA_BEDROOM_PRICE: 10,
    EXTRA_BATHROOM_PRICE: 20,
    POWDER_ROOM_PRICE: 5,
    DOUBLE_STOREY_PRICE: 20,
  },
  HOUSE: {
    BASE_PRICE: 154,
    EXTRA_BEDROOM_PRICE: 10,
    EXTRA_BATHROOM_PRICE: 20,
    POWDER_ROOM_PRICE: 5,
    DOUBLE_STOREY_PRICE: 20,
  },
};

export const END_OF_LEASE_CLEAN_PRICES = {
  APARTMENT: {
    BEDROOMS: {
      1: 340,
      2: 395,
      3: 450,
      4: 500,
      5: 550,
    },
    EXTRA_BATHROOM_PRICE: 25,
    POWDER_ROOM_PRICE: 10,
  },
  HOUSE_OR_TOWNHOUSE: {
    BEDROOMS: {
      1: 339,
      2: 409,
      3: 475,
      4: 600,
      5: 850,
    },
    EXTRA_BATHROOM_PRICE: 25,
    POWDER_ROOM_PRICE: 10,
    DOUBLE_STOREY_PRICE: 50,
  },
};

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
