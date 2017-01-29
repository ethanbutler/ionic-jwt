import { Component } from '@angular/core';
import { ModalController, NavController, NavParams } from 'ionic-angular';

//pages
import { City } from '../city/city';

//providers
import { Distance }       from '../../providers/distance';
import { GooglePlaces }   from '../../providers/google-places';
import { GuidesProvider } from '../../providers/guides';

@Component({
  selector: 'page-nearby',
  templateUrl: 'nearby.html'
})
export class Nearby {

  public selectedCity: any = null;
  public currentPos:   any = null;
  public guides:       any = null;
  constructor(
    public modalCtlr: ModalController,
    public navCtrl: NavController,
    public navParams: NavParams,
    private distance: Distance,
    private guidesProvider: GuidesProvider,
    private places: GooglePlaces) {}

  ionViewDidLoad(){
    this.distance.getCoords().then(coords => {
      this.handleCoords(coords)
    })
  }

  handleCoords(coords: any){
    this.currentPos = coords;
    this.places.getCityFromLatLng(coords)
    .then(city => {
      this.selectedCity = city;
      this.getRelevantGuides(this.selectedCity);
    })
  }

  getRelevantGuides(q: string = null){
    this.guidesProvider.getGuides({
      q: q
    }).then(results => {
      this.guides = results['guides'];
    });
  }

  openCitySelector(){
    let modal = this.modalCtlr.create(City);
    modal.onDidDismiss(city => {
      this.selectedCity = city.name;
      this.currentPos   = city.coords;
    });
    modal.present();
  }

}
