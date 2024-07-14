import z from "zod";
import type { TypeOf } from "zod";

const pricesSchema = z.object({
  id: z.number(),
  categoryId: z.number(),
  bedRoomPrices: z.object({
    1: z.number(),
    2: z.number(),
    3: z.number(),
    4: z.number(),
    5: z.number(),
  }),
  extraBathroomPrice: z.number(),
  powderRoomPrice: z.number(),
  doubleStoryPrice: z.number().nullable(),
});

export type ServicesPrices = TypeOf<typeof pricesSchema>;
