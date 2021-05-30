import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-transporte',
  templateUrl: './transporte.page.html',
  styleUrls: ['./transporte.page.scss'],
})
export class TransportePage implements OnInit {

  contatoForm: boolean;
  tipoForm: boolean;
  solicitaForm: boolean;
  default: boolean;

  constructor() { }

  ngOnInit() {

  }

  ionViewWillEnter() {
    this.default = true;
    this.contatoForm = false;
    this.tipoForm = false;
    this.solicitaForm = false;
  }

  segmentChanged(ev: any) {
    let param = ev.detail.value
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

}
