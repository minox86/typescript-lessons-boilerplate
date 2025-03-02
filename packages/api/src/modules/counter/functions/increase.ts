import { model, result } from '@mondrian-framework/model'
import { functions } from '@mondrian-framework/module'
import { datasourceProvider } from '../data-source'

export default functions
  .define({
    input: model.object({ amount: model.integer({ minimum: 0, maximum: 10 }) }),
    output: model.object({ value: model.integer() })
  })
  .use({
    providers: {
      datasource: datasourceProvider,
    },
  })
  .implement({
    async body({ datasource, input }) {
      datasource.inc(input.amount)
      return result.ok({ value: datasource.getValue() })
    },
  })
