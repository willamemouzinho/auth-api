import { z } from 'zod'

export const getTasksSchema = z.object({
  id: z.string().uuid(),
})

export type GetTasksParamsSchema = z.infer<typeof getTasksSchema>
