import { z } from "zod";

export const commentSchema = z
  .object({
    banner: z.string().optional(),
    text: z
      .string()
      .max(280, { message: "Text cannot exceed 280 characters" })
      .optional(),
  })
  .refine((data) => data.banner || data.text, {
    message: "You must provide at least a text or a banner.",
  });
