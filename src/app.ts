import fastify, {
  FastifyReply,
  FastifyRequest,
  HookHandlerDoneFunction,
} from 'fastify'
import cors from '@fastify/cors'
import jwt from '@fastify/jwt'
import cookie from '@fastify/cookie'

import { authRoutes } from './routes/auth.routes'
import { authMiddleware } from './middlewares/auth.middleware'
import { tasksRoutes } from './routes/tasks.routes'

const app = fastify()

app.register(cors, {
  credentials: true,
  origin: '*',
})
app.register(cookie, {
  secret: String(process.env.COOKIE_SECRET),
  hook: 'onRequest',
})
app.register(jwt, {
  secret: String(process.env.JWT_SECRET),
})

app.addHook(
  'onRequest',
  (req: FastifyRequest, res: FastifyReply, next: HookHandlerDoneFunction) => {
    req.jwt = app.jwt
    return next()
  }
)

app.decorate('authenticate', authMiddleware)

app.register(authRoutes, {
  prefix: '/api/auth',
})
app.register(tasksRoutes, {
  prefix: '/api/tasks',
})

app.listen({ port: 3333, host: 'localhost' }, (error, address) => {
  if (error) {
    console.error(error)
    process.exit(1)
  }
  console.log('server listening at', address)
})
