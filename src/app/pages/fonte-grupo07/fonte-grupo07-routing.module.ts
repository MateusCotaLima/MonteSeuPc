import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FonteGrupo07Page } from './fonte-grupo07.page';

const routes: Routes = [
  {
    path: '',
    component: FonteGrupo07Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FonteGrupo07PageRoutingModule {}
