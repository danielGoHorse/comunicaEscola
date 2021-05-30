import { Component, OnInit } from '@angular/core';
import { ColumnMode } from '@swimlane/ngx-datatable';
import data from '../../../assets/disciplinas.json';

@Component({
  selector: 'app-boletim',
  templateUrl: './boletim.page.html',
  styleUrls: ['./boletim.page.scss'],
})
export class BoletimPage implements OnInit {

  private disciplinas = data;

  tableStyle = 'bootstrap';


  constructor() {
    console.log(this.disciplinas)
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
