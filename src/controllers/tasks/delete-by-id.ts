import { FastifyReply, FastifyRequest } from 'fastify'

import { prisma } from '../../utils/prisma'
import { taskParamsSchema } from '../../schemas/tasks.schema'

export const deleteById = async (req: FastifyRequest, res: FastifyReply) => {
  const paramsSchema = taskParamsSchema
  const { id } = paramsSchema.parse(req.params)

  try {
    const task = await prisma.task.findUnique({
      where: {
        id,
        userId: req.user.id,
      },
    })
    if (!task) {
      return res.code(400).send({ message: 'task not found' })
    }

    await prisma.task.delete({
      where: {
        id,
        userId: req.user.id,
      },
    })
    console.log(task)

    return res.code(204).send()
  } catch (error) {
    console.error(error)
  }
}
