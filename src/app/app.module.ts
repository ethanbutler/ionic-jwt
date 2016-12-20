import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { App } from './app.component';
import { Storage } from '@ionic/storage';

//pages
import { Home }   from '../pages/home/home';
import { Guides } from '../pages/guides/guides';
import { Nearby } from '../pages/nearby/nearby';
import { SignIn}  from '../pages/signin/signin';
import { SignUp } from '../pages/signup/signup';
import { Splash } from '../pages/splash/splash';

@NgModule({
  declarations: [
    App,
    Home,
    Guides,
    Nearby,
    SignIn,
    SignUp,
    Splash
  ],
  imports: [
    IonicModule.forRoot(App)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    App,
    Home,
    Guides,
    Nearby,
    SignIn,
    SignUp,
    Splash
  ],
  providers: [{
    provide: ErrorHandler,
    useClass: IonicErrorHandler,
  }, Storage ]
})
export class AppModule {}
