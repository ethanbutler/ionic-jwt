import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-nearby',
  templateUrl: 'nearby.html'
})
export class Nearby {

  public cities: Array<any> = [
    'Asheville', 'Greensboro', 'Raleigh'
  ];
  public selectedCity: string = 'Greensboro';
  constructor(public navCtrl: NavController, public navParams: NavParams) {}

  ionViewDidLoad() {
    console.log(this.cities);
  }

}
