import { FastifyReply, FastifyRequest } from 'fastify'

import {
  AuthRegisterBodySchema,
  authRegisterSchema,
} from '../../schemas/auth.schema'
import { prisma } from '../../utils/prisma'

export const register = async (
  req: FastifyRequest<{
    Body: AuthRegisterBodySchema
  }>,
  res: FastifyReply
) => {
  const bodySchema = authRegisterSchema
  const { username, password } = bodySchema.parse(req.body)

  try {
    if (
      await prisma.user.findUnique({
        where: {
          username,
        },
      })
    ) {
      return res.code(409).send({
        message: 'username already taken',
      })
    }

    const user = await prisma.user.create({
      data: {
        username,
        password,
      },
      select: {
        id: true,
        username: true,
      },
    })
    const payload = {
      id: user.id,
      username: user.username,
    }
    const accessToken = req.jwt.sign(payload, {
      expiresIn: '30 days',
    })
    // res.setCookie('bar', 'bar', {
    //   path: '/',
    //   signed: true
    // })
    res.setCookie('access_token', accessToken, {
      path: '/',
      httpOnly: true,
      secure: true,
    })

    return res.code(201).send({ user, accessToken })
  } catch (error) {
    console.error(error)
  }
}
