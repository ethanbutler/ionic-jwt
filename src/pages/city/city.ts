import { Component } from '@angular/core';
import { ViewController } from 'ionic-angular';

//providers
import { GooglePlaces } from '../../providers/google-places';

@Component({
  selector: 'page-city',
  templateUrl: 'city.html'
})
export class City {

  public q: string;
  public cities: any;
  constructor(
    public places: GooglePlaces,
    public viewCtrl: ViewController
  ) {}

  handleChange(event){
    this.q = event;
    this.places.getCitiesFromQuery(this.q)
    .then(cities => {
      this.cities = cities;
    })
  }

  handleExit(city){
    this.viewCtrl.dismiss(city);
  }

}
