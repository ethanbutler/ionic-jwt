import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

//providers
import { GuideProvider } from '../../providers/guide';

//pages
import { Brewery } from '../brewery/brewery';

@Component({
  selector: 'page-guide',
  templateUrl: 'guide.html'
})
export class Guide {

  public data: any = null;
  public content: string = '';
  constructor(public navCtrl: NavController, public navParams: NavParams, public guideProvider: GuideProvider ) {
    this.data = navParams.get('data');
    this.guideProvider.getGuide(this.data.id).then(data => {
      this.content = data.content;
    });
  }

  handleContentClick(event){
    let target = event.target;
    if(target.hasAttribute('data-brewery-id')){
      this.goToBrewery({
        id: target.getAttribute('data-brewery-id'),
        name: 'Sample Name'
        //TODO: add brewery/id provider here
      })
    }
  }

  goToBrewery(brewery: any){
    this.navCtrl.push(Brewery, {
      data: brewery
    });
  }

}
