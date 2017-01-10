import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { Storage } from '@ionic/storage';

//app
import { App } from './app.component';

//pages
import { Brewery }     from '../pages/brewery/brewery';
import { Breweries }   from '../pages/breweries/breweries';
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
import { GopcAd }          from '../components/gopc-ad/gopc-ad';
import { FixedBottom }     from '../components/fixed-bottom/fixed-bottom';
import { GuideComponent }  from '../components/guide/guide';
import { BreweryList }     from '../components/brewery-list/brewery-list';
import { BreweryListFull } from '../components/brewery-list-full/brewery-list-full';

//pipes
import { Removehttp }   from '../pipes/removehttp';
import { SafeHtmlPipe } from '../pipes/safehtml';
import { TodaysHours }  from '../pipes/todays-hours';

//providers
import { BreweriesProvider } from '../providers/breweries';
import { BreweryProvider } from '../providers/brewery';
import { Distance }          from '../providers/distance';
import { GuideProvider }    from '../providers/guide';
import { GuidesProvider }    from '../providers/guides';
import { RatingProvider }    from '../providers/rating';
import { User }              from '../providers/user';

@NgModule({
  declarations: [
    App,
    Brewery,
    Breweries,
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
    GopcAd,
    FixedBottom,
    Removehttp,
    SafeHtmlPipe,
    TodaysHours,
    GuideComponent,
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
    GopcAd,
    FixedBottom,
    GuideComponent,
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
    GuideProvider,
    GuidesProvider,
    RatingProvider,
    User
  ]
})
export class AppModule {}
