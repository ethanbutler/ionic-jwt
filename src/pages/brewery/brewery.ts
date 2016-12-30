import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

//vendor
import * as Dateformat from 'dateformat';

//pages
import { Rating } from '../rating/rating';
import { Hours }  from '../hours/hours';

@Component({
  selector: 'page-brewery',
  templateUrl: 'brewery.html'
})
export class Brewery {

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
    hours: {
      'Sun': 'Closed',
      'Mon': '2:00pm - 9:00pm',
      'Tue': '2:00pm - 9:00pm',
      'Wed': '2:00pm - 9:00pm',
      'Thu': '11:00am - 12:00am',
      'Fri': '11:00am - 12:00am',
      'Sat': '11:00am - 12.00am'
    },
    amenities: [
      'Bar', 'Patio', 'Kids welcome', 'Arcade', 'Outdoor seating'
    ],
    numRatings: 130,
    ratings: [
      { param: 'Beer Quality', value: 4.5 },
      { param: 'Atmosphere', value: 4.8 },
      { param: 'Location', value: 4.2 }
    ]
  };
  data: any = null;
  constructor(public navCtrl: NavController, public navParams: NavParams){
    this.data = navParams.get('data');
    console.log(this.data);
  }

  getTodaysHours(){
    let today = Dateformat('ddd');
    return this.dummyData.hours[today];
  }

  openHours(){
    this.navCtrl.push(Hours, {
      name: this.dummyData.name,
      hours: this.dummyData.hours
    })
  }

  openWebsite(url){
    window.open(url, '_system');
  }

  openRating(){
    this.navCtrl.push(Rating, {
      id: this.dummyData.id,
      name: this.dummyData.name
    })
  }

}
