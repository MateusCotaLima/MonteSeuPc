import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PlacaMaeGrupo07Page } from './placa-mae-grupo07.page';

const routes: Routes = [
  {
    path: '',
    component: PlacaMaeGrupo07Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PlacaMaeGrupo07PageRoutingModule {}
