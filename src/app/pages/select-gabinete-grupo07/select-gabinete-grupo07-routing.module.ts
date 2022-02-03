import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SelectGabineteGrupo07Page } from './select-gabinete-grupo07.page';

const routes: Routes = [
  {
    path: '',
    component: SelectGabineteGrupo07Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SelectGabineteGrupo07PageRoutingModule {}
