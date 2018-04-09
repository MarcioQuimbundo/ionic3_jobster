import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { DbProvider } from "../../providers/db/db";
import { AngularFireAuth } from 'angularfire2/auth';

/**
 * Generated class for the ViewItemPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-view-item',
  templateUrl: 'view-item.html',
})
export class ViewItemPage {

  jobdetails: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public dbservice: DbProvider, public afireauth: AngularFireAuth, public alertCtrl: AlertController) {
    this.jobdetails = navParams.get('jobdetails');
    
  }

  ionViewDidLoad() {
    
  }

  // createWish() {
  //   this.dbservice.addWish({
  //     _id: this.afireauth.auth.currentUser.uid,
  //     wishlist: {
  //       'wishone': {
  //         name: 'wishone',
  //         data: 'something'
  //       }
  //     }
  //   });
  // }

  presentPrompt() {
    let alert = this.alertCtrl.create({
      title: 'Refer A Friend',
      inputs: [
        {
          name: 'email',
          placeholder: 'Enter Friend\'s Email',
          type: 'email'
        }
      ],
      buttons: [
        {
          text: 'Send',
          handler: data => {
            console.log('Cancel clicked');
          }
        }
      ]
    });
    alert.present();
  }

}
