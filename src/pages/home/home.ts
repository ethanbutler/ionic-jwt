import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Geolocation } from 'ionic-native';

//pages
import { Guides  } from '../guides/guides';
import { Nearby }  from '../nearby/nearby';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class Home {

  guides: Array<any> = [
    { id: 4, name: 'Asheville Brewery Guide', img: 'assets/img/asheville.jpg' },
    { id: 5, name: 'Raleigh Brewery Guide', img: 'assets/img/raleigh.jpg' },
    { id: 6, name: 'Greensboro Brewery Guide', img: 'assets/img/greensboro.jpg' }
  ];

  currentPos: Object = null;

  constructor(public navCtrl: NavController ) {
    Geolocation.getCurrentPosition()
      .then(pos => {
        this.currentPos = { lat: pos.coords.latitude, lon: pos.coords.longitude }
      }).catch(err => {
        console.log(err)
      });
  }

  getCoords(type){
    return this.currentPos[type] || 0;
  }

  goToGuides(){
    this.navCtrl.push(Guides);
  }

  goToNearby(){
    this.navCtrl.push(Nearby);
  }

}
