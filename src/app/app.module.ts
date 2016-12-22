import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { App } from './app.component';
import { Storage } from '@ionic/storage';

//pages
import { Home }     from '../pages/home/home';
import { Brewery }  from '../pages/brewery/brewery';
import { Guides }   from '../pages/guides/guides';
import { Nearby }   from '../pages/nearby/nearby';
import { SignIn }   from '../pages/signin/signin';
import { SignUp }   from '../pages/signup/signup';
import { Splash }   from '../pages/splash/splash';
import { Tabs }     from '../pages/tabs/tabs';
import { GopcAd }   from '../components/gopc-ad/gopc-ad';

@NgModule({
  declarations: [
    App,
    Brewery,
    Home,
    Guides,
    Nearby,
    SignIn,
    SignUp,
    Splash,
    Tabs,
    GopcAd
  ],
  imports: [
    IonicModule.forRoot(App, {tabsPlacment: 'bottom'})
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    App,
    Brewery,
    Home,
    Guides,
    Nearby,
    SignIn,
    SignUp,
    Splash,
    Tabs,
    GopcAd
  ],
  providers: [{
    provide: ErrorHandler,
    useClass: IonicErrorHandler,
  }, Storage ]
})
export class AppModule {}
