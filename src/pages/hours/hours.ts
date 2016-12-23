import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Isclosed } from '../pipes/isclosed';

@Component({
  selector: 'page-hours',
  templateUrl: 'hours.html',
})
export class Hours {
  public name: string;
  public hours: any;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.name = navParams.get('name');
    this.hours = navParams.get('hours');
  }

}
