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
