import { fastify } from 'fastify'
import cors from '@fastify/cors'
import { serveRest } from './runtimes/rest'
import { serveGraphQL } from './runtimes/graphql'
import { buildCounterModule } from './modules/counter/module'
import { DataSource } from './modules/counter/data-source'

const server = fastify()

const datasource = new DataSource()
const module = buildCounterModule(datasource)

serveRest(server, module)
serveGraphQL(server, module)

server
  .register(cors, { origin: '*' })
  .listen({ port: 4100 })
  .then((address) => {
    console.log(`Server started at ${address}/openapi`)
    console.log(`Server started at ${address}/graphql`)
  })
  .catch(console.error)
