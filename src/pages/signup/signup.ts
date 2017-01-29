import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { FormBuilder, Validators } from '@angular/forms';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

//pages
import { SignIn } from '../signin/signin';
import { Tabs }   from '../tabs/tabs';

//providers
import { User } from '../../providers/user';

@Component({
  selector: 'page-signup',
  templateUrl: 'signup.html'
})
export class SignUp {

  SIGNUP_URL: string = 'http://dev.beerncapp.com:3000/api/v1/users';
  LOGIN_URL: string = 'http://dev.beerncapp.com:3000/api/v1/auth/login';
  contentHeader: Headers = new Headers({'content-type': 'application/json'});
  credentials: any;
  error: string;

  constructor(public navCtrl: NavController, public navParams: NavParams, private formBuilder: FormBuilder, private http: Http, private user: User ) {
    this.credentials = this.formBuilder.group({
      username: ['', Validators.required],
      email: ['', Validators.required], //TODO email validation
      password: ['', Validators.required]
    });
  }

  onSubmit($event){
    $event.preventDefault();
    let credentials = this.credentials.value;
    this.http.post(this.SIGNUP_URL, JSON.stringify(credentials), {
      headers: this.contentHeader
    })
    .map(res => res.json())
    .subscribe(
      data => {
        this.afterSignup(data, token => {
          this.user.login(token, () =>{
            this.error = null;
            this.navCtrl.push(Tabs);
          })
        });
      },
      err => { this.error = err._body }
    )
  }

  afterSignup(data, cb?: Function){
    let credentials = {
      email: data.user.email,
      password: this.credentials.value.password
    };
    this.http.post(this.LOGIN_URL, JSON.stringify(credentials), {
      headers: this.contentHeader
    })
    .map(res => res.json())
    .subscribe(
      data => { if(cb) cb(data) },
      err => { this.error = err._body }
    )
  }

  goToSignIn(){
    this.navCtrl.push(SignIn);
  }

}
