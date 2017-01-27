import { Component, Input } from '@angular/core';
import { NavController } from 'ionic-angular';

//pages
import { Guide } from '../../pages/guide/guide';

//providers
import { GuidesProvider } from '../../providers/guides';

@Component({
  selector: 'guide-list',
  templateUrl: 'guide-list.html'
})
export class GuideList {

  @Input() args: Object;
  public data: any = null;
  constructor(public navCtrl: NavController, private guides: GuidesProvider) {}

  ngOnInit(){
    this.guides.getGuides(this.args)
      .then(data => {
        this.data = data['guides'];
      });
  }

  goToGuide(id){
    for( let guide of this.data ){
      if( guide.id === id ){
        return this.navCtrl.push(Guide, { data: guide });
      }
    }
  }

}
