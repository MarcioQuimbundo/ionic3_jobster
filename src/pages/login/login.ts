import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController, MenuController } from 'ionic-angular';
import { usercredentials } from "../../models/interfaces/usercredentials";
import { AuthProvider } from "../../providers/auth/auth";
import { AnimationService, AnimationBuilder } from 'css-animator';
import { RegisterPage } from "../register/register";
import firebase from 'firebase';

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  @ViewChild('myElement') myElem;
  private animator: AnimationBuilder;

  credentials = {} as usercredentials;

  constructor(public navCtrl: NavController, public navParams: NavParams, public authservice: AuthProvider, animationService: AnimationService, public toastCtrl: ToastController, public menuCtrl: MenuController) {
    this.animator = animationService.builder();

    // firebase.auth().onAuthStateChanged(function (user) {
    //   if (user) {
    //     this.navCtrl.setRoot('TabsPage');
    //   } else {
    //     let toast = this.toastCtrl.create({
    //       message: 'Please Login To Proceed',
    //       duration: 3000,
    //       position: 'bottom'
    //     });
    //     toast.present();
    //   }
    // });
  
  }

  ionViewDidLoad() {

  }

  animateElem() {
    this.animator.setType('bounceIn').show(this.myElem.nativeElement);
  }

  login() {
    this.authservice.login(this.credentials).then((res: any) => {
      if (!res.code)
        this.navCtrl.setRoot('TabsPage');
      else
        alert(res);
    })
  }

  resetPassword() {
    this.navCtrl.push('ResetpasswordPage');
  }

  signup() {
    this.navCtrl.setRoot(RegisterPage);
  }

  ionViewWillEnter() {
    this.menuCtrl.swipeEnable(false);
  }

  ionViewDidLeave() {
    this.menuCtrl.swipeEnable(true);
  }



}
