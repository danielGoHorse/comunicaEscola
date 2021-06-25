(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-transporte-transporte-module"],{

/***/ "EN79":
/*!*********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/transporte/transporte.page.html ***!
  \*********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header [translucent]=\"true\">\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-menu-button autoHide=\"false\"></ion-menu-button>\n\n    </ion-buttons>\n\n    <ion-title>\n      <div style=\"display: flex;\">\n        <img src=\"../../assets/_.png\" alt=\"\" style=\"width: 40px;margin-top: 7px;\">\n        <h6 class=\"h6-logo\">Comunica Escola</h6>\n      </div>\n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-row>\n    <ion-title>\n      <div style=\"text-align: center;\">\n\n        <h4 class=\"title-page\">TRANSPORTE</h4>\n      </div>\n    </ion-title>\n  </ion-row>\n\n  <ion-grid>\n    <ion-row>\n      <ion-col>\n        <ion-segment color=\"success\" (ionChange)=\"segmentChanged($event)\">\n          <ion-segment-button value=\"contato\" >\n            <ion-label>Contato</ion-label>\n          </ion-segment-button>\n          <ion-segment-button value=\"tipo\">\n            <ion-label style=\"margin: 0px;\">Tipo</ion-label>\n            <ion-label style=\"margin: 0px;\">de Transporte</ion-label>\n          </ion-segment-button>\n          <ion-segment-button value=\"solicitacao\">\n            <ion-label style=\"margin: 0px;\">Saída</ion-label>\n            <ion-label style=\"margin: 0px;\">Antecipada</ion-label>\n          </ion-segment-button>\n        </ion-segment>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n\n  <ion-grid  class=\"text-box\" *ngIf=\"contatoForm\">\n    <ion-row class=\"ion-justify-content-center\">\n      <div >\n        <h4 class=\"title-grey\">Informe quem traz e <br> busca seu filho</h4>\n      </div>\n    </ion-row>\n    <ion-row>\n      <ion-checkbox color=\"primary\"></ion-checkbox>\n      <ion-label style=\"margin: 3px 0px 0px 5px; font-size: 0.9rem !important;\">Familia</ion-label>\n\n    </ion-row>\n    <ion-row class=\"ion-justify-content-center\" >\n      <div class=\"perfil-form\">\n        <label for=\"basic-url\">Nome</label>\n        <input type=\"text\" id=\"basic-url\" maxlength=\"6\" aria-describedby=\"basic-addon3\" >\n      </div>\n    </ion-row>\n    <ion-row class=\"ion-justify-content-center\">\n      <div class=\"perfil-form\">\n        <label for=\"\">Tel</label>\n        <input type=\"email\" id=\"basic-url\"   aria-describedby=\"basic-addon3\" >\n\n      </div>\n    </ion-row>\n    <hr>\n    <ion-row>\n      <ion-checkbox color=\"primary\"></ion-checkbox>\n      <ion-label style=\"margin: 3px 0px 0px 5px; font-size: 0.9rem !important;\">Transporte Particular</ion-label>\n    </ion-row>\n    <ion-row class=\"ion-justify-content-center\" >\n      <div class=\"perfil-form\">\n        <label for=\"basic-url\">Nome</label>\n        <input type=\"text\" id=\"basic-url\" maxlength=\"6\" aria-describedby=\"basic-addon3\" >\n      </div>\n    </ion-row>\n    <ion-row class=\"ion-justify-content-center\">\n      <div class=\"perfil-form\">\n        <label for=\"\">Tel</label>\n        <input type=\"email\" id=\"basic-url\"   aria-describedby=\"basic-addon3\" >\n\n      </div>\n    </ion-row>\n    <hr>\n    <ion-row>\n      <ion-checkbox color=\"primary\"></ion-checkbox>\n      <ion-label style=\"margin: 3px 0px 0px 5px; font-size: 0.9rem !important;\">Transporte Público</ion-label>\n    </ion-row>\n    <ion-row style=\"margin-top: 10px; margin-bottom: 10px;\" class=\"ion-justify-content-center\">\n      <ion-button class=\"btn-success\">Salvar</ion-button>\n\n    </ion-row>\n  </ion-grid>\n  <ion-grid  class=\"text-box\" *ngIf=\"tipoForm\">\n    <ion-row class=\"ion-justify-content-center\">\n      <div >\n        <h4 class=\"title-grey\">Selecione como seu <br>filho chega e vai<br> embora da escola</h4>\n      </div>\n    </ion-row>\n    <ion-row style=\" margin-bottom: 10px;\">\n      <ion-checkbox color=\"primary\"></ion-checkbox>\n      <ion-label style=\"margin: 3px 0px 0px 5px; font-size: 0.9rem !important;\">A pé sozinho</ion-label>\n\n    </ion-row>\n    <ion-row style=\" margin-bottom: 10px;\">\n      <ion-checkbox color=\"primary\"></ion-checkbox>\n      <ion-label style=\"margin: 3px 0px 0px 5px; font-size: 0.9rem !important;\">A pé acompanhado</ion-label>\n\n    </ion-row>\n    <ion-row style=\" margin-bottom: 10px;\">\n      <ion-checkbox color=\"primary\"></ion-checkbox>\n      <ion-label style=\"margin: 3px 0px 0px 5px; font-size: 0.9rem !important;\">Carro</ion-label>\n\n    </ion-row>\n    <ion-row style=\" margin-bottom: 10px;\">\n      <ion-checkbox color=\"primary\"></ion-checkbox>\n      <ion-label style=\"margin: 3px 0px 0px 5px; font-size: 0.9rem !important;\">Onibus escolar</ion-label>\n\n    </ion-row>\n    <ion-row style=\" margin-bottom: 10px;\">\n      <ion-checkbox color=\"primary\"></ion-checkbox>\n      <ion-label style=\"margin: 3px 0px 0px 5px; font-size: 0.9rem !important;\">Perua/van</ion-label>\n\n    </ion-row>\n    <ion-row style=\"margin-top: 10px; margin-bottom: 10px;\" class=\"ion-justify-content-center\">\n      <ion-button class=\"btn-success\">Salvar</ion-button>\n\n    </ion-row>\n  </ion-grid>\n\n  <ion-grid  class=\"text-box\" *ngIf=\"solicitaForm\">\n    <ion-row class=\"ion-justify-content-center\">\n      <div style=\"text-align: center;\" >\n        <h4 class=\"title-grey\">Seu filho vai sair mais cedo? </h4>\n        <h4 class=\"title-grey\">Avise-nos</h4>\n      </div>\n    </ion-row>\n    <ion-row class=\"ion-justify-content-center\" >\n      <div class=\"perfil-form\">\n        <ion-label>Data</ion-label>\n        <ion-datetime displayFormat=\"MM DD YY\" placeholder=\"Selecione a data\"></ion-datetime>\n\n      </div>\n    </ion-row>\n    <ion-row class=\"ion-justify-content-center\">\n      <div class=\"perfil-form\">\n        <label for=\"\">Horario</label>\n        <input type=\"email\" id=\"basic-url\"   aria-describedby=\"basic-addon3\" >\n\n      </div>\n    </ion-row>\n    <ion-row class=\"ion-justify-content-center\">\n      <div class=\"perfil-form\">\n        <label for=\"\">Motivo</label>\n        <input type=\"email\" id=\"basic-url\"   aria-describedby=\"basic-addon3\" >\n\n      </div>\n    </ion-row>\n    <ion-row style=\"margin-top: 10px; margin-bottom: 10px;\" class=\"ion-justify-content-center\">\n      <ion-button class=\"btn-success\">Enviar</ion-button>\n\n    </ion-row>\n  </ion-grid>\n  <ion-grid  class=\"text-box\" *ngIf=\"default\">\n    <div class=\"container\">\n\n\n      <ion-row>\n\n        <ion-col size=\"12\">\n          <h4 style=\"margin: 0px;\">Dados Cadastrados</h4>\n        </ion-col>\n\n      </ion-row>\n      <div class=\"row\" style=\"text-align: left;margin-top: 30px; margin-bottom: -30px;\">\n        <h6>Tipo do Trânsporte</h6>\n        <hr style=\"width: 90%;\">\n      </div>\n\n\n      <div class=\"row\" style=\"padding-bottom: 20px;\">\n        <div class=\"col-12 form-aluno\">\n          <label for=\"basic-url\">Escola</label>\n          <input type=\"text\">\n        </div>\n        <div class=\"col-6 form-aluno\">\n          <label for=\"basic-url\">Série</label>\n        <input type=\"text\">\n        </div>\n        <div class=\"col-6 form-aluno\">\n          <label for=\"basic-url\">Período</label>\n        <input type=\"text\">\n        </div>\n      </div>\n    </div>\n\n  </ion-grid>\n\n\n\n\n\n</ion-content>\n<ion-footer>\n  <ion-toolbar>\n    <ion-grid style=\"text-align: center;\">\n      <ion-col><a class=\"social\" href=\"https://www.youtube.com/\" target=\"_blank\"><ion-icon style=\"font-size: 2rem; padding: 0px 30px 0px 30px;\" name=\"logo-youtube\"></ion-icon></a></ion-col>\n      <ion-col><a class=\"social\" href=\"https://www.facebook.com/\" target=\"_blank\">\n        <ion-icon style=\"font-size: 2rem; padding: 0px 30px 0px 30px;\" name=\"logo-facebook\"></ion-icon>\n      </a></ion-col>\n      <ion-col><a class=\"social\" href=\"https://www.google.com/\" target=\"_blank\">\n        <ion-icon style=\"font-size: 2rem; padding: 0px 30px 0px 30px;\" name=\"logo-google\"></ion-icon>\n      </a></ion-col>\n    </ion-grid>\n    <ion-grid style=\"text-align: center; margin-top: -25px;\">\n      <h6 >Acesso rápido</h6>\n    </ion-grid>\n  </ion-toolbar>\n</ion-footer>\n");

/***/ }),

/***/ "OOVO":
/*!*******************************************************!*\
  !*** ./src/app/pages/transporte/transporte.module.ts ***!
  \*******************************************************/
/*! exports provided: TransportePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TransportePageModule", function() { return TransportePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _transporte_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./transporte-routing.module */ "kMYP");
/* harmony import */ var _transporte_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./transporte.page */ "X/h2");







let TransportePageModule = class TransportePageModule {
};
TransportePageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _transporte_routing_module__WEBPACK_IMPORTED_MODULE_5__["TransportePageRoutingModule"]
        ],
        declarations: [_transporte_page__WEBPACK_IMPORTED_MODULE_6__["TransportePage"]]
    })
], TransportePageModule);



/***/ }),

/***/ "X/h2":
/*!*****************************************************!*\
  !*** ./src/app/pages/transporte/transporte.page.ts ***!
  \*****************************************************/
/*! exports provided: TransportePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TransportePage", function() { return TransportePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_transporte_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./transporte.page.html */ "EN79");
/* harmony import */ var _transporte_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./transporte.page.scss */ "wO4g");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");




let TransportePage = class TransportePage {
    constructor() { }
    ngOnInit() {
    }
    ionViewWillEnter() {
        this.default = true;
        this.contatoForm = false;
        this.tipoForm = false;
        this.solicitaForm = false;
    }
    segmentChanged(ev) {
        let param = ev.detail.value;
        this.contatoForm = false;
        this.tipoForm = false;
        this.solicitaForm = false;
        this.default = true;
        if (param == 'contato') {
            this.contatoForm = true;
            this.default = false;
        }
        if (param == 'tipo') {
            this.tipoForm = true;
            this.default = false;
        }
        if (param == 'solicitacao') {
            this.solicitaForm = true;
            this.default = false;
        }
    }
};
TransportePage.ctorParameters = () => [];
TransportePage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-transporte',
        template: _raw_loader_transporte_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_transporte_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], TransportePage);



/***/ }),

/***/ "kMYP":
/*!***************************************************************!*\
  !*** ./src/app/pages/transporte/transporte-routing.module.ts ***!
  \***************************************************************/
/*! exports provided: TransportePageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TransportePageRoutingModule", function() { return TransportePageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _transporte_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./transporte.page */ "X/h2");




const routes = [
    {
        path: '',
        component: _transporte_page__WEBPACK_IMPORTED_MODULE_3__["TransportePage"]
    }
];
let TransportePageRoutingModule = class TransportePageRoutingModule {
};
TransportePageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], TransportePageRoutingModule);



/***/ }),

/***/ "wO4g":
/*!*******************************************************!*\
  !*** ./src/app/pages/transporte/transporte.page.scss ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-label {\n  font-size: 0.6rem !important;\n}\n\n.ion-color-success {\n  --ion-color-base: #046085 !important;\n}\n\nion-segment-button {\n  background-color: #04618523;\n}\n\n.text-box {\n  padding: 0px 15px 0px 15px;\n  margin: 30px 30px 0px 30px;\n  border: 2px solid #046085;\n  border-radius: 10px;\n  background-color: rgba(209, 207, 142, 0.28);\n}\n\n.perfil-form {\n  display: grid;\n  width: 90%;\n  margin-top: 25px;\n}\n\n.perfil-form label {\n  margin-bottom: 5px;\n  font-size: 0.8rem;\n}\n\n.perfil-form input {\n  border-radius: 7px;\n  height: 40px;\n  border: none;\n  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;\n  padding-left: 10px;\n}\n\n.btn-custon {\n  width: 90%;\n  border-radius: 12px;\n}\n\n.btn-success {\n  --background: #2dd36f !important;\n}\n\n.title-grey {\n  font-size: 0.9rem;\n}\n\n.col-6 {\n  padding: 0;\n  margin: 0;\n}\n\n.col-12 {\n  padding: 0;\n  margin: 0;\n}\n\n.col-12 input {\n  width: 95% !important;\n}\n\n.form-aluno {\n  text-align: left;\n  margin-top: 30px;\n}\n\n.form-aluno input {\n  width: 90%;\n  border-radius: 7px;\n  height: 30px;\n  border: none;\n  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;\n  padding-left: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3RyYW5zcG9ydGUucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsNEJBQUE7QUFDRjs7QUFFQTtFQUNFLG9DQUFBO0FBQ0Y7O0FBRUE7RUFDRSwyQkFBQTtBQUNGOztBQUVBO0VBQ0UsMEJBQUE7RUFDQSwwQkFBQTtFQUNBLHlCQUFBO0VBQ0EsbUJBQUE7RUFDQSwyQ0FBQTtBQUNGOztBQUNBO0VBQ0UsYUFBQTtFQUNBLFVBQUE7RUFDQSxnQkFBQTtBQUVGOztBQUNBO0VBQ0Usa0JBQUE7RUFDQSxpQkFBQTtBQUVGOztBQUNBO0VBQ0Usa0JBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLDRDQUFBO0VBQTZDLGtCQUFBO0FBRy9DOztBQUFBO0VBQ0EsVUFBQTtFQUNBLG1CQUFBO0FBR0E7O0FBQUE7RUFDRSxnQ0FBQTtBQUdGOztBQUFBO0VBQ0EsaUJBQUE7QUFHQTs7QUFEQTtFQUVFLFVBQUE7RUFDQSxTQUFBO0FBR0Y7O0FBQUE7RUFJRSxVQUFBO0VBQ0EsU0FBQTtBQUFGOztBQUpBO0VBQ0UscUJBQUE7QUFNRjs7QUFBQTtFQUNFLGdCQUFBO0VBQ0EsZ0JBQUE7QUFHRjs7QUFDRTtFQUNFLFVBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0EsNENBQUE7RUFBNkMsa0JBQUE7QUFFakQiLCJmaWxlIjoidHJhbnNwb3J0ZS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tbGFiZWx7XG4gIGZvbnQtc2l6ZTogMC42cmVtICFpbXBvcnRhbnQ7XG59XG5cbi5pb24tY29sb3Itc3VjY2Vzc3tcbiAgLS1pb24tY29sb3ItYmFzZTogIzA0NjA4NSAhaW1wb3J0YW50O1xufVxuXG5pb24tc2VnbWVudC1idXR0b257XG4gIGJhY2tncm91bmQtY29sb3I6ICMwNDYxODUyMztcbn1cblxuLnRleHQtYm94e1xuICBwYWRkaW5nOiAwcHggMTVweCAwcHggMTVweDtcbiAgbWFyZ2luOiAzMHB4IDMwcHggMHB4IDMwcHg7XG4gIGJvcmRlcjogMnB4IHNvbGlkICMwNDYwODU7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyMDkgMjA3IDE0MiAvIDI4JSk7XG59XG4ucGVyZmlsLWZvcm0ge1xuICBkaXNwbGF5OiBncmlkO1xuICB3aWR0aDogOTAlO1xuICBtYXJnaW4tdG9wOiAyNXB4O1xufVxuXG4ucGVyZmlsLWZvcm0gbGFiZWwge1xuICBtYXJnaW4tYm90dG9tOiA1cHg7XG4gIGZvbnQtc2l6ZTogMC44cmVtO1xufVxuXG4ucGVyZmlsLWZvcm0gaW5wdXQge1xuICBib3JkZXItcmFkaXVzOiA3cHg7XG4gIGhlaWdodDogNDBweDtcbiAgYm9yZGVyOiBub25lO1xuICBib3gtc2hhZG93OiByZ2JhKDAsIDAsIDAsIDAuMzUpIDBweCA1cHggMTVweDtwYWRkaW5nLWxlZnQ6IDEwcHg7XG59XG5cbi5idG4tY3VzdG9ue1xud2lkdGg6IDkwJTtcbmJvcmRlci1yYWRpdXM6IDEycHg7XG59XG5cbi5idG4tc3VjY2Vzc3tcbiAgLS1iYWNrZ3JvdW5kOiAjMmRkMzZmICFpbXBvcnRhbnQ7XG59XG5cbi50aXRsZS1ncmV5e1xuZm9udC1zaXplOiAwLjlyZW07XG59XG4uY29sLTZ7XG5cbiAgcGFkZGluZzogMDtcbiAgbWFyZ2luOiAwO1xufVxuXG4uY29sLTEye1xuaW5wdXR7XG4gIHdpZHRoOiA5NSUgIWltcG9ydGFudDtcbn1cbiAgcGFkZGluZzogMDtcbiAgbWFyZ2luOiAwO1xufVxuXG4uZm9ybS1hbHVub3tcbiAgdGV4dC1hbGlnbjogbGVmdDtcbiAgbWFyZ2luLXRvcDogMzBweDtcbiAgbGFiZWx7XG5cbiAgfVxuICBpbnB1dHtcbiAgICB3aWR0aDogOTAlO1xuICAgIGJvcmRlci1yYWRpdXM6IDdweDtcbiAgICBoZWlnaHQ6IDMwcHg7XG4gICAgYm9yZGVyOiBub25lO1xuICAgIGJveC1zaGFkb3c6IHJnYmEoMCwgMCwgMCwgMC4zNSkgMHB4IDVweCAxNXB4O3BhZGRpbmctbGVmdDogMTBweDtcbiAgfVxuXG59XG4iXX0= */");

/***/ })

}]);
//# sourceMappingURL=pages-transporte-transporte-module.js.map