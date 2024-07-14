"use client";

import { useStore } from "@/store";
import { useEffect } from "react";
import dayjs from "dayjs";
import {
  hearOptions,
  storeysOptions,
  flexibilityOptions,
  getInsideOptions,
  bedRoomOptions,
  bathRoomOptions,
  powderRoomOptions,
  extraServicesFields,
  storeysEnabledServiceTypes,
} from "@/const";
import {
  Form,
  Input,
  Button,
  Select,
  DatePicker,
  TimePicker,
  InputNumber,
  Radio,
  Space,
} from "antd";
import { ExtraServices } from "@/components";
import { usePriceManager } from "@/hooks";
import { useQuery } from "@tanstack/react-query";
import {
  getCategories,
  getServiceTypes,
  getExtraServices,
  getServicesPrices,
} from "@/api/services";
import { isValidEmail } from "@/utils/isValidEmail";
import { isValidPhoneNumber } from "@/utils/isValidPhoneNumber";
import { formatSelectOptionArray } from "@/utils/formatSelectOptions";

const disabledHours = [0, 1, 2, 3, 4, 5, 6, 7, 18, 19, 20, 21, 22, 23];

export const BookingForm = ({ submitButtonRef }) => {
  const [form] = Form.useForm();
  const resetExtraServices = useStore((state) => state.resetExtraServices);

  const serviceType = Form.useWatch("serviceType", form);
  const serviceCategory = Form.useWatch("serviceCategory", form);

  //service
  const noOfStoreys = Form.useWatch("storeys", form);
  const noOfBedrooms = Form.useWatch("bedrooms", form);
  const noOfBathrooms = Form.useWatch("bathrooms", form);
  const noOfPowderRooms = Form.useWatch("powderRooms", form);

  const tip = Form.useWatch("tip", form);

  const {
    data: categories,
    isLoading: isCategoriesLoading,
    isSuccess: isCategoriesSuccess,
  } = useQuery({
    queryKey: ["categories"],
    queryFn: getCategories,
  });

  const {
    data: serviceTypes,
    isLoading: isServiceTypesLoading,
    isSuccess: isServiceTypesSuccess,
  } = useQuery({
    queryKey: ["serviceTypes", serviceCategory],
    queryFn: () => getServiceTypes(serviceCategory),
    enabled: !!serviceCategory,
  });

  const { data: prices } = useQuery({
    queryKey: ["servicePrices", serviceType],
    queryFn: () => getServicesPrices(serviceType),
    enabled: !!serviceType,
  });

  const {
    data: extraServices,
    isLoading: isExtraServicesLoading,
    isRefetching: isExtraServicesRefetching,
  } = useQuery({
    queryKey: ["extraServices", serviceType],
    queryFn: () => getExtraServices(serviceType),
    enabled: !!serviceType,
  });

  useEffect(() => {
    if (isCategoriesSuccess && categories) {
      form.setFieldValue("serviceCategory", categories[0].id);
    }
  }, [isCategoriesSuccess, categories, form]);

  useEffect(() => {
    //set first service type as default value
    if (isServiceTypesSuccess && serviceTypes) {
      form.setFieldValue("serviceType", serviceTypes[0].id);
    }
  }, [isServiceTypesSuccess, serviceTypes, form]);

  useEffect(() => {
    //reset fields when service type changed
    if (serviceType) {
      form.setFieldValue("bedrooms", bedRoomOptions[0].value);
      form.setFieldValue("bathrooms", bathRoomOptions[0].value);
      form.setFieldValue("powderRooms", powderRoomOptions[0].value);

      if (storeysEnabledServiceTypes.includes(Number(serviceType))) {
        form.setFieldValue("storeys", storeysOptions[0].value);
      }
    }

    //reset extra services
    form.resetFields(extraServicesFields);
    resetExtraServices();
  }, [serviceType, form]);

  usePriceManager({
    serviceType,
    serviceCategory,
    noOfBathrooms,
    noOfBedrooms,
    noOfPowderRooms,
    noOfStoreys,
    prices,
    tip,
  });

  const onFinish = (values) => {
    console.log("Success:", values);
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <div>
      <Form
        form={form}
        name="form"
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
        layout="vertical"
        scrollToFirstError={true}
        clearOnDestroy={true}
      >
        <div className="flex gap-4">
          <div className="lg:w-1/2 md:w-1/2 sm:w-full">
            <Form.Item
              label="First Name"
              name="firstName"
              rules={[
                { required: true, message: "Please enter your first name" },
              ]}
            >
              <Input />
            </Form.Item>
          </div>
          <div className="lg:w-1/2 md:w-1/2 sm:w-full">
            <Form.Item
              label="Last Name"
              name="lastName"
              rules={[
                { required: true, message: "Please enter your last name" },
              ]}
            >
              <Input />
            </Form.Item>
          </div>
        </div>
        <Form.Item
          label="Email"
          name="email"
          rules={[
            { required: true, message: "Please enter your email" },
            () => ({
              validator(_, value) {
                if (isValidEmail(value)) {
                  return Promise.resolve();
                } else {
                  return Promise.reject(new Error("Invalid email"));
                }
              },
            }),
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="Phone"
          name="phone"
          rules={[
            { required: true, message: "Please enter your phone number" },
            () => ({
              validator(_, value) {
                if (isValidPhoneNumber(value)) {
                  return Promise.resolve();
                } else {
                  return Promise.reject(new Error("Invalid phone number"));
                }
              },
            }),
          ]}
        >
          <Input />
        </Form.Item>
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
        <div className="flex">
          <div className="w-1/2">
            <Form.Item
              label="Date"
              name="date"
              rules={[{ required: true, message: "Please select date" }]}
            >
              <DatePicker minDate={dayjs().add(1, "day")} />
            </Form.Item>
          </div>
          <div className="w-1/2">
            <Form.Item
              label="Time"
              name="time"
              rules={[{ required: true, message: "Please select time" }]}
            >
              <TimePicker
                format="HH:mm"
                disabledHours={() => disabledHours}
                minuteStep={30}
                hideDisabledOptions
                needConfirm={false}
              />
            </Form.Item>
          </div>
        </div>

        <div className="flex w-full gap-4">
          <div className="w-1/2">
            <Form.Item
              label="Service Category"
              name="serviceCategory"
              rules={[
                { required: true, message: "Please select service category" },
              ]}
            >
              <Select options={formatSelectOptionArray(categories)} />
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
              <Select options={formatSelectOptionArray(serviceTypes)} />
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

        {storeysEnabledServiceTypes.includes(Number(serviceType)) && (
          <Form.Item
            label="Storeys"
            name="storeys"
            rules={[{ required: true, message: "Please select storeys" }]}
          >
            <Select options={storeysOptions} />
          </Form.Item>
        )}

        <ExtraServices extraServices={extraServices} />

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
