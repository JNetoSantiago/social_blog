import { FastifyPluginAsync } from 'fastify'

const home: FastifyPluginAsync = async (fastify, opts): Promise<void> => {
  fastify.get('/home', async function (request, reply) {
    return { home: true }
  })
}

export default home