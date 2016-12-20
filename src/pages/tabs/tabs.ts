import { Component } from '@angular/core';

//pages
import { Home }    from '../home/home.ts';
import { Nearby }  from '../nearby/nearby';
import { Brewery } from '../brewery/brewery';

@Component({
  selector: 'page-tabs',
  templateUrl: 'tabs.html'
})
export class Tabs {

  tab1Root: any = Home;
  tab2Root: any = Nearby;
  tab3Root: any = Brewery;
  tab4Root: any = Brewery;
  tab5Root: any = Brewery;

  constructor(){}


}
