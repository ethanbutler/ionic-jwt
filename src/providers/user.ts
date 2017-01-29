import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';
import { Http, Headers } from '@angular/http';
import { AuthHttp, JwtHelper }from 'angular2-jwt';

@Injectable()
export class User {

  contentHeaders: Headers = new Headers({'content-type': 'application/json'});
  endpoint:  string = 'http://dev.beerncapp.com:3000/api/v1/users/';
  local:     Storage = new Storage();
  jwtHelper: JwtHelper = new JwtHelper();
  user:      any;
  avatarSrc: string = 'assets/img/avatar.jpg'; //TODO: this will be part of user info
  constructor(
    public authHttp: AuthHttp,
    public http: Http
  ){}

  public isLoggedIn(){
    return new Promise(resolve => {
      this.local.get('id_token').then(token => {
        resolve(token ? true: false);
      }).catch(err => console.log(err));
    });
  }

  public getToken(){
    return this.local.get('id_token');
  }

  public getUserInfo(id?: number, type?: string){
    return new Promise(resolve => {
      this.getToken().then(token => {
        let _token = this.jwtHelper.decodeToken(token);
        let userId = id || _token.id;
        this.authHttp.get(this.endpoint + userId, {
          headers: this.contentHeaders
        })
        .map(res => res.json())
        .subscribe(data => {
          resolve(type ? data.user[type] : data.user)
        })
      });
    });
  }

  //deprecate
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

  public update(userInfo: any){
    return new Promise(resolve => {
      this.authHttp.put(this.endpoint, JSON.stringify(userInfo), {
        headers: this.contentHeaders
      }).map(res => res.json())
      .subscribe(token => {
        resolve(token);
      }, err => {
        console.log(err);
      });
    });
  }

}
