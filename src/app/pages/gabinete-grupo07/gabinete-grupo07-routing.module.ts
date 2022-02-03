import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GabineteGrupo07Page } from './gabinete-grupo07.page';

const routes: Routes = [
  {
    path: '',
    component: GabineteGrupo07Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GabineteGrupo07PageRoutingModule {}
