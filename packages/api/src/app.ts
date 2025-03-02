import { fastify } from 'fastify'
import cors from '@fastify/cors'
import { serveRest } from './runtimes/rest'
import { serveGraphQL } from './runtimes/graphql'
import { counterModule } from './modules/counter/module'

const server = fastify()

serveRest(server, counterModule)
serveGraphQL(server, counterModule)

server
  .register(cors, { origin: '*' })
  .listen({ port: 4100 })
  .then((address) => {
    console.log(`Server started at ${address}/openapi`)
    console.log(`Server started at ${address}/graphql`)
  })
  .catch(console.error)
