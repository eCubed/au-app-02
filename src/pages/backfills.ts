
import { BackfillEntry } from './../models/backfillentry';
import { observable, bindable } from 'aurelia-framework'
import { DateTime } from 'luxon';

export class Backfills {
  message: string;
  timeZones: string[] = [
    'America/New_York',
    'America/Chicago',
    'America/Denver',
    'America/Los_Angeles'
  ]

  @observable currentTimeZone = 'America/New_York'
  @bindable backfillEntries: BackfillEntry[] = []
  @observable currentWorkCenterId: number

  constructor() {
    this.message = 'Home Page';
  }

  addBackfillEntry() {
    const bfe: BackfillEntry = { 
      start: DateTime.now().setZone(this.currentTimeZone),
      end: DateTime.now().setZone(this.currentTimeZone),
      workCenterId: this.currentWorkCenterId
    }

    this.backfillEntries.push(bfe);
  }

  currentTimeZoneChanged() {
    if (this.backfillEntries != null) {
      this.backfillEntries.forEach(bfe => {
        bfe.start = bfe.start.setZone(this.currentTimeZone)
        bfe.end = bfe.start.setZone(this.currentTimeZone)
      })
    }
  }

  currentWorkCenterIdChanged() {
    if (this.backfillEntries != null) {
      this.backfillEntries.forEach(bfe => {
        bfe.workCenterId = this.currentWorkCenterId
      })
    }
  }

  backfillEntriesChanged() {
    console.log(`BackfillEntries changed`)
  }

  showBackfillEntries() {
    console.log(JSON.stringify(this.backfillEntries))
  } 
}
