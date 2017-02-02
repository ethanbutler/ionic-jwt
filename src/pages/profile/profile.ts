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
  public userInfo: any = {
    name: null,
    username: null,
    avatar: null
  };
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private user: User
  ) {}

  ionViewWillEnter(){
    this.user.getUserInfo().then(data => {
      this.userInfo.name     = data['name'];
      this.userInfo.username = data['username'];
      this.userInfo.avatar   = data['avatarSrcUrl'];
    })
  }

  goToSettings(){
    this.navCtrl.push(Edit);
  }

  goToTerms(){
    this.navCtrl.push(Terms);
  }

  // goToPrivacy(){
  //   this.navCtrl.push(Terms);
  // }

  goToFeedback(){
    this.navCtrl.push(Feedback);
  }

  logOut(){
    this.user.logout(() => {
      window.dispatchEvent(new Event('LOGINCHANGE'));
      this.navCtrl.push(Splash);
    });
  }

}
