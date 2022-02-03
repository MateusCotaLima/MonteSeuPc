import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SelectProcessadorGrupo07Page } from './select-processador-grupo07.page';

const routes: Routes = [
  {
    path: '',
    component: SelectProcessadorGrupo07Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SelectProcessadorGrupo07PageRoutingModule {}
