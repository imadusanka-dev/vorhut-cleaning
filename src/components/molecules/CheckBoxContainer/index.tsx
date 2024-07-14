"use client";
import { Form } from "antd";
import { useStore } from "@/store";
import { useEffect } from "react";
import { CheckBox } from "@/components";

export const CheckBoxContainer = ({
  id,
  name,
  title,
  price,
}: {
  id: number;
  name: string;
  title: string;
  price: number;
}) => {
  const form = Form.useFormInstance();
  const checkBoxValue = Form.useWatch(name, form);
  const setExtraServices = useStore((state) => state.setExtraServices);
  const removeExtraService = useStore((state) => state.removeExtraService);

  useEffect(() => {
    if (checkBoxValue) {
      setExtraServices({
        id,
        price,
      });
    } else {
      removeExtraService(id);
    }
  }, [checkBoxValue, id, price, setExtraServices, removeExtraService]);

  return <CheckBox name={name} title={title} />;
};
