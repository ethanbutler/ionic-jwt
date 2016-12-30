import { Component, Input } from '@angular/core';
import { NavController } from 'ionic-angular';

//pages
import { Brewery } from '../../pages/brewery/brewery';

//providers
import { BreweriesProvider } from '../../providers/breweries';
import { Distance } from '../../providers/distance';

@Component({
  selector: 'brewery-list',
  templateUrl: 'brewery-list.html'
})
export class BreweryList {

  @Input() args: Object;
  public data: any = null;
  constructor(public navCtrl: NavController, private breweries: BreweriesProvider, private distance: Distance ) {}

  ngOnInit(){
    console.log(this.args);
    this.breweries.getBreweries(this.args)
      .then(data => {
        this.data = data;
      });
  }

  goToBrewery(id){
    this.navCtrl.push(Brewery, { id: id });
  }

}
