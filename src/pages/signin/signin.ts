import { NavController, NavParams } from 'ionic-angular';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Http, Headers } from '@angular/http';
import { Storage } from '@ionic/storage';
import { JwtHelper } from 'angular2-jwt';
import 'rxjs/add/operator/map';

@Component({
  selector: 'page-signin',
  templateUrl: 'signin.html'
})
export class SignIn {

  LOGIN_URL: string = 'http://localhost:3001/sessions/create';
  SIGNUP_URL: string = 'http://localhost:3001/users';
  credentials: any;
  contentHeader: Headers = new Headers({"Content-Type": "application/json"});
  jwtHelper: JwtHelper = new JwtHelper();
  local: Storage = new Storage();
  user: string;
  error: string;
  authType: string;
  constructor(public navCtrl: NavController, private formBuilder: FormBuilder, private http: Http) {
    this.authType = 'login';
    this.credentials = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
    this.local.get('id_token').then(token => {
      if(!token) return;
      this.user = this.jwtHelper.decodeToken(token).username;
    }).catch(error =>{
      console.log(error)
    });
  }

  login($event){
    $event.preventDefault();
    let credentials = this.credentials.value;
    this.http.post(this.LOGIN_URL, JSON.stringify(credentials), {
      headers: this.contentHeader
    })
    .map(res => res.json())
    .subscribe(
      data => this.authSuccess(data.id_token),
      err => { this.error = err._body }
    )
  }

  logout(){
    this.user = null;
    this.local.remove('id_token');
  }

  switchTabs(){
    this.error = null;
    this.credentials.reset();
  }

  authSuccess(token){
    this.error = null;
    this.local.set('id_token', token);
    this.user = this.jwtHelper.decodeToken(token).username;
  }


}
