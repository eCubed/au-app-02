import { DateTime } from 'luxon'

export class DateToStringValueConverter {
  toView(date: DateTime, ianaZone: string) {
    return date.setZone(ianaZone).toFormat('MM/d/yyyy, h:mm:ss a')
  }

  fromView(dateString: string, ianaZone: string) {
    console.log(`From view: ${dateString}, ${ianaZone}`)
    return DateTime.fromFormat(dateString, 'MM/d/yyyy, h:mm:ss a', { zone: ianaZone })
  }

  
} 
