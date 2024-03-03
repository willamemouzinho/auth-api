import { z } from 'zod'

export const authRegisterSchema = z.object({
  username: z.string(),
  password: z.string().min(5),
})

// export const authRegisterResponseSchema = z.object({
//   id: z.string().uuid(),
//   username: z.string(),
// })

export type AuthRegisterBodySchema = z.infer<typeof authRegisterSchema>

export const authLoginSchema = z.object({
  username: z.string(),
  password: z.string().min(5),
})

// export const authLoginResponseSchema = z.object({
//   accessToken: z.string(),
// })

export type AuthLoginBodySchema = z.infer<typeof authLoginSchema>
