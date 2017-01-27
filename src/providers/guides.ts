import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class GuidesProvider {

  data: Array<any> = null;
  endpoint: string = 'http://dev.beerncapp.com:3000/api/v1/guides/';
  constructor(public http: Http) {}

  constructArgsList(args: any = null){
    let argList = '?';
    for( let arg in args ){
      if(args.hasOwnProperty(arg)){
        argList += arg + '=' + args[arg] + '&'
      }
    }
    return argList;
  }

  getGuides(args: any = null){
    let argList = this.constructArgsList(args);
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
