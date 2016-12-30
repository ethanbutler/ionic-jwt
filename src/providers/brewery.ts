import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class BreweryProvider {

  data: Object = null;
  endpoint: string = 'http://dev.beerncapp.com:3000/api/v1/breweries/';
  constructor(public http: Http) {}

  public loadBrewery(id){
    return new Promise(resolve =>{
      this.http.get(this.endpoint + id)
      .map(res => res.json())
      .subscribe(data => {
        this.data = data;
        resolve(this.data);
      })
    });
  }

}
