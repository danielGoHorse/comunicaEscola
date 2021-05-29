import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },

  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'agenda',
    loadChildren: () => import('./pages/agenda/agenda.module').then( m => m.AgendaPageModule)
  },
  {
    path: 'boletim',
    loadChildren: () => import('./pages/boletim/boletim.module').then( m => m.BoletimPageModule)
  },
  {
    path: 'cursos-livres',
    loadChildren: () => import('./pages/cursos-livres/cursos-livres.module').then( m => m.CursosLivresPageModule)
  },
  {
    path: 'documentos',
    loadChildren: () => import('./pages/documentos/documentos.module').then( m => m.DocumentosPageModule)
  },
  {
    path: 'rematricula',
    loadChildren: () => import('./pages/rematricula/rematricula.module').then( m => m.RematriculaPageModule)
  },
  {
    path: 'transporte',
    loadChildren: () => import('./pages/transporte/transporte.module').then( m => m.TransportePageModule)
  },
  {
    path: 'cadastro-acesso',
    loadChildren: () => import('./pages/cadastro-acesso/cadastro-acesso.module').then( m => m.CadastroAcessoPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
