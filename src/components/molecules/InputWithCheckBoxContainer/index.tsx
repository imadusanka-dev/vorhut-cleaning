"use client";
import { Form } from "antd";
import { useStore } from "@/store";
import { useEffect } from "react";
import { InputWithCheckBox } from "@/components";

export const InputWithCheckBoxContainer = ({
  id,
  title,
  price,
  inputName,
  checkBoxName,
}: {
  id: number;
  price: number;
  title: string;
  inputName: string;
  checkBoxName: string;
}) => {
  const form = Form.useFormInstance();
  const checkBoxValue = Form.useWatch(checkBoxName, form);
  const quantity = Form.useWatch(inputName, form);
  const setExtraServices = useStore((state) => state.setExtraServices);
  const removeExtraService = useStore((state) => state.removeExtraService);

  useEffect(() => {
    if (checkBoxValue) {
      form.setFieldValue(inputName, 1);
    } else {
      form.setFieldValue(inputName, undefined);
    }
  }, [checkBoxValue, inputName, form]);

  useEffect(() => {
    if (checkBoxValue) {
      setExtraServices({
        id,
        price,
        title,
        quantity,
      });
    } else {
      removeExtraService(id);
    }
  }, [
    id,
    price,
    title,
    quantity,
    checkBoxValue,
    setExtraServices,
    removeExtraService,
  ]);

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
