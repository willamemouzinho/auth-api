import { z } from 'zod'

export const taskParamsSchema = z.object({
  id: z.string().uuid(),
})
export type GetTaskByIdParamsSchema = z.infer<typeof taskParamsSchema>

export const addTaskSchema = z.object({
  title: z.string(),
  description: z.string(),
})
export type AddTaskBodySchema = z.infer<typeof addTaskSchema>

export type DeleteTaskByIdParamsSchema = z.infer<typeof taskParamsSchema>
