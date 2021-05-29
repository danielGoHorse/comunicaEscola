import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RematriculaPage } from './rematricula.page';

const routes: Routes = [
  {
    path: '',
    component: RematriculaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RematriculaPageRoutingModule {}
