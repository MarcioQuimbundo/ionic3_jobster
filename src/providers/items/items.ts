import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import firebase from 'firebase';

/*
  Generated class for the ItemsProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ItemsProvider {

  itemsdata = firebase.database().ref('/itemsinfo');

  constructor(public afireauth: AngularFireAuth) {
    
  }

  additem(sell,imgurl) {
    var promise = new Promise((resolve, reject) => {
      this.itemsdata.child(sell.title).set({
        title: sell.title,
        description: sell.description,
        price: sell.price,
        photoURL: imgurl
      }).then(() => {
        resolve({ success: true });
      }).catch((err) => {
        reject(err);
      })
    })
    return promise;
  }

}
