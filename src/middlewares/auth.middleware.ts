import { FastifyRequest, FastifyReply, HookHandlerDoneFunction } from 'fastify'
import { FastifyJWT } from '@fastify/jwt'

export const authMiddleware = (
  req: FastifyRequest,
  res: FastifyReply,
  done: HookHandlerDoneFunction
) => {
  try {
    const token = req.cookies.access_token
    if (!token) {
      return res.code(401).send({
        message: 'authentication required',
      })
    }
    const decoded = req.jwt.verify<FastifyJWT['user']>(token)
    req.user = decoded

    return done()
  } catch (error) {
    console.error(error)
  }
}
