webpackJsonp([1],{

/***/ 513:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewItemPageModule", function() { return ViewItemPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(61);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__view_item__ = __webpack_require__(527);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ViewItemPageModule = (function () {
    function ViewItemPageModule() {
    }
    ViewItemPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__view_item__["a" /* ViewItemPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__view_item__["a" /* ViewItemPage */]),
            ],
        })
    ], ViewItemPageModule);
    return ViewItemPageModule;
}());

//# sourceMappingURL=view-item.module.js.map

/***/ }),

/***/ 527:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ViewItemPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(61);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_db_db__ = __webpack_require__(147);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angularfire2_auth__ = __webpack_require__(62);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/**
 * Generated class for the ViewItemPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ViewItemPage = (function () {
    function ViewItemPage(navCtrl, navParams, dbservice, afireauth, alertCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.dbservice = dbservice;
        this.afireauth = afireauth;
        this.alertCtrl = alertCtrl;
        this.jobdetails = navParams.get('jobdetails');
    }
    ViewItemPage.prototype.ionViewDidLoad = function () {
    };
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
    ViewItemPage.prototype.presentPrompt = function () {
        var alert = this.alertCtrl.create({
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
                    handler: function (data) {
                        console.log('Cancel clicked');
                    }
                }
            ]
        });
        alert.present();
    };
    ViewItemPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-view-item',template:/*ion-inline-start:"C:\Users\Munene\Documents\IonicProjects\gkolx\src\pages\view-item\view-item.html"*/'<!--\n\n  Generated template for the ViewItemPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar color="primary">\n\n    <ion-title>JOB</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content>\n\n\n\n  <ion-item>\n\n    <ion-avatar item-start>\n\n      <img src="{{jobdetails.orglogo}}">\n\n    </ion-avatar>\n\n    <h2>{{jobdetails.org}}</h2>\n\n    <p>November 5, 1955</p>\n\n  </ion-item>\n\n  <div class="jobfulldetailed">\n\n    <h6>Job Position</h6>\n\n    <p>{{jobdetails.jobposition}}</p>\n\n\n\n    <h6>Job Salary</h6>\n\n    <p>{{jobdetails.salary}}</p>\n\n\n\n    <h6>Vacancies Remaining</h6>\n\n    <p>{{jobdetails.vacancies}}</p>\n\n\n\n    <h6>Job Requirements</h6>\n\n    <p>{{jobdetails.requirements}}</p>\n\n\n\n    <h6>Additional Info</h6>\n\n    <p>{{jobdetails.other}}</p>\n\n  </div>\n\n\n\n  <ion-fab left bottom>\n\n    <button ion-fab color="secondary">\n\n      <ion-icon name="checkmark-circle"></ion-icon>\n\n    </button>\n\n  </ion-fab>\n\n\n\n  <ion-fab bottom center>\n\n    <button ion-fab color="default">\n\n      <ion-icon name="bookmark"></ion-icon>\n\n    </button>\n\n  </ion-fab>\n\n\n\n  <ion-fab right bottom>\n\n    <button ion-fab color="dark" (click)="presentPrompt()">\n\n      <ion-icon name="share-alt"></ion-icon>\n\n    </button>\n\n  </ion-fab>\n\n\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\Munene\Documents\IonicProjects\gkolx\src\pages\view-item\view-item.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_db_db__["a" /* DbProvider */], __WEBPACK_IMPORTED_MODULE_3_angularfire2_auth__["a" /* AngularFireAuth */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */]])
    ], ViewItemPage);
    return ViewItemPage;
}());

//# sourceMappingURL=view-item.js.map

/***/ })

});
//# sourceMappingURL=1.js.map