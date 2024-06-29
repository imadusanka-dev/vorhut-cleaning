import { Checkbox, Form } from "antd";
import type { NamePath } from "rc-field-form/es/interface";

interface Props {
  name: NamePath<any>;
  title: string | undefined;
  className?: string;
}

export const CheckBox = ({ name, title, className }: Props) => {
  return (
    <div className={className}>
      <Form.Item name={name} valuePropName="checked" className="mb-0">
        <Checkbox>{title}</Checkbox>
      </Form.Item>
    </div>
  );
};
