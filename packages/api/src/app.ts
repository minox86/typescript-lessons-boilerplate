import { model } from '@mondrian-framework/model'
import { functions, module } from '@mondrian-framework/module'
import { graphql, serve as graphqlServe } from '@mondrian-framework/graphql-yoga'
import { rest, serve as restServe } from '@mondrian-framework/rest-fastify'
import { fastify } from 'fastify'
import cors from '@fastify/cors'

let value = 0
const increase = functions.build({
  input: model.object({ amount: model.integer({ minimum: 0, maximum: 10 }) }),
  output: model.boolean(),
  async body({ input: { amount } }) {
    value += amount
    return true
  },
})

const getValue = functions.build({
  input: model.never(),
  output: model.object({ value: model.integer({ minimum: 0 }) }),
  async body() {
    return { value }
  },
})

const myModule = module.build({
  name: 'Simple App',
  version: '0.1.0',
  functions: { increase, getValue },
  async context() {
    return {}
  },
})

const restAPI = rest.build({
  module: myModule,
  version: 1,
  functions: {
    getValue: { method: 'get', path: '/value' },
    increase: { method: 'post', path: '/inc' },
  },
  options: { introspection: { endpoint: 'http://localhost:4100' } },
})

const graphqlAPI = graphql.build({
  module: myModule,
  functions: {
    getValue: { type: 'query', name: 'value' },
    increase: { type: 'mutation' },
  },
  options: { introspection: true },
})

const server = fastify()

restServe({
  server,
  api: restAPI,
  async context() {
    return {}
  },
})

graphqlServe({
  server,
  api: graphqlAPI,
  async context() {
    return {}
  },
})

server
  .register(cors, { origin: '*' })
  .listen({ port: 4100 })
  .then((address) => {
    console.log(`Server started at ${address}/openapi`)
    console.log(`Server started at ${address}/graphql`)
  })
  .catch(console.error)
