webpackJsonp([2],{

/***/ 509:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpdateProfilePageModule", function() { return UpdateProfilePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(61);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__update_profile__ = __webpack_require__(523);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var UpdateProfilePageModule = (function () {
    function UpdateProfilePageModule() {
    }
    UpdateProfilePageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__update_profile__["a" /* UpdateProfilePage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__update_profile__["a" /* UpdateProfilePage */]),
            ],
        })
    ], UpdateProfilePageModule);
    return UpdateProfilePageModule;
}());

//# sourceMappingURL=update-profile.module.js.map

/***/ }),

/***/ 523:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UpdateProfilePage; });
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
 * Generated class for the UpdateProfilePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var UpdateProfilePage = (function () {
    function UpdateProfilePage(navCtrl, navParams, afireauth, dbservice, actionSheetCtrl, toastCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.afireauth = afireauth;
        this.dbservice = dbservice;
        this.actionSheetCtrl = actionSheetCtrl;
        this.toastCtrl = toastCtrl;
    }
    UpdateProfilePage.prototype.ionViewWillLoad = function () {
        var _this = this;
        this.dbservice.usersdb.get(this.afireauth.auth.currentUser.uid).then(function (doc) {
            _this.displayPic = doc.displayPic;
            _this.displayName = doc.displayName;
            _this.email = doc.email;
            _this.nationalID = doc.nationalId;
            _this.currentJob = doc.currentJob;
            _this.currentAddress = doc.currentAddress;
            _this.dob = doc.dob;
            _this.pob = doc.pob;
        });
    };
    UpdateProfilePage.prototype.updateProfile = function () {
        var _this = this;
        var toasty = this.toastCtrl.create({
            duration: 3000,
            position: 'bottom'
        });
        var nv = this.navCtrl;
        this.dbservice.usersdb.get(this.afireauth.auth.currentUser.uid).then(function (doc) {
            // update
            doc.dob = _this.dob;
            doc.pob = _this.pob;
            doc.currentJob = _this.currentJob;
            doc.currentAddress = _this.currentAddress;
            // put them back
            return _this.dbservice.usersdb.put(doc);
        }).then(function () {
            nv.setRoot('ProfilePage');
            toasty.setMessage('Update Successful');
        }).catch(function (err) {
            console.error(err + ' error');
            toasty.setMessage('OOPS Please Try Again');
        });
    };
    UpdateProfilePage.prototype.photoChoose = function () {
        var actionSheet = this.actionSheetCtrl.create({
            buttons: [
                {
                    text: 'CAMERA',
                    handler: function () {
                        console.log('Destructive clicked');
                    }
                }, {
                    text: 'GALLERY',
                    handler: function () {
                        console.log('Archive clicked');
                    }
                }
            ]
        });
        actionSheet.present();
    };
    UpdateProfilePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-update-profile',template:/*ion-inline-start:"C:\Users\Munene\Documents\IonicProjects\gkolx\src\pages\update-profile\update-profile.html"*/'<!--\n\n  Generated template for the UpdateProfilePage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar color="primary">\n\n    <ion-title>{{displayName}}</ion-title>\n\n    <ion-buttons end>\n\n      <button ion-button icon-only (click)="updateProfile()">\n\n        <ion-icon name=\'checkmark-circle\'></ion-icon>\n\n      </button>\n\n    </ion-buttons>\n\n  </ion-navbar> \n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content>\n\n\n\n  <img src="{{displayPic}}" (click)="photoChoose()">\n\n\n\n  <ion-list>\n\n\n\n    <ion-item>\n\n      <ion-label fixed>NAME</ion-label>\n\n      <ion-input type="text" value="{{displayName}}" disabled></ion-input>\n\n    </ion-item>\n\n\n\n    <ion-item>\n\n      <ion-label fixed>EMAIL</ion-label>\n\n      <ion-input type="email" value="{{email}}" disabled></ion-input>\n\n    </ion-item>\n\n  \n\n    <ion-item>\n\n      <ion-label fixed>DOB</ion-label>\n\n      <ion-datetime displayFormat="DD/MM/YYYY"  [(ngModel)]="dob"></ion-datetime>\n\n    </ion-item>\n\n    \n\n  \n\n    <ion-item>\n\n      <ion-label fixed>POB</ion-label>\n\n      <ion-input type="text" value="{{pob}}" [(ngModel)]="pob"></ion-input>\n\n    </ion-item>\n\n  \n\n    <ion-item>\n\n      <ion-label fixed>JOB</ion-label>\n\n      <ion-input type="text" value="{{currentJob}}" [(ngModel)]="currentJob"></ion-input>\n\n    </ion-item>\n\n  \n\n    <ion-item>\n\n      <ion-label fixed>ADDRESS</ion-label>\n\n      <ion-input type="text" value="{{currentAddress}}" [(ngModel)]="currentAddress"></ion-input>\n\n    </ion-item>\n\n  \n\n  </ion-list>\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\Munene\Documents\IonicProjects\gkolx\src\pages\update-profile\update-profile.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */], __WEBPACK_IMPORTED_MODULE_3_angularfire2_auth__["a" /* AngularFireAuth */], __WEBPACK_IMPORTED_MODULE_2__providers_db_db__["a" /* DbProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* ActionSheetController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* ToastController */]])
    ], UpdateProfilePage);
    return UpdateProfilePage;
}());

//# sourceMappingURL=update-profile.js.map

/***/ })

});
//# sourceMappingURL=2.js.map