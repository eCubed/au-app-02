import { bindable } from 'aurelia-framework';
import { Person } from 'models/person';
export class PersonForm {
  @bindable person: Person
  @bindable saveRequest: (person: Person) => void

  constructor() {
    //
  }

  onSaveClick() {
    
    this.saveRequest.apply(this.person);
  }

}
