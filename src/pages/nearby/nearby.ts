import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-nearby',
  templateUrl: 'nearby.html'
})
export class Nearby {

  //TODO: this should be a GET request for all cities
  public cities: Array<any> = [
    'Asheville', 'Greensboro', 'Raleigh'
  ];
  //TODO: this should be based on geolocation, if possible
  public selectedCity: string = 'Greensboro';
  constructor(public navCtrl: NavController, public navParams: NavParams) {}

  ionViewDidLoad() {
    console.log(this.cities);
  }

}
