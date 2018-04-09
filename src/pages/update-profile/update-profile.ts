import { Component, NgZone } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController, ActionSheetController, ToastController } from 'ionic-angular';
import { ImghandlerProvider } from "../../providers/imghandler/imghandler";
import { DbProvider } from "../../providers/db/db";
import { AngularFireAuth } from 'angularfire2/auth';

/**
 * Generated class for the UpdateProfilePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-update-profile',
  templateUrl: 'update-profile.html',
})
export class UpdateProfilePage {

  displayPic: any;
  displayName: '';
  email: '';
  nationalID: '';
  currentJob: '';
  currentAddress: '';
  dob: '';
  pob: '';

  constructor(public navCtrl: NavController, public navParams: NavParams, public afireauth: AngularFireAuth, public dbservice: DbProvider, public actionSheetCtrl: ActionSheetController, public toastCtrl: ToastController) {

  }

  ionViewWillLoad() {

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

  updateProfile() {
    let toasty = this.toastCtrl.create({
      duration: 3000,
      position: 'bottom'
    });
    let nv = this.navCtrl;

    this.dbservice.usersdb.get(this.afireauth.auth.currentUser.uid).then((doc) => {
      // update
      doc.dob = this.dob;
      doc.pob = this.pob;
      doc.currentJob = this.currentJob;
      doc.currentAddress = this.currentAddress;
      // put them back
      return this.dbservice.usersdb.put(doc);
    }).then(function () {
      nv.setRoot('ProfilePage');
      toasty.setMessage('Update Successful');
    }).catch((err) => {
      console.error(err + ' error');
      toasty.setMessage('OOPS Please Try Again');
    });
  }

  photoChoose() {
    let actionSheet = this.actionSheetCtrl.create({
      buttons: [
        {
          text: 'CAMERA',
          handler: () => {
            console.log('Destructive clicked');
          }
        }, {
          text: 'GALLERY',
          handler: () => {
            console.log('Archive clicked');
          }
        }
      ]
    });
    actionSheet.present();
  }

}
