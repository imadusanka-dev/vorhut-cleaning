import { instance } from "@/api";
import { Category, ServiceType } from "@/types";

export const getCategories = (): Promise<Category[]> => {
  return instance.get("/categories").then((response) => response.data);
};

export const getServiceTypes = (categoryId: number): Promise<ServiceType[]> => {
  return instance
    .get(`/categories/${categoryId}/service-types`)
    .then((response) => response.data);
};
