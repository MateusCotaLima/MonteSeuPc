import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddFonteGrupo07Page } from './add-fonte-grupo07.page';

const routes: Routes = [
  {
    path: '',
    component: AddFonteGrupo07Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AddFonteGrupo07PageRoutingModule {}
