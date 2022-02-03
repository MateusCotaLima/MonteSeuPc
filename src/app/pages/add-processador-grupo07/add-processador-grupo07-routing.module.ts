import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddProcessadorGrupo07Page } from './add-processador-grupo07.page';

const routes: Routes = [
  {
    path: '',
    component: AddProcessadorGrupo07Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AddProcessadorGrupo07PageRoutingModule {}
