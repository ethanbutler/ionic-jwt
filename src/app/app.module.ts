import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { Storage } from '@ionic/storage';

//app
import { App } from './app.component';

//pages
import { Brewery }     from '../pages/brewery/brewery';
import { Breweries }   from '../pages/breweries/breweries';
import { City }        from '../pages/city/city';
import { Edit }        from '../pages/edit/edit';
import { Feedback }    from '../pages/feedback/feedback';
import { Guide }       from '../pages/guide/guide';
import { Guides }      from '../pages/guides/guides';
import { Home }        from '../pages/home/home';
import { Hours }       from '../pages/hours/hours';
import { Nearby }      from '../pages/nearby/nearby';
import { Profile }     from '../pages/profile/profile';
import { Rating }      from '../pages/rating/rating';
import { Search }      from '../pages/search/search';
import { SignIn }      from '../pages/signin/signin';
import { SignUp }      from '../pages/signup/signup';
import { Splash }      from '../pages/splash/splash';
import { Tabs }        from '../pages/tabs/tabs';
import { Terms }       from '../pages/terms/terms';
import { Top }         from '../pages/top/top';

//components
import { AppHeader }       from '../components/app-header/app-header';
import { AvatarUpload }    from '../components/avatar-upload/avatar-upload';
import { GopcAd }          from '../components/gopc-ad/gopc-ad';
import { FixedBottom }     from '../components/fixed-bottom/fixed-bottom';
import { GuideComponent }  from '../components/guide/guide';
import { GuideList }       from '../components/guide-list/guide-list';
import { BreweryList }     from '../components/brewery-list/brewery-list';
import { BreweryListFull } from '../components/brewery-list-full/brewery-list-full';

//pipes
import { CleanEntities } from '../pipes/clean-entities';
import { Removehttp }    from '../pipes/removehttp';
import { SafeHtmlPipe }  from '../pipes/safehtml';
import { TodaysHours }   from '../pipes/todays-hours';

//providers
import { BreweriesProvider } from '../providers/breweries';
import { BreweryProvider }   from '../providers/brewery';
import { Distance }          from '../providers/distance';
import { GooglePlaces }      from '../providers/google-places';
import { GuideProvider }     from '../providers/guide';
import { GuidesProvider }    from '../providers/guides';
import { RatingProvider }    from '../providers/rating';
import { User }              from '../providers/user';

//factories
import { AuthHttp, AuthConfig } from 'angular2-jwt';
import { Http, RequestOptions}  from '@angular/http';
export function authHttpServiceFactory(http: Http, options: RequestOptions){
  let storage = new Storage();
  return new AuthHttp(new AuthConfig({
    tokenGetter: (() => storage.get('id_token'))
  }), http, options)
}

@NgModule({
  declarations: [
    App,
    Brewery,
    Breweries,
    City,
    Edit,
    Feedback,
    Guide,
    Guides,
    Home,
    Hours,
    Nearby,
    Profile,
    Rating,
    Search,
    SignIn,
    SignUp,
    Splash,
    Tabs,
    Terms,
    Top,
    AppHeader,
    AvatarUpload,
    GopcAd,
    FixedBottom,
    CleanEntities,
    Removehttp,
    SafeHtmlPipe,
    TodaysHours,
    GuideComponent,
    GuideList,
    BreweryList,
    BreweryListFull
  ],
  imports: [
    IonicModule.forRoot(App, {tabsPlacment: 'bottom'})
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    App,
    Brewery,
    Breweries,
    City,
    Edit,
    Feedback,
    Guide,
    Guides,
    Home,
    Hours,
    Nearby,
    Profile,
    Rating,
    Search,
    SignIn,
    SignUp,
    Splash,
    Tabs,
    Terms,
    Top,
    AppHeader,
    AvatarUpload,
    GopcAd,
    FixedBottom,
    GuideComponent,
    GuideList,
    BreweryList,
    BreweryListFull
  ],
  providers: [
    {
      provide: ErrorHandler,
      useClass: IonicErrorHandler,
    },
    Storage,
    BreweryProvider,
    BreweriesProvider,
    Distance,
    GooglePlaces,
    GuideProvider,
    GuidesProvider,
    RatingProvider,
    User,
    {
      provide: AuthHttp,
      useFactory: authHttpServiceFactory,
      deps: [Http, RequestOptions]
    }
  ]
})
export class AppModule {}
