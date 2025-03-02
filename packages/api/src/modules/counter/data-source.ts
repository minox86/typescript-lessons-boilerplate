import { result } from '@mondrian-framework/model'
import { provider } from '@mondrian-framework/module'

// a fake in-memory data source to demonstration purposes only
export class DataSource {
  private value = 0
  public getValue() {
    return this.value
  }
  public inc(value: number) {
    this.value += value
  }
}

const datasourceSingleton = new DataSource()

export const datasourceProvider = provider.build({
  body: async () => {
    return result.ok(datasourceSingleton)
  },
})
