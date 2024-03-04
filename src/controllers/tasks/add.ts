import { FastifyReply, FastifyRequest } from 'fastify'

import { prisma } from '../../utils/prisma'
import { AddTaskBodySchema, addTaskSchema } from '../../schemas/tasks.schema'

export const add = async (
  req: FastifyRequest<{
    Body: AddTaskBodySchema
  }>,
  res: FastifyReply
) => {
  const bodySchema = addTaskSchema
  const { title, description } = bodySchema.parse(req.body)
  try {
    const task = await prisma.task.create({
      data: {
        title,
        description,
        userId: req.user.id,
      },
      select: {
        id: true,
        title: true,
        description: true,
      },
    })

    return res.code(200).send({ task })
  } catch (error) {
    console.error(error)
  }
}
