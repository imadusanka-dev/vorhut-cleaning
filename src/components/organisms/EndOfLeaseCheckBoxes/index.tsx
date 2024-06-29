import { END_OF_LEASE_SERVICE_TYPES } from "@/const";
import { CheckBox, InputWithCheckBox } from "@/components";

interface Props {
  steamCleanBedrooms: boolean | undefined;
  steamCleanLivingrooms: boolean | undefined;
  steamCleanHallways: boolean | undefined;
  steamCleanStairs: boolean | undefined;
  steamCleanSingleSeatSofa: boolean | undefined;
  steamCleanMultiSeatSofa: boolean | undefined;
  wallScrubAndClean: boolean | undefined;
  blindsClean: boolean | undefined;
  serviceType: string | undefined;
}

export const EndOfLeaseCheckBoxes = ({
  steamCleanBedrooms,
  steamCleanLivingrooms,
  steamCleanHallways,
  steamCleanStairs,
  steamCleanSingleSeatSofa,
  steamCleanMultiSeatSofa,
  wallScrubAndClean,
  blindsClean,
  serviceType,
}: Props) => {
  return (
    <>
      <CheckBox name="insideEmptyFridge" title="Inside the Fridge (Empty)" />
      {serviceType === END_OF_LEASE_SERVICE_TYPES.APARTMENT && (
        <CheckBox name="balconyClean" title="Balcony Clean" />
      )}
      <InputWithCheckBox
        checkBoxName="steamCleanBedrooms"
        inputName="noOfSteamCleanBedrooms"
        title="Steam Clean (Bed Rooms)"
        disableInput={!steamCleanBedrooms}
        className="mb-3"
      />
      <InputWithCheckBox
        checkBoxName="steamCleanLivingrooms"
        inputName="noOfSteamCleanLivingrooms"
        title="Steam Clean (Living Rooms)"
        disableInput={!steamCleanLivingrooms}
        className="mb-3"
      />
      <InputWithCheckBox
        checkBoxName="steamCleanHallways"
        inputName="noOfSteamCleanHallways"
        title="Steam Clean (Hallways)"
        disableInput={!steamCleanHallways}
        className="mb-3"
      />
      <InputWithCheckBox
        checkBoxName="steamCleanStairs"
        inputName="noOfSteamCleanStairs"
        title="Steam Clean (Stairs)"
        disableInput={!steamCleanStairs}
        className="mb-3"
      />
      {serviceType === END_OF_LEASE_SERVICE_TYPES.HOUSE_OR_TOWNHOUSE && (
        <CheckBox name="garageClean" title="Garage Clean" />
      )}
      {serviceType === END_OF_LEASE_SERVICE_TYPES.HOUSE_OR_TOWNHOUSE && (
        <CheckBox name="verandahClean" title="Varandah Clean" />
      )}
      <InputWithCheckBox
        checkBoxName="steamCleanSingleSeatSofa"
        inputName="noOfSteamCleanSingleSeatSofa"
        title="Single Seat Sofa Steam Clean (per sofa)"
        disableInput={!steamCleanSingleSeatSofa}
        className="mb-3"
      />
      <InputWithCheckBox
        checkBoxName="steamCleanMultiSeatSofa"
        inputName="noOfSteamCleanMultiSeatSofa"
        title="Multi Seat Sofa Steam Clean (per sofa)"
        disableInput={!steamCleanMultiSeatSofa}
      />
      <CheckBox name="dishwasherClean" title="Dishwasher Clean" />
      <InputWithCheckBox
        checkBoxName="wallScrubAndClean"
        inputName="noOfWallScrubAndClean"
        title="Wall Scrub & Clean (per wall)"
        disableInput={!wallScrubAndClean}
        className="mb-3"
      />
      <InputWithCheckBox
        checkBoxName="blindsClean"
        inputName="noOfBlinds"
        title="Blinds Cleaning (per blind)"
        disableInput={!blindsClean}
      />
      {serviceType === END_OF_LEASE_SERVICE_TYPES.HOUSE_OR_TOWNHOUSE && (
        <CheckBox
          name="exteriorWindows"
          title="Exterior Windows (Ground floor only)"
        />
      )}
      <CheckBox name="microwaveClean" title="Microwave Clean" />
      <CheckBox
        name="furnitureClean"
        title="Furniture Clean (Furnished Properties)"
        className="mb-5"
      />
    </>
  );
};
