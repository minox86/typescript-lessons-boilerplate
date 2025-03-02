import { graphql, serveWithFastify } from '@mondrian-framework/graphql-yoga'
import { FastifyInstance } from 'fastify'
import { CounterModule } from '../modules/counter/module'

export const serveGraphQL = (server: FastifyInstance, module: CounterModule) => {
  const graphqlAPI = graphql.build({
    module,
    functions: {
      getValue: { type: 'query', name: 'value' },
      increase: { type: 'mutation' },
    },
  })

  serveWithFastify({
    server,
    api: graphqlAPI,
    options: { introspection: true },
    context: async () => ({}),
  })
}
