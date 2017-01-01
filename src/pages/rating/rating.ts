import { Component, Input } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

//providers
import { RatingProvider } from '../../providers/rating';
import { User } from '../../providers/user';

@Component({
  selector: 'page-rating',
  templateUrl: 'rating.html'
})
export class Rating {

  @Input() public name: string;
  @Input() public breweryId: number;
  params: Array<string> = [
    'Beer Quality',
    'Atmosphere',
    'Location'
  ];
  ratings: Array<any> = [];
  constructor(public navCtrl: NavController, public navParams: NavParams, private rating: RatingProvider, private user: User) {
    this.name = navParams.get('name');
    this.breweryId = navParams.get('id');
    for( let param of this.params ){
      this.ratings.push({
        param: param,
        value: 0
      })
    }
  }

  handleRating(param, value){
    for( let rating of this.ratings ){
      if( rating.param === param ){
        rating.value = value;
        break;
      }
    }
  }

  handleSubmit(){
    this.user.getUserInformation('id').then(userId => {
      this.rating.submit({
        userId,
        breweryId: this.breweryId,
        ratings: this.ratings
      })
    })
  }

}
