import { Component } from '@angular/core';

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

  tab1Root: any = Home;
  tab2Root: any = Nearby;
  tab3Root: any = Breweries;
  tab4Root: any = Guides;
  tab5Root: any = null;
  constructor(private user: User){}

  ionViewDidEnter(){
    let profileTab = document.querySelector('#tab-t0-4');
    this.user.getUserInfo(null, 'avatarSrcUrl').then(avatarSrc => {
      profileTab.innerHTML = `<span class="icon-avatar"><img src="${avatarSrc}" /></span>`;
    })

    this.user.isLoggedIn().then(isLoggedIn => {
      this.tab5Root = isLoggedIn? Profile: SignIn;
    });
  }

}
