import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PrincipalAlunosPage } from './principal-alunos.page';

const routes: Routes = [
  {
    path: '',
    component: PrincipalAlunosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PrincipalAlunosPageRoutingModule {}
