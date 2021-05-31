(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-documentos-documentos-module"],{

/***/ "6JUU":
/*!*****************************************************!*\
  !*** ./src/app/pages/documentos/documentos.page.ts ***!
  \*****************************************************/
/*! exports provided: DocumentosPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DocumentosPage", function() { return DocumentosPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_documentos_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./documentos.page.html */ "S8lO");
/* harmony import */ var _documentos_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./documentos.page.scss */ "L6S/");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");




let DocumentosPage = class DocumentosPage {
    constructor() { }
    ngOnInit() {
    }
};
DocumentosPage.ctorParameters = () => [];
DocumentosPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-documentos',
        template: _raw_loader_documentos_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_documentos_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], DocumentosPage);



/***/ }),

/***/ "L6S/":
/*!*******************************************************!*\
  !*** ./src/app/pages/documentos/documentos.page.scss ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".btn-success {\n  width: 90%;\n  --background: #2dd36f !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2RvY3VtZW50b3MucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsVUFBQTtFQUNBLGdDQUFBO0FBQ0YiLCJmaWxlIjoiZG9jdW1lbnRvcy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYnRuLXN1Y2Nlc3N7XG4gIHdpZHRoOiA5MCU7XG4gIC0tYmFja2dyb3VuZDogIzJkZDM2ZiAhaW1wb3J0YW50O1xufVxuIl19 */");

/***/ }),

/***/ "S8lO":
/*!*********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/documentos/documentos.page.html ***!
  \*********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header [translucent]=\"true\">\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-menu-button autoHide=\"false\"></ion-menu-button>\n\n    </ion-buttons>\n\n    <ion-title>\n      <div style=\"display: flex;\">\n        <img src=\"../../assets/_.png\" alt=\"\" style=\"width: 40px;margin-top: 7px;\">\n        <h6 class=\"h6-logo\">Comunica Escola</h6>\n      </div>\n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-row>\n    <ion-title>\n      <div style=\"text-align: center;\">\n\n        <h4 class=\"title-page\">DOCUMENTOS</h4>\n      </div>\n    </ion-title>\n  </ion-row>\n\n\n  <ion-grid style=\"margin-top: 20%;\">\n    <ion-row class=\"ion-justify-content-center\">\n      <ion-button class=\"btn-success\">Atestado de Matrícula</ion-button>\n\n    </ion-row>\n    <ion-row class=\"ion-justify-content-center\">\n      <ion-button class=\"btn-success\">Atestado de Frequência</ion-button>\n\n    </ion-row>\n  </ion-grid>\n\n</ion-content>\n<ion-footer>\n  <ion-toolbar>\n    <ion-grid style=\"text-align: center;\">\n      <ion-col><a class=\"social\" href=\"https://www.youtube.com/\" target=\"_blank\"><ion-icon style=\"font-size: 2rem; padding: 0px 30px 0px 30px;\" name=\"logo-youtube\"></ion-icon></a></ion-col>\n      <ion-col><a class=\"social\" href=\"https://www.facebook.com/\" target=\"_blank\">\n        <ion-icon style=\"font-size: 2rem; padding: 0px 30px 0px 30px;\" name=\"logo-facebook\"></ion-icon>\n      </a></ion-col>\n      <ion-col><a class=\"social\" href=\"https://www.google.com/\" target=\"_blank\">\n        <ion-icon style=\"font-size: 2rem; padding: 0px 30px 0px 30px;\" name=\"logo-google\"></ion-icon>\n      </a></ion-col>\n    </ion-grid>\n    <ion-grid style=\"text-align: center; margin-top: -25px;\">\n      <h6 >Acesso rápido</h6>\n    </ion-grid>\n  </ion-toolbar>\n</ion-footer>\n");

/***/ }),

/***/ "WfUQ":
/*!***************************************************************!*\
  !*** ./src/app/pages/documentos/documentos-routing.module.ts ***!
  \***************************************************************/
/*! exports provided: DocumentosPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DocumentosPageRoutingModule", function() { return DocumentosPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _documentos_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./documentos.page */ "6JUU");




const routes = [
    {
        path: '',
        component: _documentos_page__WEBPACK_IMPORTED_MODULE_3__["DocumentosPage"]
    }
];
let DocumentosPageRoutingModule = class DocumentosPageRoutingModule {
};
DocumentosPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], DocumentosPageRoutingModule);



/***/ }),

/***/ "cEKT":
/*!*******************************************************!*\
  !*** ./src/app/pages/documentos/documentos.module.ts ***!
  \*******************************************************/
/*! exports provided: DocumentosPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DocumentosPageModule", function() { return DocumentosPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _documentos_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./documentos-routing.module */ "WfUQ");
/* harmony import */ var _documentos_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./documentos.page */ "6JUU");







let DocumentosPageModule = class DocumentosPageModule {
};
DocumentosPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _documentos_routing_module__WEBPACK_IMPORTED_MODULE_5__["DocumentosPageRoutingModule"]
        ],
        declarations: [_documentos_page__WEBPACK_IMPORTED_MODULE_6__["DocumentosPage"]]
    })
], DocumentosPageModule);



/***/ })

}]);
//# sourceMappingURL=pages-documentos-documentos-module.js.map