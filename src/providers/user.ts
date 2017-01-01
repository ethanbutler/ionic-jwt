import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';
import { JwtHelper } from 'angular2-jwt';

@Injectable()
export class User {

  local: Storage = new Storage();
  jwtHelper: JwtHelper = new JwtHelper();
  constructor(){}

  public isLoggedIn(){
    return new Promise(resolve => {
      this.local.get('id_token').then(token => {
        if(token){
          resolve(true);
        } else {
          resolve(false);
        }
      }).catch(err => console.log(err));
    });
  }

  public getUserInformation(type){
    return new Promise(resolve => {
      this.local.get('id_token').then(token => {
        if(token && this.jwtHelper.decodeToken(token)[type]){
          resolve(this.jwtHelper.decodeToken(token)[type]);
        } else {
          resolve(false);
        }
      })
    })
  }


}
