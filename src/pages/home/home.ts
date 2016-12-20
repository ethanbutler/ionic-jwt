import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Geolocation } from 'ionic-native';
import * as Geodist from 'geodist';

//pages
import Guides from '../guides/guides';
import Nearby from '../nearby/nearby';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class Home {

  currentPos: { lat: number, lon: number };
  nearbyBreweries: Array<any> = [
    {
      id: 1,
      name: 'Wicked Weed Brewing',
      coords: { lat: '34', long: '100' },
      img: 'https://dummyimage.com/600x400/000/fff'
    },
    {
      id: 2,
      name: 'Burial Beer Co.',
      coords: { lat: '48', long: '102' },
      img: 'https://dummyimage.com/600x400/000/fff'
    },
    {
      id: 3,
      name: 'Highland Brewing Company',
      coords: { lat: '29', long: '103' },
      img: 'https://dummyimage.com/600x400/000/fff'
    }
  ];
  guides: Array<any> = [
    { id: 4, name: 'Asheville Brewery Guide', img: 'https://dummyimage.com/600x400/000/fff' },
    { id: 5, name: 'Raleigh Brewery Guide', img: 'https://dummyimage.com/600x400/000/fff' },
    { id: 6, name: 'Greensboro Brewery Guide', img: 'https://dummyimage.com/600x400/000/fff' }
  ];

  constructor(public navCtrl: NavController ) {
    Geolocation.getCurrentPosition()
      .then(pos => {
        this.currentPos = { lat: pos.coords.latitude, lon: pos.coords.longitude }
      }).catch(err => {
        console.log(err)
      });
  }

  getDistanceFromCurrent(coords){
    return Geodist(coords, this.currentPos, {exact: true}).toFixed(1);
  }

  goToNearby($event){
    $event.preventDefault();
    this.navCtrl.push(Nearby);
  }

  goToGuides($event){
    $event.preventDefault();
    this.navCtrl.push(Guides);
  }

}
