import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CadastroAcessoPageRoutingModule } from './cadastro-acesso-routing.module';

import { CadastroAcessoPage } from './cadastro-acesso.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CadastroAcessoPageRoutingModule
  ],
  declarations: [CadastroAcessoPage]
})
export class CadastroAcessoPageModule {}
