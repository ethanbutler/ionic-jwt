import { Injectable } from '@angular/core';
import { Geolocation } from 'ionic-native';
import 'rxjs/add/operator/map';

//vendor
import * as Geodist from 'geodist';

@Injectable()
export class Distance {

  currentPos: { lat: number, lon: number } = null;
  constructor() {
    this.getCoords();
  }

  getCoords(type: string =null){
    if(this.currentPos){
      if( !type ) return this.currentPos;
      return this.currentPos[type] || 0;
    }
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

  getDistance(lat, lon){
    return Geodist({lat: lat, lon: lon}, this.currentPos, {exact: true}).toFixed(1);
  }

}
