import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CadastroAlunosPage } from './cadastro-alunos.page';

const routes: Routes = [
  {
    path: '',
    component: CadastroAlunosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CadastroAlunosPageRoutingModule {}
