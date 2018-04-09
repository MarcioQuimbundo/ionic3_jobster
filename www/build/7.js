webpackJsonp([7],{

/***/ 506:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResetpasswordPageModule", function() { return ResetpasswordPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(61);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__resetpassword__ = __webpack_require__(520);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ResetpasswordPageModule = (function () {
    function ResetpasswordPageModule() {
    }
    ResetpasswordPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__resetpassword__["a" /* ResetpasswordPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__resetpassword__["a" /* ResetpasswordPage */]),
            ],
        })
    ], ResetpasswordPageModule);
    return ResetpasswordPageModule;
}());

//# sourceMappingURL=resetpassword.module.js.map

/***/ }),

/***/ 520:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ResetpasswordPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(61);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_auth_auth__ = __webpack_require__(148);
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
 * Generated class for the ResetpasswordPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ResetpasswordPage = (function () {
    function ResetpasswordPage(navCtrl, navParams, authservice, alertCtrl, menuCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.authservice = authservice;
        this.alertCtrl = alertCtrl;
        this.menuCtrl = menuCtrl;
    }
    ResetpasswordPage.prototype.ionViewDidLoad = function () {
    };
    ResetpasswordPage.prototype.reset = function () {
        var alert = this.alertCtrl.create({
            buttons: ['Ok']
        });
        this.authservice.passwordreset(this.email).then(function (res) {
            if (res.success) {
                alert.setTitle('Email Sent');
                alert.setSubTitle('Please follow the instructions in the email to reset your password');
            }
            else {
                alert.setTitle('Failed');
            }
        });
    };
    ResetpasswordPage.prototype.goback = function () {
        this.navCtrl.setRoot('LoginPage');
    };
    ResetpasswordPage.prototype.ionViewWillEnter = function () {
        this.menuCtrl.swipeEnable(false);
    };
    ResetpasswordPage.prototype.ionViewDidLeave = function () {
        this.menuCtrl.swipeEnable(true);
    };
    ResetpasswordPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-resetpassword',template:/*ion-inline-start:"C:\Users\Munene\Documents\IonicProjects\gkolx\src\pages\resetpassword\resetpassword.html"*/'<!--\n\n  Generated template for the ResetpasswordPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-content padding class="background">\n\n\n\n  <ion-card>\n\n    <ion-card-header>\n\n      Reset Password\n\n    </ion-card-header>\n\n\n\n    <ion-card-content>\n\n      <div class="spacer" style="height: 5px;"></div>\n\n      <ion-list no-lines>\n\n        <ion-item>\n\n          <ion-input type="email" placeholder="Email" [(ngModel)]="email"></ion-input>\n\n        </ion-item>\n\n\n\n        <div class="spacer" style="height: 5px;"></div>\n\n\n\n        <button ion-button block round outline color="light" (click)="reset()">Reset Password</button>\n\n\n\n        <div class="spacer" style="height: 5px;"></div>\n\n\n\n        <p>OR</p>\n\n\n\n        <div class="spacer" style="height: 5px;"></div>\n\n\n\n        <button ion-button clear full color="light" (click)="goback()">Go Back</button>\n\n      </ion-list>\n\n    </ion-card-content>\n\n  </ion-card>\n\n\n\n</ion-content>'/*ion-inline-end:"C:\Users\Munene\Documents\IonicProjects\gkolx\src\pages\resetpassword\resetpassword.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_auth_auth__["a" /* AuthProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* MenuController */]])
    ], ResetpasswordPage);
    return ResetpasswordPage;
}());

//# sourceMappingURL=resetpassword.js.map

/***/ })

});
//# sourceMappingURL=7.js.map