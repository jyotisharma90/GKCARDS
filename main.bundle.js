webpackJsonp([1],{

/***/ "./src async recursive":
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = "./src async recursive";

/***/ }),

/***/ "./src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<header>\n    <nav class=\"navbar navbar-inverse \">\n        <div class=\"container-fluid\">\n          <div class=\"navbar-header\">\n            <a class=\"navbar-brand\" href=\"#\">{{title}}</a>\n          </div>\n          <ul class=\"nav navbar-nav\">\n            <li class=\"active\"><a href=\"#\">SongList</a></li>\n          </ul>\n        </div>\n      </nav>\n      <!-- sub header -->\n      <nav class=\"navbar navbar-default navbar-fixed-top\">\n        <div class=\"container-fluid nav-container\">\n          <div class=\"row\">\n            <div class=\"col-lg-3 col-md-3 col-sm-3 col-xs-3\"></div>\n            <div class=\"col-lg-6 col-md-6 col-sm-6 col-xs-6\">\n                <div class=\"form-group\">\n                      <input [(ngModel)]=\"searchText\"class=\"form-control\" id=\"search\" placeholder=\"search text goes here\">\n                </div>\n             </div>\n             <div class=\"col-lg-3 col-md-3 col-sm-3 col-xs-3\"></div>\n         </div>\n        </div>\n      </nav>\n</header>\n<!-- main content -->\n<div class=\"container\">\n   <div class=\"row btn-content\">\n     <div class=\"col-lg-12\">\n      <div id=\"myBtnContainer\">\n        <button class=\"btn\" [ngClass]=\"{'active':selectAll == 'all'}\" (click)=\"showAll('all')\"> Show all</button>\n        <button class=\"btn \"  [ngClass]=\"{'active':selectedItem == songtag}\" *ngFor=\"let songtag of filteredData\" (click)=\"onSelect(songtag)\"> {{songtag}}</button>\n      </div>\n     </div>\n   </div>\n    <div class=\"row\"> \n      <div class=\"col-lg-3 col-md-4 col-sm-5 col-xs-5\" *ngFor=\"let list of selectedData | filter : searchText\">\n         \n          <div class=\"card\" >   \n              <img class=\"card-img-top\" src=\"{{list['im:image'][2].label}}\" alt=\"Card image\">\n              <div class=\"card-body\">\n                <h4 class=\"card-title\">{{list['im:name'].label | slice:0:20}}  </h4>\n                <h4 class=\"card-title\"> - {{list['im:artist'].label | slice:0:20}}\n                  </h4>\n                <p class=\"card-text\">{{list['im:price'].label}}</p>\n                <a href=\"{{list.link.attributes.href}}\">Listen on iTunes</a>\n              </div>\n            </div>\n      </div>\n    </div>\n</div>\n\n\n"

/***/ }),

/***/ "./src/app/app.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".card {\n  width: 250px;\n  margin: 20px; }\n  .card .card-img-top {\n    width: 100%; }\n  .card .card-body {\n    height: 100px;\n    background-color: #e0e0e0d4;\n    padding: 10px; }\n  .card .card-title {\n    margin: 0; }\n  .card .card-text {\n    margin: 0; }\n\n.card:hover {\n  box-shadow: 3px 5px 9px #776f6f; }\n\n.card-text {\n  color: red;\n  font-size: 16px;\n  font-weight: 600; }\n\n.btn {\n  border: none;\n  outline: none;\n  padding: 12px 16px;\n  background-color: white;\n  cursor: pointer; }\n\n.btn:hover {\n  background-color: #ddd; }\n\n.btn.active {\n  background-color: #222;\n  color: white; }\n\n.navbar-default {\n  top: 40px;\n  padding-top: 25px;\n  z-index: 9; }\n\n.navbar-inverse {\n  z-index: 10;\n  border-radius: 0; }\n\n.btn-content {\n  padding-top: 45px; }\n  .btn-content #myBtnContainer {\n    margin: 20px; }\n\n@media (max-width: 768px) {\n  .navbar-default {\n    top: 97px;\n    padding-top: 25px;\n    z-index: 9; } }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "./src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_songlist_service__ = __webpack_require__("./src/app/services/songlist.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
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
    function AppComponent(SonglistService) {
        this.SonglistService = SonglistService;
        this.title = 'SONGHUB';
        this.songs = [];
        this.filteredData = [];
        this.selectedData = [];
    }
    AppComponent.prototype.ngOnInit = function () {
        this.getAllSongs();
        this.selectAll = 'all';
    };
    AppComponent.prototype.getAllSongs = function () {
        var _this = this;
        var obj = {};
        this.SonglistService.getSongList().subscribe(function (data) {
            _this.songs = data.feed.entry;
            console.log(_this.songs[0]['im:image']);
            var filteredNames = _this.remove_duplicates(_this.songs);
            _this.selectedData = _this.songs;
        });
    };
    AppComponent.prototype.remove_duplicates = function (arr) {
        var obj = {};
        for (var i = 0; i < arr.length; i++) {
            obj[arr[i].category.attributes.label] = true;
        }
        for (var key in obj) {
            this.filteredData.push(key);
        }
    };
    AppComponent.prototype.onSelect = function (val) {
        console.log(val);
        this.selectAll = '';
        this.selectedItem = val;
        this.selectedData = this.songs.filter(function (x) { return x.category.attributes.label == val; });
    };
    AppComponent.prototype.showAll = function (selectall) {
        this.selectAll = selectall;
        this.selectedItem = "";
        this.selectedData = this.songs;
    };
    return AppComponent;
}());
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_5" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__("./src/app/app.component.html"),
        styles: [__webpack_require__("./src/app/app.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_songlist_service__["a" /* SonglistService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_songlist_service__["a" /* SonglistService */]) === "function" && _a || Object])
], AppComponent);

$(window).scroll(function () {
    if ($(window).scrollTop() >= 10) {
        $('.navbar-default').css('top', '0');
        // $('nav div').addClass('visible-title');
    }
    else {
        $('.navbar-default').css('top', '40px');
    }
});
var _a;
//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "./src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/@angular/common/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__("./src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_songlist_service__ = __webpack_require__("./src/app/services/songlist.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_filter_pipe__ = __webpack_require__("./src/app/services/filter.pipe.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__services_filterunique_pipe__ = __webpack_require__("./src/app/services/filterunique.pipe.ts");
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
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_core__["b" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_6__services_filter_pipe__["a" /* FilterPipe */],
            __WEBPACK_IMPORTED_MODULE_7__services_filterunique_pipe__["a" /* FilterUniquePipe */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_common_http__["a" /* HttpClientModule */],
            __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormsModule */]
        ],
        providers: [__WEBPACK_IMPORTED_MODULE_5__services_songlist_service__["a" /* SonglistService */]],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "./src/app/services/filter.pipe.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FilterPipe; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var FilterPipe = (function () {
    function FilterPipe() {
    }
    FilterPipe.prototype.transform = function (items, searchText) {
        console.log(items);
        if (!items)
            return [];
        if (!searchText)
            return items;
        searchText = searchText.toLowerCase();
        return items.filter(function (it) {
            console.log(it.title.label);
            var itemsLabelText = it.title.label;
            return itemsLabelText.toLowerCase().includes(searchText);
        });
    };
    return FilterPipe;
}());
FilterPipe = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Pipe */])({
        name: 'filter'
    })
], FilterPipe);

//# sourceMappingURL=filter.pipe.js.map

/***/ }),

/***/ "./src/app/services/filterunique.pipe.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FilterUniquePipe; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var FilterUniquePipe = (function () {
    function FilterUniquePipe() {
    }
    FilterUniquePipe.prototype.transform = function (value, args) {
        // Remove the duplicate elements
        var uniqueArray = Array.from(new Set(value));
        return uniqueArray;
    };
    return FilterUniquePipe;
}());
FilterUniquePipe = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Pipe */])({
        name: 'filterUnique',
        pure: false
    })
], FilterUniquePipe);

//# sourceMappingURL=filterunique.pipe.js.map

/***/ }),

/***/ "./src/app/services/songlist.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/@angular/common/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("./node_modules/rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SonglistService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SonglistService = (function () {
    function SonglistService(http) {
        this.http = http;
        this.reqUrl = 'https://itunes.apple.com/in/rss/topalbums/limit=100/json';
    }
    SonglistService.prototype.getSongList = function () {
        return this.http.get(this.reqUrl)
            .map(function (resp) {
            console.log(resp);
            return resp;
        });
    };
    return SonglistService;
}());
SonglistService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["b" /* HttpClient */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["b" /* HttpClient */]) === "function" && _a || Object])
], SonglistService);

var _a;
//# sourceMappingURL=songlist.service.js.map

/***/ }),

/***/ "./src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
var environment = {
    production: true
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "./src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("./node_modules/@angular/platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("./src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("./src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map