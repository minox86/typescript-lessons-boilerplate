import { rest, serve } from '@mondrian-framework/rest-fastify'
import counterModule from '../modules/counter'
import { FastifyInstance } from 'fastify'

const restAPI = rest.build({
  module: counterModule,
  version: 1,
  functions: {
    getValue: { method: 'get', path: '/value' },
    increase: { method: 'post', path: '/inc' },
  },
  options: { introspection: { endpoint: 'http://localhost:4100' } },
})

export const serveRest = (server: FastifyInstance) => {
  serve({
    server,
    api: restAPI,
    async context() {
      return {}
    },
  })
}
