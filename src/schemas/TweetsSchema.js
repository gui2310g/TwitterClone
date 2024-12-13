import { z } from "zod";

export const TweetsSchema = z.object({
    banner: z.instanceof(File).optional(),
    text: z.string().optional()
}).refine(data => data.banner || data.text, {
    message: "Can't submit a tweet without at least one banner or one text"
});
