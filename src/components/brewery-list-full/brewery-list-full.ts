import { Component, Input, Output, EventEmitter } from '@angular/core';
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
    @Input() preData: any;
    @Output() loaded: any = new EventEmitter();
    public data: any = null;
    constructor(public navCtrl: NavController, private breweries: BreweriesProvider, private distance: Distance ) {}

    handleData(){
      if(this.preData){
        this.data = this.preData;
      } else {
        this.breweries.getBreweries(this.args)
        .then(data => {
          this.data = data['breweries'];
          this.loaded.next();
        });
      }
    }

    ngOnInit(){ this.handleData() }

    ngOnChanges(){ this.handleData() }

    goToBrewery(id){
      for( let brewery of this.data ){
        if( brewery.id === id ){
          return this.navCtrl.push(Brewery, { data: brewery });
        }
      }
    }

}
