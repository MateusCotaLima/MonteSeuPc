import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListarGrupo07Page } from './listar-grupo07.page';

const routes: Routes = [
  {
    path: '',
    component: ListarGrupo07Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListarGrupo07PageRoutingModule {}
