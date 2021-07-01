/* eslint-disable prefer-const */
/* eslint-disable max-len */
/* eslint-disable @typescript-eslint/quotes */
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Aluno } from 'src/app/interfaces/aluno';

@Component({
  selector: 'app-agenda',
  templateUrl: './agenda.page.html',
  styleUrls: ['./agenda.page.scss'],
})
export class AgendaPage implements OnInit {

  aluno: Aluno;
  envioRecado: boolean;


  constructor(public router: Router) {
   }

  ngOnInit() {

  }


  segmentChanged(ev: any) {
    let param = ev.detail.value;
    this.envioRecado = false;
    if (param === 'gerais') {
      this.aluno.mensagem = "A partir de segunda-feira, dia 07/06 a aluna Maria Eduarda Silva do 5A irá retornar as aulas presenciais. Lembre-se de colocar uma máscara extra na mochila.";
    }
    if (param === 'ocorrencia') {
      this.aluno.mensagem = "Informamos que hoje, 15/06 a aluna Maria Eduarda praticou bullyng com a colega Silvia Costa. Pedimos que converse com sua filha. Dica: assistam juntos o filme 'O Mínimo para Viver', pode ajudar na conversa";
    }
    if (param === 'envio') {
      this.aluno.mensagem = null;
      this.envioRecado = true;
    }

  }

  cancelar(){
    this.router.navigate(["/agenda"]);
  }


}
