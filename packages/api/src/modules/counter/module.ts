import { module } from '@mondrian-framework/module'
import functions from './functions'
import { DataSource } from './data-source'

export type CounterModule = ReturnType<typeof buildCounterModule>
export function buildCounterModule(datasource: DataSource) {
  return module.build({
    name: 'Counter',
    version: '0.1.0',
    functions,
    async context() {
      return { datasource }
    },
  })
}
