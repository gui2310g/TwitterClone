import { z } from "zod";

export const searchSchema = z.object({
    text: z
      .string()
      .min(1, { message: "Search can't be empty" })
      .refine((value) => !/^\s*$/.test(value), {
        message: "Search can't be only spaces",
      }),
});