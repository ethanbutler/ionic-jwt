import { Injectable } from '@angular/core';
import { Http, JsonpModule } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class GooglePlaces {

  private base: string = 'https://maps.googleapis.com/maps/api/';
  private key: string = 'AIzaSyBiiqwF_VIiazs2ALkb39L7Mdjf8Xhc0xE';
  constructor(public http: Http) {}

  getCityFromLatLng(coords: any){
    let endpoint = `${this.base}geocode/json?key=${this.key}&latlng=${coords.lat},${coords.lon}`;
    return new Promise(resolve => {
      this.http.get(endpoint)
      .map(res => res.json())
      .subscribe(data => {
        let addressComponents = data.results[0].address_components;
        for(let addressComponent of addressComponents ){
          let type = addressComponent.types[0];
          let name = addressComponent.long_name;
          if(type === 'locality'){
            resolve(name);
          }
        }
      });
    });
  }

  getCitiesFromQuery(q: string){
    //let endpoint = `${this.base}place/autocomplete/json?key=${this.key}&input=${q}&type=(cities)`;
    let endpoint = `http://localhost:3000/api/v1/places?key=${this.key}&q=${q}&type=(cities)`;
    return new Promise(resolve => {
      this.http.get(endpoint)
      .map(res => res.json())
      .subscribe(data => {
        resolve(data);
      })
    });
  }

}
