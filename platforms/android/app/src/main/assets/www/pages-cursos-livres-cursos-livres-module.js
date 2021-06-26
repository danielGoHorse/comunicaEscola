(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-cursos-livres-cursos-livres-module"],{

/***/ "9UGf":
/*!*************************************************************!*\
  !*** ./src/app/pages/cursos-livres/cursos-livres.page.scss ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".mural-table {\n  margin: 10px 10px 0px 10px;\n  border: 2px solid #046085;\n  border-radius: 10px;\n  background-color: rgba(209, 207, 142, 0.28);\n}\n\n.btn-success {\n  --background: #2dd36f !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2N1cnNvcy1saXZyZXMucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsMEJBQUE7RUFDQSx5QkFBQTtFQUNBLG1CQUFBO0VBQ0EsMkNBQUE7QUFDRjs7QUFFQTtFQUNFLGdDQUFBO0FBQ0YiLCJmaWxlIjoiY3Vyc29zLWxpdnJlcy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubXVyYWwtdGFibGV7XG4gIG1hcmdpbjogMTBweCAxMHB4IDBweCAxMHB4O1xuICBib3JkZXI6IDJweCBzb2xpZCAjMDQ2MDg1O1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjA5IDIwNyAxNDIgLyAyOCUpO1xufVxuXG4uYnRuLXN1Y2Nlc3N7XG4gIC0tYmFja2dyb3VuZDogIzJkZDM2ZiAhaW1wb3J0YW50O1xufVxuIl19 */");

/***/ }),

/***/ "D3xk":
/*!***********************************************************!*\
  !*** ./src/app/pages/cursos-livres/cursos-livres.page.ts ***!
  \***********************************************************/
/*! exports provided: CursosLivresPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CursosLivresPage", function() { return CursosLivresPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_cursos_livres_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./cursos-livres.page.html */ "UcD1");
/* harmony import */ var _cursos_livres_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./cursos-livres.page.scss */ "9UGf");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _assets_cursos_json__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../assets/cursos.json */ "qF9q");
var _assets_cursos_json__WEBPACK_IMPORTED_MODULE_4___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../../../assets/cursos.json */ "qF9q", 1);





let CursosLivresPage = class CursosLivresPage {
    constructor() {
        this.cursos = _assets_cursos_json__WEBPACK_IMPORTED_MODULE_4__;
        // eslint-disable-next-line @typescript-eslint/member-ordering
        this.tableStyle = 'bootstrap';
        console.log(this.cursos);
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
CursosLivresPage.ctorParameters = () => [];
CursosLivresPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-cursos-livres',
        template: _raw_loader_cursos_livres_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_cursos_livres_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], CursosLivresPage);



/***/ }),

/***/ "MjK2":
/*!*********************************************************************!*\
  !*** ./src/app/pages/cursos-livres/cursos-livres-routing.module.ts ***!
  \*********************************************************************/
/*! exports provided: CursosLivresPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CursosLivresPageRoutingModule", function() { return CursosLivresPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _cursos_livres_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./cursos-livres.page */ "D3xk");




const routes = [
    {
        path: '',
        component: _cursos_livres_page__WEBPACK_IMPORTED_MODULE_3__["CursosLivresPage"]
    }
];
let CursosLivresPageRoutingModule = class CursosLivresPageRoutingModule {
};
CursosLivresPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], CursosLivresPageRoutingModule);



/***/ }),

/***/ "UcD1":
/*!***************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/cursos-livres/cursos-livres.page.html ***!
  \***************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header [translucent]=\"true\">\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-menu-button autoHide=\"false\"></ion-menu-button>\n\n    </ion-buttons>\n\n    <ion-title>\n      <div style=\"display: flex;\">\n        <img src=\"../../assets/logo.png\" alt=\"\" style=\"width: 40px;\">\n        <h6 class=\"h6-logo\">Comunica Escola</h6>\n      </div>\n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-row>\n    <ion-title>\n      <div style=\"text-align: center;\">\n\n        <h4 class=\"title-page\">CURSOS-LIVRES</h4>\n      </div>\n    </ion-title>\n  </ion-row>\n  <ion-grid class=\"mural-table\">\n    <ngx-datatable  [rows]=\"cursos\"\n    [ngClass]=\"tableStyle\"\n    [rowHeight]=\"'auto'\"\n    [headerHeight]=\"50\"\n       [columnMode]=\"'force'\"\n >\n   <ngx-datatable-column name=\"Curso\"  [flexGrow]=\"2.2\" sortable=\"false\">\n     <ng-template ngx-datatable-cell-template let-rowIndex=\"rowIndex\" let-value=\"value\" let-row=\"row\">\n       {{value}}\n     </ng-template>\n   </ngx-datatable-column>\n   <ngx-datatable-column name=\"Dia\"  [flexGrow]=\"0.5\" sortable=\"false\"></ngx-datatable-column>\n   <ngx-datatable-column name=\"Inicio\"  [flexGrow]=\"1\" ></ngx-datatable-column>\n   <ngx-datatable-column name=\"Fim\"  [flexGrow]=\"1\" sortable=\"false\"></ngx-datatable-column>\n\n\n\n </ngx-datatable>\n  </ion-grid>\n  <ion-grid>\n    <ion-row class=\"ion-justify-content-center\">\n      <ion-button class=\"btn-success\">Inscrição</ion-button>\n\n    </ion-row>\n  </ion-grid>\n</ion-content>\n<ion-footer>\n  <ion-toolbar>\n    <ion-grid style=\"text-align: center;\">\n      <ion-col><a class=\"social\" href=\"https://www.youtube.com/\" target=\"_blank\"><ion-icon style=\"font-size: 2rem; padding: 0px 30px 0px 30px;\" name=\"logo-youtube\"></ion-icon></a></ion-col>\n      <ion-col><a class=\"social\" href=\"https://www.facebook.com/\" target=\"_blank\">\n        <ion-icon style=\"font-size: 2rem; padding: 0px 30px 0px 30px;\" name=\"logo-facebook\"></ion-icon>\n      </a></ion-col>\n      <ion-col><a class=\"social\" href=\"https://www.google.com/\" target=\"_blank\">\n        <ion-icon style=\"font-size: 2rem; padding: 0px 30px 0px 30px;\" name=\"logo-google\"></ion-icon>\n      </a></ion-col>\n    </ion-grid>\n    <ion-grid style=\"text-align: center; margin-top: -15px;\">\n      <h6 >Acesso rápido</h6>\n    </ion-grid>\n  </ion-toolbar>\n</ion-footer>\n");

/***/ }),

/***/ "X3z8":
/*!*************************************************************!*\
  !*** ./src/app/pages/cursos-livres/cursos-livres.module.ts ***!
  \*************************************************************/
/*! exports provided: CursosLivresPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CursosLivresPageModule", function() { return CursosLivresPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _cursos_livres_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./cursos-livres-routing.module */ "MjK2");
/* harmony import */ var _cursos_livres_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./cursos-livres.page */ "D3xk");
/* harmony import */ var _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @swimlane/ngx-datatable */ "lDzL");








let CursosLivresPageModule = class CursosLivresPageModule {
};
CursosLivresPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _cursos_livres_routing_module__WEBPACK_IMPORTED_MODULE_5__["CursosLivresPageRoutingModule"],
            _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_7__["NgxDatatableModule"]
        ],
        declarations: [_cursos_livres_page__WEBPACK_IMPORTED_MODULE_6__["CursosLivresPage"]]
    })
], CursosLivresPageModule);



/***/ }),

/***/ "qF9q":
/*!********************************!*\
  !*** ./src/assets/cursos.json ***!
  \********************************/
/*! exports provided: 0, 1, 2, 3, 4, 5, 6, default */
/***/ (function(module) {

module.exports = JSON.parse("[{\"curso\":\"Ballet\",\"dia\":\"Segunda-Feira\",\"inicio\":\"13h\",\"fim\":\"14h\"},{\"curso\":\"Ballet\",\"dia\":\"Segunda-Feira\",\"inicio\":\"14h\",\"fim\":\"15h\"},{\"curso\":\"Ballet\",\"dia\":\"Segunda-Feira\",\"inicio\":\"15h\",\"fim\":\"16h\"},{\"curso\":\"Violão\",\"dia\":\"Quarta-Feira\",\"inicio\":\"13h\",\"fim\":\"14h\"},{\"curso\":\"Violão\",\"dia\":\"Quarta-Feira\",\"inicio\":\"15h\",\"fim\":\"16h\"},{\"curso\":\"Teatro\",\"dia\":\"Sexta-Feira\",\"inicio\":\"13h\",\"fim\":\"15h\"},{\"curso\":\"Teatro\",\"dia\":\"Sexta-Feira\",\"inicio\":\"15h\",\"fim\":\"17h\"}]");

/***/ })

}]);
//# sourceMappingURL=pages-cursos-livres-cursos-livres-module.js.map