webpackJsonp([8],{

/***/ 502:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfilePageModule", function() { return ProfilePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(61);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__profile__ = __webpack_require__(517);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ProfilePageModule = (function () {
    function ProfilePageModule() {
    }
    ProfilePageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__profile__["a" /* ProfilePage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__profile__["a" /* ProfilePage */]),
            ],
        })
    ], ProfilePageModule);
    return ProfilePageModule;
}());

//# sourceMappingURL=profile.module.js.map

/***/ }),

/***/ 517:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfilePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(61);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_db_db__ = __webpack_require__(147);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_auth_auth__ = __webpack_require__(148);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angularfire2_auth__ = __webpack_require__(62);
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
 * Generated class for the ProfilePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ProfilePage = (function () {
    function ProfilePage(navCtrl, navParams, zone, dbservice, alertCtrl, authservice, afireauth) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.zone = zone;
        this.dbservice = dbservice;
        this.alertCtrl = alertCtrl;
        this.authservice = authservice;
        this.afireauth = afireauth;
    }
    ProfilePage.prototype.profileUpdt = function () {
        this.navCtrl.push('UpdateProfilePage');
    };
    ProfilePage.prototype.ionViewDidLoad = function () {
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
    ProfilePage.prototype.ionViewWillEnter = function () {
    };
    ProfilePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-profile',template:/*ion-inline-start:"C:\Users\Munene\Documents\IonicProjects\gkolx\src\pages\profile\profile.html"*/'<ion-header>\n\n\n\n    <ion-navbar color="primary">\n\n        <ion-title>PROFILE</ion-title>\n\n        <ion-buttons end>\n\n            <button ion-button icon-only (click)="profileUpdt()">\n\n                <ion-icon name=\'create\'></ion-icon>\n\n            </button>\n\n        </ion-buttons>\n\n    </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n<ion-content>\n\n\n\n    <ion-card>\n\n        <ion-item>\n\n            <ion-avatar item-start>\n\n                <img src="{{displayPic}}">\n\n            </ion-avatar>\n\n            <h2>{{displayName}}</h2>\n\n            <p>November 5, 1955</p>\n\n        </ion-item>\n\n    </ion-card>\n\n    <ion-list>\n\n    \n\n        <ion-item>\n\n            <ion-label fixed>Email</ion-label>\n\n            <ion-input type="email" value="{{email}}" disabled></ion-input>\n\n        </ion-item>\n\n    \n\n        <ion-item>\n\n            <ion-label fixed>ID No.</ion-label>\n\n            <ion-input type="number" value="{{nationalID}}" disabled></ion-input>\n\n        </ion-item>\n\n\n\n        <ion-item>\n\n            <ion-label fixed>DOB</ion-label>\n\n            <ion-input type="text" value="{{dob}}" disabled></ion-input>\n\n        </ion-item>\n\n\n\n        <ion-item>\n\n            <ion-label fixed>POB</ion-label>\n\n            <ion-input type="text" value="{{pob}}" disabled></ion-input>\n\n        </ion-item>\n\n\n\n        <ion-item>\n\n            <ion-label fixed>Job</ion-label>\n\n            <ion-input type="text" value="{{currentJob}}" disabled></ion-input>\n\n        </ion-item>\n\n        \n\n        <ion-item>\n\n            <ion-label fixed>Address</ion-label>\n\n            <ion-input type="text" value="{{currentAddress}}" disabled></ion-input>\n\n        </ion-item>\n\n    \n\n    </ion-list>\n\n    \n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\Munene\Documents\IonicProjects\gkolx\src\pages\profile\profile.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["NgZone"], __WEBPACK_IMPORTED_MODULE_2__providers_db_db__["a" /* DbProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */], __WEBPACK_IMPORTED_MODULE_3__providers_auth_auth__["a" /* AuthProvider */], __WEBPACK_IMPORTED_MODULE_4_angularfire2_auth__["a" /* AngularFireAuth */]])
    ], ProfilePage);
    return ProfilePage;
}());

//# sourceMappingURL=profile.js.map

/***/ })

});
//# sourceMappingURL=8.js.map