import { Component, Input } from '@angular/core';
import { NavController } from 'ionic-angular';

//pages
import { Brewery } from '../../pages/brewery/brewery';

//providers
import { BreweriesProvider } from '../../providers/breweries';
import { Distance } from '../../providers/distance';

@Component({
  selector: 'brewery-list-full',
  templateUrl: 'brewery-list-full.html'
})
export class BreweryListFull{

    @Input() args: Object;
    public data: any = null;
    constructor(public navCtrl: NavController, private breweries: BreweriesProvider, private distance: Distance ) {}

    ngOnInit(){
      this.breweries.getBreweries(this.args)
        .then(data => {
          console.log(data)
          this.data = data['breweries'];
        });
    }

    goToBrewery(id){
      for( let brewery of this.data ){
        if( brewery.id === id ){
          return this.navCtrl.push(Brewery, { data: brewery });
        }
      }
    }

}
