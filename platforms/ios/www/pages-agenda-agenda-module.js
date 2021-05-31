(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-agenda-agenda-module"],{

/***/ "2foR":
/*!********************************!*\
  !*** ./src/app/model/aluno.ts ***!
  \********************************/
/*! exports provided: Aluno */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Aluno", function() { return Aluno; });
class Aluno {
}


/***/ }),

/***/ "8GQC":
/*!*********************************************!*\
  !*** ./src/app/pages/agenda/agenda.page.ts ***!
  \*********************************************/
/*! exports provided: AgendaPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AgendaPage", function() { return AgendaPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_agenda_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./agenda.page.html */ "mwhV");
/* harmony import */ var _agenda_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./agenda.page.scss */ "uO3g");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var src_app_model_aluno__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/model/aluno */ "2foR");






let AgendaPage = class AgendaPage {
    constructor(router) {
        this.router = router;
    }
    ngOnInit() {
        this.aluno = new src_app_model_aluno__WEBPACK_IMPORTED_MODULE_5__["Aluno"];
    }
    segmentChanged(ev) {
        let param = ev.detail.value;
        this.envioRecado = false;
        if (param == 'gerais') {
            this.aluno.mensagem = "A partir de segunda-feira, dia 07/06 a aluna Maria Eduarda Silva do 5A irá retornar as aulas presenciais. Lembre-se de colocar uma máscara extra na mochila.";
        }
        if (param == 'ocorrencia') {
            this.aluno.mensagem = "Informamos que hoje, 15/06 a aluna Maria Eduarda praticou bullyng com a colega Silvia Costa. Pedimos que converse com sua filha. Dica: assistam juntos o filme 'O Mínimo para Viver', pode ajudar na conversa";
        }
        if (param == 'envio') {
            this.aluno.mensagem = null;
            this.envioRecado = true;
        }
    }
    cancelar() {
        this.router.navigate(["/agenda"]);
    }
};
AgendaPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }
];
AgendaPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-agenda',
        template: _raw_loader_agenda_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_agenda_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], AgendaPage);



/***/ }),

/***/ "Q2f5":
/*!*******************************************************!*\
  !*** ./src/app/pages/agenda/agenda-routing.module.ts ***!
  \*******************************************************/
/*! exports provided: AgendaPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AgendaPageRoutingModule", function() { return AgendaPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _agenda_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./agenda.page */ "8GQC");




const routes = [
    {
        path: '',
        component: _agenda_page__WEBPACK_IMPORTED_MODULE_3__["AgendaPage"]
    }
];
let AgendaPageRoutingModule = class AgendaPageRoutingModule {
};
AgendaPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], AgendaPageRoutingModule);



/***/ }),

/***/ "mwhV":
/*!*************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/agenda/agenda.page.html ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header [translucent]=\"true\">\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-menu-button autoHide=\"false\"></ion-menu-button>\n\n    </ion-buttons>\n\n    <ion-title>\n      <div style=\"display: flex;\">\n        <img src=\"../../assets/_.png\" alt=\"\" style=\"width: 40px;margin-top: 7px;\">\n        <h6 class=\"h6-logo\">Comunica Escola</h6>\n      </div>\n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-row>\n    <ion-title>\n      <div style=\"text-align: center;\">\n\n        <h4 class=\"title-page\">AGENDA</h4>\n      </div>\n    </ion-title>\n  </ion-row>\n  <ion-grid>\n    <ion-row>\n      <ion-col>\n        <ion-segment color=\"success\" (ionChange)=\"segmentChanged($event)\">\n          <ion-segment-button value=\"gerais\" >\n            <ion-label>Recados Gerais</ion-label>\n          </ion-segment-button>\n          <ion-segment-button value=\"ocorrencia\">\n            <ion-label>Ocorrências</ion-label>\n          </ion-segment-button>\n          <ion-segment-button value=\"envio\">\n            <ion-label>Enviar Recados</ion-label>\n          </ion-segment-button>\n        </ion-segment>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n  <ion-grid *ngIf=\"aluno.mensagem\" class=\"text-box\">\n    <ion-row>\n      <ion-text color=\"dark\">\n        <h5 >Olá</h5>\n        <h5>{{aluno.mensagem}}</h5>\n        <h5 >Atenciosamente a Professora</h5>\n      </ion-text>\n    </ion-row>\n  </ion-grid>\n  <ion-grid *ngIf=\"envioRecado\" class=\"text-box\" style=\"height: 50%;\">\n\n        <ion-textarea style=\"background-color: transparent;\" placeholder=\"Escreva aqui seu recado para a professora\"></ion-textarea>\n\n  </ion-grid>\n  <ion-grid *ngIf=\"envioRecado\" >\n    <ion-row class=\"ion-justify-content-center\">\n      <ion-button class=\"btn-success\">Enviar</ion-button>\n      <ion-button (click)=\"cancelar()\" color=\"danger\">Limpar</ion-button>\n    </ion-row>\n  </ion-grid>\n\n</ion-content>\n<ion-footer>\n  <ion-toolbar>\n    <ion-grid style=\"text-align: center;\">\n      <ion-col><a class=\"social\" href=\"https://www.youtube.com/\" target=\"_blank\"><ion-icon style=\"font-size: 2rem; padding: 0px 30px 0px 30px;\" name=\"logo-youtube\"></ion-icon></a></ion-col>\n      <ion-col><a class=\"social\" href=\"https://www.facebook.com/\" target=\"_blank\">\n        <ion-icon style=\"font-size: 2rem; padding: 0px 30px 0px 30px;\" name=\"logo-facebook\"></ion-icon>\n      </a></ion-col>\n      <ion-col><a class=\"social\" href=\"https://www.google.com/\" target=\"_blank\">\n        <ion-icon style=\"font-size: 2rem; padding: 0px 30px 0px 30px;\" name=\"logo-google\"></ion-icon>\n      </a></ion-col>\n    </ion-grid>\n    <ion-grid style=\"text-align: center; margin-top: -25px;\">\n      <h6 >Acesso rápido</h6>\n    </ion-grid>\n  </ion-toolbar>\n</ion-footer>\n");

/***/ }),

/***/ "uB5f":
/*!***********************************************!*\
  !*** ./src/app/pages/agenda/agenda.module.ts ***!
  \***********************************************/
/*! exports provided: AgendaPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AgendaPageModule", function() { return AgendaPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _agenda_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./agenda-routing.module */ "Q2f5");
/* harmony import */ var _agenda_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./agenda.page */ "8GQC");







let AgendaPageModule = class AgendaPageModule {
};
AgendaPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _agenda_routing_module__WEBPACK_IMPORTED_MODULE_5__["AgendaPageRoutingModule"]
        ],
        declarations: [_agenda_page__WEBPACK_IMPORTED_MODULE_6__["AgendaPage"]]
    })
], AgendaPageModule);



/***/ }),

/***/ "uO3g":
/*!***********************************************!*\
  !*** ./src/app/pages/agenda/agenda.page.scss ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-label {\n  font-size: 0.6rem !important;\n}\n\n.ion-color-success {\n  --ion-color-base: #046085 !important;\n}\n\nion-segment-button {\n  background-color: #04618523;\n}\n\n.text-box {\n  padding: 0px 15px 0px 15px;\n  margin: 30px 30px 0px 30px;\n  border: 2px solid #046085;\n  border-radius: 10px;\n  background-color: rgba(209, 207, 142, 0.28);\n}\n\n.btn-success {\n  --background: #2dd36f !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2FnZW5kYS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSw0QkFBQTtBQUNGOztBQUVBO0VBQ0Usb0NBQUE7QUFDRjs7QUFFQTtFQUNFLDJCQUFBO0FBQ0Y7O0FBRUE7RUFDRSwwQkFBQTtFQUNBLDBCQUFBO0VBQ0EseUJBQUE7RUFDQSxtQkFBQTtFQUNBLDJDQUFBO0FBQ0Y7O0FBRUE7RUFDRSxnQ0FBQTtBQUNGIiwiZmlsZSI6ImFnZW5kYS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tbGFiZWx7XG4gIGZvbnQtc2l6ZTogMC42cmVtICFpbXBvcnRhbnQ7XG59XG5cbi5pb24tY29sb3Itc3VjY2Vzc3tcbiAgLS1pb24tY29sb3ItYmFzZTogIzA0NjA4NSAhaW1wb3J0YW50O1xufVxuXG5pb24tc2VnbWVudC1idXR0b257XG4gIGJhY2tncm91bmQtY29sb3I6ICMwNDYxODUyMztcbn1cblxuLnRleHQtYm94e1xuICBwYWRkaW5nOiAwcHggMTVweCAwcHggMTVweDtcbiAgbWFyZ2luOiAzMHB4IDMwcHggMHB4IDMwcHg7XG4gIGJvcmRlcjogMnB4IHNvbGlkICMwNDYwODU7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyMDkgMjA3IDE0MiAvIDI4JSk7XG59XG5cbi5idG4tc3VjY2Vzc3tcbiAgLS1iYWNrZ3JvdW5kOiAjMmRkMzZmICFpbXBvcnRhbnQ7XG59XG4iXX0= */");

/***/ })

}]);
//# sourceMappingURL=pages-agenda-agenda-module.js.map