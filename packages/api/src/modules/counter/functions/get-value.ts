import { model } from '@mondrian-framework/model'
import { functions } from '@mondrian-framework/module'
import { dataSource } from '../data-source'

export default functions.build({
  input: model.never(),
  output: model.object({ value: model.integer({ minimum: 0 }) }),
  async body() {
    return { value: dataSource.value }
  },
})
