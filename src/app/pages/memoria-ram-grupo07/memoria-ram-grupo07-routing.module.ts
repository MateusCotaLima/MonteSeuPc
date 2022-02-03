import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MemoriaRamGrupo07Page } from './memoria-ram-grupo07.page';

const routes: Routes = [
  {
    path: '',
    component: MemoriaRamGrupo07Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MemoriaRamGrupo07PageRoutingModule {}
