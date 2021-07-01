import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CadastroAlunosPageRoutingModule } from './cadastro-alunos-routing.module';

import { CadastroAlunosPage } from './cadastro-alunos.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CadastroAlunosPageRoutingModule
  ],
  declarations: [CadastroAlunosPage]
})
export class CadastroAlunosPageModule {}
