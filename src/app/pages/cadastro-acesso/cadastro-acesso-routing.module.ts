import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CadastroAcessoPage } from './cadastro-acesso.page';

const routes: Routes = [
  {
    path: '',
    component: CadastroAcessoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CadastroAcessoPageRoutingModule {}
