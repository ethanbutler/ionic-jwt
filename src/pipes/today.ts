import { Injectable, Pipe } from '@angular/core';
import * as DateFormat from 'dateformat';

@Pipe({
  name: 'today'
})
@Injectable()
export class Today {
  transform(hours) {
    let today = DateFormat('dddd')
    return today;
  }
}
