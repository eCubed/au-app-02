import { BackfillEntry } from './../models/backfillentry';
import { bindable, bindingMode} from 'aurelia-framework'

export class EditBackfillEntry {

  @bindable({ bindingMode: bindingMode.twoWay }) backfillEntry: BackfillEntry

  constructor() {
    //
  }

  backfillEntryChanged() {
    console.log(`backfillEntryChanged handler`)
  }
}
