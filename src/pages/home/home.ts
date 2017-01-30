import { Component } from '@angular/core';
import { NavController, LoadingController } from 'ionic-angular';

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
  loader:     any = this.loadingCtrl.create({
    content: 'Loading Nearby Breweries'
  });
  constructor(
    public navCtrl: NavController,
    public distance: Distance,
    public loadingCtrl: LoadingController
  ) {
    distance.getCoords()
    .then(data => {
      this.currentPos = data;
    });
  }

  ngOnInit(){
    this.loader.present();
  }

  dismissLoader(){
    //TODO: clean this up
    this.loader.dismiss().catch(() => {});
  }

  goToGuides(){
    this.navCtrl.push(Guides);
  }

  goToNearby(){
    this.navCtrl.push(Nearby);
  }

}
