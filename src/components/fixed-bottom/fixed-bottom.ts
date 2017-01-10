import { Component, Input } from '@angular/core';

@Component({
  selector: 'fixed-bottom',
  templateUrl: 'fixed-bottom.html'
})
export class FixedBottom {
  @Input() text: string;
  constructor(){}
}
