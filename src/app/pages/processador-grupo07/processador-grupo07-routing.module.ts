import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProcessadorGrupo07Page } from './processador-grupo07.page';

const routes: Routes = [
  {
    path: '',
    component: ProcessadorGrupo07Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProcessadorGrupo07PageRoutingModule {}
