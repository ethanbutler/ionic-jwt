import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';
import { JwtHelper } from 'angular2-jwt';

@Injectable()
export class User {

  local: Storage = new Storage();
  jwtHelper: JwtHelper = new JwtHelper();
  user: any;
  avatarSrc: string = 'assets/img/avatar.jpg'; //TODO: this will be part of user info
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

  public getToken(){
    return new Promise(resolve => {
      this.local.get('id_token').then(token => {
        resolve(token);
      });
    })
  }

  public getUserInformation(type?: string){
    return new Promise(resolve => {
      this.local.get('id_token').then(token => {
        if(type === 'avatar' ){
          resolve(this.avatarSrc);
        }
        else if(token && !type){
          resolve(this.jwtHelper.decodeToken(token) );
        } else if(token && this.jwtHelper.decodeToken(token)[type]){
          resolve(this.jwtHelper.decodeToken(token)[type]);
        } else {
          resolve(false);
        }
      })
    })
  }

  public login(token: any, cb?: Function){
    let user = this.jwtHelper.decodeToken(token.id);
    this.local.set('id_token', token.id);
    this.user = user.id;
    if(cb) cb();
  }

  public logout(cb?: Function){
    this.user = null;
    this.local.remove('id_token');
    if(cb) cb();
  }

}
