import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { Storage } from '@ionic/storage';
import { Login } from '../pages/login/login';
import { AuthService } from '../providers/auth';

@NgModule({
  declarations: [
    MyApp,
    Login
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    Login
  ],
  providers: [{
    provide: ErrorHandler,
    useClass: IonicErrorHandler,
  }, Storage, AuthService]
})
export class AppModule {}
