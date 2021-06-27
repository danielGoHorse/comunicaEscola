import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PrincipalAlunosPageRoutingModule } from './principal-alunos-routing.module';

import { PrincipalAlunosPage } from './principal-alunos.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PrincipalAlunosPageRoutingModule
  ],
  declarations: [PrincipalAlunosPage]
})
export class PrincipalAlunosPageModule {}
