import { sdk } from '@mondrian-framework/module'
import counterModule from '../src/modules/counter'

const client = sdk.withMetadata<{ ip?: string; authorization?: string }>().build({
  module: counterModule,
  context: async ({ metadata }) => {
    return { ip: metadata?.ip ?? 'local', authorization: metadata?.authorization }
  },
})

test('increase function test', async () => {
  expect((await client.functions.getValue()).value).toBe(0)
  await client.functions.increase({ amount: 1 })
  expect((await client.functions.getValue()).value).toBe(1)
})
