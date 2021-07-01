import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './guards/auth.guard';
import { LoginGuard } from './guards/login.guard';

const routes: Routes = [
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then( m => m.LoginPageModule),
    canActivate: [LoginGuard]
  },
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },

  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'agenda',
    loadChildren: () => import('./pages/agenda/agenda.module').then( m => m.AgendaPageModule),
    canActivate: [AuthGuard]
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
  },
  {
    path: 'principal-professor',
    loadChildren: () => import('./pages/principal-professor/principal-professor.module').then( m => m.PrincipalProfessorPageModule)
  },
  {
    path: 'principal-pais',
    loadChildren: () => import('./pages/principal-pais/principal-pais.module').then( m => m.PrincipalPaisPageModule)
  },
  {
    path: 'principal-alunos',
    loadChildren: () => import('./pages/principal-alunos/principal-alunos.module').then( m => m.PrincipalAlunosPageModule)
  },
  {
    path: 'principal-escola',
    loadChildren: () => import('./pages/principal-escola/principal-escola.module').then( m => m.PrincipalEscolaPageModule)
  },
  {
    path: 'lista-alunos',
    loadChildren: () => import('./pages/alunos/lista-alunos/lista-alunos.module').then( m => m.ListaAlunosPageModule)
  },
  {
    path: 'cadastro-alunos',
    loadChildren: () => import('./pages/alunos/cadastro-alunos/cadastro-alunos.module').then( m => m.CadastroAlunosPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
