import { z } from "zod";

export const fromSchema = z.object({
 name: z
  .string({ message: "Informe seu nome" })
  .min(3, "Deve conter ao menos 3 caracteres!"),
 email: z.string({ message: "Informe seu email" }).email("Email inválido!"),
 message: z
  .string({ message: "Informe sua mensagem" })
  .min(3, "Deve conter ao menos 3 caracteres!"),
});

export type FormSchema = z.infer<typeof fromSchema>