import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

//pages
import { Search } from '../../pages/search/search';

@Component({
  selector: 'app-header',
  templateUrl: 'app-header.html'
})
export class AppHeader {

  constructor(public navCtrl: NavController){}

  goToSearch(event: any){
    this.navCtrl.push(Search);
  }

}
