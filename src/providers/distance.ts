import { Injectable } from '@angular/core';
import { Geolocation } from 'ionic-native';
import 'rxjs/add/operator/map';

//vendor
import * as Geodist from 'geodist';

@Injectable()
export class Distance {

  //lng/lon confusion due to Geodist :(
  currentPos: { lat: number, lon: number } = null;
  constructor() {
    this.getCoords();
  }

  getCoords(type: string = null){
    return new Promise(resolve=>{
      Geolocation.getCurrentPosition()
        .then(pos => {
          this.currentPos = { lat: pos.coords.latitude, lon: pos.coords.longitude }
          if(!type) resolve(this.currentPos);
          resolve(this.currentPos[type]);
        }).catch(err => {
          console.log(err)
        });
    })
  }

  getDistance(lat, lng){
    return Geodist({lat: lat, lon: lng}, this.currentPos, {exact: true}).toFixed(1);
  }

}
