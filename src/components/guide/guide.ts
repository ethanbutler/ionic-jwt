import { Component, Input } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Guide } from '../../pages/guide/guide';

@Component({
  selector: 'guide',
  templateUrl: 'guide.html'
})
export class GuideComponent {

  @Input() public data: any;
  constructor(public navCtrl: NavController ){}

  goToGuide(){
    this.navCtrl.push(Guide, this.data);
  }

}
