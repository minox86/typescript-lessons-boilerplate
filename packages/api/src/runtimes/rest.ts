import { rest, serve } from '@mondrian-framework/rest-fastify'
import { CounterModule } from '../modules/counter/module'
import { FastifyInstance } from 'fastify'

export const serveRest = (server: FastifyInstance, module: CounterModule) => {
  const restAPI = rest.build({
    module,
    version: 1,
    functions: {
      getValue: { method: 'get', path: '/value' },
      increase: { method: 'post', path: '/inc' },
    },
    options: { introspection: { endpoint: 'http://localhost:4100' } },
  })

  serve({
    server,
    api: restAPI,
    async context() {
      return {}
    },
  })
}
