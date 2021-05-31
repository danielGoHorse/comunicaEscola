(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-boletim-boletim-module"],{

/***/ "119o":
/*!*********************************************************!*\
  !*** ./src/app/pages/boletim/boletim-routing.module.ts ***!
  \*********************************************************/
/*! exports provided: BoletimPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BoletimPageRoutingModule", function() { return BoletimPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _boletim_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./boletim.page */ "aya8");




const routes = [
    {
        path: '',
        component: _boletim_page__WEBPACK_IMPORTED_MODULE_3__["BoletimPage"]
    }
];
let BoletimPageRoutingModule = class BoletimPageRoutingModule {
};
BoletimPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], BoletimPageRoutingModule);



/***/ }),

/***/ "GQTt":
/*!*************************************************!*\
  !*** ./src/app/pages/boletim/boletim.module.ts ***!
  \*************************************************/
/*! exports provided: BoletimPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BoletimPageModule", function() { return BoletimPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _boletim_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./boletim-routing.module */ "119o");
/* harmony import */ var _boletim_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./boletim.page */ "aya8");
/* harmony import */ var _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @swimlane/ngx-datatable */ "lDzL");








let BoletimPageModule = class BoletimPageModule {
};
BoletimPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _boletim_routing_module__WEBPACK_IMPORTED_MODULE_5__["BoletimPageRoutingModule"],
            _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_7__["NgxDatatableModule"]
        ],
        declarations: [_boletim_page__WEBPACK_IMPORTED_MODULE_6__["BoletimPage"]]
    })
], BoletimPageModule);



/***/ }),

/***/ "RJr/":
/*!*************************************************!*\
  !*** ./src/app/pages/boletim/boletim.page.scss ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".bol-table {\n  margin: 10px 10px 0px 10px;\n  border: 2px solid #046085;\n  border-radius: 10px;\n  background-color: rgba(209, 207, 142, 0.28);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2JvbGV0aW0ucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsMEJBQUE7RUFDQSx5QkFBQTtFQUNBLG1CQUFBO0VBQ0EsMkNBQUE7QUFDRiIsImZpbGUiOiJib2xldGltLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5ib2wtdGFibGV7XG4gIG1hcmdpbjogMTBweCAxMHB4IDBweCAxMHB4O1xuICBib3JkZXI6IDJweCBzb2xpZCAjMDQ2MDg1O1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjA5IDIwNyAxNDIgLyAyOCUpO1xufVxuIl19 */");

/***/ }),

/***/ "ZQYD":
/*!*************************************!*\
  !*** ./src/assets/disciplinas.json ***!
  \*************************************/
/*! exports provided: 0, 1, 2, 3, 4, 5, 6, 7, default */
/***/ (function(module) {

module.exports = JSON.parse("[{\"disciplina\":\"Ling. Portuguesa\",\"bim\":\"1\",\"media\":\"8.5\",\"final\":\"\"},{\"disciplina\":\"Matemática\",\"bim\":\"1\",\"media\":\"10\",\"final\":\"\"},{\"disciplina\":\"História\",\"bim\":\"1\",\"media\":\"5\",\"final\":\"\"},{\"disciplina\":\"Geografia\",\"bim\":\"1\",\"media\":\"7,5\",\"final\":\"\"},{\"disciplina\":\"Ciências\",\"bim\":\"1\",\"media\":\"9\",\"final\":\"\"},{\"disciplina\":\"Ed. Física\",\"bim\":\"1\",\"media\":\"8\",\"final\":\"\"},{\"disciplina\":\"Inglês\",\"bim\":\"1\",\"media\":\"8\",\"final\":\"\"},{\"disciplina\":\"Arte\",\"bim\":\"1\",\"media\":\"10\",\"final\":\"\"}]");

/***/ }),

/***/ "aya8":
/*!***********************************************!*\
  !*** ./src/app/pages/boletim/boletim.page.ts ***!
  \***********************************************/
/*! exports provided: BoletimPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BoletimPage", function() { return BoletimPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_boletim_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./boletim.page.html */ "mYYS");
/* harmony import */ var _boletim_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./boletim.page.scss */ "RJr/");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _assets_disciplinas_json__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../assets/disciplinas.json */ "ZQYD");
var _assets_disciplinas_json__WEBPACK_IMPORTED_MODULE_4___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../../../assets/disciplinas.json */ "ZQYD", 1);





let BoletimPage = class BoletimPage {
    constructor() {
        this.disciplinas = _assets_disciplinas_json__WEBPACK_IMPORTED_MODULE_4__;
        this.tableStyle = 'bootstrap';
        console.log(this.disciplinas);
    }
    ngOnInit() {
    }
    switchStyle() {
    }
    getRowClass(row) {
    }
    open(row) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
        });
    }
};
BoletimPage.ctorParameters = () => [];
BoletimPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-boletim',
        template: _raw_loader_boletim_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_boletim_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], BoletimPage);



/***/ }),

/***/ "mYYS":
/*!***************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/boletim/boletim.page.html ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header [translucent]=\"true\">\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-menu-button autoHide=\"false\"></ion-menu-button>\n\n    </ion-buttons>\n\n    <ion-title>\n      <div style=\"display: flex;\">\n        <img src=\"../../assets/_.png\" alt=\"\" style=\"width: 40px;margin-top: 7px;\">\n        <h6 class=\"h6-logo\">Comunica Escola</h6>\n      </div>\n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-row>\n    <ion-title>\n      <div style=\"text-align: center;\">\n\n        <h4 class=\"title-page\">BOLETIM</h4>\n      </div>\n    </ion-title>\n  </ion-row>\n <ion-grid class=\"bol-table\">\n  <ngx-datatable  [rows]=\"disciplinas\"\n   [ngClass]=\"tableStyle\"\n   [rowHeight]=\"'auto'\"\n   [headerHeight]=\"50\"\n      [columnMode]=\"'flex'\"\n>\n  <ngx-datatable-column name=\"Disciplina\"  [flexGrow]=\"2.2\" sortable=\"false\">\n    <ng-template ngx-datatable-cell-template let-rowIndex=\"rowIndex\" let-value=\"value\" let-row=\"row\">\n      {{value}}\n    </ng-template>\n  </ngx-datatable-column>\n  <ngx-datatable-column name=\"Bim\"  [flexGrow]=\"0.5\" sortable=\"false\"></ngx-datatable-column>\n  <ngx-datatable-column name=\"Media\"  [flexGrow]=\"1\" ></ngx-datatable-column>\n  <ngx-datatable-column name=\"M Final\"  [flexGrow]=\"1\" sortable=\"false\"></ngx-datatable-column>\n\n\n\n</ngx-datatable>\n </ion-grid>\n\n\n</ion-content>\n<ion-footer>\n  <ion-toolbar>\n    <ion-grid style=\"text-align: center;\">\n      <ion-col><a class=\"social\" href=\"https://www.youtube.com/\" target=\"_blank\"><ion-icon style=\"font-size: 2rem; padding: 0px 30px 0px 30px;\" name=\"logo-youtube\"></ion-icon></a></ion-col>\n      <ion-col><a class=\"social\" href=\"https://www.facebook.com/\" target=\"_blank\">\n        <ion-icon style=\"font-size: 2rem; padding: 0px 30px 0px 30px;\" name=\"logo-facebook\"></ion-icon>\n      </a></ion-col>\n      <ion-col><a class=\"social\" href=\"https://www.google.com/\" target=\"_blank\">\n        <ion-icon style=\"font-size: 2rem; padding: 0px 30px 0px 30px;\" name=\"logo-google\"></ion-icon>\n      </a></ion-col>\n    </ion-grid>\n    <ion-grid style=\"text-align: center; margin-top: -25px;\">\n      <h6 >Acesso rápido</h6>\n    </ion-grid>\n  </ion-toolbar>\n</ion-footer>\n");

/***/ })

}]);
//# sourceMappingURL=pages-boletim-boletim-module.js.map