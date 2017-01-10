import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class BreweryProvider {

  data: Object = null;
  dummyData: any = {
    id: 1,
    name: 'Wicked Weed Brewing',
    imgs: [
      'assets/img/wicked_weed.jpg',
      'assets/img/burial.jpg',
      'assets/img/highland.jpg'
    ],
    description: 'Hip brewer with a tasting room & a restaurant serving high-end, locally-sourced New American fare',
    address: '91 Biltmore Ave, Asheville, NC 28801',
    url: 'http://wickedweedbrewing.com',
    tel: '(828) 575-9599',
    breweryHours: {
      'Sunday': 'Closed',
      'Monday': '2:00pm - 9:00pm',
      'Tuesday': '2:00pm - 9:00pm',
      'Wednesday': '2:00pm - 9:00pm',
      'Thursday': '11:00am - 12:00am',
      'Friday': '11:00am - 12:00am',
      'Saturday': '11:00am - 12.00am'
    },
    amenities: [
      'Bar', 'Patio', 'Kids welcome', 'Arcade', 'Outdoor seating'
    ],
    numRatings: 130,
    ratings: [
      { param: 'Beer Quality', value: 4.5 },
      { param: 'Atmosphere', value: 4.8 },
      { param: 'Location', value: 5 }
    ]
  };
  endpoint: string = 'http://dev.beerncapp.com:3000/api/v1/breweries/';
  constructor(public http: Http) {}

  public loadBrewery(id){
    return new Promise(resolve =>{
      this.http.get(this.endpoint + id)
      .map(res => res.json())
      .subscribe(data => {
        //this.data = data;
        this.data = this.dummyData;
        resolve(this.data);
      })
    });
  }

}
