import { message } from "antd";

export const useMessage = () => {
  const [messageApi, contextHolder] = message.useMessage();

  return { message: messageApi, contextHolder };
};
