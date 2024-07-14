import parsePhoneNumber from "libphonenumber-js";
import { CountryCode } from "libphonenumber-js/types";

export const isValidPhoneNumber = (
  phoneNumber: string,
  countryCode: CountryCode = "AU",
): boolean => {
  if (!phoneNumber) return false;
  const parsedPhoneNumber = parsePhoneNumber(phoneNumber, countryCode);
  return parsedPhoneNumber?.isValid() ?? false;
};
