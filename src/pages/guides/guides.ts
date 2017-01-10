import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

//pages
import { Guide } from '../guide/guide';

@Component({
  selector: 'page-guides',
  templateUrl: 'guides.html'
})
export class Guides {

  guides: Array<any> = [
      { id: 4, title: 'Asheville Brewery Guide', img: 'assets/img/asheville.jpg' },
      { id: 5, title: 'Raleigh Brewery Guide', img: 'assets/img/raleigh.jpg' },
      { id: 6, title: 'Greensboro Brewery Guide', img: 'assets/img/greensboro.jpg' }
  ];
  constructor(public navCtrl: NavController, public navParams: NavParams) {}

  goToGuide(guide){
    this.navCtrl.push(Guide, guide);
  }

}
