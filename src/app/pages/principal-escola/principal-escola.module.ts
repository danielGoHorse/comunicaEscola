import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PrincipalEscolaPageRoutingModule } from './principal-escola-routing.module';

import { PrincipalEscolaPage } from './principal-escola.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PrincipalEscolaPageRoutingModule
  ],
  declarations: [PrincipalEscolaPage]
})
export class PrincipalEscolaPageModule {}
