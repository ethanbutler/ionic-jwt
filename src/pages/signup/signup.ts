import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { FormBuilder, Validators } from '@angular/forms';
import { Http, Headers } from '@angular/http';
import { Storage } from '@ionic/storage';
import { JwtHelper } from 'angular2-jwt';
import 'rxjs/add/operator/map';

//pages
import { Home } from '../home/home';

@Component({
  selector: 'page-signup',
  templateUrl: 'signup.html'
})
export class SignUp {

  SIGNUP_URL: string = 'http://localhost:3001/users';
  contentHeader: Headers = new Headers({'content-type': 'application/json'});
  credentials: any;
  jwtHelper: JwtHelper = new JwtHelper();
  local: Storage = new Storage;
  user: string;
  error: string;

  constructor(public navCtrl: NavController, public navParams: NavParams, private formBuilder: FormBuilder, private http: Http ) {
    this.credentials = this.formBuilder.group({
      fullname: ['', Validators.required],
      email: ['', Validators.required], //TODO email validation
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  signup($event){
    $event.preventDefault();
    let credentials = this.credentials.value;
    this.http.post(this.SIGNUP_URL, JSON.stringify(credentials), {
      headers: this.contentHeader
    })
    .map(res => res.json())
    .subscribe(
      data => this.authSuccess(data.id_token),
      err => { this.error = err._body }
    )
  }

  authSuccess(token){
    this.error = null;
    this.local.set('id_token', token);
    this.user = this.jwtHelper.decodeToken(token).username;
    this.navCtrl.push(Home);
  }

  handleSubmit($event){
    $event.preventDefault();
  }

}
