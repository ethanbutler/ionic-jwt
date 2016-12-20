import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Storage } from '@ionic/storage';

//pages
import { Home } from '../home/home';
import { SignUp } from '../signup/signup';
import { SignIn } from '../signin/signin';

@Component({
  selector: 'page-splash',
  templateUrl: 'splash.html'
})
export class Splash {

  local: Storage = new Storage();
  constructor(public navCtrl: NavController, public navParams: NavParams) {}

  ionViewDidLoad(){
    // if user is authenticated, redirect them to homepage
    this.local.get('id_token').then(token => {
      if(!token) return;
      this.navCtrl.push(Home);
    }).catch(error =>{
      console.log(error)
    });
  }

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
