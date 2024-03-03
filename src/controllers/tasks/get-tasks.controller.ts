import { FastifyReply, FastifyRequest } from 'fastify'
import { prisma } from '../../utils/prisma'
import { getTasksSchema } from '../../schemas/tasks.schema'

export const getTasks = async (req: FastifyRequest, res: FastifyReply) => {
  console.log('req.user', req.user)
  try {
    const tasks = await prisma.task.findMany({
      where: {
        id: req.user.id,
      },
    })

    console.log('tasks', tasks)

    return res.code(200).send({ tasks })
  } catch (error) {
    console.error(error)
  }
}
