import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'principal',
    pathMatch: 'full'
  },
  {
    path: 'inicio',
    loadChildren: () => import('./pages/inicio-grupo07/inicio-grupo07.module').then( m => m.InicioPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/login-grupo07/login-grupo07.module').then( m => m.LoginPageModule)
  },
  {
    path: 'funcionario',
    loadChildren: () => import('./pages/funcionario-grupo07/funcionario-grupo07.module').then( m => m.FuncionarioPageModule)
  },
  {
    path: 'add-funcionario',
    loadChildren: () => import('./pages/add-funcionario-grupo07/add-funcionario-grupo07.module').then( m => m.AddFuncionarioPageModule)
  },
  {
    path: 'home',
    loadChildren: () => import('./pages/home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'principal',
    loadChildren: () => import('./pages/principal-grupo07/principal-grupo07.module').then( m => m.PrincipalGrupo07PageModule)
  },
  {
    path: 'cliente-home',
    loadChildren: () => import('./pages/cliente-home-grupo07/cliente-home-grupo07.module').then( m => m.ClienteHomeGrupo07PageModule)
  },
  {
    path: 'listar',
    loadChildren: () => import('./pages/listar-grupo07/listar-grupo07.module').then( m => m.ListarGrupo07PageModule)
  },
  {
    path: 'processador-grupo07',
    loadChildren: () => import('./pages/processador-grupo07/processador-grupo07.module').then( m => m.ProcessadorGrupo07PageModule)
  },
  {
    path: 'add-processador-grupo07',
    loadChildren: () => import('./pages/add-processador-grupo07/add-processador-grupo07.module').then( m => m.AddProcessadorGrupo07PageModule)
  },
  {
    path: 'add-processador-grupo07/:id',
    loadChildren: () => import('./pages/add-processador-grupo07/add-processador-grupo07.module').then( m => m.AddProcessadorGrupo07PageModule)
  },

  {
    path: 'placa-mae-grupo07',
    loadChildren: () => import('./pages/placa-mae-grupo07/placa-mae-grupo07.module').then( m => m.PlacaMaeGrupo07PageModule)
  },
  {
    path: 'add-placa-mae-grupo07',
    loadChildren: () => import('./pages/add-placa-mae-grupo07/add-placa-mae-grupo07.module').then( m => m.AddPlacaMaeGrupo07PageModule)
  },
    {
    path: 'add-placa-mae-grupo07/:id',
    loadChildren: () => import('./pages/add-placa-mae-grupo07/add-placa-mae-grupo07.module').then( m => m.AddPlacaMaeGrupo07PageModule)
  },

  {
    path: 'memoria-ram-grupo07',
    loadChildren: () => import('./pages/memoria-ram-grupo07/memoria-ram-grupo07.module').then( m => m.MemoriaRamGrupo07PageModule)
  },
  {
    path: 'add-memoria-ram-grupo07',
    loadChildren: () => import('./pages/add-memoria-ram-grupo07/add-memoria-ram-grupo07.module').then( m => m.AddMemoriaRamGrupo07PageModule)
  },
  {
    path: 'add-memoria-ram-grupo07/:id',
    loadChildren: () => import('./pages/add-memoria-ram-grupo07/add-memoria-ram-grupo07.module').then( m => m.AddMemoriaRamGrupo07PageModule)
  },

  {
    path: 'placa-de-video-grupo07',
    loadChildren: () => import('./pages/placa-de-video-grupo07/placa-de-video-grupo07.module').then( m => m.PlacaDeVideoGrupo07PageModule)
  },
  {
    path: 'add-placa-de-video-grupo07',
    loadChildren: () => import('./pages/add-placa-de-video-grupo07/add-placa-de-video-grupo07.module').then( m => m.AddPlacaDeVideoGrupo07PageModule)
  },
    {
    path: 'add-placa-de-video-grupo07/:id',
    loadChildren: () => import('./pages/add-placa-de-video-grupo07/add-placa-de-video-grupo07.module').then( m => m.AddPlacaDeVideoGrupo07PageModule)
  },
  {
    path: 'armazenamento-grupo07',
    loadChildren: () => import('./pages/armazenamento-grupo07/armazenamento-grupo07.module').then( m => m.ArmazenamentoGrupo07PageModule)
  },
  {
    path: 'fonte-grupo07',
    loadChildren: () => import('./pages/fonte-grupo07/fonte-grupo07.module').then( m => m.FonteGrupo07PageModule)
  },
  {
    path: 'gabinete-grupo07',
    loadChildren: () => import('./pages/gabinete-grupo07/gabinete-grupo07.module').then( m => m.GabineteGrupo07PageModule)
  },
  {
    path: 'add-gabinete-grupo07',
    loadChildren: () => import('./pages/add-gabinete-grupo07/add-gabinete-grupo07.module').then( m => m.AddGabineteGrupo07PageModule)
  },
  {
    path: 'add-gabinete-grupo07/:id',
    loadChildren: () => import('./pages/add-gabinete-grupo07/add-gabinete-grupo07.module').then( m => m.AddGabineteGrupo07PageModule)
  },
  {
    path: 'add-fonte-grupo07',
    loadChildren: () => import('./pages/add-fonte-grupo07/add-fonte-grupo07.module').then( m => m.AddFonteGrupo07PageModule)
  },
  {
    path: 'add-fonte-grupo07/:id',
    loadChildren: () => import('./pages/add-fonte-grupo07/add-fonte-grupo07.module').then( m => m.AddFonteGrupo07PageModule)
  },
  {
    path: 'add-armazenamento-grupo07',
    loadChildren: () => import('./pages/add-armazenamento-grupo07/add-armazenamento-grupo07.module').then( m => m.AddArmazenamentoGrupo07PageModule)
  },
  {
    path: 'add-armazenamento-grupo07/:id',
    loadChildren: () => import('./pages/add-armazenamento-grupo07/add-armazenamento-grupo07.module').then( m => m.AddArmazenamentoGrupo07PageModule)
  },
  {
    path: 'select-processador-grupo07',
    loadChildren: () => import('./pages/select-processador-grupo07/select-processador-grupo07.module').then( m => m.SelectProcessadorGrupo07PageModule)
  },
  {
    path: 'select-placa-mae-grupo07',
    loadChildren: () => import('./pages/select-placa-mae-grupo07/select-placa-mae-grupo07.module').then( m => m.SelectPlacaMaeGrupo07PageModule)
  },
  {
    path: 'select-placa-de-video-grupo07',
    loadChildren: () => import('./pages/select-placa-de-video-grupo07/select-placa-de-video-grupo07.module').then( m => m.SelectPlacaDeVideoGrupo07PageModule)
  },
  {
    path: 'select-gabinete-grupo07',
    loadChildren: () => import('./pages/select-gabinete-grupo07/select-gabinete-grupo07.module').then( m => m.SelectGabineteGrupo07PageModule)
  },
  {
    path: 'select-fonte-grupo07',
    loadChildren: () => import('./pages/select-fonte-grupo07/select-fonte-grupo07.module').then( m => m.SelectFonteGrupo07PageModule)
  },
  {
    path: 'select-armazenamento-grupo07',
    loadChildren: () => import('./pages/select-armazenamento-grupo07/select-armazenamento-grupo07.module').then( m => m.SelectArmazenamentoGrupo07PageModule)
  },
  {
    path: 'select-memoria-ram-grupo07',
    loadChildren: () => import('./pages/select-memoria-ram-grupo07/select-memoria-ram-grupo07.module').then( m => m.SelectMemoriaRamGrupo07PageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
