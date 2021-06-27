import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PrincipalPaisPage } from './principal-pais.page';

const routes: Routes = [
  {
    path: '',
    component: PrincipalPaisPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PrincipalPaisPageRoutingModule {}
