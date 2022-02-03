import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SelectFonteGrupo07Page } from './select-fonte-grupo07.page';

const routes: Routes = [
  {
    path: '',
    component: SelectFonteGrupo07Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SelectFonteGrupo07PageRoutingModule {}
