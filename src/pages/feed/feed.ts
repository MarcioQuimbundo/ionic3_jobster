import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { DbProvider } from "../../providers/db/db";

/**
 * Generated class for the FeedPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-feed',
  templateUrl: 'feed.html',
})
export class FeedPage {

  jobs: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public dbservice: DbProvider) {
  }

  refreshJobs(refresher) {
    this.fetchJobs();

    setTimeout(() => {
      refresher.complete();
    }, 2000);
  }

  ionViewWillLoad() {
    this.fetchJobs();
  }

  fetchJobs() {
    this.dbservice.getJobs().then((data) => {
      this.jobs = data;
    });
  }

  viewJob(job) {
    this.navCtrl.push('ViewItemPage', {
      jobdetails: job
    });
  }

}
