import { Component, ViewChild } from '@angular/core';
import { NavController, Platform } from 'ionic-angular';
import { StatusBar, Splashscreen } from 'ionic-native';
import { Tabs } from '../pages/tabs/tabs';

@Component({
  templateUrl: 'app.html'
})
export class App {
  @ViewChild('nav') nav: NavController;
  rootPage = Tabs;
  constructor(platform: Platform) {
    platform.ready().then(() => {
      StatusBar.styleDefault();
    });
  }
}
