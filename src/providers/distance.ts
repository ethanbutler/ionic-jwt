import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Geolocation } from 'ionic-native';
import 'rxjs/add/operator/map';

//vendor
import * as Geodist from 'geodist';

@Injectable()
export class Distance {

  currentPos: { lat: number, lon: number };
  constructor() {
    Geolocation.getCurrentPosition()
      .then(pos => {
        this.currentPos = { lat: pos.coords.latitude, lon: pos.coords.longitude }
      }).catch(err => {
        console.log(err)
      });
  }

  getDistance(lat, lon){
    return Geodist({lat: lat, lon: lon}, this.currentPos, {exact: true}).toFixed(1);
  }

}
