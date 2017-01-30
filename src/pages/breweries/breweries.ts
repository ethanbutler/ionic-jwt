import { Component } from '@angular/core';
import { NavController, NavParams, LoadingController } from 'ionic-angular';

//providers
import { Distance } from '../../providers/distance';
import { User } from '../../providers/user';

@Component({
  selector: 'page-breweries',
  templateUrl: 'breweries.html'
})
export class Breweries {

  currentPos: Object = null;
  userId:     any = null;
  show:       string = 'nearby';
  loader:     any = this.loadingCtrl.create({
    content: 'Loading Nearby Breweries'
  });
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public loadingCtrl: LoadingController,
    private distance: Distance,
    private user: User
  ) {
    distance.getCoords()
    .then(data => {
      this.currentPos = data;
    });
    // user.getUserInformation('id').then(data=>console.log(data))
    // user.getUserInformation('id')
    // .then(data => {
    //   this.userId = data;
    // });
  }

  ngOnInit(){
    this.loader.present();
  }

  dismissLoader(){
    this.loader.dismiss().catch(() => {});
  }

}
