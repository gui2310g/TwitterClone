import { z } from "zod";

export const signinSchema = z.object({
    email: z.string().email({message: "Invalid Email"}).toLowerCase(),
    password: z.string().min(6, {message: "Password has to be a minimum 6 characters"})
})