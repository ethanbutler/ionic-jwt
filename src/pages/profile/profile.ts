import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

//pages
import { Edit } from '../edit/edit';
import { Feedback } from '../feedback/feedback';
import { Splash } from '../splash/splash';
import { Terms } from '../terms/terms';

//providers
import { User } from '../../providers/user';

@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html'
})
export class Profile {
  public dummyUser: any = {
    name: "Kyle Lambert",
    username: "beerdude2012",
    avatar: "assets/img/avatar.jpg"
  }
  constructor(public navCtrl: NavController, public navParams: NavParams, private user: User) {
    this.user.getUserInformation()
      .then(data => {
        console.log(data);
      })
  }

  goToSettings(){
    this.navCtrl.push(Edit);
  }

  goToTerms(){
    this.navCtrl.push(Terms);
  }

  goToFeedback(){
    this.navCtrl.push(Feedback);
  }

  logOut(){
    this.user.logout(() => {
      this.navCtrl.push(Splash);
    });
  }

}
