import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddMemoriaRamGrupo07Page } from './add-memoria-ram-grupo07.page';

const routes: Routes = [
  {
    path: '',
    component: AddMemoriaRamGrupo07Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AddMemoriaRamGrupo07PageRoutingModule {}
