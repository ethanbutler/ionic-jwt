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


  constructor(public navCtrl: NavController, public navParams: NavParams, public user: User) {}

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
    console.log('signin');
    this.navCtrl.push(SignIn);
  }

  goToHome(){
    console.log('home');
    this.navCtrl.push(Tabs);
  }

}
