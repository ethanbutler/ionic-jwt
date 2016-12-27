import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

//pages
import { Edit } from '../edit/edit';
import { Feedback } from '../feedback/feedback';
import { Terms } from '../terms/terms';

@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html'
})
export class Profile {
  public user: any = {
    name: "Kyle Lambert",
    username: "beerdude2012",
    avatar: "assets/img/avatar.jpg"
  }
  constructor(public navCtrl: NavController, public navParams: NavParams) {}

  goToSettings(){
    this.navCtrl.push(Edit);
  }

  goToTerms(){
    this.navCtrl.push(Terms);
  }

  goToFeedback(){
    this.navCtrl.push(Feedback);
  }

}
