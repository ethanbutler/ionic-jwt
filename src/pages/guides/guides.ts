import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

//pages
import { Guide } from '../guide/guide';

//providers
import { GuidesProvider } from '../../providers/guides';

@Component({
  selector: 'page-guides',
  templateUrl: 'guides.html'
})
export class Guides {

  guides: Array<any> = null;
  constructor(public navCtrl: NavController, public navParams: NavParams, private guidesProvider: GuidesProvider) {
    guidesProvider.getGuides().then(guides => {
      this.guides = guides;
    })
  }


}
