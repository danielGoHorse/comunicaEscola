(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-login-login-module"],{

/***/ "F4UR":
/*!*********************************************!*\
  !*** ./src/app/pages/login/login.module.ts ***!
  \*********************************************/
/*! exports provided: LoginPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPageModule", function() { return LoginPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _login_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./login-routing.module */ "aTZN");
/* harmony import */ var _login_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./login.page */ "bP1B");







let LoginPageModule = class LoginPageModule {
};
LoginPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _login_routing_module__WEBPACK_IMPORTED_MODULE_5__["LoginPageRoutingModule"]
        ],
        declarations: [_login_page__WEBPACK_IMPORTED_MODULE_6__["LoginPage"]]
    })
], LoginPageModule);



/***/ }),

/***/ "H+1c":
/*!*********************************************!*\
  !*** ./src/app/pages/login/login.page.scss ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("h6 {\n  color: #033f6d !important;\n  font-size: 0.9rem;\n  font-weight: bold;\n}\n\nh5 {\n  color: #000000 !important;\n  font-size: 1rem;\n  font-weight: normal;\n}\n\nh4 {\n  font-weight: bold;\n  color: #687484 !important;\n}\n\nion-content {\n  --background: url('sala-de-aula-vazia-opacity.png') no-repeat center center / cover !important;\n}\n\n.back-side {\n  background-position-x: 620px;\n  background-position-y: 1320px;\n  height: 100%;\n  position: absolute;\n  z-index: -9999;\n  margin: 0px;\n  background-color: black;\n  filter: opacity(0.2);\n}\n\n.perfil-form {\n  display: grid;\n  width: 90%;\n  margin-top: 25px;\n}\n\n.perfil-form label {\n  margin-bottom: 5px;\n  font-size: 0.8rem;\n}\n\n.perfil-form input {\n  border-radius: 7px;\n  height: 40px;\n  border: none;\n  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;\n  padding-left: 10px;\n}\n\n.btn-custon {\n  width: 90%;\n  border-radius: 12px;\n}\n\n#token {\n  padding: 5px;\n  width: auto;\n  text-align: center;\n  margin-top: 5px;\n  border-radius: 7px;\n  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2xvZ2luLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHlCQUFBO0VBQ0EsaUJBQUE7RUFDQSxpQkFBQTtBQUNGOztBQUVBO0VBQ0UseUJBQUE7RUFDQSxlQUFBO0VBQ0EsbUJBQUE7QUFDRjs7QUFFQTtFQUVFLGlCQUFBO0VBQ0EseUJBQUE7QUFBRjs7QUFHQTtFQUNBLDhGQUFBO0FBQUE7O0FBU0E7RUFDRSw0QkFBQTtFQUNBLDZCQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsY0FBQTtFQUNBLFdBQUE7RUFDQSx1QkFBQTtFQUNBLG9CQUFBO0FBTkY7O0FBWUU7RUFDRSxhQUFBO0VBQ0EsVUFBQTtFQUNBLGdCQUFBO0FBVEo7O0FBWUE7RUFDSSxrQkFBQTtFQUNBLGlCQUFBO0FBVEo7O0FBWUE7RUFDSSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0EsNENBQUE7RUFBNkMsa0JBQUE7QUFSakQ7O0FBV0E7RUFDRSxVQUFBO0VBQ0EsbUJBQUE7QUFSRjs7QUFXQTtFQUNFLFlBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSw0Q0FBQTtBQVJGIiwiZmlsZSI6ImxvZ2luLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImg2e1xuICBjb2xvcjogIzAzM2Y2ZCAhaW1wb3J0YW50O1xuICBmb250LXNpemU6IDAuOXJlbTtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG5cbmg1e1xuICBjb2xvcjogIzAwMDAwMCAhaW1wb3J0YW50O1xuICBmb250LXNpemU6IDEuMHJlbTtcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbn1cblxuaDR7XG4gIC8vIGZvbnQtZmFtaWx5OiBBcmlhbCwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgY29sb3I6ICM2ODc0ODQgIWltcG9ydGFudDtcbn1cblxuaW9uLWNvbnRlbnQge1xuLS1iYWNrZ3JvdW5kOiB1cmwoJy4uLy4uLy4uL2Fzc2V0cy9zYWxhLWRlLWF1bGEtdmF6aWEtb3BhY2l0eS5wbmcnKSBuby1yZXBlYXQgY2VudGVyIGNlbnRlciAvIGNvdmVyICFpbXBvcnRhbnQ7XG59XG5cblxuXG5cblxuXG5cbi5iYWNrLXNpZGUge1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uLXg6IDYyMHB4O1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uLXk6IDEzMjBweDtcbiAgaGVpZ2h0OiAxMDAlO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHotaW5kZXg6IC05OTk5O1xuICBtYXJnaW46IDBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XG4gIGZpbHRlcjogb3BhY2l0eSgwLjIpO1xuXG4gIH1cblxuXG5cbiAgLnBlcmZpbC1mb3JtIHtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIHdpZHRoOiA5MCU7XG4gICAgbWFyZ2luLXRvcDogMjVweDtcbn1cblxuLnBlcmZpbC1mb3JtIGxhYmVsIHtcbiAgICBtYXJnaW4tYm90dG9tOiA1cHg7XG4gICAgZm9udC1zaXplOiAwLjhyZW07XG59XG5cbi5wZXJmaWwtZm9ybSBpbnB1dCB7XG4gICAgYm9yZGVyLXJhZGl1czogN3B4O1xuICAgIGhlaWdodDogNDBweDtcbiAgICBib3JkZXI6IG5vbmU7XG4gICAgYm94LXNoYWRvdzogcmdiYSgwLCAwLCAwLCAwLjM1KSAwcHggNXB4IDE1cHg7cGFkZGluZy1sZWZ0OiAxMHB4O1xufVxuXG4uYnRuLWN1c3RvbntcbiAgd2lkdGg6IDkwJTtcbiAgYm9yZGVyLXJhZGl1czogMTJweDtcbn1cblxuI3Rva2Vue1xuICBwYWRkaW5nOiA1cHg7XG4gIHdpZHRoOiBhdXRvO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIG1hcmdpbi10b3A6IDVweDtcbiAgYm9yZGVyLXJhZGl1czogN3B4O1xuICBib3gtc2hhZG93OiByZ2JhKDAsIDAsIDAsIDAuMzUpIDBweCA1cHggMTVweDtcbn1cblxuXG4vLyAuZm9vdGVyIHtcbi8vICAgcG9zaXRpb246IGZpeGVkO1xuLy8gICBsZWZ0OiAwO1xuLy8gICBib3R0b206IDA7XG4vLyAgIHdpZHRoOiAxMDAlO1xuLy8gICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbi8vICAgY29sb3I6IHJnYmEoMCwgMCwgMCwgMC4zNSkgMHB4IDVweCAxNXB4O3BhZGRpbmctbGVmdDogMTBweDtcbi8vICAgdGV4dC1hbGlnbjogY2VudGVyO1xuLy8gfVxuIl19 */");

/***/ }),

/***/ "TuYN":
/*!***********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/login/login.page.html ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n\n<ion-content [fullscreen]=\"true\" class=\"back\">\n  <ion-grid class=\"grid\">\n\n    <div style=\"text-align: center; margin-top: 20px; padding: 0px 30px 0px 30px;\">\n      <img src=\"../../assets/logo.png\" alt=\"\" style=\"width: 60px;margin-top: 7px;\">\n      <h6 style=\"margin-top:-7px;border: 1px solid grey; font-weight: 600 !important; text-align: center;font-size: 1.2rem; \">Comunica Escola</h6>\n    </div>\n\n    <div class=\"container\">\n      <ion-row class=\"ion-justify-content-center\">\n        <div style=\" width: 100%; margin-top: 20px; margin-left: 20px; margin-right: 20px;\">\n          <h4 class=\"title-grey\">Bem vindo</h4>\n          <!-- <hr style=\"width: 50px; size: 5px; height: 10px;\"> -->\n          <h6 class=\"subject-body\" style=\"text-align: left; margin-top: 30px;\">Insira seu e-mail cadastrado<br> e senha recebida por SMS</h6>\n        </div>\n      </ion-row>\n      <ion-row class=\"ion-justify-content-center\" style=\"margin-top: 20px;\">\n        <div class=\"perfil-form\">\n          <label for=\"\">E-mail</label>\n          <input type=\"email\" id=\"basic-url\"   aria-describedby=\"basic-addon3\" >\n\n        </div>\n      </ion-row>\n      <ion-row class=\"ion-justify-content-center\">\n        <div class=\"perfil-form\">\n          <label for=\"basic-url\">Digite sua Senha</label>\n          <input type=\"password\" id=\"basic-url\" maxlength=\"6\" aria-describedby=\"basic-addon3\" >\n        </div>\n      </ion-row>\n\n      <ion-row class=\"ion-justify-content-center\" style=\"margin-top: 20px;\">\n\n         <ion-button (click)=\"logar()\" color=\"primary\">Entrar</ion-button>\n      </ion-row>\n      <ion-row class=\"ion-justify-content-center\">\n        <div style=\" width: 90%; margin-top: 20px;text-align: center;\">\n          <a (click)=\"newCadastro()\">\n            <h6>É sua primeira vez? Clique aqui</h6>\n          </a>\n        </div>\n      </ion-row>\n      <ion-row class=\"ion-justify-content-center\">\n        <div style=\" width: 90%; margin-top: 10px;text-align: center;\">\n            <h5>Powered by DHGiga</h5>\n        </div>\n      </ion-row>\n    </div>\n  </ion-grid>\n</ion-content>\n");

/***/ }),

/***/ "aTZN":
/*!*****************************************************!*\
  !*** ./src/app/pages/login/login-routing.module.ts ***!
  \*****************************************************/
/*! exports provided: LoginPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPageRoutingModule", function() { return LoginPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _login_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./login.page */ "bP1B");




const routes = [
    {
        path: '',
        component: _login_page__WEBPACK_IMPORTED_MODULE_3__["LoginPage"]
    }
];
let LoginPageRoutingModule = class LoginPageRoutingModule {
};
LoginPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], LoginPageRoutingModule);



/***/ }),

/***/ "bP1B":
/*!*******************************************!*\
  !*** ./src/app/pages/login/login.page.ts ***!
  \*******************************************/
/*! exports provided: LoginPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPage", function() { return LoginPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_login_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./login.page.html */ "TuYN");
/* harmony import */ var _login_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./login.page.scss */ "H+1c");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");





let LoginPage = class LoginPage {
    constructor(router) {
        this.router = router;
    }
    ngOnInit() {
    }
    newCadastro() {
        this.router.navigate(["/cadastro-acesso"]);
    }
    logar() {
        this.router.navigate(["/home"]);
    }
};
LoginPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }
];
LoginPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-login',
        template: _raw_loader_login_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_login_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], LoginPage);



/***/ })

}]);
//# sourceMappingURL=pages-login-login-module.js.map