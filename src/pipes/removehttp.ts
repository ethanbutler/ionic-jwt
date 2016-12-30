import { Injectable, Pipe } from '@angular/core';

@Pipe({
  name: 'removehttp'
})
@Injectable()
export class Removehttp {
  transform(value, args) {
    value = value + ''; // make sure it's a string
    return value.replace('http://','').replace('https://','').replace('www.','');
  }
}
