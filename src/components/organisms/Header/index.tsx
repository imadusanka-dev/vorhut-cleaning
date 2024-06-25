import { Button, Avatar, Space, Dropdown } from "antd";
import { UserOutlined } from "@ant-design/icons";

export const Header = () => {
  return (
    <nav className="h-16 flex p-5 justify-between items-center">
      <h1>Vorhut</h1>
      <Space direction="horizontal">
        <Avatar size={40} icon={<UserOutlined />} />
        <Button type="link">Logout</Button>
      </Space>
    </nav>
  );
};
