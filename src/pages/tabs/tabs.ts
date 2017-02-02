import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

//pages
import { Home }    from '../home/home.ts';
import { Breweries } from '../breweries/breweries';
import { Nearby }  from '../nearby/nearby';
import { Guides }  from '../guides/guides';
import { Profile } from '../profile/profile';
import { SignIn }  from '../signin/signin';

//providers
import { User } from '../../providers/user';

@Component({
  selector: 'page-tabs',
  templateUrl: 'tabs.html'
})
export class Tabs {

  home:       any = Home;
  nearby:     any = Nearby;
  breweries:  any = Breweries;
  guides:     any = Guides;
  profile:    any = Profile;
  signin:     any = SignIn;
  constructor(
    private user: User
  ){
    window.addEventListener('LOGINCHANGE', this.checkForSignIn.bind(this));
  }

  ionViewDidEnter(){
    this.checkForSignIn();
  }

  checkForSignIn(){
    this.user.isLoggedIn().then(isLoggedIn => {
      let profileTab = document.querySelector('#tab-t0-4');
      let signinTab  = document.querySelector('#tab-t0-5');
      if(isLoggedIn){
        profileTab['style']['display'] = 'flex';
        signinTab['style']['display'] = 'none';
        this.user.getUserInfo(null, 'avatarSrcUrl').then(avatarSrc => {
          if(profileTab){
            profileTab.innerHTML = `<span class="icon-avatar"><img src="${avatarSrc}" /></span>`;
          }
        });
      } else {
        profileTab['style']['display'] = 'none';
        signinTab['style']['display'] = 'flex';
      }
    });
  }
}
