import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PrincipalProfessorPageRoutingModule } from './principal-professor-routing.module';

import { PrincipalProfessorPage } from './principal-professor.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PrincipalProfessorPageRoutingModule
  ],
  declarations: [PrincipalProfessorPage]
})
export class PrincipalProfessorPageModule {}
