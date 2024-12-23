import { z } from "zod";

export const UserSchema = z
  .object({
    avatar: z.string().optional(),
    background: z.string().optional()
  })
  .transform((data) => {
    return Object.fromEntries(
      Object.entries(data).filter(([, value]) => value && value.trim() !== "")
    );
  });
