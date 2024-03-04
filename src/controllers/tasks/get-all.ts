import { FastifyReply, FastifyRequest } from 'fastify'

import { prisma } from '../../utils/prisma'

export const getAll = async (req: FastifyRequest, res: FastifyReply) => {
  try {
    const tasks = await prisma.task.findMany({
      where: {
        userId: req.user.id,
      },
      select: {
        id: true,
        title: true,
        description: true,
      },
    })

    return res.code(200).send({ tasks })
  } catch (error) {
    console.error(error)
  }
}
