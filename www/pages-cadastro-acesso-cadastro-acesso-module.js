(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-cadastro-acesso-cadastro-acesso-module"],{

/***/ "+9/W":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/cadastro-acesso/cadastro-acesso.page.html ***!
  \*******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n\n<ion-content [fullscreen]=\"true\" class=\"back\">\n  <ion-grid class=\"grid\">\n\n    <div style=\"text-align: center; margin-top: 20px; padding: 0px 30px 0px 30px;\">\n      <img src=\"../../assets/_.png\" alt=\"\" style=\"width: 60px;margin-top: 7px;\">\n      <h6 style=\"margin-top:-7px;border: 1px solid grey; font-weight: 600 !important; text-align: center;font-size: 1.2rem; \">Comunica Escola</h6>\n    </div>\n\n    <div class=\"container\">\n      <ion-row class=\"ion-justify-content-center\">\n        <div style=\" width: 100%; text-align: center;\">\n          <h4 class=\"title-grey\">Cadastro</h4>\n\n          <h6 class=\"subject-body\">Preencha os Campos</h6>\n        </div>\n      </ion-row>\n      <ion-row class=\"ion-justify-content-center\" >\n        <div class=\"perfil-form\">\n          <label for=\"basic-url\">Chave de Acesso</label>\n          <input type=\"text\" id=\"basic-url\" maxlength=\"6\" aria-describedby=\"basic-addon3\" >\n        </div>\n      </ion-row>\n      <ion-row class=\"ion-justify-content-center\">\n        <div class=\"perfil-form\">\n          <label for=\"\">E-mail</label>\n          <input type=\"email\" id=\"basic-url\"   aria-describedby=\"basic-addon3\" >\n\n        </div>\n      </ion-row>\n      <ion-row class=\"ion-justify-content-center\">\n        <div class=\"perfil-form\">\n          <label for=\"basic-url\">Senha</label>\n          <input type=\"password\" id=\"basic-url\" maxlength=\"6\" aria-describedby=\"basic-addon3\" >\n        </div>\n      </ion-row>\n\n\n      <ion-row class=\"ion-justify-content-center\" style=\"margin-top: 20px;text-align: center;display: grid;\">\n       <h6 class=\"termo\" style=\"font-size: 0.9rem;\">Estou de acordo que o Comunica Escola contém dados pessoais do aluno sob minha tutela</h6>\n       <img class=\"seta\" src=\"../../../assets/seta_cheia.png\" alt=\"\" style=\"width: 80px;\">\n        <div class=\"toggle\"><ion-toggle></ion-toggle></div>\n      </ion-row>\n\n      <ion-row class=\"ion-justify-content-center\">\n        <ion-button color=\"primary\"style=\"margin-top: -45px\">Cadastrar</ion-button>\n        <ion-button (click)=\"cancelar()\" color=\"danger\"style=\"margin-top: -45px\">Cancelar</ion-button>\n      </ion-row>\n\n    </div>\n  </ion-grid>\n</ion-content>\n");

/***/ }),

/***/ "CPH+":
/*!*****************************************************************!*\
  !*** ./src/app/pages/cadastro-acesso/cadastro-acesso.module.ts ***!
  \*****************************************************************/
/*! exports provided: CadastroAcessoPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CadastroAcessoPageModule", function() { return CadastroAcessoPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _cadastro_acesso_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./cadastro-acesso-routing.module */ "r16t");
/* harmony import */ var _cadastro_acesso_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./cadastro-acesso.page */ "Dp1K");







let CadastroAcessoPageModule = class CadastroAcessoPageModule {
};
CadastroAcessoPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _cadastro_acesso_routing_module__WEBPACK_IMPORTED_MODULE_5__["CadastroAcessoPageRoutingModule"]
        ],
        declarations: [_cadastro_acesso_page__WEBPACK_IMPORTED_MODULE_6__["CadastroAcessoPage"]]
    })
], CadastroAcessoPageModule);



/***/ }),

/***/ "Dp1K":
/*!***************************************************************!*\
  !*** ./src/app/pages/cadastro-acesso/cadastro-acesso.page.ts ***!
  \***************************************************************/
/*! exports provided: CadastroAcessoPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CadastroAcessoPage", function() { return CadastroAcessoPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_cadastro_acesso_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./cadastro-acesso.page.html */ "+9/W");
/* harmony import */ var _cadastro_acesso_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./cadastro-acesso.page.scss */ "v/e/");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");





let CadastroAcessoPage = class CadastroAcessoPage {
    constructor(router) {
        this.router = router;
    }
    ngOnInit() {
    }
    cancelar() {
        this.router.navigate(["/login"]);
    }
};
CadastroAcessoPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }
];
CadastroAcessoPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-cadastro-acesso',
        template: _raw_loader_cadastro_acesso_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_cadastro_acesso_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], CadastroAcessoPage);



/***/ }),

/***/ "r16t":
/*!*************************************************************************!*\
  !*** ./src/app/pages/cadastro-acesso/cadastro-acesso-routing.module.ts ***!
  \*************************************************************************/
/*! exports provided: CadastroAcessoPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CadastroAcessoPageRoutingModule", function() { return CadastroAcessoPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _cadastro_acesso_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./cadastro-acesso.page */ "Dp1K");




const routes = [
    {
        path: '',
        component: _cadastro_acesso_page__WEBPACK_IMPORTED_MODULE_3__["CadastroAcessoPage"]
    }
];
let CadastroAcessoPageRoutingModule = class CadastroAcessoPageRoutingModule {
};
CadastroAcessoPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], CadastroAcessoPageRoutingModule);



/***/ }),

/***/ "v/e/":
/*!*****************************************************************!*\
  !*** ./src/app/pages/cadastro-acesso/cadastro-acesso.page.scss ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".back-side {\n  background-position-x: 620px;\n  background-position-y: 1320px;\n  height: 100%;\n  position: absolute;\n  z-index: -9999;\n  margin: 0px;\n  background-color: black;\n  filter: opacity(0.2);\n}\n\n.termo {\n  border: 1px solid black;\n  border-radius: 5px;\n  padding: 5px;\n  margin: 0px 10px 0px 10px;\n  background: #f0f0c3;\n}\n\n.toggle {\n  position: relative;\n  left: 40%;\n}\n\n.toggle ion-toggle {\n  position: relative;\n  top: -35px;\n}\n\n.seta {\n  position: relative;\n  left: 63%;\n  top: -12px;\n}\n\n.perfil-form {\n  display: grid;\n  width: 90%;\n  margin-top: 25px;\n}\n\n.perfil-form label {\n  margin-bottom: 5px;\n  font-size: 0.8rem;\n}\n\n.perfil-form input {\n  border-radius: 7px;\n  height: 40px;\n  border: none;\n  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;\n  padding-left: 10px;\n}\n\n.btn-custon {\n  width: 90%;\n  border-radius: 12px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2NhZGFzdHJvLWFjZXNzby5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0E7RUFDRSw0QkFBQTtFQUNBLDZCQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsY0FBQTtFQUNBLFdBQUE7RUFDQSx1QkFBQTtFQUNBLG9CQUFBO0FBQUY7O0FBSUU7RUFDRSx1QkFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLHlCQUFBO0VBQ0EsbUJBQUE7QUFESjs7QUFJRTtFQUNFLGtCQUFBO0VBQ0EsU0FBQTtBQURKOztBQUVJO0VBQ0Usa0JBQUE7RUFDRixVQUFBO0FBQUo7O0FBSUU7RUFDRSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxVQUFBO0FBREo7O0FBTUU7RUFDRSxhQUFBO0VBQ0EsVUFBQTtFQUNBLGdCQUFBO0FBSEo7O0FBTUE7RUFDSSxrQkFBQTtFQUNBLGlCQUFBO0FBSEo7O0FBTUE7RUFDSSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0EsNENBQUE7RUFBNkMsa0JBQUE7QUFGakQ7O0FBS0E7RUFDRSxVQUFBO0VBQ0EsbUJBQUE7QUFGRiIsImZpbGUiOiJjYWRhc3Ryby1hY2Vzc28ucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXG4uYmFjay1zaWRlIHtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbi14OiA2MjBweDtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbi15OiAxMzIwcHg7XG4gIGhlaWdodDogMTAwJTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB6LWluZGV4OiAtOTk5OTtcbiAgbWFyZ2luOiAwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xuICBmaWx0ZXI6IG9wYWNpdHkoMC4yKTtcblxuICB9XG5cbiAgLnRlcm1ve1xuICAgIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICBwYWRkaW5nOiA1cHg7XG4gICAgbWFyZ2luOiAwcHggMTBweCAwcHggMTBweDtcbiAgICBiYWNrZ3JvdW5kOiByZ2IoMjQwLCAyNDAsIDE5NSk7XG4gIH1cblxuICAudG9nZ2xle1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBsZWZ0OiA0MCU7XG4gICAgaW9uLXRvZ2dsZXtcbiAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICB0b3A6IC0zNXB4O1xuICAgIH1cbiAgfVxuXG4gIC5zZXRhe1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBsZWZ0OiA2MyU7XG4gICAgdG9wOiAtMTJweDtcbiAgfVxuXG5cblxuICAucGVyZmlsLWZvcm0ge1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgd2lkdGg6IDkwJTtcbiAgICBtYXJnaW4tdG9wOiAyNXB4O1xufVxuXG4ucGVyZmlsLWZvcm0gbGFiZWwge1xuICAgIG1hcmdpbi1ib3R0b206IDVweDtcbiAgICBmb250LXNpemU6IDAuOHJlbTtcbn1cblxuLnBlcmZpbC1mb3JtIGlucHV0IHtcbiAgICBib3JkZXItcmFkaXVzOiA3cHg7XG4gICAgaGVpZ2h0OiA0MHB4O1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICBib3gtc2hhZG93OiByZ2JhKDAsIDAsIDAsIDAuMzUpIDBweCA1cHggMTVweDtwYWRkaW5nLWxlZnQ6IDEwcHg7XG59XG5cbi5idG4tY3VzdG9ue1xuICB3aWR0aDogOTAlO1xuICBib3JkZXItcmFkaXVzOiAxMnB4O1xufVxuIl19 */");

/***/ })

}]);
//# sourceMappingURL=pages-cadastro-acesso-cadastro-acesso-module.js.map