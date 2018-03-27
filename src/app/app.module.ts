import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { QRScanner} from '@ionic-native/qr-scanner';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import {IonicStorageModule} from "@ionic/storage";
import {ImagesPage} from "../pages/images/images";
import {WordsPage} from "../pages/words/words";
import {BrainstormingPage} from "../pages/brainstorming/brainstorming";
import {ColorPage} from "../pages/color/color";
import {ResultPage} from "../pages/result/result";
import {ContactPage} from "../pages/contact/contact";
import {NgxQRCodeModule} from "ngx-qrcode2";

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ImagesPage,
    WordsPage,
    BrainstormingPage,
    ColorPage,
    ResultPage,
    ContactPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot(),
    NgxQRCodeModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ImagesPage,
    WordsPage,
    BrainstormingPage,
    ColorPage,
    ResultPage,
    ContactPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    QRScanner,
    NgxQRCodeModule,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
