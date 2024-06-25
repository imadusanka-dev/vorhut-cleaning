import { Input, Typography } from "antd";

type Props = {
  label?: string;
  defaultValue?: string;
};

export const TextInput = ({ label, ...rest }: Props) => {
  return (
    <>
      {label && (
        <Typography.Text style={{ color: "red", marginBottom: "20px" }}>
          {label}
        </Typography.Text>
      )}
      <Input {...rest} />
    </>
  );
};
