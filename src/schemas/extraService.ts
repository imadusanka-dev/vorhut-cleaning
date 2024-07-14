import type { TypeOf } from "zod";
import { object, number, string, boolean } from "zod";

const extraService = object({
  id: number(),
  name: string(),
  label: string(),
  price: number(),
  serviceTypes: number().array(),
  withInput: boolean(),
});

export type ExtraService = TypeOf<typeof extraService>;
