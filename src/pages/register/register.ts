import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController, ToastController, MenuController } from 'ionic-angular';
import { AuthProvider } from "../../providers/auth/auth";
import { DbProvider } from "../../providers/db/db";
import { AngularFireAuth } from 'angularfire2/auth';
import { ContentDrawer } from "../../components/content-drawer/content-drawer";

/**
 * Generated class for the RegisterPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})
export class RegisterPage {

  newuser = {
    email: '',
    password: '',
    displayName: '',
    displayPic: 'https://profile.actionsprout.com/default.jpeg',
    nationalId: '',
    currentJob: '',
    currentAddress: '',
    posts: {
      postid: '1',
      postcontent: 'something'
    }
  }

  tandc: boolean;
  isenabled: boolean=false;

  drawerOptions: any;


  constructor(public navCtrl: NavController, public navParams: NavParams, public loadingCtrl: LoadingController, public toastCtrl: ToastController, public authservice: AuthProvider, public dbservice: DbProvider, public afireauth: AngularFireAuth, public menuCtrl: MenuController) {

    this.drawerOptions = {
      handleHeight: 50,
      thresholdFromBottom: 200,
      thresholdFromTop: 200,
      bounceBack: true
    };

  }

  terms() {
    if (this.tandc = true) {
      this.isenabled=true;
    } else if(this.tandc = false) {
      this.isenabled=false;
    }
  }

  signup() {
    var toaster = this.toastCtrl.create({
      duration: 3000,
      position: 'bottom'
    });
    if (this.newuser.email == '' || this.newuser.password == '' || this.newuser.displayName == '') {
      toaster.setMessage('All fields are required');
      toaster.present();
    }
    else if (this.newuser.password.length < 7) {
      toaster.setMessage('Password is not strong. Try giving more than six characters');
      toaster.present();
    }
    else {
      let loader = this.loadingCtrl.create({
        content: 'Please wait'
      });
      loader.present();
      this.authservice.adduser(this.newuser).then((res: any) => {
        loader.dismiss();
        if (res.success) {
          this.navCtrl.push('TabsPage');
          this.createUser();
        } else {
          alert('Error' + res);
        }
      })
    }
  }

  createUser() {
    this.dbservice.createUser({
      _id: this.afireauth.auth.currentUser.uid,
      displayName: this.newuser.displayName,
      email: this.newuser.email,
      displayPic: this.newuser.displayPic,
      nationalId: this.newuser.nationalId,
      currentJob: this.newuser.currentJob,
      currentAddress: this.newuser.currentAddress,
      post: this.newuser.posts
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RegisterPage');
  }

  ionViewWillEnter() {
    this.menuCtrl.swipeEnable(false);
  }

  ionViewDidLeave() {
    this.menuCtrl.swipeEnable(true);
  }

  login() {
    this.navCtrl.setRoot('LoginPage');
  }

}
