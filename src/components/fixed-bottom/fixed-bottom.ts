import { Component, Input } from '@angular/core';

/*
  Generated class for the FixedBottom component.

  See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
  for more info on Angular 2 Components.
*/
@Component({
  selector: 'fixed-bottom',
  templateUrl: 'fixed-bottom.html'
})
export class FixedBottom {
  @Input() text: string;
  constructor(){}
}
