import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SelectArmazenamentoGrupo07Page } from './select-armazenamento-grupo07.page';

const routes: Routes = [
  {
    path: '',
    component: SelectArmazenamentoGrupo07Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SelectArmazenamentoGrupo07PageRoutingModule {}
