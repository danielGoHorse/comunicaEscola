import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PrincipalEscolaPage } from './principal-escola.page';

const routes: Routes = [
  {
    path: '',
    component: PrincipalEscolaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PrincipalEscolaPageRoutingModule {}
