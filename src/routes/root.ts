import { FastifyPluginAsync } from 'fastify'

const root: FastifyPluginAsync = async (fastify): Promise<void> => {
  fastify.get('/asdsad', async function(add) {
    return { root: true }
  })
}

export default root
