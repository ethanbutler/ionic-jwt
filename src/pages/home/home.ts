import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Geolocation } from 'ionic-native';

//pages
import { Guides  } from '../guides/guides';
import { Nearby }  from '../nearby/nearby';

//providers
import { Distance } from '../../providers/distance';

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

  constructor(public navCtrl: NavController, public distance: Distance) {
    distance.getCoords()
      .then(data => {
        this.currentPos = data;
      });
  }

  goToGuides(){
    this.navCtrl.push(Guides);
  }

  goToNearby(){
    this.navCtrl.push(Nearby);
  }

}
