import { FastifyInstance } from 'fastify'
import { authController } from '../controllers/auth/auth.controller'

export async function authRoutes(app: FastifyInstance) {
  app.post('/register', authController.register)
  app.post('/login', authController.login)
  app.post(
    '/logout',
    {
      preHandler: [app.authenticate],
    },
    authController.logout
  )
}
