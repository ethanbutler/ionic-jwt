import { Component, ViewChild } from '@angular/core';
import { NavController, Platform } from 'ionic-angular';
import { StatusBar } from 'ionic-native';
import { Splash } from '../pages/splash/splash';

@Component({
  templateUrl: 'app.html'
})
export class App {
  @ViewChild('nav') nav: NavController;
  rootPage = Splash;
  constructor(platform: Platform) {
    platform.ready().then(() => {
      StatusBar.styleDefault();
    });
  }
}
