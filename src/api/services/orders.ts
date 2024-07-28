import { instance } from "@/api";
import type { Order } from "@/schemas";

export const getBookings = (): Promise<Order[]> => {
  return instance.get("/orders").then((response) => response.data);
};
