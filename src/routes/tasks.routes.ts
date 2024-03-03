import { FastifyInstance } from 'fastify'
import { tasksController } from '../controllers/tasks/tasks.controller'

export async function tasksRoutes(app: FastifyInstance) {
  app.get(
    '/',
    {
      onRequest: [app.authenticate],
    },
    tasksController.getTasks
  )
}
