import { Component } from '@angular/core';

//pages
import { Home }    from '../home/home.ts';
import { Brewery } from '../brewery/brewery';
import { Nearby }  from '../nearby/nearby';
import { Guides }  from '../guides/guides';
import { Profile } from '../profile/profile';

@Component({
  selector: 'page-tabs',
  templateUrl: 'tabs.html'
})
export class Tabs {

  tab1Root: any = Home;
  tab2Root: any = Nearby;
  tab3Root: any = Brewery;
  tab4Root: any = Guides;
  tab5Root: any = Profile;

  constructor(){}


}
