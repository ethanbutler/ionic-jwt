import { Component, ViewChild, ViewChildren, QueryList, ElementRef } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

//vendor
import * as Dateformat from 'dateformat';
import * as GoogleMaps from 'google-maps';

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
      { param: 'Location', value: 5 }
    ]
  };
  data: any = null;
  @ViewChild('map') mapElement: ElementRef;
  @ViewChildren('ratings') ratingVals: QueryList<any>;
  map: any;
  maps: any = GoogleMaps;
  constructor(public navCtrl: NavController, public navParams: NavParams ){
    this.data = navParams.get('data');
  }

  getTodaysHours(){
    let today = Dateformat('ddd');
    return this.dummyData.hours[today];
  }

  initMap(){
    this.maps.KEY = 'AIzaSyBiiqwF_VIiazs2ALkb39L7Mdjf8Xhc0xE';
    this.maps.load(google => {
      let lat = parseFloat(this.data.latitude);
      let lon = parseFloat(this.data.longitude);
      let latLng = new google.maps.LatLng(lat, lon);
      let mapOptions =  {
        center: latLng,
        zoom: 15,
        mapTypeId: google.maps.MapTypeId.ROADMAP,
        disableDefaultUI: true,
        scrollwheel: false
      };
      this.map = new google.maps.Map(this.mapElement.nativeElement, mapOptions);

      let marker = new google.maps.Marker({
        map: this.map,
        position: this.map.getCenter()
      });

      let info = new google.maps.InfoWindow({
        position: this.map.getCenter(),
        content: `<h4>${this.data.name}</h4><p>${this.data.whyVisit}</p>`
      });
      info.open(this.map);
    })
  }

  ngAfterViewInit(){
    this.initMap();
    
    if(!this.ratingVals) return;
    this.ratingVals.forEach(ratingVal => {
      let element = ratingVal.nativeElement;
      let rating = element.dataset.rating.split('.');
      let wholeStars = parseInt(rating[0]);
      for(let i = 0; i < wholeStars+1; i++){
        let children = element.childNodes[i].childNodes;
        if( children.length ){
          children[0].style.width = '100%';
        }
      }
      if(rating[1]){
       let child = element.childNodes[wholeStars+1].childNodes[0];
       child.style.width = (rating[1] / 10) * 100 + '%';
      }
    });
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
      id: this.data.id,
      name: this.data.name
    })
  }

}
