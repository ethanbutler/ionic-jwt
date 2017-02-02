import { NavController } from 'ionic-angular';
import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

//pages
import { SignUp } from '../signup/signup';
import { Tabs }   from '../tabs/tabs';

//providers
import { User } from '../../providers/user';

@Component({
  selector: 'page-signin',
  templateUrl: 'signin.html'
})
export class SignIn {

  LOGIN_URL: string = 'http://dev.beerncapp.com:3000/api/v1/auth/login';
  credentials: any;
  contentHeader: Headers = new Headers({"Content-Type": "application/json"});
  error: string;
  authType: string;
  constructor(
    public navCtrl: NavController,
    private formBuilder: FormBuilder,
    private http: Http,
    private user: User
  ) {
    this.authType = 'login';
    this.credentials = this.formBuilder.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
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
      data => this.user.login(data, (token) => {
        this.error = null;
        this.navCtrl.push(Tabs);
        window.dispatchEvent(new Event('LOGINCHANGE'));
      }),
      err => {
        console.log(err);
        this.error = err._body
      }
    )
  }

  goToSignUp(){
    this.navCtrl.push(SignUp);
  }

}
