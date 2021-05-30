import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BoletimPageRoutingModule } from './boletim-routing.module';

import { BoletimPage } from './boletim.page';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BoletimPageRoutingModule,
    NgxDatatableModule
  ],
  declarations: [BoletimPage]
})
export class BoletimPageModule {}
