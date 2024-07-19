import z from "zod";

const promoCodeSchema = z.object({
  id: z.number(),
  code: z.string(),
  discount: z.number(),
  type: z.enum(["FIXED", "PERCENTAGE"]),
  isActive: z.boolean(),
  createdAt: z.date(),
  updatedAt: z.date(),
});

export type PromoCode = z.infer<typeof promoCodeSchema>;
