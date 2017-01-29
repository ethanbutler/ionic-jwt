import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';
import { Headers } from '@angular/http';
import { AuthHttp, JwtHelper }from 'angular2-jwt';

@Injectable()
export class User {

  contentHeaders: Headers = new Headers({'content-type': 'application/json'});
  endpoint:  string = 'http://dev.beerncapp.com:3000/api/v1/users/';
  local:     Storage = new Storage();
  jwtHelper: JwtHelper = new JwtHelper();
  user:      any;
  avatarSrc: string = 'assets/img/avatar.jpg'; //TODO: this will be part of user info
  constructor(public authHttp: AuthHttp){}

  public isLoggedIn(){
    return new Promise(resolve => {
      this.local.get('id_token').then(token => {
        resolve(token ? true: false);
      }).catch(err => console.log(err));
    });
  }

  public getUserInformation(type?: string){
    return new Promise(resolve => {
      this.local.get('id_token').then(token => {
        if(type === 'avatar' ){
          resolve(this.avatarSrc);
        }
        else if(token && !type){
          resolve(this.jwtHelper.decodeToken(token) );
        }
        else if(token && this.jwtHelper.decodeToken(token)[type]){
          resolve(this.jwtHelper.decodeToken(token)[type]);
        }
        else {
          resolve(null);
        }
      })
    })
  }

  public login(token: any, cb?: Function){
    let user = this.jwtHelper.decodeToken(token.id);
    this.local.set('id_token', token.id);
    this.user = user.id;
    if(cb) cb(token);
  }

  public logout(cb?: Function){
    this.user = null;
    this.local.remove('id_token');
    if(cb) cb();
  }

  public update(userInfo: any, cb?: Function){
    return new Promise(resolve => {
      this.getUserInformation().then(token => {
        let newInfo = {};
        this.authHttp.post(this.endpoint, JSON.stringify(newInfo), {
          headers: this.contentHeaders
        }).map(res => res.json())
        .subscribe(token => {
          this.login(token, cb);
        }, err => {
          console.log(err);
        });
      });
    });
  }

}
