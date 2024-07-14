"use client";
import { ExtraService } from "@/schemas";
import { CheckBoxContainer, InputWithCheckBoxContainer } from "@/components";

interface Props {
  extraServices: ExtraService[] | undefined;
}

export const ExtraServices = ({ extraServices }: Props) => {
  return (
    <>
      {extraServices?.map((service) => {
        if (service.withInput) {
          return (
            <InputWithCheckBoxContainer
              key={service.id}
              id={service.id}
              price={service.price}
              title={service.label}
              checkBoxName={service.name}
              inputName={`${service.name}Quantity`}
            />
          );
        } else {
          return (
            <CheckBoxContainer
              key={service.id}
              id={service.id}
              price={service.price}
              name={service.name}
              title={service.label}
            />
          );
        }
      })}
    </>
  );
};
