import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

//providers
import { Distance } from '../../providers/distance';
import { User } from '../../providers/user';

@Component({
  selector: 'page-breweries',
  templateUrl: 'breweries.html'
})
export class Breweries {

  currentPos: Object = null;
  userId: any = null;
  show: string = 'nearby';
  constructor(public navCtrl: NavController, public navParams: NavParams, private distance: Distance, private user: User) {
    distance.getCoords()
      .then(data => {
        this.currentPos = data;
      });
    user.getUserInformation('id').then(data=>console.log(data))
    user.getUserInformation('id')
      .then(data => {
        this.userId = data;
      })
  }

}
