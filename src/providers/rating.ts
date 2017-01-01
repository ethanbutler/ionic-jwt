import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class RatingProvider {

  endpoint: string = '';
  headers: Headers = new Headers({ 'Content-Type': 'application/json' });
  options: RequestOptions = new RequestOptions({ headers: this.headers });
  constructor(public http: Http) {}

  submit(data){
    console.log(data);
    this.http.post(this.endpoint, JSON.stringify(data), this.options )
      .map(res => res.json())
  }

}
