import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

//pages
import { Rating } from '../rating/rating';
import { Hours }  from '../hours/hours';

@Component({
  selector: 'page-brewery',
  templateUrl: 'brewery.html'
})
export class Brewery {

  data: any = {
    id: 1,
    name: 'Wicked Weed Brewing',
    imgs: [
      'assets/img/wicked_weed.jpg',
      'assets/img/burial.jpg',
      'assets/img/highland.jpg'
    ],
    description: 'Hip brewer with a tasting room & a restaurant serving high-end, locally-sourced New American fare',
    address: '91 Biltmore Ave, Asheville, NC 28801',
    url: 'wickedweedbrewing.com',
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
  constructor(public navCtrl: NavController, public navParams: NavParams) {}

  getTodaysHours(){
    return 'Today\'s Hours';
  }

  openRating(){
    this.navCtrl.push()
  }

}
