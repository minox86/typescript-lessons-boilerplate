import { model } from '@mondrian-framework/model'
import { functions } from '@mondrian-framework/module'
import { DataSource } from '../data-source'

export default functions.withContext<{ datasource: DataSource }>().build({
  input: model.object({ amount: model.integer({ minimum: 0, maximum: 10 }) }),
  output: model.boolean(),
  async body({ input: { amount }, context: { datasource } }) {
    datasource.inc(amount)
    return true
  },
})
