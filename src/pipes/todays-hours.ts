import { Injectable, Pipe } from '@angular/core';
import * as DateFormat from 'dateformat';

@Pipe({
  name: 'todayshours'
})
@Injectable()
export class TodaysHours {
  transform(hours) {
    let today = DateFormat('dddd')
    return hours[today] || 'Closed';
  }
}
