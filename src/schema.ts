import { z } from "zod";

export const UserCreateSchema = z.object({
  username: z.string(),
  email: z.string().email(),
  password: z.string(),
});
