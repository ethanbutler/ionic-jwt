import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class BreweriesProvider {

  data: Array<any> = null;
  endpoint: string = 'http://dev.beerncapp.com:3000/api/v1/breweries/';
  constructor(public http: Http) {}

  public getBreweries(args: any = null){
    if( this.data ){
      return Promise.resolve(this.data);
    }
    let argList = '?';
    for( let arg in args ){
      if(args.hasOwnProperty(arg)){
        argList += arg + '=' + args[arg] + '&'
      }
    }
    return new Promise(resolve => {
      this.http.get(this.endpoint + argList)
        .map(res => res.json() )
        .subscribe(data => {
          this.data = data;
          resolve(this.data);
        });
    });
  }

}
