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
/* harmony default export */ __webpack_exports__["default"] = ("h6 {\n  color: #033f6d !important;\n  font-size: 0.9rem;\n  font-weight: bold;\n}\n\nh5 {\n  color: #000000 !important;\n  font-size: 1rem;\n  font-weight: normal;\n}\n\nh4 {\n  font-weight: bold;\n  color: #687484 !important;\n}\n\nion-content {\n  --background: url('sala-de-aula-vazia-opacity.png') no-repeat center center / cover !important;\n}\n\n.back-side {\n  background-position-x: 620px;\n  background-position-y: 1320px;\n  height: 100%;\n  position: absolute;\n  z-index: -9999;\n  margin: 0px;\n  background-color: black;\n  filter: opacity(0.2);\n}\n\n.perfil-form {\n  display: grid;\n  width: 90%;\n  margin-top: 25px;\n}\n\n.perfil-form label {\n  margin-bottom: 5px;\n  font-size: 0.8rem;\n}\n\n.perfil-form input {\n  border-radius: 7px;\n  height: 40px;\n  border: none;\n  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;\n  padding-left: 10px;\n  color: #000000;\n}\n\n.btn-custon {\n  width: 90%;\n  border-radius: 12px;\n}\n\n#token {\n  padding: 5px;\n  width: auto;\n  text-align: center;\n  margin-top: 5px;\n  border-radius: 7px;\n  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;\n}\n\nion-button {\n  width: 250px;\n}\n\nion-slides {\n  height: 100%;\n}\n\nion-slides .slide-inner {\n  width: 95%;\n  color: #fff;\n  background-color: #0071bc36;\n  border-radius: 10px;\n}\n\nion-slides .slide-inner ion-item {\n  --background: rgba(255, 255, 255, 0.2);\n  --border-radius: 10px;\n}\n\nion-slides .slide-inner ion-item ion-input {\n  --color: #fff;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2xvZ2luLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHlCQUFBO0VBQ0EsaUJBQUE7RUFDQSxpQkFBQTtBQUNGOztBQUVBO0VBQ0UseUJBQUE7RUFDQSxlQUFBO0VBQ0EsbUJBQUE7QUFDRjs7QUFFQTtFQUVFLGlCQUFBO0VBQ0EseUJBQUE7QUFBRjs7QUFHQTtFQUNBLDhGQUFBO0FBQUE7O0FBU0E7RUFDRSw0QkFBQTtFQUNBLDZCQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsY0FBQTtFQUNBLFdBQUE7RUFDQSx1QkFBQTtFQUNBLG9CQUFBO0FBTkY7O0FBWUU7RUFDRSxhQUFBO0VBQ0EsVUFBQTtFQUNBLGdCQUFBO0FBVEo7O0FBWUE7RUFDSSxrQkFBQTtFQUNBLGlCQUFBO0FBVEo7O0FBWUE7RUFDSSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0EsNENBQUE7RUFBNkMsa0JBQUE7RUFDN0MsY0FBQTtBQVJKOztBQVdBO0VBQ0UsVUFBQTtFQUNBLG1CQUFBO0FBUkY7O0FBV0E7RUFDRSxZQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0VBQ0EsNENBQUE7QUFSRjs7QUFXQTtFQUNFLFlBQUE7QUFSRjs7QUE0Q0E7RUFDRSxZQUFBO0FBekNGOztBQTJDRTtFQUNJLFVBQUE7RUFDQSxXQUFBO0VBQ0EsMkJBQUE7RUFDQSxtQkFBQTtBQXpDTjs7QUEyQ007RUFDSSxzQ0FBQTtFQUNBLHFCQUFBO0FBekNWOztBQTJDVTtFQUNJLGFBQUE7QUF6Q2QiLCJmaWxlIjoibG9naW4ucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaDZ7XG4gIGNvbG9yOiAjMDMzZjZkICFpbXBvcnRhbnQ7XG4gIGZvbnQtc2l6ZTogMC45cmVtO1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cblxuaDV7XG4gIGNvbG9yOiAjMDAwMDAwICFpbXBvcnRhbnQ7XG4gIGZvbnQtc2l6ZTogMS4wcmVtO1xuICBmb250LXdlaWdodDogbm9ybWFsO1xufVxuXG5oNHtcbiAgLy8gZm9udC1mYW1pbHk6IEFyaWFsLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBjb2xvcjogIzY4NzQ4NCAhaW1wb3J0YW50O1xufVxuXG5pb24tY29udGVudCB7XG4tLWJhY2tncm91bmQ6IHVybCgnLi4vLi4vLi4vYXNzZXRzL3NhbGEtZGUtYXVsYS12YXppYS1vcGFjaXR5LnBuZycpIG5vLXJlcGVhdCBjZW50ZXIgY2VudGVyIC8gY292ZXIgIWltcG9ydGFudDtcbn1cblxuXG5cblxuXG5cblxuLmJhY2stc2lkZSB7XG4gIGJhY2tncm91bmQtcG9zaXRpb24teDogNjIwcHg7XG4gIGJhY2tncm91bmQtcG9zaXRpb24teTogMTMyMHB4O1xuICBoZWlnaHQ6IDEwMCU7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgei1pbmRleDogLTk5OTk7XG4gIG1hcmdpbjogMHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcbiAgZmlsdGVyOiBvcGFjaXR5KDAuMik7XG5cbiAgfVxuXG5cblxuICAucGVyZmlsLWZvcm0ge1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgd2lkdGg6IDkwJTtcbiAgICBtYXJnaW4tdG9wOiAyNXB4O1xufVxuXG4ucGVyZmlsLWZvcm0gbGFiZWwge1xuICAgIG1hcmdpbi1ib3R0b206IDVweDtcbiAgICBmb250LXNpemU6IDAuOHJlbTtcbn1cblxuLnBlcmZpbC1mb3JtIGlucHV0IHtcbiAgICBib3JkZXItcmFkaXVzOiA3cHg7XG4gICAgaGVpZ2h0OiA0MHB4O1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICBib3gtc2hhZG93OiByZ2JhKDAsIDAsIDAsIDAuMzUpIDBweCA1cHggMTVweDtwYWRkaW5nLWxlZnQ6IDEwcHg7XG4gICAgY29sb3I6ICMwMDAwMDA7XG59XG5cbi5idG4tY3VzdG9ue1xuICB3aWR0aDogOTAlO1xuICBib3JkZXItcmFkaXVzOiAxMnB4O1xufVxuXG4jdG9rZW57XG4gIHBhZGRpbmc6IDVweDtcbiAgd2lkdGg6IGF1dG87XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgbWFyZ2luLXRvcDogNXB4O1xuICBib3JkZXItcmFkaXVzOiA3cHg7XG4gIGJveC1zaGFkb3c6IHJnYmEoMCwgMCwgMCwgMC4zNSkgMHB4IDVweCAxNXB4O1xufVxuXG5pb24tYnV0dG9ue1xuICB3aWR0aDogMjUwcHg7XG59XG5cblxuLy8gLmZvb3RlciB7XG4vLyAgIHBvc2l0aW9uOiBmaXhlZDtcbi8vICAgbGVmdDogMDtcbi8vICAgYm90dG9tOiAwO1xuLy8gICB3aWR0aDogMTAwJTtcbi8vICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4vLyAgIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuMzUpIDBweCA1cHggMTVweDtwYWRkaW5nLWxlZnQ6IDEwcHg7XG4vLyAgIHRleHQtYWxpZ246IGNlbnRlcjtcbi8vIH1cblxuXG4vLyAuY29udGFpbmVyIHtcbi8vICAgcG9zaXRpb246IGFic29sdXRlO1xuLy8gICBsZWZ0OiAwO1xuLy8gICByaWdodDogMDtcbi8vICAgd2lkdGg6IDc1JTtcbi8vICAgbWFyZ2luOiAwIGF1dG87XG4vLyAgIHotaW5kZXg6IDI7XG5cbi8vICAgJi50b3Age1xuLy8gICAgICAgdG9wOiA1JTtcbi8vICAgfVxuXG4vLyAgICYuYm90dG9tIHtcbi8vICAgICAgIGJvdHRvbTogMzAlO1xuXG4vLyAgICAgICBzcGFuIHtcbi8vICAgICAgICAgICBjb2xvcjogI2ZmZjtcbi8vICAgICAgIH1cbi8vICAgfVxuLy8gfVxuXG5pb24tc2xpZGVzIHtcbiAgaGVpZ2h0OiAxMDAlO1xuXG4gIC5zbGlkZS1pbm5lciB7XG4gICAgICB3aWR0aDogOTUlO1xuICAgICAgY29sb3I6ICNmZmY7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDA3MWJjMzY7XG4gICAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuXG4gICAgICBpb24taXRlbSB7XG4gICAgICAgICAgLS1iYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMik7XG4gICAgICAgICAgLS1ib3JkZXItcmFkaXVzOiAxMHB4O1xuXG4gICAgICAgICAgaW9uLWlucHV0IHtcbiAgICAgICAgICAgICAgLS1jb2xvcjogI2ZmZjtcbiAgICAgICAgICB9XG4gICAgICB9XG4gIH1cbn1cblxuLy8gLm9jZWFuIHtcbi8vICAgcG9zaXRpb246IGFic29sdXRlO1xuLy8gICBsZWZ0OiAwO1xuLy8gICByaWdodDogMDtcbi8vICAgYm90dG9tOiAwO1xuLy8gICBoZWlnaHQ6IDQ1JTtcbi8vICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xuXG4vLyAgIC53YXZlcyB7XG4vLyAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4vLyAgICAgICB0b3A6IC0xMDBweDtcbi8vICAgICAgIGxlZnQ6IDA7XG4vLyAgICAgICByaWdodDogMDtcbi8vICAgICAgIGhlaWdodDogMTAwcHg7XG4vLyAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy9hc3NldHMvaW1nL3dhdmVzLnBuZycpO1xuLy8gICAgICAgYmFja2dyb3VuZC1zaXplOiBjb250YWluO1xuLy8gICAgICAgdHJhbnNpdGlvbjogYWxsIDAuNXM7XG4vLyAgIH1cbi8vIH1cbiJdfQ== */");

/***/ }),

/***/ "TuYN":
/*!***********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/login/login.page.html ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-content [fullscreen]=\"true\" class=\"back swiper-no-swiping\" >\n  <ion-grid class=\"grid\">\n\n    <div style=\"text-align: center; margin-top: 20px; padding: 0px 30px 0px 30px;\">\n      <img src=\"../../assets/logo.png\" alt=\"\" style=\"width: 125px;margin-top: 7px;\">\n      <!-- <h6 style=\"margin-top:-7px;border: 1px solid grey; font-weight: 600 !important; text-align: center;font-size: 1.2rem; \">Comunica Escola</h6> -->\n    </div>\n\n    <div class=\"container\">\n      <ion-row class=\"ion-justify-content-center\" style=\" margin-top: 20px;\">\n        <!-- <div style=\" width: 100%; margin-top: 20px; margin-left: 20px; margin-right: 20px;\">\n          <h4 class=\"title-grey\">Bem vindo</h4>\n          <h6 class=\"subject-body\" style=\"text-align: left; margin-top: 30px;\">Insira seu e-mail cadastrado<br> e senha recebida por SMS</h6>\n        </div> -->\n        <ion-segment (ionChange)=\"segmentChanged($event)\" mode=\"ios\" value=\"login\">\n          <ion-segment-button mode=\"ios\" value=\"login\">\n            <ion-label>Login</ion-label>\n          </ion-segment-button>\n          <ion-segment-button mode=\"ios\" value=\"register\">\n            <ion-label>Cadastro</ion-label>\n          </ion-segment-button>\n        </ion-segment>\n      </ion-row>\n\n      <ion-slides style=\"margin-top: 60px;\">\n        <ion-slide>\n          <div class=\"slide-inner ion-padding\">\n            <span>Login</span>\n\n            <ion-row class=\"ion-justify-content-center\">\n              <div class=\"perfil-form\">\n                <label for=\"\">E-mail</label>\n                <input type=\"email\" id=\"basic-url\" aria-describedby=\"basic-addon3\" [(ngModel)]=\"userLogin.email\">\n\n              </div>\n            </ion-row>\n            <ion-row class=\"ion-justify-content-center\">\n              <div class=\"perfil-form\">\n                <label for=\"basic-url\">Digite sua Senha</label>\n                <input type=\"password\" id=\"basic-url\" maxlength=\"6\" aria-describedby=\"basic-addon3\" [(ngModel)]=\"userLogin.password\">\n              </div>\n            </ion-row>\n\n            <ion-row class=\"ion-justify-content-center\" style=\"margin-top: 20px;\">\n\n              <ion-button (click)=\"login()\" color=\"primary\">Entrar</ion-button>\n            </ion-row>\n          </div>\n        </ion-slide>\n\n        <ion-slide>\n          <div class=\"slide-inner ion-padding\">\n            <span>Cadastro</span>\n\n            <ion-row class=\"ion-justify-content-center\">\n              <div class=\"perfil-form\">\n                <label for=\"\">E-mail</label>\n                <input type=\"email\" id=\"basic-url\" aria-describedby=\"basic-addon3\" [(ngModel)]=\"userRegister.email\">\n\n              </div>\n            </ion-row>\n            <ion-row class=\"ion-justify-content-center\">\n              <div class=\"perfil-form\">\n                <label for=\"basic-url\">Senha</label>\n                <input type=\"password\" id=\"basic-url\" maxlength=\"6\" aria-describedby=\"basic-addon3\" [(ngModel)]=\"userRegister.password\">\n              </div>\n            </ion-row>\n\n            <ion-row class=\"ion-justify-content-center\" style=\"margin-top: 20px;\">\n\n              <ion-button (click)=\"register()\" color=\"primary\">Cadastrar</ion-button>\n            </ion-row>\n          </div>\n        </ion-slide>\n      </ion-slides>\n\n\n\n\n\n      <!-- <ion-row class=\"ion-justify-content-center\" style=\"margin-top: 20px;\">\n        <div class=\"perfil-form\">\n          <label for=\"\">E-mail</label>\n          <input type=\"email\" id=\"basic-url\"   aria-describedby=\"basic-addon3\" >\n\n        </div>\n      </ion-row>\n      <ion-row class=\"ion-justify-content-center\">\n        <div class=\"perfil-form\">\n          <label for=\"basic-url\">Digite sua Senha</label>\n          <input type=\"password\" id=\"basic-url\" maxlength=\"6\" aria-describedby=\"basic-addon3\" >\n        </div>\n      </ion-row> -->\n\n      <!-- <ion-row class=\"ion-justify-content-center\" style=\"margin-top: 20px;\">\n\n         <ion-button (click)=\"logar()\" color=\"primary\">Entrar</ion-button>\n      </ion-row> -->\n      <!-- <ion-row class=\"ion-justify-content-center\">\n        <div style=\" width: 90%; margin-top: 20px;text-align: center;\">\n          <a (click)=\"newCadastro()\">\n            <h6>É sua primeira vez? Clique aqui</h6>\n          </a>\n        </div>\n      </ion-row> -->\n      <ion-row class=\"ion-justify-content-center\">\n        <div style=\" width: 90%; margin-top: 10px;text-align: center;\">\n          <h5>Powered by DHGiga</h5>\n        </div>\n      </ion-row>\n    </div>\n  </ion-grid>\n</ion-content>\n");

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
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/auth.service */ "lGQG");



/* eslint-disable @typescript-eslint/quotes */
/* eslint-disable @typescript-eslint/member-ordering */




let LoginPage = class LoginPage {
    constructor(router, authService, loadingCtrl, toastCtrl) {
        this.router = router;
        this.authService = authService;
        this.loadingCtrl = loadingCtrl;
        this.toastCtrl = toastCtrl;
        this.wavesPosition = 0;
        this.wavesDifference = 100;
        this.userLogin = {};
        this.userRegister = {};
    }
    ngOnInit() {
    }
    segmentChanged(event) {
        if (event.detail.value === 'login') {
            this.slides.slidePrev();
            this.wavesPosition += this.wavesDifference;
        }
        else {
            this.slides.slideNext();
            this.wavesPosition -= this.wavesDifference;
        }
    }
    // newCadastro(){
    //   this.router.navigate(["/cadastro-acesso"]);
    // }
    login() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            yield this.presentLoading();
            try {
                yield this.authService.login(this.userLogin);
                this.router.navigate(["/home"]);
            }
            catch (error) {
                let message;
                switch (error.code) {
                    case 'auth/user-not-found':
                        message = 'Usuário ou Senha Inválido';
                        break;
                }
                this.presentToast(message);
            }
            finally {
                this.loading.dismiss();
            }
        });
    }
    register() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.presentLoading();
            try {
                yield this.authService.register(this.userRegister);
            }
            catch (error) {
                // let message: string;
                // switch (error.code) {
                //   case 'auth/email-already-in-use':
                //     message = 'E-mail em uso';
                //     break;
                //   case 'auth/invalid-email':
                //     message = 'E-mail invalido';
                //     break;
                // }
                this.presentToast(error.message);
            }
            finally {
                this.loading.dismiss();
            }
        });
    }
    presentLoading() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.loading = yield this.loadingCtrl.create({ message: 'Aguarde...' });
            return this.loading.present();
        });
    }
    presentToast(message) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const toast = yield this.toastCtrl.create({ message, duration: 2000 });
            toast.present();
        });
    }
};
LoginPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_6__["AuthService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["LoadingController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ToastController"] }
];
LoginPage.propDecorators = {
    slides: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"], args: [_ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonSlides"],] }]
};
LoginPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-login',
        template: _raw_loader_login_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_login_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], LoginPage);



/***/ }),

/***/ "lGQG":
/*!******************************************!*\
  !*** ./src/app/services/auth.service.ts ***!
  \******************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/fire/auth */ "UbJi");



let AuthService = class AuthService {
    constructor(afa) {
        this.afa = afa;
    }
    login(user) {
        return this.afa.signInWithEmailAndPassword(user.email, user.password);
    }
    register(user) {
        return this.afa.createUserWithEmailAndPassword(user.email, user.password);
    }
    logout() {
    }
    getAuth() {
    }
};
AuthService.ctorParameters = () => [
    { type: _angular_fire_auth__WEBPACK_IMPORTED_MODULE_2__["AngularFireAuth"] }
];
AuthService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], AuthService);



/***/ })

}]);
//# sourceMappingURL=pages-login-login-module.js.map