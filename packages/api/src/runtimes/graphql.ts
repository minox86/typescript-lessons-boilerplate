import { graphql, serve } from '@mondrian-framework/graphql-yoga'
import { FastifyInstance } from 'fastify'
import { CounterModule } from '../modules/counter/module'

export const serveGraphQL = (server: FastifyInstance, module: CounterModule) => {
  const graphqlAPI = graphql.build({
    module,
    functions: {
      getValue: { type: 'query', name: 'value' },
      increase: { type: 'mutation' },
    },
    options: { introspection: true },
  })

  serve({
    server,
    api: graphqlAPI,
    async context() {
      return {}
    },
  })
}
