import { FastifyReply, FastifyRequest } from 'fastify'
import { AuthLoginBodySchema, authLoginSchema } from '../../schemas/auth.schema'
import { prisma } from '../../utils/prisma'

export const login = async (
  req: FastifyRequest<{
    Body: AuthLoginBodySchema
  }>,
  res: FastifyReply
) => {
  const bodySchema = authLoginSchema
  const { username, password } = bodySchema.parse(req.body)

  try {
    const user = await prisma.user.findUnique({
      where: {
        username,
      },
    })

    if (!user) {
      return res.code(401).send({ message: 'invalid credentials' })
    }

    if (password !== user.password) {
      return res.code(401).send({ message: 'invalid credentials' })
    }

    const payload = {
      id: user.id,
      username: user.username,
    }
    const accessToken = req.jwt.sign(payload, {
      expiresIn: '30 days',
    })
    res.setCookie('access_token', accessToken, {
      path: '/',
      httpOnly: true,
      secure: true,
    })

    return res.code(200).send({ accessToken })
  } catch (error) {
    console.error(error)
  }
}
