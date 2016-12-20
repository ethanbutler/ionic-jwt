import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar, Splashscreen } from 'ionic-native';
import { Splash } from '../pages/splash/splash';


@Component({
  templateUrl: 'app.html'
})
export class App {
  rootPage = Splash;
  constructor(platform: Platform) {
    platform.ready().then(() => {
      StatusBar.styleDefault();
    });
  }
}
