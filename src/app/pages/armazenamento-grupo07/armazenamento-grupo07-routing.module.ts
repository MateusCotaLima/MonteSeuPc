import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ArmazenamentoGrupo07Page } from './armazenamento-grupo07.page';

const routes: Routes = [
  {
    path: '',
    component: ArmazenamentoGrupo07Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ArmazenamentoGrupo07PageRoutingModule {}
