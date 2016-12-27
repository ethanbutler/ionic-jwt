import { Component, Input } from '@angular/core';
import { Geolocation } from 'ionic-native';
import { NavController } from 'ionic-angular';

//pages
import { Brewery } from '../../pages/brewery/brewery';
import { Guides  } from '../../pages/guides/guides';
import { Nearby }  from '../../pages/nearby/nearby';

//vendor
import * as Geodist from 'geodist';

@Component({
  selector: 'nearby',
  templateUrl: 'nearby.html'
})
export class NearbyComponent {
  @Input() public showLink: boolean = false;
  currentPos: { lat: number, lon: number };
  nearbyBreweries: Array<any> = [
    {
      id: 1,
      name: 'Wicked Weed Brewing',
      coords: { lat: '34', long: '100' },
      img: 'assets/img/wicked_weed.jpg'
    },
    {
      id: 2,
      name: 'Burial Beer Co.',
      coords: { lat: '48', long: '102' },
      img: 'assets/img/burial.jpg'
    },
    {
      id: 3,
      name: 'Highland Brewing Company',
      coords: { lat: '29', long: '103' },
      img: 'assets/img/highland.jpg'
    }
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

  goToBrewery(id){
    this.navCtrl.push(Brewery, { id: id });
  }

  goToNearby($event){
    $event.preventDefault();
    this.navCtrl.push(Nearby);
  }

}
