"use client";

import { Layout, Menu } from "antd";
import {
  HomeOutlined,
  ShareAltOutlined,
  PlusOutlined,
  HistoryOutlined,
} from "@ant-design/icons";
import Link from "next/link";
import type { MenuProps } from "antd";

export const Sidebar = () => {
  const { Sider } = Layout;

  type MenuItem = Required<MenuProps>["items"][number];

  function getItem(
    label: React.ReactNode,
    key: React.Key,
    icon?: React.ReactNode,
    children?: MenuItem[],
  ): MenuItem {
    return {
      key,
      icon,
      children,
      label,
    } as MenuItem;
  }

  const items: MenuItem[] = [
    getItem(
      <Link href="/dashboard/customer">Home</Link>,
      "1",
      <HomeOutlined />,
    ),
    getItem(
      <Link href="/dashboard/customer/add-booking">Add Booking</Link>,
      "2",
      <PlusOutlined />,
    ),
    getItem("Booking History", "3", <HistoryOutlined />),
    getItem("Referral", "4", <ShareAltOutlined />),
  ];

  return (
    <Sider
      style={{
        minHeight: "100%",
      }}
      breakpoint="lg"
      collapsedWidth="0"
      onBreakpoint={(broken) => {
        console.log(broken);
      }}
      onCollapse={(collapsed, type) => {
        console.log(collapsed, type);
      }}
    >
      <Menu
        theme="light"
        mode="inline"
        defaultSelectedKeys={["1"]}
        items={items}
        style={{ minHeight: "calc(100vh - 64px)" }}
      />
    </Sider>
  );
};
