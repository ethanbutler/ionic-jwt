import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

//pages
import { Brewery } from '../brewery/brewery';
import { Guides  } from '../guides/guides';
import { Nearby }  from '../nearby/nearby';

//components
import { GopcAd } from '../../components/gopc-ad/gopc-ad';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class Home {

  guides: Array<any> = [
    { id: 4, name: 'Asheville Brewery Guide', img: 'assets/img/asheville.jpg' },
    { id: 5, name: 'Raleigh Brewery Guide', img: 'assets/img/raleigh.jpg' },
    { id: 6, name: 'Greensboro Brewery Guide', img: 'assets/img/greensboro.jpg' }
  ];

  constructor(public navCtrl: NavController ) {

  }


  goToGuides($event){
    $event.preventDefault();
    this.navCtrl.push(Guides);
  }

}
