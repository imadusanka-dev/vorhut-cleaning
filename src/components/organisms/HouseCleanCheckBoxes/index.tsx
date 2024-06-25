import { serviceTypes } from "@/const";
import { Checkbox, Form, Space, InputNumber } from "antd";

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
      <Form.Item name="deepClean" valuePropName="checked" className="mb-0">
        <Checkbox>Deep Clean/Initial Clean</Checkbox>
      </Form.Item>
      <Form.Item
        name="insideCupboards"
        valuePropName="checked"
        className="mb-0"
      >
        <Checkbox>Inside Cupboards</Checkbox>
      </Form.Item>
      <Form.Item
        name="insideEmptyFridge"
        valuePropName="checked"
        className="mb-0"
      >
        <Checkbox>Inside the Fridge (Empty)</Checkbox>
      </Form.Item>
      <Form.Item
        name="insideFullFridge"
        valuePropName="checked"
        className="mb-0"
      >
        <Checkbox>Inside the Fridge (Full)</Checkbox>
      </Form.Item>
      <Form.Item name="ovenClean" valuePropName="checked" className="mb-0">
        <Checkbox>Oven Clean</Checkbox>
      </Form.Item>
      <Form.Item name="insideWindows" valuePropName="checked" className="mb-0">
        <Checkbox>Inside Windows</Checkbox>
      </Form.Item>
      <Form.Item name="petHairRemoval" valuePropName="checked" className="mb-0">
        <Checkbox>Pet Hair Removal</Checkbox>
      </Form.Item>
      <Form.Item name="balconyClean" valuePropName="checked" className="mb-0">
        <Checkbox>Balcony Clean</Checkbox>
      </Form.Item>
      <Space direction="horizontal">
        <Form.Item
          name="changeBedSheets"
          valuePropName="checked"
          className="mb-0"
        >
          <Checkbox />
        </Form.Item>
        <Form.Item name="noOfBedsheets" className="mb-0">
          <InputNumber disabled={!changeBedSheets} />
        </Form.Item>
        Change Bed Sheets (per bed)
      </Space>
      <Form.Item
        name="ecoFriendlyClean"
        valuePropName="checked"
        className="mb-0"
      >
        <Checkbox>Eco Friendly Clean</Checkbox>
      </Form.Item>
      {(serviceType === serviceTypes.HOUSE ||
        serviceType === serviceTypes.TOWNHOUSE) && (
        <Form.Item name="garageClean" valuePropName="checked" className="mb-0">
          <Checkbox>Garage Clean</Checkbox>
        </Form.Item>
      )}
      {(serviceType === serviceTypes.HOUSE ||
        serviceType === serviceTypes.TOWNHOUSE) && (
        <Form.Item
          name="verandahClean"
          valuePropName="checked"
          className="mb-0"
        >
          <Checkbox>Verandah Clean</Checkbox>
        </Form.Item>
      )}
      <Form.Item
        name="dishwasherClean"
        valuePropName="checked"
        className="mb-0"
      >
        <Checkbox>Dishwasher Clean</Checkbox>
      </Form.Item>
      <Space direction="horizontal">
        <Form.Item name="blindsClean" valuePropName="checked" className="mb-0">
          <Checkbox />
        </Form.Item>
        <Form.Item name="noOfBlinds" className="mb-0">
          <InputNumber disabled={!blindsClean} />
        </Form.Item>
        Blinds Cleaning (per blind)
      </Space>
      <Form.Item name="microwaveClean" valuePropName="checked">
        <Checkbox>Microwave Clean</Checkbox>
      </Form.Item>
    </>
  );
};
