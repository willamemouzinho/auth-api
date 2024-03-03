import { FastifyJWT } from '@fastify/jwt'
import { FastifyRequest, FastifyReply } from 'fastify'

export const authMiddleware = async (
  req: FastifyRequest,
  res: FastifyReply
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
  } catch (error) {
    console.error(error)
  }
}

// async (req: FastifyRequest, reply: FastifyReply) => {
//   const token = req.cookies.access_token
//   if (!token) {
//     return reply.status(401).send({ message: 'Authentication required' })
//   }
//   // here decoded will be a different type by default but we want it to be of user-payload type
//   const decoded = req.jwt.verify<FastifyJWT['user']>(token)
//   req.user = decoded
// }

// async (
//   req: FastifyRequest,
//   res: FastifyReply
// ) => {
//   try {
//     await req.jwtVerify()
//   } catch (err) {
//     res.send(err)
//   }

// req.jwtVerify(function (error, decoded) {
//   console.log(error)
//   console.log(decoded)
//   return res.send(error || decoded)
// })
