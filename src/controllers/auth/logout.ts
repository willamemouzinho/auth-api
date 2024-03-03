import { FastifyReply, FastifyRequest } from 'fastify'

export const logout = async (req: FastifyRequest, res: FastifyReply) => {
  res.clearCookie('access_token')
  return res.code(204).send()
}
