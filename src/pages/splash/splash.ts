import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Home } from '../home/home';
import { SignUp } from '../signup/signup';
import { SignIn } from '../signin/signin';

@Component({
  selector: 'page-splash',
  templateUrl: 'splash.html'
})
export class Splash {

  constructor(public navCtrl: NavController, public navParams: NavParams) {}

  goToSignUp(){
    console.log('signup');
    this.navCtrl.push(SignUp);
  }

  goToSignIn(){
    console.log('signin');
    this.navCtrl.push(SignIn);
  }

  goToHome(){
    console.log('home');
    this.navCtrl.push(Home);
  }

}
