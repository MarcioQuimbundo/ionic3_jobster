import { Component, NgZone } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { DbProvider } from "../../providers/db/db";
import { AuthProvider } from "../../providers/auth/auth";
import { AngularFireAuth } from 'angularfire2/auth';

/**
 * Generated class for the ProfilePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html',
})
export class ProfilePage {

  displayPic: '';
  displayName: '';
  email: '';
  nationalID: '';
  currentJob: '';
  currentAddress: '';
  pob: '';
  dob: '';
  
  constructor(public navCtrl: NavController, public navParams: NavParams, public zone: NgZone, public dbservice: DbProvider, public alertCtrl: AlertController,public authservice: AuthProvider, public afireauth: AngularFireAuth) {
  }

  profileUpdt() {
    this.navCtrl.push('UpdateProfilePage');
  }

  ionViewDidLoad() {
    this.dbservice.usersdb.get(this.afireauth.auth.currentUser.uid).then((doc) => {
      this.displayPic = doc.displayPic;
      this.displayName = doc.displayName;
      this.email = doc.email;
      this.nationalID = doc.nationalId;
      this.currentJob = doc.currentJob;
      this.currentAddress = doc.currentAddress;
      this.dob = doc.dob;
      this.pob = doc.pob;
    });
  }

  ionViewWillEnter() {
    
  }

  

}
