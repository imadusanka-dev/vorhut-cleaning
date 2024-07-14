"use client";
import { Form } from "antd";
import { useEffect } from "react";
import { ExtraService } from "@/schemas";
import { CheckBox, InputWithCheckBox } from "@/components";

interface Props {
  extraServices: ExtraService[] | undefined;
}

export const InputWithCheckBoxContainer = ({
  checkBoxName,
  inputName,
  title,
}: {
  checkBoxName: string;
  inputName: string;
  title: string;
}) => {
  const form = Form.useFormInstance();
  const checkBoxValue = Form.useWatch(checkBoxName, form);

  useEffect(() => {
    if (checkBoxValue) {
      form.setFieldValue(inputName, 1);
    } else {
      form.setFieldValue(inputName, undefined);
    }
  }, [checkBoxValue, inputName, form]);

  return (
    <InputWithCheckBox
      checkBoxName={checkBoxName}
      inputName={inputName}
      title={title}
      disableInput={!checkBoxValue}
      className="mb-2"
    />
  );
};

export const ExtraServices = ({ extraServices }: Props) => {
  return (
    <>
      {extraServices?.map((service) => {
        if (service.withInput) {
          return (
            <InputWithCheckBoxContainer
              key={service.id}
              checkBoxName={service.name}
              inputName={`${service.name}Quantity`}
              title={service.label}
            />
          );
        } else {
          return (
            <CheckBox
              key={service.id}
              name={service.name}
              title={service.label}
            />
          );
        }
      })}
    </>
  );
};
