import { client as clientBuilder } from '@mondrian-framework/module'
import { counterModule } from '../src/modules/counter/module'

const client = clientBuilder.build({
  module: counterModule,
  context: async () => ({}),
})

test('increase function test', async () => {
  expect((await client.functions.getValue()).value).toBe(0)
  await client.functions.increase({ amount: 1 })
  expect((await client.functions.getValue()).value).toBe(1)
})
