import { model } from '@mondrian-framework/model'
import { functions } from '@mondrian-framework/module'
import { DataSource } from '../data-source'

export default functions.withContext<{ datasource: DataSource }>().build({
  input: model.never(),
  output: model.object({ value: model.integer({ minimum: 0 }) }),
  async body({ context: { datasource } }) {
    return { value: datasource.getValue() }
  },
})
