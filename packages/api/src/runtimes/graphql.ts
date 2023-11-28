import { graphql, serve } from '@mondrian-framework/graphql-yoga'
import { FastifyInstance } from 'fastify'
import counterModule from '../modules/counter'

const graphqlAPI = graphql.build({
  module: counterModule,
  functions: {
    getValue: { type: 'query', name: 'value' },
    increase: { type: 'mutation' },
  },
  options: { introspection: true },
})

export const serveGraphQL = (server: FastifyInstance) => {
  serve({
    server,
    api: graphqlAPI,
    async context() {
      return {}
    },
  })
}
