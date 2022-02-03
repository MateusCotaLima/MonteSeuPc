import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddArmazenamentoGrupo07Page } from './add-armazenamento-grupo07.page';

const routes: Routes = [
  {
    path: '',
    component: AddArmazenamentoGrupo07Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AddArmazenamentoGrupo07PageRoutingModule {}
