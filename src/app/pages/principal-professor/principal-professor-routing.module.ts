import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PrincipalProfessorPage } from './principal-professor.page';

const routes: Routes = [
  {
    path: '',
    component: PrincipalProfessorPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PrincipalProfessorPageRoutingModule {}
