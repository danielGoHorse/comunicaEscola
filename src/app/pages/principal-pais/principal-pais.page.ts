import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import dataAluno from '../../../assets/aluna.json';


@Component({
  selector: 'app-principal-pais',
  templateUrl: './principal-pais.page.html',
  styleUrls: ['./principal-pais.page.scss'],
})
export class PrincipalPaisPage implements OnInit {

  private aluna = dataAluno;

  constructor(private menu: MenuController) {}

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
}
