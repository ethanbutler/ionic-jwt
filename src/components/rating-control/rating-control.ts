import { Component } from '@angular/core';

/*
  Generated class for the RatingControl component.

  See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
  for more info on Angular 2 Components.
*/
@Component({
  selector: 'rating-control',
  templateUrl: 'rating-control.html'
})
export class RatingControlComponent {

  text: string;

  constructor() {
    console.log('Hello RatingControl Component');
    this.text = 'Hello World';
  }

}
