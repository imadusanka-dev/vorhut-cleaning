import dayjs from "dayjs";
import {
  serviceCategories,
  typesOfServices,
  hearOptions,
  serviceTypes,
  storeysOptions,
  flexibilityOptions,
  getInsideOptions,
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
  Checkbox,
} from "antd";
import { HouseCleanCheckBoxes } from "@/components";

export const BookingForm = ({ submitButtonRef }) => {
  const [form] = Form.useForm();

  const serviceType = Form.useWatch("serviceType", form);
  const blindsClean = Form.useWatch("blindsClean", form);
  const changeBedSheets = Form.useWatch("changeBedSheets", form);

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
              name="category"
              rules={[
                { required: true, message: "Please select service category" },
              ]}
            >
              <Select options={serviceCategories} />
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
              <Select options={typesOfServices} />
            </Form.Item>
          </div>
        </div>
        <Form.Item
          label="No. of Bedrooms"
          name="bedrooms"
          rules={[
            { required: true, message: "Please enter number of bedrooms" },
          ]}
          className="w-full"
        >
          <InputNumber className="w-full" min={1} max={6} />
        </Form.Item>
        <Form.Item
          label="No. of Bathrooms"
          name="bathrooms"
          rules={[
            { required: true, message: "Please enter number of bathrooms" },
          ]}
          className="w-full"
        >
          <InputNumber className="w-full" min={1} max={6} />
        </Form.Item>
        <Form.Item
          label="No. of Powder Rooms"
          name="powderRooms"
          rules={[
            { required: true, message: "Please enter number of powder rooms" },
          ]}
          className="w-full"
        >
          <InputNumber className="w-full" min={0} max={6} />
        </Form.Item>

        {(serviceType === serviceTypes.HOUSE ||
          serviceType === serviceTypes.TOWNHOUSE) && (
          <Form.Item
            label="Storeys"
            name="storeys"
            rules={[{ required: true, message: "Please select storeys" }]}
          >
            <Select options={storeysOptions} />
          </Form.Item>
        )}

        {/*<Form.Item name="deepClean" className="mb-0">*/}
        {/*  <Checkbox>Deep Clean/Initial Clean</Checkbox>*/}
        {/*</Form.Item>*/}
        {/*<Form.Item name="insideCupboards" className="mb-0">*/}
        {/*  <Checkbox>Inside Cupboards</Checkbox>*/}
        {/*</Form.Item>*/}
        {/*<Form.Item name="insideEmptyFridge" className="mb-0">*/}
        {/*  <Checkbox>Inside the Fridge (Empty)</Checkbox>*/}
        {/*</Form.Item>*/}
        {/*<Form.Item name="insideFullFridge" className="mb-0">*/}
        {/*  <Checkbox>Inside the Fridge (Full)</Checkbox>*/}
        {/*</Form.Item>*/}
        {/*<Form.Item name="ovenClean" className="mb-0">*/}
        {/*  <Checkbox>Oven Clean</Checkbox>*/}
        {/*</Form.Item>*/}
        {/*<Form.Item name="insideWindows" className="mb-0">*/}
        {/*  <Checkbox>Inside Windows</Checkbox>*/}
        {/*</Form.Item>*/}
        {/*<Form.Item name="petHairRemoval" className="mb-0">*/}
        {/*  <Checkbox>Pet Hair Removal</Checkbox>*/}
        {/*</Form.Item>*/}
        {/*<Form.Item name="balconyClean" className="mb-0">*/}
        {/*  <Checkbox>Balcony Clean</Checkbox>*/}
        {/*</Form.Item>*/}
        {/*<Form.Item name="ecoFriendlyClean" className="mb-0">*/}
        {/*  <Checkbox>Eco Friendly Clean</Checkbox>*/}
        {/*</Form.Item>*/}
        {/*{(serviceType === serviceTypes.HOUSE ||*/}
        {/*  serviceType === serviceTypes.TOWNHOUSE) && (*/}
        {/*  <Form.Item name="garageClean" className="mb-0">*/}
        {/*    <Checkbox>Garage Clean</Checkbox>*/}
        {/*  </Form.Item>*/}
        {/*)}*/}
        {/*{(serviceType === serviceTypes.HOUSE ||*/}
        {/*  serviceType === serviceTypes.TOWNHOUSE) && (*/}
        {/*  <Form.Item name="verandahClean" className="mb-0">*/}
        {/*    <Checkbox>Verandah Clean</Checkbox>*/}
        {/*  </Form.Item>*/}
        {/*)}*/}
        {/*<Form.Item name="dishwasherClean" className="mb-0">*/}
        {/*  <Checkbox>Dishwasher Clean</Checkbox>*/}
        {/*</Form.Item>*/}
        {/*<Form.Item name="microwaveClean">*/}
        {/*  <Checkbox>Microwave Clean</Checkbox>*/}
        {/*</Form.Item>*/}
        <HouseCleanCheckBoxes
          serviceType={serviceType}
          blindsClean={blindsClean}
          changeBedSheets={changeBedSheets}
        />

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
