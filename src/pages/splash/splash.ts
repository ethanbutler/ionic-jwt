import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

//pages
import { Tabs } from '../tabs/tabs';
import { SignUp } from '../signup/signup';
import { SignIn } from '../signin/signin';

//providers
import { User } from '../../providers/user';

@Component({
  selector: 'page-splash',
  templateUrl: 'splash.html'
})
export class Splash {

  tabBarElement: any;
  constructor(public navCtrl: NavController, public navParams: NavParams, public user: User) {
    this.tabBarElement = document.querySelector('#tabs .tabbar');
  }

  ionViewDidLoad(){
    this.user.isLoggedIn().then(isUserLoggedIn => {
      if(isUserLoggedIn){
        this.navCtrl.push(Tabs);
      }
    })
  }

  goToSignUp(){
    this.navCtrl.push(SignUp);
  }

  goToSignIn(){
    this.navCtrl.push(SignIn);
  }

  goToHome(){
    this.navCtrl.push(Tabs);
  }

  ionViewWillEnter(){
    if(!this.tabBarElement) return;
    this.tabBarElement.style.display = 'none';
  }

  ionViewWillLeave(){
    if(!this.tabBarElement) return;
    this.tabBarElement.style.display = 'block';
  }

}
