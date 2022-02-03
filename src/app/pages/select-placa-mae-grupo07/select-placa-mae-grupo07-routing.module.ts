import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SelectPlacaMaeGrupo07Page } from './select-placa-mae-grupo07.page';

const routes: Routes = [
  {
    path: '',
    component: SelectPlacaMaeGrupo07Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SelectPlacaMaeGrupo07PageRoutingModule {}
