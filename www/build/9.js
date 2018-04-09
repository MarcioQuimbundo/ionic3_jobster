webpackJsonp([9],{

/***/ 501:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPageModule", function() { return LoginPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(61);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__login__ = __webpack_require__(516);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var LoginPageModule = (function () {
    function LoginPageModule() {
    }
    LoginPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__login__["a" /* LoginPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__login__["a" /* LoginPage */]),
            ],
        })
    ], LoginPageModule);
    return LoginPageModule;
}());

//# sourceMappingURL=login.module.js.map

/***/ }),

/***/ 516:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(61);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_auth_auth__ = __webpack_require__(148);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_css_animator__ = __webpack_require__(297);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_css_animator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_css_animator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__register_register__ = __webpack_require__(296);
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
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var LoginPage = (function () {
    function LoginPage(navCtrl, navParams, authservice, animationService, toastCtrl, menuCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.authservice = authservice;
        this.toastCtrl = toastCtrl;
        this.menuCtrl = menuCtrl;
        this.credentials = {};
        this.animator = animationService.builder();
        // firebase.auth().onAuthStateChanged(function (user) {
        //   if (user) {
        //     this.navCtrl.setRoot('TabsPage');
        //   } else {
        //     let toast = this.toastCtrl.create({
        //       message: 'Please Login To Proceed',
        //       duration: 3000,
        //       position: 'bottom'
        //     });
        //     toast.present();
        //   }
        // });
    }
    LoginPage.prototype.ionViewDidLoad = function () {
    };
    LoginPage.prototype.animateElem = function () {
        this.animator.setType('bounceIn').show(this.myElem.nativeElement);
    };
    LoginPage.prototype.login = function () {
        var _this = this;
        this.authservice.login(this.credentials).then(function (res) {
            if (!res.code)
                _this.navCtrl.setRoot('TabsPage');
            else
                alert(res);
        });
    };
    LoginPage.prototype.resetPassword = function () {
        this.navCtrl.push('ResetpasswordPage');
    };
    LoginPage.prototype.signup = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_4__register_register__["a" /* RegisterPage */]);
    };
    LoginPage.prototype.ionViewWillEnter = function () {
        this.menuCtrl.swipeEnable(false);
    };
    LoginPage.prototype.ionViewDidLeave = function () {
        this.menuCtrl.swipeEnable(true);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('myElement'),
        __metadata("design:type", Object)
    ], LoginPage.prototype, "myElem", void 0);
    LoginPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-login',template:/*ion-inline-start:"C:\Users\Munene\Documents\IonicProjects\gkolx\src\pages\login\login.html"*/'<!--\n\n  Generated template for the LoginPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n</ion-header>\n\n\n\n<ion-content padding class="background">\n\n\n\n  <h1>Welcome Home</h1>\n\n\n\n  <ion-card #myElement>\n\n    <ion-card-header>\n\n      Login\n\n    </ion-card-header>\n\n\n\n    <ion-card-content>\n\n      <div class="spacer" style="height: 5px;"></div>\n\n      <ion-list no-lines>\n\n        <ion-item>\n\n          <ion-input type="email" placeholder="Email" [(ngModel)]="credentials.email" required></ion-input>\n\n        </ion-item>\n\n\n\n        <div class="spacer" style="height: 5px;"></div>\n\n\n\n        <ion-item>\n\n          <ion-input type="password" placeholder="Password" [(ngModel)]="credentials.password" required></ion-input>\n\n        </ion-item>\n\n\n\n        <div class="spacer" style="height: 5px;"></div>\n\n\n\n        <a (click)="resetPassword()">Forgot Login Details?</a>\n\n\n\n        <div class="spacer" style="height: 5px;"></div>\n\n\n\n        <button ion-button block round outline color="light" (click)="login()">Login</button>\n\n\n\n        <div class="spacer" style="height: 5px;"></div>\n\n\n\n        <p>OR</p>\n\n\n\n        <div class="spacer" style="height: 5px;"></div>\n\n\n\n\n\n        <button ion-button clear full color="light" (click)="signup()">Dont have an account?</button>\n\n      </ion-list>\n\n    </ion-card-content>\n\n  </ion-card>\n\n\n\n</ion-content>'/*ion-inline-end:"C:\Users\Munene\Documents\IonicProjects\gkolx\src\pages\login\login.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_auth_auth__["a" /* AuthProvider */], __WEBPACK_IMPORTED_MODULE_3_css_animator__["AnimationService"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* ToastController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* MenuController */]])
    ], LoginPage);
    return LoginPage;
}());

//# sourceMappingURL=login.js.map

/***/ })

});
//# sourceMappingURL=9.js.map