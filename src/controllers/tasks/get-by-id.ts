import { FastifyReply, FastifyRequest } from 'fastify'

import { prisma } from '../../utils/prisma'
import {
  GetTaskByIdParamsSchema,
  taskParamsSchema,
} from '../../schemas/tasks.schema'

export const getById = async (
  req: FastifyRequest<{
    Params: GetTaskByIdParamsSchema
  }>,
  res: FastifyReply
) => {
  const paramsSchema = taskParamsSchema
  const { id } = paramsSchema.parse(req.params)

  try {
    const task = await prisma.task.findUnique({
      where: {
        userId: req.user.id,
        id,
      },
    })

    return res.code(200).send({ task })
  } catch (error) {
    console.error(error)
  }
}
