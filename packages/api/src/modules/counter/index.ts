import { module } from '@mondrian-framework/module'
import functions from './functions'

export default module.build({
  name: 'Counter',
  version: '0.1.0',
  functions,
  async context() {
    return {}
  },
})
