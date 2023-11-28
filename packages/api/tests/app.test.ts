import { sdk } from '@mondrian-framework/module'
import { buildCounterModule } from '../src/modules/counter/module'
import { DataSource } from '../src/modules/counter/data-source'

const datasource = new DataSource()
const testModule = buildCounterModule(datasource)

const client = sdk.build({
  module: testModule,
  context: async () => {},
})

test('increase function test', async () => {
  expect((await client.functions.getValue()).value).toBe(0)
  await client.functions.increase({ amount: 1 })
  expect((await client.functions.getValue()).value).toBe(1)
})
