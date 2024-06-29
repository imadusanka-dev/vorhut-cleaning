import { GENERAL_HOUSE_CLEAN_SERVICE_TYPES } from "@/const";
import { CheckBox, InputWithCheckBox } from "@/components";

interface Props {
  serviceType: string | undefined;
  blindsClean: boolean | undefined;
  changeBedSheets: boolean | undefined;
}

export const HouseCleanCheckBoxes = ({
  serviceType,
  blindsClean,
  changeBedSheets,
}: Props) => {
  return (
    <>
      <CheckBox title="Deep Clean/Initial Clean" name="deepClean" />
      <CheckBox title="Inside Cupboards" name="insideCupboards" />
      <CheckBox title="Inside the Fridge (Empty)" name="insideEmptyFridge" />
      <CheckBox title="Inside the Fridge (Full)" name="insideFullFridge" />
      <CheckBox title="Oven Clean" name="ovenClean" />
      <CheckBox title="Inside Windows" name="insideWindows" />
      <CheckBox title="Pet Hair Removal" name="petHairRemoval" />
      <CheckBox title="Balcony Clean" name="balconyClean" />
      <InputWithCheckBox
        checkBoxName="changeBedSheets"
        inputName="noOfBedsheets"
        title="Change Bed Sheets (per bed)"
        disableInput={!changeBedSheets}
      />
      <CheckBox title="Eco Friendly Clean" name="ecoFriendlyClean" />
      {(serviceType === GENERAL_HOUSE_CLEAN_SERVICE_TYPES.HOUSE ||
        serviceType === GENERAL_HOUSE_CLEAN_SERVICE_TYPES.TOWNHOUSE) && (
        <CheckBox title="Garage Clean" name="garageClean" />
      )}
      {(serviceType === GENERAL_HOUSE_CLEAN_SERVICE_TYPES.HOUSE ||
        serviceType === GENERAL_HOUSE_CLEAN_SERVICE_TYPES.TOWNHOUSE) && (
        <CheckBox title="Verandah Clean" name="verandahClean" />
      )}
      <CheckBox title="Dishwasher Clean" name="dishwasherClean" />
      <InputWithCheckBox
        checkBoxName="blindsClean"
        inputName="noOfBlinds"
        title="Blinds Cleaning (per blind)"
        disableInput={!blindsClean}
      />
      <CheckBox
        title="Microwave Clean"
        name="microwaveClean"
        className="mb-5"
      />
    </>
  );
};
