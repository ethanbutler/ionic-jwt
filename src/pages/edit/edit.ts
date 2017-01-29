import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

//providers
import { User } from '../../providers/user';
import { Distance } from '../../providers/distance';

@Component({
  selector: 'page-edit',
  templateUrl: 'edit.html'
})
export class Edit {

  name:                 string = null;
  username:             string = null;
  email:                string = null;
  passwordOriginal:     string = null;
  passwordConfirmation: string = null;
  credentials: any = {
    name: null,
    username: null,
    email: null,
    password: null,
    latitude: null,
    longitude: null
  };
  password: any = {
    original: null,
    confirmation: null
  };
  err: string = null;
  doPasswordsMatch: Boolean = true;
  constructor(
    public navCtrl:     NavController,
    public navParams:   NavParams,
    public user:        User,
    public distance:    Distance
  ) {
    this.user.getUserInfo().then(info => {
      this.credentials.name      = info['name'] || 'Add Name';
      this.credentials.username  = info['username'] || 'Add Username';
      this.credentials.email     = info['email'] || 'Add Email';
    });
    this.distance.getCoords().then(coords => {
      this.credentials.latitude  = coords['lat'];
      this.credentials.longitude = coords['lng'];
    });
  }

  private onChange(event: string, property: string){
    let value = event;
    if(this.credentials.hasOwnProperty(property)){
      this.credentials[property] = value;
    }
  }

  private onPasswordChange(event: any, property: string){
    let value = event;
    if(property !== 'original' && property !== 'confirmation'){
      return null;
    }
    this.password[property] = value;
    this.doPasswordsMatch = (this.password.original === this.password.confirmation);
    if(this.doPasswordsMatch){
      this.credentials.password = this.password.original;
    }
  }

  private cleanCredentials(credentials: any){
    let properties = ['name', 'username', 'emai', 'password', 'latitude', 'longitude'];
    for(let property of properties){
      if(!credentials[property]) delete credentials[property]
    }
    return credentials;
  }

  private onSubmit($event){
    $event.preventDefault();
    let credentials = this.cleanCredentials(this.credentials);
    this.user.update(credentials).then(data => {
      console.log(data);
    })
  }

  private handleLocationSettings($event){

  }

  private handlePushNotifications($event){

  }

}
