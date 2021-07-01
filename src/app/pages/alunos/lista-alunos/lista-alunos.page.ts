/* eslint-disable @angular-eslint/use-lifecycle-interface */
import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Aluno } from 'src/app/interfaces/aluno';
// import { Aluno } from 'src/app/model/aluno';
import { AlunoService } from 'src/app/services/aluno.service';

@Component({
  selector: 'app-lista-alunos',
  templateUrl: './lista-alunos.page.html',
  styleUrls: ['./lista-alunos.page.scss'],
})
export class ListaAlunosPage implements OnInit {

  private alunos = new Array<Aluno>();
  private alunosSubscription: Subscription;

  constructor(private alunosServices: AlunoService) {
    this.alunosSubscription = this.alunosServices.getAlunos().subscribe(data =>{
      this.alunos = data;
    });
   }

  ngOnInit() {
  }

  ngOnDestroy(){
    this.alunosSubscription.unsubscribe();
  }

}
