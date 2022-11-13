import { DateTime } from 'luxon';
export interface BackfillEntry {
  start: DateTime;
  end: DateTime;
  workCenterId: number;
}
