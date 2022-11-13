export class JsonValueConverter {
  toView(obj) {
    return JSON.stringify(obj)
  }

  fromView(jsonString: string) {
    return JSON.parse(jsonString)
  }
}
