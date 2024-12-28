import { z } from "zod";

export const commentSchema = z.object({
  text: z
    .string()
    .max(280, { message: "Text cannot exceed 280 characters" })
    .optional(),
});
