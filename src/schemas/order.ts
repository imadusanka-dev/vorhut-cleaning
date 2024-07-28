import type { TypeOf } from "zod";
import { object, string, number, boolean, date } from "zod";

const userSchema = object({
  firstName: string(),
  lastName: string(),
  email: string(),
  phone: string(),
});

const categorySchema = object({
  name: string(),
});

const serviceTypeSchema = object({
  name: string(),
});

const extraServiceSchema = object({
  id: number(),
  price: number(),
  quantity: number().optional(),
  title: string(),
});

const orderSchema = object({
  id: number(),
  user: userSchema,
  address: string(),
  city: string(),
  state: string(),
  zipCode: string(),
  serviceCategory: categorySchema,
  serviceType: serviceTypeSchema,
  noOfBedrooms: number(),
  noOfBathrooms: number(),
  noOfPowderRooms: number(),
  noOfStoreys: number().nullable(),
  date: date(),
  tip: number().nullable(),
  flexibility: string(),
  getInsideHome: string(),
  notes: string().nullable(),
  heardFrom: string().nullable(),
  isParkingAvailable: boolean(),
  extraServices: extraServiceSchema.array(),
  status: string(),
  createdAt: string(),
  updatedAt: string(),
});

export type Order = TypeOf<typeof orderSchema>;
