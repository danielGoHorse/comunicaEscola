import { Component, OnInit } from '@angular/core';
import data from '../../../assets/cursos.json'

@Component({
  selector: 'app-cursos-livres',
  templateUrl: './cursos-livres.page.html',
  styleUrls: ['./cursos-livres.page.scss'],
})
export class CursosLivresPage implements OnInit {

  private cursos = data;
  tableStyle = 'bootstrap';


  constructor() {
    console.log(this.cursos)
  }

  ngOnInit() {
  }

  switchStyle() {

  }

  getRowClass(row) {

  }

  async open(row) {

  }

}
