import { module } from '@mondrian-framework/module'
import functions from './functions'

export const counterModule = module.build({
  name: 'Counter',
  functions,
})
export type CounterModule = typeof counterModule
