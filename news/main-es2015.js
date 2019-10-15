(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-navbar></app-navbar>\n<div class=\"container\">\n  <div class=\"row\">\n    <div class=\"col-md-12 mt-2\">\n      <a class=\"badge badge-primary mr-2\" [routerLink]=\"[ '/business_headlines' ]\">Business Headlines</a>\n      <a class=\"badge badge-danger mr-2\" [routerLink]=\"[ '/bitcoin' ]\">BitCoin</a>\n      <a class=\"badge badge-success mr-2\" [routerLink]=\"[ '/apple' ]\">Apple News</a>\n      <a class=\"badge badge-info mr-2\" [routerLink]=\"[ '/techcrunch' ]\">TechCrunch News</a>\n      <a class=\"badge badge-primary mr-2\" [routerLink]=\"[ '/wall_street' ]\">Wall Street</a>\n      <a class=\"badge badge-light mr-2\" [routerLink]=\"[ '/google' ]\">Google News</a>\n      <a class=\"badge badge-dark mr-2\" [routerLink]=\"[ '/italy' ]\">Google Italy</a>\n      <a class=\"badge badge-secondary mr-2\" [routerLink]=\"[ '/saudi' ]\">Google Saudi</a>\n    </div>\n  </div>\n</div>\n<router-outlet></router-outlet>\n<app-footer></app-footer>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/apple/apple.component.html":
/*!**********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/apple/apple.component.html ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container mt-3\">\n  <div class=\"row\">\n    <div class=\"col-md-8\">\n      <div *ngIf=\"status== '426'; else elseBlock\">\n        <div class=\"alert alert-danger\" role=\"alert\">\n          <h4 class=\"alert-heading\">News Not Found!!!</h4>\n          <p>Aww News not found, let's try another source...</p>\n          <p>You will find another source on above badges, Thanks.</p>\n          <hr>\n          <p class=\"mb-0\"><a href=\"#\">Go to home</a></p>\n        </div>\n\n      </div>\n      <ng-template #elseBlock>\n        <app-post *ngFor=\"let post of newsData\" [author]=\"post.author\" [title]=\"post.title\"\n          [description]=\"post.description\" [url]=\"post.url\" [urlToImage]=\"post.urlToImage\"\n          [publishedAt]=\"post.publishedAt\" [content]=\"post.content\" status=\"426\">\n        </app-post>\n      </ng-template>\n    </div>\n  </div>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/bitcoin/bitcoin.component.html":
/*!**************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/bitcoin/bitcoin.component.html ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container mt-3\">\n  <div class=\"row\">\n    <div class=\"col-md-8\">\n      <div *ngIf=\"status== '426'; else elseBlock\">\n        <div class=\"alert alert-danger\" role=\"alert\">\n          <h4 class=\"alert-heading\">News Not Found!!!</h4>\n          <p>Aww News not found, let's try another source...</p>\n          <p>You will find another source on above badges, Thanks.</p>\n          <hr>\n          <p class=\"mb-0\"><a href=\"#\">Go to home</a></p>\n        </div>\n\n      </div>\n      <ng-template #elseBlock>\n        <app-post *ngFor=\"let post of newsData\" [author]=\"post.author\" [title]=\"post.title\"\n          [description]=\"post.description\" [url]=\"post.url\" [urlToImage]=\"post.urlToImage\"\n          [publishedAt]=\"post.publishedAt\" [content]=\"post.content\" status=\"426\">\n        </app-post>\n      </ng-template>\n    </div>\n  </div>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/busines-headlines/busines-headlines.component.html":
/*!**********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/busines-headlines/busines-headlines.component.html ***!
  \**********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container mt-3\">\n  <div class=\"row\">\n    <div class=\"col-md-8\">\n      <div *ngIf=\"status== '426'; else elseBlock\">\n        <div class=\"alert alert-danger\" role=\"alert\">\n          <h4 class=\"alert-heading\">News Not Found!!!</h4>\n          <p>Aww News not found, let's try another source...</p>\n          <p>You will find another source on above badges, Thanks.</p>\n          <hr>\n          <p class=\"mb-0\"><a href=\"#\">Go to home</a></p>\n        </div>\n\n      </div>\n      <ng-template #elseBlock>\n        <app-post *ngFor=\"let post of newsData\" [author]=\"post.author\" [title]=\"post.title\"\n          [description]=\"post.description\" [url]=\"post.url\" [urlToImage]=\"post.urlToImage\"\n          [publishedAt]=\"post.publishedAt\" [content]=\"post.content\" status=\"426\">\n        </app-post>\n      </ng-template>\n    </div>\n  </div>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/footer/footer.component.html":
/*!************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/footer/footer.component.html ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"py-3 text-center bg-secondary\">\n  <div class=\"container\">\n    <p class=\"m-0\">Copyright © <a href=\"http://bootcatch.com\" target=\"_blank\">Bootcatch.com</a> All rights reserved.</p>\n    <small>Based on <a target=\"_blank\" href=\"http://bootcatch.com/material/alerts\">Bootcatch\n        Material\n        CSS</a></small>\n  </div>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/google-italy/google-italy.component.html":
/*!************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/google-italy/google-italy.component.html ***!
  \************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container mt-3\">\n  <div class=\"row\">\n    <div class=\"col-md-8\">\n      <div *ngIf=\"status== '426'; else elseBlock\">\n        <div class=\"alert alert-danger\" role=\"alert\">\n          <h4 class=\"alert-heading\">News Not Found!!!</h4>\n          <p>Aww News not found, let's try another source...</p>\n          <p>You will find another source on above badges, Thanks.</p>\n          <hr>\n          <p class=\"mb-0\"><a href=\"#\">Go to home</a></p>\n        </div>\n\n      </div>\n      <ng-template #elseBlock>\n        <app-post *ngFor=\"let post of newsData\" [author]=\"post.author\" [title]=\"post.title\"\n          [description]=\"post.description\" [url]=\"post.url\" [urlToImage]=\"post.urlToImage\"\n          [publishedAt]=\"post.publishedAt\" [content]=\"post.content\" status=\"426\">\n        </app-post>\n      </ng-template>\n    </div>\n  </div>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/google-news/google-news.component.html":
/*!**********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/google-news/google-news.component.html ***!
  \**********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container mt-3\">\n  <div class=\"row\">\n    <div class=\"col-md-8\">\n      <div *ngIf=\"status== '426'; else elseBlock\">\n        <div class=\"alert alert-danger\" role=\"alert\">\n          <h4 class=\"alert-heading\">News Not Found!!!</h4>\n          <p>Aww News not found, let's try another source...</p>\n          <p>You will find another source on above badges, Thanks.</p>\n          <hr>\n          <p class=\"mb-0\"><a href=\"#\">Go to home</a></p>\n        </div>\n\n      </div>\n      <ng-template #elseBlock>\n        <app-post *ngFor=\"let post of newsData\" [author]=\"post.author\" [title]=\"post.title\"\n          [description]=\"post.description\" [url]=\"post.url\" [urlToImage]=\"post.urlToImage\"\n          [publishedAt]=\"post.publishedAt\" [content]=\"post.content\" status=\"426\">\n        </app-post>\n      </ng-template>\n    </div>\n  </div>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/google-saudi/google-saudi.component.html":
/*!************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/google-saudi/google-saudi.component.html ***!
  \************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container mt-3\">\n  <div class=\"row\">\n    <div class=\"col-md-8\">\n      <div *ngIf=\"status== '426'; else elseBlock\">\n        <div class=\"alert alert-danger\" role=\"alert\">\n          <h4 class=\"alert-heading\">News Not Found!!!</h4>\n          <p>Aww News not found, let's try another source...</p>\n          <p>You will find another source on above badges, Thanks.</p>\n          <hr>\n          <p class=\"mb-0\"><a href=\"#\">Go to home</a></p>\n        </div>\n\n      </div>\n      <ng-template #elseBlock>\n        <app-post *ngFor=\"let post of newsData\" [author]=\"post.author\" [title]=\"post.title\"\n          [description]=\"post.description\" [url]=\"post.url\" [urlToImage]=\"post.urlToImage\"\n          [publishedAt]=\"post.publishedAt\" [content]=\"post.content\" status=\"426\">\n        </app-post>\n      </ng-template>\n    </div>\n  </div>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.component.html":
/*!********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.component.html ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container\">\n  <div class=\"row\">\n    <div class=\"col-md-12 mt-3\">\n      <div class=\"card-group\" *ngIf=\"newsData\">\n        <div class=\"card\">\n          <img [src]=\"newsData[0].urlToImage\" class=\"card-img-top\" alt=\"...\">\n          <div class=\"card-body\">\n            <h5 class=\"card-title\">{{ newsData[0].title }}</h5>\n            <p class=\"card-text\">{{ newsData[0].description }}</p>\n            <p class=\"card-text\"><small class=\"text-muted\">Last updated {{ newsData[0].publishedAt }}</small></p>\n            <a class=\"btn btn-primary\" [routerLink]=\"[ '/google' ]\">Google News</a>\n          </div>\n        </div>\n        <div class=\"card\">\n          <img [src]=\"newsData[1].urlToImage\" class=\"card-img-top\" alt=\"...\">\n          <div class=\"card-body\">\n            <h5 class=\"card-title\">{{ newsData[1].title }}</h5>\n            <p class=\"card-text\">{{ newsData[1].description }}</p>\n            <p class=\"card-text\"><small class=\"text-muted\">Last updated {{ newsData[1].publishedAt }}</small></p>\n          </div>\n        </div>\n        <div class=\"card\">\n          <img [src]=\"newsData[2].urlToImage\" class=\"card-img-top\" alt=\"...\">\n          <div class=\"card-body\">\n            <h5 class=\"card-title\">{{newsData[2].title}}</h5>\n            <p class=\"card-text\">{{newsData[2].description}}</p>\n            <p class=\"card-text\"><small class=\"text-muted\">Last updated {{newsData[2].publishedAt}}</small></p>\n          </div>\n        </div>\n      </div>\n    </div>\n    <div class=\"col-md-12 mt-3\">\n      <div class=\"card-columns\">\n        <div class=\"card\">\n          <img [src]=\"businessHeadline[0].urlToImage\" class=\"card-img-top\" alt=\"...\">\n          <div class=\"card-body\">\n            <h5 class=\"card-title\">{{ businessHeadline[0].title }}</h5>\n            <p class=\"card-text\">{{ businessHeadline[0].description }}</p>\n            <a class=\"btn btn-primary\" [routerLink]=\"[ '/business_headlines' ]\">Business Headlines - US</a>\n          </div>\n        </div>\n        <div class=\"card border-success text-success p-3\">\n          <blockquote class=\"blockquote mb-0 card-body\">\n            <p>{{wallstreet_news[4].title}}</p>\n            <footer class=\"blockquote-footer\">\n              <small class=\"text-muted\">\n                Source : <cite title=\"Source Title\">{{wallstreet_news[4].publishedAt}}</cite>\n              </small>\n            </footer>\n          </blockquote>\n        </div>\n        <div class=\"card\">\n          <img [src]=\"businessHeadline[1].urlToImage\" class=\"card-img-top\" alt=\"...\">\n          <div class=\"card-body\">\n            <h5 class=\"card-title\">{{businessHeadline[1].title}}</h5>\n            <p class=\"card-text\">{{businessHeadline[1].description}}</p>\n            <p class=\"card-text\"><small class=\"text-muted\">Published at: {{ businessHeadline[1].publishedAt}}</small>\n            </p>\n          </div>\n        </div>\n        <div class=\"card bg-primary text-white text-center p-3\">\n          <blockquote class=\"blockquote mb-0\">\n            <p>{{wallstreet_news[2].title}}</p>\n            <footer class=\"blockquote-footer text-white\">\n              <small>\n                Source: <cite title=\"Source Title\">{{wallstreet_news[2].source.name}}</cite>\n              </small>\n            </footer>\n          </blockquote>\n        </div>\n        <div class=\"card border-primary text-primary text-center\">\n          <div class=\"card-body\">\n            <h5 class=\"card-title\">{{ wallstreet_news[3].title}}</h5>\n            <p class=\"card-text\">{{ wallstreet_news[3].description}}</p>\n            <p class=\"card-text\"><small class=\"text-muted\">{{ wallstreet_news[3].publishedAt}}</small></p>\n          </div>\n        </div>\n        <div class=\"card\">\n          <img [src]=\"businessHeadline[3].urlToImage\" class=\"card-img-top\" [alt]=\"businessHeadline[3].title\">\n        </div>\n        <div class=\"card border-dark p-3 text-right\">\n          <blockquote class=\"blockquote mb-0\">\n            <p>{{ wallstreet_news[0].title }}</p>\n            <footer class=\"blockquote-footer\">\n              <small class=\"text-muted\">\n                Source: <cite title=\"Source Title\">{{wallstreet_news[0].source.name}}</cite>\n              </small>\n            </footer>\n          </blockquote>\n        </div>\n        <div class=\"card\">\n          <div class=\"card-body\">\n            <h5 class=\"card-title\">{{wallstreet_news[1].title}}</h5>\n            <p class=\"card-text\">{{wallstreet_news[1].description}}</p>\n            <p class=\"card-text\"><small class=\"text-muted\">{{wallstreet_news[1].source.name}}</small></p>\n            <a class=\"btn btn-primary\" [routerLink]=\"[ '/wall_street' ]\">Wallstreet Journal</a>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/navbar/navbar.component.html":
/*!************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/navbar/navbar.component.html ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<nav class=\"navbar navbar-expand-lg navbar-dark bg-primary\">\n  <!-- <a class=\"navbar-brand\" href=\"#\">News Bootcatch</a> -->\n\n  <a class=\"navbar-brand\" href=\"#\">\n    <img src=\"../../assets/nb-logo.png\" width=\"30\" height=\"30\" class=\"d-inline-block align-top\" alt=\"\">\n    News\n  </a>\n  <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarSupportedContent\"\n    aria-controls=\"navbarSupportedContent\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n    <span class=\"navbar-toggler-icon\"></span>\n  </button>\n\n  <div class=\"collapse navbar-collapse\" id=\"navbarSupportedContent\">\n    <ul class=\"navbar-nav mr-auto\">\n      <li class=\"nav-item active\">\n        <a class=\"nav-link\" [routerLink]=\"[ '/' ]\">Home <span class=\"sr-only\">(current)</span></a>\n      </li>\n\n      <li class=\"nav-item dropdown\">\n        <a class=\"nav-link dropdown-toggle\" href=\"#\" id=\"navbarDropdown\" role=\"button\" data-toggle=\"dropdown\"\n          aria-haspopup=\"true\" aria-expanded=\"false\">\n          News\n        </a>\n        <div class=\"dropdown-menu\" aria-labelledby=\"navbarDropdown\">\n\n          <a class=\"dropdown-item\" [routerLink]=\"[ '/bitcoin' ]\">Bitcoin</a>\n\n          <a class=\"dropdown-item\" [routerLink]=\"[ '/business_headlines' ]\">Business\n            Headlines</a>\n          <a class=\"dropdown-item\" [routerLink]=\"[ '/apple' ]\">Apple News</a>\n          <a class=\"dropdown-item\" [routerLink]=\"[ '/techcrunch' ]\">TechCrunch</a>\n\n          <div class=\"dropdown-divider\"></div>\n          <a class=\"dropdown-item\" [routerLink]=\"[ '/wall_street' ]\">Wall Street</a>\n          <a class=\"dropdown-item\" [routerLink]=\"[ '/google' ]\">Google News</a>\n          <a class=\"dropdown-item\" [routerLink]=\"[ '/italy' ]\">Google Italy</a>\n          <a class=\"dropdown-item\" [routerLink]=\"[ '/saudi' ]\">Google Saudi</a>\n\n        </div>\n      </li>\n\n    </ul>\n  </div>\n</nav>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/post/post.component.html":
/*!********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/post/post.component.html ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"card mb-4\">\n  <div class=\"card-header\">\n    by <span class=\"text-success\">{{ author }}</span> on <span class=\"text-success\">{{ publishedAt}}</span>\n  </div>\n  <img class=\"card-img-top\" *ngIf=\"urlToImage\" [src]=\"urlToImage\" alt=\"Card image cap\">\n  <div class=\"card-body\">\n    <h3> {{ title }}</h3>\n    <p class=\"m-0\"> {{description }}</p>\n  </div>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/tech-crunch/tech-crunch.component.html":
/*!**********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/tech-crunch/tech-crunch.component.html ***!
  \**********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container mt-3\">\n  <div class=\"row\">\n    <div class=\"col-md-8\">\n      <div *ngIf=\"status== '426'; else elseBlock\">\n        <div class=\"alert alert-danger\" role=\"alert\">\n          <h4 class=\"alert-heading\">News Not Found!!!</h4>\n          <p>Aww News not found, let's try another source...</p>\n          <p>You will find another source on above badges, Thanks.</p>\n          <hr>\n          <p class=\"mb-0\"><a href=\"#\">Go to home</a></p>\n        </div>\n\n      </div>\n      <ng-template #elseBlock>\n        <app-post *ngFor=\"let post of newsData\" [author]=\"post.author\" [title]=\"post.title\"\n          [description]=\"post.description\" [url]=\"post.url\" [urlToImage]=\"post.urlToImage\"\n          [publishedAt]=\"post.publishedAt\" [content]=\"post.content\" status=\"426\">\n        </app-post>\n      </ng-template>\n    </div>\n  </div>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/wall-street/wall-street.component.html":
/*!**********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/wall-street/wall-street.component.html ***!
  \**********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container mt-3\">\n  <div class=\"row\">\n    <div class=\"col-md-8\">\n      <div *ngIf=\"status== '426'; else elseBlock\">\n        <div class=\"alert alert-danger\" role=\"alert\">\n          <h4 class=\"alert-heading\">News Not Found!!!</h4>\n          <p>Aww News not found, let's try another source...</p>\n          <p>You will find another source on above badges, Thanks.</p>\n          <hr>\n          <p class=\"mb-0\"><a href=\"#\">Go to home</a></p>\n        </div>\n      </div>\n      <ng-template #elseBlock>\n        <app-post *ngFor=\"let post of newsData\" [author]=\"post.author\" [title]=\"post.title\"\n          [description]=\"post.description\" [url]=\"post.url\" [urlToImage]=\"post.urlToImage\"\n          [publishedAt]=\"post.publishedAt\" [content]=\"post.content\" status=\"426\">\n        </app-post>\n      </ng-template>\n    </div>\n  </div>\n</div>\n");

/***/ }),

/***/ "./node_modules/tslib/tslib.es6.js":
/*!*****************************************!*\
  !*** ./node_modules/tslib/tslib.es6.js ***!
  \*****************************************/
/*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function() { return __extends; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function() { return __assign; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function() { return __rest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function() { return __decorate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function() { return __param; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function() { return __metadata; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function() { return __awaiter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function() { return __generator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function() { return __exportStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function() { return __values; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function() { return __read; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function() { return __spread; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spreadArrays", function() { return __spreadArrays; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function() { return __await; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function() { return __asyncGenerator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function() { return __asyncDelegator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function() { return __asyncValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function() { return __makeTemplateObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function() { return __importStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function() { return __importDefault; });
/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    }
    return __assign.apply(this, arguments);
}

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

function __exportStar(m, exports) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}

function __values(o) {
    var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
    if (m) return m.call(o);
    return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result.default = mod;
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}


/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _bitcoin_bitcoin_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./bitcoin/bitcoin.component */ "./src/app/bitcoin/bitcoin.component.ts");
/* harmony import */ var _busines_headlines_busines_headlines_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./busines-headlines/busines-headlines.component */ "./src/app/busines-headlines/busines-headlines.component.ts");
/* harmony import */ var _apple_apple_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./apple/apple.component */ "./src/app/apple/apple.component.ts");
/* harmony import */ var _tech_crunch_tech_crunch_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./tech-crunch/tech-crunch.component */ "./src/app/tech-crunch/tech-crunch.component.ts");
/* harmony import */ var _wall_street_wall_street_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./wall-street/wall-street.component */ "./src/app/wall-street/wall-street.component.ts");
/* harmony import */ var _google_news_google_news_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./google-news/google-news.component */ "./src/app/google-news/google-news.component.ts");
/* harmony import */ var _google_italy_google_italy_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./google-italy/google-italy.component */ "./src/app/google-italy/google-italy.component.ts");
/* harmony import */ var _google_saudi_google_saudi_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./google-saudi/google-saudi.component */ "./src/app/google-saudi/google-saudi.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");












const routes = [
    { path: 'bitcoin', component: _bitcoin_bitcoin_component__WEBPACK_IMPORTED_MODULE_3__["BitcoinComponent"] },
    { path: 'business_headlines', component: _busines_headlines_busines_headlines_component__WEBPACK_IMPORTED_MODULE_4__["BusinesHeadlinesComponent"] },
    { path: 'apple', component: _apple_apple_component__WEBPACK_IMPORTED_MODULE_5__["AppleComponent"] },
    { path: 'techcrunch', component: _tech_crunch_tech_crunch_component__WEBPACK_IMPORTED_MODULE_6__["TechCrunchComponent"] },
    { path: 'wall_street', component: _wall_street_wall_street_component__WEBPACK_IMPORTED_MODULE_7__["WallStreetComponent"] },
    { path: 'google', component: _google_news_google_news_component__WEBPACK_IMPORTED_MODULE_8__["GoogleNewsComponent"] },
    { path: 'italy', component: _google_italy_google_italy_component__WEBPACK_IMPORTED_MODULE_9__["GoogleItalyComponent"] },
    { path: 'saudi', component: _google_saudi_google_saudi_component__WEBPACK_IMPORTED_MODULE_10__["GoogleSaudiComponent"] },
    { path: '', component: _home_home_component__WEBPACK_IMPORTED_MODULE_11__["HomeComponent"] },
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], AppRoutingModule);



/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let AppComponent = class AppComponent {
    constructor() {
        this.title = 'bitcoin-news';
    }
};
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")).default]
    })
], AppComponent);



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _post_post_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./post/post.component */ "./src/app/post/post.component.ts");
/* harmony import */ var _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./navbar/navbar.component */ "./src/app/navbar/navbar.component.ts");
/* harmony import */ var _bitcoin_bitcoin_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./bitcoin/bitcoin.component */ "./src/app/bitcoin/bitcoin.component.ts");
/* harmony import */ var _busines_headlines_busines_headlines_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./busines-headlines/busines-headlines.component */ "./src/app/busines-headlines/busines-headlines.component.ts");
/* harmony import */ var _apple_apple_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./apple/apple.component */ "./src/app/apple/apple.component.ts");
/* harmony import */ var _tech_crunch_tech_crunch_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./tech-crunch/tech-crunch.component */ "./src/app/tech-crunch/tech-crunch.component.ts");
/* harmony import */ var _wall_street_wall_street_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./wall-street/wall-street.component */ "./src/app/wall-street/wall-street.component.ts");
/* harmony import */ var _google_news_google_news_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./google-news/google-news.component */ "./src/app/google-news/google-news.component.ts");
/* harmony import */ var _google_italy_google_italy_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./google-italy/google-italy.component */ "./src/app/google-italy/google-italy.component.ts");
/* harmony import */ var _google_saudi_google_saudi_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./google-saudi/google-saudi.component */ "./src/app/google-saudi/google-saudi.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./footer/footer.component */ "./src/app/footer/footer.component.ts");


















let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
            _post_post_component__WEBPACK_IMPORTED_MODULE_6__["PostComponent"],
            _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_7__["NavbarComponent"],
            _bitcoin_bitcoin_component__WEBPACK_IMPORTED_MODULE_8__["BitcoinComponent"],
            _busines_headlines_busines_headlines_component__WEBPACK_IMPORTED_MODULE_9__["BusinesHeadlinesComponent"],
            _apple_apple_component__WEBPACK_IMPORTED_MODULE_10__["AppleComponent"],
            _tech_crunch_tech_crunch_component__WEBPACK_IMPORTED_MODULE_11__["TechCrunchComponent"],
            _wall_street_wall_street_component__WEBPACK_IMPORTED_MODULE_12__["WallStreetComponent"],
            _google_news_google_news_component__WEBPACK_IMPORTED_MODULE_13__["GoogleNewsComponent"],
            _google_italy_google_italy_component__WEBPACK_IMPORTED_MODULE_14__["GoogleItalyComponent"],
            _google_saudi_google_saudi_component__WEBPACK_IMPORTED_MODULE_15__["GoogleSaudiComponent"],
            _home_home_component__WEBPACK_IMPORTED_MODULE_16__["HomeComponent"],
            _footer_footer_component__WEBPACK_IMPORTED_MODULE_17__["FooterComponent"],
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"]
        ],
        providers: [],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./src/app/apple/apple.component.scss":
/*!********************************************!*\
  !*** ./src/app/apple/apple.component.scss ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcGxlL2FwcGxlLmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/apple/apple.component.ts":
/*!******************************************!*\
  !*** ./src/app/apple/apple.component.ts ***!
  \******************************************/
/*! exports provided: AppleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppleComponent", function() { return AppleComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _post_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../post.service */ "./src/app/post.service.ts");



let AppleComponent = class AppleComponent {
    constructor(post_service) {
        this.post_service = post_service;
    }
    ngOnInit() {
        this.News();
    }
    News() {
        this.post_service.GetApple()
            .subscribe((response) => {
            this.news = response;
            this.newsData = this.news.articles;
            console.log(response);
        }, (error) => console.log(error));
    }
};
AppleComponent.ctorParameters = () => [
    { type: _post_service__WEBPACK_IMPORTED_MODULE_2__["PostService"] }
];
AppleComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-apple',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./apple.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/apple/apple.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./apple.component.scss */ "./src/app/apple/apple.component.scss")).default]
    })
], AppleComponent);



/***/ }),

/***/ "./src/app/bitcoin/bitcoin.component.scss":
/*!************************************************!*\
  !*** ./src/app/bitcoin/bitcoin.component.scss ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2JpdGNvaW4vYml0Y29pbi5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/bitcoin/bitcoin.component.ts":
/*!**********************************************!*\
  !*** ./src/app/bitcoin/bitcoin.component.ts ***!
  \**********************************************/
/*! exports provided: BitcoinComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BitcoinComponent", function() { return BitcoinComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _post_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../post.service */ "./src/app/post.service.ts");



let BitcoinComponent = class BitcoinComponent {
    constructor(post_service) {
        this.post_service = post_service;
    }
    ngOnInit() {
        this.News();
    }
    News() {
        this.post_service.GetBitcoin()
            .subscribe((response) => {
            this.news = response;
            this.newsData = this.news.articles;
            console.log(response);
        }, (error) => {
            console.log('erro', error);
            console.log('erro', error.status);
            this.status = error.status;
        });
    }
};
BitcoinComponent.ctorParameters = () => [
    { type: _post_service__WEBPACK_IMPORTED_MODULE_2__["PostService"] }
];
BitcoinComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-bitcoin',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./bitcoin.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/bitcoin/bitcoin.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./bitcoin.component.scss */ "./src/app/bitcoin/bitcoin.component.scss")).default]
    })
], BitcoinComponent);



/***/ }),

/***/ "./src/app/busines-headlines/busines-headlines.component.scss":
/*!********************************************************************!*\
  !*** ./src/app/busines-headlines/busines-headlines.component.scss ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2J1c2luZXMtaGVhZGxpbmVzL2J1c2luZXMtaGVhZGxpbmVzLmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/busines-headlines/busines-headlines.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/busines-headlines/busines-headlines.component.ts ***!
  \******************************************************************/
/*! exports provided: BusinesHeadlinesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BusinesHeadlinesComponent", function() { return BusinesHeadlinesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _post_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../post.service */ "./src/app/post.service.ts");



let BusinesHeadlinesComponent = class BusinesHeadlinesComponent {
    constructor(post_service) {
        this.post_service = post_service;
    }
    ngOnInit() {
        this.News();
    }
    News() {
        this.post_service.GetBusinessHeadlines()
            .subscribe((response) => {
            this.news = response;
            this.newsData = this.news.articles;
            console.log(response);
        }, (error) => console.log(error));
    }
};
BusinesHeadlinesComponent.ctorParameters = () => [
    { type: _post_service__WEBPACK_IMPORTED_MODULE_2__["PostService"] }
];
BusinesHeadlinesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-busines-headlines',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./busines-headlines.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/busines-headlines/busines-headlines.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./busines-headlines.component.scss */ "./src/app/busines-headlines/busines-headlines.component.scss")).default]
    })
], BusinesHeadlinesComponent);



/***/ }),

/***/ "./src/app/footer/footer.component.scss":
/*!**********************************************!*\
  !*** ./src/app/footer/footer.component.scss ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Zvb3Rlci9mb290ZXIuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/footer/footer.component.ts":
/*!********************************************!*\
  !*** ./src/app/footer/footer.component.ts ***!
  \********************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let FooterComponent = class FooterComponent {
    constructor() { }
    ngOnInit() {
    }
};
FooterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-footer',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./footer.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/footer/footer.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./footer.component.scss */ "./src/app/footer/footer.component.scss")).default]
    })
], FooterComponent);



/***/ }),

/***/ "./src/app/google-italy/google-italy.component.scss":
/*!**********************************************************!*\
  !*** ./src/app/google-italy/google-italy.component.scss ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2dvb2dsZS1pdGFseS9nb29nbGUtaXRhbHkuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/google-italy/google-italy.component.ts":
/*!********************************************************!*\
  !*** ./src/app/google-italy/google-italy.component.ts ***!
  \********************************************************/
/*! exports provided: GoogleItalyComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GoogleItalyComponent", function() { return GoogleItalyComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _post_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../post.service */ "./src/app/post.service.ts");



let GoogleItalyComponent = class GoogleItalyComponent {
    constructor(post_service) {
        this.post_service = post_service;
    }
    ngOnInit() {
        this.News();
    }
    News() {
        this.post_service.GetGoogleItaly()
            .subscribe((response) => {
            this.news = response;
            this.newsData = this.news.articles;
            console.log(response);
        }, (error) => console.log(error));
    }
};
GoogleItalyComponent.ctorParameters = () => [
    { type: _post_service__WEBPACK_IMPORTED_MODULE_2__["PostService"] }
];
GoogleItalyComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-google-italy',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./google-italy.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/google-italy/google-italy.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./google-italy.component.scss */ "./src/app/google-italy/google-italy.component.scss")).default]
    })
], GoogleItalyComponent);



/***/ }),

/***/ "./src/app/google-news/google-news.component.scss":
/*!********************************************************!*\
  !*** ./src/app/google-news/google-news.component.scss ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2dvb2dsZS1uZXdzL2dvb2dsZS1uZXdzLmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/google-news/google-news.component.ts":
/*!******************************************************!*\
  !*** ./src/app/google-news/google-news.component.ts ***!
  \******************************************************/
/*! exports provided: GoogleNewsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GoogleNewsComponent", function() { return GoogleNewsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _post_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../post.service */ "./src/app/post.service.ts");



let GoogleNewsComponent = class GoogleNewsComponent {
    constructor(post_service) {
        this.post_service = post_service;
    }
    ngOnInit() {
        this.News();
    }
    News() {
        this.post_service.GetGoogleNews()
            .subscribe((response) => {
            this.news = response;
            this.newsData = this.news.articles;
            console.log(response);
        }, (error) => console.log(error));
    }
};
GoogleNewsComponent.ctorParameters = () => [
    { type: _post_service__WEBPACK_IMPORTED_MODULE_2__["PostService"] }
];
GoogleNewsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-google-news',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./google-news.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/google-news/google-news.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./google-news.component.scss */ "./src/app/google-news/google-news.component.scss")).default]
    })
], GoogleNewsComponent);



/***/ }),

/***/ "./src/app/google-saudi/google-saudi.component.scss":
/*!**********************************************************!*\
  !*** ./src/app/google-saudi/google-saudi.component.scss ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2dvb2dsZS1zYXVkaS9nb29nbGUtc2F1ZGkuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/google-saudi/google-saudi.component.ts":
/*!********************************************************!*\
  !*** ./src/app/google-saudi/google-saudi.component.ts ***!
  \********************************************************/
/*! exports provided: GoogleSaudiComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GoogleSaudiComponent", function() { return GoogleSaudiComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _post_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../post.service */ "./src/app/post.service.ts");



let GoogleSaudiComponent = class GoogleSaudiComponent {
    constructor(post_service) {
        this.post_service = post_service;
    }
    ngOnInit() {
        this.News();
    }
    News() {
        this.post_service.GetGoogleSaudi()
            .subscribe((response) => {
            this.news = response;
            this.newsData = this.news.articles;
            console.log(response);
        }, (error) => console.log(error));
    }
};
GoogleSaudiComponent.ctorParameters = () => [
    { type: _post_service__WEBPACK_IMPORTED_MODULE_2__["PostService"] }
];
GoogleSaudiComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-google-saudi',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./google-saudi.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/google-saudi/google-saudi.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./google-saudi.component.scss */ "./src/app/google-saudi/google-saudi.component.scss")).default]
    })
], GoogleSaudiComponent);



/***/ }),

/***/ "./src/app/home/home.component.scss":
/*!******************************************!*\
  !*** ./src/app/home/home.component.scss ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvaG9tZS5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/home/home.component.ts":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _post_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../post.service */ "./src/app/post.service.ts");



let HomeComponent = class HomeComponent {
    constructor(post_service) {
        this.post_service = post_service;
    }
    ngOnInit() {
        this.News();
        this.BusinessHeadLines();
        this.WallStreet();
    }
    News() {
        this.post_service.GetGoogleNews()
            .subscribe((response) => {
            this.news = response;
            this.newsData = this.news.articles;
            console.log(response);
        }, (error) => console.log(error));
    }
    BusinessHeadLines() {
        this.post_service.GetBusinessHeadlines()
            .subscribe((response) => {
            this.business = response;
            this.businessHeadline = this.business.articles;
            console.log(response);
        }, (error) => console.log(error));
    }
    WallStreet() {
        this.post_service.GetWAllStreet()
            .subscribe((response) => {
            this.wallstreet = response;
            this.wallstreet_news = this.wallstreet.articles;
            console.log(response);
        }, (error) => console.log(error));
    }
};
HomeComponent.ctorParameters = () => [
    { type: _post_service__WEBPACK_IMPORTED_MODULE_2__["PostService"] }
];
HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-home',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./home.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./home.component.scss */ "./src/app/home/home.component.scss")).default]
    })
], HomeComponent);



/***/ }),

/***/ "./src/app/navbar/navbar.component.scss":
/*!**********************************************!*\
  !*** ./src/app/navbar/navbar.component.scss ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL25hdmJhci9uYXZiYXIuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/navbar/navbar.component.ts":
/*!********************************************!*\
  !*** ./src/app/navbar/navbar.component.ts ***!
  \********************************************/
/*! exports provided: NavbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarComponent", function() { return NavbarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let NavbarComponent = class NavbarComponent {
    constructor() { }
    ngOnInit() {
    }
};
NavbarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-navbar',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./navbar.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/navbar/navbar.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./navbar.component.scss */ "./src/app/navbar/navbar.component.scss")).default]
    })
], NavbarComponent);



/***/ }),

/***/ "./src/app/post.service.ts":
/*!*********************************!*\
  !*** ./src/app/post.service.ts ***!
  \*********************************/
/*! exports provided: PostService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PostService", function() { return PostService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");



let PostService = class PostService {
    constructor(http) {
        this.http = http;
    }
    GetBitcoin() {
        return this.http.get('https://newsapi.org/v2/everything?q=bitcoin&from=2019-09-14&sortBy=publishedAt&apiKey=f680d69b9f0a47169df83c73a7fed9f8');
    }
    GetBusinessHeadlines() {
        return this.http.get('https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=f680d69b9f0a47169df83c73a7fed9f8');
    }
    GetApple() {
        return this.http.get('https://newsapi.org/v2/everything?q=apple&from=2019-10-13&to=2019-10-13&sortBy=popularity&apiKey=f680d69b9f0a47169df83c73a7fed9f8');
    }
    GetTechCrunch() {
        return this.http.get('https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=f680d69b9f0a47169df83c73a7fed9f8');
    }
    GetWAllStreet() {
        return this.http.get('https://newsapi.org/v2/everything?domains=wsj.com&apiKey=f680d69b9f0a47169df83c73a7fed9f8');
    }
    GetGoogleNews() {
        return this.http.get('https://newsapi.org/v2/top-headlines?sources=google-news&apiKey=f680d69b9f0a47169df83c73a7fed9f8');
    }
    GetGoogleItaly() {
        return this.http.get('https://newsapi.org/v2/top-headlines?sources=google-news-it&apiKey=f680d69b9f0a47169df83c73a7fed9f8');
    }
    GetGoogleSaudi() {
        return this.http.get('https://newsapi.org/v2/top-headlines?sources=google-news-sa&apiKey=f680d69b9f0a47169df83c73a7fed9f8');
    }
};
PostService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
PostService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], PostService);



/***/ }),

/***/ "./src/app/post/post.component.scss":
/*!******************************************!*\
  !*** ./src/app/post/post.component.scss ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Bvc3QvcG9zdC5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/post/post.component.ts":
/*!****************************************!*\
  !*** ./src/app/post/post.component.ts ***!
  \****************************************/
/*! exports provided: PostComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PostComponent", function() { return PostComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let PostComponent = class PostComponent {
    constructor() { }
    ngOnInit() {
    }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], PostComponent.prototype, "source", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], PostComponent.prototype, "title", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], PostComponent.prototype, "author", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], PostComponent.prototype, "description", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], PostComponent.prototype, "url", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], PostComponent.prototype, "urlToImage", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], PostComponent.prototype, "publishedAt", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], PostComponent.prototype, "content", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], PostComponent.prototype, "status", void 0);
PostComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-post',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./post.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/post/post.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./post.component.scss */ "./src/app/post/post.component.scss")).default]
    })
], PostComponent);



/***/ }),

/***/ "./src/app/tech-crunch/tech-crunch.component.scss":
/*!********************************************************!*\
  !*** ./src/app/tech-crunch/tech-crunch.component.scss ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3RlY2gtY3J1bmNoL3RlY2gtY3J1bmNoLmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/tech-crunch/tech-crunch.component.ts":
/*!******************************************************!*\
  !*** ./src/app/tech-crunch/tech-crunch.component.ts ***!
  \******************************************************/
/*! exports provided: TechCrunchComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TechCrunchComponent", function() { return TechCrunchComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _post_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../post.service */ "./src/app/post.service.ts");



let TechCrunchComponent = class TechCrunchComponent {
    constructor(post_service) {
        this.post_service = post_service;
    }
    ngOnInit() {
        this.News();
    }
    News() {
        this.post_service.GetTechCrunch()
            .subscribe((response) => {
            this.news = response;
            this.newsData = this.news.articles;
            console.log(response);
        }, (error) => {
            console.log(error);
            console.log(error.status);
            this.status = error.status;
        });
    }
};
TechCrunchComponent.ctorParameters = () => [
    { type: _post_service__WEBPACK_IMPORTED_MODULE_2__["PostService"] }
];
TechCrunchComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-tech-crunch',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./tech-crunch.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/tech-crunch/tech-crunch.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./tech-crunch.component.scss */ "./src/app/tech-crunch/tech-crunch.component.scss")).default]
    })
], TechCrunchComponent);



/***/ }),

/***/ "./src/app/wall-street/wall-street.component.scss":
/*!********************************************************!*\
  !*** ./src/app/wall-street/wall-street.component.scss ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3dhbGwtc3RyZWV0L3dhbGwtc3RyZWV0LmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/wall-street/wall-street.component.ts":
/*!******************************************************!*\
  !*** ./src/app/wall-street/wall-street.component.ts ***!
  \******************************************************/
/*! exports provided: WallStreetComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WallStreetComponent", function() { return WallStreetComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _post_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../post.service */ "./src/app/post.service.ts");



let WallStreetComponent = class WallStreetComponent {
    constructor(post_service) {
        this.post_service = post_service;
    }
    ngOnInit() {
        this.News();
    }
    News() {
        this.post_service.GetWAllStreet()
            .subscribe((response) => {
            this.news = response;
            this.newsData = this.news.articles;
            console.log(response);
        }, (error) => console.log(error));
    }
};
WallStreetComponent.ctorParameters = () => [
    { type: _post_service__WEBPACK_IMPORTED_MODULE_2__["PostService"] }
];
WallStreetComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-wall-street',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./wall-street.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/wall-street/wall-street.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./wall-street.component.scss */ "./src/app/wall-street/wall-street.component.scss")).default]
    })
], WallStreetComponent);



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");





if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\Angular-Projects\angular-bitcoin-news-app\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map