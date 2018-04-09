import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { File } from '@ionic-native/file';
import { FileChooser } from '@ionic-native/file-chooser';
import { FilePath } from '@ionic-native/file-path';
import { HttpClientModule } from '@angular/common/http';
import { AnimationService, AnimatesDirective } from 'css-animator';

import { config } from "./app.firebaseconfig";

import { AngularFireAuth } from "angularfire2/auth";
import { AngularFireModule } from "angularfire2";

import { MyApp } from './app.component';
import { RegisterPage } from "../pages/register/register";

import { ContentDrawer  } from "../components/content-drawer/content-drawer";
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { AuthProvider } from '../providers/auth/auth';
import { ImghandlerProvider } from '../providers/imghandler/imghandler';
import { ItemsProvider } from '../providers/items/items';
import { DbProvider } from '../providers/db/db';

@NgModule({
  declarations: [
    MyApp,
    RegisterPage,
    AnimatesDirective,
    ContentDrawer
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(config)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    RegisterPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    AuthProvider,
    AngularFireAuth,
    AuthProvider,
    ImghandlerProvider,
    File,
    FileChooser,
    FilePath,
    ItemsProvider,
    AnimationService,
    DbProvider
  ]
})
export class AppModule {}
