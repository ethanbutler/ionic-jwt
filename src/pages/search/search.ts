import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

//providers
import { BreweriesProvider } from '../../providers/breweries';

//pages
import { Brewery } from '../brewery/brewery';

@Component({
  selector: 'page-search',
  templateUrl: 'search.html'
})
export class Search{

  q:       string = null;
  results: any = null;
  constructor(
    public navCtrl: NavController,
    public breweries: BreweriesProvider
  ){}

  ionViewDidLoad() {}

  onChange(event){
    let term = event;
    this.breweries.getBreweries({
      q: term
    }).then(results => {
      this.results = results['breweries'];
      this.q = term;
    })
  }

  goToResult(result: any, type?: null){
    if(type === 'brewery'){
      this.navCtrl.push(Brewery, { data: result })
    }
  }

}
