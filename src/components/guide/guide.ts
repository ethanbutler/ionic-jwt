import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Guide } from '../../pages/guide/guide';

@Component({
  selector: 'guide',
  templateUrl: 'guide.html'
})
export class GuideComponent {

  id: number = 1;
  title: string = 'Asheville, NC Breweries'
  img: string = 'assets/img/asheville.jpg'

  constructor(public navCtrl: NavController ) {}

  goToGuide(){
    this.navCtrl.push(Guide, {
      id: this.id
    });
  }

}
