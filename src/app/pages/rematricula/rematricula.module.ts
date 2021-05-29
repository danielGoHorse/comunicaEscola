import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RematriculaPageRoutingModule } from './rematricula-routing.module';

import { RematriculaPage } from './rematricula.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RematriculaPageRoutingModule
  ],
  declarations: [RematriculaPage]
})
export class RematriculaPageModule {}
