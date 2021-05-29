import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CursosLivresPage } from './cursos-livres.page';

const routes: Routes = [
  {
    path: '',
    component: CursosLivresPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CursosLivresPageRoutingModule {}
