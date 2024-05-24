import { z } from "zod"

export const formSchema = z.object({
  login: z.string().min(2, {
    message: "Адрес электронной почты/телефон должен содержать не менее 2 символов.",
  }),
  passHash: z.string().min(3)
})