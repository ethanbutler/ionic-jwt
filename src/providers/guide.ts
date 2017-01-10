import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class GuideProvider {

  data: any = null;
  endpoint: string = 'http://dev.beerncapp.com:3000/api/v1/guides/';
  constructor(public http: Http) {
    //dummy data
    this.data = {
      content: `
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris pharetra, lorem sed ullamcorper feugiat, dolor lacus condimentum neque, nec fermentum mauris elit quis odio.</p>
        <p>Integer eros ipsum, convallis vitae tortor a, porta bibendum orci. Aliquam erat volutpat. Maecenas massa lacus, interdum volutpat scelerisque id, imperdiet non ligula.<p>
        <p><span class="link" data-brewery-id="1">Wicked Weed</span> in interdum nisi in sapien mattis feugiat. Etiam dignissim sollicitudin ligula. </p>
      `
    }
  }

  getGuide(id: number){
    if( this.data ){
      return Promise.resolve(this.data);
    }
    return new Promise(resolve => {
      this.http.get(this.endpoint + id)
        .map(res => res.json() )
        .subscribe(data => {
          this.data = data;
          resolve(this.data);
        });
    });
  }

}
