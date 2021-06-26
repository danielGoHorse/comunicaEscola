(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["home-home-module"],{

/***/ "A3+G":
/*!*********************************************!*\
  !*** ./src/app/home/home-routing.module.ts ***!
  \*********************************************/
/*! exports provided: HomePageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePageRoutingModule", function() { return HomePageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _home_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./home.page */ "zpKS");




const routes = [
    {
        path: '',
        component: _home_page__WEBPACK_IMPORTED_MODULE_3__["HomePage"],
    }
];
let HomePageRoutingModule = class HomePageRoutingModule {
};
HomePageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], HomePageRoutingModule);



/***/ }),

/***/ "WcN3":
/*!***************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.page.html ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header [translucent]=\"true\">\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-menu-button autoHide=\"true\"></ion-menu-button>\n\n    </ion-buttons>\n\n    <ion-title>\n      <div style=\"display: flex;\">\n        <img src=\"../../assets/logo.png\" alt=\"\" style=\"width: 40px\">\n        <h6 class=\"h6-logo\">Comunica Escola</h6>\n      </div>\n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content [fullscreen]=\"true\">\n   <div class=\"container\">\n\n\n      <ion-row>\n        <ion-col size=\"4\">\n          <div class=\"img\">\n            <img src=\"../../../../assets/cab.png\" alt=\"Avatar\" class=\"avatar\">\n          </div>\n        </ion-col>\n        <ion-col size=\"8\" class=\"nome\">\n          <h3><b style=\"color: #075d72;\">Maria Eduarda</b></h3>\n        </ion-col>\n        <ion-col size=\"12\">\n          <h4 style=\"margin: 0px;\">Ficha Cadastral</h4>\n        </ion-col>\n\n      </ion-row>\n      <div class=\"row\" style=\"text-align: left;margin-top: 30px; margin-bottom: -30px;\">\n        <h6>Dados Acadêmicos</h6>\n        <hr style=\"width: 90%;\">\n      </div>\n\n\n      <div class=\"row\">\n        <div class=\"col-12 form-aluno\">\n          <label for=\"basic-url\">Escola</label>\n          <input type=\"text\" [(ngModel)]=\"aluna[0].mome\">\n          {{aluna.nome  | json}}\n        </div>\n        <div class=\"col-6 form-aluno\">\n          <label for=\"basic-url\">Série</label>\n        <input type=\"text\">\n        </div>\n        <div class=\"col-6 form-aluno\">\n          <label for=\"basic-url\">Período</label>\n        <input type=\"text\">\n        </div>\n      </div>\n      <div class=\"row\" style=\"text-align: left;margin-top: 30px; margin-bottom: -30px;\">\n        <h6>Dados da Criança</h6>\n        <hr style=\"width: 90%;\">\n      </div>\n      <div class=\"row\">\n        <div class=\"col-6 form-aluno\">\n          <label for=\"basic-url\">Nascimento</label>\n          <input type=\"text\">\n        </div>\n        <div class=\"col-6 form-aluno\">\n          <label for=\"basic-url\">Gênero</label>\n        <input type=\"text\">\n        </div>\n      </div>\n      <div class=\"row\">\n        <div class=\"col-6 form-aluno\">\n          <label for=\"basic-url\">Religião</label>\n          <input type=\"text\">\n        </div>\n        <div class=\"col-6 form-aluno\">\n          <label for=\"basic-url\">Documento</label>\n        <input type=\"text\">\n        </div>\n      </div>\n      <div class=\"row\">\n        <div class=\"col-6 form-aluno\">\n          <label for=\"basic-url\">Possui Alergia</label>\n          <input type=\"text\">\n        </div>\n        <div class=\"col-6 form-aluno\">\n          <label for=\"basic-url\">Possui Deficiência</label>\n        <input type=\"text\">\n        </div>\n      </div>\n      <div class=\"row\">\n        <div class=\"col-12 form-aluno\">\n          <label for=\"basic-url\">Responsável Legal</label>\n          <input type=\"text\">\n        </div>\n        <div class=\"col-6 form-aluno\">\n          <label for=\"basic-url\">Telefone Fixo</label>\n        <input type=\"text\">\n        </div>\n        <div class=\"col-6 form-aluno\">\n          <label for=\"basic-url\">Celular</label>\n        <input type=\"text\">\n        </div>\n      </div>\n      <div class=\"row\">\n        <div class=\"col-12 form-aluno\">\n          <label for=\"basic-url\">Em caso de emergência</label>\n          <input type=\"text\">\n        </div>\n        <div class=\"col-6 form-aluno\">\n          <label for=\"basic-url\">Telefone Fixo</label>\n        <input type=\"text\">\n        </div>\n        <div class=\"col-6 form-aluno\">\n          <label for=\"basic-url\">Celular</label>\n        <input type=\"text\">\n        </div>\n      </div>\n      <div class=\"row\">\n        <div class=\"col-6 form-aluno\">\n          <label for=\"basic-url\">Possui Convênio</label>\n          <input type=\"text\">\n        </div>\n        <div class=\"col-6 form-aluno\">\n          <label for=\"basic-url\">Tipo Sanguinio</label>\n        <input type=\"text\">\n        </div>\n      </div>\n      <div class=\"row\" style=\"text-align: left;margin-top: 30px; margin-bottom: -30px;\">\n        <h6>Endereço</h6>\n        <hr style=\"width: 90%;\">\n      </div>\n      <div class=\"row\">\n        <div class=\"col-12 form-aluno\">\n          <label for=\"basic-url\">Logradouro</label>\n          <input type=\"text\">\n        </div>\n        <div class=\"col-6 form-aluno\">\n          <label for=\"basic-url\">Numero</label>\n        <input type=\"text\">\n        </div>\n        <div class=\"col-6 form-aluno\">\n          <label for=\"basic-url\">Complemento</label>\n          <input type=\"text\">\n        </div>\n      </div>\n      <div class=\"row\">\n        <div class=\"col-6 form-aluno\">\n          <label for=\"basic-url\">Bairro</label>\n          <input type=\"text\">\n        </div>\n        <div class=\"col-6 form-aluno\">\n          <label for=\"basic-url\">CEP</label>\n        <input type=\"text\">\n        </div>\n      </div>\n      <div class=\"row\">\n        <div class=\"col-6 form-aluno\">\n          <label for=\"basic-url\">Cidade</label>\n          <input type=\"text\">\n        </div>\n        <div class=\"col-6 form-aluno\">\n          <label for=\"basic-url\">Estado</label>\n        <input type=\"text\">\n        </div>\n      </div>\n\n      <ion-row class=\"ion-justify-content-center\" style=\"margin-top: 40px; margin-bottom: 30px;\">\n        <ion-button class=\"btn-success\">Editar Dados</ion-button>\n      </ion-row>\n\n\n\n\n\n  </div>\n</ion-content>\n");

/***/ }),

/***/ "ZhgC":
/*!*******************************!*\
  !*** ./src/assets/aluna.json ***!
  \*******************************/
/*! exports provided: 0, default */
/***/ (function(module) {

module.exports = JSON.parse("[{\"nome\":\"Ballet\",\"rg\":\"\",\"cpf\":\"\",\"dataNascimento\":\"\",\"idade\":\"Segunda-Feira\",\"responsavelLegal\":\"\",\"telefone\":\"\",\"religiao\":\"\",\"emergenciaNome\":\"\",\"emergenciaTelefone\":\"\",\"possuiConvenio\":\"\",\"nomeConvenio\":\"\",\"alergica\":\"\",\"nomeAlergia\":\"\",\"deficiencia\":\"\",\"nomeDeficiencia\":\"\",\"tipoSanguinio\":\"\",\"genero\":\"13h\",\"escola\":\"14h\",\"serie\":\"14h\",\"turma\":\"14h\",\"periodo\":\"14h\",\"tipoTransporte\":[{\"tipo\":\"14h\",\"responsavel\":\"14h\",\"tel\":\"14h\"}],\"cursos\":[{\"cursoId\":\"14h\",\"cursoNome\":\"14h\",\"diaSemana\":\"14h\",\"horario\":\"14h\"},{\"cursoId\":\"14h\",\"cursoNome\":\"14h\",\"diaSemana\":\"14h\",\"horario\":\"14h\"}]}]");

/***/ }),

/***/ "ct+p":
/*!*************************************!*\
  !*** ./src/app/home/home.module.ts ***!
  \*************************************/
/*! exports provided: HomePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePageModule", function() { return HomePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _home_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./home.page */ "zpKS");
/* harmony import */ var _home_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./home-routing.module */ "A3+G");







let HomePageModule = class HomePageModule {
};
HomePageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"],
            _home_routing_module__WEBPACK_IMPORTED_MODULE_6__["HomePageRoutingModule"]
        ],
        declarations: [_home_page__WEBPACK_IMPORTED_MODULE_5__["HomePage"]]
    })
], HomePageModule);



/***/ }),

/***/ "f6od":
/*!*************************************!*\
  !*** ./src/app/home/home.page.scss ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".container {\n  text-align: center;\n  padding: 0px 20px 0px 20px;\n  width: 95%;\n  border: 2px solid #046085;\n  border-radius: 10px;\n  background-color: rgba(209, 207, 142, 0.28);\n}\n\n.avatar {\n  vertical-align: middle;\n  width: 70px;\n  height: 70px;\n  border: 1px solid #8c8c8c;\n  border-radius: 50%;\n}\n\n.perfil-form {\n  display: grid;\n  width: 90%;\n  margin-top: 25px;\n}\n\n.perfil-form label {\n  margin-bottom: 5px;\n  font-size: 0.8rem;\n  text-align: left;\n}\n\n.perfil-form input {\n  border-radius: 7px;\n  height: 30px;\n  border: none;\n  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;\n  padding-left: 10px;\n}\n\n.btn-custon {\n  width: 90%;\n  border-radius: 12px;\n}\n\n.btn-success {\n  --background: #2dd36f !important;\n}\n\n.nome {\n  padding-top: 8%;\n}\n\n.col-6 {\n  padding: 0;\n  margin: 0;\n}\n\n.col-12 {\n  padding: 0;\n  margin: 0;\n}\n\n.col-12 input {\n  width: 95% !important;\n}\n\n.form-aluno {\n  text-align: left;\n  margin-top: 30px;\n}\n\n.form-aluno input {\n  width: 90%;\n  border-radius: 7px;\n  height: 30px;\n  border: none;\n  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;\n  padding-left: 10px;\n}\n\n.btn-success {\n  --background: #2dd36f !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2hvbWUucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usa0JBQUE7RUFDRCwwQkFBQTtFQUVELFVBQUE7RUFDQyx5QkFBQTtFQUNBLG1CQUFBO0VBQ0EsMkNBQUE7QUFBRDs7QUFNQTtFQUNFLHNCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSx5QkFBQTtFQUNBLGtCQUFBO0FBSEY7O0FBTUE7RUFDRSxhQUFBO0VBQ0EsVUFBQTtFQUNBLGdCQUFBO0FBSEY7O0FBTUE7RUFDRSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7QUFIRjs7QUFNQTtFQUNFLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFFQSw0Q0FBQTtFQUE2QyxrQkFBQTtBQUgvQzs7QUFNQTtFQUNBLFVBQUE7RUFDQSxtQkFBQTtBQUhBOztBQU1BO0VBQ0UsZ0NBQUE7QUFIRjs7QUFNQTtFQUNFLGVBQUE7QUFIRjs7QUFNQTtFQUVFLFVBQUE7RUFDQSxTQUFBO0FBSkY7O0FBT0E7RUFJRSxVQUFBO0VBQ0EsU0FBQTtBQVBGOztBQUdBO0VBQ0UscUJBQUE7QUFERjs7QUFPQTtFQUNFLGdCQUFBO0VBQ0EsZ0JBQUE7QUFKRjs7QUFRRTtFQUNFLFVBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0EsNENBQUE7RUFBNkMsa0JBQUE7QUFMakQ7O0FBVUE7RUFDRSxnQ0FBQTtBQVBGIiwiZmlsZSI6ImhvbWUucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRhaW5lciB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiBwYWRkaW5nOiAwcHggMjBweCAwcHggMjBweDtcbi8vICBtYXJnaW46IDEwcHggMTBweCAwcHggMTBweDtcbndpZHRoOiA5NSU7XG4gYm9yZGVyOiAycHggc29saWQgIzA0NjA4NTtcbiBib3JkZXItcmFkaXVzOiAxMHB4O1xuIGJhY2tncm91bmQtY29sb3I6IHJnYigyMDkgMjA3IDE0MiAvIDI4JSk7XG59XG5cblxuXG5cbi5hdmF0YXIge1xuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICB3aWR0aDogNzBweDtcbiAgaGVpZ2h0OiA3MHB4O1xuICBib3JkZXI6IDFweCBzb2xpZCAjOGM4YzhjO1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG59XG5cbi5wZXJmaWwtZm9ybSB7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIHdpZHRoOiA5MCU7XG4gIG1hcmdpbi10b3A6IDI1cHg7XG59XG5cbi5wZXJmaWwtZm9ybSBsYWJlbCB7XG4gIG1hcmdpbi1ib3R0b206IDVweDtcbiAgZm9udC1zaXplOiAwLjhyZW07XG4gIHRleHQtYWxpZ246IGxlZnQ7XG59XG5cbi5wZXJmaWwtZm9ybSBpbnB1dCB7XG4gIGJvcmRlci1yYWRpdXM6IDdweDtcbiAgaGVpZ2h0OiAzMHB4O1xuICBib3JkZXI6IG5vbmU7XG4gIC8vIHdpZHRoOiAxMDAlO1xuICBib3gtc2hhZG93OiByZ2JhKDAsIDAsIDAsIDAuMzUpIDBweCA1cHggMTVweDtwYWRkaW5nLWxlZnQ6IDEwcHg7XG59XG5cbi5idG4tY3VzdG9ue1xud2lkdGg6IDkwJTtcbmJvcmRlci1yYWRpdXM6IDEycHg7XG59XG5cbi5idG4tc3VjY2Vzc3tcbiAgLS1iYWNrZ3JvdW5kOiAjMmRkMzZmICFpbXBvcnRhbnQ7XG59XG5cbi5ub21le1xuICBwYWRkaW5nLXRvcDogOCU7XG59XG5cbi5jb2wtNntcblxuICBwYWRkaW5nOiAwO1xuICBtYXJnaW46IDA7XG59XG5cbi5jb2wtMTJ7XG5pbnB1dHtcbiAgd2lkdGg6IDk1JSAhaW1wb3J0YW50O1xufVxuICBwYWRkaW5nOiAwO1xuICBtYXJnaW46IDA7XG59XG5cbi5mb3JtLWFsdW5ve1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xuICBtYXJnaW4tdG9wOiAzMHB4O1xuICBsYWJlbHtcblxuICB9XG4gIGlucHV0e1xuICAgIHdpZHRoOiA5MCU7XG4gICAgYm9yZGVyLXJhZGl1czogN3B4O1xuICAgIGhlaWdodDogMzBweDtcbiAgICBib3JkZXI6IG5vbmU7XG4gICAgYm94LXNoYWRvdzogcmdiYSgwLCAwLCAwLCAwLjM1KSAwcHggNXB4IDE1cHg7cGFkZGluZy1sZWZ0OiAxMHB4O1xuICB9XG5cbn1cblxuLmJ0bi1zdWNjZXNze1xuICAtLWJhY2tncm91bmQ6ICMyZGQzNmYgIWltcG9ydGFudDtcbn1cblxuXG5cblxuIl19 */");

/***/ }),

/***/ "zpKS":
/*!***********************************!*\
  !*** ./src/app/home/home.page.ts ***!
  \***********************************/
/*! exports provided: HomePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePage", function() { return HomePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_home_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./home.page.html */ "WcN3");
/* harmony import */ var _home_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./home.page.scss */ "f6od");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _assets_aluna_json__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../assets/aluna.json */ "ZhgC");
var _assets_aluna_json__WEBPACK_IMPORTED_MODULE_5___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../../assets/aluna.json */ "ZhgC", 1);






let HomePage = class HomePage {
    constructor(menu) {
        this.menu = menu;
        this.aluna = _assets_aluna_json__WEBPACK_IMPORTED_MODULE_5__;
    }
    ngOnInit() {
        // this.aluna = dataAluno;
        console.log(this.aluna);
    }
    openFirst() {
        this.menu.enable(true, 'first');
        this.menu.open('first');
    }
    openEnd() {
        this.menu.open('end');
    }
    openCustom() {
        this.menu.enable(true, 'custom');
        this.menu.open('custom');
    }
};
HomePage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["MenuController"] }
];
HomePage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-home',
        template: _raw_loader_home_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_home_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], HomePage);



/***/ })

}]);
//# sourceMappingURL=home-home-module.js.map