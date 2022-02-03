import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddGabineteGrupo07Page } from './add-gabinete-grupo07.page';

const routes: Routes = [
  {
    path: '',
    component: AddGabineteGrupo07Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AddGabineteGrupo07PageRoutingModule {}
