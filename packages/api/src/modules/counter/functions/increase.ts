import { model } from '@mondrian-framework/model'
import { functions } from '@mondrian-framework/module'
import { dataSource } from '../data-source'

export default functions.build({
  input: model.object({ amount: model.integer({ minimum: 0, maximum: 10 }) }),
  output: model.boolean(),
  async body({ input: { amount } }) {
    dataSource.value += amount
    return true
  },
})
