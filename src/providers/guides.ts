import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class GuidesProvider {

  data: Array<any> = null;
  endpoint: string = 'http://dev.beerncapp.com:3000/api/v1/guides/';
  constructor(public http: Http) {
    //dummy data
    this.data = [
        { id: 4, title: 'Asheville Brewery Guide', img: 'assets/img/asheville.jpg' },
        { id: 5, title: 'Raleigh Brewery Guide', img: 'assets/img/raleigh.jpg' },
        { id: 6, title: 'Greensboro Brewery Guide', img: 'assets/img/greensboro.jpg' }
    ];
  }

  getGuides(args: any = null){
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
