import { Injectable } from '@angular/core';
import { Geolocation } from 'ionic-native';
import 'rxjs/add/operator/map';

//vendor
import * as Geodist from 'geodist';

@Injectable()
export class Distance {

  currentPos: { lat: number, lng: number } = null;
  constructor() {
    this.getCoords();
  }

  getCoords(type: string = null){
    return new Promise(resolve=>{
      Geolocation.getCurrentPosition()
        .then(pos => {
          this.currentPos = { lat: pos.coords.latitude, lng: pos.coords.longitude }
          if(!type) resolve(this.currentPos);
          resolve(this.currentPos[type]);
        }).catch(err => {
          console.log(err)
        });
    })
  }

  getDistance(lat, lng){
    //lng/lon confusion due to Geodist :(
    let pos = this.currentPos ? {
      lat: this.currentPos.lat,
      lon: this.currentPos.lng
    } : null;
    return Geodist({lat: lat, lon: lng}, pos, {exact: true}).toFixed(1);
  }

}
