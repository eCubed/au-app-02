import { bindable } from 'aurelia-framework';
import { Person } from 'models/person';


export class Home {
  person: Person
  @bindable widthPx = 500

  constructor() {
    this.person = { firstName: 'John', lastName: 'Smith', age: 31 }
  }

  onSaveRequest(person: Person) {
    console.log(`Person: ${ JSON.stringify(person)}`)
  }
}
