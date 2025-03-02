import { model, result } from '@mondrian-framework/model'
import { functions } from '@mondrian-framework/module'
import { datasourceProvider } from '../data-source'

export default functions
  .define({
    output: model.object({ value: model.integer({ minimum: 0 }) }),
  })
  .use({
    providers: {
      datasource: datasourceProvider,
    },
  })
  .implement({
    async body({ datasource }) {
      return result.ok({ value: datasource.getValue() })
    },
  })
