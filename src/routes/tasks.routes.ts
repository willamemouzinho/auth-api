import { FastifyInstance } from 'fastify'

import { tasksController } from '../controllers/tasks/tasks.controller'

export async function tasksRoutes(app: FastifyInstance) {
  app.addHook('onRequest', app.authenticate)

  app.get('/', tasksController.getAll)
  app.get('/:id', tasksController.getById)
  app.post('/', tasksController.add)
  app.delete('/:id', tasksController.deleteById)
}
