import { module } from '@mondrian-framework/module'
import increase from './functions/increase'
import getValue from './functions/get-value'

export default module.build({
  name: 'Simple App',
  version: '0.1.0',
  functions: { increase, getValue },
  async context() {
    return {}
  },
})
