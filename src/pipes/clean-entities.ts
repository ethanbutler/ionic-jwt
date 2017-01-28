import { Injectable, Pipe } from '@angular/core';

@Pipe({
  name: 'cleanentities'
})
@Injectable()
export class CleanEntities {
  transform(value, args) {
    value = value.replace('&#038;', '&');
    return value;
  }
}
