import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PrincipalPaisPageRoutingModule } from './principal-pais-routing.module';

import { PrincipalPaisPage } from './principal-pais.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PrincipalPaisPageRoutingModule
  ],
  declarations: [PrincipalPaisPage]
})
export class PrincipalPaisPageModule {}
