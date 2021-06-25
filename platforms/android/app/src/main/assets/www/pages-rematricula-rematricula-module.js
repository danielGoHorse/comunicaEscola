(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-rematricula-rematricula-module"],{

/***/ "28eq":
/*!*********************************************************!*\
  !*** ./src/app/pages/rematricula/rematricula.page.scss ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".mural-table {\n  margin: 10px 10px 0px 10px;\n  border: 2px solid #046085;\n  border-radius: 10px;\n  background-color: rgba(209, 207, 142, 0.28);\n}\n\n.perfil-form {\n  display: grid;\n  width: 90%;\n  margin-top: 25px;\n}\n\n.perfil-form label {\n  margin-bottom: 5px;\n  font-size: 0.8rem;\n}\n\n.perfil-form input {\n  border-radius: 7px;\n  height: 40px;\n  border: none;\n  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;\n  padding-left: 10px;\n}\n\n.btn-custon {\n  width: 90%;\n  border-radius: 12px;\n}\n\n.btn-success {\n  --background: #2dd36f !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3JlbWF0cmljdWxhLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLDBCQUFBO0VBQ0EseUJBQUE7RUFDQSxtQkFBQTtFQUNBLDJDQUFBO0FBQ0Y7O0FBRUE7RUFDRSxhQUFBO0VBQ0EsVUFBQTtFQUNBLGdCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxrQkFBQTtFQUNBLGlCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0EsNENBQUE7RUFBNkMsa0JBQUE7QUFFL0M7O0FBQ0E7RUFDQSxVQUFBO0VBQ0EsbUJBQUE7QUFFQTs7QUFDQTtFQUNFLGdDQUFBO0FBRUYiLCJmaWxlIjoicmVtYXRyaWN1bGEucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm11cmFsLXRhYmxle1xuICBtYXJnaW46IDEwcHggMTBweCAwcHggMTBweDtcbiAgYm9yZGVyOiAycHggc29saWQgIzA0NjA4NTtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIwOSAyMDcgMTQyIC8gMjglKTtcbn1cblxuLnBlcmZpbC1mb3JtIHtcbiAgZGlzcGxheTogZ3JpZDtcbiAgd2lkdGg6IDkwJTtcbiAgbWFyZ2luLXRvcDogMjVweDtcbn1cblxuLnBlcmZpbC1mb3JtIGxhYmVsIHtcbiAgbWFyZ2luLWJvdHRvbTogNXB4O1xuICBmb250LXNpemU6IDAuOHJlbTtcbn1cblxuLnBlcmZpbC1mb3JtIGlucHV0IHtcbiAgYm9yZGVyLXJhZGl1czogN3B4O1xuICBoZWlnaHQ6IDQwcHg7XG4gIGJvcmRlcjogbm9uZTtcbiAgYm94LXNoYWRvdzogcmdiYSgwLCAwLCAwLCAwLjM1KSAwcHggNXB4IDE1cHg7cGFkZGluZy1sZWZ0OiAxMHB4O1xufVxuXG4uYnRuLWN1c3RvbntcbndpZHRoOiA5MCU7XG5ib3JkZXItcmFkaXVzOiAxMnB4O1xufVxuXG4uYnRuLXN1Y2Nlc3N7XG4gIC0tYmFja2dyb3VuZDogIzJkZDM2ZiAhaW1wb3J0YW50O1xufVxuIl19 */");

/***/ }),

/***/ "Eqd4":
/*!*********************************************************!*\
  !*** ./src/app/pages/rematricula/rematricula.module.ts ***!
  \*********************************************************/
/*! exports provided: RematriculaPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RematriculaPageModule", function() { return RematriculaPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _rematricula_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./rematricula-routing.module */ "wvR5");
/* harmony import */ var _rematricula_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./rematricula.page */ "dLsW");







let RematriculaPageModule = class RematriculaPageModule {
};
RematriculaPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _rematricula_routing_module__WEBPACK_IMPORTED_MODULE_5__["RematriculaPageRoutingModule"]
        ],
        declarations: [_rematricula_page__WEBPACK_IMPORTED_MODULE_6__["RematriculaPage"]]
    })
], RematriculaPageModule);



/***/ }),

/***/ "dLsW":
/*!*******************************************************!*\
  !*** ./src/app/pages/rematricula/rematricula.page.ts ***!
  \*******************************************************/
/*! exports provided: RematriculaPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RematriculaPage", function() { return RematriculaPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_rematricula_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./rematricula.page.html */ "f2F+");
/* harmony import */ var _rematricula_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./rematricula.page.scss */ "28eq");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");




let RematriculaPage = class RematriculaPage {
    constructor() { }
    ngOnInit() {
    }
};
RematriculaPage.ctorParameters = () => [];
RematriculaPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-rematricula',
        template: _raw_loader_rematricula_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_rematricula_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], RematriculaPage);



/***/ }),

/***/ "f2F+":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/rematricula/rematricula.page.html ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header [translucent]=\"true\">\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-menu-button autoHide=\"false\"></ion-menu-button>\n\n    </ion-buttons>\n\n    <ion-title>\n      <div style=\"display: flex;\">\n        <img src=\"../../assets/_.png\" alt=\"\" style=\"width: 40px;margin-top: 7px;\">\n        <h6 class=\"h6-logo\">Comunica Escola</h6>\n      </div>\n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-row>\n    <ion-title>\n      <div style=\"text-align: center;\">\n\n        <h4 class=\"title-page\">REMATRICULA</h4>\n      </div>\n    </ion-title>\n  </ion-row>\n\n\n  <ion-grid class=\"mural-table\">\n    <ion-row class=\"ion-justify-content-center\">\n      <div style=\" width: 100%; text-align: center;\">\n        <h4 class=\"title-grey\">Formulário de Rematricula</h4>\n\n        <h6 class=\"subject-body\">Preencha os Campos</h6>\n      </div>\n    </ion-row>\n    <ion-row class=\"ion-justify-content-center\" >\n      <div class=\"perfil-form\">\n        <label for=\"basic-url\">Nome do Aluno</label>\n        <input type=\"text\">\n      </div>\n    </ion-row>\n    <ion-row class=\"ion-justify-content-center\">\n      <div class=\"perfil-form\">\n        <label for=\"\">Série atual</label>\n        <input type=\"text\"  >\n\n      </div>\n    </ion-row>\n    <ion-row class=\"ion-justify-content-center\" >\n      <div class=\"perfil-form\">\n        <label for=\"basic-url\">Nome do Responsável</label>\n        <input type=\"text\">\n      </div>\n    </ion-row>\n    <ion-row class=\"ion-justify-content-center\">\n      <div class=\"perfil-form\">\n        <label for=\"\">RG do Responsávell</label>\n        <input type=\"text\"  >\n\n      </div>\n    </ion-row>\n    <ion-row class=\"ion-justify-content-center\">\n      <div class=\"perfil-form\">\n        <label for=\"basic-url\">Endereço</label>\n        <input type=\"text\">\n      </div>\n    </ion-row>\n    <ion-row class=\"ion-justify-content-center\">\n      <div class=\"perfil-form\">\n        <label for=\"basic-url\">Número</label>\n        <input type=\"text\">\n      </div>\n    </ion-row>\n    <ion-row class=\"ion-justify-content-center\">\n      <div class=\"perfil-form\">\n        <label for=\"basic-url\">Complemento</label>\n        <input type=\"text\">\n      </div>\n    </ion-row>\n    <ion-row class=\"ion-justify-content-center\">\n      <div class=\"perfil-form\">\n        <label for=\"basic-url\">Bairro</label>\n        <input type=\"text\">\n      </div>\n    </ion-row>\n    <ion-row class=\"ion-justify-content-center\">\n      <div class=\"perfil-form\">\n        <label for=\"basic-url\">Cidade</label>\n        <input type=\"text\">\n      </div>\n    </ion-row>\n    <ion-row class=\"ion-justify-content-center\">\n      <div class=\"perfil-form\">\n        <label for=\"basic-url\">UF</label>\n        <input type=\"text\">\n      </div>\n    </ion-row>\n    <ion-row class=\"ion-justify-content-center\">\n      <div class=\"perfil-form\">\n        <label for=\"basic-url\">CEP</label>\n        <input type=\"text\">\n      </div>\n    </ion-row>\n    <ion-row class=\"ion-justify-content-center\">\n      <h6 style=\"text-align: center; font-size: 0.8rem;\">As informações acima são verdadeiras e autorizo a rematrícula do aluno</h6>\n\n    </ion-row>\n    <ion-row class=\"ion-justify-content-center\">\n      <ion-button class=\"btn-success\">Enviar Solicitação</ion-button>\n\n    </ion-row>\n  </ion-grid>\n\n\n</ion-content>\n<ion-footer>\n  <ion-toolbar>\n    <ion-grid style=\"text-align: center;\">\n      <ion-col><a class=\"social\" href=\"https://www.youtube.com/\" target=\"_blank\"><ion-icon style=\"font-size: 2rem; padding: 0px 30px 0px 30px;\" name=\"logo-youtube\"></ion-icon></a></ion-col>\n      <ion-col><a class=\"social\" href=\"https://www.facebook.com/\" target=\"_blank\">\n        <ion-icon style=\"font-size: 2rem; padding: 0px 30px 0px 30px;\" name=\"logo-facebook\"></ion-icon>\n      </a></ion-col>\n      <ion-col><a class=\"social\" href=\"https://www.google.com/\" target=\"_blank\">\n        <ion-icon style=\"font-size: 2rem; padding: 0px 30px 0px 30px;\" name=\"logo-google\"></ion-icon>\n      </a></ion-col>\n    </ion-grid>\n    <ion-grid style=\"text-align: center; margin-top: -25px;\">\n      <h6 >Acesso rápido</h6>\n    </ion-grid>\n  </ion-toolbar>\n</ion-footer>\n");

/***/ }),

/***/ "wvR5":
/*!*****************************************************************!*\
  !*** ./src/app/pages/rematricula/rematricula-routing.module.ts ***!
  \*****************************************************************/
/*! exports provided: RematriculaPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RematriculaPageRoutingModule", function() { return RematriculaPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _rematricula_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./rematricula.page */ "dLsW");




const routes = [
    {
        path: '',
        component: _rematricula_page__WEBPACK_IMPORTED_MODULE_3__["RematriculaPage"]
    }
];
let RematriculaPageRoutingModule = class RematriculaPageRoutingModule {
};
RematriculaPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], RematriculaPageRoutingModule);



/***/ })

}]);
//# sourceMappingURL=pages-rematricula-rematricula-module.js.map