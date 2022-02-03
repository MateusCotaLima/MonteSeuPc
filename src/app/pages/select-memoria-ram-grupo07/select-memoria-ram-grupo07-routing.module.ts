import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SelectMemoriaRamGrupo07Page } from './select-memoria-ram-grupo07.page';

const routes: Routes = [
  {
    path: '',
    component: SelectMemoriaRamGrupo07Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SelectMemoriaRamGrupo07PageRoutingModule {}
