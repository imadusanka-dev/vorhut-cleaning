"use client";

import { useEffect } from "react";
import dayjs from "dayjs";
import {
  SERVICE_CATEGORIES,
  GENERAL_HOUSE_CLEAN_SERVICE_TYPES,
  houseCleanServiceTypesOptions,
  END_OF_LEASE_SERVICE_TYPES,
  endOfLeaseCleanServiceTypesOptions,
  hearOptions,
  storeysOptions,
  flexibilityOptions,
  getInsideOptions,
  serviceCategoryOptions,
  bedRoomOptions,
  bathRoomOptions,
  powderRoomOptions,
} from "@/const";
import {
  Form,
  Input,
  Button,
  Select,
  DatePicker,
  InputNumber,
  Radio,
  Space,
} from "antd";
import { HouseCleanCheckBoxes, EndOfLeaseCheckBoxes } from "@/components";
import { usePriceManager } from "@/hooks";

export const BookingForm = ({ submitButtonRef }) => {
  const [form] = Form.useForm();

  const serviceType = Form.useWatch("serviceType", form);
  const serviceCategory = Form.useWatch("serviceCategory", form);

  //service
  const noOfStoreys = Form.useWatch("storeys", form);
  const noOfBedrooms = Form.useWatch("bedrooms", form);
  const noOfBathrooms = Form.useWatch("bathrooms", form);
  const noOfPowderRooms = Form.useWatch("powderRooms", form);

  //extras
  const blindsClean = Form.useWatch("blindsClean", form);
  const changeBedSheets = Form.useWatch("changeBedSheets", form);
  const steamCleanBedrooms = Form.useWatch("steamCleanBedrooms", form);
  const steamCleanLivingrooms = Form.useWatch("steamCleanLivingrooms", form);
  const steamCleanHallways = Form.useWatch("steamCleanHallways", form);
  const steamCleanStairs = Form.useWatch("steamCleanStairs", form);
  const steamCleanSingleSeatSofa = Form.useWatch(
    "steamCleanSingleSeatSofa",
    form,
  );
  const steamCleanMultiSeatSofa = Form.useWatch(
    "steamCleanMultiSeatSofa",
    form,
  );
  const wallScrubAndClean = Form.useWatch("wallScrubAndClean", form);

  useEffect(() => {
    if (serviceCategory === SERVICE_CATEGORIES.GENERAL_HOUSE_CLEAN) {
      form.setFieldValue("serviceType", houseCleanServiceTypesOptions[0].value);
    } else if (serviceCategory === SERVICE_CATEGORIES.END_OF_LEASE_CLEAN) {
      form.setFieldValue(
        "serviceType",
        endOfLeaseCleanServiceTypesOptions[0].value,
      );
    }
  }, [serviceCategory]);

  useEffect(() => {
    form.setFieldValue("bedrooms", bedRoomOptions[0].value);
    form.setFieldValue("bathrooms", bathRoomOptions[0].value);
    form.setFieldValue("powderRooms", powderRoomOptions[0].value);

    if (
      serviceType === GENERAL_HOUSE_CLEAN_SERVICE_TYPES.HOUSE ||
      serviceType === GENERAL_HOUSE_CLEAN_SERVICE_TYPES.TOWNHOUSE ||
      serviceType === END_OF_LEASE_SERVICE_TYPES.HOUSE_OR_TOWNHOUSE
    ) {
      form.setFieldValue("storeys", storeysOptions[0].value);
    }
  }, [serviceType]);

  usePriceManager({
    serviceType,
    serviceCategory,
    noOfBathrooms,
    noOfBedrooms,
    noOfPowderRooms,
    noOfStoreys,
  });

  const onFinish = (values) => {
    console.log("Success:", values);
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  const getServiceTypeOptions = () => {
    if (serviceCategory === SERVICE_CATEGORIES.GENERAL_HOUSE_CLEAN) {
      return houseCleanServiceTypesOptions;
    } else if (serviceCategory === SERVICE_CATEGORIES.END_OF_LEASE_CLEAN) {
      return endOfLeaseCleanServiceTypesOptions;
    } else {
      return [];
    }
  };

  return (
    <div>
      <Form
        form={form}
        name="form"
        initialValues={{ remember: true }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
        layout="vertical"
        scrollToFirstError={true}
      >
        <Form.Item
          label="Address"
          name="address"
          rules={[{ required: true, message: "Please enter your address" }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="City"
          name="city"
          rules={[{ required: true, message: "Please enter your city" }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="State"
          name="state"
          rules={[{ required: true, message: "Please select your state" }]}
        >
          <Select options={[{ value: "victoria", label: "Victoria" }]} />
        </Form.Item>
        <Form.Item
          label="Zip Code"
          name="zipcode"
          rules={[{ required: true, message: "Please enter your zip code" }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="Phone"
          name="phone"
          rules={[
            { required: true, message: "Please enter your phone number" },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="Date and Time"
          name="date-time"
          rules={[{ required: true, message: "Please select date and time" }]}
        >
          <DatePicker
            showTime={{ format: "HH" }}
            minDate={dayjs()}
            minTime={"02"}
          />
        </Form.Item>
        <div className="flex w-full gap-4">
          <div className="w-1/2">
            <Form.Item
              label="Service Category"
              name="serviceCategory"
              rules={[
                { required: true, message: "Please select service category" },
              ]}
            >
              <Select options={serviceCategoryOptions} />
            </Form.Item>
          </div>
          <div className="w-1/2">
            <Form.Item
              label="Type of Service"
              name="serviceType"
              rules={[
                { required: true, message: "Please select type of service" },
              ]}
            >
              <Select options={getServiceTypeOptions()} />
            </Form.Item>
          </div>
        </div>
        <Form.Item
          label="Bedrooms"
          name="bedrooms"
          rules={[
            { required: true, message: "Please select number of bedrooms" },
          ]}
        >
          <Select options={bedRoomOptions} />
        </Form.Item>
        <Form.Item
          label="Bathrooms"
          name="bathrooms"
          rules={[
            { required: true, message: "Please select number of bathrooms" },
          ]}
        >
          <Select options={bathRoomOptions} />
        </Form.Item>
        <Form.Item
          label="Powder Rooms"
          name="powderRooms"
          rules={[
            { required: true, message: "Please select number of powder rooms" },
          ]}
          className="w-full"
        >
          <Select options={powderRoomOptions} />
        </Form.Item>

        {(serviceType === GENERAL_HOUSE_CLEAN_SERVICE_TYPES.HOUSE ||
          serviceType === GENERAL_HOUSE_CLEAN_SERVICE_TYPES.TOWNHOUSE ||
          serviceType === END_OF_LEASE_SERVICE_TYPES.HOUSE_OR_TOWNHOUSE) && (
          <Form.Item
            label="Storeys"
            name="storeys"
            rules={[{ required: true, message: "Please select storeys" }]}
          >
            <Select options={storeysOptions} />
          </Form.Item>
        )}

        {serviceCategory === SERVICE_CATEGORIES.GENERAL_HOUSE_CLEAN && (
          <HouseCleanCheckBoxes
            serviceType={serviceType}
            blindsClean={blindsClean}
            changeBedSheets={changeBedSheets}
          />
        )}
        {serviceCategory === SERVICE_CATEGORIES.END_OF_LEASE_CLEAN && (
          <EndOfLeaseCheckBoxes
            steamCleanBedrooms={steamCleanBedrooms}
            steamCleanLivingrooms={steamCleanLivingrooms}
            steamCleanHallways={steamCleanHallways}
            steamCleanStairs={steamCleanStairs}
            steamCleanSingleSeatSofa={steamCleanSingleSeatSofa}
            steamCleanMultiSeatSofa={steamCleanMultiSeatSofa}
            wallScrubAndClean={wallScrubAndClean}
            blindsClean={blindsClean}
            serviceType={serviceType}
          />
        )}

        <Form.Item
          label="Tip"
          name="tip"
          className="w-full"
          rules={[{ min: 0, message: "Minimum amount must be 0" }]}
        >
          <InputNumber prefix="AUD" min={0} className="w-full" />
        </Form.Item>
        <Form.Item
          label="Is easily accessible free parking available?"
          name="parkingAvailable"
          rules={[{ required: true, message: "This field is required" }]}
        >
          <Radio.Group>
            <Space direction="vertical">
              <Radio value={true}>Yes</Radio>
              <Radio value={false}>No</Radio>
            </Space>
          </Radio.Group>
        </Form.Item>
        <Form.Item
          label="How will we get inside your home?"
          name="getHome"
          rules={[{ required: true, message: "This field is required" }]}
        >
          <Radio.Group>
            <Space direction="vertical">
              {getInsideOptions.map((option) => (
                <Radio key={option.value} value={option.value}>
                  {option.label}
                </Radio>
              ))}
            </Space>
          </Radio.Group>
        </Form.Item>
        <Form.Item
          label="Is date/time flexible"
          name="flexibility"
          rules={[{ required: true, message: "This field is required" }]}
        >
          <Select options={flexibilityOptions} />
        </Form.Item>
        <Form.Item label="Special Notes" name="notes" className="w-full">
          <Input.TextArea rows={5} />
        </Form.Item>
        <Form.Item label="How did you hear about us?" name="heard_from">
          <Select options={hearOptions} />
        </Form.Item>
        <Form.Item>
          <Button
            type="primary"
            htmlType="submit"
            ref={submitButtonRef}
            style={{ display: "none" }}
          >
            Submit
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};
