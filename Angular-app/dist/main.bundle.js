webpackJsonp(["main"],{

/***/ "../../../../../src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__home_home_component__ = __webpack_require__("../../../../../src/app/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__set_set_component__ = __webpack_require__("../../../../../src/app/set/set.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__setCamera_setCamera_component__ = __webpack_require__("../../../../../src/app/setCamera/setCamera.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__frequent_frequent_component__ = __webpack_require__("../../../../../src/app/frequent/frequent.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__settings_settings_component__ = __webpack_require__("../../../../../src/app/settings/settings.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__user_detail_user_detail_component__ = __webpack_require__("../../../../../src/app/user-detail/user-detail.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__setCamera_shop_shop_component__ = __webpack_require__("../../../../../src/app/setCamera/shop/shop.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__setCamera_cameras_cameras_component__ = __webpack_require__("../../../../../src/app/setCamera/cameras/cameras.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pagenotfound_pagenotfound_component__ = __webpack_require__("../../../../../src/app/pagenotfound/pagenotfound.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__camera_detail_camera_detail_component__ = __webpack_require__("../../../../../src/app/camera-detail/camera-detail.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};












var routes = [
    {
        path: 'home',
        children: [
            {
                path: '',
                component: __WEBPACK_IMPORTED_MODULE_0__home_home_component__["a" /* HomeComponent */]
            },
            {
                path: 'user-detail/:id',
                component: __WEBPACK_IMPORTED_MODULE_5__user_detail_user_detail_component__["a" /* UserDetailComponent */]
            },
            {
                path: 'camera-detail/:id',
                component: __WEBPACK_IMPORTED_MODULE_11__camera_detail_camera_detail_component__["a" /* CameraDetailComponent */]
            }
        ]
    },
    { path: 'setCustomer',
        children: [
            {
                path: '',
                component: __WEBPACK_IMPORTED_MODULE_1__set_set_component__["a" /* SetComponent */]
            },
            {
                path: 'user-detail/:id',
                component: __WEBPACK_IMPORTED_MODULE_5__user_detail_user_detail_component__["a" /* UserDetailComponent */]
            }
        ]
    },
    { path: 'setCamera',
        component: __WEBPACK_IMPORTED_MODULE_2__setCamera_setCamera_component__["a" /* SetCameraComponent */],
        children: [
            {
                path: '',
                pathMatch: 'full',
                redirectTo: '/setCamera/(setCamera:cameras)'
            },
            {
                path: 'shop',
                component: __WEBPACK_IMPORTED_MODULE_6__setCamera_shop_shop_component__["a" /* ShopComponent */],
                outlet: 'setCamera'
            },
            {
                path: 'cameras',
                component: __WEBPACK_IMPORTED_MODULE_7__setCamera_cameras_cameras_component__["a" /* CamerasComponent */],
                outlet: 'setCamera',
            }
        ],
    },
    { path: 'frequent', component: __WEBPACK_IMPORTED_MODULE_3__frequent_frequent_component__["a" /* FrequentComponent */] },
    { path: 'settings', component: __WEBPACK_IMPORTED_MODULE_4__settings_settings_component__["a" /* SettingsComponent */] },
    { path: 'user-detail/:id', component: __WEBPACK_IMPORTED_MODULE_5__user_detail_user_detail_component__["a" /* UserDetailComponent */] },
    { path: 'camera-detail/:id', component: __WEBPACK_IMPORTED_MODULE_11__camera_detail_camera_detail_component__["a" /* CameraDetailComponent */] },
    { path: '', pathMatch: 'full', redirectTo: '/home' },
    { path: '**', component: __WEBPACK_IMPORTED_MODULE_8__pagenotfound_pagenotfound_component__["a" /* PagenotfoundComponent */] }
];
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_9__angular_core__["I" /* NgModule */])({
            imports: [__WEBPACK_IMPORTED_MODULE_10__angular_router__["c" /* RouterModule */].forRoot(routes)],
            exports: [__WEBPACK_IMPORTED_MODULE_10__angular_router__["c" /* RouterModule */]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\n<div style=\"text-align:center\">\n  <h1>\n    {{ title }}\n  </h1>\n\n\n<button class=\"btn btn-secondary\" [routerLink]=\"['home']\"><i class=\"fa fa-home\"></i>Home </button>\n<button class=\"btn btn-secondary\" [routerLink]=\"['setCustomer']\">Set Customers</button>\n<button class=\"btn btn-secondary\" [routerLink]=\"['setCamera']\">Set Cameras</button>\n<button class=\"btn btn-secondary\" [routerLink]=\"['frequent']\">Frequent Visitors</button>\n<button  class=\"btn btn-secondary\" [routerLink]=\"['settings']\">Settings</button>\n\n<router-outlet></router-outlet>\n"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__http_service__ = __webpack_require__("../../../../../src/app/http.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AppComponent = (function () {
    function AppComponent(_route, _router, _httpService) {
        this._route = _route;
        this._router = _router;
        this._httpService = _httpService;
        this.title = 'Sense in Silico Black-Book';
    }
    AppComponent.prototype.ngOnInit = function () {
        // this._route.params.subscribe((params: Params) => console.log(params['id'])); // to attain a parameter from the current URL
    };
    AppComponent.prototype.goHome = function () {
        this._router.navigate(['/home']);
        // routing the user to a different url from within a component or service, you may use the Router module to redirect
    };
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("../../../../../src/app/app.component.html"),
            styles: [__webpack_require__("../../../../../src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_2__http_service__["a" /* HttpService */]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_routing_module__ = __webpack_require__("../../../../../src/app/app-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__home_home_component__ = __webpack_require__("../../../../../src/app/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__set_set_component__ = __webpack_require__("../../../../../src/app/set/set.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pagenotfound_pagenotfound_component__ = __webpack_require__("../../../../../src/app/pagenotfound/pagenotfound.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__setCamera_setCamera_component__ = __webpack_require__("../../../../../src/app/setCamera/setCamera.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__frequent_frequent_component__ = __webpack_require__("../../../../../src/app/frequent/frequent.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__settings_settings_component__ = __webpack_require__("../../../../../src/app/settings/settings.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__user_detail_user_detail_component__ = __webpack_require__("../../../../../src/app/user-detail/user-detail.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__http_service__ = __webpack_require__("../../../../../src/app/http.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__camera_detail_camera_detail_component__ = __webpack_require__("../../../../../src/app/camera-detail/camera-detail.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__setCamera_shop_shop_component__ = __webpack_require__("../../../../../src/app/setCamera/shop/shop.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__setCamera_cameras_cameras_component__ = __webpack_require__("../../../../../src/app/setCamera/cameras/cameras.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


















var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_4__home_home_component__["a" /* HomeComponent */],
                __WEBPACK_IMPORTED_MODULE_5__set_set_component__["a" /* SetComponent */],
                __WEBPACK_IMPORTED_MODULE_6__pagenotfound_pagenotfound_component__["a" /* PagenotfoundComponent */],
                __WEBPACK_IMPORTED_MODULE_7__setCamera_setCamera_component__["a" /* SetCameraComponent */],
                __WEBPACK_IMPORTED_MODULE_8__frequent_frequent_component__["a" /* FrequentComponent */],
                __WEBPACK_IMPORTED_MODULE_9__settings_settings_component__["a" /* SettingsComponent */],
                __WEBPACK_IMPORTED_MODULE_10__user_detail_user_detail_component__["a" /* UserDetailComponent */],
                __WEBPACK_IMPORTED_MODULE_15__camera_detail_camera_detail_component__["a" /* CameraDetailComponent */],
                __WEBPACK_IMPORTED_MODULE_16__setCamera_shop_shop_component__["a" /* ShopComponent */],
                __WEBPACK_IMPORTED_MODULE_17__setCamera_cameras_cameras_component__["a" /* CamerasComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__app_routing_module__["a" /* AppRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_11__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_14__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_12__angular_http__["a" /* HttpModule */]
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_13__http_service__["a" /* HttpService */]],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "../../../../../src/app/camera-detail/camera-detail.component.html":
/***/ (function(module, exports) {

module.exports = "\n<div class=\"info\">\n  <br>\n    <h4><b> Camera Details</b></h4>\n    <h5><b> ID:</b> {{camera._id}}</h5>\n    <h5><b> functional since:</b>  {{camera.createdAt | date:'y, MMM dd,  h:mm:ss a'}} </h5>\n    <h5><b> mac address: </b> {{camera.mac_addr}}</h5>\n    <h5><b> location: </b> {{camera.location}}</h5>\n    <h5> <b> Records entered: </b> {{camera._visits.length}} </h5>\n    <br>\n    <h4> <b> Shop Details of Camera </b></h4>\n    <h5><b> Brand: </b> {{camera._shop.brand}} </h5>\n    <h5><b> Branch:</b> {{camera._shop.branch}}</h5>\n    <h5><b> Address:</b> {{camera._shop.address}}</h5>\n    <h5><b> Updated:</b> {{camera._shop.createdAt | date:'y, MMM dd,  h:mm:ss a'}} </h5>\n    <div class=\"row\">\n      <div class=\"col-sm-12 text-center\">\n        <form (submit)=\"editShow(camera)\" id=\"btnAddEdit\">\n          <button type=\"submit\" class=\"btn btn-secondary btn-md center-block\">Add/Edit Location</button>\n        </form>\n        <form (submit)=\"associationShow(camera)\" id=\"btnAllocate\">\n          <button  type=\"submit\"  class=\"btn btn-secondary\">Allocate Shop </button>\n        </form>\n\n      </div>\n    </div>\n</div>\n<br>\n<!-- Edit Camera Detail -->\n<div *ngIf=\"camera.showEditForm\">\n  <form (submit)=\"edit(camera)\" id=\"showEditForm\">\n      <label> Location:\n       <input type=\"text\" name=\"editCamera.location\" [(ngModel)]=\"camera.location\">\n      </label>\n      <br>\n  </form>\n  <div class=\"row\">\n      <div class=\"col-sm-12 text-center\">\n          <button id=\"btnSave\" type=\"submit\" class=\"btn btn-primary btn-md center-block\" form=\"showEditForm\">Save</button> \n          <form id=\"btnCancel\" (submit)=\"cancelShow(camera)\">\n              <button id=\"btnCancel\" type=\"submit\" class=\"btn btn-danger btn-md center-block\">Cancel</button>\n          </form> \n       </div>\n  </div>\n</div>\n<!-- Edit ShopCam. Associations -->\n  <!-- Remove Association -->\n<div class='setCamera' *ngIf='showAssociation'>\n  <div class=\"row\">\n    <div class=\"col-sm-12 text-center\">\n      <p><b>Current Camera Allocated:</b> {{camera._shop.brand}} - {{camera._shop.branch}} - {{camera._shop.address}}</p>\n      <form (submit)=\"removeAllocation(camera)\">\n        <button type=\"submit\" class=\"btn btn-danger btn-md center-block\">Remove Camera from Shop</button>\n      </form>\n      <br>\n    </div>\n  </div>\n  <!-- Set Association -->\n  <div class=\"errorMsg\" *ngIf=\"message\">\n    <p>{{message}}</p>\n  </div>\n  <form (submit)=\"association(camera)\" id=\"showAssociation\">\n    <label> Shop allocation:\n      <select name=\"editCamera._shop\" [(ngModel)]=\"camera._shop\">\n          <option *ngFor=\"let shop of shops\" type=\"text\" value=\"{{shop._id}}\">{{shop.brand}}: {{shop.branch}}</option>\n        </select>\n    </label>\n  </form>\n  <div class=\"row\">\n      <div class=\"col-sm-12 text-center\">\n        <button id=\"btnSave\" type=\"submit\" class=\"btn btn-primary btn-md center-block\" form=\"showAssociation\">Save</button> \n        <form id=\"btnCancel\" (submit)=\"cancelShowAssociation(camera)\">\n            <button id=\"btnCancel\" type=\"submit\" class=\"btn btn-danger btn-md center-block\">Cancel</button>\n        </form> \n      </div>\n  </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/camera-detail/camera-detail.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "#btnSave,\n#btnCancel {\n  display: inline-block;\n  vertical-align: top;\n  width: 100px;\n  margin: 2px; }\n\n#btnAddEdit,\n#btnAllocate {\n  display: inline-block;\n  margin: 2px; }\n\n.errorMsg {\n  color: red; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/camera-detail/camera-detail.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CameraDetailComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__http_service__ = __webpack_require__("../../../../../src/app/http.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var CameraDetailComponent = (function () {
    function CameraDetailComponent(_route, _router, _httpService) {
        this._route = _route;
        this._router = _router;
        this._httpService = _httpService;
    }
    CameraDetailComponent.prototype.ngOnInit = function () {
        this.getCamera();
        this.getShops();
        this.showAssociation = false;
    };
    CameraDetailComponent.prototype.getCamera = function () {
        var _this = this;
        var id = this._route.snapshot.params['id'];
        console.log('this is the id page: ', this.cameraId);
        this.cameraId = id;
        var observable = this._httpService.getCamera(id);
        observable.subscribe(function (data) {
            console.log('this is the data from service: ', data);
            _this.camera = data;
        });
    };
    CameraDetailComponent.prototype.getShops = function () {
        var _this = this;
        var shopObservables = this._httpService.shareShops();
        shopObservables.subscribe(function (data) {
            console.log('this is the data from shareShops: ', data);
            _this.shops = data;
        });
    };
    CameraDetailComponent.prototype.editShow = function (camera) {
        console.log('this is the camera to edit/add: ', camera);
        camera.showEditForm = true;
        this.showAssociation = false;
    };
    CameraDetailComponent.prototype.cancelShow = function (camera) {
        camera.showEditForm = false;
        this.showAssociation = false;
    };
    CameraDetailComponent.prototype.associationShow = function (camera) {
        this.showAssociation = true;
        camera.showEditForm = false;
    };
    CameraDetailComponent.prototype.cancelShowAssociation = function (camera) {
        this.showAssociation = false;
        camera.showEditForm = false;
    };
    CameraDetailComponent.prototype.edit = function (camera) {
        var _this = this;
        console.log('this is the camera info to add/edit: ', camera);
        var observable = this._httpService.editCamera(camera);
        camera.showEditForm = false;
        observable.subscribe(function (data) {
            console.log('Got data from editCamera Service: ', data);
            _this.message = data['message'];
            _this.getCamera();
            _this.getShops();
        });
    };
    CameraDetailComponent.prototype.association = function (camera) {
        var _this = this;
        var camId = this._route.snapshot.params['id'];
        console.log('this is the id page: ', camId);
        console.log('this is the shop id passing to service: ', camera._shop);
        var cameraObservable = this._httpService.setCamera(camera);
        cameraObservable.subscribe(function (data) {
            console.log('data coming from setting Camera: ', data);
            _this.message = data['message'];
            _this.getShops();
        });
    };
    CameraDetailComponent.prototype.removeAllocation = function (camera) {
        var _this = this;
        console.log('this is the Camera Detail to remove: ', camera);
        var cameraObservable = this._httpService.removeCameraAssociation(camera);
        cameraObservable.subscribe(function (data) {
            console.log('data back from removing CamAssociation:', data);
            _this.message = data['message'];
            _this.getCamera();
            _this.getShops();
        });
    };
    CameraDetailComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-camera-detail',
            template: __webpack_require__("../../../../../src/app/camera-detail/camera-detail.component.html"),
            styles: [__webpack_require__("../../../../../src/app/camera-detail/camera-detail.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_1__http_service__["a" /* HttpService */]])
    ], CameraDetailComponent);
    return CameraDetailComponent;
}());



/***/ }),

/***/ "../../../../../src/app/frequent/frequent.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/frequent/frequent.component.html":
/***/ (function(module, exports) {

module.exports = "<div>\n    <h2>Sell ShintoCoins</h2>\n    <h4>Current Shinto Value: ${{numbers}}.00</h4>\n    <h4>Number of ShintoCoins Owned: {{coins}}</h4>\n    <form (submit)='sell()'>\n        <input type=\"number\" name=\"sellNum\" [(ngModel)]=\"sellNum\">\n        <button type=\"submit\">Sell</button>\n    </form> \n    <p *ngIf='insufficient' style=\"color:red\">{{message}}</p>\n  </div>\n  "

/***/ }),

/***/ "../../../../../src/app/frequent/frequent.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FrequentComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__http_service__ = __webpack_require__("../../../../../src/app/http.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var FrequentComponent = (function () {
    function FrequentComponent(_httpService) {
        this._httpService = _httpService;
        this.sellNum = 0;
        this.insufficient = false;
        this.message = '';
    }
    FrequentComponent.prototype.ngOnInit = function () {
        this.getNumbers();
    };
    FrequentComponent.prototype.getNumbers = function () {
        this.numbers = this._httpService.shareVisits();
    };
    FrequentComponent.prototype.sell = function () {
        console.log('this is the buyNum submited: ', this.sellNum);
        if (this.sellNum < 0) {
            this.insufficient = true;
            this.message = 'sell cannot be negative';
        }
        else if (this.sellNum <= this.coins) {
            this._httpService.sell(this.sellNum);
            this.insufficient = false;
            this.getNumbers();
            this.sellNum = 0;
        }
        else {
            this.insufficient = true;
            this.message = 'insufficient coins...';
        }
    };
    FrequentComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-frequent',
            template: __webpack_require__("../../../../../src/app/frequent/frequent.component.html"),
            styles: [__webpack_require__("../../../../../src/app/frequent/frequent.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__http_service__["a" /* HttpService */]])
    ], FrequentComponent);
    return FrequentComponent;
}());



/***/ }),

/***/ "../../../../../src/app/home/home.component.html":
/***/ (function(module, exports) {

module.exports = "\n<div class=\"jumbotron\">\n  <h2>\n    Black Book\n  </h2>\n  <h4>\n    Welcome to Black-Book, a tool by Sense in Silico, which helps you recognize important customers entering your stores.\n  </h4>\n</div>\n<div>\n  <h3>Visit Logs</h3>\n  <div>\n    <button *ngIf =\"stopped ; else continue\" type=\"button\" class=\"btn btn-danger\" (click)= \"stop()\">Stop Updates</button>\n    <ng-template #continue>\n      <button type=\"button\" class=\"btn btn-success\" (click)= \"resume()\">Continue Updates</button>\n    </ng-template>\n  </div>\n\n  <div class=\"visitLogs\" *ngFor= \"let visit of visits\">\n      <b class=\"text-success\" *ngIf=\"visit._visitor.vip ; else blacklist\"> \n          *** VIP Visitor: ' \n          <a [routerLink]=\"['user-detail', visit._visitor._id]\"> \n            <span *ngIf= \"visit._visitor.first_name; else otherUser\"> \n              {{visit._visitor.first_name}} {{visit._visitor.last_name}} \n            </span> \n            <ng-template #otherUser> \n              {{visit._visitor._id}}  \n            </ng-template> \n          </a>' \n          has entered camera location: \n          <a [routerLink]= \"['camera-detail', visit._camera._id]\"> \n              <span *ngIf= \"visit._camera.location; else otherCam\"> \n                  {{visit._camera.location}}\n              </span> \n              <ng-template #otherCam> \n                {{visit._camera.mac_addr}}\n              </ng-template> \n          </a>  \n          on {{visit.visited | date:'y, MMM dd,  h:mm:ss a'}} ***\n    </b>\n    <ng-template #blacklist>\n        <b class=\"text-danger\" *ngIf=\"visit._visitor.blacklist ; else normal\"> \n            ***** Blacklisted Visitor: ' \n            <a [routerLink]=\"['user-detail', visit._visitor._id]\"> \n              <span *ngIf= \"visit._visitor.first_name; else otherUser\"> \n                {{visit._visitor.first_name}} {{visit._visitor.last_name}} \n              </span> \n              <ng-template #otherUser> \n                {{visit._visitor._id}}  \n              </ng-template> \n            </a>' \n            has entered camera location: \n            <a [routerLink]=\"['camera-detail', visit._camera._id]\"> \n                <span *ngIf= \"visit._camera.location; else otherCam\"> \n                    {{visit._camera.location}}\n                </span> \n                <ng-template #otherCam> \n                  {{visit._camera.mac_addr}}\n                </ng-template> \n            </a>  \n            on {{visit.visited | date:'y, MMM dd,  h:mm:ss a'}} *****\n      </b>\n    </ng-template>\n    <ng-template #normal>\n      <b> \n        Visitor: ' \n        <a [routerLink]=\"['user-detail', visit._visitor._id]\"> \n          <span *ngIf= \"visit._visitor.first_name; else otherUser\"> \n            {{visit._visitor.first_name}} {{visit._visitor.last_name}} \n          </span> \n          <ng-template #otherUser> \n            {{visit._visitor._id}}  \n          </ng-template> \n        </a>' \n        has entered camera location: \n        <a [routerLink]=\"['camera-detail', visit._camera._id]\"> \n            <span *ngIf= \"visit._camera.location; else otherCam\"> \n                {{visit._camera.location}}\n            </span> \n            <ng-template #otherCam> \n              {{visit._camera.mac_addr}}\n            </ng-template> \n        </a>  \n        on {{visit.visited | date:'y, MMM dd,  h:mm:ss a'}} \n      </b>\n    </ng-template>\n  </div>\n</div>\n\n<router-outlet></router-outlet>"

/***/ }),

/***/ "../../../../../src/app/home/home.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".container {\n  border: 10px solid blue;\n  height: 500px;\n  margin-top: 20px;\n  padding-left: 10px;\n  text-align: left; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/home/home.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__http_service__ = __webpack_require__("../../../../../src/app/http.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Rx__ = __webpack_require__("../../../../rxjs/_esm5/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_observable_throw__ = __webpack_require__("../../../../rxjs/_esm5/add/observable/throw.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var HomeComponent = (function () {
    function HomeComponent(_route, _router, _httpService) {
        this._route = _route;
        this._router = _router;
        this._httpService = _httpService;
        this.Refresh = __WEBPACK_IMPORTED_MODULE_3_rxjs_Rx__["a" /* Observable */].interval(2000); // set refresh rate
        this.stopped = true;
    }
    HomeComponent.prototype.ngOnInit = function () {
        this.getVisits();
        this.resume();
        // this.subscription = this.Refresh.subscribe(x => this.getVisits()); // auto updates
    };
    HomeComponent.prototype.ngOnDestroy = function () {
        this.stop();
    };
    HomeComponent.prototype.getVisits = function () {
        var _this = this;
        var visitsObservable = this._httpService.shareVisits();
        visitsObservable.subscribe(function (data) {
            _this.visits = data['data'];
            console.log('this is the data: ', _this.visits);
        });
    };
    HomeComponent.prototype.stop = function () {
        console.log('subscription stopped');
        this.subscription.unsubscribe();
        this.stopped = false;
    };
    HomeComponent.prototype.resume = function () {
        var _this = this;
        console.log('subscription resumed');
        this.subscription = this.Refresh.subscribe(function (x) { return _this.getVisits(); });
        this.stopped = true;
    };
    HomeComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-home',
            template: __webpack_require__("../../../../../src/app/home/home.component.html"),
            styles: [__webpack_require__("../../../../../src/app/home/home.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_2__http_service__["a" /* HttpService */]])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "../../../../../src/app/http.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HttpService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var HttpService = (function () {
    function HttpService(_http) {
        this._http = _http;
        this.value = 0;
        this.coins = 0;
        this.alltransactions = [];
    }
    // fetch all
    HttpService.prototype.shareVisits = function () {
        return this._http.get('/visits');
    };
    HttpService.prototype.shareCameras = function () {
        return this._http.get('/cameras');
    };
    HttpService.prototype.shareUsers = function () {
        return this._http.get('/users');
    };
    HttpService.prototype.shareShops = function () {
        return this._http.get('/shops');
    };
    // users
    HttpService.prototype.getUser = function (userId) {
        console.log('request from user-detail component:', userId);
        return this._http.get('/users/' + userId);
    };
    HttpService.prototype.editUser = function (editUser) {
        console.log('request to server: ', editUser);
        return this._http.patch('/users/' + editUser._id, editUser);
    };
    HttpService.prototype.editStatus = function (editStatus) {
        console.log('request to server: ', editStatus);
        return this._http.put('/users/' + editStatus._id, editStatus);
    };
    // cameras
    HttpService.prototype.getCamera = function (cameraId) {
        console.log('request from camera-detail component:', cameraId);
        return this._http.get('/cameras/' + cameraId);
    };
    HttpService.prototype.editCamera = function (editCamera) {
        console.log('request to server: ', editCamera);
        return this._http.patch('/cameras/' + editCamera._id, editCamera);
    };
    HttpService.prototype.setCamera = function (setCamera) {
        console.log('request to server: ', setCamera);
        return this._http.put('/cameras/' + setCamera._id, setCamera);
    };
    HttpService.prototype.removeCameraAssociation = function (camera) {
        console.log('request to server: ', camera);
        return this._http.put('/shops/' + camera._shop, camera);
    };
    // shops
    HttpService.prototype.addShop = function (newShop) {
        return this._http.post('/shops', newShop);
    };
    HttpService.prototype.deleteShop = function (shopId) {
        return this._http.delete('/shops/' + shopId);
    };
    // old code to get rid of:
    HttpService.prototype.showTransactions = function () {
        console.log('pulling all transactions: ', this.alltransactions);
        return this.alltransactions;
    };
    HttpService.prototype.mine = function () {
        this.value++;
        console.log('value in service added: ', this.value);
        this.alltransactions.push({ transId: Math.floor(Math.random() * 10000), action: 'Mined', amount: 1, value: this.value });
    };
    HttpService.prototype.buy = function (num) {
        console.log('number of coins added: ', num);
        this.coins += num;
        this.value -= num;
        this.alltransactions.push({ transId: Math.floor(Math.random() * 10000), action: 'Bought', amount: num, value: this.value });
    };
    HttpService.prototype.sell = function (num) {
        console.log('number of coins deducted: ', num);
        this.coins -= num;
        this.value += num;
        this.alltransactions.push({ transId: Math.floor(Math.random() * 10000), action: 'Sold', amount: num, value: this.value });
    };
    HttpService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]])
    ], HttpService);
    return HttpService;
}());



/***/ }),

/***/ "../../../../../src/app/pagenotfound/pagenotfound.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/pagenotfound/pagenotfound.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  pagenotfound works!\n</p>\n"

/***/ }),

/***/ "../../../../../src/app/pagenotfound/pagenotfound.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PagenotfoundComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var PagenotfoundComponent = (function () {
    function PagenotfoundComponent() {
    }
    PagenotfoundComponent.prototype.ngOnInit = function () {
    };
    PagenotfoundComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-pagenotfound',
            template: __webpack_require__("../../../../../src/app/pagenotfound/pagenotfound.component.html"),
            styles: [__webpack_require__("../../../../../src/app/pagenotfound/pagenotfound.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], PagenotfoundComponent);
    return PagenotfoundComponent;
}());



/***/ }),

/***/ "../../../../../src/app/set/set.component.html":
/***/ (function(module, exports) {

module.exports = "\n<div class=\"container\">\n  <h2>Set Visitor Information</h2>\n  <div class=\"table vertical-center\">\n    <table class=\"table\">\n      <thead class=\"thead-dark\">\n        <tr>\n          <th scope=\"col\">Picture</th>\n          <th scope=\"col\">Name</th>\n          <th scope=\"col\">Class</th>\n          <th scope=\"col\">Total Entries</th>\n          <th scope=\"col\">Recent Entered Time</th>\n          <th scope=\"col\">Edit</th>\n        </tr>\n      </thead>\n      <tbody>\n        <tr *ngFor=\"let user of users\">\n          <th scope=\"row\">\n            <a [routerLink]=\"['user-detail', user._id]\">\n              <img src=\"../../uploads/{{user.faceImage[0]}}\" alt=\"cannot find img\">\n            </a>\n          </th>\n          <td>\n            <span *ngIf=\"user.first_name ; else other\">{{user.first_name}} {{user.last_name}}</span>\n            <ng-template #other>{{user._id}}</ng-template>\n          </td>\n          <td> \n              <b *ngIf=\"user.vip ; else blacklist\" class=\"text-success\">VIP</b>\n              <ng-template #blacklist>\n                  <b *ngIf=\"user.blacklist ; else normal\" class=\"text-danger\">Blacklisted</b>\n              </ng-template>\n              <ng-template #normal>\n                  <span>Normal</span>\n              </ng-template>\n          </td>\n          <td> {{user._visits.length}}</td>\n          <td> {{user._visits[user._visits.length-1].visited | date: 'y, MMM dd,  h:mm:ss a'}}</td>\n          <td><button  [routerLink]=\"['user-detail', user._id]\" id=\"btnEdit\" class=\"btn btn-primary btn-md center-block\" >Edit</button>\n            <button id=\"btnDelete\" class=\"btn btn-danger btn-md center-block\">Delete</button></td>\n        </tr>\n      </tbody>\n    </table>\n  </div>\n</div>\n<router-outlet></router-outlet>\n\n"

/***/ }),

/***/ "../../../../../src/app/set/set.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".vertical-center {\n  min-height: 100%;\n  /* Fallback for browsers do NOT support vh unit */\n  min-height: 100vh;\n  /* These two lines are counted as one :-)       */\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-align: center;\n      align-items: center;\n  margin: 10px 0 0px -30px; }\n\n#btnEdit,\n#btnDelete {\n  width: 100px;\n  margin: 2px; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/set/set.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SetComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__http_service__ = __webpack_require__("../../../../../src/app/http.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SetComponent = (function () {
    function SetComponent(_route, _router, _httpService) {
        this._route = _route;
        this._router = _router;
        this._httpService = _httpService;
    }
    SetComponent.prototype.ngOnInit = function () {
        this.getUsers();
    };
    SetComponent.prototype.getUsers = function () {
        var _this = this;
        var usersObservable = this._httpService.shareUsers();
        usersObservable.subscribe(function (data) {
            _this.users = data['users'];
            console.log('users from http: ', _this.users);
        });
    };
    SetComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-set',
            template: __webpack_require__("../../../../../src/app/set/set.component.html"),
            styles: [__webpack_require__("../../../../../src/app/set/set.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_1__http_service__["a" /* HttpService */]])
    ], SetComponent);
    return SetComponent;
}());



/***/ }),

/***/ "../../../../../src/app/setCamera/cameras/cameras.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n    <p>Cameras...</p>\n    <div class=\"table vertical-center\">\n      <table class=\"table\">\n        <thead class=\"thead-dark\">\n          <tr>\n            <th scope=\"col\">MAC Address</th>\n            <th scope=\"col\">Location</th>\n            <th scope=\"col\">Shop</th>\n            <th scope=\"col\">Edit / Delete</th>\n          </tr>\n        </thead>\n        <tbody>\n          <tr *ngFor=\"let camera of cameras\">\n            <td><a [routerLink]= \"['/camera-detail', camera._id]\">{{camera.mac_addr}}</a> </td>\n            <td>{{camera.location}}</td>\n            <td>\n              <p *ngIf=\"camera._shop; else normal\">{{camera._shop.brand}} - {{camera._shop.branch}}</p>\n              <ng-template #normal>\n                <p>Unassigned</p>\n              </ng-template>\n            </td>\n            <td>\n                <button [routerLink]=\"['/camera-detail', camera._id]\" id=\"btnEdit\" class=\"btn btn-primary btn-md center-block\" >Edit</button>\n                <button id=\"btnDelete\" class=\"btn btn-danger btn-md center-block\">Delete</button>\n            </td>\n          </tr>\n        </tbody>\n      </table>\n    </div>\n  </div>\n  <router-outlet></router-outlet>"

/***/ }),

/***/ "../../../../../src/app/setCamera/cameras/cameras.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "#btnEdit,\n#btnDelete {\n  width: 100px;\n  margin: 2px; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/setCamera/cameras/cameras.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CamerasComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__http_service__ = __webpack_require__("../../../../../src/app/http.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var CamerasComponent = (function () {
    function CamerasComponent(_route, _router, _httpService) {
        this._route = _route;
        this._router = _router;
        this._httpService = _httpService;
    }
    CamerasComponent.prototype.ngOnInit = function () {
        this.getCameras();
    };
    CamerasComponent.prototype.getCameras = function () {
        var _this = this;
        var cameraObservable = this._httpService.shareCameras();
        cameraObservable.subscribe(function (data) {
            _this.cameras = data;
            console.log('this is the camera datas: ', _this.cameras);
        });
    };
    CamerasComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-cameras',
            template: __webpack_require__("../../../../../src/app/setCamera/cameras/cameras.component.html"),
            styles: [__webpack_require__("../../../../../src/app/setCamera/cameras/cameras.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_2__http_service__["a" /* HttpService */]])
    ], CamerasComponent);
    return CamerasComponent;
}());



/***/ }),

/***/ "../../../../../src/app/setCamera/setCamera.component.html":
/***/ (function(module, exports) {

module.exports = "<div>\n  <h2>Setup Cameras</h2>\n  <h5>\n    <a [routerLink]=\"[{ outlets : {setCamera:['cameras']} }]\">Cameras</a> |\n    <a [routerLink]=\"[{ outlets : {setCamera:['shop']} }]\">Shop</a>\n  </h5> \n</div>\n<router-outlet name=\"setCamera\"></router-outlet>"

/***/ }),

/***/ "../../../../../src/app/setCamera/setCamera.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/setCamera/setCamera.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SetCameraComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__http_service__ = __webpack_require__("../../../../../src/app/http.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SetCameraComponent = (function () {
    function SetCameraComponent(_route, _router, _httpService) {
        this._route = _route;
        this._router = _router;
        this._httpService = _httpService;
    }
    SetCameraComponent.prototype.ngOnInit = function () {
    };
    SetCameraComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-inquire',
            template: __webpack_require__("../../../../../src/app/setCamera/setCamera.component.html"),
            styles: [__webpack_require__("../../../../../src/app/setCamera/setCamera.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_2__http_service__["a" /* HttpService */]])
    ], SetCameraComponent);
    return SetCameraComponent;
}());



/***/ }),

/***/ "../../../../../src/app/setCamera/shop/shop.component.html":
/***/ (function(module, exports) {

module.exports = "<p>Create Shop:</p>\n<div class=\"form-data\">\n  <form (submit)=\"create()\">\n    <label for=\"shopName\">Brand Name:</label>\n    <input name=\"newShop.brand\" type=\"text\" [(ngModel)]=\"newShop.brand\">\n    <br>\n    <label for=\"shopName\">Branch Name:</label>\n    <input name=\"newShop.branch\" type=\"text\" [(ngModel)]=\"newShop.branch\">\n    <br>\n    <label for=\"shopName\">Address:</label>\n    <input name=\"newShop.address\" type=\"text\" [(ngModel)]=\"newShop.address\">\n    <br>\n    <input type=\"submit\" value=\"Submit\">\n  </form>\n</div>\n<br>\n<div class=\"message\" *ngIf='messages' style=\"color: red\">\n  <div *ngFor= 'let message of messages'>\n    {{message}}\n  </div>\n</div>\n<div class=\"message\" *ngIf='message' style=\"color: green\">\n      {{message}}\n</div>\n<div class=\"table vertical-center\">\n    <table class=\"table\">\n      <thead class=\"thead-dark\">\n        <tr>\n          <th scope=\"col\">Brand Name</th>\n          <th scope=\"col\">Branch Name</th>\n          <th scope=\"col\">Address</th>\n          <th scope=\"col\">Edit / Delete</th>\n        </tr>\n      </thead>\n      <tbody>\n        <tr *ngFor= \"let shop of shops\">\n          <td><a [routerLink]= \"['/shop-detail', shop._id]\">{{shop.brand}}</a> </td>\n          <td>{{shop.branch}}</td>\n          <td>{{shop.address}}</td>\n          <td>\n              <button [routerLink]=\"['/shop-detail', shop._id]\" id=\"btnEdit\" class=\"btn btn-primary btn-md center-block\" >Edit</button>\n              <form (submit)=\"delete(shop._id)\">\n                <button id=\"btnDelete\" class=\"btn btn-danger btn-md center-block\">Delete</button>\n              </form>\n          </td>\n        </tr>\n      </tbody>\n    </table>\n  </div>"

/***/ }),

/***/ "../../../../../src/app/setCamera/shop/shop.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "#btnEdit,\n#btnDelete {\n  width: 100px;\n  margin: 2px; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/setCamera/shop/shop.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ShopComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__http_service__ = __webpack_require__("../../../../../src/app/http.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ShopComponent = (function () {
    function ShopComponent(_route, _router, _httpService) {
        this._route = _route;
        this._router = _router;
        this._httpService = _httpService;
    }
    ShopComponent.prototype.ngOnInit = function () {
        this.getShops();
        this.newShop = {
            brand: '',
            branch: '',
            address: ''
        };
    };
    ShopComponent.prototype.getShops = function () {
        var _this = this;
        var shopObservable = this._httpService.shareShops();
        shopObservable.subscribe(function (data) {
            _this.shops = data;
            console.log('this is the shop datas: ', _this.shops);
        });
    };
    ShopComponent.prototype.create = function () {
        var _this = this;
        console.log('this is the shop created: ', this.newShop);
        var observable = this._httpService.addShop(this.newShop);
        observable.subscribe(function (data) {
            console.log('data back from newShop Post Req: ', data);
            _this.newShop = {
                brand: '',
                branch: '',
                address: ''
            };
            _this.messages = data['Fail'];
            _this.message = data['message'];
            _this.getShops();
        });
    };
    ShopComponent.prototype.delete = function (shopID) {
        var _this = this;
        console.log('this is the shop to delete: ', shopID);
        var observable = this._httpService.deleteShop(shopID);
        observable.subscribe(function (data) {
            console.log('data back from Delete Shop Req: ', data);
            _this.getShops();
        });
    };
    ShopComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-shop',
            template: __webpack_require__("../../../../../src/app/setCamera/shop/shop.component.html"),
            styles: [__webpack_require__("../../../../../src/app/setCamera/shop/shop.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_2__http_service__["a" /* HttpService */]])
    ], ShopComponent);
    return ShopComponent;
}());



/***/ }),

/***/ "../../../../../src/app/settings/settings.component.html":
/***/ (function(module, exports) {

module.exports = "<div>\n    <h2>Browse the Ledger</h2>\n    \n</div>\n  "

/***/ }),

/***/ "../../../../../src/app/settings/settings.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/settings/settings.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SettingsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__http_service__ = __webpack_require__("../../../../../src/app/http.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SettingsComponent = (function () {
    function SettingsComponent(_httpService) {
        this._httpService = _httpService;
        this.detailPressed = false;
        this.detail = { transNumber: '', action: '' };
    }
    SettingsComponent.prototype.ngOnInit = function () {
        this.getTransactions();
    };
    SettingsComponent.prototype.getTransactions = function () {
        this.transactions = this._httpService.showTransactions();
        console.log('obtaining transactions: ', this.transactions);
    };
    SettingsComponent.prototype.getTransDetails = function (Id) {
        console.log('transaction ID clicked: ', Id);
        console.log('All Ids: ', this.transactions[0].transId);
        for (var _i = 0, _a = this.transactions; _i < _a.length; _i++) {
            var trans = _a[_i];
            if (Id === trans.transId) {
                this.detail.transNumber = trans.transId;
                this.detail.action = trans.action + " " + trans.amount;
            }
        }
        this.detailPressed = true;
    };
    SettingsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-settings',
            template: __webpack_require__("../../../../../src/app/settings/settings.component.html"),
            styles: [__webpack_require__("../../../../../src/app/settings/settings.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__http_service__["a" /* HttpService */]])
    ], SettingsComponent);
    return SettingsComponent;
}());



/***/ }),

/***/ "../../../../../src/app/user-detail/user-detail.component.html":
/***/ (function(module, exports) {

module.exports = "<h4>User Record</h4>\n<div *ngFor = \"let img of user.faceImage\">\n  <img src= \"../../uploads/{{img}}\" alt=\"Cannot Find faceimage\">\n  <b> Entered at:</b> {{img | slice: 0:-14}}\n</div>\n\n<div class=\"info\">\n  <h4>User Details</h4>\n  <h4>Status: \n    <span *ngIf=\"user.vip ; else blacklist\">VIP</span> \n    <ng-template #blacklist>\n      <span *ngIf=\"user.blacklist ; else normal\">Blacklisted</span>\n    </ng-template> \n    <ng-template #normal>Normal</ng-template>\n  </h4>\n  <h5>ID: {{user._id}}</h5>\n  <h5>first name:  {{user.first_name}} </h5>\n  <h5>last name: {{user.last_name}}</h5>\n  <h5>gender: {{user.gender}}</h5>\n  <h5>email: {{user.email}}</h5>\n  <h5>phone: {{user.telephone}}</h5>\n  <h5>comment: {{user.comment}}</h5>\n  <h5> Number of times entered: {{user._visits.length}} </h5>\n  <div class=\"row\">\n      <div class=\"col-sm-12 text-center\">\n          <form id=\"btnEdit\" (submit)=\"editShow(user)\">\n              <button type=\"submit\"  class=\"btn btn-secondary btn-md center-block\">Edit User</button>\n          </form>\n          <form id=\"btnStatus\" (submit)=\"statusShow(user)\">\n              <button type=\"submit\" class=\"btn btn-secondary btn-md center-block\">Add Status</button>\n          </form>\n       </div>\n  </div>\n    <br>\n  <div *ngIf=\"success\" class=\"alert alert-success\">\n    {{success}}\n  </div>\n  <div *ngIf=\"fail\" class=\"alert alert-danger\">\n    {{fail}}\n  </div>\n</div>\n<br>\n<!-- edit form -->\n<div *ngIf=\"user.showEditForm\">\n  <form (submit)=\"edit(user)\" id=\"editForm\">\n      <label> First Name:\n       <input type=\"text\" name=\"editUser.first_name\" [(ngModel)]=\"user.first_name\">\n      </label>\n      <label> Last Name: \n        <input type=\"text\" name=\"editUser.last_name\" [(ngModel)]=\"user.last_name\">\n      </label>\n      <label> Gender: \n        <select name=\"editUser.gender\" [(ngModel)]=\"user.gender\">\n          <option type=\"text\" value=\"male\">male</option>\n          <option type=\"text\" value=\"female\">female</option>\n          <option type=\"text\" value=\"other\">other</option>\n        </select>\n      </label>\n      <label> Email: \n        <input type=\"text\" name=\"editUser.email\" [(ngModel)]=\"user.email\">\n      </label>\n      <label> Phone: \n        <input type=\"text\" name=\"editUser.telephone\" [(ngModel)]=\"user.telephone\">\n      </label>\n      <label> Comment: \n          <textarea rows=\"4\" cols=\"50\" name=\"editUser.comment\" [(ngModel)]=\"user.comment\"></textarea>\n        </label>\n  </form>\n  <div class=\"row\">\n      <div class=\"col-sm-12 text-center\">\n          <button id=\"btnSave\" type=\"submit\" class=\"btn btn-primary btn-md center-block\" form=\"editForm\">Save</button> \n          <form id=\"btnCancel\" (submit)=\"cancelShow(user)\">\n              <button type=\"submit\" class=\"btn btn-danger btn-md center-block\">Cancel</button>\n          </form> \n       </div>\n  </div>\n</div>\n<!-- set status form -->\n<div *ngIf=\"user.showStatusForm\">\n  <h5>Set visitor as:</h5>\n    <form (submit)=\"status(user)\" id=\"statusForm\">\n        <label>\n            <input type=\"radio\" name=\"status\" [(ngModel)]=\"newStatus\" [value]=\"1\">\n            VIP\n          </label><br/>\n            <label>\n            <input type=\"radio\" name=\"status\" [(ngModel)]=\"newStatus\" [value]=\"2\">\n            Blacklist\n          </label><br/>\n          <label>\n            <input type=\"radio\" name=\"status\" [(ngModel)]=\"newStatus\" [value]=\"3\">\n            Normal Visitor\n          </label><br/><br/>\n    </form>\n    <div class=\"row\">\n        <div class=\"col-sm-12 text-center\">\n            <button id=\"btnSave\" type=\"submit\" class=\"btn btn-primary btn-md center-block\" form=\"statusForm\">Save</button> \n            <form id=\"btnCancel\" (submit)=\"cancelStatus(user)\">\n                <button type=\"submit\" class=\"btn btn-danger btn-md center-block\">Cancel</button>\n            </form> \n         </div>\n    </div>\n  </div>"

/***/ }),

/***/ "../../../../../src/app/user-detail/user-detail.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "#btnSave,\n#btnCancel,\n#btnEdit,\n#btnStatus {\n  display: inline-block;\n  vertical-align: top;\n  width: 100px; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/user-detail/user-detail.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserDetailComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__http_service__ = __webpack_require__("../../../../../src/app/http.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var UserDetailComponent = (function () {
    function UserDetailComponent(_route, _router, _httpService) {
        this._route = _route;
        this._router = _router;
        this._httpService = _httpService;
    }
    UserDetailComponent.prototype.ngOnInit = function () {
        this.getVisit();
        this.newStatus = 0;
    };
    UserDetailComponent.prototype.getVisit = function () {
        var _this = this;
        var id = this._route.snapshot.params['id'];
        console.log('this is the id page: ', this.userId);
        this.userId = id;
        var observable = this._httpService.getUser(id);
        observable.subscribe(function (data) {
            console.log('this is the data from service: ', data['users']);
            _this.user = data['users'];
        });
    };
    UserDetailComponent.prototype.editShow = function (user) {
        console.log('this is the user to edit: ', user);
        user.showEditForm = true;
        user.showStatusForm = false;
    };
    UserDetailComponent.prototype.cancelShow = function (user) {
        console.log('this is the user to edit: ', user);
        user.showEditForm = false;
    };
    UserDetailComponent.prototype.edit = function (user) {
        var _this = this;
        console.log('editing user submitting: ', user);
        var observable = this._httpService.editUser(user);
        user.showEditForm = false;
        observable.subscribe(function (data) {
            console.log('Got data from editUser Service: ', data);
            _this.success = data['Success'];
            _this.fail = data['Fail'];
        });
    };
    UserDetailComponent.prototype.statusShow = function (user) {
        console.log('this is the status to edit: ', user);
        user.showStatusForm = true;
        user.showEditForm = false;
    };
    UserDetailComponent.prototype.status = function (user) {
        console.log("status of " + user._id + " submitting:", this.newStatus);
        if (this.newStatus === 1) {
            user.vip = true;
            user.blacklist = false;
            var observable = this._httpService.editStatus(user);
            observable.subscribe(function (data) {
                console.log('Got data from editStatus service: ', data['user']);
            });
        }
        if (this.newStatus === 2) {
            user.vip = false;
            user.blacklist = true;
            var observable = this._httpService.editStatus(user);
            observable.subscribe(function (data) {
                console.log('Got data from editStatus service: ', data['user']);
            });
        }
        if (this.newStatus === 3) {
            user.vip = false;
            user.blacklist = false;
            var observable = this._httpService.editStatus(user);
            observable.subscribe(function (data) {
                console.log('Got data from editStatus service: ', data['user']);
            });
        }
    };
    UserDetailComponent.prototype.cancelStatus = function (user) {
        console.log('this is the status to edit: ', user);
        user.showStatusForm = false;
    };
    UserDetailComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-user-detail',
            template: __webpack_require__("../../../../../src/app/user-detail/user-detail.component.html"),
            styles: [__webpack_require__("../../../../../src/app/user-detail/user-detail.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_1__http_service__["a" /* HttpService */]])
    ], UserDetailComponent);
    return UserDetailComponent;
}());



/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map