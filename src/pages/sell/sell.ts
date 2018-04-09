import { Component, NgZone } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController, ToastController } from 'ionic-angular';
import { ImghandlerProvider } from "../../providers/imghandler/imghandler";
import { ItemsProvider } from "../../providers/items/items";

/**
 * Generated class for the SellPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-sell',
  templateUrl: 'sell.html',
})
export class SellPage {
  imgurl = 'https://firebasestorage.googleapis.com/v0/b/myapp-4eadd.appspot.com/o/chatterplace.png?alt=media&token=e51fa887-bfc6-48ff-87c6-e2c61976534e';

  sell = {
    title: '',
    description: '',
    price: '',
  }

  constructor(public navCtrl: NavController, public navParams: NavParams, public loadingCtrl: LoadingController, public imgservice: ImghandlerProvider, public zone: NgZone, public itemservice: ItemsProvider, public toastCtrl: ToastController) {
  }

  ionViewDidLoad() {
    
  }

  chooseimage() {
    let loader = this.loadingCtrl.create({
      content: 'Resolving Image'
    })
    loader.present();
    this.imgservice.uploaditemimage().then((uploadedurl: any) => {
      loader.dismiss();
      this.zone.run(() => {
        this.imgurl = uploadedurl;
      })
    }).catch((err) => {
      loader.dismiss();
      console.log(err);
    })
  }

  addItem() {
    var toaster = this.toastCtrl.create({
      duration: 3000,
      position: 'bottom'
    });
    if (this.sell.title == '' || this.sell.description == '' || this.sell.price == '') {
      toaster.setMessage('All fields are required');
      toaster.present();
    }
    else {
      let loader = this.loadingCtrl.create({
        content: 'Please wait'
      });
      loader.present();
      this.itemservice.additem(this.sell,this.imgurl).then((res: any) => {
        loader.dismiss();
        if (res.success) {
          toaster.setMessage('Item added successfully');
          toaster.present();
          this.navCtrl.push('TabsPage');
        } else {
            alert('Error' + res);
        }
      })
    }
  }

}

