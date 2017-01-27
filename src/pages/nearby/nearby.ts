import { Component } from '@angular/core';
import { ModalController, NavController, NavParams } from 'ionic-angular';

//pages
import { City } from '../city/city';

//providers
import { Distance } from '../../providers/distance';
import { GooglePlaces } from '../../providers/google-places';

@Component({
  selector: 'page-nearby',
  templateUrl: 'nearby.html'
})
export class Nearby {

  public selectedCity: any;
  public coords: any;
  constructor(
    public modalCtlr: ModalController,
    public navCtrl: NavController,
    public navParams: NavParams,
    private distance: Distance,
    private places: GooglePlaces) {}

  ionViewDidLoad(){
    this.distance.getCoords().then(coords => {
      console.log(coords);
      this.handleCoords(coords)
    })
  }

  handleCoords(coords){
    this.coords = coords;
    console.log(this.coords);
    this.places.getCityFromLatLng(coords)
    .then(city => {
      this.selectedCity = city;
    })
  }

  openCitySelector(){
    let modal = this.modalCtlr.create(City);
    modal.onDidDismiss(city => {
      this.selectedCity = city.name;
      this.coords = city.coords;
    });
    modal.present();
  }

}
