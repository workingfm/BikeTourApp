import { ErrorHandler, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Globalization } from '@ionic-native/globalization';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { NgCalendarModule } from 'ionic2-calendar';
import { MyApp } from './app.component';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { HomePageModule } from '../pages/home/home.module';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { LoginProvider } from '../providers/login/login';
import { fakeBackendProvider } from '../mock/fake-backend.service';
import { UtilsProvider } from '../providers/utils/utils';
import { RegistrationPageModule } from '../pages/registration/registration.module';
import { TourDetailPageModule } from '../pages/tour-detail/tour-detail.module';
import { Geolocation } from '@ionic-native/geolocation';

export function createTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

@NgModule({
  declarations: [
    MyApp,
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    NgCalendarModule,
    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
      provide: TranslateLoader,
      useFactory: (createTranslateLoader),
      deps: [HttpClient]
    }
  }),
    HomePageModule,
    RegistrationPageModule,
    TourDetailPageModule
  ],
  bootstrap: [IonicApp],
  providers: [
    StatusBar,
    SplashScreen,
    Globalization,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    LoginProvider,
    fakeBackendProvider,
    UtilsProvider,
    Geolocation,
  ]
})
export class AppModule {}
