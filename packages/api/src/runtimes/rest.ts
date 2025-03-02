import { rest, serve } from '@mondrian-framework/rest-fastify'
import { FastifyInstance } from 'fastify'
import { CounterModule } from '../modules/counter/module'

export const serveRest = (server: FastifyInstance, module: CounterModule) => {
  const restAPI = rest.build({
    module,
    version: 1,
    functions: {
      getValue: { method: 'get', path: '/value' },
      increase: { method: 'post', path: '/inc' },
    },
    options: { endpoints: ['http://localhost:4100']}
  })

  serve({
    server,
    api: restAPI,
    options: { introspection: { ui: 'swagger', path: '/openapi' } },
    async context() {
      return {}
    },
  })
}
