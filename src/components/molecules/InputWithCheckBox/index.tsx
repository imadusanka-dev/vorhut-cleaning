import { Checkbox, Form, InputNumber, Space } from "antd";
import type { NamePath } from "rc-field-form/es/interface";
import { className } from "postcss-selector-parser";

interface Props {
  checkBoxName: NamePath<any>;
  inputName: NamePath<any>;
  title: string | undefined;
  disableInput: boolean | undefined;
  className?: string;
}

export const InputWithCheckBox = ({
  title,
  inputName,
  disableInput,
  checkBoxName,
  className,
}: Props) => {
  return (
    <div className={className}>
      <Space direction="horizontal">
        <Form.Item name={checkBoxName} valuePropName="checked" className="mb-0">
          <Checkbox />
        </Form.Item>
        <Form.Item name={inputName} className="mb-0">
          <InputNumber disabled={disableInput} />
        </Form.Item>
        {title}
      </Space>
    </div>
  );
};
