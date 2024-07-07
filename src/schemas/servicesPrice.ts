import z from "zod";
import type { TypeOf } from "zod";

const GeneralHouseCleanPricesSchema = z.object({
  BASE_PRICE: z.number(),
  EXTRA_BEDROOM_PRICE: z.number(),
  EXTRA_BATHROOM_PRICE: z.number(),
  POWDER_ROOM_PRICE: z.number(),
  DOUBLE_STOREY_PRICE: z.number().optional(),
});

const EndOfLeaseCleanSchema = z.object({
  BEDROOMS: z.object({
    1: z.number(),
    2: z.number(),
    3: z.number(),
    4: z.number(),
    5: z.number(),
  }),
  EXTRA_BATHROOM_PRICE: z.number(),
  POWDER_ROOM_PRICE: z.number(),
  DOUBLE_STOREY_PRICE: z.number().optional(),
});

const pricesSchema = z.object({
  "1": z.object({
    "1": GeneralHouseCleanPricesSchema,
    "2": GeneralHouseCleanPricesSchema,
    "3": GeneralHouseCleanPricesSchema,
  }),
  "2": z.object({
    "4": EndOfLeaseCleanSchema,
    "5": EndOfLeaseCleanSchema,
  }),
});

export type ServicesPrices = TypeOf<typeof pricesSchema>;
