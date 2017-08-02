webpackJsonp([1],{

/***/ "../../../../../src async recursive":
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = "../../../../../src async recursive";

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

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\n<app-nav-menu></app-nav-menu>\n<app-home-slider></app-home-slider>\n<app-trending-this-week></app-trending-this-week>\n<app-new-items></app-new-items>\n<app-happy-hours></app-happy-hours>\n<app-starter-items></app-starter-items>\n<app-main-course-items></app-main-course-items>\n<app-sauces-items></app-sauces-items>\n<app-grill-items></app-grill-items>\n<app-desert-items></app-desert-items>\n<app-footer-component></app-footer-component>"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
        this.title = 'app';
    }
    return AppComponent;
}());
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_0" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__("../../../../../src/app/app.component.html"),
        styles: [__webpack_require__("../../../../../src/app/app.component.css")]
    })
], AppComponent);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__trending_this_week_trending_this_week_component__ = __webpack_require__("../../../../../src/app/trending-this-week/trending-this-week.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__new_items_new_items_component__ = __webpack_require__("../../../../../src/app/new-items/new-items.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__happy_hours_happy_hours_component__ = __webpack_require__("../../../../../src/app/happy-hours/happy-hours.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__starter_items_starter_items_component__ = __webpack_require__("../../../../../src/app/starter-items/starter-items.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__grill_items_grill_items_component__ = __webpack_require__("../../../../../src/app/grill-items/grill-items.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__sauces_items_sauces_items_component__ = __webpack_require__("../../../../../src/app/sauces-items/sauces-items.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__main_course_items_main_course_items_component__ = __webpack_require__("../../../../../src/app/main-course-items/main-course-items.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__desert_items_desert_items_component__ = __webpack_require__("../../../../../src/app/desert-items/desert-items.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__nav_menu_nav_menu_component__ = __webpack_require__("../../../../../src/app/nav-menu/nav-menu.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__home_slider_home_slider_component__ = __webpack_require__("../../../../../src/app/home-slider/home-slider.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__footer_component_footer_component_component__ = __webpack_require__("../../../../../src/app/footer-component/footer-component.component.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};














var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["b" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_3__trending_this_week_trending_this_week_component__["a" /* TrendingThisWeekComponent */],
            __WEBPACK_IMPORTED_MODULE_4__new_items_new_items_component__["a" /* NewItemsComponent */],
            __WEBPACK_IMPORTED_MODULE_5__happy_hours_happy_hours_component__["a" /* HappyHoursComponent */],
            __WEBPACK_IMPORTED_MODULE_6__starter_items_starter_items_component__["a" /* StarterItemsComponent */],
            __WEBPACK_IMPORTED_MODULE_7__grill_items_grill_items_component__["a" /* GrillItemsComponent */],
            __WEBPACK_IMPORTED_MODULE_8__sauces_items_sauces_items_component__["a" /* SaucesItemsComponent */],
            __WEBPACK_IMPORTED_MODULE_9__main_course_items_main_course_items_component__["a" /* MainCourseItemsComponent */],
            __WEBPACK_IMPORTED_MODULE_10__desert_items_desert_items_component__["a" /* DesertItemsComponent */],
            __WEBPACK_IMPORTED_MODULE_11__nav_menu_nav_menu_component__["a" /* NavMenuComponent */],
            __WEBPACK_IMPORTED_MODULE_12__home_slider_home_slider_component__["a" /* HomeSliderComponent */],
            __WEBPACK_IMPORTED_MODULE_13__footer_component_footer_component_component__["a" /* FooterComponentComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */]
        ],
        providers: [],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/desert-items/desert-items.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/desert-items/desert-items.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\n    <div class=\"panel panel-default\" style=\"border-radius:0px !important\" id=\"{{title}}\">\n        <!-- Indicators \n            <ol class=\"carousel-indicators\">\n                <li class=\"active\" data-target=\"#myCarousel\" data-slide-to=\"0\"></li>\n                <li data-target=\"#myCarousel\" data-slide-to=\"1\"></li>\n                <li data-target=\"#myCarousel\" data-slide-to=\"2\"></li>\n            </ol>\n-->\n        <ul class=\"list-group\">\n            <li class=\"list-group-item\" style=\"background:#F64747;border-radius:0px !important;color:#ffffff\">{{title}}</li>\n        </ul>\n        <div class=\"row\">\n            <div *ngFor=\"let item of [1,2,3,4]; let i=index\" class=\"col-xs-6 col-sm-3 col-md-3 col-lg-3\" data-placement=\"bottom\" data-toggle=\"popover\" title=\"Title\" data-content=\"Aligns nav links, forms, buttons, or text, in the navbar to the left\" data-trigger=\"hover\">\n                <div class=\"media\">\n                    <div class=\"media-top\" style=\"text-align:center;background:#ffffff\">\n                        <img height=\"200px\" width=\"200px\" src=\"{{imageURL}}\" style=\"border-radius:100px;\">\n                    </div>\n                    <div class=\"media-body\" style=\"text-align:center;background:#ffffff;opacity:.9;margin-top: -100px;float: right;width: auto;\">\n                        <h4 class=\"media-heading\">Title</h4>\n                        <p>Aligns nav links, forms, buttons, or text, in the navbar to the left</p>\n                        <p>Price : 60 INR</p>\n                        <p>Review<input id=\"rating-system\" type=\"number\" class=\"rating\" min=\"1\" max=\"5\" step=\"1\" value=\"3\"></p>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/desert-items/desert-items.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DesertItemsComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var DesertItemsComponent = (function () {
    function DesertItemsComponent() {
        this.title = "Deserts";
        this.imageURL = "./assets/flavored-rice-250x250.jpg";
    }
    DesertItemsComponent.prototype.ngOnInit = function () {
    };
    return DesertItemsComponent;
}());
DesertItemsComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_0" /* Component */])({
        selector: 'app-desert-items',
        template: __webpack_require__("../../../../../src/app/desert-items/desert-items.component.html"),
        styles: [__webpack_require__("../../../../../src/app/desert-items/desert-items.component.css")]
    }),
    __metadata("design:paramtypes", [])
], DesertItemsComponent);

//# sourceMappingURL=desert-items.component.js.map

/***/ }),

/***/ "../../../../../src/app/footer-component/footer-component.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/footer-component/footer-component.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"panel panel-default\">\n    <div class=\"panel-footer\">Panel footer</div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/footer-component/footer-component.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FooterComponentComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FooterComponentComponent = (function () {
    function FooterComponentComponent() {
    }
    FooterComponentComponent.prototype.ngOnInit = function () {
    };
    return FooterComponentComponent;
}());
FooterComponentComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_0" /* Component */])({
        selector: 'app-footer-component',
        template: __webpack_require__("../../../../../src/app/footer-component/footer-component.component.html"),
        styles: [__webpack_require__("../../../../../src/app/footer-component/footer-component.component.css")]
    }),
    __metadata("design:paramtypes", [])
], FooterComponentComponent);

//# sourceMappingURL=footer-component.component.js.map

/***/ }),

/***/ "../../../../../src/app/grill-items/grill-items.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/grill-items/grill-items.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\n    <div class=\"panel panel-default\" style=\"border-radius:0px !important\" id=\"{{title}}\">\n        <!-- Indicators \n            <ol class=\"carousel-indicators\">\n                <li class=\"active\" data-target=\"#myCarousel\" data-slide-to=\"0\"></li>\n                <li data-target=\"#myCarousel\" data-slide-to=\"1\"></li>\n                <li data-target=\"#myCarousel\" data-slide-to=\"2\"></li>\n            </ol>\n-->\n        <ul class=\"list-group\">\n            <li class=\"list-group-item\" style=\"background:#F64747;border-radius:0px !important;color:#ffffff\">{{title}}</li>\n        </ul>\n        <div class=\"row\">\n            <div *ngFor=\"let item of [1,2,3,4]; let i=index\" class=\"col-xs-6 col-sm-3 col-md-3 col-lg-3\" data-placement=\"bottom\" data-toggle=\"popover\" title=\"Title\" data-content=\"Aligns nav links, forms, buttons, or text, in the navbar to the left\" data-trigger=\"hover\">\n                <div class=\"media\">\n                    <div class=\"media-top\" style=\"text-align:center;background:#ffffff\">\n                        <img height=\"200px\" width=\"200px\" src=\"{{imageURL}}\" style=\"border-radius:100px;\">\n                    </div>\n                    <div class=\"media-body\" style=\"text-align:center;background:#ffffff;opacity:.9;margin-top: -100px;float: right;width: auto;\">\n                        <h4 class=\"media-heading\">Title</h4>\n                        <p>Aligns nav links, forms, buttons, or text, in the navbar to the left</p>\n                        <p>Price : 60 INR</p>\n                        <p>Review<input id=\"rating-system\" type=\"number\" class=\"rating\" min=\"1\" max=\"5\" step=\"1\" value=\"3\"></p>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/grill-items/grill-items.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GrillItemsComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var GrillItemsComponent = (function () {
    function GrillItemsComponent() {
        this.title = "Grill Items";
        this.imageURL = "./assets/flavored-rice-250x250.jpg";
    }
    GrillItemsComponent.prototype.ngOnInit = function () {
    };
    return GrillItemsComponent;
}());
GrillItemsComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_0" /* Component */])({
        selector: 'app-grill-items',
        template: __webpack_require__("../../../../../src/app/grill-items/grill-items.component.html"),
        styles: [__webpack_require__("../../../../../src/app/grill-items/grill-items.component.css")]
    }),
    __metadata("design:paramtypes", [])
], GrillItemsComponent);

//# sourceMappingURL=grill-items.component.js.map

/***/ }),

/***/ "../../../../../src/app/happy-hours/happy-hours.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/happy-hours/happy-hours.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\n    <div class=\"panel panel-default\" style=\"border-radius:0px !important\" id=\"{{title}}\">\n        <!-- Indicators \n            <ol class=\"carousel-indicators\">\n                <li class=\"active\" data-target=\"#myCarousel\" data-slide-to=\"0\"></li>\n                <li data-target=\"#myCarousel\" data-slide-to=\"1\"></li>\n                <li data-target=\"#myCarousel\" data-slide-to=\"2\"></li>\n            </ol>\n-->\n        <ul class=\"list-group\">\n            <li class=\"list-group-item\" style=\"background:#F64747;border-radius:0px !important;color:#ffffff\">{{title}}</li>\n        </ul>\n        <div class=\"row\">\n            <div *ngFor=\"let item of [1,2,3,4]; let i=index\" class=\"col-xs-6 col-sm-3 col-md-3 col-lg-3\" data-placement=\"bottom\" data-toggle=\"popover\" title=\"Title\" data-content=\"Aligns nav links, forms, buttons, or text, in the navbar to the left\" data-trigger=\"hover\">\n                <div class=\"media\">\n                    <div class=\"media-top\" style=\"text-align:center;background:#ffffff\">\n                        <img height=\"200px\" width=\"200px\" src=\"{{imageURL}}\" style=\"border-radius:100px;\">\n                    </div>\n                    <div class=\"media-body\" style=\"text-align:center;background:#ffffff;opacity:.9;margin-top: -100px;float: right;width: auto;\">\n                        <h4 class=\"media-heading\">Title</h4>\n                        <p>Aligns nav links, forms, buttons, or text, in the navbar to the left</p>\n                        <p>Price : 60 INR</p>\n                        <p>Review<input id=\"rating-system\" type=\"number\" class=\"rating\" min=\"1\" max=\"5\" step=\"1\" value=\"3\"></p>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/happy-hours/happy-hours.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HappyHoursComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HappyHoursComponent = (function () {
    function HappyHoursComponent() {
        this.title = "Happy Hours";
        this.imageURL = "./assets/junk-food.jpg";
    }
    HappyHoursComponent.prototype.ngOnInit = function () {
    };
    return HappyHoursComponent;
}());
HappyHoursComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_0" /* Component */])({
        selector: 'app-happy-hours',
        template: __webpack_require__("../../../../../src/app/happy-hours/happy-hours.component.html"),
        styles: [__webpack_require__("../../../../../src/app/happy-hours/happy-hours.component.css")]
    }),
    __metadata("design:paramtypes", [])
], HappyHoursComponent);

//# sourceMappingURL=happy-hours.component.js.map

/***/ }),

/***/ "../../../../../src/app/home-slider/home-slider.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/home-slider/home-slider.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid \">\n    <div id=\"myCarouselHome\" class=\"carousel slide\" data-ride=\"carousel\">\n        <!-- Indicators -->\n        <ol class=\"carousel-indicators\">\n            <li data-target=\"#myCarouselHome\" data-slide-to=\"0\" class=\"active\"></li>\n            <li data-target=\"#myCarouselHome\" data-slide-to=\"1\"></li>\n            <li data-target=\"#myCarouselHome\" data-slide-to=\"2\"></li>\n        </ol>\n\n        <!-- Wrapper for slides -->\n        <div class=\"carousel-inner\">\n\n            <div class=\"item active\">\n                <!--<img src=\"../assets/learn-node-angular.webp\" alt=\"Los Angeles\" style=\"width:100%;height:50%\">-->\n                <div alt=\"Los Angeles\" style=\"width:100%;height:350px;background:url(./assets/chicken-tikka.jpg) no-repeat;background-size:cover;display:block\"></div>\n                <div class=\"carousel-caption\">\n                    <h3>Your diet is a bank account. Good food choices are good investments.</h3>\n                    <h5>Bethenny Frankel</h5>\n                </div>\n            </div>\n\n            <div class=\"item\">\n                <!--<img src=\"../assets/learning-react-getting-started.webp\" alt=\"New York\" style=\"width:100%;\">-->\n                <div alt=\"Los Angeles\" style=\"width:100%;height:350px;background:url(./assets/1426576690-7820792-1100x423.jpeg);background-size:cover;display:block\"></div>\n                <div class=\"carousel-caption\">\n                    <h3>If music be the food of love, play on.</h3>\n                    <h5>William Shakespeare</h5>\n                </div>\n            </div>\n\n            <div class=\"item\">\n                <!--<img src=\"../assets/learn-node-angular.webp\" alt=\"Chicago\" style=\"width:100%;\">-->\n                <div alt=\"Los Angeles\" style=\"width:100%;height:350px;background:url(./assets/Spanish-food.jpg);background-size:cover;display:block\"></div>\n                <div class=\"carousel-caption\">\n                    <h3>There is no sincerer love than the love of food.</h3>\n                    <h5>George Bernard Shaw</h5>\n                </div>\n            </div>\n\n        </div>\n        <!-- Left and right controls -->\n        <a class=\"left carousel-control\" href=\"#myCarouselHome\" data-slide=\"prev\">\n            <span class=\"glyphicon glyphicon-chevron-left\"></span>\n            <span class=\"sr-only\">Previous</span>\n        </a>\n        <a class=\"right carousel-control\" href=\"#myCarouselHome\" data-slide=\"next\">\n            <span class=\"glyphicon glyphicon-chevron-right\"></span>\n            <span class=\"sr-only\">Next</span>\n        </a>\n    </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/home-slider/home-slider.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeSliderComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HomeSliderComponent = (function () {
    function HomeSliderComponent() {
    }
    HomeSliderComponent.prototype.ngOnInit = function () {
    };
    return HomeSliderComponent;
}());
HomeSliderComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_0" /* Component */])({
        selector: 'app-home-slider',
        template: __webpack_require__("../../../../../src/app/home-slider/home-slider.component.html"),
        styles: [__webpack_require__("../../../../../src/app/home-slider/home-slider.component.css")]
    }),
    __metadata("design:paramtypes", [])
], HomeSliderComponent);

//# sourceMappingURL=home-slider.component.js.map

/***/ }),

/***/ "../../../../../src/app/main-course-items/main-course-items.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/main-course-items/main-course-items.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\n    <div class=\"panel panel-default\" style=\"border-radius:0px !important\" id=\"{{title}}\">\n        <!-- Indicators \n            <ol class=\"carousel-indicators\">\n                <li class=\"active\" data-target=\"#myCarousel\" data-slide-to=\"0\"></li>\n                <li data-target=\"#myCarousel\" data-slide-to=\"1\"></li>\n                <li data-target=\"#myCarousel\" data-slide-to=\"2\"></li>\n            </ol>\n-->\n        <ul class=\"list-group\">\n            <li class=\"list-group-item\" style=\"background:#F64747;border-radius:0px !important;color:#ffffff\">{{title}}</li>\n        </ul>\n        <div class=\"row\">\n            <div *ngFor=\"let item of [1,2,3,4]; let i=index\" class=\"col-xs-6 col-sm-3 col-md-3 col-lg-3\" data-placement=\"bottom\" data-toggle=\"popover\" title=\"Title\" data-content=\"Aligns nav links, forms, buttons, or text, in the navbar to the left\" data-trigger=\"hover\">\n                <div class=\"media\">\n                    <div class=\"media-top\" style=\"text-align:center;background:#ffffff\">\n                        <img height=\"200px\" width=\"200px\" src=\"{{imageURL}}\" style=\"border-radius:100px;\">\n                    </div>\n                    <div class=\"media-body\" style=\"text-align:center;background:#ffffff;opacity:.9;margin-top: -100px;float: right;width: auto;\">\n                        <h4 class=\"media-heading\">Title</h4>\n                        <p>Aligns nav links, forms, buttons, or text, in the navbar to the left</p>\n                        <p>Price : 60 INR</p>\n                        <p>Review<input id=\"rating-system\" type=\"number\" class=\"rating\" min=\"1\" max=\"5\" step=\"1\" value=\"3\"></p>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/main-course-items/main-course-items.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MainCourseItemsComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var MainCourseItemsComponent = (function () {
    function MainCourseItemsComponent() {
        this.title = "Main Course";
        this.imageURL = "./assets/flavored-rice-250x250.jpg";
    }
    MainCourseItemsComponent.prototype.ngOnInit = function () {
    };
    return MainCourseItemsComponent;
}());
MainCourseItemsComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_0" /* Component */])({
        selector: 'app-main-course-items',
        template: __webpack_require__("../../../../../src/app/main-course-items/main-course-items.component.html"),
        styles: [__webpack_require__("../../../../../src/app/main-course-items/main-course-items.component.css")]
    }),
    __metadata("design:paramtypes", [])
], MainCourseItemsComponent);

//# sourceMappingURL=main-course-items.component.js.map

/***/ }),

/***/ "../../../../../src/app/nav-menu/nav-menu.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/nav-menu/nav-menu.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-dafault\">\n    <div class=\"container-fluid\">\n        <div class=\"navbar-header\">\n            <button type=\"button\" class=\"navbar-toggle red\" data-toggle=\"collapse\" data-target=\"#myNavbar\">\n              <span class=\"icon-bar\"></span>\n              <span class=\"icon-bar\"></span>\n              <span class=\"icon-bar\"></span>\n            </button>\n            <a class=\"navbar-brand\" href=\"#\">\n                <img alt=\"Brand\" src=\"./assets/logo.jpg\" height=\"30px\" style=\"float:left\"> Waiters System</a>\n        </div>\n        <div class=\"collapse navbar-collapse\" id=\"myNavbar\">\n            <form class=\"navbar-form navbar-right\">\n                <div class=\"input-group\">\n\n                </div>\n            </form>\n            <form class=\"navbar-form navbar-right\">\n                <div class=\"input-group\">\n                    <input type=\"text\" class=\"form-control\" placeholder=\"search\">\n                    <span class=\"input-group-addon\"><i class=\"glyphicon glyphicon-search\"></i></span>\n                    <span class=\"input-group-addon\"><i class=\"glyphicon glyphicon-shopping-cart\"><span class=\"badge\">0</span></i>\n                    </span>\n                </div>\n            </form>\n\n            <ul class=\"nav navbar-nav navbar-right\">\n                <li role=\"presentation\" class=\"active\"><a href=\"#\">&nbsp;&nbsp;&nbsp;&nbsp;Home&nbsp;&nbsp;&nbsp;&nbsp;</a></li>\n                <li role=\"presentation\">\n                    <a href=\"#\" class=\"dropdown-toggle\" data-toggle=\"dropdown\" role=\"button\" aria-haspopup=\"true\" aria-expands=\"false\">\n                        &nbsp;&nbsp;&nbsp;&nbsp;Menu&nbsp;&nbsp;&nbsp;&nbsp;<span class=\"caret\"></span>\n                    </a>\n                    <ul class=\"dropdown-menu\">\n                        <li><a href=\"#Trending This Week\">Trending Items</a></li>\n                        <li><a href=\"#New Items\">New Items</a></li>\n                        <li><a href=\"#Happy Hours\">Happy Hours</a></li>\n                        <li><a href=\"#Starters\">Starters</a></li>\n                        <li><a href=\"#Main Course\">Main Course</a></li>\n                        <li><a href=\"#Sauces\">Sauces</a></li>\n                        <li><a href=\"#Grill Items\">Grill Items</a></li>\n                        <li><a href=\"#Deserts\">Deserts</a></li>\n                    </ul>\n                </li>\n\n            </ul>\n            <!--\n            <ul class=\"nav navbar-nav navbar-right\">\n                <li><a href=\"#\"><span class=\"glyphicon glyphicon-user\"></span>Sign Up</a></li>\n                <li><a href=\"#\"><span class=\"glyphicon glyphicon-log-in\"></span>Login</a></li>\n            </ul>\n            -->\n\n        </div>\n    </div>\n</nav>"

/***/ }),

/***/ "../../../../../src/app/nav-menu/nav-menu.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavMenuComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var NavMenuComponent = (function () {
    function NavMenuComponent() {
    }
    NavMenuComponent.prototype.ngOnInit = function () {
    };
    return NavMenuComponent;
}());
NavMenuComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_0" /* Component */])({
        selector: 'app-nav-menu',
        template: __webpack_require__("../../../../../src/app/nav-menu/nav-menu.component.html"),
        styles: [__webpack_require__("../../../../../src/app/nav-menu/nav-menu.component.css")]
    }),
    __metadata("design:paramtypes", [])
], NavMenuComponent);

//# sourceMappingURL=nav-menu.component.js.map

/***/ }),

/***/ "../../../../../src/app/new-items/new-items.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/new-items/new-items.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\n    <div class=\"panel panel-default\" style=\"border-radius:0px !important\" id=\"{{title}}\">\n        <!-- Indicators \n            <ol class=\"carousel-indicators\">\n                <li class=\"active\" data-target=\"#myCarousel\" data-slide-to=\"0\"></li>\n                <li data-target=\"#myCarousel\" data-slide-to=\"1\"></li>\n                <li data-target=\"#myCarousel\" data-slide-to=\"2\"></li>\n            </ol>\n-->\n        <ul class=\"list-group\">\n            <li class=\"list-group-item\" style=\"background:#F64747;border-radius:0px !important;color:#ffffff\">{{title}}</li>\n        </ul>\n        <div class=\"row\">\n            <div *ngFor=\"let item of [1,2,3,4]; let i=index\" class=\"col-xs-6 col-sm-3 col-md-3 col-lg-3\" data-placement=\"bottom\" data-toggle=\"popover\" title=\"Title\" data-content=\"Aligns nav links, forms, buttons, or text, in the navbar to the left\" data-trigger=\"hover\">\n                <div class=\"media\">\n                    <div class=\"media-top\" style=\"text-align:center;background:#ffffff\">\n                        <img height=\"200px\" width=\"200px\" src=\"{{imageURL}}\" style=\"border-radius:100px;\">\n                    </div>\n                    <div class=\"media-body\" style=\"text-align:center;background:#ffffff;opacity:.9;margin-top: -100px;float: right;width: auto;\">\n                        <h4 class=\"media-heading\">Title</h4>\n                        <p>Aligns nav links, forms, buttons, or text, in the navbar to the left</p>\n                        <p>Price : 60 INR</p>\n                        <p>Review<input id=\"rating-system\" type=\"number\" class=\"rating\" min=\"1\" max=\"5\" step=\"1\" value=\"3\"></p>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/new-items/new-items.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NewItemsComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var NewItemsComponent = (function () {
    function NewItemsComponent() {
        this.title = "New Items";
        this.imageURL = "./assets/flavored-rice-250x250.jpg";
    }
    NewItemsComponent.prototype.ngOnInit = function () {
    };
    return NewItemsComponent;
}());
NewItemsComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_0" /* Component */])({
        selector: 'app-new-items',
        template: __webpack_require__("../../../../../src/app/new-items/new-items.component.html"),
        styles: [__webpack_require__("../../../../../src/app/new-items/new-items.component.css")]
    }),
    __metadata("design:paramtypes", [])
], NewItemsComponent);

//# sourceMappingURL=new-items.component.js.map

/***/ }),

/***/ "../../../../../src/app/sauces-items/sauces-items.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/sauces-items/sauces-items.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\n    <div class=\"panel panel-default\" style=\"border-radius:0px !important\" id=\"{{title}}\">\n        <!-- Indicators \n            <ol class=\"carousel-indicators\">\n                <li class=\"active\" data-target=\"#myCarousel\" data-slide-to=\"0\"></li>\n                <li data-target=\"#myCarousel\" data-slide-to=\"1\"></li>\n                <li data-target=\"#myCarousel\" data-slide-to=\"2\"></li>\n            </ol>\n-->\n        <ul class=\"list-group\">\n            <li class=\"list-group-item\" style=\"background:#F64747;border-radius:0px !important;color:#ffffff\">{{title}}</li>\n        </ul>\n        <div class=\"row\">\n            <div *ngFor=\"let item of [1,2,3,4]; let i=index\" class=\"col-xs-6 col-sm-3 col-md-3 col-lg-3\" data-placement=\"bottom\" data-toggle=\"popover\" title=\"Title\" data-content=\"Aligns nav links, forms, buttons, or text, in the navbar to the left\" data-trigger=\"hover\">\n                <div class=\"media\">\n                    <div class=\"media-top\" style=\"text-align:center;background:#ffffff\">\n                        <img height=\"200px\" width=\"200px\" src=\"{{imageURL}}\" style=\"border-radius:100px;\">\n                    </div>\n                    <div class=\"media-body\" style=\"text-align:center;background:#ffffff;opacity:.9;margin-top: -100px;float: right;width: auto;\">\n                        <h4 class=\"media-heading\">Title</h4>\n                        <p>Aligns nav links, forms, buttons, or text, in the navbar to the left</p>\n                        <p>Price : 60 INR</p>\n                        <p>Review<input id=\"rating-system\" type=\"number\" class=\"rating\" min=\"1\" max=\"5\" step=\"1\" value=\"3\"></p>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/sauces-items/sauces-items.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SaucesItemsComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SaucesItemsComponent = (function () {
    function SaucesItemsComponent() {
        this.title = "Sauces";
        this.imageURL = "./assets/flavored-rice-250x250.jpg";
    }
    SaucesItemsComponent.prototype.ngOnInit = function () {
    };
    return SaucesItemsComponent;
}());
SaucesItemsComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_0" /* Component */])({
        selector: 'app-sauces-items',
        template: __webpack_require__("../../../../../src/app/sauces-items/sauces-items.component.html"),
        styles: [__webpack_require__("../../../../../src/app/sauces-items/sauces-items.component.css")]
    }),
    __metadata("design:paramtypes", [])
], SaucesItemsComponent);

//# sourceMappingURL=sauces-items.component.js.map

/***/ }),

/***/ "../../../../../src/app/starter-items/starter-items.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/starter-items/starter-items.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\n    <div class=\"panel panel-default\" style=\"border-radius:0px !important\" id=\"{{title}}\">\n        <!-- Indicators \n            <ol class=\"carousel-indicators\">\n                <li class=\"active\" data-target=\"#myCarousel\" data-slide-to=\"0\"></li>\n                <li data-target=\"#myCarousel\" data-slide-to=\"1\"></li>\n                <li data-target=\"#myCarousel\" data-slide-to=\"2\"></li>\n            </ol>\n-->\n        <ul class=\"list-group\">\n            <li class=\"list-group-item\" style=\"background:#F64747;border-radius:0px !important;color:#ffffff\">{{title}}</li>\n        </ul>\n        <div class=\"row\">\n            <div *ngFor=\"let item of [1,2,3,4]; let i=index\" class=\"col-xs-6 col-sm-3 col-md-3 col-lg-3\" data-placement=\"bottom\" data-toggle=\"popover\" title=\"Title\" data-content=\"Aligns nav links, forms, buttons, or text, in the navbar to the left\" data-trigger=\"hover\">\n                <div class=\"media\">\n                    <div class=\"media-top\" style=\"text-align:center;background:#ffffff\">\n                        <img height=\"200px\" width=\"200px\" src=\"{{imageURL}}\" style=\"border-radius:100px;\">\n                    </div>\n                    <div class=\"media-body\" style=\"text-align:center;background:#ffffff;opacity:.9;margin-top: -100px;float: right;width: auto;\">\n                        <h4 class=\"media-heading\">Title</h4>\n                        <p>Aligns nav links, forms, buttons, or text, in the navbar to the left</p>\n                        <p>Price : 60 INR</p>\n                        <p>Review<input id=\"rating-system\" type=\"number\" class=\"rating\" min=\"1\" max=\"5\" step=\"1\" value=\"3\"></p>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/starter-items/starter-items.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StarterItemsComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var StarterItemsComponent = (function () {
    function StarterItemsComponent() {
        this.title = "Starters";
        this.imageURL = "./assets/flavored-rice-250x250.jpg";
    }
    StarterItemsComponent.prototype.ngOnInit = function () {
    };
    return StarterItemsComponent;
}());
StarterItemsComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_0" /* Component */])({
        selector: 'app-starter-items',
        template: __webpack_require__("../../../../../src/app/starter-items/starter-items.component.html"),
        styles: [__webpack_require__("../../../../../src/app/starter-items/starter-items.component.css")]
    }),
    __metadata("design:paramtypes", [])
], StarterItemsComponent);

//# sourceMappingURL=starter-items.component.js.map

/***/ }),

/***/ "../../../../../src/app/trending-this-week/trending-this-week.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/trending-this-week/trending-this-week.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n    <div class=\"row\">\n        <hr>\n    </div>\n</div>\n<div class=\"container-fluid\">\n    <div class=\"panel panel-default\" style=\"border-radius:0px !important\" id=\"{{title}}\">\n        <!-- Indicators \n            <ol class=\"carousel-indicators\">\n                <li class=\"active\" data-target=\"#myCarousel\" data-slide-to=\"0\"></li>\n                <li data-target=\"#myCarousel\" data-slide-to=\"1\"></li>\n                <li data-target=\"#myCarousel\" data-slide-to=\"2\"></li>\n            </ol>\n-->\n        <ul class=\"list-group\">\n            <li class=\"list-group-item\" style=\"background:#F64747;border-radius:0px !important;color:#ffffff\">{{title}}</li>\n        </ul>\n        <div class=\"row\">\n            <div *ngFor=\"let item of [1,2,3,4]; let i=index\" class=\"col-xs-6 col-sm-3 col-md-3 col-lg-3\" data-placement=\"bottom\" data-toggle=\"popover\" title=\"Title\" data-content=\"Aligns nav links, forms, buttons, or text, in the navbar to the left\" data-trigger=\"hover\">\n                <div class=\"media\">\n                    <div class=\"media-top\" style=\"text-align:center;background:#ffffff\">\n                        <img height=\"200px\" width=\"200px\" src=\"./assets/aboutus.jpg\" style=\"border-radius:100px;\">\n                    </div>\n                    <div class=\"media-body\" style=\"text-align:center;background:#ffffff;opacity:.9;margin-top: -100px;float: right;width: auto;\">\n                        <h4 class=\"media-heading\">Title</h4>\n                        <p>Aligns nav links, forms, buttons, or text, in the navbar to the left</p>\n                        <p>Price : 60 INR</p>\n                        <p>Review<input id=\"rating-system\" type=\"number\" class=\"rating\" min=\"1\" max=\"5\" step=\"1\" value=\"3\"></p>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/trending-this-week/trending-this-week.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TrendingThisWeekComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var TrendingThisWeekComponent = (function () {
    function TrendingThisWeekComponent() {
        this.title = "Trending This Week";
    }
    TrendingThisWeekComponent.prototype.ngOnInit = function () {
    };
    return TrendingThisWeekComponent;
}());
TrendingThisWeekComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_0" /* Component */])({
        selector: 'app-trending-this-week',
        template: __webpack_require__("../../../../../src/app/trending-this-week/trending-this-week.component.html"),
        styles: [__webpack_require__("../../../../../src/app/trending-this-week/trending-this-week.component.css")]
    }),
    __metadata("design:paramtypes", [])
], TrendingThisWeekComponent);

//# sourceMappingURL=trending-this-week.component.js.map

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map