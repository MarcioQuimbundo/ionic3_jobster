webpackJsonp([6],{

/***/ 507:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SellPageModule", function() { return SellPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(61);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__sell__ = __webpack_require__(521);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var SellPageModule = (function () {
    function SellPageModule() {
    }
    SellPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__sell__["a" /* SellPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__sell__["a" /* SellPage */]),
            ],
        })
    ], SellPageModule);
    return SellPageModule;
}());

//# sourceMappingURL=sell.module.js.map

/***/ }),

/***/ 521:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SellPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(61);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_imghandler_imghandler__ = __webpack_require__(298);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_items_items__ = __webpack_require__(299);
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
 * Generated class for the SellPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var SellPage = (function () {
    function SellPage(navCtrl, navParams, loadingCtrl, imgservice, zone, itemservice, toastCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.loadingCtrl = loadingCtrl;
        this.imgservice = imgservice;
        this.zone = zone;
        this.itemservice = itemservice;
        this.toastCtrl = toastCtrl;
        this.imgurl = 'https://firebasestorage.googleapis.com/v0/b/myapp-4eadd.appspot.com/o/chatterplace.png?alt=media&token=e51fa887-bfc6-48ff-87c6-e2c61976534e';
        this.sell = {
            title: '',
            description: '',
            price: '',
        };
    }
    SellPage.prototype.ionViewDidLoad = function () {
    };
    SellPage.prototype.chooseimage = function () {
        var _this = this;
        var loader = this.loadingCtrl.create({
            content: 'Resolving Image'
        });
        loader.present();
        this.imgservice.uploaditemimage().then(function (uploadedurl) {
            loader.dismiss();
            _this.zone.run(function () {
                _this.imgurl = uploadedurl;
            });
        }).catch(function (err) {
            loader.dismiss();
            console.log(err);
        });
    };
    SellPage.prototype.addItem = function () {
        var _this = this;
        var toaster = this.toastCtrl.create({
            duration: 3000,
            position: 'bottom'
        });
        if (this.sell.title == '' || this.sell.description == '' || this.sell.price == '') {
            toaster.setMessage('All fields are required');
            toaster.present();
        }
        else {
            var loader_1 = this.loadingCtrl.create({
                content: 'Please wait'
            });
            loader_1.present();
            this.itemservice.additem(this.sell, this.imgurl).then(function (res) {
                loader_1.dismiss();
                if (res.success) {
                    toaster.setMessage('Item added successfully');
                    toaster.present();
                    _this.navCtrl.push('TabsPage');
                }
                else {
                    alert('Error' + res);
                }
            });
        }
    };
    SellPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-sell',template:/*ion-inline-start:"C:\Users\Munene\Documents\IonicProjects\gkolx\src\pages\sell\sell.html"*/'<!--\n\n  Generated template for the SellPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>Sell</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content>\n\n\n\n  <ion-item>\n\n    <img src="{{imgurl}}" (click)="chooseimage()" />\n\n  </ion-item>\n\n\n\n  <ion-list no-lines>\n\n    <ion-item>\n\n      <ion-input type="text" placeholder="Title" [(ngModel)]="sell.title" required></ion-input>\n\n    </ion-item>\n\n  \n\n    <div class="spacer" style="height: 5px;"></div>\n\n  \n\n    <ion-item>\n\n      <ion-input type="text" placeholder="Description" [(ngModel)]="sell.description" required></ion-input>\n\n    </ion-item>\n\n  \n\n    <div class="spacer" style="height: 5px;"></div>\n\n\n\n    <ion-item>\n\n      <ion-input type="number" placeholder="Price" [(ngModel)]="sell.price" required></ion-input>\n\n    </ion-item>\n\n  \n\n    <button ion-button block round outline color="light" (click)="addItem()">Sell</button>\n\n  \n\n  </ion-list>\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\Munene\Documents\IonicProjects\gkolx\src\pages\sell\sell.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_2__providers_imghandler_imghandler__["a" /* ImghandlerProvider */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["NgZone"], __WEBPACK_IMPORTED_MODULE_3__providers_items_items__["a" /* ItemsProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* ToastController */]])
    ], SellPage);
    return SellPage;
}());

//# sourceMappingURL=sell.js.map

/***/ })

});
//# sourceMappingURL=6.js.map