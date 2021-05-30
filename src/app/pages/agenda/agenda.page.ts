import { Component, OnInit } from '@angular/core';
import { Aluno } from 'src/app/model/aluno';

@Component({
  selector: 'app-agenda',
  templateUrl: './agenda.page.html',
  styleUrls: ['./agenda.page.scss'],
})
export class AgendaPage implements OnInit {

  aluno: Aluno;



  constructor() { }

  ngOnInit() {
    this.aluno = new Aluno;
    this.aluno.mensagem = "A partir de segunda-feira, dia 07/06 a aluna Maria Eduarda Silva do 5A irá retornar as aulas presenciais. Lembre-se de colocar uma máscara extra na mochila."
  }

}
