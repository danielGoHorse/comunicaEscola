import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CursosLivresPageRoutingModule } from './cursos-livres-routing.module';

import { CursosLivresPage } from './cursos-livres.page';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CursosLivresPageRoutingModule,
    NgxDatatableModule
  ],
  declarations: [CursosLivresPage]
})
export class CursosLivresPageModule {}
