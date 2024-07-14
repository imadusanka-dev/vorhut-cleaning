import { Checkbox, Form, InputNumber, Space } from "antd";
import type { NamePath } from "rc-field-form/es/interface";
import { className } from "postcss-selector-parser";

interface Props {
  checkBoxName: string;
  inputName: string;
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
        <Form.Item
          name={checkBoxName}
          valuePropName="checked"
          className="mb-0"
          preserve={false}
        >
          <Checkbox />
        </Form.Item>
        <Form.Item name={inputName} preserve={false} className="mb-0">
          <InputNumber disabled={disableInput} />
        </Form.Item>
        {title}
      </Space>
    </div>
  );
};
