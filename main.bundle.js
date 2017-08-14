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

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\n<app-back-to-top></app-back-to-top>\n<app-nav-menu></app-nav-menu>\n<app-home-slider></app-home-slider>\n<app-trending-this-week></app-trending-this-week>\n<app-new-items></app-new-items>\n<app-happy-hours></app-happy-hours>\n<app-starter-items></app-starter-items>\n<app-main-course-items></app-main-course-items>\n<app-sauces-items></app-sauces-items>\n<app-grill-items></app-grill-items>\n<app-desert-items></app-desert-items>\n<app-footer-component></app-footer-component>"

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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__shopping_cart_component_shopping_cart_component_component__ = __webpack_require__("../../../../../src/app/shopping-cart-component/shopping-cart-component.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__back_to_top_back_to_top_component__ = __webpack_require__("../../../../../src/app/back-to-top/back-to-top.component.ts");
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
            __WEBPACK_IMPORTED_MODULE_13__footer_component_footer_component_component__["a" /* FooterComponentComponent */],
            __WEBPACK_IMPORTED_MODULE_14__shopping_cart_component_shopping_cart_component_component__["a" /* ShoppingCartComponentComponent */],
            __WEBPACK_IMPORTED_MODULE_15__back_to_top_back_to_top_component__["a" /* BackToTopComponent */]
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

/***/ "../../../../../src/app/back-to-top/back-to-top.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/back-to-top/back-to-top.component.html":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "../../../../../src/app/back-to-top/back-to-top.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BackToTopComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var BackToTopComponent = (function () {
    function BackToTopComponent() {
    }
    BackToTopComponent.prototype.ngOnInit = function () {
    };
    return BackToTopComponent;
}());
BackToTopComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_0" /* Component */])({
        selector: 'app-back-to-top',
        template: __webpack_require__("../../../../../src/app/back-to-top/back-to-top.component.html"),
        styles: [__webpack_require__("../../../../../src/app/back-to-top/back-to-top.component.css")]
    }),
    __metadata("design:paramtypes", [])
], BackToTopComponent);

//# sourceMappingURL=back-to-top.component.js.map

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

module.exports = "<div class=\"container-fluid\">\n    <div class=\"panel panel-default\" style=\"border-radius:0px !important\" id=\"{{title}}\">\n        <ul class=\"list-group\">\n            <li class=\"list-group-item lead\" style=\"background:#BFBFBF;border-radius:0px !important;\n            color:#000000\">{{title}}\n                <button class=\"btn btn-sm pull-right\" style=\"background:#000000;color:#ffffff\">\n                <span class=\"glyphicon glyphicon-menu-right\"></span>\n                <span class=\"glyphicon glyphicon-menu-right\"></span>\n                <span class=\"glyphicon glyphicon-menu-right\"></span>\n                </button>\n            </li>\n        </ul>\n        <div class=\"row\">\n            <div *ngFor=\"let item of items; let i=index\" class=\"col-xs-12 col-sm-6 col-md-6 col-lg-3\" data-placement=\"bottom\" data-toggle=\"popover\" data-content=\"Aligns nav links, forms, buttons, or text, in the navbar to the left\" data-trigger=\"hover\">\n                <div class=\"media padding-2px\">\n                    <div class=\"\" style=\"position:absolute;z-index:5\">\n                        <div class=\"btn-group btn-block\" role=\"group\" aria-label=\"plus-minus\">\n                            <button (click)=\"minusQty(i)\" type=\"button\" class=\"btn btn-sm minus-button merge-top-left-button\" style=\"outline:none;border-radius:50px;border:1px solid #F22613;background:#ffffff;color:#F22613\">\n                                <span class=\"glyphicon glyphicon-minus\"></span>\n                            </button>\n                        </div>\n                        <input id=\"qty_{{i}}\" type=\"text\" value=\"1\" class=\"input-sm form-control\" style=\"width:35px\">\n                        <div class=\"btn-group btn-block\" role=\"group\" aria-label=\"plus-minus\">\n                            <button (click)=\"plusQty(i)\" type=\"button\" class=\"btn btn-sm plus-button merge-top-right-button\" style=\"outline:none;border-radius:50px;border:1px solid darkgreen;background:#ffffff;color:darkgreen\">\n                                <span class=\"glyphicon glyphicon-plus\"></span>\n                            </button>\n                        </div>\n                    </div>\n                    <div class=\"col-sm-4 col-xs-4 input-lg\" style=\"position:absolute;right: 2px;z-index: 9;min-width: 40%;\">\n                        <span class=\"fa fa-rupee\" style=\"text-decoration:line-through;\">{{item.strikeThroughPrice}}</span>\n                        <span class=\"fa fa-rupee padding-2px\" style=\"color:white;font-size:25px;background:#000000\">{{item.unitPrice}}</span>\n                    </div>\n                    <div class=\"media-top\">\n                        <img height=\"150px\" width=\"150px\" src=\"{{imageURL}}\">\n                    </div>\n                    <div class=\"media-body\" style=\"text-align:center;background:#ffffff;opacity:.9;\n                    margin-top: -100px;float: right;width: 75%;\">\n                        <h4 class=\"media-heading\">{{item.name}}</h4>\n                        <p>{{item.description}}</p>\n                    </div>\n                    <div class=\"col-sm-12 col-xs-12 input-group text-center\" style=\"z-index:5;background:#f0f0f0;\">\n                        <div class=\"col-sm-4 col-xs-4 padding-2px\" style=\"font-size:10px;\">\n                            <span class=\"glyphicon glyphicon-star\" style=\"vertical-align:bottom;\"></span>\n                            <span class=\"glyphicon glyphicon-star\" style=\"vertical-align:bottom;\"></span>\n                            <span class=\"glyphicon glyphicon-star\" style=\"vertical-align:bottom;\"></span>\n                            <span class=\"glyphicon glyphicon-star\" style=\"vertical-align:bottom;\"></span>\n                            <span class=\"glyphicon glyphicon-star\" style=\"vertical-align:bottom;\"></span>\n                        </div>\n                        <!--    <input id=\"rating-system\" type=\"number\" class=\"rating\" min=\"1\" max=\"5\" step=\"1\" value=\"3\">-->\n                        <div class=\"col-sm-2 col-xs-2\">\n                            <span *ngIf=item.isVeg class=\"vegetarianicon\">⊡</span>\n                            <span *ngIf=!item.isVeg class=\"non-vegetarianicon\">⊡</span>\n                        </div>\n                        <button (click)=\"addToCart()\" class=\"col-sm-6 col-xs-6 btn icon-btn btn-success\" href=\"#\">\n                            <span class=\"glyphicon btn-glyphicon glyphicon-plus img-circle text-success\">\n                            </span> Add\n                        </button>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>"

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
        this.items = [];
        this.items = [{
                "Id": "11111",
                "name": "Chicken Wings",
                "description": "Marinated chicken wings cooked over charcoal; Served with pickled vegetable, French fries, salad and mayonnaise",
                "unitPrice": "250",
                "strikeThroughPrice": "270",
                "isVeg": false
            },
            {
                "Id": "11112",
                "name": "Hummus",
                "description": "Paste of chickpeas combined with olive oil, garlic and lime juice",
                "unitPrice": "120",
                "strikeThroughPrice": "125",
                "isVeg": true
            },
            {
                "Id": "11113",
                "name": "Shish Paneer",
                "description": "Marinated cottage cheese cooked in a clay oven; Served with pickled vegetable, French fries, salad, mayonnaise and mint chutney",
                "unitPrice": "250",
                "strikeThroughPrice": "280",
                "isVeg": true
            },
            {
                "Id": "11114",
                "name": "Shawai",
                "description": "Whole chicken cooked in shawai grill; Served with pickled vegetable, French fries, salad, mayonnaise and mint chutney",
                "unitPrice": "180",
                "strikeThroughPrice": "185",
                "isVeg": false
            }];
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

module.exports = "<footer class=\"footer\">\n    <div class=\"container\" style=\"margin-bottom:10vh;\">\n        <p>© Company 2017</p>\n    </div>\n</footer>"

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

module.exports = "<div class=\"container-fluid\">\n    <div class=\"panel panel-default\" style=\"border-radius:0px !important\" id=\"{{title}}\">\n        <ul class=\"list-group\">\n            <li class=\"list-group-item lead\" style=\"background:#BFBFBF;border-radius:0px !important;\n            color:#000000\">{{title}}\n                <button class=\"btn btn-sm pull-right\" style=\"background:#000000;color:#ffffff\">\n                <span class=\"glyphicon glyphicon-menu-right\"></span>\n                <span class=\"glyphicon glyphicon-menu-right\"></span>\n                <span class=\"glyphicon glyphicon-menu-right\"></span>\n                </button>\n            </li>\n        </ul>\n        <div class=\"row\">\n            <div *ngFor=\"let item of items; let i=index\" class=\"col-xs-12 col-sm-6 col-md-6 col-lg-3\" data-placement=\"bottom\" data-toggle=\"popover\" data-content=\"Aligns nav links, forms, buttons, or text, in the navbar to the left\" data-trigger=\"hover\">\n                <div class=\"media padding-2px\">\n                    <div class=\"\" style=\"position:absolute;z-index:5\">\n                        <div class=\"btn-group btn-block\" role=\"group\" aria-label=\"plus-minus\">\n                            <button (click)=\"minusQty(i)\" type=\"button\" class=\"btn btn-sm minus-button merge-top-left-button\" style=\"outline:none;border-radius:50px;border:1px solid #F22613;background:#ffffff;color:#F22613\">\n                                <span class=\"glyphicon glyphicon-minus\"></span>\n                            </button>\n                        </div>\n                        <input id=\"qty_{{i}}\" type=\"text\" value=\"1\" class=\"input-sm form-control\" style=\"width:35px\">\n                        <div class=\"btn-group btn-block\" role=\"group\" aria-label=\"plus-minus\">\n                            <button (click)=\"plusQty(i)\" type=\"button\" class=\"btn btn-sm plus-button merge-top-right-button\" style=\"outline:none;border-radius:50px;border:1px solid darkgreen;background:#ffffff;color:darkgreen\">\n                                <span class=\"glyphicon glyphicon-plus\"></span>\n                            </button>\n                        </div>\n                    </div>\n                    <div class=\"col-sm-4 col-xs-4 input-lg\" style=\"position:absolute;right: 2px;z-index: 9;min-width: 40%;\">\n                        <span class=\"fa fa-rupee\" style=\"text-decoration:line-through;\">{{item.strikeThroughPrice}}</span>\n                        <span class=\"fa fa-rupee padding-2px\" style=\"color:white;font-size:25px;background:#000000\">{{item.unitPrice}}</span>\n                    </div>\n                    <div class=\"media-top\">\n                        <img height=\"150px\" width=\"150px\" src=\"{{imageURL}}\">\n                    </div>\n                    <div class=\"media-body\" style=\"text-align:center;background:#ffffff;opacity:.9;\n                    margin-top: -100px;float: right;width: 75%;\">\n                        <h4 class=\"media-heading\">{{item.name}}</h4>\n                        <p>{{item.description}}</p>\n                    </div>\n                    <div class=\"col-sm-12 col-xs-12 input-group text-center\" style=\"z-index:5;background:#f0f0f0;\">\n                        <div class=\"col-sm-4 col-xs-4 padding-2px\" style=\"font-size:10px;\">\n                            <span class=\"glyphicon glyphicon-star\" style=\"vertical-align:bottom;\"></span>\n                            <span class=\"glyphicon glyphicon-star\" style=\"vertical-align:bottom;\"></span>\n                            <span class=\"glyphicon glyphicon-star\" style=\"vertical-align:bottom;\"></span>\n                            <span class=\"glyphicon glyphicon-star\" style=\"vertical-align:bottom;\"></span>\n                            <span class=\"glyphicon glyphicon-star\" style=\"vertical-align:bottom;\"></span>\n                        </div>\n                        <!--    <input id=\"rating-system\" type=\"number\" class=\"rating\" min=\"1\" max=\"5\" step=\"1\" value=\"3\">-->\n                        <div class=\"col-sm-2 col-xs-2\">\n                            <span *ngIf=item.isVeg class=\"vegetarianicon\">⊡</span>\n                            <span *ngIf=!item.isVeg class=\"non-vegetarianicon\">⊡</span>\n                        </div>\n                        <button (click)=\"addToCart()\" class=\"col-sm-6 col-xs-6 btn icon-btn btn-success\" href=\"#\">\n                            <span class=\"glyphicon btn-glyphicon glyphicon-plus img-circle text-success\">\n                            </span> Add\n                        </button>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>"

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
        this.items = [];
        this.items = [{
                "Id": "11111",
                "name": "Chicken Wings",
                "description": "Marinated chicken wings cooked over charcoal; Served with pickled vegetable, French fries, salad and mayonnaise",
                "unitPrice": "250",
                "strikeThroughPrice": "270",
                "isVeg": false
            },
            {
                "Id": "11112",
                "name": "Hummus",
                "description": "Paste of chickpeas combined with olive oil, garlic and lime juice",
                "unitPrice": "120",
                "strikeThroughPrice": "125",
                "isVeg": true
            },
            {
                "Id": "11113",
                "name": "Shish Paneer",
                "description": "Marinated cottage cheese cooked in a clay oven; Served with pickled vegetable, French fries, salad, mayonnaise and mint chutney",
                "unitPrice": "250",
                "strikeThroughPrice": "280",
                "isVeg": true
            },
            {
                "Id": "11114",
                "name": "Shawai",
                "description": "Whole chicken cooked in shawai grill; Served with pickled vegetable, French fries, salad, mayonnaise and mint chutney",
                "unitPrice": "180",
                "strikeThroughPrice": "185",
                "isVeg": false
            }];
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

module.exports = "<div class=\"container-fluid\">\n    <div class=\"panel panel-default\" style=\"border-radius:0px !important\" id=\"{{title}}\">\n        <ul class=\"list-group\">\n            <li class=\"list-group-item lead\" style=\"background:#BFBFBF;border-radius:0px !important;\n            color:#000000\">{{title}}\n                <button class=\"btn btn-sm pull-right\" style=\"background:#000000;color:#ffffff\">\n                <span class=\"glyphicon glyphicon-menu-right\"></span>\n                <span class=\"glyphicon glyphicon-menu-right\"></span>\n                <span class=\"glyphicon glyphicon-menu-right\"></span>\n                </button>\n            </li>\n        </ul>\n        <div class=\"row\">\n            <div *ngFor=\"let item of items; let i=index\" class=\"col-xs-12 col-sm-6 col-md-6 col-lg-3\" data-placement=\"bottom\" data-toggle=\"popover\" data-content=\"Aligns nav links, forms, buttons, or text, in the navbar to the left\" data-trigger=\"hover\">\n                <div class=\"media padding-2px\">\n                    <div class=\"\" style=\"position:absolute;z-index:5\">\n                        <div class=\"btn-group btn-block\" role=\"group\" aria-label=\"plus-minus\">\n                            <button (click)=\"minusQty(i)\" type=\"button\" class=\"btn btn-sm minus-button merge-top-left-button\" style=\"outline:none;border-radius:50px;border:1px solid #F22613;background:#ffffff;color:#F22613\">\n                                <span class=\"glyphicon glyphicon-minus\"></span>\n                            </button>\n                        </div>\n                        <input id=\"qty_{{i}}\" type=\"text\" value=\"1\" class=\"input-sm form-control\" style=\"width:35px\">\n                        <div class=\"btn-group btn-block\" role=\"group\" aria-label=\"plus-minus\">\n                            <button (click)=\"plusQty(i)\" type=\"button\" class=\"btn btn-sm plus-button merge-top-right-button\" style=\"outline:none;border-radius:50px;border:1px solid darkgreen;background:#ffffff;color:darkgreen\">\n                                <span class=\"glyphicon glyphicon-plus\"></span>\n                            </button>\n                        </div>\n                    </div>\n                    <div class=\"col-sm-4 col-xs-4 input-lg\" style=\"position:absolute;right: 2px;z-index: 9;min-width: 40%;\">\n                        <span class=\"fa fa-rupee\" style=\"text-decoration:line-through;\">{{item.strikeThroughPrice}}</span>\n                        <span class=\"fa fa-rupee padding-2px\" style=\"color:white;font-size:25px;background:#000000\">{{item.unitPrice}}</span>\n                    </div>\n                    <div class=\"media-top\">\n                        <img height=\"150px\" width=\"150px\" src=\"{{imageURL}}\">\n                    </div>\n                    <div class=\"media-body\" style=\"text-align:center;background:#ffffff;opacity:.9;\n                    margin-top: -100px;float: right;width: 75%;\">\n                        <h4 class=\"media-heading\">{{item.name}}</h4>\n                        <p>{{item.description}}</p>\n                    </div>\n                    <div class=\"col-sm-12 col-xs-12 input-group text-center\" style=\"z-index:5;background:#f0f0f0;\">\n                        <div class=\"col-sm-4 col-xs-4 padding-2px\" style=\"font-size:10px;\">\n                            <span class=\"glyphicon glyphicon-star\" style=\"vertical-align:bottom;\"></span>\n                            <span class=\"glyphicon glyphicon-star\" style=\"vertical-align:bottom;\"></span>\n                            <span class=\"glyphicon glyphicon-star\" style=\"vertical-align:bottom;\"></span>\n                            <span class=\"glyphicon glyphicon-star\" style=\"vertical-align:bottom;\"></span>\n                            <span class=\"glyphicon glyphicon-star\" style=\"vertical-align:bottom;\"></span>\n                        </div>\n                        <!--    <input id=\"rating-system\" type=\"number\" class=\"rating\" min=\"1\" max=\"5\" step=\"1\" value=\"3\">-->\n                        <div class=\"col-sm-2 col-xs-2\">\n                            <span *ngIf=item.isVeg class=\"vegetarianicon\">⊡</span>\n                            <span *ngIf=!item.isVeg class=\"non-vegetarianicon\">⊡</span>\n                        </div>\n                        <button (click)=\"addToCart()\" class=\"col-sm-6 col-xs-6 btn icon-btn btn-success\" href=\"#\">\n                            <span class=\"glyphicon btn-glyphicon glyphicon-plus img-circle text-success\">\n                            </span> Add\n                        </button>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>"

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
        this.items = [];
        this.items = [{
                "Id": "11111",
                "name": "Chicken Wings",
                "description": "Marinated chicken wings cooked over charcoal; Served with pickled vegetable, French fries, salad and mayonnaise",
                "unitPrice": "250",
                "strikeThroughPrice": "270",
                "isVeg": false
            },
            {
                "Id": "11112",
                "name": "Hummus",
                "description": "Paste of chickpeas combined with olive oil, garlic and lime juice",
                "unitPrice": "120",
                "strikeThroughPrice": "125",
                "isVeg": true
            },
            {
                "Id": "11113",
                "name": "Shish Paneer",
                "description": "Marinated cottage cheese cooked in a clay oven; Served with pickled vegetable, French fries, salad, mayonnaise and mint chutney",
                "unitPrice": "250",
                "strikeThroughPrice": "280",
                "isVeg": true
            },
            {
                "Id": "11114",
                "name": "Shawai",
                "description": "Whole chicken cooked in shawai grill; Served with pickled vegetable, French fries, salad, mayonnaise and mint chutney",
                "unitPrice": "180",
                "strikeThroughPrice": "185",
                "isVeg": false
            }];
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

module.exports = "<div class=\"container-fluid\">\n    <div class=\"row text-center form-group form-inline hidden-xs\" style=\"position:absolute;z-index:4;width: 100%;margin-top: 10vh;\">\n        <select class=\"form-control\" style=\"min-width:10vw;min-height:8vh;\">\n            <option></option>\n            <option>Veg</option>\n            <option>Non Veg</option>\n        </select>\n        <select class=\"form-control\" style=\"min-width:10vw;min-height:8vh;\">\n            <option></option>\n            <option *ngFor=\"let itemType of itemTypes\" value=\"{{itemType}}\">{{itemType}}</option>\n        </select>\n        <div class=\"input-group\" style=\"min-height:8vh;\">\n            <input type=\"text\" class=\"form-control\" placeholder=\"search\" style=\"min-width:30vw;min-height:8vh;\">\n            <div class=\"input-group-btn\">\n                <button class=\"btn btn-default\" type=\"submit\" style=\"min-height:8vh;\">\n                    <i class=\"glyphicon glyphicon-search\"></i>\n                </button>\n            </div>\n        </div>\n    </div>\n    <div class=\"row text-center form-group form-group form-inline hidden-sm hidden-md hidden-lg\" style=\"position:absolute;z-index:4;width: 100%;margin-top: 20vh;\">\n        <div class=\"input-group\" style=\"width:70%;margin:0 auto\">\n            <input type=\"text\" class=\"form-control\" placeholder=\"search\" style=\"min-height:8vh;\">\n            <div class=\"input-group-btn\">\n                <button class=\"btn btn-default\" type=\"submit\" style=\"min-height:8vh;\">\n                    <i class=\"glyphicon glyphicon-search\"></i>\n                </button>\n            </div>\n        </div>\n    </div>\n    <div id=\"myCarouselHome\" class=\"carousel slide\" data-ride=\"carousel\">\n        <!-- Indicators -->\n        <ol class=\"carousel-indicators\">\n            <li data-target=\"#myCarouselHome\" data-slide-to=\"0\" class=\"active\"></li>\n            <li data-target=\"#myCarouselHome\" data-slide-to=\"1\"></li>\n            <li data-target=\"#myCarouselHome\" data-slide-to=\"2\"></li>\n        </ol>\n\n        <!-- Wrapper for slides -->\n        <div class=\"carousel-inner\">\n\n            <div class=\"item active\">\n                <!--<img src=\"../assets/learn-node-angular.webp\" alt=\"Los Angeles\" style=\"width:100%;height:50%\">-->\n                <div alt=\"Los Angeles\" style=\"width:100%;height:350px;background:url(./assets/chicken-tikka.jpg) no-repeat;background-size:cover;display:block\"></div>\n                <div class=\"carousel-caption\">\n                    <h3>Your diet is a bank account. Good food choices are good investments.</h3>\n                    <h5>Bethenny Frankel</h5>\n                </div>\n            </div>\n\n            <div class=\"item\">\n                <!--<img src=\"../assets/learning-react-getting-started.webp\" alt=\"New York\" style=\"width:100%;\">-->\n                <div alt=\"Los Angeles\" style=\"width:100%;height:350px;background:url(./assets/1426576690-7820792-1100x423.jpeg);background-size:cover;display:block\"></div>\n                <div class=\"carousel-caption\">\n                    <h3>If music be the food of love, play on.</h3>\n                    <h5>William Shakespeare</h5>\n                </div>\n            </div>\n\n            <div class=\"item\">\n                <!--<img src=\"../assets/learn-node-angular.webp\" alt=\"Chicago\" style=\"width:100%;\">-->\n                <div alt=\"Los Angeles\" style=\"width:100%;height:350px;background:url(./assets/Spanish-food.jpg);background-size:cover;display:block\"></div>\n                <div class=\"carousel-caption\">\n                    <h3>There is no sincerer love than the love of food.</h3>\n                    <h5>George Bernard Shaw</h5>\n                </div>\n            </div>\n\n        </div>\n        <!-- Left and right controls -->\n        <a class=\"left carousel-control\" href=\"#myCarouselHome\" data-slide=\"prev\">\n            <span class=\"glyphicon glyphicon-chevron-left\"></span>\n            <span class=\"sr-only\">Previous</span>\n        </a>\n        <a class=\"right carousel-control\" href=\"#myCarouselHome\" data-slide=\"next\">\n            <span class=\"glyphicon glyphicon-chevron-right\"></span>\n            <span class=\"sr-only\">Next</span>\n        </a>\n    </div>\n</div>"

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
        this.itemTypes = ["Starters", "Main Course", "Sauces", "Grill Items", "Deserts"];
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

module.exports = "<div class=\"container-fluid\">\n    <div class=\"panel panel-default\" style=\"border-radius:0px !important\" id=\"{{title}}\">\n        <ul class=\"list-group\">\n            <li class=\"list-group-item lead\" style=\"background:#BFBFBF;border-radius:0px !important;\n            color:#000000\">{{title}}\n                <button class=\"btn btn-sm pull-right\" style=\"background:#000000;color:#ffffff\">\n                <span class=\"glyphicon glyphicon-menu-right\"></span>\n                <span class=\"glyphicon glyphicon-menu-right\"></span>\n                <span class=\"glyphicon glyphicon-menu-right\"></span>\n                </button>\n            </li>\n        </ul>\n        <div class=\"row\">\n            <div *ngFor=\"let item of items; let i=index\" class=\"col-xs-12 col-sm-6 col-md-6 col-lg-3\" data-placement=\"bottom\" data-toggle=\"popover\" data-content=\"Aligns nav links, forms, buttons, or text, in the navbar to the left\" data-trigger=\"hover\">\n                <div class=\"media padding-2px\">\n                    <div class=\"\" style=\"position:absolute;z-index:5\">\n                        <div class=\"btn-group btn-block\" role=\"group\" aria-label=\"plus-minus\">\n                            <button (click)=\"minusQty(i)\" type=\"button\" class=\"btn btn-sm minus-button merge-top-left-button\" style=\"outline:none;border-radius:50px;border:1px solid #F22613;background:#ffffff;color:#F22613\">\n                                <span class=\"glyphicon glyphicon-minus\"></span>\n                            </button>\n                        </div>\n                        <input id=\"qty_{{i}}\" type=\"text\" value=\"1\" class=\"input-sm form-control\" style=\"width:35px\">\n                        <div class=\"btn-group btn-block\" role=\"group\" aria-label=\"plus-minus\">\n                            <button (click)=\"plusQty(i)\" type=\"button\" class=\"btn btn-sm plus-button merge-top-right-button\" style=\"outline:none;border-radius:50px;border:1px solid darkgreen;background:#ffffff;color:darkgreen\">\n                                <span class=\"glyphicon glyphicon-plus\"></span>\n                            </button>\n                        </div>\n                    </div>\n                    <div class=\"col-sm-4 col-xs-4 input-lg\" style=\"position:absolute;right: 2px;z-index: 9;min-width: 40%;\">\n                        <span class=\"fa fa-rupee\" style=\"text-decoration:line-through;\">{{item.strikeThroughPrice}}</span>\n                        <span class=\"fa fa-rupee padding-2px\" style=\"color:white;font-size:25px;background:#000000\">{{item.unitPrice}}</span>\n                    </div>\n                    <div class=\"media-top\">\n                        <img height=\"150px\" width=\"150px\" src=\"{{imageURL}}\">\n                    </div>\n                    <div class=\"media-body\" style=\"text-align:center;background:#ffffff;opacity:.9;\n                    margin-top: -100px;float: right;width: 75%;\">\n                        <h4 class=\"media-heading\">{{item.name}}</h4>\n                        <p>{{item.description}}</p>\n                    </div>\n                    <div class=\"col-sm-12 col-xs-12 input-group text-center\" style=\"z-index:5;background:#f0f0f0;\">\n                        <div class=\"col-sm-4 col-xs-4 padding-2px\" style=\"font-size:10px;\">\n                            <span class=\"glyphicon glyphicon-star\" style=\"vertical-align:bottom;\"></span>\n                            <span class=\"glyphicon glyphicon-star\" style=\"vertical-align:bottom;\"></span>\n                            <span class=\"glyphicon glyphicon-star\" style=\"vertical-align:bottom;\"></span>\n                            <span class=\"glyphicon glyphicon-star\" style=\"vertical-align:bottom;\"></span>\n                            <span class=\"glyphicon glyphicon-star\" style=\"vertical-align:bottom;\"></span>\n                        </div>\n                        <!--    <input id=\"rating-system\" type=\"number\" class=\"rating\" min=\"1\" max=\"5\" step=\"1\" value=\"3\">-->\n                        <div class=\"col-sm-2 col-xs-2\">\n                            <span *ngIf=item.isVeg class=\"vegetarianicon\">⊡</span>\n                            <span *ngIf=!item.isVeg class=\"non-vegetarianicon\">⊡</span>\n                        </div>\n                        <button (click)=\"addToCart()\" class=\"col-sm-6 col-xs-6 btn icon-btn btn-success\" href=\"#\">\n                            <span class=\"glyphicon btn-glyphicon glyphicon-plus img-circle text-success\">\n                            </span> Add\n                        </button>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>"

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
        this.items = [];
        this.items = [{
                "Id": "11111",
                "name": "Chicken Wings",
                "description": "Marinated chicken wings cooked over charcoal; Served with pickled vegetable, French fries, salad and mayonnaise",
                "unitPrice": "250",
                "strikeThroughPrice": "270",
                "isVeg": false
            },
            {
                "Id": "11112",
                "name": "Hummus",
                "description": "Paste of chickpeas combined with olive oil, garlic and lime juice",
                "unitPrice": "120",
                "strikeThroughPrice": "125",
                "isVeg": true
            },
            {
                "Id": "11113",
                "name": "Shish Paneer",
                "description": "Marinated cottage cheese cooked in a clay oven; Served with pickled vegetable, French fries, salad, mayonnaise and mint chutney",
                "unitPrice": "250",
                "strikeThroughPrice": "280",
                "isVeg": true
            },
            {
                "Id": "11114",
                "name": "Shawai",
                "description": "Whole chicken cooked in shawai grill; Served with pickled vegetable, French fries, salad, mayonnaise and mint chutney",
                "unitPrice": "180",
                "strikeThroughPrice": "185",
                "isVeg": false
            }];
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

module.exports = "<nav class=\"navbar navbar-dafault\" style=\"z-index:999;min-height:0px;\">\n    <div class=\"container-fluid\">\n        <div class=\"navbar-header\">\n            <div class=\"dropdown\">\n                <button type=\"button\" style=\"font-size:20px;background:#DB0A5B; position: fixed;bottom:0px;left:50vw;height: 10vh;width:25vw;\" class=\"shopping-cart-btn-mobile btn btn-xs btn-primary\" data-toggle=\"modal\" data-target=\"#menuModal\">\n                    <span class=\"glyphicon glyphicon-list-alt\"></span>\n                </button>\n                <button style=\"font-size:20px;background:#663399; position: fixed;bottom:0px;left:75vw;height: 10vh;width:25vw;\" type=\"button\" class=\"shopping-cart-btn-mobile btn btn-xs btn-primary\" data-toggle=\"modal\" data-target=\"#myModal\">\n                    <span class=\"glyphicon glyphicon-shopping-cart\"></span> \n                    <span class=\"badge\">1</span>\n                </button>\n                <a href=\"#\" style=\"font-size:20px;background:#663399; position: fixed;bottom:0px;left:0vw;height: 10vh;width:50vw;text-align:left;line-height:7vh\" class=\"shopping-cart-btn-mobile btn btn-xs btn-primary\">\n                {{hotelName}}\n            </a>\n            </div>\n        </div>\n    </div>\n</nav>\n<div id=\"menuModal\" class=\"modal fade\" role=\"dialog\">\n    <div class=\"modal-dialog\" style=\"min-width:50vw\">\n        <div class=\"modal-content\">\n            <div class=\"modal-header\">\n            </div>\n            <div class=\"modal-body\" style=\"padding:0px;\">\n                <ul class=\"list-group\">\n                    <li *ngFor=\"let item of itemTypes\" class=\"list-group-item\">\n                        <span class=\"badge\">4</span>\n                        <a href=\"#{{item}}\" onclick=\"$('#menuModal').modal('hide')\">{{item}}</a>\n                    </li>\n                </ul>\n            </div>\n            <div class=\"modal-footer\">\n                <span style=\"margin-bottom:0px;\" class=\"lead glyphicon glyphicon-remove-circle\" data-dismiss=\"modal\"></span>\n            </div>\n        </div>\n    </div>\n</div>\n<app-shopping-cart-component></app-shopping-cart-component>"

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
        this.hotelName = "*************";
        this.itemTypes = ["Trending This Week", "New Items", "Happy Hours", "Starters", "Main Course",
            "Sauces", "Grill Items", "Deserts"];
        this.hotelName = "Zam Zam";
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

module.exports = "<div class=\"container-fluid\">\n    <div class=\"panel panel-default\" style=\"border-radius:0px !important\" id=\"{{title}}\">\n        <ul class=\"list-group\">\n            <li class=\"list-group-item lead\" style=\"background:#BFBFBF;border-radius:0px !important;\n            color:#000000\">{{title}}\n                <button class=\"btn btn-sm pull-right\" style=\"background:#000000;color:#ffffff\">\n                <span class=\"glyphicon glyphicon-menu-right\"></span>\n                <span class=\"glyphicon glyphicon-menu-right\"></span>\n                <span class=\"glyphicon glyphicon-menu-right\"></span>\n                </button>\n            </li>\n        </ul>\n        <div class=\"row\">\n            <div *ngFor=\"let item of items; let i=index\" class=\"col-xs-12 col-sm-6 col-md-6 col-lg-3\" data-placement=\"bottom\" data-toggle=\"popover\" data-content=\"Aligns nav links, forms, buttons, or text, in the navbar to the left\" data-trigger=\"hover\">\n                <div class=\"media padding-2px\">\n                    <div class=\"\" style=\"position:absolute;z-index:5\">\n                        <div class=\"btn-group btn-block\" role=\"group\" aria-label=\"plus-minus\">\n                            <button (click)=\"minusQty(i)\" type=\"button\" class=\"btn btn-sm minus-button merge-top-left-button\" style=\"outline:none;border-radius:50px;border:1px solid #F22613;background:#ffffff;color:#F22613\">\n                                <span class=\"glyphicon glyphicon-minus\"></span>\n                            </button>\n                        </div>\n                        <input id=\"qty_{{i}}\" type=\"text\" value=\"1\" class=\"input-sm form-control\" style=\"width:35px\">\n                        <div class=\"btn-group btn-block\" role=\"group\" aria-label=\"plus-minus\">\n                            <button (click)=\"plusQty(i)\" type=\"button\" class=\"btn btn-sm plus-button merge-top-right-button\" style=\"outline:none;border-radius:50px;border:1px solid darkgreen;background:#ffffff;color:darkgreen\">\n                                <span class=\"glyphicon glyphicon-plus\"></span>\n                            </button>\n                        </div>\n                    </div>\n                    <div class=\"col-sm-4 col-xs-4 input-lg\" style=\"position:absolute;right: 2px;z-index: 9;min-width: 40%;\">\n                        <span class=\"fa fa-rupee\" style=\"text-decoration:line-through;\">{{item.strikeThroughPrice}}</span>\n                        <span class=\"fa fa-rupee padding-2px\" style=\"color:white;font-size:25px;background:#000000\">{{item.unitPrice}}</span>\n                    </div>\n                    <div class=\"media-top\">\n                        <img height=\"150px\" width=\"150px\" src=\"{{imageURL}}\">\n                    </div>\n                    <div class=\"media-body\" style=\"text-align:center;background:#ffffff;opacity:.9;\n                    margin-top: -100px;float: right;width: 75%;\">\n                        <h4 class=\"media-heading\">{{item.name}}</h4>\n                        <p>{{item.description}}</p>\n                    </div>\n                    <div class=\"col-sm-12 col-xs-12 input-group text-center\" style=\"z-index:5;background:#f0f0f0;\">\n                        <div class=\"col-sm-4 col-xs-4 padding-2px\" style=\"font-size:10px;\">\n                            <span class=\"glyphicon glyphicon-star\" style=\"vertical-align:bottom;\"></span>\n                            <span class=\"glyphicon glyphicon-star\" style=\"vertical-align:bottom;\"></span>\n                            <span class=\"glyphicon glyphicon-star\" style=\"vertical-align:bottom;\"></span>\n                            <span class=\"glyphicon glyphicon-star\" style=\"vertical-align:bottom;\"></span>\n                            <span class=\"glyphicon glyphicon-star\" style=\"vertical-align:bottom;\"></span>\n                        </div>\n                        <!--    <input id=\"rating-system\" type=\"number\" class=\"rating\" min=\"1\" max=\"5\" step=\"1\" value=\"3\">-->\n                        <div class=\"col-sm-2 col-xs-2\">\n                            <span *ngIf=item.isVeg class=\"vegetarianicon\">⊡</span>\n                            <span *ngIf=!item.isVeg class=\"non-vegetarianicon\">⊡</span>\n                        </div>\n                        <button (click)=\"addToCart()\" class=\"col-sm-6 col-xs-6 btn icon-btn btn-success\" href=\"#\">\n                            <span class=\"glyphicon btn-glyphicon glyphicon-plus img-circle text-success\">\n                            </span> Add\n                        </button>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>"

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
        this.items = [];
        this.items = [{
                "Id": "11111",
                "name": "Chicken Wings",
                "description": "Marinated chicken wings cooked over charcoal; Served with pickled vegetable, French fries, salad and mayonnaise",
                "unitPrice": "250",
                "strikeThroughPrice": "270",
                "isVeg": false
            },
            {
                "Id": "11112",
                "name": "Hummus",
                "description": "Paste of chickpeas combined with olive oil, garlic and lime juice",
                "unitPrice": "120",
                "strikeThroughPrice": "125",
                "isVeg": true
            },
            {
                "Id": "11113",
                "name": "Shish Paneer",
                "description": "Marinated cottage cheese cooked in a clay oven; Served with pickled vegetable, French fries, salad, mayonnaise and mint chutney",
                "unitPrice": "250",
                "strikeThroughPrice": "280",
                "isVeg": true
            },
            {
                "Id": "11114",
                "name": "Shawai",
                "description": "Whole chicken cooked in shawai grill; Served with pickled vegetable, French fries, salad, mayonnaise and mint chutney",
                "unitPrice": "180",
                "strikeThroughPrice": "185",
                "isVeg": false
            }];
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

module.exports = "<div class=\"container-fluid\">\n    <div class=\"panel panel-default\" style=\"border-radius:0px !important\" id=\"{{title}}\">\n        <ul class=\"list-group\">\n            <li class=\"list-group-item lead\" style=\"background:#BFBFBF;border-radius:0px !important;\n            color:#000000\">{{title}}\n                <button class=\"btn btn-sm pull-right\" style=\"background:#000000;color:#ffffff\">\n                <span class=\"glyphicon glyphicon-menu-right\"></span>\n                <span class=\"glyphicon glyphicon-menu-right\"></span>\n                <span class=\"glyphicon glyphicon-menu-right\"></span>\n                </button>\n            </li>\n        </ul>\n        <div class=\"row\">\n            <div *ngFor=\"let item of items; let i=index\" class=\"col-xs-12 col-sm-6 col-md-6 col-lg-3\" data-placement=\"bottom\" data-toggle=\"popover\" data-content=\"Aligns nav links, forms, buttons, or text, in the navbar to the left\" data-trigger=\"hover\">\n                <div class=\"media padding-2px\">\n                    <div class=\"\" style=\"position:absolute;z-index:5\">\n                        <div class=\"btn-group btn-block\" role=\"group\" aria-label=\"plus-minus\">\n                            <button (click)=\"minusQty(i)\" type=\"button\" class=\"btn btn-sm minus-button merge-top-left-button\" style=\"outline:none;border-radius:50px;border:1px solid #F22613;background:#ffffff;color:#F22613\">\n                                <span class=\"glyphicon glyphicon-minus\"></span>\n                            </button>\n                        </div>\n                        <input id=\"qty_{{i}}\" type=\"text\" value=\"1\" class=\"input-sm form-control\" style=\"width:35px\">\n                        <div class=\"btn-group btn-block\" role=\"group\" aria-label=\"plus-minus\">\n                            <button (click)=\"plusQty(i)\" type=\"button\" class=\"btn btn-sm plus-button merge-top-right-button\" style=\"outline:none;border-radius:50px;border:1px solid darkgreen;background:#ffffff;color:darkgreen\">\n                                <span class=\"glyphicon glyphicon-plus\"></span>\n                            </button>\n                        </div>\n                    </div>\n                    <div class=\"col-sm-4 col-xs-4 input-lg\" style=\"position:absolute;right: 2px;z-index: 9;min-width: 40%;\">\n                        <span class=\"fa fa-rupee\" style=\"text-decoration:line-through;\">{{item.strikeThroughPrice}}</span>\n                        <span class=\"fa fa-rupee padding-2px\" style=\"color:white;font-size:25px;background:#000000\">{{item.unitPrice}}</span>\n                    </div>\n                    <div class=\"media-top\">\n                        <img height=\"150px\" width=\"150px\" src=\"{{imageURL}}\">\n                    </div>\n                    <div class=\"media-body\" style=\"text-align:center;background:#ffffff;opacity:.9;\n                    margin-top: -100px;float: right;width: 75%;\">\n                        <h4 class=\"media-heading\">{{item.name}}</h4>\n                        <p>{{item.description}}</p>\n                    </div>\n                    <div class=\"col-sm-12 col-xs-12 input-group text-center\" style=\"z-index:5;background:#f0f0f0;\">\n                        <div class=\"col-sm-4 col-xs-4 padding-2px\" style=\"font-size:10px;\">\n                            <span class=\"glyphicon glyphicon-star\" style=\"vertical-align:bottom;\"></span>\n                            <span class=\"glyphicon glyphicon-star\" style=\"vertical-align:bottom;\"></span>\n                            <span class=\"glyphicon glyphicon-star\" style=\"vertical-align:bottom;\"></span>\n                            <span class=\"glyphicon glyphicon-star\" style=\"vertical-align:bottom;\"></span>\n                            <span class=\"glyphicon glyphicon-star\" style=\"vertical-align:bottom;\"></span>\n                        </div>\n                        <!--    <input id=\"rating-system\" type=\"number\" class=\"rating\" min=\"1\" max=\"5\" step=\"1\" value=\"3\">-->\n                        <div class=\"col-sm-2 col-xs-2\">\n                            <span *ngIf=item.isVeg class=\"vegetarianicon\">⊡</span>\n                            <span *ngIf=!item.isVeg class=\"non-vegetarianicon\">⊡</span>\n                        </div>\n                        <button (click)=\"addToCart()\" class=\"col-sm-6 col-xs-6 btn icon-btn btn-success\" href=\"#\">\n                            <span class=\"glyphicon btn-glyphicon glyphicon-plus img-circle text-success\">\n                            </span> Add\n                        </button>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>"

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
        this.items = [];
        this.items = [{
                "Id": "11111",
                "name": "Chicken Wings",
                "description": "Marinated chicken wings cooked over charcoal; Served with pickled vegetable, French fries, salad and mayonnaise",
                "unitPrice": "250",
                "strikeThroughPrice": "270",
                "isVeg": false
            },
            {
                "Id": "11112",
                "name": "Hummus",
                "description": "Paste of chickpeas combined with olive oil, garlic and lime juice",
                "unitPrice": "120",
                "strikeThroughPrice": "125",
                "isVeg": true
            },
            {
                "Id": "11113",
                "name": "Shish Paneer",
                "description": "Marinated cottage cheese cooked in a clay oven; Served with pickled vegetable, French fries, salad, mayonnaise and mint chutney",
                "unitPrice": "250",
                "strikeThroughPrice": "280",
                "isVeg": true
            },
            {
                "Id": "11114",
                "name": "Shawai",
                "description": "Whole chicken cooked in shawai grill; Served with pickled vegetable, French fries, salad, mayonnaise and mint chutney",
                "unitPrice": "180",
                "strikeThroughPrice": "185",
                "isVeg": false
            }];
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

/***/ "../../../../../src/app/shopping-cart-component/shopping-cart-component.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/shopping-cart-component/shopping-cart-component.component.html":
/***/ (function(module, exports) {

module.exports = "<!--\n<div class=\"container\">\n    <div class=\"row text-center\" style=\"display:none;position:absolute;margin-left:30%\" id=\"success_msg\">\n        <div class=\"alert alert-success alert-dismissable col-sm-6\" style=\"width:100%;margin:auto;\">\n            <strong>Success!</strong> Item removed.\n        </div>\n    </div>\n    <div class=\"row text-center\" style=\"display:none;position:absolute;margin-left:30%\" id=\"success_msg_order\">\n        <div class=\"alert alert-success alert-dismissable col-sm-6\" style=\"width:100%;margin:auto;\">\n            <strong>Success!</strong> Order Placed.\n        </div>\n    </div>\n</div>\n-->\n<div id=\"myModal\" class=\"modal fade\" role=\"dialog\">\n    <div class=\"modal-dialog\" style=\"min-width:50vw\">\n        <div class=\"modal-content\">\n            <div class=\"modal-header\">\n            </div>\n            <div class=\"modal-body\" style=\"padding:0px;\">\n                <div class=\"panel-group\" id=\"accordion\">\n                    <div class=\"panel panel-default\">\n                        <a data-toggle=\"collapse\" data-parent=\"#accordion\" href=\"#collapse1\" class=\"order-panel-header\">\n                            <div class=\"panel-heading\" style=\"background:#FFC713 !important\">\n                                <h4 class=\"panel-title\">\n                                    <span class=\"glyphicon glyphicon-triangle-bottom\">\n                            </span> Open Order({{itemsCount}} Items)\n                                </h4>\n                            </div>\n                        </a>\n                        <div id=\"collapse1\" class=\"panel-collapse collapse in\">\n                            <div class=\"panel-body no-padding\">\n                                <div class=\"card card-block\">\n                                    <table class=\"table table-hover table-condensed\">\n                                        <thead>\n                                            <tr>\n                                                <th colspan=\"3\">Item</th>\n                                                <th></th>\n                                                <th>Qty</th>\n                                                <th>Total</th>\n                                                <th></th>\n                                            </tr>\n                                        </thead>\n                                        <tbody>\n                                            <tr *ngFor=\"let item of cartItems;index as i\">\n                                                <td colspan=\"3\"><a>{{item.itemName}}</a></td>\n                                                <td>₹{{item.unitPrice}}</td>\n                                                <td class=\"text-nowrap\">\n                                                    <a class=\"glyphicon glyphicon-triangle-left\"></a>\n                                                    {{item.quantity}}\n                                                    <a class=\"glyphicon glyphicon-triangle-right\"></a>\n                                                </td>\n                                                <td>{{item.totalPrice}}</td>\n                                                <td *ngIf=!isOrderSubmitted><a class=\"btn btn-danger btn-xs\" (click)=\"removeFromCart(item)\">x</a></td>\n                                                <td *ngIf=isOrderSubmitted><a class=\"btn btn-danger disabled btn-xs\">x</a></td>\n                                            </tr>\n                                            <tr class=\"\" style=\"background:#F6F1ED\">\n\n                                                <td colspan=\"3\" class=\"text-left\">\n                                                    GST : {{gstAmount}}\n                                                </td>\n                                                <td colspan=\"3\" class=\"text-left lead\">\n                                                    Total : {{grandTotal}}\n                                                </td>\n                                                <td>\n                                                </td>\n                                            </tr>\n                                            <tr class=\"lead\" style=\"background:#F6F1ED\">\n                                                <td colspan=\"4\" class=\"text-center\">\n                                                    <ng-container *ngIf=\"itemsCount>0\">\n                                                        <button style=\"width:100%\" *ngIf=!isOrderSubmitted class=\"btn btn-danger btn-sm\" (click)=\"placeOrder()\">\n                                                            Place Order\n                                                            <span class=\"glyphicon glyphicon-ok\"></span>\n                                                        </button>\n                                                    </ng-container>\n                                                </td>\n                                                <td colspan=\"3\" class=\"text-center\">\n                                                    <ng-container *ngIf=\"itemsCount>0\">\n                                                        <button style=\"width:100%\" *ngIf=!isOrderSubmitted class=\"btn btn-danger btn-sm\" (click)=\"clearCart()\">\n                                                            Clear Cart\n                                                            <span class=\"glyphicon glyphicon-refresh\"></span>\n                                                        </button>\n                                                    </ng-container>\n                                                </td>\n                                            </tr>\n                                            <ng-container *ngIf=isOrderSubmitted>\n                                                <tr>\n                                                    <td colspan=\"7\">\n                                                        <div class=\"shop-tracking-status\">\n                                                            <div class=\"order-status\">\n\n                                                                <div class=\"order-status-timeline\">\n                                                                    <!-- class names: c0 c1 c2 c3 and c4 -->\n                                                                    <div class=\"order-status-timeline-completion c0\"></div>\n                                                                </div>\n                                                                <div class=\"image-order-status image-order-status-new img-circle\">\n                                                                    <span class=\"status\">Placed</span>\n                                                                    <div class=\"glyphicon glyphicon-flag\"></div>\n                                                                </div>\n                                                                <div class=\"image-order-status image-order-status-active img-circle\">\n                                                                    <span class=\"status\">Approved</span>\n                                                                    <div class=\"glyphicon glyphicon-thumbs-up\"></div>\n                                                                </div>\n                                                                <div class=\"image-order-status image-order-status-intransit img-circle\">\n                                                                    <span class=\"status\">In progress</span>\n                                                                    <div class=\"glyphicon glyphicon-hourglass\"></div>\n                                                                </div>\n                                                                <div class=\"image-order-status image-order-status-delivered img-circle\">\n                                                                    <span class=\"status\">Delivered</span>\n                                                                    <div class=\"glyphicon glyphicon-compressed\"></div>\n                                                                </div>\n                                                                <div class=\"image-order-status image-order-status-completed img-circle\">\n                                                                    <span class=\"status\">Completed</span>\n                                                                    <div class=\"glyphicon glyphicon-ok-sign\"></div>\n                                                                </div>\n                                                            </div>\n                                                        </div>\n                                                    </td>\n                                                </tr>\n                                            </ng-container>\n                                        </tbody>\n                                    </table>\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n            <div class=\"modal-footer\">\n                <span style=\"margin-bottom:0px;\" class=\"lead glyphicon glyphicon-remove-circle\" data-dismiss=\"modal\"></span>\n            </div>\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/shopping-cart-component/shopping-cart-component.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ShoppingCartComponentComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ShoppingCartComponentComponent = (function () {
    function ShoppingCartComponentComponent() {
        this.cartItems = [];
        this.grandTotal = 0;
        this.subtotal = 0;
        this.itemsCount = 0;
        this.gstAmount = 0;
        this.gst = 18;
        this.isOrderSubmitted = false;
        this.isOrderApproved = false;
        this.isOrderDelivered = false;
        console.log('constructor');
    }
    ShoppingCartComponentComponent.prototype.ngOnInit = function () {
        console.log('ngOnInit');
        this.cartItems = [{
                "Id": "11111",
                "itemName": "Mutton Soup",
                "unitPrice": "100",
                "quantity": "1"
            },
            {
                "Id": "11112",
                "itemName": "Chicken Biriryani",
                "unitPrice": "200",
                "quantity": "1"
            },
            {
                "Id": "11113",
                "itemName": "Orance Juice",
                "unitPrice": "50",
                "quantity": "2"
            }];
        this.grandTotal = this.getGrantTotal();
    };
    ShoppingCartComponentComponent.prototype.removeFromCart = function (item) {
        console.log('removeFromCart');
        console.log(item.Id);
        //document.getElementById("success_msg").style.display="block";
        //setTimeout(function(){ document.getElementById("success_msg").style.display="none"; }, 500);
    };
    ShoppingCartComponentComponent.prototype.getGrantTotal = function () {
        var total = 0;
        console.log('getGrantTotal');
        this.itemsCount = this.cartItems.length;
        for (var i = 0; i < this.cartItems.length; i++) {
            this.cartItems[i].totalPrice = (this.cartItems[i].unitPrice * this.cartItems[i].quantity);
            total += +this.cartItems[i].totalPrice;
        }
        this.subtotal = total;
        this.gstAmount = total * (this.gst / 100);
        return (+this.subtotal + +this.gstAmount);
    };
    ShoppingCartComponentComponent.prototype.placeOrder = function () {
        //document.getElementById("success_msg_order").style.display="block";
        //setTimeout(function(){ document.getElementById("success_msg_order").style.display="none"; }, 500);
        this.isOrderSubmitted = true;
    };
    ShoppingCartComponentComponent.prototype.clearCart = function () {
        this.cartItems = [];
        this.grandTotal = this.getGrantTotal();
    };
    return ShoppingCartComponentComponent;
}());
ShoppingCartComponentComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_0" /* Component */])({
        selector: 'app-shopping-cart-component',
        template: __webpack_require__("../../../../../src/app/shopping-cart-component/shopping-cart-component.component.html"),
        styles: [__webpack_require__("../../../../../src/app/shopping-cart-component/shopping-cart-component.component.css")]
    }),
    __metadata("design:paramtypes", [])
], ShoppingCartComponentComponent);

//# sourceMappingURL=shopping-cart-component.component.js.map

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

module.exports = "<div class=\"container-fluid\">\n    <div class=\"panel panel-default\" style=\"border-radius:0px !important\" id=\"{{title}}\">\n        <ul class=\"list-group\">\n            <li class=\"list-group-item lead\" style=\"background:#BFBFBF;border-radius:0px !important;\n            color:#000000\">{{title}}\n                <button class=\"btn btn-sm pull-right\" style=\"background:#000000;color:#ffffff\">\n                <span class=\"glyphicon glyphicon-menu-right\"></span>\n                <span class=\"glyphicon glyphicon-menu-right\"></span>\n                <span class=\"glyphicon glyphicon-menu-right\"></span>\n                </button>\n            </li>\n        </ul>\n        <div class=\"row\">\n            <div *ngFor=\"let item of items; let i=index\" class=\"col-xs-12 col-sm-6 col-md-6 col-lg-3\" data-placement=\"bottom\" data-toggle=\"popover\" data-content=\"Aligns nav links, forms, buttons, or text, in the navbar to the left\" data-trigger=\"hover\">\n                <div class=\"media padding-2px\">\n                    <div class=\"\" style=\"position:absolute;z-index:5\">\n                        <div class=\"btn-group btn-block\" role=\"group\" aria-label=\"plus-minus\">\n                            <button (click)=\"minusQty(i)\" type=\"button\" class=\"btn btn-sm minus-button merge-top-left-button\" style=\"outline:none;border-radius:50px;border:1px solid #F22613;background:#ffffff;color:#F22613\">\n                                <span class=\"glyphicon glyphicon-minus\"></span>\n                            </button>\n                        </div>\n                        <input id=\"qty_{{i}}\" type=\"text\" value=\"1\" class=\"input-sm form-control\" style=\"width:35px\">\n                        <div class=\"btn-group btn-block\" role=\"group\" aria-label=\"plus-minus\">\n                            <button (click)=\"plusQty(i)\" type=\"button\" class=\"btn btn-sm plus-button merge-top-right-button\" style=\"outline:none;border-radius:50px;border:1px solid darkgreen;background:#ffffff;color:darkgreen\">\n                                <span class=\"glyphicon glyphicon-plus\"></span>\n                            </button>\n                        </div>\n                    </div>\n                    <div class=\"col-sm-4 col-xs-4 input-lg\" style=\"position:absolute;right: 2px;z-index: 9;min-width: 40%;\">\n                        <span class=\"fa fa-rupee\" style=\"text-decoration:line-through;\">{{item.strikeThroughPrice}}</span>\n                        <span class=\"fa fa-rupee padding-2px\" style=\"color:white;font-size:25px;background:#000000\">{{item.unitPrice}}</span>\n                    </div>\n                    <div class=\"media-top\">\n                        <img height=\"150px\" width=\"150px\" src=\"{{imageURL}}\">\n                    </div>\n                    <div class=\"media-body\" style=\"text-align:center;background:#ffffff;opacity:.9;\n                    margin-top: -100px;float: right;width: 75%;\">\n                        <h4 class=\"media-heading\">{{item.name}}</h4>\n                        <p>{{item.description}}</p>\n                    </div>\n                    <div class=\"col-sm-12 col-xs-12 input-group text-center\" style=\"z-index:5;background:#f0f0f0;\">\n                        <div class=\"col-sm-4 col-xs-4 padding-2px\" style=\"font-size:10px;\">\n                            <span class=\"glyphicon glyphicon-star\" style=\"vertical-align:bottom;\"></span>\n                            <span class=\"glyphicon glyphicon-star\" style=\"vertical-align:bottom;\"></span>\n                            <span class=\"glyphicon glyphicon-star\" style=\"vertical-align:bottom;\"></span>\n                            <span class=\"glyphicon glyphicon-star\" style=\"vertical-align:bottom;\"></span>\n                            <span class=\"glyphicon glyphicon-star\" style=\"vertical-align:bottom;\"></span>\n                        </div>\n                        <!--    <input id=\"rating-system\" type=\"number\" class=\"rating\" min=\"1\" max=\"5\" step=\"1\" value=\"3\">-->\n                        <div class=\"col-sm-2 col-xs-2\">\n                            <span *ngIf=item.isVeg class=\"vegetarianicon\">⊡</span>\n                            <span *ngIf=!item.isVeg class=\"non-vegetarianicon\">⊡</span>\n                        </div>\n                        <button (click)=\"addToCart()\" class=\"col-sm-6 col-xs-6 btn icon-btn btn-success\" href=\"#\">\n                            <span class=\"glyphicon btn-glyphicon glyphicon-plus img-circle text-success\">\n                            </span> Add\n                        </button>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>"

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
        this.items = [];
        this.items = [{
                "Id": "11111",
                "name": "Chicken Wings",
                "description": "Marinated chicken wings cooked over charcoal; Served with pickled vegetable, French fries, salad and mayonnaise",
                "unitPrice": "250",
                "strikeThroughPrice": "270",
                "isVeg": false
            },
            {
                "Id": "11112",
                "name": "Hummus",
                "description": "Paste of chickpeas combined with olive oil, garlic and lime juice",
                "unitPrice": "120",
                "strikeThroughPrice": "125",
                "isVeg": true
            },
            {
                "Id": "11113",
                "name": "Shish Paneer",
                "description": "Marinated cottage cheese cooked in a clay oven; Served with pickled vegetable, French fries, salad, mayonnaise and mint chutney",
                "unitPrice": "250",
                "strikeThroughPrice": "280",
                "isVeg": true
            },
            {
                "Id": "11114",
                "name": "Shawai",
                "description": "Whole chicken cooked in shawai grill; Served with pickled vegetable, French fries, salad, mayonnaise and mint chutney",
                "unitPrice": "180",
                "strikeThroughPrice": "185",
                "isVeg": false
            }];
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

module.exports = "<div class=\"container\">\n    <div class=\"row\">\n        <hr class=\"wedge\">\n    </div>\n</div>\n<div class=\"container-fluid\">\n    <div class=\"panel panel-default\" style=\"border-radius:0px !important\" id=\"{{title}}\">\n        <ul class=\"list-group\">\n            <li class=\"list-group-item lead\" style=\"background:#BFBFBF;border-radius:0px !important;\n            color:#000000\">{{title}}\n                <button class=\"btn btn-sm pull-right\" style=\"background:#000000;color:#ffffff\">\n                <span class=\"glyphicon glyphicon-menu-right\"></span>\n                <span class=\"glyphicon glyphicon-menu-right\"></span>\n                <span class=\"glyphicon glyphicon-menu-right\"></span>\n                </button>\n            </li>\n        </ul>\n        <div class=\"row\">\n            <div *ngFor=\"let item of items; let i=index\" class=\"col-xs-12 col-sm-6 col-md-6 col-lg-3\" data-placement=\"bottom\" data-toggle=\"popover\" data-content=\"Aligns nav links, forms, buttons, or text, in the navbar to the left\" data-trigger=\"hover\">\n                <div class=\"media padding-2px\">\n                    <div class=\"\" style=\"position:absolute;z-index:5\">\n                        <div class=\"btn-group btn-block\" role=\"group\" aria-label=\"plus-minus\">\n                            <button (click)=\"minusQty(i)\" type=\"button\" class=\"btn btn-sm minus-button merge-top-left-button\" style=\"outline:none;border-radius:50px;border:1px solid #F22613;background:#ffffff;color:#F22613\">\n                                <span class=\"glyphicon glyphicon-minus\"></span>\n                            </button>\n                        </div>\n                        <input id=\"qty_{{i}}\" type=\"text\" value=\"1\" class=\"input-sm form-control\" style=\"width:35px\">\n                        <div class=\"btn-group btn-block\" role=\"group\" aria-label=\"plus-minus\">\n                            <button (click)=\"plusQty(i)\" type=\"button\" class=\"btn btn-sm plus-button merge-top-right-button\" style=\"outline:none;border-radius:50px;border:1px solid darkgreen;background:#ffffff;color:darkgreen\">\n                                <span class=\"glyphicon glyphicon-plus\"></span>\n                            </button>\n                        </div>\n                    </div>\n                    <div class=\"col-sm-4 col-xs-4 input-lg\" style=\"position:absolute;right: 2px;z-index: 9;min-width: 40%;\">\n                        <span class=\"fa fa-rupee\" style=\"text-decoration:line-through;\">{{item.strikeThroughPrice}}</span>\n                        <span class=\"fa fa-rupee padding-2px\" style=\"color:white;font-size:25px;background:#000000\">{{item.unitPrice}}</span>\n                    </div>\n                    <div class=\"media-top\">\n                        <img height=\"150px\" width=\"150px\" src=\"{{imageURL}}\">\n                    </div>\n                    <div class=\"media-body\" style=\"text-align:center;background:#ffffff;opacity:.9;\n                    margin-top: -100px;float: right;width: 75%;\">\n                        <h4 class=\"media-heading\">{{item.name}}</h4>\n                        <p>{{item.description}}</p>\n                    </div>\n                    <div class=\"col-sm-12 col-xs-12 input-group text-center\" style=\"z-index:5;background:#f0f0f0;\">\n                        <div class=\"col-sm-4 col-xs-4 padding-2px\" style=\"font-size:10px;\">\n                            <span class=\"glyphicon glyphicon-star\" style=\"vertical-align:bottom;\"></span>\n                            <span class=\"glyphicon glyphicon-star\" style=\"vertical-align:bottom;\"></span>\n                            <span class=\"glyphicon glyphicon-star\" style=\"vertical-align:bottom;\"></span>\n                            <span class=\"glyphicon glyphicon-star\" style=\"vertical-align:bottom;\"></span>\n                            <span class=\"glyphicon glyphicon-star\" style=\"vertical-align:bottom;\"></span>\n                        </div>\n                        <!--    <input id=\"rating-system\" type=\"number\" class=\"rating\" min=\"1\" max=\"5\" step=\"1\" value=\"3\">-->\n                        <div class=\"col-sm-2 col-xs-2\">\n                            <span *ngIf=item.isVeg class=\"vegetarianicon\">⊡</span>\n                            <span *ngIf=!item.isVeg class=\"non-vegetarianicon\">⊡</span>\n                        </div>\n                        <button (click)=\"addToCart()\" class=\"col-sm-6 col-xs-6 btn icon-btn btn-success\" href=\"#\">\n                            <span class=\"glyphicon btn-glyphicon glyphicon-plus img-circle text-success\">\n                            </span> Add\n                        </button>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>"

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
        this.imageURL = "./assets/flavored-rice-250x250.jpg";
        this.items = [];
        this.items = [{
                "Id": "11111",
                "name": "Chicken Wings",
                "description": "Marinated chicken wings cooked over charcoal; Served with pickled vegetable, French fries, salad and mayonnaise",
                "unitPrice": "250",
                "strikeThroughPrice": "270",
                "isVeg": false
            },
            {
                "Id": "11112",
                "name": "Hummus",
                "description": "Paste of chickpeas combined with olive oil, garlic and lime juice",
                "unitPrice": "120",
                "strikeThroughPrice": "125",
                "isVeg": true
            },
            {
                "Id": "11113",
                "name": "Shish Paneer",
                "description": "Marinated cottage cheese cooked in a clay oven; Served with pickled vegetable, French fries, salad, mayonnaise and mint chutney",
                "unitPrice": "250",
                "strikeThroughPrice": "280",
                "isVeg": true
            },
            {
                "Id": "11114",
                "name": "Shawai",
                "description": "Whole chicken cooked in shawai grill; Served with pickled vegetable, French fries, salad, mayonnaise and mint chutney",
                "unitPrice": "180",
                "strikeThroughPrice": "185",
                "isVeg": false
            }];
    }
    TrendingThisWeekComponent.prototype.ngOnInit = function () {
    };
    TrendingThisWeekComponent.prototype.minusQty = function (index) {
        var qty = parseFloat(document.getElementById("qty_" + index).value);
        console.log(qty);
        if (qty > 1) {
            qty = +qty - +1;
        }
        document.getElementById("qty_" + index).value = qty + "";
    };
    TrendingThisWeekComponent.prototype.plusQty = function (index) {
        var qty = parseFloat(document.getElementById("qty_" + index).value);
        console.log(qty);
        qty = +qty + +1;
        document.getElementById("qty_" + index).value = qty + "";
    };
    TrendingThisWeekComponent.prototype.addToCart = function (id, name, qty, unitPrice) {
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