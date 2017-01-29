import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

//pages
import { Guides  } from '../guides/guides';
import { Nearby }  from '../nearby/nearby';

//providers
import { Distance } from '../../providers/distance';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class Home {

  currentPos: Object = null;

  constructor(public navCtrl: NavController, public distance: Distance) {
    distance.getCoords()
    .then(data => {
      this.currentPos = data;
    });
  }

  goToGuides(){
    this.navCtrl.push(Guides);
  }

  goToNearby(){
    this.navCtrl.push(Nearby);
  }

}
