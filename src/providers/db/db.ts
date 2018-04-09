import { Injectable } from '@angular/core';
import PouchDB from "pouchdb";

/*
  Generated class for the DbProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class DbProvider {

  data: any;
  usersdb: any;
  jobsdb: any;
  wishlistdb: any;
  remoteusers: any;
  remotejobs: any;
  remotewish: any;

  constructor() {
    
    this.usersdb = new PouchDB('gkolx-users');
    this.jobsdb = new PouchDB('gkolx-jobs');
    this.wishlistdb = new PouchDB('gkolx-wishlists');

    this.remoteusers = 'https://couchdb-58759d.smileupps.com/gkolx-users/';
    this.remotejobs = 'https://couchdb-58759d.smileupps.com/gkolx-jobs/';
    this.remotewish = 'https://couchdb-58759d.smileupps.com/gkolx-wishlists/';

    let options = {
      live: true,
      retry: true,
      continuous: true
    };

    this.usersdb.sync(this.remoteusers, options);
    this.jobsdb.sync(this.remotejobs, options);
    this.wishlistdb.sync(this.remotewish, options);
  }

  createUser(user) {
    this.usersdb.post(user);
  }

  addWish(wish) {
    this.wishlistdb.post(wish);
  }

  getJobs() {
    if (this.data) {
      return Promise.resolve(this.data);
    }

    return new Promise(resolve => {

      this.jobsdb.allDocs({

        include_docs: true

      }).then((result) => {

        this.data = [];

        let docs = result.rows.map((row) => {
          this.data.push(row.doc);
        });

        resolve(this.data);

        this.jobsdb.changes({ live: true, since: 'now', include_docs: true }).on('change', (change) => {
          this.handleChange(change);
        });

      }).catch((error) => {

        console.log(error);

      });

    });
  }

  handleChange(change) {

    let changedDoc = null;
    let changedIndex = null;

    this.data.forEach((doc, index) => {

      if (doc._id === change.id) {
        changedDoc = doc;
        changedIndex = index;
      }

    });

    //A document was deleted
    if (change.deleted) {
      this.data.splice(changedIndex, 1);
    }
    else {

      //A document was updated
      if (changedDoc) {
        this.data[changedIndex] = change.doc;
      }

      //A document was added
      else {
        this.data.push(change.doc);
      }

    }

  }

  clearDb() {
    this.jobsdb.destroy();
    this.usersdb.destroy();
    this.wishlistdb.destroy();
  }

}
